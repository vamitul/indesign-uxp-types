/**
 * SpreadFlattenerLevel.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __SpreadFlattenerLevel: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface SpreadFlattenerLevel extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<SpreadFlattenerLevel>): boolean;

  /**
   * @internal **WARNING:** `__SpreadFlattenerLevel` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__SpreadFlattenerLevel]: never;
}


/**
 * Uses the default level.
 */
interface SpreadFlattenerLevel_DEFAULT_VALUE extends SpreadFlattenerLevel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1147563124;
}

/**
 * Turns off flattening.
 */
interface SpreadFlattenerLevel_NONE extends SpreadFlattenerLevel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Uses the specified custom flattening level.
 */
interface SpreadFlattenerLevel_CUSTOM extends SpreadFlattenerLevel {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1131639917;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether transparency flattening for a spread uses the document's default level, is turned
 * off, or uses a custom level.
 */
export declare namespace SpreadFlattenerLevel {
/**
 * Uses the default level.
 */
type DEFAULT_VALUE = SpreadFlattenerLevel_DEFAULT_VALUE;

/**
 * Turns off flattening.
 */
type NONE = SpreadFlattenerLevel_NONE;

/**
 * Uses the specified custom flattening level.
 */
type CUSTOM = SpreadFlattenerLevel_CUSTOM;

}
/**
 * Whether transparency flattening for a spread uses the document's default level, is turned
 * off, or uses a custom level.
 */
export declare const SpreadFlattenerLevel: typeof Enumeration & {

  /**
   * Uses the default level.
   */
  readonly DEFAULT_VALUE: SpreadFlattenerLevel_DEFAULT_VALUE;
  /**
   * Uses the default level.
   */
  readonly defaultValue: SpreadFlattenerLevel_DEFAULT_VALUE;
  /**
   * Uses the default level.
   */
  readonly defaultvalue: SpreadFlattenerLevel_DEFAULT_VALUE;

  /**
   * Turns off flattening.
   */
  readonly NONE: SpreadFlattenerLevel_NONE;
  /**
   * Turns off flattening.
   */
  readonly none: SpreadFlattenerLevel_NONE;

  /**
   * Uses the specified custom flattening level.
   */
  readonly CUSTOM: SpreadFlattenerLevel_CUSTOM;
  /**
   * Uses the specified custom flattening level.
   */
  readonly custom: SpreadFlattenerLevel_CUSTOM;

}
