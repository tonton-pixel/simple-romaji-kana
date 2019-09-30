# Simple Romaji to Kana Converter

## Description

This Node module performs a simple rōmaji to kana conversion of a given string.

## Installing

Switch to your *project* directory (`cd`) then run:

```bash
npm install simple-romaji-kana
```

## Example

```javascript
const { romajiToKana } = require ('simple-romaji-kana');
const samples =
[
    "tatami",
    "JOU",
    "hanadji",
    "kamidzutsumi",
    "RAJIUMU",
    "FI-TO"
];
for (let sample of samples)
{
    console.log (sample, "→", romajiToKana (sample));
}
```

## License

The MIT License (MIT).

Copyright © 2019 Michel MARIANI.
