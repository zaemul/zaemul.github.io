import TwitterIcon from '../../assets/twitter.png';
import { css } from '@emotion/react';
import Analytics from '../../analyze/Analytics';

const imgStyle = css({
  width: 32,
  height: 32,
  marginRight: 4,
  marginLeft: 4,
});

const SaveImageButton = ({ url }) => {
  const download = () => {
    Analytics.sendEvent({
      category: 'Share',
      action: 'Download Image',
      label: 'Share button',
    });
    const element = document.createElement('a');
    const file = new Blob(['https://images2.imgbox.com/61/8a/Tfm05qzc_o.png'], {
      type: 'image/*',
    });
    element.href = URL.createObjectURL(file);
    element.download = 'image.jpg';
    element.click();
  };

  return (
    <a
      href="https://images2.imgbox.com/61/8a/Tfm05qzc_o.png"
      download
      onClick={() => download()}
    >
      download
    </a>
  );
};

export default SaveImageButton;
