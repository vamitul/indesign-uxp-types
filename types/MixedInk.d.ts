/**
 * MixedInk.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Swatch } from './Swatch';
import type { Ink } from './Ink';
import type { MixedInkGroup } from './MixedInkGroup';
import type { ColorModel } from './Enums/ColorModel';
import type { ColorSpace } from './Enums/ColorSpace';
import type { ColorGroup } from './ColorGroup';

/**
 * A mixed ink swatch — a color built from percentages of two or more
 * {@link Ink} plates, optionally generated from a {@link MixedInkGroup}.
 */
export interface MixedInk<M extends Mode = 'single'> extends Swatch<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'MixedInk';

  /** Resolves the proxy into the individual {@link MixedInk} objects it stands for. */
  getElements(): MixedInk<'single'>[];

  /** The component inks that make up the mixed ink. */
  readonly inkList: Read<M, Ink[]>;

  /** The mixed ink group this swatch was generated from, if any. */
  readonly baseColor: Read<M, MixedInkGroup>;

  /** The color model — always process for a mixed ink. */
  get model(): Read<M, ColorModel>;
  set model(value: ColorModel);

  /** The color space the component values are interpreted in. */
  get space(): Read<M, ColorSpace>;
  set space(value: ColorSpace);

  /** The tint percentage for each ink in {@link inkList}, in the same order. One value per ink. */
  get inkPercentages(): Read<M, number[]>;
  set inkPercentages(value: number[]);

  /** Duplicates the mixed ink. */
  duplicate(): Read<M, MixedInk>;
}
