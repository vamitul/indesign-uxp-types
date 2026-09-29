/**
 * CharStyleMappings.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { MapType } from './Enums/MapType';
import type { BaseCollection } from './_base/Collections';
import type { CharStyleMapping } from './CharStyleMapping';

/**
 * A collection of {@link CharStyleMapping} objects. These mappings are used to
 * automatically translate source character styles (e.g., from an imported Word or RTF document)
 * into InDesign character styles.
 *
 * @collection CharStyleMapping
 */
export interface CharStyleMappings extends BaseCollection<CharStyleMapping, CharStyleMapping, CharStyleMapping<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'CharStyleMappings';

  /**
   * Adds a new character style mapping.
   *
   * @param sourceStyleName The name of the character style in the source document.
   * @param destinationStyleName The name of the InDesign character style to map to.
   * @param mappingRuleType The type of mapping rule to apply.
   * @param withProperties Initial values for properties of the new CharStyleMapping.
   */
  add(
    sourceStyleName: string,
    destinationStyleName: string,
    mappingRuleType: MapType,
    withProperties?: PropertiesSetter<CharStyleMapping>,
  ): CharStyleMapping;
}
