/**
 * DefaultRenderingIntent.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { RenderingIntent } from './RenderingIntent';



declare const __DefaultRenderingIntent: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface DefaultRenderingIntent extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<DefaultRenderingIntent>): boolean;

  /**
   * @internal **WARNING:** `__DefaultRenderingIntent` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__DefaultRenderingIntent]: never;
}


/**
 * Aims to preserve the visual relationship between colors so they are perceived as natural to the human eye, even though the color values themselves may change.
 */
interface DefaultRenderingIntent_PERCEPTUAL extends DefaultRenderingIntent {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380544611;
}

/**
 * Tries to produce vivid colors in an image at the expense of color accuracy.
 */
interface DefaultRenderingIntent_SATURATION extends DefaultRenderingIntent {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380545377;
}

/**
 * Compares the extreme highlight of the source color space to that of the destination color
 * space and shifts all colors accordingly.
 *
 * Out-of-gamut colors are shifted to the closest reproducible color in the destination
 * color space. Note: Preserves more of the original colors in an image than perceptual
 * rendering intent does.
 */
interface DefaultRenderingIntent_RELATIVE_COLORIMETRIC extends DefaultRenderingIntent {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1380545123;
}

/**
 * Aims to maintain color accuracy at the expense of color relationships and is suitable for
 * proofing to simulate the output of a particular device.
 *
 * Note: Leaves colors that fall inside the destination gamut unchanged and clips
 * out-of-gamut colors.
 */
interface DefaultRenderingIntent_ABSOLUTE_COLORIMETRIC extends DefaultRenderingIntent {
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
 * The rendering intent used when none is specified — one of the four concrete intents, with no option to defer. {@link RenderingIntent} adds that option.
 */
export declare namespace DefaultRenderingIntent {
/**
 * Aims to preserve the visual relationship between colors so they are perceived as natural to the human eye, even though the color values themselves may change.
 */
type PERCEPTUAL = DefaultRenderingIntent_PERCEPTUAL;

/**
 * Tries to produce vivid colors in an image at the expense of color accuracy.
 */
type SATURATION = DefaultRenderingIntent_SATURATION;

/**
 * Compares the extreme highlight of the source color space to that of the destination color
 * space and shifts all colors accordingly.
 *
 * Out-of-gamut colors are shifted to the closest reproducible color in the destination
 * color space. Note: Preserves more of the original colors in an image than perceptual
 * rendering intent does.
 */
type RELATIVE_COLORIMETRIC = DefaultRenderingIntent_RELATIVE_COLORIMETRIC;

/**
 * Aims to maintain color accuracy at the expense of color relationships and is suitable for
 * proofing to simulate the output of a particular device.
 *
 * Note: Leaves colors that fall inside the destination gamut unchanged and clips
 * out-of-gamut colors.
 */
type ABSOLUTE_COLORIMETRIC = DefaultRenderingIntent_ABSOLUTE_COLORIMETRIC;

}
export declare const DefaultRenderingIntent: typeof Enumeration & {

  /**
   * Aims to preserve the visual relationship between colors so they are perceived as natural to the human eye, even though the color values themselves may change.
   */
  readonly PERCEPTUAL: DefaultRenderingIntent_PERCEPTUAL;
  /**
   * Aims to preserve the visual relationship between colors so they are perceived as natural to the human eye, even though the color values themselves may change.
   */
  readonly perceptual: DefaultRenderingIntent_PERCEPTUAL;

  /**
   * Tries to produce vivid colors in an image at the expense of color accuracy.
   */
  readonly SATURATION: DefaultRenderingIntent_SATURATION;
  /**
   * Tries to produce vivid colors in an image at the expense of color accuracy.
   */
  readonly saturation: DefaultRenderingIntent_SATURATION;

  /**
   * Compares the extreme highlight of the source color space to that of the destination color
   * space and shifts all colors accordingly.
   *
   * Out-of-gamut colors are shifted to the closest reproducible color in the destination
   * color space. Note: Preserves more of the original colors in an image than perceptual
   * rendering intent does.
   */
  readonly RELATIVE_COLORIMETRIC: DefaultRenderingIntent_RELATIVE_COLORIMETRIC;
  /**
   * Compares the extreme highlight of the source color space to that of the destination color
   * space and shifts all colors accordingly.
   *
   * Out-of-gamut colors are shifted to the closest reproducible color in the destination
   * color space. Note: Preserves more of the original colors in an image than perceptual
   * rendering intent does.
   */
  readonly relativeColorimetric: DefaultRenderingIntent_RELATIVE_COLORIMETRIC;
  /**
   * Compares the extreme highlight of the source color space to that of the destination color
   * space and shifts all colors accordingly.
   *
   * Out-of-gamut colors are shifted to the closest reproducible color in the destination
   * color space. Note: Preserves more of the original colors in an image than perceptual
   * rendering intent does.
   */
  readonly relativecolorimetric: DefaultRenderingIntent_RELATIVE_COLORIMETRIC;

  /**
   * Aims to maintain color accuracy at the expense of color relationships and is suitable for
   * proofing to simulate the output of a particular device.
   *
   * Note: Leaves colors that fall inside the destination gamut unchanged and clips
   * out-of-gamut colors.
   */
  readonly ABSOLUTE_COLORIMETRIC: DefaultRenderingIntent_ABSOLUTE_COLORIMETRIC;
  /**
   * Aims to maintain color accuracy at the expense of color relationships and is suitable for
   * proofing to simulate the output of a particular device.
   *
   * Note: Leaves colors that fall inside the destination gamut unchanged and clips
   * out-of-gamut colors.
   */
  readonly absoluteColorimetric: DefaultRenderingIntent_ABSOLUTE_COLORIMETRIC;
  /**
   * Aims to maintain color accuracy at the expense of color relationships and is suitable for
   * proofing to simulate the output of a particular device.
   *
   * Note: Leaves colors that fall inside the destination gamut unchanged and clips
   * out-of-gamut colors.
   */
  readonly absolutecolorimetric: DefaultRenderingIntent_ABSOLUTE_COLORIMETRIC;

}
