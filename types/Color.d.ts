/**
 * Color.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Swatch } from './Swatch';
import type { ColorModel } from './Enums/ColorModel';
import type { ColorSpace } from './Enums/ColorSpace';
import type { Tint } from './Tint';
import type { ColorGroup } from './ColorGroup';

/**
 * A solid color swatch — process or spot, in the RGB, CMYK, LAB, or mixed-ink
 * color space.
 */
export interface Color<M extends Mode = 'single'> extends Swatch<M>{
  /** The object's DOM class name — reports the specific kind, such as `'Tint'` when the object is a {@link Tint}. */
  readonly constructorName: 'Color' | 'Tint';

  /** Resolves the proxy into the individual {@link Color} objects it stands for. */
  getElements(): Color<'single'>[];

  /** The color model — process or spot. */
  get model(): Read<M, ColorModel>;
  set model(value: ColorModel);

  /** The color space the component values are interpreted in. */
  get space(): Read<M, ColorSpace>;
  set space(value: ColorSpace);

  /**
   * The component values that define the color, as percentages.
   *
   * The count and range depend on {@link space}: RGB takes 3 values (`0`–`255` each); CMYK
   * takes 4 (`0`–`100` each); LAB takes 3 (L `0`–`100`, A and B `-128`–`127`); mixed ink
   * takes one value per ink in the ink list (`0`–`100` each).
   */
  get colorValue(): Read<M, number[]>;
  set colorValue(value: number[]);

  /** Duplicates the color. */
  duplicate(): Read<M, Color>;
}

/**
 * A colour InDesign reports as a plain {@link Color} rather than as a {@link Tint} of another
 * colour.
 *
 * A tint *is* a colour, so a swatch reporting `'Color'` and one reporting `'Tint'` both carry
 * the colour members; only a tint additionally has a base colour and a tint percentage.
 */
export interface PlainColor<M extends Mode = 'single'> extends Color<M> {
  /** Always `'Color'` — this is the color case, by construction. */
  readonly constructorName: 'Color';
}

