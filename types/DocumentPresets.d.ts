/**
 * DocumentPresets.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { DocumentPreset } from './DocumentPreset';

/**
 * A collection of {@link DocumentPreset} objects. Document presets store predefined
 * settings—such as page size, margins, and columns—used to quickly initialize
 * new InDesign documents.
 *
 * @collection DocumentPreset
 */
export interface DocumentPresets
  extends
    BaseCollection<DocumentPreset, DocumentPreset, DocumentPreset<'plural'>>,
    IdCollection<DocumentPreset>,
    NamedCollection<DocumentPreset> {
  /** The object's DOM class name. */
  readonly constructorName: 'DocumentPresets';

  /**
   * Creates a new document preset.
   *
   * * **Duplicate Names:** If a preset with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   *
   * @param withProperties Initial values for properties of the new DocumentPreset.
   */
  add(withProperties?: PropertiesSetter<DocumentPreset>): DocumentPreset;
}
