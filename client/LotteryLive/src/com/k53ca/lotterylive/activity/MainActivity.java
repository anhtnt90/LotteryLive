package com.k53ca.lotterylive.activity;

import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.support.v4.app.FragmentActivity;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;

import com.k53ca.lotterylive.R;
import com.k53ca.lotterylive.utils.Constants.TYPE_XOSO;
import com.k53ca.lotterylive.utils.Utils;

public class MainActivity extends FragmentActivity implements OnClickListener {

	Button btnMienBac, btnMienTrung, btnMienNam;
	int tabSelect;
	int saveTab;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		if (!Utils.isTablet(getApplicationContext())) {
			setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
			setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_NOSENSOR);

		}
		btnMienBac = (Button) findViewById(R.id.main_btn_first);
		btnMienTrung = (Button) findViewById(R.id.main_btn_second);
		btnMienNam = (Button) findViewById(R.id.main_btn_third);
		btnMienBac.setOnClickListener(this);
		btnMienTrung.setOnClickListener(this);
		btnMienNam.setOnClickListener(this);
		initFragment();
	}

	@Override
	protected void onRestoreInstanceState(Bundle savedInstanceState) {
		super.onRestoreInstanceState(savedInstanceState);
		saveTab = savedInstanceState.getInt("tab_select");
		if (saveTab == 1) {
			setMienBacSelect();
		} else if (saveTab == 2) {
			setMienTrungSelect();
		} else if (saveTab == 3) {
			setMienNamSelect();
		}
	}

	@Override
	public void onClick(View v) {
		switch (v.getId()) {
		case R.id.main_btn_first:
			setMienBacSelect();
			Utils.replaceFragment(getSupportFragmentManager(),
					KetQuaXoSoFragment.newInstance(TYPE_XOSO.MIEN_BAC,
							"2011-07-03"), null, "bac");
			break;
		case R.id.main_btn_second:
			if (tabSelect == 2) {
				return;
			}
			setMienTrungSelect();
			Utils.replaceFragment(getSupportFragmentManager(),
					KetQuaXoSoFragment.newInstance(TYPE_XOSO.MIEN_TRUNG,
							"2011-07-03"), null, "trung");
			break;
		case R.id.main_btn_third:
			setMienNamSelect();
			Utils.replaceFragment(getSupportFragmentManager(),
					KetQuaXoSoFragment.newInstance(TYPE_XOSO.MIEN_NAM,
							"2011-07-03"), null, "nam");
			break;
		default:
			break;
		}
	}

	@Override
	public void onBackPressed() {
		super.onBackPressed();
		finish();
	}

	private void initFragment() {
		Utils.replaceFragment(getSupportFragmentManager(), KetQuaXoSoFragment
				.newInstance(TYPE_XOSO.MIEN_BAC, "2011-07-03"), null, "bac");
	}

	private void setMienBacSelect() {
		tabSelect = 1;
		btnMienBac.setBackgroundResource(R.drawable.tabbar_select);
		btnMienTrung.setBackgroundResource(R.drawable.tabbar_unselect);
		btnMienNam.setBackgroundResource(R.drawable.tabbar_unselect);
	}

	private void setMienTrungSelect() {
		tabSelect = 2;
		btnMienBac.setBackgroundResource(R.drawable.tabbar_unselect);
		btnMienTrung.setBackgroundResource(R.drawable.tabbar_select);
		btnMienNam.setBackgroundResource(R.drawable.tabbar_unselect);
	}

	private void setMienNamSelect() {
		tabSelect = 3;
		btnMienBac.setBackgroundResource(R.drawable.tabbar_unselect);
		btnMienTrung.setBackgroundResource(R.drawable.tabbar_unselect);
		btnMienNam.setBackgroundResource(R.drawable.tabbar_select);
	}

}
