import fastJsonStableStringify from 'fast-json-stable-stringify';
import jsStringEscape from 'js-string-escape';
import jsesc from 'jsesc';
import jsonStableStringify from 'json-stable-stringify';
import jsonStringifyDeterministic from 'json-stringify-deterministic';
import { baseline, bench, run } from 'mitata';
import typedjson from 'remix-typedjson/dist/typedjson.js';
import serializeJavascript from 'serialize-javascript';
import superjson from 'superjson';
import { escapeHtml } from './escapeHtml.mjs';
import testData from './test-data.mjs';

baseline('escapeHtml', () => escapeHtml(JSON.stringify(testData)));
bench('escapeHtml w/ fast-json-stable-stringify', () =>
  escapeHtml(fastJsonStableStringify(testData))
);
bench('escapeHtml w/ json-stable-stringify', () =>
  escapeHtml(jsonStableStringify(testData))
);
bench('escapeHtml w/ json-stringify-deterministic', () =>
  escapeHtml(jsonStringifyDeterministic(testData))
);
bench('escapeHtml w/ superjson.stringify', () =>
  escapeHtml(superjson.stringify(testData))
);
bench('jsesc', () => jsesc(testData, { isScriptContext: true }));
bench('js-string-escape', () => jsStringEscape(JSON.stringify(testData)));
bench('serialize-javascript', () => serializeJavascript(testData));
bench('remix-typedjson serialize', () => typedjson.serialize(testData));

await run();
