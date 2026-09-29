/**
 * AutoSizingReferenceEnum.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AutoSizingReferenceEnum: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AutoSizingReferenceEnum extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AutoSizingReferenceEnum>): boolean;

  /**
   * @internal **WARNING:** `__AutoSizingReferenceEnum` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AutoSizingReferenceEnum]: never;
}


/**
 * The top left point of the bounding box.
 */
interface AutoSizingReferenceEnum_TOP_LEFT_POINT extends AutoSizingReferenceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953459301;
}

/**
 * The center point on the top edge of the bounding box.
 */
interface AutoSizingReferenceEnum_TOP_CENTER_POINT extends AutoSizingReferenceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953456997;
}

/**
 * The top right point of the bounding box.
 */
interface AutoSizingReferenceEnum_TOP_RIGHT_POINT extends AutoSizingReferenceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953460841;
}

/**
 * The center point on the left edge of the bounding box.
 */
interface AutoSizingReferenceEnum_LEFT_CENTER_POINT extends AutoSizingReferenceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1818583909;
}

/**
 * The center point of the bounding box.
 */
interface AutoSizingReferenceEnum_CENTER_POINT extends AutoSizingReferenceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668183154;
}

/**
 * The center point on the right edge of the bounding box.
 */
interface AutoSizingReferenceEnum_RIGHT_CENTER_POINT extends AutoSizingReferenceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919509349;
}

/**
 * The bottom left point of the bounding box.
 */
interface AutoSizingReferenceEnum_BOTTOM_LEFT_POINT extends AutoSizingReferenceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1651469413;
}

/**
 * The center point on the bottom edge of the bounding box.
 */
interface AutoSizingReferenceEnum_BOTTOM_CENTER_POINT extends AutoSizingReferenceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1651467109;
}

/**
 * The bottom right point of the bounding box.
 */
interface AutoSizingReferenceEnum_BOTTOM_RIGHT_POINT extends AutoSizingReferenceEnum {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1651470953;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Auto sizing reference points for text.
 */
export declare namespace AutoSizingReferenceEnum {
/**
 * Top left point of bounding box
 */
type TOP_LEFT_POINT = AutoSizingReferenceEnum_TOP_LEFT_POINT;

/**
 * Center point on the top edge of bounding box
 */
type TOP_CENTER_POINT = AutoSizingReferenceEnum_TOP_CENTER_POINT;

/**
 * Top right point of bounding box
 */
type TOP_RIGHT_POINT = AutoSizingReferenceEnum_TOP_RIGHT_POINT;

/**
 * Center point on the left edge of bounding box
 */
type LEFT_CENTER_POINT = AutoSizingReferenceEnum_LEFT_CENTER_POINT;

/**
 * Center point of bounding box
 */
type CENTER_POINT = AutoSizingReferenceEnum_CENTER_POINT;

/**
 * Center point on the right edge of bounding box
 */
type RIGHT_CENTER_POINT = AutoSizingReferenceEnum_RIGHT_CENTER_POINT;

/**
 * Bottom left point of bounding box
 */
type BOTTOM_LEFT_POINT = AutoSizingReferenceEnum_BOTTOM_LEFT_POINT;

/**
 * Center point on the bottom edge of bounding box
 */
type BOTTOM_CENTER_POINT = AutoSizingReferenceEnum_BOTTOM_CENTER_POINT;

/**
 * Bottom right point of bounding box
 */
type BOTTOM_RIGHT_POINT = AutoSizingReferenceEnum_BOTTOM_RIGHT_POINT;

}
/**
 * Auto sizing reference points for text.
 */
export declare const AutoSizingReferenceEnum: typeof Enumeration & {

  /**
   * The top left point of the bounding box.
   */
  readonly TOP_LEFT_POINT: AutoSizingReferenceEnum_TOP_LEFT_POINT;
  /**
   * The top left point of the bounding box.
   */
  readonly topLeftPoint: AutoSizingReferenceEnum_TOP_LEFT_POINT;
  /**
   * The top left point of the bounding box.
   */
  readonly topleftpoint: AutoSizingReferenceEnum_TOP_LEFT_POINT;

  /**
   * The center point on the top edge of the bounding box.
   */
  readonly TOP_CENTER_POINT: AutoSizingReferenceEnum_TOP_CENTER_POINT;
  /**
   * The center point on the top edge of the bounding box.
   */
  readonly topCenterPoint: AutoSizingReferenceEnum_TOP_CENTER_POINT;
  /**
   * The center point on the top edge of the bounding box.
   */
  readonly topcenterpoint: AutoSizingReferenceEnum_TOP_CENTER_POINT;

  /**
   * The top right point of the bounding box.
   */
  readonly TOP_RIGHT_POINT: AutoSizingReferenceEnum_TOP_RIGHT_POINT;
  /**
   * The top right point of the bounding box.
   */
  readonly topRightPoint: AutoSizingReferenceEnum_TOP_RIGHT_POINT;
  /**
   * The top right point of the bounding box.
   */
  readonly toprightpoint: AutoSizingReferenceEnum_TOP_RIGHT_POINT;

  /**
   * The center point on the left edge of the bounding box.
   */
  readonly LEFT_CENTER_POINT: AutoSizingReferenceEnum_LEFT_CENTER_POINT;
  /**
   * The center point on the left edge of the bounding box.
   */
  readonly leftCenterPoint: AutoSizingReferenceEnum_LEFT_CENTER_POINT;
  /**
   * The center point on the left edge of the bounding box.
   */
  readonly leftcenterpoint: AutoSizingReferenceEnum_LEFT_CENTER_POINT;

  /**
   * The center point of the bounding box.
   */
  readonly CENTER_POINT: AutoSizingReferenceEnum_CENTER_POINT;
  /**
   * The center point of the bounding box.
   */
  readonly centerPoint: AutoSizingReferenceEnum_CENTER_POINT;
  /**
   * The center point of the bounding box.
   */
  readonly centerpoint: AutoSizingReferenceEnum_CENTER_POINT;

  /**
   * The center point on the right edge of the bounding box.
   */
  readonly RIGHT_CENTER_POINT: AutoSizingReferenceEnum_RIGHT_CENTER_POINT;
  /**
   * The center point on the right edge of the bounding box.
   */
  readonly rightCenterPoint: AutoSizingReferenceEnum_RIGHT_CENTER_POINT;
  /**
   * The center point on the right edge of the bounding box.
   */
  readonly rightcenterpoint: AutoSizingReferenceEnum_RIGHT_CENTER_POINT;

  /**
   * The bottom left point of the bounding box.
   */
  readonly BOTTOM_LEFT_POINT: AutoSizingReferenceEnum_BOTTOM_LEFT_POINT;
  /**
   * The bottom left point of the bounding box.
   */
  readonly bottomLeftPoint: AutoSizingReferenceEnum_BOTTOM_LEFT_POINT;
  /**
   * The bottom left point of the bounding box.
   */
  readonly bottomleftpoint: AutoSizingReferenceEnum_BOTTOM_LEFT_POINT;

  /**
   * The center point on the bottom edge of the bounding box.
   */
  readonly BOTTOM_CENTER_POINT: AutoSizingReferenceEnum_BOTTOM_CENTER_POINT;
  /**
   * The center point on the bottom edge of the bounding box.
   */
  readonly bottomCenterPoint: AutoSizingReferenceEnum_BOTTOM_CENTER_POINT;
  /**
   * The center point on the bottom edge of the bounding box.
   */
  readonly bottomcenterpoint: AutoSizingReferenceEnum_BOTTOM_CENTER_POINT;

  /**
   * The bottom right point of the bounding box.
   */
  readonly BOTTOM_RIGHT_POINT: AutoSizingReferenceEnum_BOTTOM_RIGHT_POINT;
  /**
   * The bottom right point of the bounding box.
   */
  readonly bottomRightPoint: AutoSizingReferenceEnum_BOTTOM_RIGHT_POINT;
  /**
   * The bottom right point of the bounding box.
   */
  readonly bottomrightpoint: AutoSizingReferenceEnum_BOTTOM_RIGHT_POINT;

}
