/**
 * ChangecaseMode.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ChangecaseMode: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ChangecaseMode extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ChangecaseMode>): boolean;

  /**
   * @internal **WARNING:** `__ChangecaseMode` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ChangecaseMode]: never;
}


/**
 * Makes all letters uppercase.
 */
interface ChangecaseMode_UPPERCASE extends ChangecaseMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667462499;
}

/**
 * Makes all letters lowercase.
 */
interface ChangecaseMode_LOWERCASE extends ChangecaseMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667460195;
}

/**
 * Makes the first letter of each word uppercase.
 */
interface ChangecaseMode_TITLECASE extends ChangecaseMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1667462243;
}

/**
 * Makes the first letter of each sentence uppercase.
 */
interface ChangecaseMode_SENTENCECASE extends ChangecaseMode {
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
 * Text case options.
 */
export declare namespace ChangecaseMode {
/**
 * Makes all letters uppercase.
 */
type UPPERCASE = ChangecaseMode_UPPERCASE;

/**
 * Makes all letters lowercase.
 */
type LOWERCASE = ChangecaseMode_LOWERCASE;

/**
 * Makes the first letter of each word uppercase.
 */
type TITLECASE = ChangecaseMode_TITLECASE;

/**
 * Makes the first letter of each sentence uppercase.
 */
type SENTENCECASE = ChangecaseMode_SENTENCECASE;

}
/**
 * Text case options.
 */
export declare const ChangecaseMode: typeof Enumeration & {

  /**
   * Makes all letters uppercase.
   */
  readonly UPPERCASE: ChangecaseMode_UPPERCASE;
  /**
   * Makes all letters uppercase.
   */
  readonly uppercase: ChangecaseMode_UPPERCASE;

  /**
   * Makes all letters lowercase.
   */
  readonly LOWERCASE: ChangecaseMode_LOWERCASE;
  /**
   * Makes all letters lowercase.
   */
  readonly lowercase: ChangecaseMode_LOWERCASE;

  /**
   * Makes the first letter of each word uppercase.
   */
  readonly TITLECASE: ChangecaseMode_TITLECASE;
  /**
   * Makes the first letter of each word uppercase.
   */
  readonly titlecase: ChangecaseMode_TITLECASE;

  /**
   * Makes the first letter of each sentence uppercase.
   */
  readonly SENTENCECASE: ChangecaseMode_SENTENCECASE;
  /**
   * Makes the first letter of each sentence uppercase.
   */
  readonly sentencecase: ChangecaseMode_SENTENCECASE;

}
