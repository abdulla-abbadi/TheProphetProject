export function split_on_matched_words(text, dict_keys) {
  if (dict_keys.length === 0) return [text];
  const keyWords = dict_keys.join("|");
  const regex = new RegExp(`[ء-٩]*(${keyWords})[ء-٩]*`, "g");
  const matchedWords = text.match(regex);
  if (!matchedWords) return [text];
  const splitWordsKeys = matchedWords.join("|");
  const SplitWordsRegex = new RegExp(`(${splitWordsKeys})`, "g");
  const splitWords = text.split(SplitWordsRegex);
  return splitWords;
}

export function add_definations_for_matched_words(splitWords, dict_keys, dict) {
  const newText = [];
  for (const sentence of splitWords) {
    let segment = sentence;
    for (const key of dict_keys) {
      const regex = new RegExp(`[ء-٩]*${key}[ء-٩]*`, "g");
      if (sentence.match(regex, "g")) {
        segment = [sentence, dict[key]];
      }
    }
    newText.push(segment);
  }
  return newText;
}
