/**
 * CustomLayoutTypeEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __CustomLayoutTypeEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface CustomLayoutTypeEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<CustomLayoutTypeEnum>): boolean;

  /**
   * @internal **WARNING:** `__CustomLayoutTypeEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__CustomLayoutTypeEnum]: never;
}


/**
 * Floats the object to the left.
 */
interface CustomLayoutTypeEnum_FLOAT_LEFT extends CustomLayoutTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181502565;
}

/**
 * Floats the object to the right.
 */
interface CustomLayoutTypeEnum_FLOAT_RIGHT extends CustomLayoutTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1181504105;
}

/**
 * Positions the object using alignment and spacing rules.
 */
interface CustomLayoutTypeEnum_ALIGNMENT_AND_SPACING extends CustomLayoutTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1097618288;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The custom layout behavior applied to an object when its custom layout
 * property is enabled.
 */
export declare namespace CustomLayoutTypeEnum {
/**
 * Floats the object to the left.
 */
type FLOAT_LEFT = CustomLayoutTypeEnum_FLOAT_LEFT;

/**
 * Floats the object to the right.
 */
type FLOAT_RIGHT = CustomLayoutTypeEnum_FLOAT_RIGHT;

/**
 * Positions the object using alignment and spacing rules.
 */
type ALIGNMENT_AND_SPACING = CustomLayoutTypeEnum_ALIGNMENT_AND_SPACING;

}
/**
 * The custom layout behavior applied to an object when its custom layout
 * property is enabled.
 */
export declare const CustomLayoutTypeEnum: typeof Enumeration & {

  /**
   * Floats the object to the left.
   */
  readonly FLOAT_LEFT: CustomLayoutTypeEnum_FLOAT_LEFT;
  /**
   * Floats the object to the left.
   */
  readonly floatLeft: CustomLayoutTypeEnum_FLOAT_LEFT;
  /**
   * Floats the object to the left.
   */
  readonly floatleft: CustomLayoutTypeEnum_FLOAT_LEFT;

  /**
   * Floats the object to the right.
   */
  readonly FLOAT_RIGHT: CustomLayoutTypeEnum_FLOAT_RIGHT;
  /**
   * Floats the object to the right.
   */
  readonly floatRight: CustomLayoutTypeEnum_FLOAT_RIGHT;
  /**
   * Floats the object to the right.
   */
  readonly floatright: CustomLayoutTypeEnum_FLOAT_RIGHT;

  /**
   * Positions the object using alignment and spacing rules.
   */
  readonly ALIGNMENT_AND_SPACING: CustomLayoutTypeEnum_ALIGNMENT_AND_SPACING;
  /**
   * Positions the object using alignment and spacing rules.
   */
  readonly alignmentAndSpacing: CustomLayoutTypeEnum_ALIGNMENT_AND_SPACING;
  /**
   * Positions the object using alignment and spacing rules.
   */
  readonly alignmentandspacing: CustomLayoutTypeEnum_ALIGNMENT_AND_SPACING;

}
