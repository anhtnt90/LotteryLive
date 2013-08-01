package com.k53ca.lotterylive.data.sao;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.List;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.NameValuePair;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpRequestBase;
import org.apache.http.entity.mime.MultipartEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.apache.http.protocol.HTTP;

/**
 * the helper for interacting with web services.
 * 
 * @author HoanDC
 */
public class ServiceHelper {
	/**
	 * @param url
	 *            is the url of the service.
	 * @param token
	 *            is the token of the user to be passed.
	 * @param timeout
	 *            the time out of the operation.
	 * @return the json result of the request.
	 * @throws IOException
	 *             is the exception of input - output.
	 */
	public static String delete(String url, String token, int timeout)
			throws IOException {
		HttpDelete httpDelete = new HttpDelete(url);
		// if (token != null) {
		// httpDelete.addHeader(ServiceConfig.getInstance().TOKEN_HEADER,
		// token);
		// }
		return getResultFromService(httpDelete, timeout);
	}

	/**
	 * @param url
	 *            is url.
	 * @param params
	 *            params
	 * @param token
	 *            token
	 * @param timeout
	 *            the time out of the operation.
	 * @return json which contains users list.
	 * @throws IOException
	 *             the exception relating to io.
	 */
	public static String getInfo(String url, List<NameValuePair> params,
			String token, int timeout) throws IOException {
		String target = url;
		if (params != null) {
			target += parseParamsToUrl(params);
		}
		HttpGet httpGet = new HttpGet(target);
		// Log.e("target", "target=" + target);
		// if (token != null) {
		// httpGet.addHeader(ServiceConfig.getInstance().TOKEN_HEADER, token);
		// }
		return getResultFromService(httpGet, timeout);
	}

	/**
	 * @param params
	 *            is the params to be parsed.
	 * @return the string format of url containing params.
	 */
	public static String parseParamsToUrl(List<NameValuePair> params) {
		String combinedParams = "";
		if (!params.isEmpty()) {
			combinedParams += "?";
			for (NameValuePair p : params) {
				String paramString = "";
				try {
					paramString = p.getName() + "="
							+ URLEncoder.encode(p.getValue(), "UTF-8");
				} catch (UnsupportedEncodingException e) {
					e.printStackTrace();
				}
				if (combinedParams.length() > 1) {
					combinedParams += "&" + paramString;
				} else {
					combinedParams += paramString;
				}
			}
		}
		return combinedParams;
	}

	/**
	 * @param url
	 *            is the service's link.
	 * @param params
	 *            the parameters for the post request.
	 * @param token
	 *            is the token to be passed to server.
	 * @param httpEntity
	 *            the entity of the request.
	 * @param timeout
	 *            the time out of the operation.
	 * @return the json string of the service.
	 * @throws IOException
	 *             the exception related to io.
	 */
	public static String postInfo(String url, List<NameValuePair> params,
			String token, HttpEntity httpEntity, int timeout)
			throws IOException {
		HttpPost httpPost = new HttpPost(url);
		// if (token != null) {
		// httpPost.addHeader(ServiceConfig.getInstance().TOKEN_HEADER, token);
		// }
		if (params != null && !params.isEmpty()) {
			try {
				httpPost.setEntity(new UrlEncodedFormEntity(params, HTTP.UTF_8));
			} catch (UnsupportedEncodingException e) {
				e.printStackTrace();
			}
		}
		if (httpEntity != null) {
			httpPost.setEntity(httpEntity);
		}
		return getResultFromService(httpPost, timeout);
	}

	/**
	 * @param url
	 *            is service api
	 * @param mtentity
	 *            data for post
	 * @return respone string
	 */
	public static String postInfo(String url, MultipartEntity mtentity) {
		String result = "";
		try {
			HttpResponse response = null;
			HttpClient httpclient = new DefaultHttpClient();
			HttpPost httppost = new HttpPost(url);
			httppost.setEntity(mtentity);
			response = httpclient.execute(httppost);
			HttpEntity htentity = response.getEntity();
			if (htentity != null) {
				InputStream instream = null;
				try {
					instream = htentity.getContent();
					result = convertStreamToString(instream);
					// Log.e("result", "result=" + result);
				} catch (IOException e) {
					e.printStackTrace();
				} catch (IllegalStateException e1) {
					e1.printStackTrace();
				}
			}
		} catch (IOException e) {
			e.printStackTrace();
		}
		return result;
	}

	/**
	 * @param httpRequestBase
	 *            is the request.
	 * @param timeout
	 *            the time out for this operation.
	 * @return the json in format of string.
	 * @throws IOException
	 *             the exception of io.
	 */
	private static String getResultFromService(HttpRequestBase httpRequestBase,
			int timeout) throws IOException {
		HttpParams httpParams = new BasicHttpParams();
		HttpConnectionParams.setConnectionTimeout(httpParams, timeout);
		HttpConnectionParams.setSoTimeout(httpParams, timeout);

		HttpClient httpclient = new DefaultHttpClient(httpParams);
		HttpResponse response;
		String result = null;
		response = httpclient.execute(httpRequestBase);
		InputStream instream = response.getEntity().getContent();
		result = convertStreamToString(instream);
		// Log.e("result", "result=" + result);
		instream.close();
		return result;
	}

	/**
	 * @param instream
	 *            is the inputStream to be converted.
	 * @return the converted result in format of string.
	 */
	private static String convertStreamToString(InputStream instream) {

		String line = null;
		StringBuilder sb = new StringBuilder();
		try {
			BufferedReader reader = new BufferedReader(new InputStreamReader(
					instream, "UTF-8"));
			while ((line = reader.readLine()) != null) {
				sb.append(line + "\n");
			}
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				instream.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return sb.toString();
	}

}
