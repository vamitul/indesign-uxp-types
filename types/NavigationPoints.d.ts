/**
 * NavigationPoints.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { NavigationPoint } from './NavigationPoint';
import type { Movie } from './Movie';

/**
 * A collection of {@link NavigationPoint} objects within a {@link Movie}.
 * Navigation points are specific timestamps that can be used as triggers or destinations
 * for interactive behaviors during media playback.
 *
 * @collection NavigationPoint
 */
export interface NavigationPoints
  extends
    BaseCollection<NavigationPoint, NavigationPoint, NavigationPoint<'plural'>>,
    IdCollection<NavigationPoint>,
    NamedCollection<NavigationPoint> {
  /** The object's DOM class name. */
  readonly constructorName: 'NavigationPoints';

  /**
   * Creates a new navigation point.
   * @param withProperties Initial values for properties of the new {@link NavigationPoint}.
   */
  add(withProperties?: PropertiesSetter<NavigationPoint>): NavigationPoint;
}
