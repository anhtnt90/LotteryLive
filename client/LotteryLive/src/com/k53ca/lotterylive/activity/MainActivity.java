package com.k53ca.lotterylive.activity;

import android.app.DatePickerDialog.OnDateSetListener;
import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.DatePicker;
import android.widget.TextView;

import com.k53ca.lotterylive.R;
import com.k53ca.lotterylive.utils.Constants.TYPE_XOSO;
import com.k53ca.lotterylive.utils.Utils;

public class MainActivity extends FragmentActivity implements OnClickListener,
		OnDateSetListener {

	private TextView tvPickDate;
	Button btnMienBac, btnMienTrung, btnMienNam;
	int tabSelect;
	int saveTab;

	private KetQuaXoSoFragment mienBacFragment;
	private DatePickerFragment datePickerFragment;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		if (!Utils.isTablet(getApplicationContext())) {
			setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
			setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_NOSENSOR);

		}
		tvPickDate = (TextView) findViewById(R.id.tvDatePick);
		btnMienBac = (Button) findViewById(R.id.main_btn_first);
		btnMienTrung = (Button) findViewById(R.id.main_btn_second);
		btnMienNam = (Button) findViewById(R.id.main_btn_third);

		tvPickDate.setOnClickListener(this);
		btnMienBac.setOnClickListener(this);
		btnMienTrung.setOnClickListener(this);
		btnMienNam.setOnClickListener(this);
		datePickerFragment = new DatePickerFragment()
				.setOnDateSetListener(this);
		initFragment();
	}

	@Override
	protected void onRestoreInstanceState(Bundle savedInstanceState) {
		super.onRestoreInstanceState(savedInstanceState);
		saveTab = savedInstanceState.getInt("tab_select");
		if (saveTab == 1) {
			setHomeSelect();
		} else if (saveTab == 2) {
			setScrToolSelect();
		} else if (saveTab == 3) {
			setAboutSelect();
		}
	}

	@Override
	public void onClick(View v) {
		switch (v.getId()) {
		case R.id.main_btn_first:
			setHomeSelect();
			// Initialize only one time
			if (mienBacFragment == null) {
				mienBacFragment = KetQuaXoSoFragment.newInstance(
						TYPE_XOSO.MIEN_BAC, "2013-07-03");
			}
			Utils.replaceFragment(getSupportFragmentManager(), mienBacFragment,
					null, "home");
			break;
		case R.id.main_btn_second:
			if (tabSelect == 2) {
				return;
			}
			setScrToolSelect();
			Utils.replaceFragment(getSupportFragmentManager(),
					KetQuaXoSoFragment.newInstance(TYPE_XOSO.MIEN_TRUNG,
							"2011-07-03"), null, "scr");
			break;
		case R.id.main_btn_third:
			setAboutSelect();
			Utils.replaceFragment(getSupportFragmentManager(),
					KetQuaXoSoFragment.newInstance(TYPE_XOSO.MIEN_NAM,
							"2011-07-03"), null, "about");
			break;
		case R.id.tvDatePick: {
			datePickerFragment.show(getSupportFragmentManager(), null);
			break;
		}
		}
	}

	@Override
	public void onBackPressed() {
		super.onBackPressed();
		finish();
	}

	private void initFragment() {
		// Fragment homeFragment = new MienBacFragment();
		// Utils.replaceFragment(getSupportFragmentManager(), homeFragment,
		// null,
		// "home");
		// Utils.replaceFragment(getSupportFragmentManager(), KetQuaXoSoFragment
		// .newInstance(TYPE_XOSO.MIEN_BAC, "2011-07-03"), null, "home");
		btnMienBac.performClick();
	}

	private void setHomeSelect() {
		tabSelect = 1;
		btnMienBac.setBackgroundResource(R.drawable.tabbar_select);
		btnMienTrung.setBackgroundResource(R.drawable.tabbar_unselect);
		btnMienNam.setBackgroundResource(R.drawable.tabbar_unselect);
	}

	private void setScrToolSelect() {
		tabSelect = 2;
		btnMienBac.setBackgroundResource(R.drawable.tabbar_unselect);
		btnMienTrung.setBackgroundResource(R.drawable.tabbar_select);
		btnMienNam.setBackgroundResource(R.drawable.tabbar_unselect);
	}

	private void setAboutSelect() {
		tabSelect = 3;
		btnMienBac.setBackgroundResource(R.drawable.tabbar_unselect);
		btnMienTrung.setBackgroundResource(R.drawable.tabbar_unselect);
		btnMienNam.setBackgroundResource(R.drawable.tabbar_select);
	}

	@Override
	public void onDateSet(DatePicker view, int year, int monthOfYear,
			int dayOfMonth) {
		Log.i("onDateSet", String.format("year: %d, month: %02d, day: %02d",
				year, monthOfYear + 1, dayOfMonth));
		if (tabSelect == 1) {
			mienBacFragment.reloadKetQua(String.format("%d-%02d-%02d", year,
					monthOfYear + 1, dayOfMonth));
		}
	}

}
