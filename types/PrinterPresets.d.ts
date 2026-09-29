/**
 * PrinterPresets.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { NamedCollection, BaseCollection } from './_base/Collections';
import type { PrinterPreset } from './PrinterPreset';

/**
 * A collection of {@link PrinterPreset} objects available to the application.
 *
 * Printer presets encapsulate complex print configurations—including paper handling,
 * printer marks, and color management—allowing for consistent and reusable output settings
 * across different documents and print sessions.
 * @collection PrinterPreset
 */
export interface PrinterPresets
  extends BaseCollection<PrinterPreset, PrinterPreset, PrinterPreset<'plural'>>, NamedCollection<PrinterPreset> {
  /** The object's DOM class name. */
  readonly constructorName: 'PrinterPresets';

  /**
   * Creates a new {@link PrinterPreset} with default printing values.
   * @param withProperties Initial values for properties of the new preset, such as its `name`.
   */
  add(withProperties?: PropertiesSetter<PrinterPreset>): PrinterPreset;
}
