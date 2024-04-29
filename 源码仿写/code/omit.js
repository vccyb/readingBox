/**
 *
 * @param {object} obj
 * @param {string[]} fields
 */
export function omit(obj, fields) {
  const shallowCopy = Object.assign({}, obj);
  for (let index = 0; index < fields.length; index++) {
    const key = fields[index];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
