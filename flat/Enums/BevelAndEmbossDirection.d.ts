/**
 * BevelAndEmbossDirection.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BevelAndEmbossDirection: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BevelAndEmbossDirection extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BevelAndEmbossDirection>): boolean;

  /**
   * @internal **WARNING:** `__BevelAndEmbossDirection` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BevelAndEmbossDirection]: never;
}


/**
 * The effect appears raised.
 */
interface BevelAndEmbossDirection_UP extends BevelAndEmbossDirection {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181971566;
}

/**
 * The effect appears depressed.
 */
interface BevelAndEmbossDirection_DOWN extends BevelAndEmbossDirection {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181971556;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Bevel and emboss direction options.
 */
export declare namespace BevelAndEmbossDirection {
/**
 * The effect appears raised.
 */
type UP = BevelAndEmbossDirection_UP;

/**
 * The effect appears depressed.
 */
type DOWN = BevelAndEmbossDirection_DOWN;

}
/**
 * Bevel and emboss direction options.
 */
export declare const BevelAndEmbossDirection: typeof Enumeration & {

  /**
   * The effect appears raised.
   */
  readonly UP: BevelAndEmbossDirection_UP;
  /**
   * The effect appears raised.
   */
  readonly up: BevelAndEmbossDirection_UP;

  /**
   * The effect appears depressed.
   */
  readonly DOWN: BevelAndEmbossDirection_DOWN;
  /**
   * The effect appears depressed.
   */
  readonly down: BevelAndEmbossDirection_DOWN;

}
