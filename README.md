run `npm install` and then `node ./benchmark.mjs` to run benchmark.

```
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v16.16.0 (x64-linux)

benchmark                                time (avg)             (min … max)       p75       p99      p995
--------------------------------------------------------------------------- -----------------------------
escapeHtml                            17.39 ms/iter   (16.63 ms … 24.22 ms)  17.23 ms  24.22 ms  24.22 ms
escapeHtml w/ json-stable-stringify   90.87 ms/iter  (72.11 ms … 114.25 ms) 101.38 ms 114.25 ms 114.25 ms
jsesc                                263.32 ms/iter (238.98 ms … 284.49 ms) 270.46 ms 284.49 ms 284.49 ms
js-string-escape                     104.41 ms/iter  (87.05 ms … 140.86 ms) 114.09 ms 140.86 ms 140.86 ms
serialize-javascript                   42.8 ms/iter   (39.33 ms … 66.76 ms)  40.89 ms  66.76 ms  66.76 ms

summary
  escapeHtml
   2.46x faster than serialize-javascript
   5.23x faster than escapeHtml w/ json-stable-stringify
   6.01x faster than js-string-escape
   15.14x faster than jsesc
```
