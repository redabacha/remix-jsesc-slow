const ESCAPE_LOOKUP = {
  '&': '\\u0026',
  '>': '\\u003e',
  '<': '\\u003c',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029',
};

const ESCAPE_REGEX = /[&><\u2028\u2029]/g;

export function escapeHtml(html) {
  return html.replace(ESCAPE_REGEX, match => ESCAPE_LOOKUP[match]);
}
