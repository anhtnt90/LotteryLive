package com.k53ca.lotterylive.activity;

import android.app.Activity;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentActivity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

public abstract class MyParentFragment extends Fragment {

	protected FragmentActivity context;

	/**
	 * initialize view from first create
	 * 
	 * @param view
	 */
	abstract protected void init(View view);

	/**
	 * @return resource id of layout of fragment
	 */
	abstract protected int getLayoutId();

	@Override
	public View onCreateView(LayoutInflater inflater, ViewGroup container,
			Bundle savedInstanceState) {
		int id = getLayoutId();
		View view = inflater.inflate(id, container, false);
		init(view);
		return view;
	}

	@Override
	public void onAttach(Activity activity) {
		super.onAttach(activity);
		this.context = (FragmentActivity) activity;
	}

}
