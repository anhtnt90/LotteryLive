package com.k53ca.lotterylive.activity;

import java.util.ArrayList;
import java.util.List;

/**
 * 
 */

/**
 * @author KHANH
 * 
 */
public class HeadTailStatis {
	public static final int MAX_HEAD = 10; // head: 0 1 2 3 4 5 6 7 8 9
	public static final int MAX_TAIL = MAX_HEAD;
	public static final int UN_RECOGNITION = -1;
	private static final int MIN_NUMBER_LEN = 2;
	private static final char HEAD_TAIL_SEPERATOR = '|';
	private static final String ONLY_NUMBER_PATTERN = "[0-9]+";
	private static final String INVALID_NUMBER = "Invalid Lottery Number";
	private List<List<Integer>> ht = null;

	public HeadTailStatis() {
		ht = new ArrayList<List<Integer>>();

		for (int i = 0; i < MAX_HEAD; i++) {
			if (ht.add(initHT())) {
				System.out.println("ok to init for Head: " + i);
			} else {
				System.err.println("failed to init for Head: " + i);
			}
		}
	}

	/**
	 * Add Head|Tail to list
	 * 
	 * @param h
	 *            The Head
	 * @param t
	 *            The Tail
	 */
	private void addToHeadTailList(String h, String t) {
		int head = Integer.parseInt(h);
		int tail = Integer.parseInt(t);

		if (ht.get(head).add(tail)) {
			System.out.println("add to head|tail list ok, head:  " + h
					+ ", tail: " + t);
		} else {
			System.err.println("add to head|tail list FAILED, head:  " + h
					+ ", tail: " + t);
		}
	}

	/**
	 * Analysis and get the statistic from Lottery number list
	 * 
	 * @param numList
	 *            The Lottery number list
	 */
	public void getStatistic(List<String> numList) {
		for (String i : numList) {
			String tmp = "";
			try {
				tmp = parseHeadTail(i);
				addToHeadTailList("" + tmp.charAt(0), "" + tmp.charAt(2));
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				System.err.println("parse failed number: " + i);
			}
		}

	}

	/**
	 * Init Head|Tail
	 * 
	 * @return The List
	 */
	private static List<Integer> initHT() {
		List<Integer> l = new ArrayList<Integer>();
		// for(int j=0;j<MAX_TAIL;j++) {
		// l.add(UN_RECOGNITION);
		// }
		//
		return l;
	}

	/**
	 * Parse a string number to get Head|Tail
	 * 
	 * @param number
	 *            Lottery number
	 * @return The Head|Tail
	 * @throws Exception
	 *             If the input number is not valid Lottery number
	 */
	public static String parseHeadTail(String number) throws Exception {
		if (number == null || number.length() < MIN_NUMBER_LEN) {
			throw new Exception(INVALID_NUMBER);
		} else if (!number.matches(ONLY_NUMBER_PATTERN)) {
			throw new Exception(INVALID_NUMBER);
		}

		StringBuffer sb = new StringBuffer();
		int length = number.length();
		sb.append(number.charAt(length - 2)); // head
		sb.append(HEAD_TAIL_SEPERATOR);
		sb.append(number.charAt(length - 1)); // tail
		return sb.toString();
	}

	/**
	 * Print the Head|Tail statistic
	 */
	public void printHeadTail() {
		System.out.println("---------------------------------------");
		for (int i = 0; i < MAX_HEAD; i++) {
			List<Integer> l = ht.get(i);
			System.out.print("Head: " + i + ", tail: ");
			for (int j = 0; j < l.size(); j++) {
				System.out.print(l.get(j) + ",");
			}
			System.out.println();
		}
		System.out.println("---------------------------------------");
	}

	/**
	 * @return the ht
	 */
	public List<List<Integer>> getHt() {
		return ht;
	}

	/**
	 * @param ht
	 *            the ht to set
	 */
	public void setHt(List<List<Integer>> ht) {
		this.ht = ht;
	}

	/**
	 * @param args
	 */
	// public static void main(String[] args) {
	// // TODO Auto-generated method stub
	// HeadTailStatis ht = new HeadTailStatis();
	// List<String> numList = new ArrayList<String>();
	// numList.add("12344");
	// numList.add("123448");
	// numList.add("123443");
	// numList.add("123453");
	// numList.add("123413");
	// numList.add("123498");
	// numList.add("123430");
	// numList.add("123481");
	// numList.add("123423");
	// numList.add("123478");
	// numList.add("044v974");
	// numList.add("1267");
	// numList.add("887867");
	// numList.add("887807");
	// ht.getStatistic(numList);
	// ht.printHeadTail();
	// }

}
