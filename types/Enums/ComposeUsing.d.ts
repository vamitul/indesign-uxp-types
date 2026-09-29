/**
 * ComposeUsing.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ComposeUsing: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ComposeUsing extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ComposeUsing>): boolean;

  /**
   * @internal **WARNING:** `__ComposeUsing` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ComposeUsing]: never;
}


/**
 * Uses the list stored in the external user dictionary.
 */
interface ComposeUsing_USE_USER_DICTIONARY extends ComposeUsing {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1433629284;
}

/**
 * Uses the list stored in the document.
 */
interface ComposeUsing_USE_DOCUMENT extends ComposeUsing {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1967419235;
}

/**
 * Uses the lists stored in both the document and the user dictionary.
 */
interface ComposeUsing_BOTH extends ComposeUsing {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1651471464;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Hyphenation exceptions list options for composing text.
 */
export declare namespace ComposeUsing {
/**
 * Uses the list stored in the external user dictionary.
 */
type USE_USER_DICTIONARY = ComposeUsing_USE_USER_DICTIONARY;

/**
 * Uses the list stored in the document.
 */
type USE_DOCUMENT = ComposeUsing_USE_DOCUMENT;

/**
 * Uses the lists stored in both the document and the user dictionary.
 */
type BOTH = ComposeUsing_BOTH;

}
/**
 * Hyphenation exceptions list options for composing text.
 */
export declare const ComposeUsing: typeof Enumeration & {

  /**
   * Uses the list stored in the external user dictionary.
   */
  readonly USE_USER_DICTIONARY: ComposeUsing_USE_USER_DICTIONARY;
  /**
   * Uses the list stored in the external user dictionary.
   */
  readonly useUserDictionary: ComposeUsing_USE_USER_DICTIONARY;
  /**
   * Uses the list stored in the external user dictionary.
   */
  readonly useuserdictionary: ComposeUsing_USE_USER_DICTIONARY;

  /**
   * Uses the list stored in the document.
   */
  readonly USE_DOCUMENT: ComposeUsing_USE_DOCUMENT;
  /**
   * Uses the list stored in the document.
   */
  readonly useDocument: ComposeUsing_USE_DOCUMENT;
  /**
   * Uses the list stored in the document.
   */
  readonly usedocument: ComposeUsing_USE_DOCUMENT;

  /**
   * Uses the lists stored in both the document and the user dictionary.
   */
  readonly BOTH: ComposeUsing_BOTH;
  /**
   * Uses the lists stored in both the document and the user dictionary.
   */
  readonly both: ComposeUsing_BOTH;

}
