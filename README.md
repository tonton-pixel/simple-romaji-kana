# Simple Romaji-Kana Converters

## Description

This Node module performs simple Hepburn-based rōmaji-to-kana and kana-to-rōmaji conversions of a given string.

## Installing

Switch to your *project* directory (`cd`) then run:

```bash
npm install simple-romaji-kana
```
## Usage

```javascript
const { romajiToKana, kanaToRomaji } = require ('simple-romaji-kana');
```

### romajiToKana

```javascript
romajiToKana (romajiString[, options]);
```

- `romajiString`: string of *rōmaji* letters; small letters are automatically converted to hiragana (ひらがな) characters, and capital letters to katakana (カタカナ) characters.

- `options` (optional): object litteral with two optional keys representing the conversion intents:
    - `hiragana`: either `'kun-yomi'` (by default) or `'gairaigo'`;
    - `katakana`: either `'on-yomi'` or `'gairaigo'` (by default).

- **returns**: string of *kana* characters.

### kanaToRomaji

```javascript
kanaToRomaji (kanaString);
```
- `kanaString`: string of *kana* characters; hiragana (ひらがな) characters are automatically converted to small rōmaji letters, and katakana (カタカナ) characters to capital rōmaji letters.

- **returns**: string of *rōmaji* letters.

## Examples

### romajiToKana

```javascript
const { romajiToKana } = require ('simple-romaji-kana');
const samples =
[
    "tatami",
    "JOU",
    "hanadji",
    "kamidzutsumi",
    "kan'i",
    "kani",
    "KAN",
    "kon'yaku",
    "konnyaku",
    "chousenninjin",
    "maccha",
    "hanawokamu"
];
let options =
{
    hiragana: 'kun-yomi',
    katakana: 'on-yomi'
};
for (let sample of samples)
{
    console.log (`${sample} → ${romajiToKana (sample, options)}`);
}
```

```javascript
const { romajiToKana } = require ('simple-romaji-kana');
const gairaigoSamples =
[
    "RAJIUMU",
    "FI-TO",
    "KONYAKKU",
    "MATCHI",
    "BE-TO-VEN",
    "WO-KUMAN"
];
for (let sample of gairaigoSamples)
{
    console.log (`${sample} → ${romajiToKana (sample)}`);
}
```

### kanaToRomaji

```javascript
const { kanaToRomaji } = require ('simple-romaji-kana');
const samples =
[
    "たたみ",
    "ジョウ",
    "はなぢ",
    "かみづつみ",
    "かんい",
    "かに",
    "カン",
    "こんやく",
    "こんにゃく",
    "ちょうせんにんじん",
    "まっちゃ",
    "はなをかむ"
];
for (let sample of samples)
{
    console.log (`${sample} → ${kanaToRomaji (sample)}`);
}
```

```javascript
const { kanaToRomaji } = require ('simple-romaji-kana');
const gairaigoSamples =
[
    "ラジウム",
    "フィート",
    "コニャック",
    "マッチ",
    "ベートーヴェン",
    "ウォークマン"
];
for (let sample of gairaigoSamples)
{
    console.log (`${sample} → ${kanaToRomaji (sample)}`);
}
```

## License

The MIT License (MIT).

Copyright © 2019 Michel MARIANI.
