export default function cssStringToObject(cssString) {
  const styleObject = {};

  // 正则表达式匹配CSS属性和值
  const propertyValuePairs = cssString.match(/([\w-]+)\s*:\s*([^;]+)/g);

  if (propertyValuePairs) {
    propertyValuePairs.forEach((pair) => {
      const [property, value] = pair.split(":").map((item) => item.trim());
      const propertyName = property.replace(/-([a-z])/g, (match, letter) =>
        letter.toUpperCase()
      );
      styleObject[propertyName] = value;
    });
  }

  return styleObject;
}
