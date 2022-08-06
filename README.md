run `npm install` and then `node ./benchmark.mjs` to run benchmark.

```
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v16.16.0 (x64-linux)

benchmark                                       time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------------------------------- -----------------------------
escapeHtml                                   17.98 ms/iter   (16.19 ms … 26.86 ms)  17.82 ms  26.86 ms  26.86 ms
escapeHtml w/ fast-json-stable-stringify    100.91 ms/iter  (84.54 ms … 129.52 ms)  98.44 ms 129.52 ms 129.52 ms
escapeHtml w/ json-stable-stringify          98.19 ms/iter  (73.04 ms … 138.35 ms) 108.31 ms 138.35 ms 138.35 ms
escapeHtml w/ json-stringify-deterministic   99.25 ms/iter  (81.98 ms … 125.21 ms) 115.41 ms 125.21 ms 125.21 ms
jsesc                                       256.69 ms/iter (243.34 ms … 290.21 ms) 258.59 ms 290.21 ms 290.21 ms
js-string-escape                             99.69 ms/iter  (85.58 ms … 138.27 ms) 106.27 ms 138.27 ms 138.27 ms
serialize-javascript                         43.55 ms/iter   (38.71 ms … 70.74 ms)  41.76 ms  70.74 ms  70.74 ms

summary
  escapeHtml
   2.42x faster than serialize-javascript
   5.46x faster than escapeHtml w/ json-stable-stringify
   5.52x faster than escapeHtml w/ json-stringify-deterministic
   5.55x faster than js-string-escape
   5.61x faster than escapeHtml w/ fast-json-stable-stringify
   14.28x faster than jsesc
```
