/**
 * PositionAttributes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __PositionAttributes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface PositionAttributes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<PositionAttributes>): boolean;

  /**
   * @internal **WARNING:** `__PositionAttributes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__PositionAttributes]: never;
}


/**
 * X attribute of position.
 */
interface PositionAttributes_X_ATTRIBUTE extends PositionAttributes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700282735;
}

/**
 * Y attribute of position.
 */
interface PositionAttributes_Y_ATTRIBUTE extends PositionAttributes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1700348271;
}

/**
 * Both X and Y of position.
 */
interface PositionAttributes_BOTH_X_Y_ATTRIBUTE extends PositionAttributes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1698855001;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which coordinate of an object's position an operation applies to — X, Y, or both.
 */
export declare namespace PositionAttributes {
/**
 * X attribute of position.
 */
type X_ATTRIBUTE = PositionAttributes_X_ATTRIBUTE;

/**
 * Y attribute of position.
 */
type Y_ATTRIBUTE = PositionAttributes_Y_ATTRIBUTE;

/**
 * Both X and Y of position.
 */
type BOTH_X_Y_ATTRIBUTE = PositionAttributes_BOTH_X_Y_ATTRIBUTE;

}
/**
 * Which coordinate of an object's position an operation applies to — X, Y, or both.
 */
export declare const PositionAttributes: typeof Enumeration & {

  /**
   * X attribute of position.
   */
  readonly X_ATTRIBUTE: PositionAttributes_X_ATTRIBUTE;
  /**
   * X attribute of position.
   */
  readonly xAttribute: PositionAttributes_X_ATTRIBUTE;
  /**
   * X attribute of position.
   */
  readonly xattribute: PositionAttributes_X_ATTRIBUTE;

  /**
   * Y attribute of position.
   */
  readonly Y_ATTRIBUTE: PositionAttributes_Y_ATTRIBUTE;
  /**
   * Y attribute of position.
   */
  readonly yAttribute: PositionAttributes_Y_ATTRIBUTE;
  /**
   * Y attribute of position.
   */
  readonly yattribute: PositionAttributes_Y_ATTRIBUTE;

  /**
   * Both X and Y of position.
   */
  readonly BOTH_X_Y_ATTRIBUTE: PositionAttributes_BOTH_X_Y_ATTRIBUTE;
  /**
   * Both X and Y of position.
   */
  readonly bothXYAttribute: PositionAttributes_BOTH_X_Y_ATTRIBUTE;
  /**
   * Both X and Y of position.
   */
  readonly bothxyattribute: PositionAttributes_BOTH_X_Y_ATTRIBUTE;

}
