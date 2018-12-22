
/*
 * 将时间转为英语的年月日
 */
exports.enStringDate = (date) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en', options);
}

/*
 * 动态选择博客在首页显示的内容
 * @params {String} content 博客内容
 */
exports.shortContent = (content) => {
  let breakPointCount = 0;
  let targetBreakPoint = 0;
  const breakPointList = [0];

  while (breakPointCount++ < 10) {
    const breakPoint = content.indexOf('\n', targetBreakPoint + 1);
    if (breakPoint < 300 || targetBreakPoint < 250) {
      targetBreakPoint = breakPoint;
    } else {
      let index = 2;
      const checkGoBackPre = () => {
        const lastPreBreakPoint = breakPointList[breakPointList.length - index++];
        if (lastPreBreakPoint && targetBreakPoint - lastPreBreakPoint < 20) {
          const middleText = content.slice(lastPreBreakPoint, targetBreakPoint);
          const a = content.slice(0, lastPreBreakPoint);
          const b = content.slice(0, targetBreakPoint);
          const hasTitle = middleText.indexOf('##') > -1;
          const hasLanguage = middleText.indexOf('```') > -1;
          const hasEnter = middleText.indexOf('\n') === 0;
          if (hasTitle || hasLanguage || hasEnter) {
            targetBreakPoint = lastPreBreakPoint;
            checkGoBackPre();
          }
        }
      }
      checkGoBackPre();
      break;
    }
    breakPointList.push(breakPoint);
  }
  return content.substr(0, targetBreakPoint);
}

exports.divideImageContent = function(content) {
  let contentString = content.toString();
  let bannerUrl;
  if (contentString.substr(0, 3) === '![]') {
    const urlEnd = contentString.indexOf(')');
    bannerUrl = contentString.slice(4, urlEnd);
    const type = (bannerUrl.split('.').slice(-1)[0] || '').toLowerCase();
    if (
      type && (
        type === 'png' || 
        type === 'jpg' ||
        type === 'jpge'
      )
    ) {
      contentString = contentString.slice(urlEnd + 1);
    } else {
      bannerUrl = void 0;
    }
  }
  return {
    bannerUrl,
    contentString
  }
}