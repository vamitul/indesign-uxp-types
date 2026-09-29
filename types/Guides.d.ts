/**
 * Guides.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { Layer } from './Layer';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Guide } from './Guide';

/**
 * A collection of {@link Guide} objects. Guides are non-printing vertical or
 * horizontal lines used for aligning page items and establishing consistent
 * layout grids.
 *
 * @collection Guide
 */
export interface Guides
  extends BaseCollection<Guide, Guide, Guide<'plural'>>, IdCollection<Guide>, NamedCollection<Guide> {
  /** The object's DOM class name. */
  readonly constructorName: 'Guides';

  /**
   * Creates a new guide from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link Guide}.
   */
  add(withProperties: PropertiesSetter<Guide>): Guide;

  /**
   * Creates a new guide.
   *
   * @param layer The {@link Layer} on which to create the guide. Defaults to the active layer.
   * @param withProperties Initial values for properties of the new {@link Guide}.
   */
  add(layer?: Layer, withProperties?: PropertiesSetter<Guide>): Guide;
}
