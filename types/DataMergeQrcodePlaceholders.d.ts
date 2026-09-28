/**
 * DataMergeQrcodePlaceholders.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { DataMergeField } from './DataMergeField';
import type { PageItem } from './PageItem';
import type { BaseCollection } from './_base/Collections';
import type { DataMergeQrcodePlaceholder } from './DataMergeQrcodePlaceholder';

/**
 * A collection of {@link DataMergeQrcodePlaceholder} objects. These placeholders
 * mark the locations on a page where QR code data from a source file will
 * be generated during a data merge operation.
 *
 * @collection DataMergeQrcodePlaceholder
 */
export interface DataMergeQrcodePlaceholders extends BaseCollection<DataMergeQrcodePlaceholder, DataMergeQrcodePlaceholder, DataMergeQrcodePlaceholder<'plural'>> {
  /** The object's DOM class name. */
  readonly constructorName: 'DataMergeQrcodePlaceholders';

  /**
   * Creates a new data merge QR code placeholder.
   *
   * @param placeholder The {@link PageItem} (typically a rectangle) to act as the container for the QR code.
   * @param field The {@link DataMergeField} to associate with the placeholder.
   * @param withProperties Initial values for properties of the new DataMergeQrcodePlaceholder.
   */
  add(
    placeholder: PageItem,
    field: DataMergeField,
    withProperties?: PropertiesSetter<DataMergeQrcodePlaceholder>,
  ): DataMergeQrcodePlaceholder;
}
