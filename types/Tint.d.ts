/**
 * Tint.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Color } from './Color';
import type { ColorModel } from './Enums/ColorModel';
import type { ColorSpace } from './Enums/ColorSpace';
import type { ColorGroup } from './ColorGroup';

/**
 * A tint swatch — a percentage of a {@link baseColor}. Every property besides
 * {@link tintValue} is derived and read-only.
 */
export interface Tint<M extends Mode = 'single'> extends Color<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'Tint';

  /** Resolves the proxy into the individual {@link Tint} objects it stands for. */
  getElements(): Tint<'single'>[];

  /** The color that this tint is a percentage of. */
  readonly baseColor: Read<M, Color>;

  /** The name of the tint, derived from {@link baseColor} and {@link tintValue}. */
  readonly name: Read<M, string>;

  /** The color model, inherited from {@link baseColor}. */
  readonly model: Read<M, ColorModel>;

  /** The color space, inherited from {@link baseColor}. */
  readonly space: Read<M, ColorSpace>;

  /** The component values of {@link baseColor}, unchanged. */
  readonly colorValue: Read<M, number[]>;

  /** The percentage of {@link baseColor} this tint represents. */
  get tintValue(): Read<M, number>;
  set tintValue(value: number);

  /** Duplicates the tint. */
  duplicate(): Read<M, Tint>;
}
