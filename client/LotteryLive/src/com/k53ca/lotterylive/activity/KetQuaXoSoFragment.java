package com.k53ca.lotterylive.activity;

import java.util.List;

import android.content.res.Resources;
import android.os.AsyncTask;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import com.k53ca.lotterylive.R;
import com.k53ca.lotterylive.data.DaoMaster;
import com.k53ca.lotterylive.data.DaoMaster.DevOpenHelper;
import com.k53ca.lotterylive.data.KetQuaXoSo;
import com.k53ca.lotterylive.data.KetQuaXoSoDao;
import com.k53ca.lotterylive.data.sao.KetQuaSAO;
import com.k53ca.lotterylive.utils.Constants;
import com.k53ca.lotterylive.utils.Constants.TYPE_XOSO;

public class KetQuaXoSoFragment extends MyParentFragment {
	private static final String TAG = "KetQuaXoSoFragment";
	// ==========================================================
	// 9 prizes: special at 0 position, first: 1 position, and so on
	// ==========================================================
	private TextView prizes[] = new TextView[9];
	// 8th prize (not available in xo so mien bac)
	private View row8Prize;
	private TextView tvXoSoType;
	private TextView tvDate;

	// Loai xo so
	private TYPE_XOSO mTypeXoSo = TYPE_XOSO.MIEN_BAC;

	/** Has form: 2011-07-03 */
	private String mDateKetQua;

	/** Ket qua object to show to view */
	private KetQuaXoSo mKetQuaXoSo;

	private DaoMaster daoMaster;

	@Override
	protected void init(View view) {
		// Get database
		DevOpenHelper devOpenHelper = new DevOpenHelper(context,
				Constants.DATABASE_NAME, null);
		daoMaster = new DaoMaster(devOpenHelper.getWritableDatabase());

		findViewOrPrizes(view);
		row8Prize = view.findViewById(R.id.eightPrizeRow);
		tvDate = (TextView) view.findViewById(R.id.tvDate);
		tvXoSoType = (TextView) view.findViewById(R.id.tvXoSoType);
		displayXoSoType();
		loadKetQua(mDateKetQua);
	}

	@Override
	protected int getLayoutId() {
		return R.layout.bac_fragment;
	}

	/**
	 * Find 8 text view
	 * 
	 * @param view
	 */
	private void findViewOrPrizes(View view) {
		Resources resources = context.getResources();
		for (int i = 0; i < 9; i++) {
			int id = resources.getIdentifier("prize" + i, "id",
					context.getPackageName());
			prizes[i] = (TextView) view.findViewById(id);
		}
	}

	/**
	 * Display UI base on Type of so xo
	 */
	private void displayXoSoType() {
		String title = "";
		switch (mTypeXoSo) {
		case MIEN_BAC:
			row8Prize.setVisibility(View.GONE);
			title = context.getString(R.string.firsttab_xosomienbac);
			break;
		case MIEN_TRUNG:
			row8Prize.setVisibility(View.VISIBLE);
			title = context.getString(R.string.secondtab_xosomientrung);
			break;
		case MIEN_NAM:
			row8Prize.setVisibility(View.VISIBLE);
			title = context.getString(R.string.thirdtab_xosomiennam);
			break;
		default:
			break;
		}
		tvXoSoType.setText(title);
		tvDate.setText("" + mDateKetQua);
	}

	/**
	 * Display ket qua after getting <code>dateKetQua</code>
	 */
	private void displayKetQua() {
		tvDate.setText(mDateKetQua);
		prizes[0].setText(mKetQuaXoSo.getGiaiDacBiet());
		prizes[1].setText(mKetQuaXoSo.getGiaiNhat());
		prizes[2].setText(mKetQuaXoSo.getGiaiNhi());
		prizes[3].setText(mKetQuaXoSo.getGiaiBa());
		prizes[4].setText(mKetQuaXoSo.getGiaiTu());
		prizes[5].setText(mKetQuaXoSo.getGiaiNam());
		prizes[6].setText(mKetQuaXoSo.getGiaiSau());
		prizes[7].setText(mKetQuaXoSo.getGiaiBay());
		prizes[8].setText("" + mKetQuaXoSo.getGiaiTam());
	}

	/**
	 * Load ket qua xo so from Date
	 * 
	 * @param date
	 *            in format: "2011-07-03"
	 */
	public void loadKetQua(String date) {
		mDateKetQua = date;
		new AsyncTask<Void, Void, Void>() {

			@Override
			protected Void doInBackground(Void... params) {
				Log.i(TAG, "load ket qua");
				KetQuaXoSoDao ketQuaXoSoDao = daoMaster.newSession()
						.getKetQuaXoSoDao();
				List<KetQuaXoSo> ketQuaXoSos = ketQuaXoSoDao
						.queryBuilder()
						.where(KetQuaXoSoDao.Properties.Vung.eq(mTypeXoSo
								.ordinal()),
								KetQuaXoSoDao.Properties.Date.eq(mDateKetQua))
						.limit(1).list();
				// Can't find ketqua in database
				if (ketQuaXoSos == null || ketQuaXoSos.size() <= 0) {
					mKetQuaXoSo = KetQuaSAO.getKetQua(mTypeXoSo, mDateKetQua);
					if (mKetQuaXoSo != null) {
						ketQuaXoSoDao.insert(mKetQuaXoSo);
					}
				} else {
					mKetQuaXoSo = ketQuaXoSos.get(0);
				}

				return null;
			}

			protected void onPostExecute(Void result) {
				super.onPostExecute(result);
				if (mKetQuaXoSo != null) {
					displayKetQua();
					Log.i(TAG, "Ket qua not null");
				} else {
					Log.i(TAG, "Ket qua null");
				}
			};
		}.execute();
	}

	/**
	 * New instance of {@link MienBacFragment}
	 * 
	 * @param typeXoso
	 *            {@link TYPE_XOSO} to be showed in view
	 * @param dateKetQua
	 *            : date of ket qua, must be in format: <code>2011-07-03</code>
	 * @return {@link MienBacFragment}
	 */
	public static KetQuaXoSoFragment newInstance(TYPE_XOSO typeXoso,
			String dateKetQua) {
		KetQuaXoSoFragment ketQuaXoSoFragment = new KetQuaXoSoFragment();
		ketQuaXoSoFragment.setDateKetQua(dateKetQua);
		ketQuaXoSoFragment.setTypeXoSo(typeXoso);
		return ketQuaXoSoFragment;
	}

	public void setTypeXoSo(TYPE_XOSO xosoType) {
		this.mTypeXoSo = xosoType;
	}

	public void setDateKetQua(String dateKetQua) {
		this.mDateKetQua = dateKetQua;
	}
}
