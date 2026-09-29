/**
 * DataMergeTextPlaceholders.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { BaseCollection } from './_base/Collections';
import type { DataMergeTextPlaceholder } from './DataMergeTextPlaceholder';
import type { DataMergeField } from './DataMergeField';
import type { Story } from './Story';
import type { InsertionPoint } from './InsertionPoint';

/**
 * A collection of {@link DataMergeTextPlaceholder} objects. These placeholders
 * mark the locations within a story where text data from a source file will
 * be inserted during a data merge operation.
 *
 * @collection DataMergeTextPlaceholder
 */
export interface DataMergeTextPlaceholders extends BaseCollection<DataMergeTextPlaceholder, DataMergeTextPlaceholder, DataMergeTextPlaceholder<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'DataMergeTextPlaceholders';

  /**
   * Creates a new data merge text placeholder.
   *
   * @param parentStory The {@link Story} in which to insert the placeholder.
   * @param storyOffset The location within the story to insert the placeholder. Can be a specific {@link InsertionPoint} or a character index (offset number).
   * @param field The {@link DataMergeField} to associate with the placeholder.
   * @param withProperties Initial values for properties of the new DataMergeTextPlaceholder.
   */
  add(
    parentStory: Story,
    storyOffset: InsertionPoint | number,
    field: DataMergeField,
    withProperties?: PropertiesSetter<DataMergeTextPlaceholder>,
  ): DataMergeTextPlaceholder;
}
