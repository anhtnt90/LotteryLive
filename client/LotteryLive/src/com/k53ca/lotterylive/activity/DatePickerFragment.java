package com.k53ca.lotterylive.activity;

import java.util.Calendar;

import android.app.DatePickerDialog;
import android.app.DatePickerDialog.OnDateSetListener;
import android.app.Dialog;
import android.os.Bundle;
import android.support.v4.app.DialogFragment;

public class DatePickerFragment extends DialogFragment {

	private OnDateSetListener onDateSetListener;

	@Override
	public Dialog onCreateDialog(Bundle savedInstanceState) {
		Calendar calendar = Calendar.getInstance();
		return new DatePickerDialog(getActivity(), onDateSetListener,
				calendar.get(Calendar.YEAR), calendar.get(Calendar.MONTH),
				calendar.get(Calendar.DAY_OF_MONTH));
	}

	public DatePickerFragment setOnDateSetListener(
			OnDateSetListener onDateSetListener) {
		this.onDateSetListener = onDateSetListener;
		return this;
	}

}
