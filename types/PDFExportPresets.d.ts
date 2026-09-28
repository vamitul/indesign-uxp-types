/**
 * PDFExportPresets.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { PDFExportPreset } from './PDFExportPreset';

/**
 * A collection of {@link PDFExportPreset} objects. These presets encapsulate
 * complex settings for output quality, compatibility, and compression used
 * when exporting documents to PDF.
 *
 * @collection PDFExportPreset
 */
export interface PDFExportPresets
  extends BaseCollection<PDFExportPreset, PDFExportPreset, PDFExportPreset<'plural'>>, NamedCollection<PDFExportPreset> {
  /** The object's DOM class name. */
  readonly constructorName: 'PDFExportPresets';

  /**
   * Creates a new PDF export preset.
   *
   * * **Duplicate Names:** If a preset with the specified name already exists, this method will throw an error. Check existence using `itemByName("Name").isValid` before adding.
   *
   * @param withProperties Initial values for properties of the new preset.
   */
  add(withProperties?: PropertiesSetter<PDFExportPreset>): PDFExportPreset;
}
