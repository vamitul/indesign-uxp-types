/**
 * AngleComboboxes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { AngleCombobox } from './AngleCombobox';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link AngleCombobox} objects within an InDesign {@link Dialog}.
 * These UI controls provide a list of preset angles while also allowing custom
 * angular value entry in degrees.
 * 
 * @collection AngleCombobox
 */
export interface AngleComboboxes
  extends BaseCollection<AngleCombobox, AngleCombobox, AngleCombobox<'plural'>>, IdCollection<AngleCombobox> {
  /** The object's DOM class name. */
  readonly constructorName: 'AngleComboboxes';

  /**
   * Creates and adds a new angle combobox control to the dialog.
   * @param withProperties Initial values for properties of the new control.
   */
  add(withProperties?: PropertiesSetter<AngleCombobox>): AngleCombobox;
}
