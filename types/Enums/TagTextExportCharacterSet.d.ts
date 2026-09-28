/**
 * TagTextExportCharacterSet.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TagTextExportCharacterSet: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TagTextExportCharacterSet extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TagTextExportCharacterSet>): boolean;

  /**
   * @internal **WARNING:** `__TagTextExportCharacterSet` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TagTextExportCharacterSet]: never;
}


/**
 * The ASCII character set.
 */
interface TagTextExportCharacterSet_ASCII extends TagTextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095975753;
}

/**
 * The ANSI character set.
 */
interface TagTextExportCharacterSet_ANSI extends TagTextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095652169;
}

/**
 * The Unicode character set.
 */
interface TagTextExportCharacterSet_UNICODE extends TagTextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249209961;
}

/**
 * The Shift-JIS character set.
 */
interface TagTextExportCharacterSet_SHIFT_JIS extends TagTextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1249077875;
}

/**
 * Uses GB18030 encoding.
 */
interface TagTextExportCharacterSet_GB18030 extends TagTextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416061491;
}

/**
 * Uses KSC5601 encoding.
 */
interface TagTextExportCharacterSet_KSC5601 extends TagTextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1414230883;
}

/**
 * The Chinese Big 5 character set.
 */
interface TagTextExportCharacterSet_CHINESE_BIG_5 extends TagTextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1415799349;
}

/**
 * The Central European (ISO) character set.
 */
interface TagTextExportCharacterSet_CENTRALEUROPEAN_ISO extends TagTextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416184645;
}

/**
 * The Cyrillic (ISO) character set.
 */
interface TagTextExportCharacterSet_CYRILLIC_ISO extends TagTextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416184697;
}

/**
 * The Greek (ISO) character set.
 */
interface TagTextExportCharacterSet_GREEK_ISO extends TagTextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416185707;
}

/**
 * The Windows Arabic character set.
 */
interface TagTextExportCharacterSet_WINDOWS_ARABIC extends TagTextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1417101682;
}

/**
 * The Windows Hebrew character set.
 */
interface TagTextExportCharacterSet_WINDOWS_HEBREW extends TagTextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1417103458;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which character set a tagged text file is exported with.
 */
export declare namespace TagTextExportCharacterSet {
/**
 * The ASCII character set.
 */
type ASCII = TagTextExportCharacterSet_ASCII;

/**
 * The ANSI character set.
 */
type ANSI = TagTextExportCharacterSet_ANSI;

/**
 * The Unicode character set.
 */
type UNICODE = TagTextExportCharacterSet_UNICODE;

/**
 * The Shift-JIS character set.
 */
type SHIFT_JIS = TagTextExportCharacterSet_SHIFT_JIS;

/**
 * Uses GB18030 encoding.
 */
type GB18030 = TagTextExportCharacterSet_GB18030;

/**
 * Uses KSC5601 encoding.
 */
type KSC5601 = TagTextExportCharacterSet_KSC5601;

/**
 * The Chinese Big 5 character set.
 */
type CHINESE_BIG_5 = TagTextExportCharacterSet_CHINESE_BIG_5;

/**
 * The Central European (ISO) character set.
 */
type CENTRALEUROPEAN_ISO = TagTextExportCharacterSet_CENTRALEUROPEAN_ISO;

/**
 * The Cyrillic (ISO) character set.
 */
type CYRILLIC_ISO = TagTextExportCharacterSet_CYRILLIC_ISO;

/**
 * The Greek (ISO) character set.
 */
type GREEK_ISO = TagTextExportCharacterSet_GREEK_ISO;

/**
 * The Windows Arabic character set.
 */
type WINDOWS_ARABIC = TagTextExportCharacterSet_WINDOWS_ARABIC;

/**
 * The Windows Hebrew character set.
 */
type WINDOWS_HEBREW = TagTextExportCharacterSet_WINDOWS_HEBREW;

}
/**
 * Which character set a tagged text file is exported with.
 */
export declare const TagTextExportCharacterSet: typeof Enumeration & {

  /**
   * The ASCII character set.
   */
  readonly ASCII: TagTextExportCharacterSet_ASCII;
  /**
   * The ASCII character set.
   */
  readonly ascii: TagTextExportCharacterSet_ASCII;

  /**
   * The ANSI character set.
   */
  readonly ANSI: TagTextExportCharacterSet_ANSI;
  /**
   * The ANSI character set.
   */
  readonly ansi: TagTextExportCharacterSet_ANSI;

  /**
   * The Unicode character set.
   */
  readonly UNICODE: TagTextExportCharacterSet_UNICODE;
  /**
   * The Unicode character set.
   */
  readonly unicode: TagTextExportCharacterSet_UNICODE;

  /**
   * The Shift-JIS character set.
   */
  readonly SHIFT_JIS: TagTextExportCharacterSet_SHIFT_JIS;
  /**
   * The Shift-JIS character set.
   */
  readonly shiftJis: TagTextExportCharacterSet_SHIFT_JIS;
  /**
   * The Shift-JIS character set.
   */
  readonly shiftjis: TagTextExportCharacterSet_SHIFT_JIS;

  /**
   * Uses GB18030 encoding.
   */
  readonly GB18030: TagTextExportCharacterSet_GB18030;
  /**
   * Uses GB18030 encoding.
   */
  readonly gb18030: TagTextExportCharacterSet_GB18030;

  /**
   * Uses KSC5601 encoding.
   */
  readonly KSC5601: TagTextExportCharacterSet_KSC5601;
  /**
   * Uses KSC5601 encoding.
   */
  readonly ksc5601: TagTextExportCharacterSet_KSC5601;

  /**
   * The Chinese Big 5 character set.
   */
  readonly CHINESE_BIG_5: TagTextExportCharacterSet_CHINESE_BIG_5;
  /**
   * The Chinese Big 5 character set.
   */
  readonly chineseBig5: TagTextExportCharacterSet_CHINESE_BIG_5;
  /**
   * The Chinese Big 5 character set.
   */
  readonly chinesebig5: TagTextExportCharacterSet_CHINESE_BIG_5;

  /**
   * The Central European (ISO) character set.
   */
  readonly CENTRALEUROPEAN_ISO: TagTextExportCharacterSet_CENTRALEUROPEAN_ISO;
  /**
   * The Central European (ISO) character set.
   */
  readonly centraleuropeanIso: TagTextExportCharacterSet_CENTRALEUROPEAN_ISO;
  /**
   * The Central European (ISO) character set.
   */
  readonly centraleuropeaniso: TagTextExportCharacterSet_CENTRALEUROPEAN_ISO;

  /**
   * The Cyrillic (ISO) character set.
   */
  readonly CYRILLIC_ISO: TagTextExportCharacterSet_CYRILLIC_ISO;
  /**
   * The Cyrillic (ISO) character set.
   */
  readonly cyrillicIso: TagTextExportCharacterSet_CYRILLIC_ISO;
  /**
   * The Cyrillic (ISO) character set.
   */
  readonly cyrilliciso: TagTextExportCharacterSet_CYRILLIC_ISO;

  /**
   * The Greek (ISO) character set.
   */
  readonly GREEK_ISO: TagTextExportCharacterSet_GREEK_ISO;
  /**
   * The Greek (ISO) character set.
   */
  readonly greekIso: TagTextExportCharacterSet_GREEK_ISO;
  /**
   * The Greek (ISO) character set.
   */
  readonly greekiso: TagTextExportCharacterSet_GREEK_ISO;

  /**
   * The Windows Arabic character set.
   */
  readonly WINDOWS_ARABIC: TagTextExportCharacterSet_WINDOWS_ARABIC;
  /**
   * The Windows Arabic character set.
   */
  readonly windowsArabic: TagTextExportCharacterSet_WINDOWS_ARABIC;
  /**
   * The Windows Arabic character set.
   */
  readonly windowsarabic: TagTextExportCharacterSet_WINDOWS_ARABIC;

  /**
   * The Windows Hebrew character set.
   */
  readonly WINDOWS_HEBREW: TagTextExportCharacterSet_WINDOWS_HEBREW;
  /**
   * The Windows Hebrew character set.
   */
  readonly windowsHebrew: TagTextExportCharacterSet_WINDOWS_HEBREW;
  /**
   * The Windows Hebrew character set.
   */
  readonly windowshebrew: TagTextExportCharacterSet_WINDOWS_HEBREW;

}
