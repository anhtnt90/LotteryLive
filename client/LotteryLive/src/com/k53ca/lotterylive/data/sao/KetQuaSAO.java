package com.k53ca.lotterylive.data.sao;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;

import android.util.Log;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.k53ca.lotterylive.data.KetQuaXoSo;
import com.k53ca.lotterylive.data.sao.KetQuaGsonHelper.KetQuaGson;
import com.k53ca.lotterylive.utils.Constants.TYPE_XOSO;

public class KetQuaSAO {

	/**
	 * Get ket qua xo so from web service. Not yet implement, must implement
	 * later
	 * 
	 * @param type
	 * @param date
	 *            in format : "2011-07-03"
	 * @return {@link KetQuaXoSo} if existed, or return <code>null</code>
	 */
	public static KetQuaXoSo getKetQua(TYPE_XOSO type, String date) {
		KetQuaXoSo ketQuaXoSo = null;
		// TODO: service connection, later use, don't delete it
		List<NameValuePair> params = new ArrayList<NameValuePair>();
		params.add(new BasicNameValuePair(ServiceConfig.TAG_TYPE, "1"));
		params.add(new BasicNameValuePair(ServiceConfig.TAG_DATE, date));

		// Ket qua parsed from json
		String respond = "";
		try {
			switch (type) {
			case MIEN_BAC:
				respond = ServiceHelper.getInfo(
						ServiceConfig.URL_GET_KET_QUA_XO_SO_MIEN_BAC, params,
						null, 15000);
				Log.e("TEST", respond);
				break;

			default:
				break;
			}
		} catch (IOException e) {
			e.printStackTrace();
		}

		try {
			Gson gson = new Gson();
			KetQuaGson ketQuaGson = gson.fromJson(respond, KetQuaGson.class);
			ketQuaXoSo = new KetQuaXoSo();
			String oldChar = ";";
			String newChar = " - ";
			ketQuaXoSo.setDate(ketQuaGson.date);
			ketQuaXoSo.setServiceId(ketQuaGson.id);
			ketQuaXoSo.setVung(type.ordinal());
			ketQuaXoSo.setGiaiDacBiet(ketQuaGson.giai.dacBiet);
			ketQuaXoSo.setGiaiNhat(ketQuaGson.giai.nhat.replace(oldChar,
					newChar));
			ketQuaXoSo
					.setGiaiNhi(ketQuaGson.giai.nhi.replace(oldChar, newChar));
			ketQuaXoSo.setGiaiBa(ketQuaGson.giai.ba.replace(oldChar, newChar));
			ketQuaXoSo.setGiaiTu(ketQuaGson.giai.tu.replace(oldChar, newChar));
			ketQuaXoSo
					.setGiaiNam(ketQuaGson.giai.nam.replace(oldChar, newChar));
			ketQuaXoSo
					.setGiaiSau(ketQuaGson.giai.sau.replace(oldChar, newChar));
			ketQuaXoSo
					.setGiaiBay(ketQuaGson.giai.bay.replace(oldChar, newChar));
			if (ketQuaGson.giai.tam != null) {
				ketQuaXoSo.setGiaiTam(ketQuaGson.giai.tam.replace(oldChar,
						newChar));
			}
		} catch (JsonSyntaxException e) {
			e.printStackTrace();
		}
		return ketQuaXoSo;
	}
}
