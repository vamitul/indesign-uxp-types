/**
 * CellStyleMappings.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { MapType } from './Enums/MapType';
import type { BaseCollection } from './_base/Collections';
import type { CellStyleMapping } from './CellStyleMapping';

/**
 * A collection of {@link CellStyleMapping} objects. These mappings are used
 * to automatically translate source cell styles (e.g., from an imported Excel sheet)
 * into InDesign table cell styles.
 *
 * @collection CellStyleMapping
 */
export interface CellStyleMappings extends BaseCollection<CellStyleMapping, CellStyleMapping, CellStyleMapping<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'CellStyleMappings';

  /**
   * Adds a new cell style mapping.
   *
   * @param sourceStyleName The name of the style in the source document.
   * @param destinationStyleName The name of the InDesign cell style to map to.
   * @param mappingRuleType The type of mapping rule to apply.
   * @param withProperties Initial values for properties of the new CellStyleMapping.
   */
  add(
    sourceStyleName: string,
    destinationStyleName: string,
    mappingRuleType: MapType,
    withProperties?: PropertiesSetter<CellStyleMapping>,
  ): CellStyleMapping;
}
