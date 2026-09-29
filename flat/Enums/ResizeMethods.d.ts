/**
 * ResizeMethods.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ResizeMethods: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ResizeMethods extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ResizeMethods>): boolean;

  /**
   * @internal **WARNING:** `__ResizeMethods` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ResizeMethods]: never;
}


/**
 * Add additional width and height to current values.
 */
interface ResizeMethods_ADDING_CURRENT_DIMENSIONS_TO extends ResizeMethods {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1215264592;
}

/**
 * Multiply current width and height by the given factors.
 */
interface ResizeMethods_MULTIPLYING_CURRENT_DIMENSIONS_BY extends ResizeMethods {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1215264589;
}

/**
 * Change width and height, overriding current values.
 */
interface ResizeMethods_REPLACING_CURRENT_DIMENSIONS_WITH extends ResizeMethods {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1215264581;
}

/**
 * Change width-to-height ratio while keeping the current area.
 */
interface ResizeMethods_RESHAPING_AREA_TO_RATIO extends ResizeMethods {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1215264577;
}

/**
 * Change width-to-height ratio while keeping the current perimeter.
 */
interface ResizeMethods_RESHAPING_BORDER_TO_RATIO extends ResizeMethods {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1215264595;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Whether a resize value replaces the current size, adds to it, or scales it.
 */
export declare namespace ResizeMethods {
/**
 * Add additional width and height to current values.
 */
type ADDING_CURRENT_DIMENSIONS_TO = ResizeMethods_ADDING_CURRENT_DIMENSIONS_TO;

/**
 * Multiply current width and height by the given factors.
 */
type MULTIPLYING_CURRENT_DIMENSIONS_BY = ResizeMethods_MULTIPLYING_CURRENT_DIMENSIONS_BY;

/**
 * Change width and height, overriding current values.
 */
type REPLACING_CURRENT_DIMENSIONS_WITH = ResizeMethods_REPLACING_CURRENT_DIMENSIONS_WITH;

/**
 * Change width-to-height ratio while keeping the current area.
 */
type RESHAPING_AREA_TO_RATIO = ResizeMethods_RESHAPING_AREA_TO_RATIO;

/**
 * Change width-to-height ratio while keeping the current perimeter.
 */
type RESHAPING_BORDER_TO_RATIO = ResizeMethods_RESHAPING_BORDER_TO_RATIO;

}
/**
 * Whether a resize value replaces the current size, adds to it, or scales it.
 */
export declare const ResizeMethods: typeof Enumeration & {

  /**
   * Add additional width and height to current values.
   */
  readonly ADDING_CURRENT_DIMENSIONS_TO: ResizeMethods_ADDING_CURRENT_DIMENSIONS_TO;
  /**
   * Add additional width and height to current values.
   */
  readonly addingCurrentDimensionsTo: ResizeMethods_ADDING_CURRENT_DIMENSIONS_TO;
  /**
   * Add additional width and height to current values.
   */
  readonly addingcurrentdimensionsto: ResizeMethods_ADDING_CURRENT_DIMENSIONS_TO;

  /**
   * Multiply current width and height by the given factors.
   */
  readonly MULTIPLYING_CURRENT_DIMENSIONS_BY: ResizeMethods_MULTIPLYING_CURRENT_DIMENSIONS_BY;
  /**
   * Multiply current width and height by the given factors.
   */
  readonly multiplyingCurrentDimensionsBy: ResizeMethods_MULTIPLYING_CURRENT_DIMENSIONS_BY;
  /**
   * Multiply current width and height by the given factors.
   */
  readonly multiplyingcurrentdimensionsby: ResizeMethods_MULTIPLYING_CURRENT_DIMENSIONS_BY;

  /**
   * Change width and height, overriding current values.
   */
  readonly REPLACING_CURRENT_DIMENSIONS_WITH: ResizeMethods_REPLACING_CURRENT_DIMENSIONS_WITH;
  /**
   * Change width and height, overriding current values.
   */
  readonly replacingCurrentDimensionsWith: ResizeMethods_REPLACING_CURRENT_DIMENSIONS_WITH;
  /**
   * Change width and height, overriding current values.
   */
  readonly replacingcurrentdimensionswith: ResizeMethods_REPLACING_CURRENT_DIMENSIONS_WITH;

  /**
   * Change width-to-height ratio while keeping the current area.
   */
  readonly RESHAPING_AREA_TO_RATIO: ResizeMethods_RESHAPING_AREA_TO_RATIO;
  /**
   * Change width-to-height ratio while keeping the current area.
   */
  readonly reshapingAreaToRatio: ResizeMethods_RESHAPING_AREA_TO_RATIO;
  /**
   * Change width-to-height ratio while keeping the current area.
   */
  readonly reshapingareatoratio: ResizeMethods_RESHAPING_AREA_TO_RATIO;

  /**
   * Change width-to-height ratio while keeping the current perimeter.
   */
  readonly RESHAPING_BORDER_TO_RATIO: ResizeMethods_RESHAPING_BORDER_TO_RATIO;
  /**
   * Change width-to-height ratio while keeping the current perimeter.
   */
  readonly reshapingBorderToRatio: ResizeMethods_RESHAPING_BORDER_TO_RATIO;
  /**
   * Change width-to-height ratio while keeping the current perimeter.
   */
  readonly reshapingbordertoratio: ResizeMethods_RESHAPING_BORDER_TO_RATIO;

}
