/**
 * WatermarkHorizontalPositionEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __WatermarkHorizontalPositionEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface WatermarkHorizontalPositionEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<WatermarkHorizontalPositionEnum>): boolean;

  /**
   * @internal **WARNING:** `__WatermarkHorizontalPositionEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__WatermarkHorizontalPositionEnum]: never;
}


/**
 * Place watermark horizontal left.
 */
interface WatermarkHorizontalPositionEnum_WATERMARK_H_LEFT extends WatermarkHorizontalPositionEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1883787372;
}

/**
 * Place watermark horizontal center.
 */
interface WatermarkHorizontalPositionEnum_WATERMARK_H_CENTER extends WatermarkHorizontalPositionEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1883787363;
}

/**
 * Place watermark horizontal right.
 */
interface WatermarkHorizontalPositionEnum_WATERMARK_H_RIGHT extends WatermarkHorizontalPositionEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1883787378;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Where a watermark sits horizontally on the page — left, center, or right.
 */
export declare namespace WatermarkHorizontalPositionEnum {
/**
 * Place watermark horizontal left.
 */
type WATERMARK_H_LEFT = WatermarkHorizontalPositionEnum_WATERMARK_H_LEFT;

/**
 * Place watermark horizontal center.
 */
type WATERMARK_H_CENTER = WatermarkHorizontalPositionEnum_WATERMARK_H_CENTER;

/**
 * Place watermark horizontal right.
 */
type WATERMARK_H_RIGHT = WatermarkHorizontalPositionEnum_WATERMARK_H_RIGHT;

}
/**
 * Where a watermark sits horizontally on the page — left, center, or right.
 */
export declare const WatermarkHorizontalPositionEnum: typeof Enumeration & {

  /**
   * Place watermark horizontal left.
   */
  readonly WATERMARK_H_LEFT: WatermarkHorizontalPositionEnum_WATERMARK_H_LEFT;
  /**
   * Place watermark horizontal left.
   */
  readonly watermarkHLeft: WatermarkHorizontalPositionEnum_WATERMARK_H_LEFT;
  /**
   * Place watermark horizontal left.
   */
  readonly watermarkhleft: WatermarkHorizontalPositionEnum_WATERMARK_H_LEFT;

  /**
   * Place watermark horizontal center.
   */
  readonly WATERMARK_H_CENTER: WatermarkHorizontalPositionEnum_WATERMARK_H_CENTER;
  /**
   * Place watermark horizontal center.
   */
  readonly watermarkHCenter: WatermarkHorizontalPositionEnum_WATERMARK_H_CENTER;
  /**
   * Place watermark horizontal center.
   */
  readonly watermarkhcenter: WatermarkHorizontalPositionEnum_WATERMARK_H_CENTER;

  /**
   * Place watermark horizontal right.
   */
  readonly WATERMARK_H_RIGHT: WatermarkHorizontalPositionEnum_WATERMARK_H_RIGHT;
  /**
   * Place watermark horizontal right.
   */
  readonly watermarkHRight: WatermarkHorizontalPositionEnum_WATERMARK_H_RIGHT;
  /**
   * Place watermark horizontal right.
   */
  readonly watermarkhright: WatermarkHorizontalPositionEnum_WATERMARK_H_RIGHT;

}
