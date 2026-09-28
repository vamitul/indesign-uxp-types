/**
 * OpacityGradientStop.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { GradientFeatherSetting } from './GradientFeatherSetting';
import type { FindChangeGradientFeatherSetting } from './FindChangeGradientFeatherSetting';

/**
 * A single opacity stop within a gradient feather setting's opacity ramp.
 */
export interface OpacityGradientStop<M extends Mode = 'single'>
  extends EventTargetDOMObject<GradientFeatherSetting | FindChangeGradientFeatherSetting, M>,
    IndexedDOMObject<GradientFeatherSetting | FindChangeGradientFeatherSetting, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'OpacityGradientStop';

  /** Resolves the proxy into the individual {@link OpacityGradientStop} objects it stands for. */
  getElements(): OpacityGradientStop<'single'>[];

  /** The opacity at this stop, as a percentage. */
  get opacity(): Read<M, number>;
  set opacity(value: number);

  /** The position of the stop, as a percentage along the feather. */
  get location(): Read<M, number>;
  set location(value: number);

  /** The midpoint between this stop and the next, as a percentage of the distance between them. */
  get midpoint(): Read<M, number>;
  set midpoint(value: number);

  /** Deletes the opacity gradient stop. */
  remove(): Read<M, void>;
}
