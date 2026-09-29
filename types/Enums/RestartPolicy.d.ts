/**
 * RestartPolicy.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RestartPolicy: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RestartPolicy extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RestartPolicy>): boolean;

  /**
   * @internal **WARNING:** `__RestartPolicy` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RestartPolicy]: never;
}


/**
 * Restart numbering after any previous (higher) numbering level.
 */
interface RestartPolicy_ANY_PREVIOUS_LEVEL extends RestartPolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701732720;
}

/**
 * Restart numbering after a specific numbering level.
 */
interface RestartPolicy_AFTER_SPECIFIC_LEVEL extends RestartPolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701737324;
}

/**
 * Restart numbering after any of a range of numbering levels.
 */
interface RestartPolicy_RANGE_OF_LEVELS extends RestartPolicy {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1701737068;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which higher numbering level causes a numbered list to start counting again.
 */
export declare namespace RestartPolicy {
/**
 * Restart numbering after any previous (higher) numbering level.
 */
type ANY_PREVIOUS_LEVEL = RestartPolicy_ANY_PREVIOUS_LEVEL;

/**
 * Restart numbering after a specific numbering level.
 */
type AFTER_SPECIFIC_LEVEL = RestartPolicy_AFTER_SPECIFIC_LEVEL;

/**
 * Restart numbering after any of a range of numbering levels.
 */
type RANGE_OF_LEVELS = RestartPolicy_RANGE_OF_LEVELS;

}
/**
 * Which higher numbering level causes a numbered list to start counting again.
 */
export declare const RestartPolicy: typeof Enumeration & {

  /**
   * Restart numbering after any previous (higher) numbering level.
   */
  readonly ANY_PREVIOUS_LEVEL: RestartPolicy_ANY_PREVIOUS_LEVEL;
  /**
   * Restart numbering after any previous (higher) numbering level.
   */
  readonly anyPreviousLevel: RestartPolicy_ANY_PREVIOUS_LEVEL;
  /**
   * Restart numbering after any previous (higher) numbering level.
   */
  readonly anypreviouslevel: RestartPolicy_ANY_PREVIOUS_LEVEL;

  /**
   * Restart numbering after a specific numbering level.
   */
  readonly AFTER_SPECIFIC_LEVEL: RestartPolicy_AFTER_SPECIFIC_LEVEL;
  /**
   * Restart numbering after a specific numbering level.
   */
  readonly afterSpecificLevel: RestartPolicy_AFTER_SPECIFIC_LEVEL;
  /**
   * Restart numbering after a specific numbering level.
   */
  readonly afterspecificlevel: RestartPolicy_AFTER_SPECIFIC_LEVEL;

  /**
   * Restart numbering after any of a range of numbering levels.
   */
  readonly RANGE_OF_LEVELS: RestartPolicy_RANGE_OF_LEVELS;
  /**
   * Restart numbering after any of a range of numbering levels.
   */
  readonly rangeOfLevels: RestartPolicy_RANGE_OF_LEVELS;
  /**
   * Restart numbering after any of a range of numbering levels.
   */
  readonly rangeoflevels: RestartPolicy_RANGE_OF_LEVELS;

}
