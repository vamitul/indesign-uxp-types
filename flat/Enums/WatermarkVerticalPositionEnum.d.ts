/**
 * WatermarkVerticalPositionEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __WatermarkVerticalPositionEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface WatermarkVerticalPositionEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<WatermarkVerticalPositionEnum>): boolean;

  /**
   * @internal **WARNING:** `__WatermarkVerticalPositionEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__WatermarkVerticalPositionEnum]: never;
}


/**
 * Place watermark vertical top.
 */
interface WatermarkVerticalPositionEnum_WATERMARK_V_TOP extends WatermarkVerticalPositionEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884704884;
}

/**
 * Place watermark vertical center.
 */
interface WatermarkVerticalPositionEnum_WATERMARK_V_CENTER extends WatermarkVerticalPositionEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884704867;
}

/**
 * Place watermark vertical bottom.
 */
interface WatermarkVerticalPositionEnum_WATERMARK_V_BOTTOM extends WatermarkVerticalPositionEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1884704866;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Where a watermark sits vertically on the page — top, center, or bottom.
 */
export declare namespace WatermarkVerticalPositionEnum {
/**
 * Place watermark vertical top.
 */
type WATERMARK_V_TOP = WatermarkVerticalPositionEnum_WATERMARK_V_TOP;

/**
 * Place watermark vertical center.
 */
type WATERMARK_V_CENTER = WatermarkVerticalPositionEnum_WATERMARK_V_CENTER;

/**
 * Place watermark vertical bottom.
 */
type WATERMARK_V_BOTTOM = WatermarkVerticalPositionEnum_WATERMARK_V_BOTTOM;

}
/**
 * Where a watermark sits vertically on the page — top, center, or bottom.
 */
export declare const WatermarkVerticalPositionEnum: typeof Enumeration & {

  /**
   * Place watermark vertical top.
   */
  readonly WATERMARK_V_TOP: WatermarkVerticalPositionEnum_WATERMARK_V_TOP;
  /**
   * Place watermark vertical top.
   */
  readonly watermarkVTop: WatermarkVerticalPositionEnum_WATERMARK_V_TOP;
  /**
   * Place watermark vertical top.
   */
  readonly watermarkvtop: WatermarkVerticalPositionEnum_WATERMARK_V_TOP;

  /**
   * Place watermark vertical center.
   */
  readonly WATERMARK_V_CENTER: WatermarkVerticalPositionEnum_WATERMARK_V_CENTER;
  /**
   * Place watermark vertical center.
   */
  readonly watermarkVCenter: WatermarkVerticalPositionEnum_WATERMARK_V_CENTER;
  /**
   * Place watermark vertical center.
   */
  readonly watermarkvcenter: WatermarkVerticalPositionEnum_WATERMARK_V_CENTER;

  /**
   * Place watermark vertical bottom.
   */
  readonly WATERMARK_V_BOTTOM: WatermarkVerticalPositionEnum_WATERMARK_V_BOTTOM;
  /**
   * Place watermark vertical bottom.
   */
  readonly watermarkVBottom: WatermarkVerticalPositionEnum_WATERMARK_V_BOTTOM;
  /**
   * Place watermark vertical bottom.
   */
  readonly watermarkvbottom: WatermarkVerticalPositionEnum_WATERMARK_V_BOTTOM;

}
