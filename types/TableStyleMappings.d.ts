/**
 * TableStyleMappings.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { MapType } from './Enums/MapType';
import type { BaseCollection } from './_base/Collections';
import type { TableStyleMapping } from './TableStyleMapping';

/**
 * A collection of {@link TableStyleMapping} objects. These mappings are used to
 * automatically translate source styles (e.g., from an imported Excel sheet)
 * into InDesign table styles.
 *
 * @collection TableStyleMapping
 */
export interface TableStyleMappings extends BaseCollection<TableStyleMapping, TableStyleMapping, TableStyleMapping<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'TableStyleMappings';

  /**
   * Adds a new table style mapping.
   *
   * @param sourceStyleName The name of the style in the source document.
   * @param destinationStyleName The name of the InDesign table style to map to.
   * @param mappingRuleType The {@link MapType} that determines whether the mapping is style-to-style, group-to-group, style-to-group, or group-to-style.
   * @param withProperties Initial values for properties of the new TableStyleMapping.
   */
  add(
    sourceStyleName: string,
    destinationStyleName: string,
    mappingRuleType: MapType,
    withProperties?: PropertiesSetter<TableStyleMapping>,
  ): TableStyleMapping;
}
