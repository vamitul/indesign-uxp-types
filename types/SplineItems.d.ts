/**
 * SplineItems.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { SplineItem } from './SplineItem';
import type { PageItemParent } from './_base/Parents';

/**
 * A collection of generic {@link SplineItem} objects. A spline item is the
 * base class for page items defined by a geometric path, including rectangles,
 * ovals, and polygons.
 *
 * @collection SplineItem
 */
export interface SplineItems<TParent = PageItemParent>
  extends
    BaseCollection<SplineItem<TParent>, SplineItem, SplineItem<TParent, PageItemParent, 'plural'>>,
    IdCollection<SplineItem<TParent>>,
    NamedCollection<SplineItem<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'SplineItems';
}
