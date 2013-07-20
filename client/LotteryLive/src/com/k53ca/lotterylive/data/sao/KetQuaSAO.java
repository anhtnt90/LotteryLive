package com.k53ca.lotterylive.data.sao;

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
		// TODO must fix this function later
		KetQuaXoSo ketQuaXoSo = null;
		final String ketQuaService = "{\"id\":\"354\","
				+ "\"date\":\"2011-07-03\","
				+ "\"result_json\":{\"A\" : \"24644\","
				+ "\"B\" : \"65344\",\"C\" : \"21119;79826\","
				+ "\"D\" : \"77925;05173;21183;54571;93080;70089\","
				+ "\"E\" : \"9457;1409;8051;9987\","
				+ "\"F\" : \"7266;2780;1213;9698;7595;2367\","
				+ "\"G\" : \"212;207;977\"," + "\"H\" : \"70;97;23;48\"}}";
		Log.e("TEST", ketQuaService);
		Gson gson = new Gson();
		try {
			KetQuaGson ketQuaGson = gson.fromJson(ketQuaService,
					KetQuaGson.class);
			ketQuaXoSo = new KetQuaXoSo();
			ketQuaXoSo.setDate(ketQuaGson.date);
			ketQuaXoSo.setServiceId(ketQuaGson.id);
			ketQuaXoSo.setVung(type.ordinal());
			ketQuaXoSo.setGiaiDacBiet(ketQuaGson.giai.dacBiet);
			ketQuaXoSo.setGiaiNhat(ketQuaGson.giai.nhat);
			ketQuaXoSo.setGiaiNhi(ketQuaGson.giai.nhi);
			ketQuaXoSo.setGiaiBa(ketQuaGson.giai.ba);
			ketQuaXoSo.setGiaiTu(ketQuaGson.giai.tu);
			ketQuaXoSo.setGiaiNam(ketQuaGson.giai.nam);
			ketQuaXoSo.setGiaiSau(ketQuaGson.giai.sau);
			ketQuaXoSo.setGiaiBay(ketQuaGson.giai.bay);
			ketQuaXoSo.setGiaiTam(ketQuaGson.giai.tam);
		} catch (JsonSyntaxException e) {
			e.printStackTrace();
		}
		return ketQuaXoSo;
	}

}
