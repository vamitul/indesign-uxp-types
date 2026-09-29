/**
 * GradientStops.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { GradientStop } from './GradientStop';
import type { Gradient } from './Gradient';

/**
 * A collection of {@link GradientStop} objects within a {@link Gradient}.
 * Each stop defines a specific color and its percentage position along the
 * gradient's color transition.
 *
 * @collection GradientStop
 */
export interface GradientStops extends BaseCollection<GradientStop, GradientStop, GradientStop<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'GradientStops';

  /**
   * Creates and adds a new gradient stop to the gradient.
   * @param withProperties Initial values for properties of the new stop.
   */
  add(withProperties?: PropertiesSetter<GradientStop>): GradientStop;
}
