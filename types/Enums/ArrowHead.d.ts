/**
 * ArrowHead.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ArrowHead: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ArrowHead extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ArrowHead>): boolean;

  /**
   * @internal **WARNING:** `__ArrowHead` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ArrowHead]: never;
}


/**
 * None.
 */
interface ArrowHead_NONE extends ArrowHead {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * An arrow head formed by two slanting lines whose intersection forms a 45-degree angle and whose stroke weight is the same as the path's stroke.
 */
interface ArrowHead_SIMPLE_ARROW_HEAD extends ArrowHead {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936289136;
}

/**
 * An arrow head formed by two slanting lines whose intersection forms a 90-degree angle and whose stroke weight is the same as the path's stroke.
 */
interface ArrowHead_SIMPLE_WIDE_ARROW_HEAD extends ArrowHead {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1937203560;
}

/**
 * A solid triangle arrow head whose point describes a 45-degree angle.
 */
interface ArrowHead_TRIANGLE_ARROW_HEAD extends ArrowHead {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953655150;
}

/**
 * A solid triangle arrow head whose point describes a 90-degree angle.
 */
interface ArrowHead_TRIANGLE_WIDE_ARROW_HEAD extends ArrowHead {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953980776;
}

/**
 * A solid arrow head whose pierced end bows sharply toward the point and whose point describes a 45-degree angle.
 */
interface ArrowHead_BARBED_ARROW_HEAD extends ArrowHead {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1650553442;
}

/**
 * A solid arrow head whose pierced end concaves toward the point and whose point describes a 45-degree angle.
 */
interface ArrowHead_CURVED_ARROW_HEAD extends ArrowHead {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668702568;
}

/**
 * A hollow circle whose outline is the same weight as the stroke. The circle's diameter is 5 times the stroke width.
 */
interface ArrowHead_CIRCLE_ARROW_HEAD extends ArrowHead {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668440424;
}

/**
 * A solid circle whose diameter is 5 times the stroke width.
 */
interface ArrowHead_CIRCLE_SOLID_ARROW_HEAD extends ArrowHead {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668505960;
}

/**
 * A hollow square set perpendicular to the path, whose outline is the same weight as the stroke. The length of one side of the square is 5 times the stroke width.
 */
interface ArrowHead_SQUARE_ARROW_HEAD extends ArrowHead {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936810344;
}

/**
 * A solid square set perpendicular to the end of the path. The length of one side of the square is 5 times the stroke width.
 */
interface ArrowHead_SQUARE_SOLID_ARROW_HEAD extends ArrowHead {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936941416;
}

/**
 * A vertical bar bisected by the stroke, which meets the stroke at a right angle and is the same weight as the stroke. The bar's length is 4.5 times the stroke width.
 */
interface ArrowHead_BAR_ARROW_HEAD extends ArrowHead {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1651663208;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The shape of one or both ends of an open path.
 */
export declare namespace ArrowHead {
/**
 * None.
 */
type NONE = ArrowHead_NONE;

/**
 * An arrow head formed by two slanting lines whose intersection forms a 45-degree angle and whose stroke weight is the same as the path's stroke.
 */
type SIMPLE_ARROW_HEAD = ArrowHead_SIMPLE_ARROW_HEAD;

/**
 * An arrow head formed by two slanting lines whose intersection forms a 90-degree angle and whose stroke weight is the same as the path's stroke.
 */
type SIMPLE_WIDE_ARROW_HEAD = ArrowHead_SIMPLE_WIDE_ARROW_HEAD;

/**
 * A solid triangle arrow head whose point describes a 45-degree angle.
 */
type TRIANGLE_ARROW_HEAD = ArrowHead_TRIANGLE_ARROW_HEAD;

/**
 * A solid triangle arrow head whose point describes a 90-degree angle.
 */
type TRIANGLE_WIDE_ARROW_HEAD = ArrowHead_TRIANGLE_WIDE_ARROW_HEAD;

/**
 * A solid arrow head whose pierced end bows sharply toward the point and whose point describes a 45-degree angle.
 */
type BARBED_ARROW_HEAD = ArrowHead_BARBED_ARROW_HEAD;

/**
 * A solid arrow head whose pierced end concaves toward the point and whose point describes a 45-degree angle.
 */
type CURVED_ARROW_HEAD = ArrowHead_CURVED_ARROW_HEAD;

/**
 * A hollow circle whose outline is the same weight as the stroke. The circle's diameter is 5 times the stroke width.
 */
type CIRCLE_ARROW_HEAD = ArrowHead_CIRCLE_ARROW_HEAD;

/**
 * A solid circle whose diameter is 5 times the stroke width.
 */
type CIRCLE_SOLID_ARROW_HEAD = ArrowHead_CIRCLE_SOLID_ARROW_HEAD;

/**
 * A hollow square set perpendicular to the path, whose outline is the same weight as the stroke. The length of one side of the square is 5 times the stroke width.
 */
type SQUARE_ARROW_HEAD = ArrowHead_SQUARE_ARROW_HEAD;

/**
 * A solid square set perpendicular to the end of the path. The length of one side of the square is 5 times the stroke width.
 */
type SQUARE_SOLID_ARROW_HEAD = ArrowHead_SQUARE_SOLID_ARROW_HEAD;

/**
 * A vertical bar bisected by the stroke, which meets the stroke at a right angle and is the same weight as the stroke. The bar's length is 4.5 times the stroke width.
 */
type BAR_ARROW_HEAD = ArrowHead_BAR_ARROW_HEAD;

}
/**
 * The shape of one or both ends of an open path.
 */
export declare const ArrowHead: typeof Enumeration & {

  /**
   * None.
   */
  readonly NONE: ArrowHead_NONE;
  /**
   * None.
   */
  readonly none: ArrowHead_NONE;

  /**
   * An arrow head formed by two slanting lines whose intersection forms a 45-degree angle and whose stroke weight is the same as the path's stroke.
   */
  readonly SIMPLE_ARROW_HEAD: ArrowHead_SIMPLE_ARROW_HEAD;
  /**
   * An arrow head formed by two slanting lines whose intersection forms a 45-degree angle and whose stroke weight is the same as the path's stroke.
   */
  readonly simpleArrowHead: ArrowHead_SIMPLE_ARROW_HEAD;
  /**
   * An arrow head formed by two slanting lines whose intersection forms a 45-degree angle and whose stroke weight is the same as the path's stroke.
   */
  readonly simplearrowhead: ArrowHead_SIMPLE_ARROW_HEAD;

  /**
   * An arrow head formed by two slanting lines whose intersection forms a 90-degree angle and whose stroke weight is the same as the path's stroke.
   */
  readonly SIMPLE_WIDE_ARROW_HEAD: ArrowHead_SIMPLE_WIDE_ARROW_HEAD;
  /**
   * An arrow head formed by two slanting lines whose intersection forms a 90-degree angle and whose stroke weight is the same as the path's stroke.
   */
  readonly simpleWideArrowHead: ArrowHead_SIMPLE_WIDE_ARROW_HEAD;
  /**
   * An arrow head formed by two slanting lines whose intersection forms a 90-degree angle and whose stroke weight is the same as the path's stroke.
   */
  readonly simplewidearrowhead: ArrowHead_SIMPLE_WIDE_ARROW_HEAD;

  /**
   * A solid triangle arrow head whose point describes a 45-degree angle.
   */
  readonly TRIANGLE_ARROW_HEAD: ArrowHead_TRIANGLE_ARROW_HEAD;
  /**
   * A solid triangle arrow head whose point describes a 45-degree angle.
   */
  readonly triangleArrowHead: ArrowHead_TRIANGLE_ARROW_HEAD;
  /**
   * A solid triangle arrow head whose point describes a 45-degree angle.
   */
  readonly trianglearrowhead: ArrowHead_TRIANGLE_ARROW_HEAD;

  /**
   * A solid triangle arrow head whose point describes a 90-degree angle.
   */
  readonly TRIANGLE_WIDE_ARROW_HEAD: ArrowHead_TRIANGLE_WIDE_ARROW_HEAD;
  /**
   * A solid triangle arrow head whose point describes a 90-degree angle.
   */
  readonly triangleWideArrowHead: ArrowHead_TRIANGLE_WIDE_ARROW_HEAD;
  /**
   * A solid triangle arrow head whose point describes a 90-degree angle.
   */
  readonly trianglewidearrowhead: ArrowHead_TRIANGLE_WIDE_ARROW_HEAD;

  /**
   * A solid arrow head whose pierced end bows sharply toward the point and whose point describes a 45-degree angle.
   */
  readonly BARBED_ARROW_HEAD: ArrowHead_BARBED_ARROW_HEAD;
  /**
   * A solid arrow head whose pierced end bows sharply toward the point and whose point describes a 45-degree angle.
   */
  readonly barbedArrowHead: ArrowHead_BARBED_ARROW_HEAD;
  /**
   * A solid arrow head whose pierced end bows sharply toward the point and whose point describes a 45-degree angle.
   */
  readonly barbedarrowhead: ArrowHead_BARBED_ARROW_HEAD;

  /**
   * A solid arrow head whose pierced end concaves toward the point and whose point describes a 45-degree angle.
   */
  readonly CURVED_ARROW_HEAD: ArrowHead_CURVED_ARROW_HEAD;
  /**
   * A solid arrow head whose pierced end concaves toward the point and whose point describes a 45-degree angle.
   */
  readonly curvedArrowHead: ArrowHead_CURVED_ARROW_HEAD;
  /**
   * A solid arrow head whose pierced end concaves toward the point and whose point describes a 45-degree angle.
   */
  readonly curvedarrowhead: ArrowHead_CURVED_ARROW_HEAD;

  /**
   * A hollow circle whose outline is the same weight as the stroke. The circle's diameter is 5 times the stroke width.
   */
  readonly CIRCLE_ARROW_HEAD: ArrowHead_CIRCLE_ARROW_HEAD;
  /**
   * A hollow circle whose outline is the same weight as the stroke. The circle's diameter is 5 times the stroke width.
   */
  readonly circleArrowHead: ArrowHead_CIRCLE_ARROW_HEAD;
  /**
   * A hollow circle whose outline is the same weight as the stroke. The circle's diameter is 5 times the stroke width.
   */
  readonly circlearrowhead: ArrowHead_CIRCLE_ARROW_HEAD;

  /**
   * A solid circle whose diameter is 5 times the stroke width.
   */
  readonly CIRCLE_SOLID_ARROW_HEAD: ArrowHead_CIRCLE_SOLID_ARROW_HEAD;
  /**
   * A solid circle whose diameter is 5 times the stroke width.
   */
  readonly circleSolidArrowHead: ArrowHead_CIRCLE_SOLID_ARROW_HEAD;
  /**
   * A solid circle whose diameter is 5 times the stroke width.
   */
  readonly circlesolidarrowhead: ArrowHead_CIRCLE_SOLID_ARROW_HEAD;

  /**
   * A hollow square set perpendicular to the path, whose outline is the same weight as the stroke. The length of one side of the square is 5 times the stroke width.
   */
  readonly SQUARE_ARROW_HEAD: ArrowHead_SQUARE_ARROW_HEAD;
  /**
   * A hollow square set perpendicular to the path, whose outline is the same weight as the stroke. The length of one side of the square is 5 times the stroke width.
   */
  readonly squareArrowHead: ArrowHead_SQUARE_ARROW_HEAD;
  /**
   * A hollow square set perpendicular to the path, whose outline is the same weight as the stroke. The length of one side of the square is 5 times the stroke width.
   */
  readonly squarearrowhead: ArrowHead_SQUARE_ARROW_HEAD;

  /**
   * A solid square set perpendicular to the end of the path. The length of one side of the square is 5 times the stroke width.
   */
  readonly SQUARE_SOLID_ARROW_HEAD: ArrowHead_SQUARE_SOLID_ARROW_HEAD;
  /**
   * A solid square set perpendicular to the end of the path. The length of one side of the square is 5 times the stroke width.
   */
  readonly squareSolidArrowHead: ArrowHead_SQUARE_SOLID_ARROW_HEAD;
  /**
   * A solid square set perpendicular to the end of the path. The length of one side of the square is 5 times the stroke width.
   */
  readonly squaresolidarrowhead: ArrowHead_SQUARE_SOLID_ARROW_HEAD;

  /**
   * A vertical bar bisected by the stroke, which meets the stroke at a right angle and is the same weight as the stroke. The bar's length is 4.5 times the stroke width.
   */
  readonly BAR_ARROW_HEAD: ArrowHead_BAR_ARROW_HEAD;
  /**
   * A vertical bar bisected by the stroke, which meets the stroke at a right angle and is the same weight as the stroke. The bar's length is 4.5 times the stroke width.
   */
  readonly barArrowHead: ArrowHead_BAR_ARROW_HEAD;
  /**
   * A vertical bar bisected by the stroke, which meets the stroke at a right angle and is the same weight as the stroke. The bar's length is 4.5 times the stroke width.
   */
  readonly bararrowhead: ArrowHead_BAR_ARROW_HEAD;

}
