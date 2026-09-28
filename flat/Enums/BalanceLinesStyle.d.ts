/**
 * BalanceLinesStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BalanceLinesStyle: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BalanceLinesStyle extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BalanceLinesStyle>): boolean;

  /**
   * @internal **WARNING:** `__BalanceLinesStyle` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BalanceLinesStyle]: never;
}


/**
 * Does not balance lines.
 */
interface BalanceLinesStyle_NO_BALANCING extends BalanceLinesStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1114394470;
}

/**
 * Prefers shorter last lines.
 */
interface BalanceLinesStyle_VEE_SHAPE extends BalanceLinesStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1114396261;
}

/**
 * Balances lines equally.
 */
interface BalanceLinesStyle_FULLY_BALANCED extends BalanceLinesStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1114391921;
}

/**
 * Prefers longer last lines.
 */
interface BalanceLinesStyle_PYRAMID_SHAPE extends BalanceLinesStyle {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1114394745;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for balancing line endings in the text.
 */
export declare namespace BalanceLinesStyle {
/**
 * Does not balance lines.
 */
type NO_BALANCING = BalanceLinesStyle_NO_BALANCING;

/**
 * Prefers shorter last lines.
 */
type VEE_SHAPE = BalanceLinesStyle_VEE_SHAPE;

/**
 * Balances lines equally.
 */
type FULLY_BALANCED = BalanceLinesStyle_FULLY_BALANCED;

/**
 * Prefers longer last lines.
 */
type PYRAMID_SHAPE = BalanceLinesStyle_PYRAMID_SHAPE;

}
/**
 * Options for balancing line endings in the text.
 */
export declare const BalanceLinesStyle: typeof Enumeration & {

  /**
   * Does not balance lines.
   */
  readonly NO_BALANCING: BalanceLinesStyle_NO_BALANCING;
  /**
   * Does not balance lines.
   */
  readonly noBalancing: BalanceLinesStyle_NO_BALANCING;
  /**
   * Does not balance lines.
   */
  readonly nobalancing: BalanceLinesStyle_NO_BALANCING;

  /**
   * Prefers shorter last lines.
   */
  readonly VEE_SHAPE: BalanceLinesStyle_VEE_SHAPE;
  /**
   * Prefers shorter last lines.
   */
  readonly veeShape: BalanceLinesStyle_VEE_SHAPE;
  /**
   * Prefers shorter last lines.
   */
  readonly veeshape: BalanceLinesStyle_VEE_SHAPE;

  /**
   * Balances lines equally.
   */
  readonly FULLY_BALANCED: BalanceLinesStyle_FULLY_BALANCED;
  /**
   * Balances lines equally.
   */
  readonly fullyBalanced: BalanceLinesStyle_FULLY_BALANCED;
  /**
   * Balances lines equally.
   */
  readonly fullybalanced: BalanceLinesStyle_FULLY_BALANCED;

  /**
   * Prefers longer last lines.
   */
  readonly PYRAMID_SHAPE: BalanceLinesStyle_PYRAMID_SHAPE;
  /**
   * Prefers longer last lines.
   */
  readonly pyramidShape: BalanceLinesStyle_PYRAMID_SHAPE;
  /**
   * Prefers longer last lines.
   */
  readonly pyramidshape: BalanceLinesStyle_PYRAMID_SHAPE;

}
