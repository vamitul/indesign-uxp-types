/**
 * TransformPositionReference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TransformPositionReference: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TransformPositionReference extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TransformPositionReference>): boolean;

  /**
   * @internal **WARNING:** `__TransformPositionReference` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TransformPositionReference]: never;
}


/**
 * Corresponding edge of the page. Left edge for X attribute, Top edge for Y attribute.
 */
interface TransformPositionReference_PAGE_EDGE_REFERENCE extends TransformPositionReference {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1348945255;
}

/**
 * Corresponding page margin of the page.  Left margin for X attribute, Top margin for Y attribute.
 */
interface TransformPositionReference_PAGE_MARGIN_REFERENCE extends TransformPositionReference {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1883721063;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Which page geometry an object style's X or Y transform position is measured from — the page's
 * edge, or its margin. Setting the property to none disables that attribute.
 */
export declare namespace TransformPositionReference {
/**
 * Corresponding edge of the page. Left edge for X attribute, Top edge for Y attribute.
 */
type PAGE_EDGE_REFERENCE = TransformPositionReference_PAGE_EDGE_REFERENCE;

/**
 * Corresponding page margin of the page.  Left margin for X attribute, Top margin for Y attribute.
 */
type PAGE_MARGIN_REFERENCE = TransformPositionReference_PAGE_MARGIN_REFERENCE;

}
/**
 * Which page geometry an object style's X or Y transform position is measured from — the page's
 * edge, or its margin. Setting the property to none disables that attribute.
 */
export declare const TransformPositionReference: typeof Enumeration & {

  /**
   * Corresponding edge of the page. Left edge for X attribute, Top edge for Y attribute.
   */
  readonly PAGE_EDGE_REFERENCE: TransformPositionReference_PAGE_EDGE_REFERENCE;
  /**
   * Corresponding edge of the page. Left edge for X attribute, Top edge for Y attribute.
   */
  readonly pageEdgeReference: TransformPositionReference_PAGE_EDGE_REFERENCE;
  /**
   * Corresponding edge of the page. Left edge for X attribute, Top edge for Y attribute.
   */
  readonly pageedgereference: TransformPositionReference_PAGE_EDGE_REFERENCE;

  /**
   * Corresponding page margin of the page.  Left margin for X attribute, Top margin for Y attribute.
   */
  readonly PAGE_MARGIN_REFERENCE: TransformPositionReference_PAGE_MARGIN_REFERENCE;
  /**
   * Corresponding page margin of the page.  Left margin for X attribute, Top margin for Y attribute.
   */
  readonly pageMarginReference: TransformPositionReference_PAGE_MARGIN_REFERENCE;
  /**
   * Corresponding page margin of the page.  Left margin for X attribute, Top margin for Y attribute.
   */
  readonly pagemarginreference: TransformPositionReference_PAGE_MARGIN_REFERENCE;

}
