/**
 * CrossReferenceFormats.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { CrossReferenceFormat } from './CrossReferenceFormat';

/**
 * A collection of {@link CrossReferenceFormat} objects in an InDesign document.
 * These formats define the appearance and structural content (e.g., "See page 12")
 * of cross-references.
 *
 * @collection CrossReferenceFormat
 */
export interface CrossReferenceFormats
  extends
    BaseCollection<CrossReferenceFormat, CrossReferenceFormat, CrossReferenceFormat<'plural'>>,
    IdCollection<CrossReferenceFormat>,
    NamedCollection<CrossReferenceFormat> {
  /** The object's DOM class name. */
  readonly constructorName: 'CrossReferenceFormats';

  /**
   * Creates a new cross-reference format from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link CrossReferenceFormat}.
   */
  add(withProperties: PropertiesSetter<CrossReferenceFormat>): CrossReferenceFormat;

  /**
   * Creates a new cross-reference format.
   *
   * * **Duplicate Names:** If a format with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   *
   * @param name The display name for the new format.
   * @param withProperties Initial values for properties of the new CrossReferenceFormat.
   */
  add(
    name?: string,
    withProperties?: PropertiesSetter<CrossReferenceFormat>,
  ): CrossReferenceFormat;
}
