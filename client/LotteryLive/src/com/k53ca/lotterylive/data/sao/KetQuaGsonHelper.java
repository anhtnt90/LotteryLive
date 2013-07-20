package com.k53ca.lotterylive.data.sao;

import com.google.gson.annotations.SerializedName;

public class KetQuaGsonHelper {

	public static class KetQuaFromService {
		@SerializedName("XoSoMB")
		public KetQuaGson ketQuaGson;
	}

	public static class KetQuaGson {
		public long id;
		public String date;
		@SerializedName("result_json")
		public Giai giai;

	}

	public static class Giai {
		@SerializedName("A")
		public String dacBiet;
		@SerializedName("B")
		public String nhat;
		@SerializedName("C")
		public String nhi;
		@SerializedName("D")
		public String ba;
		@SerializedName("E")
		public String tu;
		@SerializedName("F")
		public String nam;
		@SerializedName("G")
		public String sau;
		@SerializedName("H")
		public String bay;
		@SerializedName("I")
		public String tam;
	}
}
