/**
 * NestedLineStyles.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { NestedLineStyle } from './NestedLineStyle';
import type { ParagraphStyle } from './ParagraphStyle';

/**
 * A collection of {@link NestedLineStyle} objects within a {@link ParagraphStyle} or paragraph.
 * Nested line styles allow you to automatically apply character styles to a specific
 * number of lines at the beginning of a paragraph.
 *
 * @collection NestedLineStyle
 */
export interface NestedLineStyles extends BaseCollection<NestedLineStyle, NestedLineStyle, NestedLineStyle<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'NestedLineStyles';

  /**
   * Creates a new nested line style rule.
   * @param withProperties Initial values for properties of the new rule.
   */
  add(withProperties?: PropertiesSetter<NestedLineStyle>): NestedLineStyle;
}
