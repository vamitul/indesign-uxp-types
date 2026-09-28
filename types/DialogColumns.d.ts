/**
 * DialogColumns.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { DialogColumn } from './DialogColumn';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link DialogColumn} objects within a {@link Dialog}.
 * Columns provide vertical organization for UI controls within the dialog layout.
 *
 * @collection DialogColumn
 */
export interface DialogColumns
  extends BaseCollection<DialogColumn, DialogColumn, DialogColumn<'plural'>>, IdCollection<DialogColumn> {
  /** The object's DOM class name. */
  readonly constructorName: 'DialogColumns';

  /**
   * Creates and adds a new dialog column to the layout.
   * @param withProperties Initial values for properties of the new column.
   */
  add(withProperties?: PropertiesSetter<DialogColumn>): DialogColumn;
}
