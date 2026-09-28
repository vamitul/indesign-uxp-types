/**
 * Dropdowns.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { Dropdown } from './Dropdown';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link Dropdown} objects within an InDesign {@link Dialog}.
 * These UI controls allow users to select a single value from a list of strings.
 *
 * @collection Dropdown
 */
export interface Dropdowns
  extends BaseCollection<Dropdown, Dropdown, Dropdown<'plural'>>, IdCollection<Dropdown> {
  /** The object's DOM class name. */
  readonly constructorName: 'Dropdowns';

  /**
   * Creates and adds a new dropdown control to the dialog.
   * @param withProperties Initial values for properties of the new control.
   */
  add(withProperties?: PropertiesSetter<Dropdown>): Dropdown;
}
