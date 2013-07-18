package com.puritytech.crawler.xs;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.net.MalformedURLException;
import java.net.URL;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Timer;
import java.util.TimerTask;
import java.util.logging.Logger;

import org.jsoup.Connection;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.puritytech.db.Database;
import com.puritytech.sql.utils.SqlHelper;



/**
 * @author khanhle
 * 
 */
public class XosoMBCrawler extends TimerTask {
	private final static int TIME_OUT = 40000;

	private static final String TABLE_TAG = "table";
	
	private Database db;
	private String url;
	private int category;
	private int loc;	// location
	private int numItem = 0;			// number of items per url
	private char masterSite;
	private String cookie;
	private String date = "";
	
	
	private final static String SEMICOLON = ";";

	private static final int VALID_XOSO_LENGTH = 27;
	
	long MILLISECS_PER_DAY = 24 * 60 * 60 * 1000;

	private Document doc;
	private static String lastestDate ="";
	private static final String ConfigFile ="config.txt";
	
	static boolean isFulldata = true;

	public XosoMBCrawler(String url, int category, int loc, char masterSt) {
		this.url = url;
		this.category = category;
		this.loc = loc;
		this.masterSite = masterSt;
		this.numItem = 0;
		date = "";
	}
	public XosoMBCrawler(String url, int category, int loc, char masterSt, String date) {
		this.url = url;
		this.category = category;
		this.loc = loc;
		this.masterSite = masterSt;
		this.numItem = 0;
		this.date = date;
	}
	public XosoMBCrawler() 
	{
		String url = "http://ketqua.net/xo-so-truyen-thong.php?ngay="; // tech

		Calendar cal = Calendar.getInstance();
		DateFormat standard = new SimpleDateFormat("yyyy-MM-dd");
		DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		
		String datestr = dateFormat.format(cal.getTime());
		
		this.category = Database.TECH;
		this.loc = Database.HN_LOC;
		this.masterSite = Database.MUA_CHUNG;
		this.numItem = 0;
		
		if(lastestDate=="")
		{
			
			GetLastestDateFromFile();
			try {
				Date date = dateFormat.parse(lastestDate);
				Date today = dateFormat.parse(datestr);
				long days = Math.round(today.getTime() - date.getTime())/MILLISECS_PER_DAY;
				System.out.println("diff days "+days);
				if(days>1){
					cal.add(Calendar.DATE, -((int)days -1));
					for(int i = 1; i<days;i++)
					{
						String tmp = dateFormat.format(cal.getTime());
						this.url = url+ tmp;
						this.date = standard.format(cal.getTime());
						System.out.println("this.date " +this.date);
						run();
						lastestDate = tmp;
						cal.add(Calendar.DATE,1);
						
					}
				}
				
				
			} catch (ParseException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			finally
			{
				SaveConfig();
			}
		}
			
		//for today
		this.url = url+datestr;
		this.date = standard.format(cal.getTime());

	}
	
	void SaveConfig()
	{
		PrintWriter writer;
		try {
			writer = new PrintWriter(ConfigFile+".bak");
			writer.println(lastestDate);
			writer.close();
			new File(ConfigFile).delete();
			new File(ConfigFile+".bak").renameTo(new File(ConfigFile));
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
	}
	void GetLastestDateFromFile()
	{
		try {
			BufferedReader reader = new BufferedReader(new FileReader(ConfigFile));
			try {
				String line = reader.readLine();
				lastestDate = line.trim();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public void startDB() {
		db = new Database();
		db.createConnection();
		db.createStatement();
	}
	boolean isRecordExisted(String date)
	{
		if(db==null)
		 {
			 return false;
		 }
		 try {
			 Statement st = db.getConnect().createStatement();
	         ResultSet res = st.executeQuery("SELECT * FROM xo_so_truyen_thong_mb WHERE date="+date);
	        
			if (!res.next()){
				return false;
			}
		 } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		 }
        return true;
	}
	private void createDOM() {
		try { 
//			Connection.Response res = Jsoup.connect(this.url).cookie("mc_cityMC", this.cookie).timeout(TIME_OUT).execute();
//			doc = res.parse();
			System.setProperty("http.proxyHost", "proxy.han.gameloft.org");
			System.setProperty("http.proxyPort", "3128");   
			doc = Jsoup.connect(this.url)
					.userAgent("Mozilla")
					.timeout(TIME_OUT).get();
			System.out.println("this.url" + this.url);
		//	doc = Jsoup.parse(new URL(url).openStream(), "UTF-8", url);
			System.out.println("content start >>>");
			System.out.println(doc.html());
			System.out.println("content end >>>");
			doc.outputSettings().charset("UTF-8");
			
			
			System.out.println("Create DOM from URL completely...");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
			System.out
					.println("Failed to create  DOM from URL. Maybe timeout...");
		}

	}

	private Element getItemWrap(String tag, int index) {
		Elements els = doc.select(tag);
		Element xsEle = null;
		xsEle = els.first();
//		System.out.println(els.first().html());
		//System.exit(1);
//		for (int i = 0; i < els.size(); i++) {
//			Element e = els.get(i);
//			
//			if(e.html().contains("Giải đặc biệt")) {
//				System.out.println(e.html());
//				System.exit(1);
//				return e;
//			}
//			
//		}
		return xsEle;
	}
	
	static boolean tryParseInt(String value)  
	{  
	     try  
	     {  
	         Integer.parseInt(value);  
	         return true;  
	      } catch(NumberFormatException nfe)  
	      {  
	          return false;  
	      }  
	}
	
	public static String toJsonXoso(String prizes) {
		StringBuffer sb = new StringBuffer();
		sb.append('{');
		int counter = 0;
		String[] list = prizes.split(SEMICOLON);
		if(list.length != VALID_XOSO_LENGTH) {
			System.err.println("failed to parse ket qua xo so");
			return null;
		}
		for(int i=0;i<list.length;i++) {
			counter++;
			switch(counter) {
				case 1: // DB
					sb.append("\"A\" : ");
					sb.append("\"" + list[i] + "\"");
					if(tryParseInt( list[i]))
					{
						isFulldata =true;
					}
					
					break;
				case 2: // DB
					sb.append("\"B\" : ");
					sb.append("\"" + list[i] + "\"");
					break;
				case 3: // DB
					sb.append("\"C\" : ");
					sb.append("\"" + list[i] + ";" + list[++i] +"\"");
					break;
				case 4: // DB
					sb.append("\"D\" : ");
					sb.append("\"" + list[i] + ";" + list[++i] +";" + list[++i] +";" + list[++i] +";" + list[++i] +";" + list[++i] +"\"");
					break;
				case 5: // DB
					sb.append("\"E\" : ");
					sb.append("\"" + list[i] + ";" + list[++i] +";" + list[++i] +";" + list[++i] +"\"");
					break;
				case 6: // DB
					sb.append("\"F\" : ");
					sb.append("\"" + list[i] + ";" + list[++i] +";" + list[++i] +";" + list[++i] +";" + list[++i] +";" + list[++i] +"\"");
					break;
					
				case 7: // DB
					sb.append("\"G\" : ");
					sb.append("\"" + list[i] + ";" + list[++i] +";" + list[++i] +"\"");
					break;
				case 8: // DB
					sb.append("\"H\" : ");
					sb.append("\"" + list[i] + ";" + list[++i] +";" + list[++i] +";" + list[++i] +"\"");
					break;
				default: 
					break;
			}
			System.out.println("counter= " + counter);
			if(counter != 8) {
				sb.append(",");
			}
			
		}
		sb.append("}");
		return sb.toString();
	}
	
	
	
	public String insertXosoSql(String date, String data) {
//		data = data.replaceAll("\"", "x");
//		data = data.replaceAll("x", "\\\"");
		String sql ="";
		if(!db.CheckRecordExisted(date)){
			sql= "insert into xo_so_truyen_thong_mb (date, result_json) values " +
				"(\"" + date + "\", \"" + data + 
				"\")";
		}
		else
		{
			sql = "UPDATE xo_so_truyen_thong_mb SET result_json='"+data+"' WHERE date='"+date+"'";
		}
		System.out.println(sql);
		try {
			db.createPreparedStatement(date, data);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return sql;
	}

	private final void extract(Element e) {
		StringBuffer sbPrize = new StringBuffer();
		
		Elements trEles = e.getElementsByTag("tr");
		int size = trEles.size();
		for(int i=0;i<size;i++) {
			Elements pEles = trEles.get(i).select("td.f2");
			if(pEles!= null && !pEles.isEmpty()) {
//				System.out.println(">>> start");
				for(Element numE : pEles) {
					String aPrize = numE.html().trim() + ";";
//					System.out.print(numE.html().trim() + " ");
					sbPrize.append(aPrize);
				}
//				System.out.println(">>> end");
			}
			
		}
		String ret = toJsonXoso(sbPrize.toString());
		if(ret != null) {
			System.out.println(ret);
			String sql = insertXosoSql(date, ret);
			
//			try{
//				
//				this.db.insertToProduct(sql);
////				System.out.println("inserted okKKKKKKKKKKKKK");
//			}catch(Exception ex){
//				System.err.println("cannot insert to db");
//				ex.printStackTrace();
//			}
		}else {
			System.err.println("error to get ket qua xoso");
		}
		
//		System.out.println(sbPrize.toString());
//		if(true) {
//			return;
//		}
//		Element xsTbl = e.getElementsByTag(TABLE_TAG);
		if(e.attr("class").contains("list-rands")) {
//			System.out.println("---------------------------------------------");
			numItem++;
			//http://jsoup.org/cookbook/extracting-data/selector-syntax
			
			String title = e.select("div.titledeals2 > h3").text();
			String imgUrl = e.select("div.v6ItemHotImg > a[href] > img[src]").attr("src");
			String refLink = e.select("div.v6ItemHotImg > a[href]").attr("href");
			String soldPrice = e.select("div.v6TopBorder > div > div.v6ItemHotPriceSale").text();
			String originalPrice = e.select("div.v6TopBorder > div > div.v6ItemPriceOld").text();
			String desc = getProductDecs(refLink);
			if(desc==null){
				desc = "";
			}
			
			soldPrice = SqlHelper.filterPrice(soldPrice);
			originalPrice = SqlHelper.filterPrice(originalPrice);
			
//			System.out.println("Title: " + title);
//			System.out.println("Description: " + desc);
//			System.out.println("href: " + refLink);
//			System.out.println("image thumbnail: " + imgUrl);
//			System.out.println("Sale Price: " + soldPrice);
//			System.out.println("Old price: " + originalPrice);
			
			String sql = createProductSql(category, loc, title, desc, imgUrl, refLink, soldPrice, originalPrice, masterSite);
			
//			System.out.println(sql);
			try{
				this.db.insertToProduct(sql);
			}catch(Exception ex){
//				Logger.log("Cannot insert data");
//				System.err.println("Cannot insert data");
			}
//			System.out.println("---------------------------------------------");
		}
	}
	
	private String getProductDecs(String url) {
		String desc = null;
		try {
			Connection.Response res = Jsoup.connect(url).cookie("mc_cityMC", this.cookie).timeout(TIME_OUT).execute();
			Document _doc = res.parse();
			   
			_doc.outputSettings().charset("UTF-8");
			desc = _doc.select("div.main_view > div.main-boxcontFull > div.contents > div > p").text();
		} catch (MalformedURLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		if(desc!=null) {
			return SqlHelper.escapeSQL(desc);
		}
		
		return desc;
	}

	private String createProductSql(int catId, int locId, String title, String desc, 
			String imgUrl, String refLink, String soldPrice, 
			String originalPrice, char masterSite) {
		
		String sql = "INSERT INTO PRODUCT (PRODUCT_CATEGORY_ID, PRODUCT_LOCATION_ID, PRODUCT_TITLE, " +
				"PRODUCT_SHORT_DESC, PRODUCT_IMAGE_URL, REFERENCE_URL, " +
				" SOLD_PRICE, ORIGINAL_PRICE, CREATED_TIME, MASTER_SITE) VALUES " +
				"(" + catId + ", " + 
				locId + ", \"" + 
				SqlHelper.escapeSQL(title) + "\", \"" + 
				desc + "\", \"" + 
				SqlHelper.escapeSQL(imgUrl) + "\", \"" + 
				SqlHelper.escapeSQL(refLink) + "\", \"" + 
				soldPrice + "\", \"" + 
				originalPrice + "\", \"" + 
				Database.getDateTime() + "\", " +
				"'" + masterSite + "'" +
				")";
		return sql;
	}
	
	private void getListItems() {
		String tag = "div#ketqua > div.bo9";
		Element xsEle = getItemWrap(tag, 0);
		if(xsEle != null) {
			extract(xsEle);
		}else {
			System.err.println("xsEle NULL, failed to get data from: " + url);
		}
//		if (mWrp != null) {
//			int numChild = mWrp.children().size();
//			System.out.println("size tables: " + numChild);
////			for (int i = 0; i < numChild; i++) {
////				Element e = mWrp.child(i);
////				extract(e);
////			}
//		}

	}
	
	public void Processing()
	{
		try {
			createDOM();
		
			System.out.println("Starting crawler...");
	
			getListItems();
	
			System.out.println("Finished crawler...");
			
			
//			System.out.println("------------------------------------------");
			System.out.println("HAVE INSERTED " + this.numItem + " INTO DB");
		}catch(Exception ex) {
			ex.printStackTrace();
		}
		
	}
	public void run() {
		isFulldata = false;
		while(!isFulldata){
			startDB();
			Processing();
			stopDB();
			if(isFulldata)
			{
				Calendar cal = Calendar.getInstance();
				DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
				lastestDate =dateFormat.format(cal.getTime());
				SaveConfig();	
			}
			try {
				Thread.sleep(5000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
	
	public void stopDB() {
		db.close();
	}
	
	

	/**
	 * @return the cookie
	 */
	public String getCookie() {
		return cookie;
	}

	/**
	 * @param cookie the cookie to set
	 */
	public void setCookie(String cookie) {
		this.cookie = cookie;
	}
	
	

	/**
	 * @return the db
	 */
	public Database getDb() {
		return db;
	}

	/**
	 * @param db the db to set
	 */
	public void setDb(Database db) {
		this.db = db;
	}

	/**
	 * @return the url
	 */
	public String getUrl() {
		return url;
	}

	/**
	 * @param url the url to set
	 */
	public void setUrl(String url) {
		this.url = url;
	}

	/**
	 * @return the category
	 */
	public int getCategory() {
		return category;
	}

	/**
	 * @param category the category to set
	 */
	public void setCategory(int category) {
		this.category = category;
	}

	/**
	 * @return the loc
	 */
	public int getLoc() {
		return loc;
	}

	/**
	 * @param loc the loc to set
	 */
	public void setLoc(int loc) {
		this.loc = loc;
	}

	/**
	 * @return the numItem
	 */
	public int getNumItem() {
		return numItem;
	}

	/**
	 * @param numItem the numItem to set
	 */
	public void setNumItem(int numItem) {
		this.numItem = numItem;
	}

	/**
	 * @return the masterSite
	 */
	public char getMasterSite() {
		return masterSite;
	}

	/**
	 * @param masterSite the masterSite to set
	 */
	public void setMasterSite(char masterSite) {
		this.masterSite = masterSite;
	}

	/**
	 * @return the doc
	 */
	public Document getDoc() {
		return doc;
	}

	/**
	 * @param doc the doc to set
	 */
	public void setDoc(Document doc) {
		this.doc = doc;
	}

	/**
	 * @param args
	 * @throws MalformedURLException
	 */
	public static void main(String[] args) throws MalformedURLException {
		// TODO Auto-generated method stub
		
		
			Timer timer= new Timer();
	        Calendar date = Calendar.getInstance();
	        
	        date.set(Calendar.HOUR, 6);
	        date.set(Calendar.AM_PM, Calendar.PM);
	        date.set(Calendar.MINUTE, 0);
	        date.set(Calendar.SECOND, 0);
	        date.set(Calendar.MILLISECOND, 0);
	    //    System.out.println("StartTime " + date.getTime());
	        timer.schedule(
	          new XosoMBCrawler(),
	          date.getTime(),
	          1000 * 60 * 60 * 24
	        );
	    
	}

}
