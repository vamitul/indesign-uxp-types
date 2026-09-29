/**
 * ColorOutputModes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __ColorOutputModes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface ColorOutputModes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<ColorOutputModes>): boolean;

  /**
   * @internal **WARNING:** `__ColorOutputModes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__ColorOutputModes]: never;
}


/**
 * Sends a full-color version of the specified pages to the printer, preserving all color values in the original document. Note: Cannot simulate overprint when using this option. 
 */
interface ColorOutputModes_COMPOSITE_LEAVE_UNCHANGED extends ColorOutputModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668107349;
}

/**
 * Sends grayscale versions of the specified pages to the printer.
 */
interface ColorOutputModes_COMPOSITE_GRAY extends ColorOutputModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668116583;
}

/**
 * Sends full-color versions of the specified pages to the printer.
 */
interface ColorOutputModes_COMPOSITE_RGB extends ColorOutputModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668108866;
}

/**
 * Sends full-color versions of the specified pages to the printer. Note: Available only for PostScript printers.
 */
interface ColorOutputModes_COMPOSITE_CMYK extends ColorOutputModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668105035;
}

/**
 * Sends PostScript information for each of the required separations to the printer. Note: Available only for PostScript printers.
 */
interface ColorOutputModes_SEPARATIONS extends ColorOutputModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1936027745;
}

/**
 * Allows the printer to create color separations. Note: Valid only with a PostScript raster image processing (RIP) device.
 */
interface ColorOutputModes_INRIP_SEPARATIONS extends ColorOutputModes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1919512691;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Color output mode options for composites.
 */
export declare namespace ColorOutputModes {
/**
 * Sends a full-color version of the specified pages to the printer, preserving all color values in the original document. Note: Cannot simulate overprint when using this option. 
 */
type COMPOSITE_LEAVE_UNCHANGED = ColorOutputModes_COMPOSITE_LEAVE_UNCHANGED;

/**
 * Sends grayscale versions of the specified pages to the printer.
 */
type COMPOSITE_GRAY = ColorOutputModes_COMPOSITE_GRAY;

/**
 * Sends full-color versions of the specified pages to the printer.
 */
type COMPOSITE_RGB = ColorOutputModes_COMPOSITE_RGB;

/**
 * Sends full-color versions of the specified pages to the printer. Note: Available only for PostScript printers.
 */
type COMPOSITE_CMYK = ColorOutputModes_COMPOSITE_CMYK;

/**
 * Sends PostScript information for each of the required separations to the printer. Note: Available only for PostScript printers.
 */
type SEPARATIONS = ColorOutputModes_SEPARATIONS;

/**
 * Allows the printer to create color separations. Note: Valid only with a PostScript raster image processing (RIP) device.
 */
type INRIP_SEPARATIONS = ColorOutputModes_INRIP_SEPARATIONS;

}
/**
 * Color output mode options for composites.
 */
export declare const ColorOutputModes: typeof Enumeration & {

  /**
   * Sends a full-color version of the specified pages to the printer, preserving all color values in the original document. Note: Cannot simulate overprint when using this option. 
   */
  readonly COMPOSITE_LEAVE_UNCHANGED: ColorOutputModes_COMPOSITE_LEAVE_UNCHANGED;
  /**
   * Sends a full-color version of the specified pages to the printer, preserving all color values in the original document. Note: Cannot simulate overprint when using this option. 
   */
  readonly compositeLeaveUnchanged: ColorOutputModes_COMPOSITE_LEAVE_UNCHANGED;
  /**
   * Sends a full-color version of the specified pages to the printer, preserving all color values in the original document. Note: Cannot simulate overprint when using this option. 
   */
  readonly compositeleaveunchanged: ColorOutputModes_COMPOSITE_LEAVE_UNCHANGED;

  /**
   * Sends grayscale versions of the specified pages to the printer.
   */
  readonly COMPOSITE_GRAY: ColorOutputModes_COMPOSITE_GRAY;
  /**
   * Sends grayscale versions of the specified pages to the printer.
   */
  readonly compositeGray: ColorOutputModes_COMPOSITE_GRAY;
  /**
   * Sends grayscale versions of the specified pages to the printer.
   */
  readonly compositegray: ColorOutputModes_COMPOSITE_GRAY;

  /**
   * Sends full-color versions of the specified pages to the printer.
   */
  readonly COMPOSITE_RGB: ColorOutputModes_COMPOSITE_RGB;
  /**
   * Sends full-color versions of the specified pages to the printer.
   */
  readonly compositeRgb: ColorOutputModes_COMPOSITE_RGB;
  /**
   * Sends full-color versions of the specified pages to the printer.
   */
  readonly compositergb: ColorOutputModes_COMPOSITE_RGB;

  /**
   * Sends full-color versions of the specified pages to the printer. Note: Available only for PostScript printers.
   */
  readonly COMPOSITE_CMYK: ColorOutputModes_COMPOSITE_CMYK;
  /**
   * Sends full-color versions of the specified pages to the printer. Note: Available only for PostScript printers.
   */
  readonly compositeCmyk: ColorOutputModes_COMPOSITE_CMYK;
  /**
   * Sends full-color versions of the specified pages to the printer. Note: Available only for PostScript printers.
   */
  readonly compositecmyk: ColorOutputModes_COMPOSITE_CMYK;

  /**
   * Sends PostScript information for each of the required separations to the printer. Note: Available only for PostScript printers.
   */
  readonly SEPARATIONS: ColorOutputModes_SEPARATIONS;
  /**
   * Sends PostScript information for each of the required separations to the printer. Note: Available only for PostScript printers.
   */
  readonly separations: ColorOutputModes_SEPARATIONS;

  /**
   * Allows the printer to create color separations. Note: Valid only with a PostScript raster image processing (RIP) device.
   */
  readonly INRIP_SEPARATIONS: ColorOutputModes_INRIP_SEPARATIONS;
  /**
   * Allows the printer to create color separations. Note: Valid only with a PostScript raster image processing (RIP) device.
   */
  readonly inripSeparations: ColorOutputModes_INRIP_SEPARATIONS;
  /**
   * Allows the printer to create color separations. Note: Valid only with a PostScript raster image processing (RIP) device.
   */
  readonly inripseparations: ColorOutputModes_INRIP_SEPARATIONS;

}
