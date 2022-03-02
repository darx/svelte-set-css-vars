const get = (t, path) => path.split(".").reduce((r, k) => r?.[k], t);

const objectDeepKeys = object => {
  return Object.keys(object)
    .filter(key => object[key] instanceof Object)
    .map(key => objectDeepKeys(object[key]).map(k => `${key}.${k}`))
    .reduce((x, y) => x.concat(y), Object.keys(object));
};

const setVariableProperty = (item, value, context) => {
  if (
    !context.style.getPropertyValue(item) ||
    context.style.getPropertyValue(item) != value
  ) {
    context.style.setProperty(item, value);
  }
};

const setVariables = (object, node = document.documentElement) => {
  const items = objectDeepKeys(object);
  for (let i = 0, len = items.length; i < len; i++) {
    let item = get(object, items[i]);
    if (["number", "string"].indexOf(typeof item) !== -1) {
      setVariableProperty("--" + items[i].replace(/\./g, "-"), item, node);
    }
  }
};

export default function setVars(node, object) {
  const update = stub => setVariables(stub, node);
  update(object);
  return { update: update };
}

export { setVariableProperty, setVariables };
