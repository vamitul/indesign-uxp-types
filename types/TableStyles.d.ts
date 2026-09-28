/**
 * TableStyles.d.ts — indesign-uxp-types
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
import type { TableStyle } from './TableStyle';

/**
 * A collection of {@link TableStyle} objects in an InDesign document.
 * Table styles allow you to apply consistent formatting (strokes, fills,
 * cell styles) to entire tables.
 *
 * @collection TableStyle
 */
export interface TableStyles
  extends
    BaseCollection<TableStyle, TableStyle, TableStyle<'plural'>>,
    IdCollection<TableStyle>,
    NamedCollection<TableStyle> {
  /** The object's DOM class name. */
  readonly constructorName: 'TableStyles';

  /**
   * Creates a new table style.
   *
   * * **Duplicate Names:** If a table style with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   * @param withProperties Initial values for properties of the new {@link TableStyle}.
   */
  add(withProperties?: PropertiesSetter<TableStyle>): TableStyle;
}
