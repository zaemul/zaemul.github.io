import ScriptTag from 'react-script-tag';

const KakaoBottomAd = () => {
  return (
    <div>
      {/* Kakao Adfit Footer */}
      <ins
        className="kakao_ad_area"
        style={{ display: 'none', minWidth: 345, maxWidth: 450 }}
        data-ad-unit="DAN-9okXrbl4AcCucskM"
        data-ad-width="300"
        data-ad-height="250"
      />
      <ScriptTag
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/ba.min.js"
        async
      />
    </div>
  );
};

export default KakaoBottomAd;
