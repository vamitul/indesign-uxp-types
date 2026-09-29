/**
 * IntegerComboboxes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { IntegerCombobox } from './IntegerCombobox';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link IntegerCombobox} objects within an InDesign {@link Dialog}.
 * These UI controls provide a list of preset whole numbers while also allowing
 * custom integer entry.
 *
 * @collection IntegerCombobox
 */
export interface IntegerComboboxes
  extends BaseCollection<IntegerCombobox, IntegerCombobox, IntegerCombobox<'plural'>>, IdCollection<IntegerCombobox> {
  /** The object's DOM class name. */
  readonly constructorName: 'IntegerComboboxes';

  /**
   * Creates and adds a new integer combobox control to the dialog.
   * @param withProperties Initial values for properties of the new control.
   */
  add(withProperties?: PropertiesSetter<IntegerCombobox>): IntegerCombobox;
}
