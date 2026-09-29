/**
 * NestedGrepStyles.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { NestedGrepStyle } from './NestedGrepStyle';
import type { ParagraphStyle } from './ParagraphStyle';

/**
 * A collection of {@link NestedGrepStyle} objects within a {@link ParagraphStyle} or
 * paragraph.
 *
 * GREP styles allow you to automatically apply character styles to any text that matches a
 * specific GREP (Regular Expression) pattern within a paragraph.
 * @collection NestedGrepStyle
 */
export interface NestedGrepStyles extends BaseCollection<NestedGrepStyle, NestedGrepStyle, NestedGrepStyle<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'NestedGrepStyles';

  /**
   * Creates a new nested GREP style rule.
   * @param withProperties Initial values for properties of the new rule.
   */
  add(withProperties?: PropertiesSetter<NestedGrepStyle>): NestedGrepStyle;
}
