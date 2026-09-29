/**
 * AutoSizingTypeEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AutoSizingTypeEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AutoSizingTypeEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AutoSizingTypeEnum>): boolean;

  /**
   * @internal **WARNING:** `__AutoSizingTypeEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AutoSizingTypeEnum]: never;
}


/**
 * Text frame auto-sizing is off.
 */
interface AutoSizingTypeEnum_OFF extends AutoSizingTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1330005536;
}

/**
 * The text frame resizes in height only.
 */
interface AutoSizingTypeEnum_HEIGHT_ONLY extends AutoSizingTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1751476583;
}

/**
 * The text frame resizes in width only.
 */
interface AutoSizingTypeEnum_WIDTH_ONLY extends AutoSizingTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2003395700;
}

/**
 * The text frame resizes in both height and width.
 */
interface AutoSizingTypeEnum_HEIGHT_AND_WIDTH extends AutoSizingTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1752069993;
}

/**
 * The text frame resizes in both height and width, keeping its proportions.
 */
interface AutoSizingTypeEnum_HEIGHT_AND_WIDTH_PROPORTIONALLY extends AutoSizingTypeEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1752070000;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Auto sizing type options for text.
 */
export declare namespace AutoSizingTypeEnum {
/**
 * Text frame auto-sizing is off.
 */
type OFF = AutoSizingTypeEnum_OFF;

/**
 * Text frame will be resized in height dimension only. 
 */
type HEIGHT_ONLY = AutoSizingTypeEnum_HEIGHT_ONLY;

/**
 * Text frame will be resized in width dimension only. 
 */
type WIDTH_ONLY = AutoSizingTypeEnum_WIDTH_ONLY;

/**
 * Text frame will be resized in both height and width dimensions.
 */
type HEIGHT_AND_WIDTH = AutoSizingTypeEnum_HEIGHT_AND_WIDTH;

/**
 * Text frame will be resized in both height and width dimensions, proportionally.
 */
type HEIGHT_AND_WIDTH_PROPORTIONALLY = AutoSizingTypeEnum_HEIGHT_AND_WIDTH_PROPORTIONALLY;

}
/**
 * Auto sizing type options for text.
 */
export declare const AutoSizingTypeEnum: typeof Enumeration & {

  /**
   * Text frame auto-sizing is off.
   */
  readonly OFF: AutoSizingTypeEnum_OFF;
  /**
   * Text frame auto-sizing is off.
   */
  readonly off: AutoSizingTypeEnum_OFF;

  /**
   * The text frame resizes in height only.
   */
  readonly HEIGHT_ONLY: AutoSizingTypeEnum_HEIGHT_ONLY;
  /**
   * The text frame resizes in height only.
   */
  readonly heightOnly: AutoSizingTypeEnum_HEIGHT_ONLY;
  /**
   * The text frame resizes in height only.
   */
  readonly heightonly: AutoSizingTypeEnum_HEIGHT_ONLY;

  /**
   * The text frame resizes in width only.
   */
  readonly WIDTH_ONLY: AutoSizingTypeEnum_WIDTH_ONLY;
  /**
   * The text frame resizes in width only.
   */
  readonly widthOnly: AutoSizingTypeEnum_WIDTH_ONLY;
  /**
   * The text frame resizes in width only.
   */
  readonly widthonly: AutoSizingTypeEnum_WIDTH_ONLY;

  /**
   * The text frame resizes in both height and width.
   */
  readonly HEIGHT_AND_WIDTH: AutoSizingTypeEnum_HEIGHT_AND_WIDTH;
  /**
   * The text frame resizes in both height and width.
   */
  readonly heightAndWidth: AutoSizingTypeEnum_HEIGHT_AND_WIDTH;
  /**
   * The text frame resizes in both height and width.
   */
  readonly heightandwidth: AutoSizingTypeEnum_HEIGHT_AND_WIDTH;

  /**
   * The text frame resizes in both height and width, keeping its proportions.
   */
  readonly HEIGHT_AND_WIDTH_PROPORTIONALLY: AutoSizingTypeEnum_HEIGHT_AND_WIDTH_PROPORTIONALLY;
  /**
   * The text frame resizes in both height and width, keeping its proportions.
   */
  readonly heightAndWidthProportionally: AutoSizingTypeEnum_HEIGHT_AND_WIDTH_PROPORTIONALLY;
  /**
   * The text frame resizes in both height and width, keeping its proportions.
   */
  readonly heightandwidthproportionally: AutoSizingTypeEnum_HEIGHT_AND_WIDTH_PROPORTIONALLY;

}
