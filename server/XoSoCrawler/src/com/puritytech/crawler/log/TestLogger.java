package com.puritytech.crawler.log;

import java.util.Timer;
import java.util.TimerTask;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;

public class TestLogger {

	private static final Logger logger = new IXLogger()
			.getDefaultLogger(TestLogger.class.getName());

	public static class RemindTask extends TimerTask {
	    public void run() {
	      System.out.println(" Hello World!");
	    }
//	    public static void main(String[] args){
//	       Timer timer = new Timer();
//	       timer.schedule(new RemindTask(), 3000,3000);
//	    }
	  }
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		logger.debug("debuging");
		logger.info("info");
		logger.warn("warning");
		logger.error("error");
		
		Timer timer = new Timer();
		timer.schedule(new RemindTask(), 100, 3000);
		
		Runnable helloRunnable = new Runnable() {
		    public void run() {
		        System.out.println("Hello world by ScheduledExecutorService");
		    }
		};

		ScheduledExecutorService executor = Executors.newScheduledThreadPool(1);
		executor.scheduleAtFixedRate(helloRunnable, 100, 3000, TimeUnit.MILLISECONDS);
		
		
		for(int i=0;i<100;i++) {
			System.out.println("hello");
			if(i==50) {
				timer.cancel();
				executor.shutdown();
				System.out.println("shutdown timer and executor");
			}
			try {
				Thread.sleep(500);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		
		
	}

}

