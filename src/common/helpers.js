export const parameterize = (str1) => {
  return str1.trim().toLowerCase()
    .replace(/\s/g, "-")
    .replace(/[^a-z0-9/\-]+/g,"")
};

export const mergeUniq = (array1, array2) => {
  return [...new Set([...array1 ,...array2])]
};

export const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

export const intersection = (array1, array2) => {
  return array1.filter(value => array2.includes(value));
};

export const daysAgo = (date, onlyNew = false) => {
  let days = (Date.now() - date)/(1000*60*60*24);
  if (days < 7) {
    return 'new'
  } else if (onlyNew) {
    return '';
  } else if (days < 14) {
    return '1w'
  } else if (days < 30) {
    return parseInt(days / 7) + 'w'
  } else {
    return '1m'
  }
};

export const experienceNames = (expBottom, expTop) => {
  let names = [];
  if (expBottom === 0) {
    names.push('Junior');
  }

  if (expTop !== expBottom || expBottom === 1) {
    names.push('Mid');
  }

  if (expTop === 2) {
    names.push('Senior');
  }
  return names.join(', ');
};

export const sliceCity = (width) => {
  const containerWidth = 1267;
  if(width > containerWidth) {
    return Math.round((containerWidth - 400) / 160);
  } else {
    return Math.round((width - 400) / 160);
  }
  return Math.round((width - 1000) / 160) + 5;
};

export const sliceTech = (width) => {
  const containerWidth = 1267;
  if(width > containerWidth) {
    return Math.round((containerWidth - 400) / 160);
  } else {
    return Math.round((width - 400) / 160);
  }
};

export const sliceFilters = (width) => {
  const containerWidth = 1267;
  if(width > containerWidth) {
    return Math.round((containerWidth - 400) / 160);
  } else {
    return Math.round((width - 400) / 160);
  }
};