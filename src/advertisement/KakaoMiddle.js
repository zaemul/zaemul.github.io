import ScriptTag from 'react-script-tag';

const KakaoMiddleAd = () => {
  return (
    <div>
      {/* Kakao Adfit Header */}
      <ins
        className="kakao_ad_area"
        style={{ display: 'none', minWidth: 345, maxWidth: 450 }}
        data-ad-unit="DAN-G4uoaboBkgvyPtbu"
        data-ad-width="320"
        data-ad-height="100"
      ></ins>
      <ScriptTag
        type="text/javascript"
        src="//t1.daumcdn.net/kas/static/ba.min.js"
        async
      />
    </div>
  );
};

export default KakaoMiddleAd;
