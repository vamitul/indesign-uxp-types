/**
 * RealComboboxes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { RealCombobox } from './RealCombobox';

/**
 * A collection of {@link RealCombobox} UI controls within an InDesign dialog.
 * A real combobox enables users to either select a predefined floating-point numeric value
 * from a dropdown menu or manually input a custom value.
 *
 * @collection RealCombobox
 */
export interface RealComboboxes
  extends BaseCollection<RealCombobox, RealCombobox, RealCombobox<'plural'>>, IdCollection<RealCombobox> {
  /** The object's DOM class name. */
  readonly constructorName: 'RealComboboxes';

  /**
   * Creates and adds a new real-number combobox control to the dialog container.
   * @param withProperties Initial values for properties of the new control, including labels, value ranges, and the list of selectable items.
   */
  add(withProperties?: PropertiesSetter<RealCombobox>): RealCombobox;
}
