//package com.k53ca.lotterylive.data.sao;
//
//import java.io.IOException;
//import java.util.ArrayList;
//import java.util.List;
//
//import org.apache.http.NameValuePair;
//import org.apache.http.message.BasicNameValuePair;
//
//import android.util.Log;
//
//import com.google.gson.Gson;
//import com.google.gson.JsonSyntaxException;
//import com.k53ca.lotterylive.data.KetQuaXoSo;
//import com.k53ca.lotterylive.data.sao.KetQuaGsonHelper.KetQuaFromService;
//import com.k53ca.lotterylive.data.sao.KetQuaGsonHelper.KetQuaGson;
//import com.k53ca.lotterylive.utils.Constants.TYPE_XOSO;
//
//public class KetQuaSAO {
//
//	/**
//	 * Get ket qua xo so from web service. Not yet implement, must implement
//	 * later
//	 * 
//	 * @param type
//	 * @param date
//	 *            in format : "2011-07-03"
//	 * @return {@link KetQuaXoSo} if existed, or return <code>null</code>
//	 */
//	public static KetQuaXoSo getKetQua(TYPE_XOSO type, String date) {
//		KetQuaXoSo ketQuaXoSo = null;
//		final String ketQuaService = "{\"id\":\"354\","
//				+ "\"date\":\"2011-07-03\","
//				+ "\"result_json\":{\"A\" : \"24644\","
//				+ "\"B\" : \"65344\",\"C\" : \"21119;79826\","
//				+ "\"D\" : \"77925;05173;21183;54571;93080;70089\","
//				+ "\"E\" : \"9457;1409;8051;9987\","
//				+ "\"F\" : \"7266;2780;1213;9698;7595;2367\","
//				+ "\"G\" : \"212;207;977\"," + "\"H\" : \"70;97;23;48\"}}";
//		Log.e("TEST", ketQuaService);
//		Gson gson = new Gson();
//		// TODO: service connection, later use, don't delete it
//		// List<NameValuePair> params = new ArrayList<NameValuePair>();
//		// params.add(new BasicNameValuePair(ServiceConfig.TAG_TYPE, "1"));
//		// params.add(new BasicNameValuePair(ServiceConfig.TAG_DATE, date));
//		//
//		// // Ket qua parsed from json
//		// KetQuaFromService ketQuaService = null;
//		// String respond = "";
//		// try {
//		// switch (type) {
//		// case MIEN_BAC:
//		// respond = ServiceHelper.getInfo(
//		// ServiceConfig.URL_GET_KET_QUA_XO_SO_MIEN_BAC, params,
//		// null, 15000);
//		// String json = respond.substring(1, respond.length() - 1);
//		// Log.e("TEST", respond);
//		// ketQuaService = gson.fromJson(respond, KetQuaFromService.class);
//		// break;
//		//
//		// default:
//		// break;
//		// }
//		// } catch (IOException e) {
//		// e.printStackTrace();
//		// }
//
//		try {
//			KetQuaGson ketQuaGson = gson.fromJson(ketQuaService,
//					KetQuaGson.class);
//			ketQuaXoSo = new KetQuaXoSo();
//			ketQuaXoSo.setDate(ketQuaGson.date);
//			ketQuaXoSo.setServiceId(ketQuaGson.id);
//			ketQuaXoSo.setVung(type.ordinal());
//			ketQuaXoSo.setGiaiDacBiet(ketQuaGson.giai.dacBiet);
//			ketQuaXoSo.setGiaiNhat(ketQuaGson.giai.nhat);
//			ketQuaXoSo.setGiaiNhi(ketQuaGson.giai.nhi);
//			ketQuaXoSo.setGiaiBa(ketQuaGson.giai.ba);
//			ketQuaXoSo.setGiaiTu(ketQuaGson.giai.tu);
//			ketQuaXoSo.setGiaiNam(ketQuaGson.giai.nam);
//			ketQuaXoSo.setGiaiSau(ketQuaGson.giai.sau);
//			ketQuaXoSo.setGiaiBay(ketQuaGson.giai.bay);
//			ketQuaXoSo.setGiaiTam(ketQuaGson.giai.tam);
//		} catch (JsonSyntaxException e) {
//			e.printStackTrace();
//		}
//		return ketQuaXoSo;
//	}
//}
