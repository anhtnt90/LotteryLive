/**
 * 
 */
package com.puritytech.db;

/**
 * @author KHANH
 *
 */


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.log4j.Logger;

import com.mysql.jdbc.PreparedStatement;
import com.puritytech.crawler.log.IXLogger;
import com.puritytech.crawler.xs.XosoMBCrawler;

/**
 * @author khanhle
 * 
 */
public class Database {
	private static final Logger logger = new IXLogger().getLogger(Database.class.getName());
	
	// product category
	public final static int EAT_DRINK = 1;
	public final static int TRAVEL = 2;
	public final static int TECH = 3;
	public final static int OTHER = 4;

	// product location
	public final static int HN_LOC = 1;
	public final static int HCM_LOC = 2;
	public final static int OTHER_LOC = 3;
	
	// master site to be crawlered
	public final static char MUA_CHUNG = '1';
	public final static char HOT_DEAL = '2';
	public final static char CUNG_MUA = '3';
	public final static char RU_NHAU = '4';
	public final static char CUC_RE = '5';
	
	
	private String host;		// host name
	private String username; 	// username
	private String dbname;   	// db name
	private String password;	// password
	
	public String table_name = "xo_so_binh_dinh";
	
	private Connection connect;
	private Statement statement;
	private java.sql.PreparedStatement preparedStatement;
	private ResultSet resultSet;
	
	public Database() {
		host = "localhost";
		dbname = "xs";
		username = "root";
		password = "";
		logger.info("initialize Database");
	}
	
	
	/**
	 * Create Database with connection info
	 * @param host hostname
	 * @param dbname database name
	 * @param username username
	 * @param password password
	 */
	public Database(String host, String dbname, String username, String password) {
		this.host = host;
		this.dbname = dbname;
		this.username = username;
		this.password = password;
	}
	
	

	/**
	 * @return the connect
	 */
	public Connection getConnect() {
		return connect;
	}


	/**
	 * @param connect the connect to set
	 */
	public void setConnect(Connection connect) {
		this.connect = connect;
	}


	/**
	 * @return the statement
	 */
	public Statement getStatement() {
		return statement;
	}


	/**
	 * @param statement the statement to set
	 */
	public void setStatement(Statement statement) {
		this.statement = statement;
	}


	public void createConnection() {
		// This will load the MySQL driver, each DB has its own driver
		try {
			Class.forName("com.mysql.jdbc.Driver");
			// Setup the connection with the DB
			connect = DriverManager
					.getConnection("jdbc:mysql://" + this.host + "/" + this.dbname,this.username,this.password);
			
			logger.info("Successfully connect to: " + connect.toString());
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			logger.error(e.getMessage(), e);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			logger.error(e.getMessage(), e);
		}

	}

	public void createStatement() {
		try {
			// Statements allow to issue SQL queries to the database
			statement = connect.createStatement();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			logger.error(e.getMessage(), e);
		}
	}

	public void createPreparedStatement(String date, String data) throws SQLException {
		// PreparedStatements can use variables and are more efficient
		preparedStatement = connect
				.prepareStatement("insert into "+table_name+" (date, result_json) values (?, ?)");
		// "myuser, webpage, datum, summery, COMMENTS from FEEDBACK.COMMENTS");
		// Parameters start with 1
		preparedStatement.setString(1, date);
		preparedStatement.setString(2, data);
		
		
		preparedStatement.executeUpdate();

//		preparedStatement = connect
//				.prepareStatement("SELECT myuser, webpage, datum, summery, COMMENTS from FEEDBACK.COMMENTS");
//		resultSet = preparedStatement.executeQuery();
	}
	
	public void executeQuery(String query) throws SQLException
	{
		preparedStatement = connect.prepareStatement(query);
		preparedStatement.executeUpdate();
	}
	
	public boolean insertToProduct(String sql) {
		try {
			statement.executeUpdate(sql);
			return true;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			logger.error(e.getMessage(), e);
		}
		return false;
		
	}
	
	public boolean CheckRecordExisted(String date)
	{
		try {
			 Statement st = connect.createStatement();
	         ResultSet res = st.executeQuery("SELECT * FROM "+table_name+" WHERE date="+date);
	        
			if (res.next()){
				return true;
			}
		 } catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		 }
		return false;
	}
	
	
	public boolean updateQuery(String sql) {
		try {
			
			return statement.execute(sql);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			logger.error(e.getMessage(), e);
		}
		return false;
		
	}

//	/**
//	 * @param resultSet
//	 * @throws SQLException
//	 */
//	private void writeResultSet(ResultSet resultSet) throws SQLException {
//		while (resultSet.next()) {
//			String user = resultSet.getString("myuser");
//			String website = resultSet.getString("webpage");
//			String summery = resultSet.getString("summery");
//			Date date = resultSet.getDate("datum");
//			String comment = resultSet.getString("comments");
//			System.out.println("User: " + user);
//			System.out.println("Website: " + website);
//			System.out.println("Summery: " + summery);
//			System.out.println("Date: " + date);
//			System.out.println("Comment: " + comment);
//		}
//	}

	/**
	 * @param resultSet
	 * @throws SQLException
	 */
	private void writeMetaData(ResultSet resultSet) throws SQLException {
		// Now get some metadata from the database
		// Result set get the result of the SQL query

		System.out.println("Table: " + resultSet.getMetaData().getTableName(1).toUpperCase());
		for (int i = 1; i <= resultSet.getMetaData().getColumnCount(); i++) {
			logger.debug("Column " + i + " "
					+ resultSet.getMetaData().getColumnName(i));
		}
	}
	
	public void testConnection() {
		// Result set get the result of the SQL query
	      try {
			resultSet = statement
			      .executeQuery("select * from "+table_name+"");
			writeMetaData(resultSet);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			logger.error(e.getMessage(), e);
		}
	      
	}

	public void close() {
		// close the resultSet
		try {
			if (resultSet != null) {
				resultSet.close();
			}

			if (statement != null) {
				statement.close();
			}

			if(preparedStatement != null) {
				preparedStatement.close();
			}
			
			if (connect != null) {
				connect.close();
			}
		} catch (Exception e) {
			logger.error(e.getMessage(), e);
		}
	}
	
	public final static String getDateTime() {
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		Date date = new Date();
		
		return dateFormat.format(date);
	}

	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Database db = new Database();
		db.createConnection();
		db.createStatement();
		db.testConnection();
		db.close();
		
		logger.debug(Database.getDateTime());
		
	}

}
