/**
 * 
 */
package com.puritytech.crawler.xs;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.apache.log4j.Logger;

import com.puritytech.crawler.log.IXLogger;
import com.puritytech.db.Database;

/**
 * @author KHANH
 * 
 */
public class XoSoStats {
	private static final Logger logger = new IXLogger()
			.getDefaultLogger(XosoMBCrawler.class.getName());
	private static final int DAY_7 = -7;
	private static final int DAY_30 = -30;
	private static final int DAY_90 = -90;
	
	/**
	 * Date format
	 */
	private final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
	private final Calendar calendar = Calendar.getInstance();
	
	
	private Database db;
	private String currentDate = null; // current date
	private String date7Before = null; // date before 7 days
	private String date30Before = null; // date before 30 days
	private String date90Before = null; // date before 90 days
	private Date date = null;
	

	public XoSoStats() {
		initDate();
	}

	public XoSoStats(String currentDate) {
		this.currentDate = currentDate;
	}
	
	private void initDate() {
		date = new Date();
		this.currentDate = dateFormat.format(date);
		
		
		calendar.add(Calendar.DAY_OF_MONTH, DAY_7);
		this.date7Before = dateFormat.format(calendar.getTime());
		calendar.add(Calendar.DAY_OF_MONTH, (0-DAY_7));
		
		calendar.add(Calendar.DAY_OF_MONTH, DAY_30);
		this.date30Before = dateFormat.format(calendar.getTime());
		calendar.add(Calendar.DAY_OF_MONTH, (0-DAY_30));
		
		calendar.add(Calendar.DAY_OF_MONTH, DAY_90);
		this.date90Before = dateFormat.format(calendar.getTime());
		calendar.add(Calendar.DAY_OF_MONTH, (0-DAY_90));
		
		
		logger.info("current date: " + this.currentDate);
		logger.info("7 day: " + this.date7Before);
		logger.info("30 day: " + this.date30Before);
		logger.info("90 day: " + this.date90Before);
	}

	public static String getDate7(String currentDate) {
		String date7 = null;
		return date7;
	}

	public void startDB() {
		db = new Database();
		db.createConnection();
		db.createStatement();
	}

	public void stopDB() {
		
		db.close();
	}

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		XoSoStats xs = new XoSoStats();
		xs.startDB();
		xs.stopDB();
	}

}
