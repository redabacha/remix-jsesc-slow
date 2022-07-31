import jsesc from 'jsesc';
import { baseline, bench, run } from 'mitata';
import serializeJavascript from 'serialize-javascript';
import testData from './test-data.mjs';
import { escapeHtml } from './escapeHtml.mjs';

baseline('escapeHtml', () => escapeHtml(JSON.stringify(testData)));
bench('jsesc', () => jsesc(testData, { isScriptContext: true }));
bench('serialize-javascript', () => serializeJavascript(testData));

await run();
