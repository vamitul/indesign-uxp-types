/**
 * CellStyles.d.ts — indesign-uxp-types
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
import type { CellStyle } from './CellStyle';

/**
 * A collection of {@link CellStyle} objects in an InDesign document.
 * Cell styles allow you to apply consistent formatting (text alignment,
 * cell strokes, and fills) to individual table cells.
 *
 * @collection CellStyle
 */
export interface CellStyles
  extends
    BaseCollection<CellStyle, CellStyle, CellStyle<'plural'>>,
    IdCollection<CellStyle>,
    NamedCollection<CellStyle> {
  /** The object's DOM class name. */
  readonly constructorName: 'CellStyles';

  /**
   * Creates a new cell style.
   *
   * * **Duplicate Names:** If a cell style with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   *
   * @param withProperties Initial values for properties of the new CellStyle.
   */
  add(withProperties?: PropertiesSetter<CellStyle>): CellStyle;
}
