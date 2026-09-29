/**
 * TextImportCharacterSet.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TextImportCharacterSet: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TextImportCharacterSet extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TextImportCharacterSet>): boolean;

  /**
   * @internal **WARNING:** `__TextImportCharacterSet` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TextImportCharacterSet]: never;
}


/**
 * The ANSI character set.
 */
interface TextImportCharacterSet_ANSI extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095652169;
}

/**
 * The Recommend:Shift_JIS 83pv character set.
 */
interface TextImportCharacterSet_RECOMMENDSHIFTJIS83PV extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1412969328;
}

/**
 * The Shift_JIS 90pv character set.
 */
interface TextImportCharacterSet_SHIFTJIS90PV extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1413034096;
}

/**
 * The Shift_JIS 90ms character set.
 */
interface TextImportCharacterSet_SHIFTJIS90MS extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1413034093;
}

/**
 * The GB2312 character set.
 */
interface TextImportCharacterSet_GB2312 extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416061535;
}

/**
 * The Chinese Big 5 character set.
 */
interface TextImportCharacterSet_CHINESE_BIG_5 extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1415799349;
}

/**
 * The Macintosh CE (Central European) character set.
 */
interface TextImportCharacterSet_MACINTOSH_CE extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416446789;
}

/**
 * The Macintosh Cyrillic character set.
 */
interface TextImportCharacterSet_MACINTOSH_CYRILLIC extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416446841;
}

/**
 * The Macintosh Greek character set.
 */
interface TextImportCharacterSet_MACINTOSH_GREEK extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416447858;
}

/**
 * The Macintosh Turkish character set.
 */
interface TextImportCharacterSet_MACINTOSH_TURKISH extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416451186;
}

/**
 * The Windows Cyrillic character set.
 */
interface TextImportCharacterSet_WINDOWS_CYRILLIC extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1417102201;
}

/**
 * The Windows EE (Eastern European) character set.
 */
interface TextImportCharacterSet_WINDOWS_EE extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1417102661;
}

/**
 * The Windows Greek character set.
 */
interface TextImportCharacterSet_WINDOWS_GREEK extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1417103218;
}

/**
 * The Windows Turkish character set.
 */
interface TextImportCharacterSet_WINDOWS_TURKISH extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1417106549;
}

/**
 * The GB18030 character set.
 */
interface TextImportCharacterSet_GB18030 extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416061491;
}

/**
 * The KSC5601 character set.
 */
interface TextImportCharacterSet_KSC5601 extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414230883;
}

/**
 * The Windows Baltic character set.
 */
interface TextImportCharacterSet_WINDOWS_BALTIC extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1417101940;
}

/**
 * The Windows CE (Central European) character set.
 */
interface TextImportCharacterSet_WINDOWS_CE extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1417102149;
}

/**
 * The Macintosh Roman character set.
 */
interface TextImportCharacterSet_MACINTOSH_ROMAN extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416450669;
}

/**
 * The Macintosh Croatian character set.
 */
interface TextImportCharacterSet_MACINTOSH_CROATIAN extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416446834;
}

/**
 * The Macintosh Icelandic character set.
 */
interface TextImportCharacterSet_MACINTOSH_ICELANDIC extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416448355;
}

/**
 * The Macintosh Romanian character set.
 */
interface TextImportCharacterSet_MACINTOSH_ROMANIAN extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416450671;
}

/**
 * The Cyrillic (KOI8R) character set.
 */
interface TextImportCharacterSet_CYRILLIC_KOI8R extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416312946;
}

/**
 * The Cyrillic (KOI8U) character set.
 */
interface TextImportCharacterSet_CYRILLIC_KOI8U extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416312949;
}

/**
 * The Cyrillic (CP855) character set.
 */
interface TextImportCharacterSet_CYRILLIC_CP855 extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1415788597;
}

/**
 * The DOS Latin 2 character set.
 */
interface TextImportCharacterSet_DOS_LATIN_2 extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1415867442;
}

/**
 * The Cyrillic (ISO) character set.
 */
interface TextImportCharacterSet_CYRILLIC_ISO extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416184697;
}

/**
 * The Greek (ISO) character set.
 */
interface TextImportCharacterSet_GREEK_ISO extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416185707;
}

/**
 * The Central European (ISO) character set.
 */
interface TextImportCharacterSet_CENTRALEUROPEAN_ISO extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416184645;
}

/**
 * The Turkish (ISO) character set.
 */
interface TextImportCharacterSet_TURKISH_ISO extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416189045;
}

/**
 * The Macintosh Greek (Shared caps) character set.
 */
interface TextImportCharacterSet_MACINTOSH_GREEK_SHARED_CAPS extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416447794;
}

/**
 * The Macintosh Arabic character set.
 */
interface TextImportCharacterSet_MACINTOSH_ARABIC extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416446322;
}

/**
 * The Macintosh Hebrew character set.
 */
interface TextImportCharacterSet_MACINTOSH_HEBREW extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416448098;
}

/**
 * The Windows Arabic character set.
 */
interface TextImportCharacterSet_WINDOWS_ARABIC extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1417101682;
}

/**
 * The Windows Hebrew character set.
 */
interface TextImportCharacterSet_WINDOWS_HEBREW extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1417103458;
}

/**
 * The Arabic ASMO character set.
 */
interface TextImportCharacterSet_ARABIC_ASMO extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1415672685;
}

/**
 * The Arabic ASMO transparent character set.
 */
interface TextImportCharacterSet_ARABIC_ASMO_TRANSPARENT extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1415672692;
}

/**
 * The Unicode UTF16 character set.
 */
interface TextImportCharacterSet_UTF16 extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937125686;
}

/**
 * The Unicode UTF8 character set.
 */
interface TextImportCharacterSet_UTF8 extends TextImportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937134904;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which character set an imported text file is read as.
 */
export declare namespace TextImportCharacterSet {
/**
 * The ANSI character set.
 */
type ANSI = TextImportCharacterSet_ANSI;

/**
 * The Recommend:Shift_JIS 83pv character set.
 */
type RECOMMENDSHIFTJIS83PV = TextImportCharacterSet_RECOMMENDSHIFTJIS83PV;

/**
 * The Shift_JIS 90pv character set.
 */
type SHIFTJIS90PV = TextImportCharacterSet_SHIFTJIS90PV;

/**
 * The Shift_JIS 90ms character set.
 */
type SHIFTJIS90MS = TextImportCharacterSet_SHIFTJIS90MS;

/**
 * The GB2312 character set.
 */
type GB2312 = TextImportCharacterSet_GB2312;

/**
 * The Chinese Big 5 character set.
 */
type CHINESE_BIG_5 = TextImportCharacterSet_CHINESE_BIG_5;

/**
 * The Macintosh CE (Central European) character set.
 */
type MACINTOSH_CE = TextImportCharacterSet_MACINTOSH_CE;

/**
 * The Macintosh Cyrillic character set.
 */
type MACINTOSH_CYRILLIC = TextImportCharacterSet_MACINTOSH_CYRILLIC;

/**
 * The Macintosh Greek character set.
 */
type MACINTOSH_GREEK = TextImportCharacterSet_MACINTOSH_GREEK;

/**
 * The Macintosh Turkish character set.
 */
type MACINTOSH_TURKISH = TextImportCharacterSet_MACINTOSH_TURKISH;

/**
 * The Windows Cyrillic character set.
 */
type WINDOWS_CYRILLIC = TextImportCharacterSet_WINDOWS_CYRILLIC;

/**
 * The Windows EE (Eastern European) character set.
 */
type WINDOWS_EE = TextImportCharacterSet_WINDOWS_EE;

/**
 * The Windows Greek character set.
 */
type WINDOWS_GREEK = TextImportCharacterSet_WINDOWS_GREEK;

/**
 * The Windows Turkish character set.
 */
type WINDOWS_TURKISH = TextImportCharacterSet_WINDOWS_TURKISH;

/**
 * The GB18030 character set.
 */
type GB18030 = TextImportCharacterSet_GB18030;

/**
 * The KSC5601 character set.
 */
type KSC5601 = TextImportCharacterSet_KSC5601;

/**
 * The Windows Baltic character set.
 */
type WINDOWS_BALTIC = TextImportCharacterSet_WINDOWS_BALTIC;

/**
 * The Windows CE (Central European) character set.
 */
type WINDOWS_CE = TextImportCharacterSet_WINDOWS_CE;

/**
 * The Macintosh Roman character set.
 */
type MACINTOSH_ROMAN = TextImportCharacterSet_MACINTOSH_ROMAN;

/**
 * The Macintosh Croatian character set.
 */
type MACINTOSH_CROATIAN = TextImportCharacterSet_MACINTOSH_CROATIAN;

/**
 * The Macintosh Icelandic character set.
 */
type MACINTOSH_ICELANDIC = TextImportCharacterSet_MACINTOSH_ICELANDIC;

/**
 * The Macintosh Romanian character set.
 */
type MACINTOSH_ROMANIAN = TextImportCharacterSet_MACINTOSH_ROMANIAN;

/**
 * The Cyrillic (KOI8R) character set.
 */
type CYRILLIC_KOI8R = TextImportCharacterSet_CYRILLIC_KOI8R;

/**
 * The Cyrillic (KOI8U) character set.
 */
type CYRILLIC_KOI8U = TextImportCharacterSet_CYRILLIC_KOI8U;

/**
 * The Cyrillic (CP855) character set.
 */
type CYRILLIC_CP855 = TextImportCharacterSet_CYRILLIC_CP855;

/**
 * The DOS Latin 2 character set.
 */
type DOS_LATIN_2 = TextImportCharacterSet_DOS_LATIN_2;

/**
 * The Cyrillic (ISO) character set.
 */
type CYRILLIC_ISO = TextImportCharacterSet_CYRILLIC_ISO;

/**
 * The Greek (ISO) character set.
 */
type GREEK_ISO = TextImportCharacterSet_GREEK_ISO;

/**
 * The Central European (ISO) character set.
 */
type CENTRALEUROPEAN_ISO = TextImportCharacterSet_CENTRALEUROPEAN_ISO;

/**
 * The Turkish (ISO) character set.
 */
type TURKISH_ISO = TextImportCharacterSet_TURKISH_ISO;

/**
 * The Macintosh Greek (Shared caps) character set.
 */
type MACINTOSH_GREEK_SHARED_CAPS = TextImportCharacterSet_MACINTOSH_GREEK_SHARED_CAPS;

/**
 * The Macintosh Arabic character set.
 */
type MACINTOSH_ARABIC = TextImportCharacterSet_MACINTOSH_ARABIC;

/**
 * The Macintosh Hebrew character set.
 */
type MACINTOSH_HEBREW = TextImportCharacterSet_MACINTOSH_HEBREW;

/**
 * The Windows Arabic character set.
 */
type WINDOWS_ARABIC = TextImportCharacterSet_WINDOWS_ARABIC;

/**
 * The Windows Hebrew character set.
 */
type WINDOWS_HEBREW = TextImportCharacterSet_WINDOWS_HEBREW;

/**
 * The Arabic ASMO character set.
 */
type ARABIC_ASMO = TextImportCharacterSet_ARABIC_ASMO;

/**
 * The Arabic ASMO transparent character set.
 */
type ARABIC_ASMO_TRANSPARENT = TextImportCharacterSet_ARABIC_ASMO_TRANSPARENT;

/**
 * The Unicode UTF16 character set.
 */
type UTF16 = TextImportCharacterSet_UTF16;

/**
 * The Unicode UTF8 character set.
 */
type UTF8 = TextImportCharacterSet_UTF8;

}
/**
 * Which character set an imported text file is read as.
 */
export declare const TextImportCharacterSet: typeof Enumeration & {

  /**
   * The ANSI character set.
   */
  readonly ANSI: TextImportCharacterSet_ANSI;
  /**
   * The ANSI character set.
   */
  readonly ansi: TextImportCharacterSet_ANSI;

  /**
   * The Recommend:Shift_JIS 83pv character set.
   */
  readonly RECOMMENDSHIFTJIS83PV: TextImportCharacterSet_RECOMMENDSHIFTJIS83PV;
  /**
   * The Recommend:Shift_JIS 83pv character set.
   */
  readonly recommendshiftjis83pv: TextImportCharacterSet_RECOMMENDSHIFTJIS83PV;

  /**
   * The Shift_JIS 90pv character set.
   */
  readonly SHIFTJIS90PV: TextImportCharacterSet_SHIFTJIS90PV;
  /**
   * The Shift_JIS 90pv character set.
   */
  readonly shiftjis90pv: TextImportCharacterSet_SHIFTJIS90PV;

  /**
   * The Shift_JIS 90ms character set.
   */
  readonly SHIFTJIS90MS: TextImportCharacterSet_SHIFTJIS90MS;
  /**
   * The Shift_JIS 90ms character set.
   */
  readonly shiftjis90ms: TextImportCharacterSet_SHIFTJIS90MS;

  /**
   * The GB2312 character set.
   */
  readonly GB2312: TextImportCharacterSet_GB2312;
  /**
   * The GB2312 character set.
   */
  readonly gb2312: TextImportCharacterSet_GB2312;

  /**
   * The Chinese Big 5 character set.
   */
  readonly CHINESE_BIG_5: TextImportCharacterSet_CHINESE_BIG_5;
  /**
   * The Chinese Big 5 character set.
   */
  readonly chineseBig5: TextImportCharacterSet_CHINESE_BIG_5;
  /**
   * The Chinese Big 5 character set.
   */
  readonly chinesebig5: TextImportCharacterSet_CHINESE_BIG_5;

  /**
   * The Macintosh CE (Central European) character set.
   */
  readonly MACINTOSH_CE: TextImportCharacterSet_MACINTOSH_CE;
  /**
   * The Macintosh CE (Central European) character set.
   */
  readonly macintoshCe: TextImportCharacterSet_MACINTOSH_CE;
  /**
   * The Macintosh CE (Central European) character set.
   */
  readonly macintoshce: TextImportCharacterSet_MACINTOSH_CE;

  /**
   * The Macintosh Cyrillic character set.
   */
  readonly MACINTOSH_CYRILLIC: TextImportCharacterSet_MACINTOSH_CYRILLIC;
  /**
   * The Macintosh Cyrillic character set.
   */
  readonly macintoshCyrillic: TextImportCharacterSet_MACINTOSH_CYRILLIC;
  /**
   * The Macintosh Cyrillic character set.
   */
  readonly macintoshcyrillic: TextImportCharacterSet_MACINTOSH_CYRILLIC;

  /**
   * The Macintosh Greek character set.
   */
  readonly MACINTOSH_GREEK: TextImportCharacterSet_MACINTOSH_GREEK;
  /**
   * The Macintosh Greek character set.
   */
  readonly macintoshGreek: TextImportCharacterSet_MACINTOSH_GREEK;
  /**
   * The Macintosh Greek character set.
   */
  readonly macintoshgreek: TextImportCharacterSet_MACINTOSH_GREEK;

  /**
   * The Macintosh Turkish character set.
   */
  readonly MACINTOSH_TURKISH: TextImportCharacterSet_MACINTOSH_TURKISH;
  /**
   * The Macintosh Turkish character set.
   */
  readonly macintoshTurkish: TextImportCharacterSet_MACINTOSH_TURKISH;
  /**
   * The Macintosh Turkish character set.
   */
  readonly macintoshturkish: TextImportCharacterSet_MACINTOSH_TURKISH;

  /**
   * The Windows Cyrillic character set.
   */
  readonly WINDOWS_CYRILLIC: TextImportCharacterSet_WINDOWS_CYRILLIC;
  /**
   * The Windows Cyrillic character set.
   */
  readonly windowsCyrillic: TextImportCharacterSet_WINDOWS_CYRILLIC;
  /**
   * The Windows Cyrillic character set.
   */
  readonly windowscyrillic: TextImportCharacterSet_WINDOWS_CYRILLIC;

  /**
   * The Windows EE (Eastern European) character set.
   */
  readonly WINDOWS_EE: TextImportCharacterSet_WINDOWS_EE;
  /**
   * The Windows EE (Eastern European) character set.
   */
  readonly windowsEe: TextImportCharacterSet_WINDOWS_EE;
  /**
   * The Windows EE (Eastern European) character set.
   */
  readonly windowsee: TextImportCharacterSet_WINDOWS_EE;

  /**
   * The Windows Greek character set.
   */
  readonly WINDOWS_GREEK: TextImportCharacterSet_WINDOWS_GREEK;
  /**
   * The Windows Greek character set.
   */
  readonly windowsGreek: TextImportCharacterSet_WINDOWS_GREEK;
  /**
   * The Windows Greek character set.
   */
  readonly windowsgreek: TextImportCharacterSet_WINDOWS_GREEK;

  /**
   * The Windows Turkish character set.
   */
  readonly WINDOWS_TURKISH: TextImportCharacterSet_WINDOWS_TURKISH;
  /**
   * The Windows Turkish character set.
   */
  readonly windowsTurkish: TextImportCharacterSet_WINDOWS_TURKISH;
  /**
   * The Windows Turkish character set.
   */
  readonly windowsturkish: TextImportCharacterSet_WINDOWS_TURKISH;

  /**
   * The GB18030 character set.
   */
  readonly GB18030: TextImportCharacterSet_GB18030;
  /**
   * The GB18030 character set.
   */
  readonly gb18030: TextImportCharacterSet_GB18030;

  /**
   * The KSC5601 character set.
   */
  readonly KSC5601: TextImportCharacterSet_KSC5601;
  /**
   * The KSC5601 character set.
   */
  readonly ksc5601: TextImportCharacterSet_KSC5601;

  /**
   * The Windows Baltic character set.
   */
  readonly WINDOWS_BALTIC: TextImportCharacterSet_WINDOWS_BALTIC;
  /**
   * The Windows Baltic character set.
   */
  readonly windowsBaltic: TextImportCharacterSet_WINDOWS_BALTIC;
  /**
   * The Windows Baltic character set.
   */
  readonly windowsbaltic: TextImportCharacterSet_WINDOWS_BALTIC;

  /**
   * The Windows CE (Central European) character set.
   */
  readonly WINDOWS_CE: TextImportCharacterSet_WINDOWS_CE;
  /**
   * The Windows CE (Central European) character set.
   */
  readonly windowsCe: TextImportCharacterSet_WINDOWS_CE;
  /**
   * The Windows CE (Central European) character set.
   */
  readonly windowsce: TextImportCharacterSet_WINDOWS_CE;

  /**
   * The Macintosh Roman character set.
   */
  readonly MACINTOSH_ROMAN: TextImportCharacterSet_MACINTOSH_ROMAN;
  /**
   * The Macintosh Roman character set.
   */
  readonly macintoshRoman: TextImportCharacterSet_MACINTOSH_ROMAN;
  /**
   * The Macintosh Roman character set.
   */
  readonly macintoshroman: TextImportCharacterSet_MACINTOSH_ROMAN;

  /**
   * The Macintosh Croatian character set.
   */
  readonly MACINTOSH_CROATIAN: TextImportCharacterSet_MACINTOSH_CROATIAN;
  /**
   * The Macintosh Croatian character set.
   */
  readonly macintoshCroatian: TextImportCharacterSet_MACINTOSH_CROATIAN;
  /**
   * The Macintosh Croatian character set.
   */
  readonly macintoshcroatian: TextImportCharacterSet_MACINTOSH_CROATIAN;

  /**
   * The Macintosh Icelandic character set.
   */
  readonly MACINTOSH_ICELANDIC: TextImportCharacterSet_MACINTOSH_ICELANDIC;
  /**
   * The Macintosh Icelandic character set.
   */
  readonly macintoshIcelandic: TextImportCharacterSet_MACINTOSH_ICELANDIC;
  /**
   * The Macintosh Icelandic character set.
   */
  readonly macintoshicelandic: TextImportCharacterSet_MACINTOSH_ICELANDIC;

  /**
   * The Macintosh Romanian character set.
   */
  readonly MACINTOSH_ROMANIAN: TextImportCharacterSet_MACINTOSH_ROMANIAN;
  /**
   * The Macintosh Romanian character set.
   */
  readonly macintoshRomanian: TextImportCharacterSet_MACINTOSH_ROMANIAN;
  /**
   * The Macintosh Romanian character set.
   */
  readonly macintoshromanian: TextImportCharacterSet_MACINTOSH_ROMANIAN;

  /**
   * The Cyrillic (KOI8R) character set.
   */
  readonly CYRILLIC_KOI8R: TextImportCharacterSet_CYRILLIC_KOI8R;
  /**
   * The Cyrillic (KOI8R) character set.
   */
  readonly cyrillicKoi8r: TextImportCharacterSet_CYRILLIC_KOI8R;
  /**
   * The Cyrillic (KOI8R) character set.
   */
  readonly cyrillickoi8r: TextImportCharacterSet_CYRILLIC_KOI8R;

  /**
   * The Cyrillic (KOI8U) character set.
   */
  readonly CYRILLIC_KOI8U: TextImportCharacterSet_CYRILLIC_KOI8U;
  /**
   * The Cyrillic (KOI8U) character set.
   */
  readonly cyrillicKoi8u: TextImportCharacterSet_CYRILLIC_KOI8U;
  /**
   * The Cyrillic (KOI8U) character set.
   */
  readonly cyrillickoi8u: TextImportCharacterSet_CYRILLIC_KOI8U;

  /**
   * The Cyrillic (CP855) character set.
   */
  readonly CYRILLIC_CP855: TextImportCharacterSet_CYRILLIC_CP855;
  /**
   * The Cyrillic (CP855) character set.
   */
  readonly cyrillicCp855: TextImportCharacterSet_CYRILLIC_CP855;
  /**
   * The Cyrillic (CP855) character set.
   */
  readonly cyrilliccp855: TextImportCharacterSet_CYRILLIC_CP855;

  /**
   * The DOS Latin 2 character set.
   */
  readonly DOS_LATIN_2: TextImportCharacterSet_DOS_LATIN_2;
  /**
   * The DOS Latin 2 character set.
   */
  readonly dosLatin2: TextImportCharacterSet_DOS_LATIN_2;
  /**
   * The DOS Latin 2 character set.
   */
  readonly doslatin2: TextImportCharacterSet_DOS_LATIN_2;

  /**
   * The Cyrillic (ISO) character set.
   */
  readonly CYRILLIC_ISO: TextImportCharacterSet_CYRILLIC_ISO;
  /**
   * The Cyrillic (ISO) character set.
   */
  readonly cyrillicIso: TextImportCharacterSet_CYRILLIC_ISO;
  /**
   * The Cyrillic (ISO) character set.
   */
  readonly cyrilliciso: TextImportCharacterSet_CYRILLIC_ISO;

  /**
   * The Greek (ISO) character set.
   */
  readonly GREEK_ISO: TextImportCharacterSet_GREEK_ISO;
  /**
   * The Greek (ISO) character set.
   */
  readonly greekIso: TextImportCharacterSet_GREEK_ISO;
  /**
   * The Greek (ISO) character set.
   */
  readonly greekiso: TextImportCharacterSet_GREEK_ISO;

  /**
   * The Central European (ISO) character set.
   */
  readonly CENTRALEUROPEAN_ISO: TextImportCharacterSet_CENTRALEUROPEAN_ISO;
  /**
   * The Central European (ISO) character set.
   */
  readonly centraleuropeanIso: TextImportCharacterSet_CENTRALEUROPEAN_ISO;
  /**
   * The Central European (ISO) character set.
   */
  readonly centraleuropeaniso: TextImportCharacterSet_CENTRALEUROPEAN_ISO;

  /**
   * The Turkish (ISO) character set.
   */
  readonly TURKISH_ISO: TextImportCharacterSet_TURKISH_ISO;
  /**
   * The Turkish (ISO) character set.
   */
  readonly turkishIso: TextImportCharacterSet_TURKISH_ISO;
  /**
   * The Turkish (ISO) character set.
   */
  readonly turkishiso: TextImportCharacterSet_TURKISH_ISO;

  /**
   * The Macintosh Greek (Shared caps) character set.
   */
  readonly MACINTOSH_GREEK_SHARED_CAPS: TextImportCharacterSet_MACINTOSH_GREEK_SHARED_CAPS;
  /**
   * The Macintosh Greek (Shared caps) character set.
   */
  readonly macintoshGreekSharedCaps: TextImportCharacterSet_MACINTOSH_GREEK_SHARED_CAPS;
  /**
   * The Macintosh Greek (Shared caps) character set.
   */
  readonly macintoshgreeksharedcaps: TextImportCharacterSet_MACINTOSH_GREEK_SHARED_CAPS;

  /**
   * The Macintosh Arabic character set.
   */
  readonly MACINTOSH_ARABIC: TextImportCharacterSet_MACINTOSH_ARABIC;
  /**
   * The Macintosh Arabic character set.
   */
  readonly macintoshArabic: TextImportCharacterSet_MACINTOSH_ARABIC;
  /**
   * The Macintosh Arabic character set.
   */
  readonly macintosharabic: TextImportCharacterSet_MACINTOSH_ARABIC;

  /**
   * The Macintosh Hebrew character set.
   */
  readonly MACINTOSH_HEBREW: TextImportCharacterSet_MACINTOSH_HEBREW;
  /**
   * The Macintosh Hebrew character set.
   */
  readonly macintoshHebrew: TextImportCharacterSet_MACINTOSH_HEBREW;
  /**
   * The Macintosh Hebrew character set.
   */
  readonly macintoshhebrew: TextImportCharacterSet_MACINTOSH_HEBREW;

  /**
   * The Windows Arabic character set.
   */
  readonly WINDOWS_ARABIC: TextImportCharacterSet_WINDOWS_ARABIC;
  /**
   * The Windows Arabic character set.
   */
  readonly windowsArabic: TextImportCharacterSet_WINDOWS_ARABIC;
  /**
   * The Windows Arabic character set.
   */
  readonly windowsarabic: TextImportCharacterSet_WINDOWS_ARABIC;

  /**
   * The Windows Hebrew character set.
   */
  readonly WINDOWS_HEBREW: TextImportCharacterSet_WINDOWS_HEBREW;
  /**
   * The Windows Hebrew character set.
   */
  readonly windowsHebrew: TextImportCharacterSet_WINDOWS_HEBREW;
  /**
   * The Windows Hebrew character set.
   */
  readonly windowshebrew: TextImportCharacterSet_WINDOWS_HEBREW;

  /**
   * The Arabic ASMO character set.
   */
  readonly ARABIC_ASMO: TextImportCharacterSet_ARABIC_ASMO;
  /**
   * The Arabic ASMO character set.
   */
  readonly arabicAsmo: TextImportCharacterSet_ARABIC_ASMO;
  /**
   * The Arabic ASMO character set.
   */
  readonly arabicasmo: TextImportCharacterSet_ARABIC_ASMO;

  /**
   * The Arabic ASMO transparent character set.
   */
  readonly ARABIC_ASMO_TRANSPARENT: TextImportCharacterSet_ARABIC_ASMO_TRANSPARENT;
  /**
   * The Arabic ASMO transparent character set.
   */
  readonly arabicAsmoTransparent: TextImportCharacterSet_ARABIC_ASMO_TRANSPARENT;
  /**
   * The Arabic ASMO transparent character set.
   */
  readonly arabicasmotransparent: TextImportCharacterSet_ARABIC_ASMO_TRANSPARENT;

  /**
   * The Unicode UTF16 character set.
   */
  readonly UTF16: TextImportCharacterSet_UTF16;
  /**
   * The Unicode UTF16 character set.
   */
  readonly utf16: TextImportCharacterSet_UTF16;

  /**
   * The Unicode UTF8 character set.
   */
  readonly UTF8: TextImportCharacterSet_UTF8;
  /**
   * The Unicode UTF8 character set.
   */
  readonly utf8: TextImportCharacterSet_UTF8;

}
