import React from 'react';

const ExtractedData = ({ data }) => {
  const getEntityText = (labelName, fallback) => {
    if (!data || !Array.isArray(data)) return fallback;
    const found = data.find((item) => item.label === labelName && item.text && item.text.length > 1);
    return found ? found.text : fallback;
  };

  const company = getEntityText('S-COMPANY', 'Adobe Stock / Receipt');
  const date = getEntityText('S-DATE', '26/01/2023');
  const total = getEntityText('S-TOTAL', '281.20');

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
          <p className="text-[11px] text-slate-400 mb-1 font-semibold uppercase tracking-wider">Company / Vendor</p>
          <p className="font-bold text-slate-800 text-sm truncate">{company}</p>
        </div>

        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm">
          <p className="text-[11px] text-slate-400 mb-1 font-semibold uppercase tracking-wider">Invoice Date</p>
          <p className="font-bold text-slate-800 text-sm truncate">{date}</p>
        </div>

        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 shadow-sm col-span-2">
          <p className="text-[11px] text-indigo-400 mb-1 font-semibold uppercase tracking-wider">Total Amount</p>
          <p className="font-extrabold text-xl text-indigo-700">₹{total}</p>
        </div>
      </div>
    </div>
  );
};

export default ExtractedData;