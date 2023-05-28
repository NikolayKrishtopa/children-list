const correctEnd = (num: number): string => {
  console.log(num);

  const end = String(num)[String(num).length - 1];
  if (end === '1' && num !== 11) {
    return 'год';
  } else if (['2', '3', '4'].includes(end) && ![12, 13, 14].includes(num)) {
    return 'года';
  } else {
    return 'лет';
  }
};

export default correctEnd;
