/**
 * OpacityGradientStops.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { OpacityGradientStop } from './OpacityGradientStop';

/**
 * A collection of {@link OpacityGradientStop} objects within a `GradientFeatherSetting`.
 * These stops define the transparency levels and their positions along a gradient
 * feather path.
 *
 * @collection OpacityGradientStop
 */
export interface OpacityGradientStops extends BaseCollection<OpacityGradientStop, OpacityGradientStop, OpacityGradientStop<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'OpacityGradientStops';

  /**
   * Creates a new opacity gradient stop from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link OpacityGradientStop}.
   */
  add(withProperties: PropertiesSetter<OpacityGradientStop>): OpacityGradientStop;

  /**
   * Creates a new opacity gradient stop, optionally setting its opacity, position, and midpoint via a properties bag.
   * @param withProperties Initial values for properties of the new opacity gradient stop.
   */
  add(
    withProperties?: PropertiesSetter<OpacityGradientStop>,
  ): OpacityGradientStop;
}
