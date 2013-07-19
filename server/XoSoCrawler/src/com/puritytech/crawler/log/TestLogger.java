package com.puritytech.crawler.log;

import org.apache.log4j.Logger;

public class TestLogger {

	private static final Logger logger = new IXLogger()
			.getDefaultLogger(TestLogger.class.getName());

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		logger.debug("debuging");
		logger.info("info");
		logger.warn("warning");
		logger.error("error");
	}

}

