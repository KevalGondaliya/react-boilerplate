export const getUsername = (phoneOrEmail: string) => {
  const phoneRegex = new RegExp(/^[0-9]{10}$/);
  const countryCode = process.env.REACT_APP_PHONE_CODE;

  if (phoneRegex.test(phoneOrEmail)) {
    return `u-${countryCode}${phoneOrEmail}`;
  }

  return phoneOrEmail;
};

export const camalize = function camalize(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
};

export const isDeviceMobile = () => {
  let hasTouchScreen = false;
  if ('maxTouchPoints' in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  } else {
    const mQ = matchMedia('(pointer:coarse)');
    if (mQ && mQ.media === '(pointer:coarse)') {
      hasTouchScreen = !!mQ.matches;
    } else if ('orientation' in window) {
      hasTouchScreen = true;
    } else {
      var UA = window.navigator.userAgent;
      hasTouchScreen =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
    }
  }

  return hasTouchScreen;
};

export const getUrl = (imgId?: number, token?: string) => {
  // return 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
  if (!imgId || !token) {
    return '';
  }

  const BASE_URL = process.env.REACT_APP_BASE_URL;
  return `${BASE_URL}/images/${imgId}?token=${token}`;
};
