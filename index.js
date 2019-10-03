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
const romajiToKanaTable = 
{
    // hiragana → ひらがな
    //
    "a": "あ",
    "i": "い",
    "u": "う",
    "e": "え",
    "o": "お",
    //
    "va": "ゔぁ",
    "vi": "ゔぃ",
    "vu": "ゔ",
    "ve": "ゔぇ",
    "vo": "ゔぉ",
    //
    "ka": "か",
    "ki": "き",
    "ku": "く",
    "ke": "け",
    "ko": "こ",
    "kya": "きゃ",
    "kyu": "きゅ",
    "kyo": "きょ",
    //
    "kye": "きぇ",
    //
    "ga": "が",
    "gi": "ぎ",
    "gu": "ぐ",
    "ge": "げ",
    "go": "ご",
    "gya": "ぎゃ",
    "gyu": "ぎゅ",
    "gyo": "ぎょ",
    //
    "gye": "ぎぇ",
    //
    "sa": "さ",
    "shi": "し", "si": "し",
    "su": "す",
    "se": "せ",
    "so": "そ",
    "sha": "しゃ", "sya": "しゃ",
    "shu": "しゅ", "syu": "しゅ",
    "sho": "しょ", "syo": "しょ",
    //
    "she": "しぇ",
    //
    "za": "ざ",
    "ji": "じ", "zi": "じ",
    "zu": "ず",
    "ze": "ぜ",
    "zo": "ぞ",
    "ja": "じゃ", "zya": "じゃ",
    "ju": "じゅ", "zyu": "じゅ",
    "jo": "じょ", "zyo": "じょ",
    //
    "je": "じぇ",
    //
    "ta": "た",
    "chi": "ち", "ti": "ち",
    "tsu": "つ", "tu": "つ",
    "te": "て",
    "to": "と",
    "cha": "ちゃ", "tya": "ちゃ",
    "chu": "ちゅ", "tyu": "ちゅ",
    "cho": "ちょ", "tyo": "ちょ",
    //
    "che": "ちぇ",
    //
    "da": "だ",
    "dji": "ぢ", "di": "ぢ",
    "dzu": "づ", "du": "づ",
    "de": "で",
    "do": "ど",
    "dja": "ぢゃ", "dya": "ぢゃ",
    "dju": "ぢゅ", "dyu": "ぢゅ",
    "djo": "ぢょ", "dyo": "ぢょ",
    //
    "dje": "ぢぇ",
    //
    "na": "な",
    "ni": "に",
    "nu": "ぬ",
    "ne": "ね",
    "no": "の",
    "nya": "にゃ",
    "nyu": "にゅ",
    "nyo": "にょ",
    //
    "nye": "にぇ",
    //
    "ha": "は",
    "hi": "ひ",
    "fu": "ふ", "hu": "ふ",
    "he": "へ",
    "ho": "ほ",
    "hya": "ひゃ",
    "hyu": "ひゅ",
    "hyo": "ひょ",
    //
    "hye": "ひぇ",
    //
    "fa": "ふぁ",
    "fi": "ふぃ",
    "fe": "ふぇ",
    "fo": "ふぉ",
    //
    "ba": "ば",
    "bi": "び",
    "bu": "ぶ",
    "be": "べ",
    "bo": "ぼ",
    "bya": "びゃ",
    "byu": "びゅ",
    "byo": "びょ",
    //
    "bye": "びぇ",
    //
    "pa": "ぱ",
    "pi": "ぴ",
    "pu": "ぷ",
    "pe": "ぺ",
    "po": "ぽ",
    "pya": "ぴゃ",
    "pyu": "ぴゅ",
    "pyo": "ぴょ",
    //
    "pye": "ぴぇ",
    //
    "ma": "ま",
    "mi": "み",
    "mu": "む",
    "me": "め",
    "mo": "も",
    "mya": "みゃ",
    "myu": "みゅ",
    "myo": "みょ",
    //
    "mye": "みぇ",
    //
    "ya": "や",
    "yu": "ゆ",
    "yo": "よ",
    //
    "ra": "ら",
    "ri": "り",
    "ru": "る",
    "re": "れ",
    "ro": "ろ",
    "rya": "りゃ",
    "ryu": "りゅ",
    "ryo": "りょ",
    //
    "rye": "りぇ",
    //
    "wa": "わ",
    "wi": "ゐ",
    "we": "ゑ",
    "wo": "を",
    //
    "n'a": "んあ",
    "n'i": "んい",
    "n'u": "んう",
    "n'e": "んえ",
    "n'o": "んお",
    "n'ya": "んや",
    "n'yu": "んゆ",
    "n'yo": "んよ",
    //
    "n": "ん",
    //
    "kk": [ "っ", -1 ],
    "gg": [ "っ", -1 ],
    "ss": [ "っ", -1 ],
    "zz": [ "っ", -1 ],
    "jj": [ "っ", -1 ],
    "tt": [ "っ", -1 ],
    "cc": [ "っ", -1 ], "tc": [ "っ", -1 ],
    "dd": [ "っ", -1 ],
    "hh": [ "っ", -1 ],
    "ff": [ "っ", -1 ],
    "bb": [ "っ", -1 ],
    "pp": [ "っ", -1 ],
    //
    // KATAKANA → カタカナ
    //
    "A": "ア",
    "I": "イ",
    "U": "ウ",
    "E": "エ",
    "O": "オ",
    //
    "VA": "ヴァ",
    "VI": "ヴィ",
    "VU": "ヴ",
    "VE": "ヴェ",
    "VO": "ヴォ",
    //
    "KA": "カ",
    "KI": "キ",
    "KU": "ク",
    "KE": "ケ",
    "KO": "コ",
    "KYA": "キャ",
    "KYU": "キュ",
    "KYO": "キョ",
    //
    "KYE": "キェ",
    //
    "GA": "ガ",
    "GI": "ギ",
    "GU": "グ",
    "GE": "ゲ",
    "GO": "ゴ",
    "GYA": "ギャ",
    "GYU": "ギュ",
    "GYO": "ギョ",
    //
    "GYE": "ギェ",
    //
    "SA": "サ",
    "SHI": "シ", "SI": "シ",
    "SU": "ス",
    "SE": "セ",
    "SO": "ソ",
    "SHA": "シャ", "SYA": "シャ",
    "SHU": "シュ", "SYU": "シュ",
    "SHO": "ショ", "SYO": "ショ",
    //
    "SHE": "シェ",
    //
    "ZA": "ザ",
    "JI": "ジ", "ZI": "ジ",
    "ZU": "ズ",
    "ZE": "ゼ",
    "ZO": "ゾ",
    "JA": "ジャ", "ZYA": "ジャ",
    "JU": "ジュ", "ZYU": "ジュ",
    "JO": "ジョ", "ZYO": "ジョ",
    //
    "JE": "ジェ",
    //
    "TA": "タ",
    "CHI": "チ", "TI": "チ",
    "TSU": "ツ", "TU": "ツ",
    "TE": "テ",
    "TO": "ト",
    "CHA": "チャ", "TYA": "チャ",
    "CHU": "チュ", "TYU": "チュ",
    "CHO": "チョ", "TYO": "チョ",
    //
    "CHE": "チェ",
    //
    "DA": "ダ",
    "DJI": "ヂ", "DI": "ヂ",
    "DZU": "ヅ", "DU": "ヅ",
    "DE": "デ",
    "DO": "ド",
    "DJA": "ヂャ", "DYA": "ヂャ",
    "DJU": "ヂュ", "DYU": "ヂュ",
    "DJO": "ヂョ", "DYO": "ヂョ",
    //
    "DJE": "ヂェ",
    //
    "NA": "ナ",
    "NI": "ニ",
    "NU": "ヌ",
    "NE": "ネ",
    "NO": "ノ",
    "NYA": "ニャ",
    "NYU": "ニュ",
    "NYO": "ニョ",
    //
    "NYE": "ニェ",
    //
    "HA": "ハ",
    "HI": "ヒ",
    "FU": "フ", "HU": "フ",
    "HE": "ヘ",
    "HO": "ホ",
    "HYA": "ヒャ",
    "HYU": "ヒュ",
    "HYO": "ヒョ",
    //
    "HYE": "ヒェ",
    //
    "FA": "ファ",
    "FI": "フィ",
    "FE": "フェ",
    "FO": "フォ",
    //
    "BA": "バ",
    "BI": "ビ",
    "BU": "ブ",
    "BE": "ベ",
    "BO": "ボ",
    "BYA": "ビャ",
    "BYU": "ビュ",
    "BYO": "ビョ",
    //
    "BYE": "ビェ",
    //
    "PA": "パ",
    "PI": "ピ",
    "PU": "プ",
    "PE": "ペ",
    "PO": "ポ",
    "PYA": "ピャ",
    "PYU": "ピュ",
    "PYO": "ピョ",
    //
    "PYE": "ピェ",
    //
    "MA": "マ",
    "MI": "ミ",
    "MU": "ム",
    "ME": "メ",
    "MO": "モ",
    "MYA": "ミャ",
    "MYU": "ミュ",
    "MYO": "ミョ",
    //
    "MYE": "ミェ",
    //
    "YA": "ヤ",
    "YU": "ユ",
    "YO": "ヨ",
    //
    "RA": "ラ",
    "RI": "リ",
    "RU": "ル",
    "RE": "レ",
    "RO": "ロ",
    "RYA": "リャ",
    "RYU": "リュ",
    "RYO": "リョ",
    //
    "RYE": "リェ",
    //
    "WA": "ワ",
    "WI": "ヰ",
    "WE": "ヱ",
    "WO": "ヲ",
    //
    "N'A": "ンア",
    "N'I": "ンイ",
    "N'U": "ンウ",
    "N'E": "ンエ",
    "N'O": "ンオ",
    "N'YA": "ンヤ",
    "N'YU": "ンユ",
    "N'YO": "ンヨ",
    //
    "N": "ン",
    //
    "KK": [ "ッ", -1 ],
    "GG": [ "ッ", -1 ],
    "SS": [ "ッ", -1 ],
    "ZZ": [ "ッ", -1 ],
    "JJ": [ "ッ", -1 ],
    "TT": [ "ッ", -1 ],
    "CC": [ "ッ", -1 ], "TC": [ "ッ", -1 ],
    "DD": [ "ッ", -1 ],
    "HH": [ "ッ", -1 ],
    "FF": [ "ッ", -1 ],
    "BB": [ "ッ", -1 ],
    "PP": [ "ッ", -1 ],
    //
    "-": "ー"
};
//
// Longest strings first
// let romajiKeys = Object.keys (romajiToKanaTable).sort ((a, b) => b.length - a.length);
let romajiKeys = Object.keys (romajiToKanaTable).sort ().reverse ();
let romajiRegex = new RegExp ("^(?:" + romajiKeys.join ("|") + ")");
//
module.exports.romajiToKana = function (romajiString)
{
    let kanaString = [ ];
    while (romajiString.length > 0)
    {
        let found = romajiString.match (romajiRegex);
        if (found)
        {
            let romaji = found[0];
            let kana = romajiToKanaTable[romaji];
            if (Array.isArray (kana))
            {
                kanaString.push (kana[0]);
                romajiString = romajiString.slice (romaji.length + kana[1]);
            }
            else
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
let kanaToRomajiTable = { };
//
for (let romaji in romajiToKanaTable)
{
    let kana = romajiToKanaTable[romaji];
    if (Array.isArray (kana))
    {
        if (!(kana[0] in kanaToRomajiTable))
        {
            kanaToRomajiTable[kana[0]] = [ ];
        }
        let geminated = romaji.slice (kana[1]);
        if (!kanaToRomajiTable[kana[0]].includes (geminated))
        {
            kanaToRomajiTable[kana[0]].push (geminated);
        }
    }
    else
    {
        if (!(kana in kanaToRomajiTable))
        {
            kanaToRomajiTable[kana] = romaji;
        }
    }
}
//
// Longest strings first
// let kanaKeys = Object.keys (kanaToRomajiTable).sort ((a, b) => b.length - a.length);
let kanaKeys = Object.keys (kanaToRomajiTable).sort ().reverse ();
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
            if (Array.isArray (romaji))
            {
                let nextKana = kanaString[kana.length];
                if ((nextKana in kanaToRomajiTable) && romaji.includes (kanaToRomajiTable[nextKana][0]))
                {
                    romajiString.push (kanaToRomajiTable[nextKana][0]);
                    kanaString = kanaString.slice (kana.length);
                }
                else
                {
                    romajiString.push (kana);
                    kanaString = kanaString.slice (kana.length);
                }
            }
            else
            {
                romajiString.push (romaji);
                kanaString = kanaString.slice (kana.length);
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
