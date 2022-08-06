run `npm install` and then:

- `node ./benchmark.mjs`
- `deno run --allow-env --allow-read --unstable --compat ./benchmark.mjs`
- `bun ./benchmark.mjs`

to run benchmarks for each runtime respectively.

## node

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

## deno

```
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.24.2 (x86_64-unknown-linux-gnu)

benchmark                                       time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------------------------------- -----------------------------
escapeHtml                                   18.27 ms/iter         (16 ms … 28 ms)     18 ms     28 ms     28 ms
escapeHtml w/ fast-json-stable-stringify     87.75 ms/iter        (78 ms … 106 ms)     96 ms    106 ms    106 ms
escapeHtml w/ json-stable-stringify          80.47 ms/iter        (60 ms … 104 ms)     88 ms    104 ms    104 ms
escapeHtml w/ json-stringify-deterministic   91.25 ms/iter        (68 ms … 134 ms)    100 ms    134 ms    134 ms
jsesc                                       246.92 ms/iter       (224 ms … 280 ms)    254 ms    280 ms    280 ms
js-string-escape                             94.38 ms/iter        (76 ms … 116 ms)    104 ms    116 ms    116 ms
serialize-javascript                          38.7 ms/iter         (36 ms … 50 ms)     38 ms     50 ms     50 ms

summary
  escapeHtml
   2.12x faster than serialize-javascript
   4.4x faster than escapeHtml w/ json-stable-stringify
   4.8x faster than escapeHtml w/ fast-json-stable-stringify
   4.99x faster than escapeHtml w/ json-stringify-deterministic
   5.17x faster than js-string-escape
   13.52x faster than jsesc
```

## bun

```
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: bun 0.1.7 (x64-linux)

benchmark                                       time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------------------------------- -----------------------------
escapeHtml                                   15.62 ms/iter    (12.57 ms … 29.7 ms)  17.04 ms   29.7 ms   29.7 ms
escapeHtml w/ fast-json-stable-stringify     67.98 ms/iter  (38.69 ms … 118.54 ms)  78.15 ms 118.54 ms 118.54 ms
escapeHtml w/ json-stable-stringify           92.7 ms/iter     (75 ms … 121.41 ms)  95.96 ms 121.41 ms 121.41 ms
escapeHtml w/ json-stringify-deterministic  104.41 ms/iter   (83.5 ms … 128.75 ms) 115.91 ms 128.75 ms 128.75 ms
jsesc                                       377.89 ms/iter  (338.7 ms … 419.61 ms) 409.34 ms 419.61 ms 419.61 ms
js-string-escape                              56.6 ms/iter   (50.62 ms … 66.82 ms)   60.9 ms  66.82 ms  66.82 ms
serialize-javascript                         43.56 ms/iter      (37 ms … 65.06 ms)  51.06 ms  65.06 ms  65.06 ms

summary
  escapeHtml
   2.79x faster than serialize-javascript
   3.62x faster than js-string-escape
   4.35x faster than escapeHtml w/ fast-json-stable-stringify
   5.94x faster than escapeHtml w/ json-stable-stringify
   6.69x faster than escapeHtml w/ json-stringify-deterministic
   24.2x faster than jsesc
```
