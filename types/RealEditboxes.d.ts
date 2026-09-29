/**
 * RealEditboxes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { RealEditbox } from './RealEditbox';

/**
 * A collection of {@link RealEditbox} UI controls within an InDesign dialog.
 *
 * These fields are designed specifically for the input and display of real number
 * (floating-point) values, typically used for precise measurements, coordinates, or
 * percentages.
 * @collection RealEditbox
 */
export interface RealEditboxes
  extends BaseCollection<RealEditbox, RealEditbox, RealEditbox<'plural'>>, IdCollection<RealEditbox> {
  /** The object's DOM class name. */
  readonly constructorName: 'RealEditboxes';

  /**
   * Creates and adds a new real-number editbox control to the dialog container.
   * @param withProperties Initial values for properties of the new control, such as its initial numeric value, range constraints, and label.
   */
  add(withProperties?: PropertiesSetter<RealEditbox>): RealEditbox;
}
