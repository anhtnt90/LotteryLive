package com.k53ca.lotterylive.utils;

import android.content.Context;
import android.content.res.Configuration;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;

import com.k53ca.lotterylive.R;

public class Utils {

	public static void replaceFragment(FragmentManager fragmentManager,
			Fragment f, Bundle bundle, String tag) {
		try {
			if (f != null) {
				FragmentTransaction transaction = fragmentManager
						.beginTransaction();
				f.setArguments(bundle);
				// for (int i = 0; i < fragmentManager.getBackStackEntryCount();
				// ++i) {
				// fragmentManager.popBackStack();
				// }
				transaction.replace(R.id.main_rl_rootfrag, f, tag);
				// transaction.addToBackStack(null);
				transaction.commit();
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static boolean isTablet(Context context) {
		return (context.getResources().getConfiguration().screenLayout & Configuration.SCREENLAYOUT_SIZE_MASK) >= Configuration.SCREENLAYOUT_SIZE_LARGE;
	}
}
