run `npm install` and then `node ./benchmark.mjs` to run benchmark.

```
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v16.16.0 (x64-linux)

benchmark                 time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------ -----------------------------
escapeHtml             18.35 ms/iter   (17.29 ms … 29.15 ms)  17.98 ms  29.15 ms  29.15 ms
jsesc                    260 ms/iter  (236.51 ms … 340.8 ms) 266.27 ms  340.8 ms  340.8 ms
js-string-escape      103.71 ms/iter  (84.82 ms … 120.28 ms) 107.83 ms 120.28 ms 120.28 ms
serialize-javascript   40.98 ms/iter    (39.17 ms … 49.9 ms)  41.14 ms   49.9 ms   49.9 ms

summary
  escapeHtml
   2.23x faster than serialize-javascript
   5.65x faster than js-string-escape
   14.17x faster than jsesc
```
