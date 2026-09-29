/**
 * PathPoints.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { PathPoint } from './PathPoint';
import type { Path } from './Path';

/**
 * A collection of {@link PathPoint} objects. Each point defines a vertex
 * or control handle location on a {@link Path}, determining its curve and direction.
 *
 * @collection PathPoint
 */
export interface PathPoints extends BaseCollection<PathPoint, PathPoint, PathPoint<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'PathPoints';

  /**
   * Creates a new path point on the parent path.
   * @param withProperties Initial values for properties of the new point.
   */
  add(withProperties?: PropertiesSetter<PathPoint>): PathPoint;
}
