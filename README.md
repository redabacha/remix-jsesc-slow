run `npm install` and then `node ./benchmark.mjs` to run benchmark.

```
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: node v16.16.0 (x64-linux)

benchmark                 time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------ -----------------------------
escapeHtml             19.48 ms/iter   (17.67 ms … 27.29 ms)  19.03 ms  27.29 ms  27.29 ms
jsesc                 263.58 ms/iter (238.61 ms … 290.01 ms) 267.14 ms 290.01 ms 290.01 ms
serialize-javascript   41.13 ms/iter   (39.22 ms … 55.05 ms)   40.3 ms  55.05 ms  55.05 ms

summary
  escapeHtml
   2.11x faster than serialize-javascript
   13.53x faster than jsesc
```
