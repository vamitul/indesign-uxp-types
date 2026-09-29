/**
 * Paths.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { Path } from './Path';
import type { PathPoint } from './PathPoint';

/**
 * A collection of {@link Path} objects on a page item or graphic.
 * A path defines the geometric shape of an object and is composed of
 * one or more connected {@link PathPoint} objects.
 *
 * @collection Path
 */
export interface Paths extends BaseCollection<Path, Path, Path<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'Paths';

  /**
   * Creates a new path on the parent object.
   * @param withProperties Initial values for properties of the new path.
   */
  add(withProperties?: PropertiesSetter<Path>): Path;
}
