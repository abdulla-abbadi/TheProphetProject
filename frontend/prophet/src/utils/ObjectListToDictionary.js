export default function objectListToDictionary(objList) {
  let dictionary = {};
  for (const obj of objList) {
    dictionary[obj.term] = obj.des;
  }
  return dictionary;
}
