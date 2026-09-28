/**
 * Layers.d.ts — indesign-uxp-types
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
import type { Layer } from './Layer';

/**
 * A collection of {@link Layer} objects in an InDesign document.
 * Layers allow you to organize page items in a stacking order, control visibility,
 * and lock groups of objects.
 *
 * @collection Layer
 */
export interface Layers
  extends BaseCollection<Layer, Layer, Layer<'plural'>>, IdCollection<Layer>, NamedCollection<Layer> {
  /** The object's DOM class name. */
  readonly constructorName: 'Layers';

  /**
   * Creates a new layer.
   *
   * * **Duplicate Names:** If a layer with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   * @param withProperties Initial values for properties of the new {@link Layer}.
   */
  add(withProperties?: PropertiesSetter<Layer>): Layer;
}
