/**
 * RenderingIntent.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __RenderingIntent: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface RenderingIntent extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<RenderingIntent>): boolean;

  /**
   * @internal **WARNING:** `__RenderingIntent` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__RenderingIntent]: never;
}


/**
 * Uses the current color settings.
 */
interface RenderingIntent_USE_COLOR_SETTINGS extends RenderingIntent {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380541299;
}

/**
 * Preserves the visual relationship between colors at the expense of actual color values; most suitable for photographic images with high percentages of out-of-gamut colors.
 */
interface RenderingIntent_PERCEPTUAL extends RenderingIntent {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380544611;
}

/**
 * Produces vivid colors at the expense of color accuracy; most suitable for business graphics such as graphs or charts.
 */
interface RenderingIntent_SATURATION extends RenderingIntent {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380545377;
}

/**
 * Compares the extreme highlight of the source color space to that of the
 * destination color space and shifts all colors accordingly; out-of-gamut colors
 * are shifted to the closest reproducible color in the destination color space.
 */
interface RenderingIntent_RELATIVE_COLORIMETRIC extends RenderingIntent {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380545123;
}

/**
 * Maintains color accuracy at the expense of preserving relationships between colors; most suitable for previewing how paper color affects printed colors. 
 */
interface RenderingIntent_ABSOLUTE_COLORIMETRIC extends RenderingIntent {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380540771;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * How out-of-gamut colours are mapped when converting between colour spaces, or `USE_COLOR_SETTINGS` to defer to the colour settings in force.
 */
export declare namespace RenderingIntent {
/**
 * Uses the current color settings.
 */
type USE_COLOR_SETTINGS = RenderingIntent_USE_COLOR_SETTINGS;

/**
 * Preserves the visual relationship between colors at the expense of actual color values; most suitable for photographic images with high percentages of out-of-gamut colors.
 */
type PERCEPTUAL = RenderingIntent_PERCEPTUAL;

/**
 * Produces vivid colors at the expense of color accuracy; most suitable for business graphics such as graphs or charts.
 */
type SATURATION = RenderingIntent_SATURATION;

/**
 * Compares the extreme highlight of the source color space to that of the
 * destination color space and shifts all colors accordingly; out-of-gamut colors
 * are shifted to the closest reproducible color in the destination color space.
 */
type RELATIVE_COLORIMETRIC = RenderingIntent_RELATIVE_COLORIMETRIC;

/**
 * Maintains color accuracy at the expense of preserving relationships between colors; most suitable for previewing how paper color affects printed colors. 
 */
type ABSOLUTE_COLORIMETRIC = RenderingIntent_ABSOLUTE_COLORIMETRIC;

}
export declare const RenderingIntent: typeof Enumeration & {

  /**
   * Uses the current color settings.
   */
  readonly USE_COLOR_SETTINGS: RenderingIntent_USE_COLOR_SETTINGS;
  /**
   * Uses the current color settings.
   */
  readonly useColorSettings: RenderingIntent_USE_COLOR_SETTINGS;
  /**
   * Uses the current color settings.
   */
  readonly usecolorsettings: RenderingIntent_USE_COLOR_SETTINGS;

  /**
   * Preserves the visual relationship between colors at the expense of actual color values; most suitable for photographic images with high percentages of out-of-gamut colors.
   */
  readonly PERCEPTUAL: RenderingIntent_PERCEPTUAL;
  /**
   * Preserves the visual relationship between colors at the expense of actual color values; most suitable for photographic images with high percentages of out-of-gamut colors.
   */
  readonly perceptual: RenderingIntent_PERCEPTUAL;

  /**
   * Produces vivid colors at the expense of color accuracy; most suitable for business graphics such as graphs or charts.
   */
  readonly SATURATION: RenderingIntent_SATURATION;
  /**
   * Produces vivid colors at the expense of color accuracy; most suitable for business graphics such as graphs or charts.
   */
  readonly saturation: RenderingIntent_SATURATION;

  /**
   * Compares the extreme highlight of the source color space to that of the
   * destination color space and shifts all colors accordingly; out-of-gamut colors
   * are shifted to the closest reproducible color in the destination color space.
   */
  readonly RELATIVE_COLORIMETRIC: RenderingIntent_RELATIVE_COLORIMETRIC;
  /**
   * Compares the extreme highlight of the source color space to that of the
   * destination color space and shifts all colors accordingly; out-of-gamut colors
   * are shifted to the closest reproducible color in the destination color space.
   */
  readonly relativeColorimetric: RenderingIntent_RELATIVE_COLORIMETRIC;
  /**
   * Compares the extreme highlight of the source color space to that of the
   * destination color space and shifts all colors accordingly; out-of-gamut colors
   * are shifted to the closest reproducible color in the destination color space.
   */
  readonly relativecolorimetric: RenderingIntent_RELATIVE_COLORIMETRIC;

  /**
   * Maintains color accuracy at the expense of preserving relationships between colors; most suitable for previewing how paper color affects printed colors. 
   */
  readonly ABSOLUTE_COLORIMETRIC: RenderingIntent_ABSOLUTE_COLORIMETRIC;
  /**
   * Maintains color accuracy at the expense of preserving relationships between colors; most suitable for previewing how paper color affects printed colors. 
   */
  readonly absoluteColorimetric: RenderingIntent_ABSOLUTE_COLORIMETRIC;
  /**
   * Maintains color accuracy at the expense of preserving relationships between colors; most suitable for previewing how paper color affects printed colors. 
   */
  readonly absolutecolorimetric: RenderingIntent_ABSOLUTE_COLORIMETRIC;

}
