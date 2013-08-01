package com.puritytech.crawler.log;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

import org.apache.log4j.Appender;
import org.apache.log4j.Logger;
import org.apache.log4j.PatternLayout;
import org.apache.log4j.Priority;
import org.apache.log4j.PropertyConfigurator;


/**
 * An encapsulation for logging on Crawler
 * 
 * @author KHANH
 */
public class IXLogger {

	private static Logger crawlerLogger = null;
	private PatternLayout layout;
	private String systemPath = "crawler.log";
	private String fileToSave;
	private String configPath;
	private static int logLvl = 1;
	public static final int DEFAULT_LOGLVL = 4;

	public static final String[] LIST_LELVL_LOG = new String[] { "Debug",
			"Info", "Warning", "Error" };

	public Logger getDefaultLogger(String name) {
		setLogLvl(DEFAULT_LOGLVL);
		initLogger(name);
		return crawlerLogger;
	}// end getDefaultLogger

	public Logger getLogger(String name) {

		return Logger.getLogger(name);
	}// end getLogger

	private void initLogger(String name) {
		Properties prop = new Properties();
		try {
			prop.load(IXLogger.class.getClassLoader()
					.getResourceAsStream(
							"com/puritytech/crawler/log/log4j.properties"));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//		prop.put("USER_HOME", fileToSave); // overwrite
		PropertyConfigurator.configure(prop);
		crawlerLogger = Logger.getLogger(name);
//		crawlerLogger.info("bbbbb");
//		crawlerLogger.info("bbbbb");
//		crawlerLogger.info("bbbbb");
//		crawlerLogger.info("bbbbb");
		
//		crawlerLogger = Logger.getLogger(name);
//		try {
//			File temp = new File(systemPath);
//			if (!temp.exists())
//				temp.mkdir();
//
//			systemPath = temp.getCanonicalPath();
//			fileToSave = new StringBuilder(systemPath).append(File.separator)
//					.append("logs").toString();
//
//			layout = new PatternLayout(
//					"%d{HH:mm:ss.SSS} [%t] %c, line %L %x %p  :: %m%n");// %d{HH:mm:ss}
//																		// %-5p
//																		// [%t]
//																		// %c{2}
//																		// %x:
//																		// %n -
//																		// %m%n
//			// error level
//			DatedFileAppender errAppender = new DatedFileAppender(fileToSave,
//					"crawler_error.", ".log");
//			errAppender.setThreshold(Priority.ERROR);
//			errAppender.setLayout(layout);
//			
//			// warning
//			DatedFileAppender warnAppender = new DatedFileAppender(fileToSave,
//					"crawler_warn.", ".log");
//			warnAppender.setLayout(layout);
//			warnAppender.setThreshold(Priority.WARN);
//			
//			// info
//			DatedFileAppender infoAppender = new DatedFileAppender(fileToSave,
//					"crawler_info.", ".log");
//			infoAppender.setLayout(layout);
//			infoAppender.setThreshold(Priority.INFO);
//			
//			// debug
//			DatedFileAppender debugAppender = new DatedFileAppender(fileToSave,
//					"crawler_debug.", ".log");
//			debugAppender.setLayout(layout);
//			debugAppender.setThreshold(Priority.DEBUG);
//			
//			crawlerLogger.addAppender(errAppender);
//			crawlerLogger.addAppender(warnAppender);
//			crawlerLogger.addAppender(infoAppender);
//			crawlerLogger.addAppender(debugAppender);
//			
//			
//		
//			crawlerLogger.info("Test Log");

			logLvl = 5;
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			crawlerLogger.error(e.getMessage(), e);
//		}

	}// end initLogger

	public static int getLogLvl() {
		return logLvl;
	}// end

	public static void setLogLvl(int logLvl) {
		if (logLvl >= 0 && logLvl <= 3) {
			IXLogger.logLvl = logLvl;
		}
	}// end setLogLvl

}