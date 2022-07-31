import jsesc from 'jsesc';
import jsStringEscape from 'js-string-escape';
import { baseline, bench, run } from 'mitata';
import serializeJavascript from 'serialize-javascript';
import testData from './test-data.mjs';
import { escapeHtml } from './escapeHtml.mjs';

baseline('escapeHtml', () => escapeHtml(JSON.stringify(testData)));
bench('jsesc', () => jsesc(testData, { isScriptContext: true }));
bench('js-string-escape', () => jsStringEscape(JSON.stringify(testData)));
bench('serialize-javascript', () => serializeJavascript(testData));

await run();
