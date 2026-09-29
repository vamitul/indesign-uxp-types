/**
 * AlignOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __AlignOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface AlignOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<AlignOptions>): boolean;

  /**
   * @internal **WARNING:** `__AlignOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__AlignOptions]: never;
}


/**
 * Align the left edges of the objects.
 */
interface AlignOptions_LEFT_EDGES extends AlignOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1281770852;
}

/**
 * Align the top edges of the objects.
 */
interface AlignOptions_TOP_EDGES extends AlignOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416643940;
}

/**
 * Align the right edges of the objects.
 */
interface AlignOptions_RIGHT_EDGES extends AlignOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1383351652;
}

/**
 * Align the bottom edges of the objects.
 */
interface AlignOptions_BOTTOM_EDGES extends AlignOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1114916196;
}

/**
 * Align the horizontal centers of the objects.
 */
interface AlignOptions_HORIZONTAL_CENTERS extends AlignOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1215257187;
}

/**
 * Align the vertical centers of the objects.
 */
interface AlignOptions_VERTICAL_CENTERS extends AlignOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1449481315;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for aligning objects.
 */
export declare namespace AlignOptions {
/**
 * Align the left edges of the objects.
 */
type LEFT_EDGES = AlignOptions_LEFT_EDGES;

/**
 * Align the top edges of the objects.
 */
type TOP_EDGES = AlignOptions_TOP_EDGES;

/**
 * Align the right edges of the objects.
 */
type RIGHT_EDGES = AlignOptions_RIGHT_EDGES;

/**
 * Align the bottom edges of the objects.
 */
type BOTTOM_EDGES = AlignOptions_BOTTOM_EDGES;

/**
 * Align the horizontal centers of the objects.
 */
type HORIZONTAL_CENTERS = AlignOptions_HORIZONTAL_CENTERS;

/**
 * Align the vertical centers of the objects.
 */
type VERTICAL_CENTERS = AlignOptions_VERTICAL_CENTERS;

}
/**
 * Options for aligning objects.
 */
export declare const AlignOptions: typeof Enumeration & {

  /**
   * Align the left edges of the objects.
   */
  readonly LEFT_EDGES: AlignOptions_LEFT_EDGES;
  /**
   * Align the left edges of the objects.
   */
  readonly leftEdges: AlignOptions_LEFT_EDGES;
  /**
   * Align the left edges of the objects.
   */
  readonly leftedges: AlignOptions_LEFT_EDGES;

  /**
   * Align the top edges of the objects.
   */
  readonly TOP_EDGES: AlignOptions_TOP_EDGES;
  /**
   * Align the top edges of the objects.
   */
  readonly topEdges: AlignOptions_TOP_EDGES;
  /**
   * Align the top edges of the objects.
   */
  readonly topedges: AlignOptions_TOP_EDGES;

  /**
   * Align the right edges of the objects.
   */
  readonly RIGHT_EDGES: AlignOptions_RIGHT_EDGES;
  /**
   * Align the right edges of the objects.
   */
  readonly rightEdges: AlignOptions_RIGHT_EDGES;
  /**
   * Align the right edges of the objects.
   */
  readonly rightedges: AlignOptions_RIGHT_EDGES;

  /**
   * Align the bottom edges of the objects.
   */
  readonly BOTTOM_EDGES: AlignOptions_BOTTOM_EDGES;
  /**
   * Align the bottom edges of the objects.
   */
  readonly bottomEdges: AlignOptions_BOTTOM_EDGES;
  /**
   * Align the bottom edges of the objects.
   */
  readonly bottomedges: AlignOptions_BOTTOM_EDGES;

  /**
   * Align the horizontal centers of the objects.
   */
  readonly HORIZONTAL_CENTERS: AlignOptions_HORIZONTAL_CENTERS;
  /**
   * Align the horizontal centers of the objects.
   */
  readonly horizontalCenters: AlignOptions_HORIZONTAL_CENTERS;
  /**
   * Align the horizontal centers of the objects.
   */
  readonly horizontalcenters: AlignOptions_HORIZONTAL_CENTERS;

  /**
   * Align the vertical centers of the objects.
   */
  readonly VERTICAL_CENTERS: AlignOptions_VERTICAL_CENTERS;
  /**
   * Align the vertical centers of the objects.
   */
  readonly verticalCenters: AlignOptions_VERTICAL_CENTERS;
  /**
   * Align the vertical centers of the objects.
   */
  readonly verticalcenters: AlignOptions_VERTICAL_CENTERS;

}
