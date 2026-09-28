/**
 * XMLExportMaps.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { XMLExportMap } from './XMLExportMap';
import type { XMLTag } from './XMLTag';
import type { ParagraphStyle } from './ParagraphStyle';
import type { CharacterStyle } from './CharacterStyle';
import type { TableStyle } from './TableStyle';
import type { CellStyle } from './CellStyle';

/**
 * A collection of {@link XMLExportMap} objects. These maps automate the tagging
 * process by associating specific layout styles (paragraph, character, table,
 * or cell) with corresponding XML tags during export.
 *
 * @collection XMLExportMap
 */
export interface XMLExportMaps extends BaseCollection<XMLExportMap, XMLExportMap, XMLExportMap<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLExportMaps';

  /**
   * Creates a new XML export mapping.
   *
   * @param mappedStyle The layout style to map from.
   * @param markupTag The {@link XMLTag} to map to.
   * @param withProperties Initial values for properties of the new XMLExportMap.
   */
  add(
    mappedStyle:
      | ParagraphStyle
      | CharacterStyle
      | TableStyle
      | CellStyle
      | string,
    markupTag: XMLTag | string,
    withProperties?: PropertiesSetter<XMLExportMap>,
  ): XMLExportMap;
}
