/**
 * ObjectStyleExportTagMaps.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { ObjectStyleExportTagMap } from './ObjectStyleExportTagMap';

/**
 * A collection of {@link ObjectStyleExportTagMap} objects. These maps define the
 * relationship between object styles and specific HTML or EPUB tags, automating
 * the translation of styled containers during export.
 *
 * @collection ObjectStyleExportTagMap
 */
export interface ObjectStyleExportTagMaps extends BaseCollection<ObjectStyleExportTagMap, ObjectStyleExportTagMap, ObjectStyleExportTagMap<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'ObjectStyleExportTagMaps';

  /**
   * Creates a new object style export tag mapping.
   *
   * @param exportType The type of export to which this mapping applies (e.g., "HTML").
   * @param exportTag The specific tag to map to.
   * @param exportClass The class name to apply to the exported tag.
   * @param exportAttributes The attributes to include in the exported tag.
   * @param withProperties Initial values for properties of the new ObjectStyleExportTagMap.
   */
  add(
    exportType: string,
    exportTag: string,
    exportClass: string,
    exportAttributes: string,
    withProperties?: PropertiesSetter<ObjectStyleExportTagMap>,
  ): ObjectStyleExportTagMap;
}
