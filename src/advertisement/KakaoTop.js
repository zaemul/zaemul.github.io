import ScriptTag from 'react-script-tag';

const KakaoTopAd = () => {
  return (
    <div>
      {/* Kakao Adfit Header */}
      <ins
        className="kakao_ad_area"
        style={{ display: 'none', minWidth: 345, maxWidth: 450 }}
        data-ad-unit="DAN-xE7Cmclmill5YLGg"
        data-ad-width="320"
        data-ad-height="100"
      />
      <ScriptTag
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/ba.min.js"
        async
      />
    </div>
  );
};

export default KakaoTopAd;
