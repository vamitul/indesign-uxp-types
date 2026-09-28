/**
 * TabStops.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { TabStop } from './TabStop';
import type { Paragraph } from './Paragraph';
import type { ParagraphStyle } from './ParagraphStyle';

/**
 * A collection of {@link TabStop} objects within a {@link Paragraph}, {@link ParagraphStyle}, or other text container.
 * Tab stops control the horizontal alignment of text following a tab character.
 *
 * @collection TabStop
 */
export interface TabStops extends BaseCollection<TabStop, TabStop, TabStop<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'TabStops';

  /**
   * Adds a new tab stop to the collection.
   * @param withProperties Initial values for properties of the new tab stop. Typically includes `position`, `alignment`, and `leader`.
   */
  add(withProperties?: PropertiesSetter<TabStop>): TabStop;
}
