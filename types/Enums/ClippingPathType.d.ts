/**
 * ClippingPathType.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ClippingPathType: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ClippingPathType extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ClippingPathType>): boolean;

  /**
   * @internal **WARNING:** `__ClippingPathType` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ClippingPathType]: never;
}


/**
 * No clipping path applied. 
 */
interface ClippingPathType_NONE extends ClippingPathType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * The clipping path is based on pixel value threshold and tolerance.
 */
interface ClippingPathType_DETECT_EDGES extends ClippingPathType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1685349735;
}

/**
 * The clipping path is based on an alpha channel defined for the graphic in a graphics application.
 */
interface ClippingPathType_ALPHA_CHANNEL extends ClippingPathType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1634756707;
}

/**
 * The clipping path is defined for the graphic in Photoshop.
 */
interface ClippingPathType_PHOTOSHOP_PATH extends ClippingPathType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1886613620;
}

/**
 * (Read-only) The clipping path has been manually edited.
 */
interface ClippingPathType_USER_MODIFIED_PATH extends ClippingPathType {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1970106484;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The type of clipping path to create.
 */
export declare namespace ClippingPathType {
/**
 * No clipping path applied. 
 */
type NONE = ClippingPathType_NONE;

/**
 * The clipping path is based on pixel value threshold and tolerance.
 */
type DETECT_EDGES = ClippingPathType_DETECT_EDGES;

/**
 * The clipping path is based on an alpha channel defined for the graphic in a graphics application.
 */
type ALPHA_CHANNEL = ClippingPathType_ALPHA_CHANNEL;

/**
 * The clipping path is defined for the graphic in Photoshop.
 */
type PHOTOSHOP_PATH = ClippingPathType_PHOTOSHOP_PATH;

/**
 * (Read-only) The clipping path has been manually edited.
 */
type USER_MODIFIED_PATH = ClippingPathType_USER_MODIFIED_PATH;

}
/**
 * The type of clipping path to create.
 */
export declare const ClippingPathType: typeof Enumeration & {

  /**
   * No clipping path applied. 
   */
  readonly NONE: ClippingPathType_NONE;
  /**
   * No clipping path applied. 
   */
  readonly none: ClippingPathType_NONE;

  /**
   * The clipping path is based on pixel value threshold and tolerance.
   */
  readonly DETECT_EDGES: ClippingPathType_DETECT_EDGES;
  /**
   * The clipping path is based on pixel value threshold and tolerance.
   */
  readonly detectEdges: ClippingPathType_DETECT_EDGES;
  /**
   * The clipping path is based on pixel value threshold and tolerance.
   */
  readonly detectedges: ClippingPathType_DETECT_EDGES;

  /**
   * The clipping path is based on an alpha channel defined for the graphic in a graphics application.
   */
  readonly ALPHA_CHANNEL: ClippingPathType_ALPHA_CHANNEL;
  /**
   * The clipping path is based on an alpha channel defined for the graphic in a graphics application.
   */
  readonly alphaChannel: ClippingPathType_ALPHA_CHANNEL;
  /**
   * The clipping path is based on an alpha channel defined for the graphic in a graphics application.
   */
  readonly alphachannel: ClippingPathType_ALPHA_CHANNEL;

  /**
   * The clipping path is defined for the graphic in Photoshop.
   */
  readonly PHOTOSHOP_PATH: ClippingPathType_PHOTOSHOP_PATH;
  /**
   * The clipping path is defined for the graphic in Photoshop.
   */
  readonly photoshopPath: ClippingPathType_PHOTOSHOP_PATH;
  /**
   * The clipping path is defined for the graphic in Photoshop.
   */
  readonly photoshoppath: ClippingPathType_PHOTOSHOP_PATH;

  /**
   * (Read-only) The clipping path has been manually edited.
   */
  readonly USER_MODIFIED_PATH: ClippingPathType_USER_MODIFIED_PATH;
  /**
   * (Read-only) The clipping path has been manually edited.
   */
  readonly userModifiedPath: ClippingPathType_USER_MODIFIED_PATH;
  /**
   * (Read-only) The clipping path has been manually edited.
   */
  readonly usermodifiedpath: ClippingPathType_USER_MODIFIED_PATH;

}
