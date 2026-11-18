import React from 'react';

const DocumentViewer = ({ imageUrl, extractedBoxes }) => {
  // Fallback color mapping for any detected label
  const getBoxColor = (label) => {
    const l = (label || '').toUpperCase();
    if (l.includes('COMPANY') || l.includes('HEADER')) return 'border-blue-500 bg-blue-500/20 text-blue-800';
    if (l.includes('DATE')) return 'border-amber-500 bg-amber-400/20 text-amber-800';
    if (l.includes('TOTAL') || l.includes('PRICE')) return 'border-emerald-500 bg-emerald-500/20 text-emerald-800';
    if (l.includes('ADDRESS')) return 'border-purple-500 bg-purple-500/20 text-purple-800';
    return 'border-indigo-400 bg-indigo-400/20 text-indigo-800';
  };

  return (
    <div className="relative w-full h-[600px] bg-slate-100 rounded-xl overflow-auto border border-slate-200 flex items-start justify-center p-4">
      {imageUrl ? (
        <div className="relative inline-block max-w-full shadow-md bg-white">
          <img 
            src={imageUrl} 
            alt="Uploaded Document" 
            className="block max-w-full h-auto select-none"
            style={{ width: '900px' }} 
          />
          
          {/* Render bounding boxes over the image */}
          {extractedBoxes && extractedBoxes.length > 0 ? (
            extractedBoxes.map((entity, idx) => {
              if (!entity.bbox || entity.bbox.length !== 4) return null;
              const [x0, y0, x1, y1] = entity.bbox;
              
              // Ensure coordinates are within 0-1000 scale ratio
              const style = {
                left: `${(Math.min(x0, 1000) / 1000) * 100}%`,
                top: `${(Math.min(y0, 1000) / 1000) * 100}%`,
                width: `${(Math.max(x1 - x0, 10) / 1000) * 100}%`,
                height: `${(Math.max(y1 - y0, 10) / 1000) * 100}%`
              };
              
              const colorClasses = getBoxColor(entity.label);

              return (
                <div 
                  key={idx} 
                  className={`absolute border-2 ${colorClasses} cursor-pointer group transition-all duration-150 rounded-sm`}
                  style={style}
                >
                  {/* Tooltip on hover showing label and text */}
                  <div className="absolute -top-7 left-0 hidden group-hover:flex items-center space-x-1 bg-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow-lg whitespace-nowrap z-20">
                    <span className="font-bold">{entity.label}:</span>
                    <span>{entity.text || 'Text'}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[1px]">
              <span className="text-xs font-semibold text-slate-500 bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-200">
                Processing layout coordinates... (Click "Load Sample Extraction" above if testing UI)
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full text-slate-400 flex-col space-y-2">
          <svg className="w-12 h-12 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          <p className="text-xs font-medium">No document uploaded</p>
        </div>
      )}
    </div>
  );
};

export default DocumentViewer;