//
// Transcription into Japanese - Wikipedia
// https://en.wikipedia.org/wiki/Transcription_into_Japanese
//
// Romanization of Japanese - Wikipedia
// https://en.wikipedia.org/wiki/Romanization_of_Japanese
//
// Nihon-shiki romanization - Wikipedia
// https://en.wikipedia.org/wiki/Nihon-shiki_romanization
//
// Kunrei-shiki romanization - Wikipedia
// https://en.wikipedia.org/wiki/Kunrei-shiki_romanization
//
// Hepburn romanization - Wikipedia
// https://en.wikipedia.org/wiki/Hepburn_romanization
//
// Wāpuro rōmaji - Wikipedia
// https://en.wikipedia.org/wiki/W%C4%81puro_r%C5%8Dmaji
//
// 外来語の表記：文部科学省
// http://www.mext.go.jp/b_menu/hakusho/nc/k19910628002/k19910628002.html
//
const hepburnToKanaTable = 
{
    // hiragana → ひらがな
    //
    "a": "あ",
    "i": "い",
    "u": "う",
    "e": "え",
    "o": "お",
    //
    "ka": "か",
    "ki": "き",
    "ku": "く",
    "ke": "け",
    "ko": "こ",
    //
    "kya": "きゃ",
    "kyi": "きぃ",
    "kyu": "きゅ",
    "kye": "きぇ",
    "kyo": "きょ",
    //
    "kwa": { "type": "hiragana", "kun-yomi": "くゎ", "gairaigo": "くぁ" },
    "kwi": "くぃ",
    "kwu": "くぅ",
    "kwe": "くぇ",
    "kwo": "くぉ",
    //
    "ga": "が",
    "gi": "ぎ",
    "gu": "ぐ",
    "ge": "げ",
    "go": "ご",
    //
    "gya": "ぎゃ",
    "gyi": "ぎぃ",
    "gyu": "ぎゅ",
    "gye": "ぎぇ",
    "gyo": "ぎょ",
    //
    "gwa": { "type": "hiragana", "kun-yomi": "ぐゎ", "gairaigo": "ぐぁ" },
    "gwi": "ぐぃ",
    "gwu": "ぐぅ",
    "gwe": "ぐぇ",
    "gwo": "ぐぉ",
    //
    "sa": "さ",
    "si": "すぃ",
    "su": "す",
    "se": "せ",
    "so": "そ",
    //
    "sha": "しゃ",
    "shi": "し",
    "shu": "しゅ",
    "she": "しぇ",
    "sho": "しょ",
    //
    "za": "ざ",
    "zi": "ずぃ",
    "zu": "ず",
    "ze": "ぜ",
    "zo": "ぞ",
    //
    "ja": "じゃ",
    "ji": "じ",
    "ju": "じゅ",
    "je": "じぇ",
    "jo": "じょ",
    //
    "ta": "た",
    "ti": "てぃ",
    "tu": [ "とぅ", "てぅ" ],
    "te": "て",
    "to": "と",
    //
    "tyu": "てゅ",
    //
    "cha": "ちゃ",
    "chi": "ち",
    "chu": "ちゅ",
    "che": "ちぇ",
    "cho": "ちょ",
    //
    "tsa": "つぁ",
    "tsi": "つぃ",
    "tsu": "つ",
    "tse": "つぇ",
    "tso": "つぉ",
    //
    "da": "だ",
    "di": "でぃ",
    "du": [ "どぅ", "でぅ" ],
    "de": "で",
    "do": "ど",
    //
    "dyu": "でゅ",
    //
    "dja": "ぢゃ",
    "dji": "ぢ",
    "dju": "ぢゅ",
    "dje": "ぢぇ",
    "djo": "ぢょ",
    //
    "dza": "づぁ",
    "dzi": "づぃ",
    "dzu": "づ",
    "dze": "づぇ",
    "dzo": "づぉ",
    //
    "na": "な",
    "ni": "に",
    "nu": "ぬ",
    "ne": "ね",
    "no": "の",
    //
    "nya": "にゃ",
    "nyi": "にぃ",
    "nyu": "にゅ",
    "nye": "にぇ",
    "nyo": "にょ",
    //
    "ha": "は",
    "hi": "ひ",
    "hu": "ほぅ",
    "he": "へ",
    "ho": "ほ",
    //
    "hya": "ひゃ",
    "hyi": "ひぃ",
    "hyu": "ひゅ",
    "hye": "ひぇ",
    "hyo": "ひょ",
    //
    "fa": "ふぁ",
    "fi": "ふぃ",
    "fu": "ふ",
    "fe": "ふぇ",
    "fo": "ふぉ",
    //
    "fya": "ふゃ",
    "fyu": "ふゅ",
    "fyo": "ふょ",
    //
    "ba": "ば",
    "bi": "び",
    "bu": "ぶ",
    "be": "べ",
    "bo": "ぼ",
    //
    "bya": "びゃ",
    "byi": "びぃ",
    "byu": "びゅ",
    "bye": "びぇ",
    "byo": "びょ",
    //
    "pa": "ぱ",
    "pi": "ぴ",
    "pu": "ぷ",
    "pe": "ぺ",
    "po": "ぽ",
    //
    "pya": "ぴゃ",
    "pyi": "ぴぃ",
    "pyu": "ぴゅ",
    "pye": "ぴぇ",
    "pyo": "ぴょ",
    //
    "ma": "ま",
    "mi": "み",
    "mu": "む",
    "me": "め",
    "mo": "も",
    //
    "mya": "みゃ",
    "myi": "みぃ",
    "myu": "みゅ",
    "mye": "みぇ",
    "myo": "みょ",
    //
    "ya": "や",
    "yi": "いぃ",
    "yu": "ゆ",
    "ye": "いぇ",
    "yo": "よ",
    //
    "ra": "ら",
    "ri": "り",
    "ru": "る",
    "re": "れ",
    "ro": "ろ",
    //
    "rya": "りゃ",
    "ryi": "りぃ",
    "ryu": "りゅ",
    "rye": "りぇ",
    "ryo": "りょ",
    //
    "wa": [ "わ", "うぁ" ],
    "wi": { "type": "hiragana", "kun-yomi": "ゐ", "gairaigo": "うぃ" },
    "wu": "うぅ",
    "we": { "type": "hiragana", "kun-yomi": "ゑ", "gairaigo": "うぇ" },
    "wo": { "type": "hiragana", "kun-yomi": "を", "gairaigo": "うぉ" },
    //
    "n'a": "んあ",
    "n'i": "んい",
    "n'u": "んう",
    "n'e": "んえ",
    "n'o": "んお",
    //
    "n'ya": "んや",
    "n'yu": "んゆ",
    "n'yo": "んよ",
    //
    "n": "ん",
    //
    "va": "ゔぁ",
    "vi": "ゔぃ",
    "vu": "ゔ",
    "ve": "ゔぇ",
    "vo": "ゔぉ",
    //
    "vya": "ゔゃ",
    "vyu": "ゔゅ",
    "vyo": "ゔょ",
    //
    "kk": [ 1, "っ" ],
    "gg": [ 1, "っ" ],
    "ss": [ 1, "っ" ],
    "zz": [ 1, "っ" ],
    "jj": [ 1, "っ" ],
    "tt": [ 1, "っ" ],
    "cc": [ 1, "っ" ], "tc": [ 1, "っ" ],
    "dd": [ 1, "っ" ],
    "hh": [ 1, "っ" ],
    "ff": [ 1, "っ" ],
    "bb": [ 1, "っ" ],
    "pp": [ 1, "っ" ],
    "rr": [ 1, "っ" ],
    //
    // KATAKANA → カタカナ
    //
    "A": "ア",
    "I": "イ",
    "U": "ウ",
    "E": "エ",
    "O": "オ",
    //
    "KA": "カ",
    "KI": "キ",
    "KU": "ク",
    "KE": "ケ",
    "KO": "コ",
    //
    "KYA": "キャ",
    "KYI": "キィ",
    "KYU": "キュ",
    "KYE": "キェ",
    "KYO": "キョ",
    //
    "KWA": { "type": "katakana", "gairaigo": "クァ", "on-yomi": "クヮ" },
    "KWI": "クィ",
    "KWU": "クゥ",
    "KWE": "クェ",
    "KWO": "クォ",
    //
    "GA": "ガ",
    "GI": "ギ",
    "GU": "グ",
    "GE": "ゲ",
    "GO": "ゴ",
    //
    "GYA": "ギャ",
    "GYI": "ギィ",
    "GYU": "ギュ",
    "GYE": "ギェ",
    "GYO": "ギョ",
    //
    "GWA": { "type": "katakana", "gairaigo": "グァ", "on-yomi": "グヮ" },
    "GWI": "グィ",
    "GWU": "グゥ",
    "GWE": "グェ",
    "GWO": "グォ",
    //
    "SA": "サ",
    "SI": "スィ",
    "SU": "ス",
    "SE": "セ",
    "SO": "ソ",
    //
    "SHA": "シャ",
    "SHI": "シ",
    "SHU": "シュ",
    "SHE": "シェ",
    "SHO": "ショ",
    //
    "ZA": "ザ",
    "ZI": "ズィ",
    "ZU": "ズ",
    "ZE": "ゼ",
    "ZO": "ゾ",
    //
    "JA": "ジャ",
    "JI": "ジ",
    "JU": "ジュ",
    "JE": "ジェ",
    "JO": "ジョ",
    //
    "TA": "タ",
    "TI": "ティ",
    "TU": [ "トゥ", "テゥ" ],
    "TE": "テ",
    "TO": "ト",
    //
    "TYU": "テュ",
    //
    "CHA": "チャ",
    "CHI": "チ",
    "CHU": "チュ",
    "CHE": "チェ",
    "CHO": "チョ",
    //
    "TSA": "ツァ",
    "TSI": "ツィ",
    "TSU": "ツ",
    "TSE": "ツェ",
    "TSO": "ツォ",
    //
    "DA": "ダ",
    "DI": "ディ",
    "DU": [ "ドゥ", "デゥ" ],
    "DE": "デ",
    "DO": "ド",
    //
    "DYU": "デュ",
    //
    "DJA": "ヂャ",
    "DJI": "ヂ",
    "DJU": "ヂュ",
    "DJE": "ヂェ",
    "DJO": "ヂョ",
    //
    "DZA": "ヅァ",
    "DZI": "ヅィ",
    "DZU": "ヅ",
    "DZE": "ヅェ",
    "DZO": "ヅォ",
    //
    //
    "NA": "ナ",
    "NI": "ニ",
    "NU": "ヌ",
    "NE": "ネ",
    "NO": "ノ",
    //
    "NYA": "ニャ",
    "NYI": "ニィ",
    "NYU": "ニュ",
    "NYE": "ニェ",
    "NYO": "ニョ",
    //
    "HA": "ハ",
    "HI": "ヒ",
    "HU": "ホゥ",
    "HE": "ヘ",
    "HO": "ホ",
    //
    "HYA": "ヒャ",
    "HYI": "ヒィ",
    "HYU": "ヒュ",
    "HYE": "ヒェ",
    "HYO": "ヒョ",
    //
    "FA": "ファ",
    "FI": "フィ",
    "FU": "フ",
    "FE": "フェ",
    "FO": "フォ",
    //
    "FYA": "フャ",
    "FYU": "フュ",
    "FYO": "フョ",
    //
    "BA": "バ",
    "BI": "ビ",
    "BU": "ブ",
    "BE": "ベ",
    "BO": "ボ",
    //
    "BYA": "ビャ",
    "BYI": "ビィ",
    "BYU": "ビュ",
    "BYE": "ビェ",
    "BYO": "ビョ",
    //
    "PA": "パ",
    "PI": "ピ",
    "PU": "プ",
    "PE": "ペ",
    "PO": "ポ",
    //
    "PYA": "ピャ",
    "PYI": "ピィ",
    "PYU": "ピュ",
    "PYE": "ピェ",
    "PYO": "ピョ",
    //
    "MA": "マ",
    "MI": "ミ",
    "MU": "ム",
    "ME": "メ",
    "MO": "モ",
    //
    "MYA": "ミャ",
    "MYI": "ミィ",
    "MYU": "ミュ",
    "MYE": "ミェ",
    "MYO": "ミョ",
    //
    "YA": "ヤ",
    "YI": "イィ",
    "YU": "ユ",
    "YE": "イェ",
    "YO": "ヨ",
    //
    "RA": "ラ",
    "RI": "リ",
    "RU": "ル",
    "RE": "レ",
    "RO": "ロ",
    //
    "RYA": "リャ",
    "RYI": "リィ",
    "RYU": "リュ",
    "RYE": "リェ",
    "RYO": "リョ",
    //
    "WA": [ "ワ", "ウァ" ],
    "WI": { "type": "katakana", "gairaigo": "ウィ", "on-yomi": "ヰ" },
    "WU": "ウゥ",
    "WE": { "type": "katakana", "gairaigo": "ウェ", "on-yomi": "ヱ" },
    "WO": { "type": "katakana", "gairaigo": "ウォ", "on-yomi": "ヲ" },
    //
    "N'A": "ンア",
    "N'I": "ンイ",
    "N'U": "ンウ",
    "N'E": "ンエ",
    "N'O": "ンオ",
    //
    "N'YA": "ンヤ",
    "N'YU": "ンユ",
    "N'YO": "ンヨ",
    //
    "N": "ン",
    //
    "VA": [ "ヴァ", "ヷ" ],
    "VI": [ "ヴィ", "ヸ" ],
    "VU": "ヴ",
    "VE": [ "ヴェ", "ヹ" ],
    "VO": [ "ヴォ", "ヺ" ],
    //
    "VYA": "ヴャ",
    "VYU": "ヴュ",
    "VYO": "ヴョ",
    //
    "KK": [ 1, "ッ" ],
    "GG": [ 1, "ッ" ],
    "SS": [ 1, "ッ" ],
    "ZZ": [ 1, "ッ" ],
    "JJ": [ 1, "ッ" ],
    "TT": [ 1, "ッ" ],
    "CC": [ 1, "ッ" ], "TC": [ 1, "ッ" ],
    "DD": [ 1, "ッ" ],
    "HH": [ 1, "ッ" ],
    "FF": [ 1, "ッ" ],
    "BB": [ 1, "ッ" ],
    "PP": [ 1, "ッ" ],
    "RR": [ 1, "ッ" ],
    //
    "-": "ー"
};
//
// Longest strings first
// let romajiKeys = Object.keys (hepburnToKanaTable).sort ((a, b) => b.length - a.length);
let romajiKeys = Object.keys (hepburnToKanaTable).sort ((a, b) => a.localeCompare (b)).reverse ();
let romajiRegex = new RegExp ("^(?:" + romajiKeys.join ("|") + ")");
//
module.exports.romajiToKana = function (romajiString, options)
{
    let { hiragana = 'kun-yomi', katakana = 'gairaigo' } = options || { };
    //
    let kanaString = [ ];
    while (romajiString.length > 0)
    {
        let found = romajiString.match (romajiRegex);
        if (found)
        {
            let romaji = found[0];
            let kana = hepburnToKanaTable[romaji];
            if (Array.isArray (kana))
            {
                if (typeof kana[0] === 'number')
                {
                    kanaString.push (kana[1]);
                    romajiString = romajiString.slice (kana[0]);
                }
                else // if (typeof kana[0] === 'string')
                {
                    kanaString.push (kana[0]);
                    romajiString = romajiString.slice (romaji.length);
                }
            }
            else if (typeof kana === 'object')
            {
                if (kana.type === 'hiragana')
                {
                    kanaString.push (kana[hiragana]);
                }
                else if (kana.type === 'katakana')
                {
                    kanaString.push (kana[katakana]);
                }
                romajiString = romajiString.slice (romaji.length);
            }
            else // if (typeof kana === 'string')
            {
                kanaString.push (kana);
                romajiString = romajiString.slice (romaji.length);
            }
        }
        else
        {
            let romaji = romajiString[0];
            kanaString.push (romaji);
            romajiString = romajiString.slice (romaji.length);
        }
    }
    return kanaString.join ("");
}
//
// Build reverse table programmatically
//
let kanaToRomajiTable = { };
//
for (let romaji in hepburnToKanaTable)
{
    let kana = hepburnToKanaTable[romaji];
    if (Array.isArray (kana))
    {
        if (typeof kana[0] === 'number')
        {
            if (!(kana[1] in kanaToRomajiTable))
            {
                kanaToRomajiTable[kana[1]] = [ ];
            }
            let geminated = romaji.slice (kana[0]);
            if (!kanaToRomajiTable[kana[1]].includes (geminated))
            {
                kanaToRomajiTable[kana[1]].push (geminated);
            }
        }
        else // if (typeof kana[0] === 'string')
        {
            for (let kana1 of kana)
            {
                if (!(kana1 in kanaToRomajiTable))
                {
                    kanaToRomajiTable[kana1] = romaji;
                    let decomposedKana = kana1.normalize ('NFD');
                    if (decomposedKana !== kana1)
                    {
                        kanaToRomajiTable[decomposedKana] = romaji;
                    }
                }
            }
        }
    }
    else if (typeof kana === 'object')
    {
        for (let kana1 of [ kana["kun-yomi"], kana["on-yomi"], kana["gairaigo"] ])
        {
            if (kana1)
            {
                if (!(kana1 in kanaToRomajiTable))
                {
                    kanaToRomajiTable[kana1] = romaji;
                    let decomposedKana = kana1.normalize ('NFD');
                    if (decomposedKana !== kana1)
                    {
                        kanaToRomajiTable[decomposedKana] = romaji;
                    }
                }
            }
        }
    }
    else
    {
        if (!(kana in kanaToRomajiTable))
        {
            kanaToRomajiTable[kana] = romaji;
            let decomposedKana = kana.normalize ('NFD');
            if (decomposedKana !== kana)
            {
                kanaToRomajiTable[decomposedKana] = romaji;
            }
        }
    }
}
//
// Longest strings first
// let kanaKeys = Object.keys (kanaToRomajiTable).sort ((a, b) => b.length - a.length);
let kanaKeys = Object.keys (kanaToRomajiTable).sort ((a, b) => a.localeCompare (b)).reverse ();
let kanaRegex = new RegExp ("^(?:" + kanaKeys.join ("|") + ")");
//
module.exports.kanaToRomaji = function (kanaString)
{
    let romajiString = [ ];
    while (kanaString.length > 0)
    {
        let found = kanaString.match (kanaRegex);
        if (found)
        {
            let kana = found[0];
            let romaji = kanaToRomajiTable[kana];
            kanaString = kanaString.slice (kana.length);
            if (Array.isArray (romaji))
            {
                let nextFound = kanaString.match (kanaRegex);
                if (nextFound && romaji.includes (kanaToRomajiTable[nextFound[0]][0]))
                {
                    romajiString.push (kanaToRomajiTable[nextFound[0]][0]);
                }
                else
                {
                    romajiString.push (kana);
                }
            }
            else
            {
                romajiString.push (romaji);
            }
        }
        else
        {
            let kana = kanaString[0];
            romajiString.push (kana);
            kanaString = kanaString.slice (kana.length);
        }
    }
    return romajiString.join ("");
}
//
