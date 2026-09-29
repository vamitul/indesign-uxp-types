/**
 * DialogRows.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { DialogRow } from './DialogRow';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link DialogRow} objects within a {@link Dialog}.
 * Rows provide horizontal organization for UI controls within the dialog layout.
 *
 * @collection DialogRow
 */
export interface DialogRows
  extends BaseCollection<DialogRow, DialogRow, DialogRow<'plural'>>, IdCollection<DialogRow> {
  /** The object's DOM class name. */
  readonly constructorName: 'DialogRows';

  /**
   * Creates and adds a new dialog row to the layout.
   * @param withProperties Initial values for properties of the new row.
   */
  add(withProperties?: PropertiesSetter<DialogRow>): DialogRow;
}
