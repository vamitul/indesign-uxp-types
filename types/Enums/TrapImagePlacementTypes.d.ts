/**
 * TrapImagePlacementTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __TrapImagePlacementTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface TrapImagePlacementTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<TrapImagePlacementTypes>): boolean;

  /**
   * @internal **WARNING:** `__TrapImagePlacementTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__TrapImagePlacementTypes]: never;
}


/**
 * Creates a trap that straddles the edge between vector objects and bitmap images.
 */
interface TrapImagePlacementTypes_CENTER_EDGES extends TrapImagePlacementTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953522542;
}

/**
 * Causes vector objects to overlap abutting images.
 */
interface TrapImagePlacementTypes_CHOKE extends TrapImagePlacementTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953522536;
}

/**
 * Applies the same trapping rules as used elsewhere in the document. Note: When used to trap an object to a photograph, can result in noticeably uneven edges as the trap moves from one side of the edge to another.
 */
interface TrapImagePlacementTypes_IMAGE_NEUTRAL_DENSITY extends TrapImagePlacementTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953525348;
}

/**
 * Causes bitmap images to overlap the abutting objects.
 */
interface TrapImagePlacementTypes_IMAGES_OVER_SPREAD extends TrapImagePlacementTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1953526640;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Options for trap placement between vector objects and bitmap images.
 */
export declare namespace TrapImagePlacementTypes {
/**
 * Creates a trap that straddles the edge between vector objects and bitmap images.
 */
type CENTER_EDGES = TrapImagePlacementTypes_CENTER_EDGES;

/**
 * Causes vector objects to overlap abutting images.
 */
type CHOKE = TrapImagePlacementTypes_CHOKE;

/**
 * Applies the same trapping rules as used elsewhere in the document. Note: When used to trap an object to a photograph, can result in noticeably uneven edges as the trap moves from one side of the edge to another.
 */
type IMAGE_NEUTRAL_DENSITY = TrapImagePlacementTypes_IMAGE_NEUTRAL_DENSITY;

/**
 * Causes bitmap images to overlap the abutting objects.
 */
type IMAGES_OVER_SPREAD = TrapImagePlacementTypes_IMAGES_OVER_SPREAD;

}
/**
 * Options for trap placement between vector objects and bitmap images.
 */
export declare const TrapImagePlacementTypes: typeof Enumeration & {

  /**
   * Creates a trap that straddles the edge between vector objects and bitmap images.
   */
  readonly CENTER_EDGES: TrapImagePlacementTypes_CENTER_EDGES;
  /**
   * Creates a trap that straddles the edge between vector objects and bitmap images.
   */
  readonly centerEdges: TrapImagePlacementTypes_CENTER_EDGES;
  /**
   * Creates a trap that straddles the edge between vector objects and bitmap images.
   */
  readonly centeredges: TrapImagePlacementTypes_CENTER_EDGES;

  /**
   * Causes vector objects to overlap abutting images.
   */
  readonly CHOKE: TrapImagePlacementTypes_CHOKE;
  /**
   * Causes vector objects to overlap abutting images.
   */
  readonly choke: TrapImagePlacementTypes_CHOKE;

  /**
   * Applies the same trapping rules as used elsewhere in the document. Note: When used to trap an object to a photograph, can result in noticeably uneven edges as the trap moves from one side of the edge to another.
   */
  readonly IMAGE_NEUTRAL_DENSITY: TrapImagePlacementTypes_IMAGE_NEUTRAL_DENSITY;
  /**
   * Applies the same trapping rules as used elsewhere in the document. Note: When used to trap an object to a photograph, can result in noticeably uneven edges as the trap moves from one side of the edge to another.
   */
  readonly imageNeutralDensity: TrapImagePlacementTypes_IMAGE_NEUTRAL_DENSITY;
  /**
   * Applies the same trapping rules as used elsewhere in the document. Note: When used to trap an object to a photograph, can result in noticeably uneven edges as the trap moves from one side of the edge to another.
   */
  readonly imageneutraldensity: TrapImagePlacementTypes_IMAGE_NEUTRAL_DENSITY;

  /**
   * Causes bitmap images to overlap the abutting objects.
   */
  readonly IMAGES_OVER_SPREAD: TrapImagePlacementTypes_IMAGES_OVER_SPREAD;
  /**
   * Causes bitmap images to overlap the abutting objects.
   */
  readonly imagesOverSpread: TrapImagePlacementTypes_IMAGES_OVER_SPREAD;
  /**
   * Causes bitmap images to overlap the abutting objects.
   */
  readonly imagesoverspread: TrapImagePlacementTypes_IMAGES_OVER_SPREAD;

}
