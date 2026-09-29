/**
 * Gradient.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Swatch } from './Swatch';
import type { GradientStops } from './GradientStops';
import type { GradientType } from './Enums/GradientType';
import type { ColorGroup } from './ColorGroup';
import type { GradientStop } from './GradientStop';

/**
 * A gradient swatch, blending between the colors of its {@link gradientStops}.
 */
export interface Gradient<M extends Mode = 'single'> extends Swatch<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'Gradient';

  /** Resolves the proxy into the individual {@link Gradient} objects it stands for. */
  getElements(): Gradient<'single'>[];

  /** The {@link GradientStop} collection defining the gradient's colors and positions. */
  readonly gradientStops: GradientStops;

  /** Whether the gradient blends linearly or radially. */
  get type(): Read<M, GradientType>;
  set type(value: GradientType);

  /** Duplicates the gradient. */
  duplicate(): Read<M, Gradient>;
}
