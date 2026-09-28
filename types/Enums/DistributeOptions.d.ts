/**
 * DistributeOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __DistributeOptions: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DistributeOptions extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DistributeOptions>): boolean;

  /**
   * @internal **WARNING:** `__DistributeOptions` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DistributeOptions]: never;
}


/**
 * Distribute based on the left edges of the objects.
 */
interface DistributeOptions_LEFT_EDGES extends DistributeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1281770852;
}

/**
 * Distribute based on the top edges of the objects.
 */
interface DistributeOptions_TOP_EDGES extends DistributeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1416643940;
}

/**
 * Distribute based on the right edges of the objects.
 */
interface DistributeOptions_RIGHT_EDGES extends DistributeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1383351652;
}

/**
 * Distribute based on the bottom edges of the objects.
 */
interface DistributeOptions_BOTTOM_EDGES extends DistributeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1114916196;
}

/**
 * Distribute based on the horizontal centers of the objects.
 */
interface DistributeOptions_HORIZONTAL_CENTERS extends DistributeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1215257187;
}

/**
 * Distribute based on the vertical centers of the objects.
 */
interface DistributeOptions_VERTICAL_CENTERS extends DistributeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1449481315;
}

/**
 * Distribute based on the horizontal spacing of the objects.
 */
interface DistributeOptions_HORIZONTAL_SPACE extends DistributeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1215257203;
}

/**
 * Distribute based on the vertical spacing of the objects.
 */
interface DistributeOptions_VERTICAL_SPACE extends DistributeOptions {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1449489523;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for distributing objects.
 */
export declare namespace DistributeOptions {
/**
 * Distribute based on the left edges of the objects.
 */
type LEFT_EDGES = DistributeOptions_LEFT_EDGES;

/**
 * Distribute based on the top edges of the objects.
 */
type TOP_EDGES = DistributeOptions_TOP_EDGES;

/**
 * Distribute based on the right edges of the objects.
 */
type RIGHT_EDGES = DistributeOptions_RIGHT_EDGES;

/**
 * Distribute based on the bottom edges of the objects.
 */
type BOTTOM_EDGES = DistributeOptions_BOTTOM_EDGES;

/**
 * Distribute based on the horizontal centers of the objects.
 */
type HORIZONTAL_CENTERS = DistributeOptions_HORIZONTAL_CENTERS;

/**
 * Distribute based on the vertical centers of the objects.
 */
type VERTICAL_CENTERS = DistributeOptions_VERTICAL_CENTERS;

/**
 * Distribute based on the horizontal spacing of the objects.
 */
type HORIZONTAL_SPACE = DistributeOptions_HORIZONTAL_SPACE;

/**
 * Distribute based on the vertical spacing of the objects.
 */
type VERTICAL_SPACE = DistributeOptions_VERTICAL_SPACE;

}
/**
 * Options for distributing objects.
 */
export declare const DistributeOptions: typeof Enumeration & {

  /**
   * Distribute based on the left edges of the objects.
   */
  readonly LEFT_EDGES: DistributeOptions_LEFT_EDGES;
  /**
   * Distribute based on the left edges of the objects.
   */
  readonly leftEdges: DistributeOptions_LEFT_EDGES;
  /**
   * Distribute based on the left edges of the objects.
   */
  readonly leftedges: DistributeOptions_LEFT_EDGES;

  /**
   * Distribute based on the top edges of the objects.
   */
  readonly TOP_EDGES: DistributeOptions_TOP_EDGES;
  /**
   * Distribute based on the top edges of the objects.
   */
  readonly topEdges: DistributeOptions_TOP_EDGES;
  /**
   * Distribute based on the top edges of the objects.
   */
  readonly topedges: DistributeOptions_TOP_EDGES;

  /**
   * Distribute based on the right edges of the objects.
   */
  readonly RIGHT_EDGES: DistributeOptions_RIGHT_EDGES;
  /**
   * Distribute based on the right edges of the objects.
   */
  readonly rightEdges: DistributeOptions_RIGHT_EDGES;
  /**
   * Distribute based on the right edges of the objects.
   */
  readonly rightedges: DistributeOptions_RIGHT_EDGES;

  /**
   * Distribute based on the bottom edges of the objects.
   */
  readonly BOTTOM_EDGES: DistributeOptions_BOTTOM_EDGES;
  /**
   * Distribute based on the bottom edges of the objects.
   */
  readonly bottomEdges: DistributeOptions_BOTTOM_EDGES;
  /**
   * Distribute based on the bottom edges of the objects.
   */
  readonly bottomedges: DistributeOptions_BOTTOM_EDGES;

  /**
   * Distribute based on the horizontal centers of the objects.
   */
  readonly HORIZONTAL_CENTERS: DistributeOptions_HORIZONTAL_CENTERS;
  /**
   * Distribute based on the horizontal centers of the objects.
   */
  readonly horizontalCenters: DistributeOptions_HORIZONTAL_CENTERS;
  /**
   * Distribute based on the horizontal centers of the objects.
   */
  readonly horizontalcenters: DistributeOptions_HORIZONTAL_CENTERS;

  /**
   * Distribute based on the vertical centers of the objects.
   */
  readonly VERTICAL_CENTERS: DistributeOptions_VERTICAL_CENTERS;
  /**
   * Distribute based on the vertical centers of the objects.
   */
  readonly verticalCenters: DistributeOptions_VERTICAL_CENTERS;
  /**
   * Distribute based on the vertical centers of the objects.
   */
  readonly verticalcenters: DistributeOptions_VERTICAL_CENTERS;

  /**
   * Distribute based on the horizontal spacing of the objects.
   */
  readonly HORIZONTAL_SPACE: DistributeOptions_HORIZONTAL_SPACE;
  /**
   * Distribute based on the horizontal spacing of the objects.
   */
  readonly horizontalSpace: DistributeOptions_HORIZONTAL_SPACE;
  /**
   * Distribute based on the horizontal spacing of the objects.
   */
  readonly horizontalspace: DistributeOptions_HORIZONTAL_SPACE;

  /**
   * Distribute based on the vertical spacing of the objects.
   */
  readonly VERTICAL_SPACE: DistributeOptions_VERTICAL_SPACE;
  /**
   * Distribute based on the vertical spacing of the objects.
   */
  readonly verticalSpace: DistributeOptions_VERTICAL_SPACE;
  /**
   * Distribute based on the vertical spacing of the objects.
   */
  readonly verticalspace: DistributeOptions_VERTICAL_SPACE;

}
