/**
 * XMLImportMaps.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { XMLImportMap } from './XMLImportMap';
import type { XMLTag } from './XMLTag';
import type { ParagraphStyle } from './ParagraphStyle';
import type { CharacterStyle } from './CharacterStyle';
import type { TableStyle } from './TableStyle';
import type { CellStyle } from './CellStyle';

/**
 * A collection of {@link XMLImportMap} objects. These maps automate the styling
 * process by associating specific XML tags with corresponding layout styles
 * (paragraph, character, table, or cell) during XML import.
 *
 * @collection XMLImportMap
 */
export interface XMLImportMaps extends BaseCollection<XMLImportMap, XMLImportMap, XMLImportMap<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLImportMaps';

  /**
   * Creates a new XML import mapping.
   *
   * @param markupTag The {@link XMLTag} to map from.
   * @param mappedStyle The layout style to apply to the tagged content.
   * @param withProperties Initial values for properties of the new XMLImportMap.
   */
  add(
    markupTag: XMLTag | string,
    mappedStyle:
      | ParagraphStyle
      | CharacterStyle
      | TableStyle
      | CellStyle
      | string,
    withProperties?: PropertiesSetter<XMLImportMap>,
  ): XMLImportMap;
}
