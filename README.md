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
escapeHtml                                   18.69 ms/iter   (17.17 ms … 32.03 ms)  17.95 ms  32.03 ms  32.03 ms
escapeHtml w/ fast-json-stable-stringify      99.6 ms/iter  (86.78 ms … 146.71 ms)  97.41 ms 146.71 ms 146.71 ms
escapeHtml w/ json-stable-stringify         103.18 ms/iter  (75.77 ms … 134.89 ms) 116.19 ms 134.89 ms 134.89 ms
escapeHtml w/ json-stringify-deterministic  105.39 ms/iter  (89.47 ms … 131.08 ms) 115.49 ms 131.08 ms 131.08 ms
escapeHtml w/ superjson.stringify           351.23 ms/iter    (322 ms … 432.56 ms) 362.27 ms 432.56 ms 432.56 ms
jsesc                                       258.64 ms/iter (237.88 ms … 289.99 ms) 263.97 ms 289.99 ms 289.99 ms
js-string-escape                            106.71 ms/iter  (92.13 ms … 132.33 ms) 117.55 ms 132.33 ms 132.33 ms
serialize-javascript                         43.52 ms/iter   (40.56 ms … 73.23 ms)  42.22 ms  73.23 ms  73.23 ms
remix-typedjson serialize                    42.35 ms/iter   (40.97 ms … 50.97 ms)  42.53 ms  50.97 ms  50.97 ms

summary
  escapeHtml
   2.27x faster than remix-typedjson serialize
   2.33x faster than serialize-javascript
   5.33x faster than escapeHtml w/ fast-json-stable-stringify
   5.52x faster than escapeHtml w/ json-stable-stringify
   5.64x faster than escapeHtml w/ json-stringify-deterministic
   5.71x faster than js-string-escape
   13.84x faster than jsesc
   18.79x faster than escapeHtml w/ superjson.stringify
```

## deno

```
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: deno 1.24.2 (x86_64-unknown-linux-gnu)

benchmark                                       time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------------------------------- -----------------------------
escapeHtml                                   18.21 ms/iter         (16 ms … 28 ms)     18 ms     28 ms     28 ms
escapeHtml w/ fast-json-stable-stringify     91.63 ms/iter        (78 ms … 112 ms)     98 ms    112 ms    112 ms
escapeHtml w/ json-stable-stringify          78.63 ms/iter        (66 ms … 104 ms)     86 ms    104 ms    104 ms
escapeHtml w/ json-stringify-deterministic      91 ms/iter        (68 ms … 114 ms)     98 ms    114 ms    114 ms
escapeHtml w/ superjson.stringify           282.17 ms/iter       (222 ms … 330 ms)    296 ms    330 ms    330 ms
jsesc                                        257.5 ms/iter       (214 ms … 316 ms)    262 ms    316 ms    316 ms
js-string-escape                             93.13 ms/iter        (68 ms … 140 ms)    100 ms    140 ms    140 ms
serialize-javascript                         37.17 ms/iter         (34 ms … 56 ms)     36 ms     56 ms     56 ms
remix-typedjson serialize                     39.3 ms/iter         (36 ms … 52 ms)     40 ms     52 ms     52 ms

summary
  escapeHtml
   2.04x faster than serialize-javascript
   2.16x faster than remix-typedjson serialize
   4.32x faster than escapeHtml w/ json-stable-stringify
   5x faster than escapeHtml w/ json-stringify-deterministic
   5.03x faster than escapeHtml w/ fast-json-stable-stringify
   5.11x faster than js-string-escape
   14.14x faster than jsesc
   15.49x faster than escapeHtml w/ superjson.stringify
```

## bun

```
cpu: AMD Ryzen 9 5950X 16-Core Processor
runtime: bun 0.1.7 (x64-linux)

benchmark                                       time (avg)             (min … max)       p75       p99      p995
---------------------------------------------------------------------------------- -----------------------------
escapeHtml                                   16.52 ms/iter   (12.63 ms … 27.59 ms)   19.2 ms  27.59 ms  27.59 ms
escapeHtml w/ fast-json-stable-stringify     71.21 ms/iter  (36.81 ms … 115.82 ms)  85.07 ms 115.82 ms 115.82 ms
escapeHtml w/ json-stable-stringify          86.25 ms/iter  (75.94 ms … 100.95 ms)  88.78 ms 100.95 ms 100.95 ms
escapeHtml w/ json-stringify-deterministic  102.73 ms/iter  (86.99 ms … 123.89 ms) 113.67 ms 123.89 ms 123.89 ms
escapeHtml w/ superjson.stringify           335.48 ms/iter (306.11 ms … 375.03 ms) 346.22 ms 375.03 ms 375.03 ms
jsesc                                       362.84 ms/iter (311.86 ms … 411.93 ms) 378.95 ms 411.93 ms 411.93 ms
js-string-escape                             57.69 ms/iter   (49.14 ms … 77.58 ms)  64.16 ms  77.58 ms  77.58 ms
serialize-javascript                         39.93 ms/iter   (33.62 ms … 48.89 ms)  43.35 ms  48.89 ms  48.89 ms
remix-typedjson serialize                    41.88 ms/iter   (33.17 ms … 64.09 ms)  45.69 ms  64.09 ms  64.09 ms

summary
  escapeHtml
   2.42x faster than serialize-javascript
   2.54x faster than remix-typedjson serialize
   3.49x faster than js-string-escape
   4.31x faster than escapeHtml w/ fast-json-stable-stringify
   5.22x faster than escapeHtml w/ json-stable-stringify
   6.22x faster than escapeHtml w/ json-stringify-deterministic
   20.31x faster than escapeHtml w/ superjson.stringify
   21.96x faster than jsesc
```
