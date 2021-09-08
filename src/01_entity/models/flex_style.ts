export const createStyle = (propObj: Object) => {
  let style = {};
  for (var key in propObj) {
    if (propObj[key] !== "none") {
      if (["flex", "flexGrow", "flexShrink"].includes(key)) {
        style[key] = Number(propObj[key]);
      } else if (key === "flexBasis" && propObj[key] !== "auto") {
        style[key] = Number(propObj[key]);
      } else {
        style[key] = propObj[key];
      }
    }
  }
  return style;
};

export const styleTextFormat = (obj: Object) => {
  let styleObj = createStyle(obj);
  let ret = "";
  for (var key in styleObj) {
    if (typeof styleObj[key] === "string") {
      ret += "    " + key + ': "' + styleObj[key] + '"' + ",\n";
    } else {
      ret += "    " + key + ": " + styleObj[key] + ",\n";
    }
  }
  return ret;
};
