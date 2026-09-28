/**
 * OutlineJoin.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __OutlineJoin: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface OutlineJoin extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<OutlineJoin>): boolean;

  /**
   * @internal **WARNING:** `__OutlineJoin` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__OutlineJoin]: never;
}


/**
 * Miter end join.
 */
interface OutlineJoin_MITER_END_JOIN extends OutlineJoin {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1835691886;
}

/**
 * Rounded end join.
 */
interface OutlineJoin_ROUND_END_JOIN extends OutlineJoin {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919577966;
}

/**
 * Beveled end join.
 */
interface OutlineJoin_BEVEL_END_JOIN extends OutlineJoin {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1651142510;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How two stroke segments meet at a corner — mitred, rounded, or bevelled.
 */
export declare namespace OutlineJoin {
/**
 * Miter end join.
 */
type MITER_END_JOIN = OutlineJoin_MITER_END_JOIN;

/**
 * Rounded end join.
 */
type ROUND_END_JOIN = OutlineJoin_ROUND_END_JOIN;

/**
 * Beveled end join.
 */
type BEVEL_END_JOIN = OutlineJoin_BEVEL_END_JOIN;

}
/**
 * How two stroke segments meet at a corner — mitred, rounded, or bevelled.
 */
export declare const OutlineJoin: typeof Enumeration & {

  /**
   * Miter end join.
   */
  readonly MITER_END_JOIN: OutlineJoin_MITER_END_JOIN;
  /**
   * Miter end join.
   */
  readonly miterEndJoin: OutlineJoin_MITER_END_JOIN;
  /**
   * Miter end join.
   */
  readonly miterendjoin: OutlineJoin_MITER_END_JOIN;

  /**
   * Rounded end join.
   */
  readonly ROUND_END_JOIN: OutlineJoin_ROUND_END_JOIN;
  /**
   * Rounded end join.
   */
  readonly roundEndJoin: OutlineJoin_ROUND_END_JOIN;
  /**
   * Rounded end join.
   */
  readonly roundendjoin: OutlineJoin_ROUND_END_JOIN;

  /**
   * Beveled end join.
   */
  readonly BEVEL_END_JOIN: OutlineJoin_BEVEL_END_JOIN;
  /**
   * Beveled end join.
   */
  readonly bevelEndJoin: OutlineJoin_BEVEL_END_JOIN;
  /**
   * Beveled end join.
   */
  readonly bevelendjoin: OutlineJoin_BEVEL_END_JOIN;

}
