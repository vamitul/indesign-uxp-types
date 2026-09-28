/**
 * AnchorPoint.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AnchorPoint: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AnchorPoint extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AnchorPoint>): boolean;

  /**
   * @internal **WARNING:** `__AnchorPoint` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AnchorPoint]: never;
}


/**
 * The top left corner.
 */
interface AnchorPoint_TOP_LEFT_ANCHOR extends AnchorPoint {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095660652;
}

/**
 * The center point on the top of the bounding box.
 */
interface AnchorPoint_TOP_CENTER_ANCHOR extends AnchorPoint {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095660643;
}

/**
 * The top right corner.
 */
interface AnchorPoint_TOP_RIGHT_ANCHOR extends AnchorPoint {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095660658;
}

/**
 * The center point on the left side of the bounding box.
 */
interface AnchorPoint_LEFT_CENTER_ANCHOR extends AnchorPoint {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095658595;
}

/**
 * The center point in the bounding box.
 */
interface AnchorPoint_CENTER_ANCHOR extends AnchorPoint {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095656308;
}

/**
 * The center point on the right side of the bounding box.
 */
interface AnchorPoint_RIGHT_CENTER_ANCHOR extends AnchorPoint {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095660131;
}

/**
 * The bottom left corner.
 */
interface AnchorPoint_BOTTOM_LEFT_ANCHOR extends AnchorPoint {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095656044;
}

/**
 * The center point on the bottom of the bounding box.
 */
interface AnchorPoint_BOTTOM_CENTER_ANCHOR extends AnchorPoint {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095656035;
}

/**
 * The bottom right corner.
 */
interface AnchorPoint_BOTTOM_RIGHT_ANCHOR extends AnchorPoint {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095656050;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The reference point on the object's bounding box that does not move during transformation operations. Note: Transformations include rotation, scaling, flipping, and shearing.
 */
export declare namespace AnchorPoint {
/**
 * The top left corner.
 */
type TOP_LEFT_ANCHOR = AnchorPoint_TOP_LEFT_ANCHOR;

/**
 * The center point on the top of the bounding box.
 */
type TOP_CENTER_ANCHOR = AnchorPoint_TOP_CENTER_ANCHOR;

/**
 * The top right corner.
 */
type TOP_RIGHT_ANCHOR = AnchorPoint_TOP_RIGHT_ANCHOR;

/**
 * The center point on the left side of the bounding box.
 */
type LEFT_CENTER_ANCHOR = AnchorPoint_LEFT_CENTER_ANCHOR;

/**
 * The center point in the bounding box.
 */
type CENTER_ANCHOR = AnchorPoint_CENTER_ANCHOR;

/**
 * The center point on the right side of the bounding box.
 */
type RIGHT_CENTER_ANCHOR = AnchorPoint_RIGHT_CENTER_ANCHOR;

/**
 * The bottom left corner.
 */
type BOTTOM_LEFT_ANCHOR = AnchorPoint_BOTTOM_LEFT_ANCHOR;

/**
 * The center point on the bottom of the bounding box.
 */
type BOTTOM_CENTER_ANCHOR = AnchorPoint_BOTTOM_CENTER_ANCHOR;

/**
 * The bottom right corner.
 */
type BOTTOM_RIGHT_ANCHOR = AnchorPoint_BOTTOM_RIGHT_ANCHOR;

}
/**
 * The reference point on the object's bounding box that does not move during transformation operations. Note: Transformations include rotation, scaling, flipping, and shearing.
 */
export declare const AnchorPoint: typeof Enumeration & {

  /**
   * The top left corner.
   */
  readonly TOP_LEFT_ANCHOR: AnchorPoint_TOP_LEFT_ANCHOR;
  /**
   * The top left corner.
   */
  readonly topLeftAnchor: AnchorPoint_TOP_LEFT_ANCHOR;
  /**
   * The top left corner.
   */
  readonly topleftanchor: AnchorPoint_TOP_LEFT_ANCHOR;

  /**
   * The center point on the top of the bounding box.
   */
  readonly TOP_CENTER_ANCHOR: AnchorPoint_TOP_CENTER_ANCHOR;
  /**
   * The center point on the top of the bounding box.
   */
  readonly topCenterAnchor: AnchorPoint_TOP_CENTER_ANCHOR;
  /**
   * The center point on the top of the bounding box.
   */
  readonly topcenteranchor: AnchorPoint_TOP_CENTER_ANCHOR;

  /**
   * The top right corner.
   */
  readonly TOP_RIGHT_ANCHOR: AnchorPoint_TOP_RIGHT_ANCHOR;
  /**
   * The top right corner.
   */
  readonly topRightAnchor: AnchorPoint_TOP_RIGHT_ANCHOR;
  /**
   * The top right corner.
   */
  readonly toprightanchor: AnchorPoint_TOP_RIGHT_ANCHOR;

  /**
   * The center point on the left side of the bounding box.
   */
  readonly LEFT_CENTER_ANCHOR: AnchorPoint_LEFT_CENTER_ANCHOR;
  /**
   * The center point on the left side of the bounding box.
   */
  readonly leftCenterAnchor: AnchorPoint_LEFT_CENTER_ANCHOR;
  /**
   * The center point on the left side of the bounding box.
   */
  readonly leftcenteranchor: AnchorPoint_LEFT_CENTER_ANCHOR;

  /**
   * The center point in the bounding box.
   */
  readonly CENTER_ANCHOR: AnchorPoint_CENTER_ANCHOR;
  /**
   * The center point in the bounding box.
   */
  readonly centerAnchor: AnchorPoint_CENTER_ANCHOR;
  /**
   * The center point in the bounding box.
   */
  readonly centeranchor: AnchorPoint_CENTER_ANCHOR;

  /**
   * The center point on the right side of the bounding box.
   */
  readonly RIGHT_CENTER_ANCHOR: AnchorPoint_RIGHT_CENTER_ANCHOR;
  /**
   * The center point on the right side of the bounding box.
   */
  readonly rightCenterAnchor: AnchorPoint_RIGHT_CENTER_ANCHOR;
  /**
   * The center point on the right side of the bounding box.
   */
  readonly rightcenteranchor: AnchorPoint_RIGHT_CENTER_ANCHOR;

  /**
   * The bottom left corner.
   */
  readonly BOTTOM_LEFT_ANCHOR: AnchorPoint_BOTTOM_LEFT_ANCHOR;
  /**
   * The bottom left corner.
   */
  readonly bottomLeftAnchor: AnchorPoint_BOTTOM_LEFT_ANCHOR;
  /**
   * The bottom left corner.
   */
  readonly bottomleftanchor: AnchorPoint_BOTTOM_LEFT_ANCHOR;

  /**
   * The center point on the bottom of the bounding box.
   */
  readonly BOTTOM_CENTER_ANCHOR: AnchorPoint_BOTTOM_CENTER_ANCHOR;
  /**
   * The center point on the bottom of the bounding box.
   */
  readonly bottomCenterAnchor: AnchorPoint_BOTTOM_CENTER_ANCHOR;
  /**
   * The center point on the bottom of the bounding box.
   */
  readonly bottomcenteranchor: AnchorPoint_BOTTOM_CENTER_ANCHOR;

  /**
   * The bottom right corner.
   */
  readonly BOTTOM_RIGHT_ANCHOR: AnchorPoint_BOTTOM_RIGHT_ANCHOR;
  /**
   * The bottom right corner.
   */
  readonly bottomRightAnchor: AnchorPoint_BOTTOM_RIGHT_ANCHOR;
  /**
   * The bottom right corner.
   */
  readonly bottomrightanchor: AnchorPoint_BOTTOM_RIGHT_ANCHOR;

}
