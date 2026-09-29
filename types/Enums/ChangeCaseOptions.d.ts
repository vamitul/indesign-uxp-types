/**
 * ChangeCaseOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ChangeCaseOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ChangeCaseOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ChangeCaseOptions>): boolean;

  /**
   * @internal **WARNING:** `__ChangeCaseOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ChangeCaseOptions]: never;
}


/**
 * No conversion.
 */
interface ChangeCaseOptions_NONE extends ChangeCaseOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Converts all letters to uppercase.
 */
interface ChangeCaseOptions_UPPERCASE extends ChangeCaseOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667462499;
}

/**
 * Converts all letters to lowercase.
 */
interface ChangeCaseOptions_LOWERCASE extends ChangeCaseOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667460195;
}

/**
 * Converts the first letter of each word to uppercase.
 */
interface ChangeCaseOptions_TITLECASE extends ChangeCaseOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667462243;
}

/**
 * Converts the first letter of the first word of each sentence to uppercase.
 */
interface ChangeCaseOptions_SENTENCECASE extends ChangeCaseOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667461987;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The capitalisation a change operation imposes on the text it matches.
 */
export declare namespace ChangeCaseOptions {
/**
 * No conversion.
 */
type NONE = ChangeCaseOptions_NONE;

/**
 * Converts all letters to uppercase.
 */
type UPPERCASE = ChangeCaseOptions_UPPERCASE;

/**
 * Converts all letters to lowercase.
 */
type LOWERCASE = ChangeCaseOptions_LOWERCASE;

/**
 * Converts the first letter of each word to uppercase.
 */
type TITLECASE = ChangeCaseOptions_TITLECASE;

/**
 * Converts the first letter of the first word of each sentence to uppercase.
 */
type SENTENCECASE = ChangeCaseOptions_SENTENCECASE;

}
/**
 * The capitalisation a change operation imposes on the text it matches.
 */
export declare const ChangeCaseOptions: typeof Enumeration & {

  /**
   * No conversion.
   */
  readonly NONE: ChangeCaseOptions_NONE;
  /**
   * No conversion.
   */
  readonly none: ChangeCaseOptions_NONE;

  /**
   * Converts all letters to uppercase.
   */
  readonly UPPERCASE: ChangeCaseOptions_UPPERCASE;
  /**
   * Converts all letters to uppercase.
   */
  readonly uppercase: ChangeCaseOptions_UPPERCASE;

  /**
   * Converts all letters to lowercase.
   */
  readonly LOWERCASE: ChangeCaseOptions_LOWERCASE;
  /**
   * Converts all letters to lowercase.
   */
  readonly lowercase: ChangeCaseOptions_LOWERCASE;

  /**
   * Converts the first letter of each word to uppercase.
   */
  readonly TITLECASE: ChangeCaseOptions_TITLECASE;
  /**
   * Converts the first letter of each word to uppercase.
   */
  readonly titlecase: ChangeCaseOptions_TITLECASE;

  /**
   * Converts the first letter of the first word of each sentence to uppercase.
   */
  readonly SENTENCECASE: ChangeCaseOptions_SENTENCECASE;
  /**
   * Converts the first letter of the first word of each sentence to uppercase.
   */
  readonly sentencecase: ChangeCaseOptions_SENTENCECASE;

}
