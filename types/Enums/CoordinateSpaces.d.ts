/**
 * CoordinateSpaces.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __CoordinateSpaces: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface CoordinateSpaces extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<CoordinateSpaces>): boolean;

  /**
   * @internal **WARNING:** `__CoordinateSpaces` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__CoordinateSpaces]: never;
}


/**
 * Coordinates relative to the pasteboard origin.
 */
interface CoordinateSpaces_PASTEBOARD_COORDINATES extends CoordinateSpaces {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2021224546;
}

/**
 * Coordinates relative to the object's parent.
 */
interface CoordinateSpaces_PARENT_COORDINATES extends CoordinateSpaces {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2021224545;
}

/**
 * Coordinates relative to the object's own bounds.
 */
interface CoordinateSpaces_INNER_COORDINATES extends CoordinateSpaces {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2021222766;
}

/**
 * Page coordinates.
 */
interface CoordinateSpaces_PAGE_COORDINATES extends CoordinateSpaces {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2021224551;
}

/**
 * Spread coordinates.
 */
interface CoordinateSpaces_SPREAD_COORDINATES extends CoordinateSpaces {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2021225328;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The coordinate system used to interpret or return a point or bounding box,
 * relative to the pasteboard, parent, page, spread, or the object's own bounds.
 */
export declare namespace CoordinateSpaces {
/**
 * Coordinates relative to the pasteboard origin.
 */
type PASTEBOARD_COORDINATES = CoordinateSpaces_PASTEBOARD_COORDINATES;

/**
 * Coordinates relative to the object's parent.
 */
type PARENT_COORDINATES = CoordinateSpaces_PARENT_COORDINATES;

/**
 * Coordinates relative to the object's own bounds.
 */
type INNER_COORDINATES = CoordinateSpaces_INNER_COORDINATES;

/**
 * Page coordinates.
 */
type PAGE_COORDINATES = CoordinateSpaces_PAGE_COORDINATES;

/**
 * Spread coordinates.
 */
type SPREAD_COORDINATES = CoordinateSpaces_SPREAD_COORDINATES;

}
/**
 * The coordinate system used to interpret or return a point or bounding box,
 * relative to the pasteboard, parent, page, spread, or the object's own bounds.
 */
export declare const CoordinateSpaces: typeof Enumeration & {

  /**
   * Coordinates relative to the pasteboard origin.
   */
  readonly PASTEBOARD_COORDINATES: CoordinateSpaces_PASTEBOARD_COORDINATES;
  /**
   * Coordinates relative to the pasteboard origin.
   */
  readonly pasteboardCoordinates: CoordinateSpaces_PASTEBOARD_COORDINATES;
  /**
   * Coordinates relative to the pasteboard origin.
   */
  readonly pasteboardcoordinates: CoordinateSpaces_PASTEBOARD_COORDINATES;

  /**
   * Coordinates relative to the object's parent.
   */
  readonly PARENT_COORDINATES: CoordinateSpaces_PARENT_COORDINATES;
  /**
   * Coordinates relative to the object's parent.
   */
  readonly parentCoordinates: CoordinateSpaces_PARENT_COORDINATES;
  /**
   * Coordinates relative to the object's parent.
   */
  readonly parentcoordinates: CoordinateSpaces_PARENT_COORDINATES;

  /**
   * Coordinates relative to the object's own bounds.
   */
  readonly INNER_COORDINATES: CoordinateSpaces_INNER_COORDINATES;
  /**
   * Coordinates relative to the object's own bounds.
   */
  readonly innerCoordinates: CoordinateSpaces_INNER_COORDINATES;
  /**
   * Coordinates relative to the object's own bounds.
   */
  readonly innercoordinates: CoordinateSpaces_INNER_COORDINATES;

  /**
   * Page coordinates.
   */
  readonly PAGE_COORDINATES: CoordinateSpaces_PAGE_COORDINATES;
  /**
   * Page coordinates.
   */
  readonly pageCoordinates: CoordinateSpaces_PAGE_COORDINATES;
  /**
   * Page coordinates.
   */
  readonly pagecoordinates: CoordinateSpaces_PAGE_COORDINATES;

  /**
   * Spread coordinates.
   */
  readonly SPREAD_COORDINATES: CoordinateSpaces_SPREAD_COORDINATES;
  /**
   * Spread coordinates.
   */
  readonly spreadCoordinates: CoordinateSpaces_SPREAD_COORDINATES;
  /**
   * Spread coordinates.
   */
  readonly spreadcoordinates: CoordinateSpaces_SPREAD_COORDINATES;

}
