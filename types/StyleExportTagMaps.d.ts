/**
 * StyleExportTagMaps.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { StyleExportTagMap } from './StyleExportTagMap';
import type { CharacterStyle } from './CharacterStyle';
import type { ParagraphStyle } from './ParagraphStyle';

/**
 * A collection of {@link StyleExportTagMap} objects belonging to a {@link ParagraphStyle} or {@link CharacterStyle}.
 * Style export tag maps define how InDesign styles are translated to HTML or EPUB
 * tags and CSS classes during export.
 *
 * @collection StyleExportTagMap
 */
export interface StyleExportTagMaps extends BaseCollection<StyleExportTagMap, StyleExportTagMap, StyleExportTagMap<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'StyleExportTagMaps';

  /**
   * Creates a new style export tag mapping.
   *
   * @param exportType The type of export, such as "EPUB" or "HTML".
   * @param exportTag The specific HTML/EPUB tag to use for this style (e.g., "h1", "p", "span").
   * @param exportClass The CSS class name to assign to the exported tag.
   * @param exportAttributes Any additional HTML attributes to include in the tag.
   * @param withProperties Initial values for other properties of the new {@link StyleExportTagMap}.
   */
  add(
    exportType: string,
    exportTag: string,
    exportClass: string,
    exportAttributes: string,
    withProperties?: PropertiesSetter<StyleExportTagMap>,
  ): StyleExportTagMap;
}
