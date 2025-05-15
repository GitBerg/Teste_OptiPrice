export default function removeBreakLines(text) {
  return text.replace(/(\r\n|\n|\r)/gm, "");
}