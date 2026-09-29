/**
 * EndJoin.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __EndJoin: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface EndJoin extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<EndJoin>): boolean;

  /**
   * @internal **WARNING:** `__EndJoin` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__EndJoin]: never;
}


/**
 * Miter end join.
 */
interface EndJoin_MITER_END_JOIN extends EndJoin {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1835691886;
}

/**
 * Rounded end join.
 */
interface EndJoin_ROUND_END_JOIN extends EndJoin {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919577966;
}

/**
 * Beveled end join.
 */
interface EndJoin_BEVEL_END_JOIN extends EndJoin {
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
 * End join types.
 */
export declare namespace EndJoin {
/**
 * Miter end join.
 */
type MITER_END_JOIN = EndJoin_MITER_END_JOIN;

/**
 * Rounded end join.
 */
type ROUND_END_JOIN = EndJoin_ROUND_END_JOIN;

/**
 * Beveled end join.
 */
type BEVEL_END_JOIN = EndJoin_BEVEL_END_JOIN;

}
/**
 * End join types.
 */
export declare const EndJoin: typeof Enumeration & {

  /**
   * Miter end join.
   */
  readonly MITER_END_JOIN: EndJoin_MITER_END_JOIN;
  /**
   * Miter end join.
   */
  readonly miterEndJoin: EndJoin_MITER_END_JOIN;
  /**
   * Miter end join.
   */
  readonly miterendjoin: EndJoin_MITER_END_JOIN;

  /**
   * Rounded end join.
   */
  readonly ROUND_END_JOIN: EndJoin_ROUND_END_JOIN;
  /**
   * Rounded end join.
   */
  readonly roundEndJoin: EndJoin_ROUND_END_JOIN;
  /**
   * Rounded end join.
   */
  readonly roundendjoin: EndJoin_ROUND_END_JOIN;

  /**
   * Beveled end join.
   */
  readonly BEVEL_END_JOIN: EndJoin_BEVEL_END_JOIN;
  /**
   * Beveled end join.
   */
  readonly bevelEndJoin: EndJoin_BEVEL_END_JOIN;
  /**
   * Beveled end join.
   */
  readonly bevelendjoin: EndJoin_BEVEL_END_JOIN;

}
