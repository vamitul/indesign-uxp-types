/**
 * ParagraphStyles.d.ts — indesign-uxp-types
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
import type { ParagraphStyle } from './ParagraphStyle';

/**
 * A collection of {@link ParagraphStyle} objects in an InDesign document or the application.
 * Paragraph styles allow you to apply complex block-level formatting to entire paragraphs,
 * maintaining consistent typography throughout the document.
 *
 * @collection ParagraphStyle
 */
export interface ParagraphStyles
  extends
    BaseCollection<ParagraphStyle, ParagraphStyle, ParagraphStyle<'plural'>>,
    IdCollection<ParagraphStyle>,
    NamedCollection<ParagraphStyle> {
  /** The object's DOM class name. */
  readonly constructorName: 'ParagraphStyles';

  /**
   * Creates a new paragraph style.
   *
   * * **Duplicate Names:** If a paragraph style with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   * @param withProperties Initial values for properties of the new {@link ParagraphStyle}.
   */
  add(withProperties?: PropertiesSetter<ParagraphStyle>): ParagraphStyle;
}
