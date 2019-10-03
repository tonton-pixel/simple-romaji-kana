# Simple Romaji to Kana Converter

## Description

This Node module performs simple rōmaji-to-kana and kana-to-rōmaji conversions of a given string.

## Installing

Switch to your *project* directory (`cd`) then run:

```bash
npm install simple-romaji-kana
```

## Examples

```javascript
const { romajiToKana } = require ('simple-romaji-kana');
const samples =
[
    "tatami",
    "JOU",
    "hanadji",
    "kamidzutsumi",
    "RAJIUMU",
    "FI-TO",
    "kan'i",
    "kani",
    "KAN",
    "kon'yaku",
    "konnyaku",
    "KONYAKKU",
    "chousenninjin"
];
for (let sample of samples)
{
    console.log (`${sample} → ${romajiToKana (sample)}`);
}
```

```javascript
const { kanaToRomaji } = require ('simple-romaji-kana');
const samples =
[
    "たたみ",
    "ジョウ",
    "はなぢ",
    "かみづつみ",
    "ラジウム",
    "フィート",
    "かんい",
    "かに",
    "カン",
    "こんやく",
    "こんにゃく",
    "コニャック",
    "ちょうせんにんじん"
];
for (let sample of samples)
{
    console.log (`${sample} → ${kanaToRomaji (sample)}`);
}
```

## License

The MIT License (MIT).

Copyright © 2019 Michel MARIANI.
