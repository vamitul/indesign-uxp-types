/**
 * BlendMode.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __BlendMode: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface BlendMode extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<BlendMode>): boolean;

  /**
   * @internal **WARNING:** `__BlendMode` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__BlendMode]: never;
}


/**
 * Colors the object with the blend color, without interaction with the base color.
 */
interface BlendMode_NORMAL extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852797549;
}

/**
 * Multiplies the base color by the blend color, resulting in a darker color. Note: Multiplying with black produces black; multiplying with white leaves the color unchanged.
 */
interface BlendMode_MULTIPLY extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625762;
}

/**
 * Multiplies the inverse of the blend and base colors, resulting in a lighter color. Note: Screening with white produces white; screening with black leaves the color unchanged.
 */
interface BlendMode_SCREEN extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625763;
}

/**
 * Multiplies or screens the colors, depending on the base color; patterns or colors overlay the existing artwork, preserving base color highlights and shadows while mixing in the blend color to reflect the lightness or darkness of the original color.
 */
interface BlendMode_OVERLAY extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625764;
}

/**
 * For blend colors lighter than 50% gray, lightens the artwork as if it were dodged; for
 * blend colors darker than 50% gray, darkens the artwork as if it were burned.
 *
 * Note: Painting with pure black or white produces a distinctly darker or lighter area, but
 * does not result in pure black or white.
 */
interface BlendMode_SOFT_LIGHT extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625765;
}

/**
 * For blend colors lighter than 50% gray, lightens the artwork as if it were screened; for
 * blend colors darker than 50% gray, darkens the artwork as if it were multiplied.
 *
 * Note: Painting with pure black or white results in pure black or white.
 */
interface BlendMode_HARD_LIGHT extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625766;
}

/**
 * Brightens the base color to reflect the blend color. Note: Blending with pure black produces no change.
 */
interface BlendMode_COLOR_DODGE extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625767;
}

/**
 * Darkens the base color to reflect the blend color. Note: Blending with white produces no change.
 */
interface BlendMode_COLOR_BURN extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625768;
}

/**
 * Selects the darker of the base or blend colors as the resulting color; replaces areas lighter than the blend color but does not change areas darker than the blend color.
 */
interface BlendMode_DARKEN extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625769;
}

/**
 * Selects the lighter of the base or blend colors as the resulting color; replaces areas darker
 * than the blend color but does not change areas lighter than the blend color.
 */
interface BlendMode_LIGHTEN extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625770;
}

/**
 * Subtracts either the blend color from the base color or vice versa, depending on which has the greater brightness value. Note: Blending with white inverts the base color values; blending with black produces no change.
 */
interface BlendMode_DIFFERENCE extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625771;
}

/**
 * Creates an effect similar to — but lower in contrast than — the difference blend mode. Note:
 * Blending with white inverts the base color values; blending with black produces no change.
 */
interface BlendMode_EXCLUSION extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625772;
}

/**
 * Creates a color with the luminance and saturation of the base color and the hue of the blend color.
 */
interface BlendMode_HUE extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625773;
}

/**
 * Creates a color with the luminance and hue of the base color and the saturation of the blend color. Note: Does not change areas with no saturation (0% gray).
 */
interface BlendMode_SATURATION extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380545377;
}

/**
 * Creates a color with the luminance of the base color and the hue and saturation of the
 * blend color.
 *
 * Note: Preserves gray levels and is useful for coloring monochrome images or tinting color
 * images. Creates the inverse effect of the luminosity blend mode.
 */
interface BlendMode_COLOR extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1668246642;
}

/**
 * Creates a color with the hue and saturation of the base color and the luminance of the blend color. Note: Creates the inverse effect of the color blend mode.
 */
interface BlendMode_LUMINOSITY extends BlendMode {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020625776;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * Blend mode options.
 */
export declare namespace BlendMode {
/**
 * Colors the object with the blend color, without interaction with the base color.
 */
type NORMAL = BlendMode_NORMAL;

/**
 * Multiplies the base color by the blend color, resulting in a darker color. Note: Multiplying with black produces black; multiplying with white leaves the color unchanged.
 */
type MULTIPLY = BlendMode_MULTIPLY;

/**
 * Multiplies the inverse of the blend and base colors, resulting in a lighter color. Note: Screening with white produces white; screening with black leaves the color unchanged.
 */
type SCREEN = BlendMode_SCREEN;

/**
 * Multiplies or screens the colors, depending on the base color; patterns or colors overlay the existing artwork, preserving base color highlights and shadows while mixing in the blend color to reflect the lightness or darkness of the original color.
 */
type OVERLAY = BlendMode_OVERLAY;

/**
 * For blend colors lighter than 50% gray, lightens the artwork as if it were dodged; for
 * blend colors darker than 50% gray, darkens the artwork as if it were burned.
 *
 * Note: Painting with pure black or white produces a distinctly darker or lighter area, but
 * does not result in pure black or white.
 */
type SOFT_LIGHT = BlendMode_SOFT_LIGHT;

/**
 * For blend colors lighter than 50% gray, lightens the artwork as if it were screened; for
 * blend colors darker than 50% gray, darkens the artwork as if it were multiplied.
 *
 * Note: Painting with pure black or white results in pure black or white.
 */
type HARD_LIGHT = BlendMode_HARD_LIGHT;

/**
 * Brightens the base color to reflect the blend color. Note: Blending with pure black produces no change.
 */
type COLOR_DODGE = BlendMode_COLOR_DODGE;

/**
 * Darkens the base color to reflect the blend color. Note: Blending with white produces no change.
 */
type COLOR_BURN = BlendMode_COLOR_BURN;

/**
 * Selects the darker of the base or blend colors as the resulting color; replaces areas lighter than the blend color but does not change areas darker than the blend color.
 */
type DARKEN = BlendMode_DARKEN;

/**
 * Selects the lighter of the base or blend colors as the resulting color; replaces areas darker than the blend color but does not change areas lighter than the blend color
 */
type LIGHTEN = BlendMode_LIGHTEN;

/**
 * Subtracts either the blend color from the base color or vice versa, depending on which has the greater brightness value. Note: Blending with white inverts the base color values; blending with black produces no change.
 */
type DIFFERENCE = BlendMode_DIFFERENCE;

/**
 * Creates an effect similar to--but lower in contrast than--the difference blend mode. Note: Blending with white inverts the base color values; blending with black produces no change
 */
type EXCLUSION = BlendMode_EXCLUSION;

/**
 * Creates a color with the luminance and saturation of the base color and the hue of the blend color.
 */
type HUE = BlendMode_HUE;

/**
 * Creates a color with the luminance and hue of the base color and the saturation of the blend color. Note: Does not change areas with no saturation (0% gray).
 */
type SATURATION = BlendMode_SATURATION;

/**
 * Creates a color with the luminance of the base color and the hue and saturation of the
 * blend color.
 *
 * Note: Preserves gray levels and is useful for coloring monochrome images or tinting color
 * images. Creates the inverse effect of the luminosity blend mode.
 */
type COLOR = BlendMode_COLOR;

/**
 * Creates a color with the hue and saturation of the base color and the luminance of the blend color. Note: Creates the inverse effect of the color blend mode.
 */
type LUMINOSITY = BlendMode_LUMINOSITY;

}
/**
 * Blend mode options.
 */
export declare const BlendMode: typeof Enumeration & {

  /**
   * Colors the object with the blend color, without interaction with the base color.
   */
  readonly NORMAL: BlendMode_NORMAL;
  /**
   * Colors the object with the blend color, without interaction with the base color.
   */
  readonly normal: BlendMode_NORMAL;

  /**
   * Multiplies the base color by the blend color, resulting in a darker color. Note: Multiplying with black produces black; multiplying with white leaves the color unchanged.
   */
  readonly MULTIPLY: BlendMode_MULTIPLY;
  /**
   * Multiplies the base color by the blend color, resulting in a darker color. Note: Multiplying with black produces black; multiplying with white leaves the color unchanged.
   */
  readonly multiply: BlendMode_MULTIPLY;

  /**
   * Multiplies the inverse of the blend and base colors, resulting in a lighter color. Note: Screening with white produces white; screening with black leaves the color unchanged.
   */
  readonly SCREEN: BlendMode_SCREEN;
  /**
   * Multiplies the inverse of the blend and base colors, resulting in a lighter color. Note: Screening with white produces white; screening with black leaves the color unchanged.
   */
  readonly screen: BlendMode_SCREEN;

  /**
   * Multiplies or screens the colors, depending on the base color; patterns or colors overlay the existing artwork, preserving base color highlights and shadows while mixing in the blend color to reflect the lightness or darkness of the original color.
   */
  readonly OVERLAY: BlendMode_OVERLAY;
  /**
   * Multiplies or screens the colors, depending on the base color; patterns or colors overlay the existing artwork, preserving base color highlights and shadows while mixing in the blend color to reflect the lightness or darkness of the original color.
   */
  readonly overlay: BlendMode_OVERLAY;

  /**
   * For blend colors lighter than 50% gray, lightens the artwork as if it were dodged; for
   * blend colors darker than 50% gray, darkens the artwork as if it were burned.
   *
   * Note: Painting with pure black or white produces a distinctly darker or lighter area, but
   * does not result in pure black or white.
   */
  readonly SOFT_LIGHT: BlendMode_SOFT_LIGHT;
  /**
   * For blend colors lighter than 50% gray, lightens the artwork as if it were dodged; for
   * blend colors darker than 50% gray, darkens the artwork as if it were burned.
   *
   * Note: Painting with pure black or white produces a distinctly darker or lighter area, but
   * does not result in pure black or white.
   */
  readonly softLight: BlendMode_SOFT_LIGHT;
  /**
   * For blend colors lighter than 50% gray, lightens the artwork as if it were dodged; for
   * blend colors darker than 50% gray, darkens the artwork as if it were burned.
   *
   * Note: Painting with pure black or white produces a distinctly darker or lighter area, but
   * does not result in pure black or white.
   */
  readonly softlight: BlendMode_SOFT_LIGHT;

  /**
   * For blend colors lighter than 50% gray, lightens the artwork as if it were screened; for
   * blend colors darker than 50% gray, darkens the artwork as if it were multiplied.
   *
   * Note: Painting with pure black or white results in pure black or white.
   */
  readonly HARD_LIGHT: BlendMode_HARD_LIGHT;
  /**
   * For blend colors lighter than 50% gray, lightens the artwork as if it were screened; for
   * blend colors darker than 50% gray, darkens the artwork as if it were multiplied.
   *
   * Note: Painting with pure black or white results in pure black or white.
   */
  readonly hardLight: BlendMode_HARD_LIGHT;
  /**
   * For blend colors lighter than 50% gray, lightens the artwork as if it were screened; for
   * blend colors darker than 50% gray, darkens the artwork as if it were multiplied.
   *
   * Note: Painting with pure black or white results in pure black or white.
   */
  readonly hardlight: BlendMode_HARD_LIGHT;

  /**
   * Brightens the base color to reflect the blend color. Note: Blending with pure black produces no change.
   */
  readonly COLOR_DODGE: BlendMode_COLOR_DODGE;
  /**
   * Brightens the base color to reflect the blend color. Note: Blending with pure black produces no change.
   */
  readonly colorDodge: BlendMode_COLOR_DODGE;
  /**
   * Brightens the base color to reflect the blend color. Note: Blending with pure black produces no change.
   */
  readonly colordodge: BlendMode_COLOR_DODGE;

  /**
   * Darkens the base color to reflect the blend color. Note: Blending with white produces no change.
   */
  readonly COLOR_BURN: BlendMode_COLOR_BURN;
  /**
   * Darkens the base color to reflect the blend color. Note: Blending with white produces no change.
   */
  readonly colorBurn: BlendMode_COLOR_BURN;
  /**
   * Darkens the base color to reflect the blend color. Note: Blending with white produces no change.
   */
  readonly colorburn: BlendMode_COLOR_BURN;

  /**
   * Selects the darker of the base or blend colors as the resulting color; replaces areas lighter than the blend color but does not change areas darker than the blend color.
   */
  readonly DARKEN: BlendMode_DARKEN;
  /**
   * Selects the darker of the base or blend colors as the resulting color; replaces areas lighter than the blend color but does not change areas darker than the blend color.
   */
  readonly darken: BlendMode_DARKEN;

  /**
   * Selects the lighter of the base or blend colors as the resulting color; replaces areas
   * darker than the blend color but does not change areas lighter than the blend color.
   */
  readonly LIGHTEN: BlendMode_LIGHTEN;
  /**
   * Selects the lighter of the base or blend colors as the resulting color; replaces areas
   * darker than the blend color but does not change areas lighter than the blend color.
   */
  readonly lighten: BlendMode_LIGHTEN;

  /**
   * Subtracts either the blend color from the base color or vice versa, depending on which has the greater brightness value. Note: Blending with white inverts the base color values; blending with black produces no change.
   */
  readonly DIFFERENCE: BlendMode_DIFFERENCE;
  /**
   * Subtracts either the blend color from the base color or vice versa, depending on which has the greater brightness value. Note: Blending with white inverts the base color values; blending with black produces no change.
   */
  readonly difference: BlendMode_DIFFERENCE;

  /**
   * Creates an effect similar to — but lower in contrast than — the difference blend mode.
   * Note: Blending with white inverts the base color values; blending with black produces no
   * change.
   */
  readonly EXCLUSION: BlendMode_EXCLUSION;
  /**
   * Creates an effect similar to — but lower in contrast than — the difference blend mode.
   * Note: Blending with white inverts the base color values; blending with black produces no
   * change.
   */
  readonly exclusion: BlendMode_EXCLUSION;

  /**
   * Creates a color with the luminance and saturation of the base color and the hue of the blend color.
   */
  readonly HUE: BlendMode_HUE;
  /**
   * Creates a color with the luminance and saturation of the base color and the hue of the blend color.
   */
  readonly hue: BlendMode_HUE;

  /**
   * Creates a color with the luminance and hue of the base color and the saturation of the blend color. Note: Does not change areas with no saturation (0% gray).
   */
  readonly SATURATION: BlendMode_SATURATION;
  /**
   * Creates a color with the luminance and hue of the base color and the saturation of the blend color. Note: Does not change areas with no saturation (0% gray).
   */
  readonly saturation: BlendMode_SATURATION;

  /**
   * Creates a color with the luminance of the base color and the hue and saturation of the
   * blend color.
   *
   * Note: Preserves gray levels and is useful for coloring monochrome images or tinting color
   * images. Creates the inverse effect of the luminosity blend mode.
   */
  readonly COLOR: BlendMode_COLOR;
  /**
   * Creates a color with the luminance of the base color and the hue and saturation of the
   * blend color.
   *
   * Note: Preserves gray levels and is useful for coloring monochrome images or tinting color
   * images. Creates the inverse effect of the luminosity blend mode.
   */
  readonly color: BlendMode_COLOR;

  /**
   * Creates a color with the hue and saturation of the base color and the luminance of the blend color. Note: Creates the inverse effect of the color blend mode.
   */
  readonly LUMINOSITY: BlendMode_LUMINOSITY;
  /**
   * Creates a color with the hue and saturation of the base color and the luminance of the blend color. Note: Creates the inverse effect of the color blend mode.
   */
  readonly luminosity: BlendMode_LUMINOSITY;

}
