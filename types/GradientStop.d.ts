/**
 * GradientStop.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Gradient } from './Gradient';
import type { Color } from './Color';
import type { MixedInk } from './MixedInk';

/**
 * A single color stop within a {@link Gradient}, at a position along its length.
 */
export interface GradientStop<M extends Mode = 'single'>
  extends EventTargetDOMObject<Gradient, M>,
    IndexedDOMObject<Gradient, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'GradientStop';

  /** Resolves the proxy into the individual {@link GradientStop} objects it stands for. */
  getElements(): GradientStop<'single'>[];

  /** The swatch applied at this stop — a solid {@link Color} or a {@link MixedInk}. */
  get stopColor(): Read<M, MixedInk | Color>;
  set stopColor(value: MixedInk | Color);

  /** The position of the stop along the gradient, as a percentage of its length. */
  get location(): Read<M, number>;
  set location(value: number);

  /** The midpoint between this stop and the next, as a percentage of the distance between them. */
  get midpoint(): Read<M, number>;
  set midpoint(value: number);

  /** Deletes the gradient stop. */
  remove(): Read<M, void>;
}
