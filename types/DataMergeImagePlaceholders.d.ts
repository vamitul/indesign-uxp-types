/**
 * DataMergeImagePlaceholders.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { DataMergeField } from './DataMergeField';
import type { PageItem } from './PageItem';
import type { BaseCollection } from './_base/Collections';
import type { DataMergeImagePlaceholder } from './DataMergeImagePlaceholder';

/**
 * A collection of {@link DataMergeImagePlaceholder} objects. These placeholders
 * mark the locations on a page where image files referenced in a source file
 * will be placed during a data merge operation.
 *
 * @collection DataMergeImagePlaceholder
 */
export interface DataMergeImagePlaceholders extends BaseCollection<DataMergeImagePlaceholder, DataMergeImagePlaceholder, DataMergeImagePlaceholder<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'DataMergeImagePlaceholders';

  /**
   * Creates a new data merge image placeholder.
   *
   * @param placeholder The {@link PageItem} (typically a rectangle) to act as the container for the image.
   * @param field The {@link DataMergeField} to associate with the placeholder.
   * @param withProperties Initial values for properties of the new DataMergeImagePlaceholder.
   */
  add(
    placeholder: PageItem,
    field: DataMergeField,
    withProperties?: PropertiesSetter<DataMergeImagePlaceholder>,
  ): DataMergeImagePlaceholder;
}
