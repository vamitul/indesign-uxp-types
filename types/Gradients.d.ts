/**
 * Gradients.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Gradient } from './Gradient';

/**
 * A collection of {@link Gradient} swatches in an InDesign document.
 * Gradients define a gradual transition between two or more colors.
 *
 * @collection Gradient
 */
export interface Gradients
  extends
    BaseCollection<Gradient, Gradient, Gradient<'plural'>>,
    IdCollection<Gradient>,
    NamedCollection<Gradient> {
  /** The object's DOM class name. */
  readonly constructorName: 'Gradients';

  /**
   * Creates a new gradient swatch.
   *
   * * **Duplicate Names:** If a gradient with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   * @param withProperties Initial values for properties of the new {@link Gradient}.
   */
  add(withProperties?: PropertiesSetter<Gradient>): Gradient;
}
