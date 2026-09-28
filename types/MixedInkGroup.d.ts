/**
 * MixedInkGroup.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Swatch } from './Swatch';
import type { Ink } from './Ink';
import type { ColorModel } from './Enums/ColorModel';
import type { MixedInk } from './MixedInk';
import type { ColorGroup } from './ColorGroup';

/**
 * A mixed ink group — a template of component inks and incremental steps used
 * to generate a family of {@link MixedInk} swatches at once.
 */
export interface MixedInkGroup<M extends Mode = 'single'> extends Swatch<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'MixedInkGroup';

  /** Resolves the proxy into the individual {@link MixedInkGroup} objects it stands for. */
  getElements(): MixedInkGroup<'single'>[];

  /** The component inks shared by every {@link MixedInk} the group generates. */
  readonly inkList: Read<M, Ink[]>;

  /** The color model — always process for a mixed ink group. */
  get model(): Read<M, ColorModel>;
  set model(value: ColorModel);

  /** Duplicates the mixed ink group. */
  duplicate(): Read<M, MixedInkGroup>;
}
