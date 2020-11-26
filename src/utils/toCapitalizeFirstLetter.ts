function toCapitalizeFirstLetter(str: string) {
  if (str.length === 0) return '';
  const updateStr = str.toLowerCase();
  return updateStr.replace(updateStr[0], updateStr[0].toUpperCase());
}

export default toCapitalizeFirstLetter;
