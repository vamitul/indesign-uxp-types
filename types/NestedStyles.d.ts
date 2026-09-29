/**
 * NestedStyles.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { NestedStyle } from './NestedStyle';
import type { ParagraphStyle } from './ParagraphStyle';

/**
 * A collection of {@link NestedStyle} objects within a {@link ParagraphStyle} or paragraph.
 *
 * Nested styles allow you to automatically apply character styles to a specific range of
 * text within a paragraph based on defined delimiters or character counts.
 * @collection NestedStyle
 */
export interface NestedStyles extends BaseCollection<NestedStyle, NestedStyle, NestedStyle<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'NestedStyles';

  /**
   * Creates a new nested style rule.
   * @param withProperties Initial values for properties of the new rule.
   */
  add(withProperties?: PropertiesSetter<NestedStyle>): NestedStyle;
}
