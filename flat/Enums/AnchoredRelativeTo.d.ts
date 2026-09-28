/**
 * AnchoredRelativeTo.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AnchoredRelativeTo: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AnchoredRelativeTo extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AnchoredRelativeTo>): boolean;

  /**
   * @internal **WARNING:** `__AnchoredRelativeTo` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AnchoredRelativeTo]: never;
}


/**
 * Align the anchored object to the edge of the text or table column.
 */
interface AnchoredRelativeTo_COLUMN_EDGE extends AnchoredRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095787375;
}

/**
 * Align the anchored object to the edge of the text frame.
 */
interface AnchoredRelativeTo_TEXT_FRAME extends AnchoredRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1954051174;
}

/**
 * Align the anchored object to the page margin.
 */
interface AnchoredRelativeTo_PAGE_MARGINS extends AnchoredRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095789927;
}

/**
 * Align the anchored object to the edge of the page.
 */
interface AnchoredRelativeTo_PAGE_EDGE extends AnchoredRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095790695;
}

/**
 * Align the anchored object to the anchor.
 */
interface AnchoredRelativeTo_ANCHOR_LOCATION extends AnchoredRelativeTo {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1095786862;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The horizontal alignment point of an anchored object.
 */
export declare namespace AnchoredRelativeTo {
/**
 * Align the anchored object to the edge of the text or table column.
 */
type COLUMN_EDGE = AnchoredRelativeTo_COLUMN_EDGE;

/**
 * Align the anchored object to the edge of the text frame.
 */
type TEXT_FRAME = AnchoredRelativeTo_TEXT_FRAME;

/**
 * Align the anchored object to the page margin.
 */
type PAGE_MARGINS = AnchoredRelativeTo_PAGE_MARGINS;

/**
 * Align the anchored object to the edge of the page.
 */
type PAGE_EDGE = AnchoredRelativeTo_PAGE_EDGE;

/**
 * Align the anchored object to the anchor.
 */
type ANCHOR_LOCATION = AnchoredRelativeTo_ANCHOR_LOCATION;

}
/**
 * The horizontal alignment point of an anchored object.
 */
export declare const AnchoredRelativeTo: typeof Enumeration & {

  /**
   * Align the anchored object to the edge of the text or table column.
   */
  readonly COLUMN_EDGE: AnchoredRelativeTo_COLUMN_EDGE;
  /**
   * Align the anchored object to the edge of the text or table column.
   */
  readonly columnEdge: AnchoredRelativeTo_COLUMN_EDGE;
  /**
   * Align the anchored object to the edge of the text or table column.
   */
  readonly columnedge: AnchoredRelativeTo_COLUMN_EDGE;

  /**
   * Align the anchored object to the edge of the text frame.
   */
  readonly TEXT_FRAME: AnchoredRelativeTo_TEXT_FRAME;
  /**
   * Align the anchored object to the edge of the text frame.
   */
  readonly textFrame: AnchoredRelativeTo_TEXT_FRAME;
  /**
   * Align the anchored object to the edge of the text frame.
   */
  readonly textframe: AnchoredRelativeTo_TEXT_FRAME;

  /**
   * Align the anchored object to the page margin.
   */
  readonly PAGE_MARGINS: AnchoredRelativeTo_PAGE_MARGINS;
  /**
   * Align the anchored object to the page margin.
   */
  readonly pageMargins: AnchoredRelativeTo_PAGE_MARGINS;
  /**
   * Align the anchored object to the page margin.
   */
  readonly pagemargins: AnchoredRelativeTo_PAGE_MARGINS;

  /**
   * Align the anchored object to the edge of the page.
   */
  readonly PAGE_EDGE: AnchoredRelativeTo_PAGE_EDGE;
  /**
   * Align the anchored object to the edge of the page.
   */
  readonly pageEdge: AnchoredRelativeTo_PAGE_EDGE;
  /**
   * Align the anchored object to the edge of the page.
   */
  readonly pageedge: AnchoredRelativeTo_PAGE_EDGE;

  /**
   * Align the anchored object to the anchor.
   */
  readonly ANCHOR_LOCATION: AnchoredRelativeTo_ANCHOR_LOCATION;
  /**
   * Align the anchored object to the anchor.
   */
  readonly anchorLocation: AnchoredRelativeTo_ANCHOR_LOCATION;
  /**
   * Align the anchored object to the anchor.
   */
  readonly anchorlocation: AnchoredRelativeTo_ANCHOR_LOCATION;

}
