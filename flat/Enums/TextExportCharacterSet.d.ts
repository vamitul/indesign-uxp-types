/**
 * TextExportCharacterSet.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TextExportCharacterSet: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TextExportCharacterSet extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TextExportCharacterSet>): boolean;

  /**
   * @internal **WARNING:** `__TextExportCharacterSet` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TextExportCharacterSet]: never;
}


/**
 * The default character set for the platform.
 */
interface TextExportCharacterSet_DEFAULT_PLATFORM extends TextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1415865972;
}

/**
 * The Unicode UTF16 character set.
 */
interface TextExportCharacterSet_UTF16 extends TextExportCharacterSet {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937125686;
}

/**
 * The Unicode UTF8 character set.
 */
interface TextExportCharacterSet_UTF8 extends TextExportCharacterSet {
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
 * Which character set an exported text file uses.
 */
export declare namespace TextExportCharacterSet {
/**
 * The default character set for the platform.
 */
type DEFAULT_PLATFORM = TextExportCharacterSet_DEFAULT_PLATFORM;

/**
 * The Unicode UTF16 character set.
 */
type UTF16 = TextExportCharacterSet_UTF16;

/**
 * The Unicode UTF8 character set.
 */
type UTF8 = TextExportCharacterSet_UTF8;

}
/**
 * Which character set an exported text file uses.
 */
export declare const TextExportCharacterSet: typeof Enumeration & {

  /**
   * The default character set for the platform.
   */
  readonly DEFAULT_PLATFORM: TextExportCharacterSet_DEFAULT_PLATFORM;
  /**
   * The default character set for the platform.
   */
  readonly defaultPlatform: TextExportCharacterSet_DEFAULT_PLATFORM;
  /**
   * The default character set for the platform.
   */
  readonly defaultplatform: TextExportCharacterSet_DEFAULT_PLATFORM;

  /**
   * The Unicode UTF16 character set.
   */
  readonly UTF16: TextExportCharacterSet_UTF16;
  /**
   * The Unicode UTF16 character set.
   */
  readonly utf16: TextExportCharacterSet_UTF16;

  /**
   * The Unicode UTF8 character set.
   */
  readonly UTF8: TextExportCharacterSet_UTF8;
  /**
   * The Unicode UTF8 character set.
   */
  readonly utf8: TextExportCharacterSet_UTF8;

}
