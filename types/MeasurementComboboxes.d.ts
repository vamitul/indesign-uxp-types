/**
 * MeasurementComboboxes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { MeasurementCombobox } from './MeasurementCombobox';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link MeasurementCombobox} objects within an InDesign {@link Dialog}.
 * These UI controls provide a list of preset dimensional values while also allowing
 * custom text entry with automatic unit conversion.
 *
 * @collection MeasurementCombobox
 */
export interface MeasurementComboboxes
  extends
    BaseCollection<MeasurementCombobox, MeasurementCombobox, MeasurementCombobox<'plural'>>,
    IdCollection<MeasurementCombobox> {
  /** The object's DOM class name. */
  readonly constructorName: 'MeasurementComboboxes';

  /**
   * Creates a new measurement combobox control from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link MeasurementCombobox}.
   */
  add(withProperties: PropertiesSetter<MeasurementCombobox>): MeasurementCombobox;

  /**
   * Creates a new measurement combobox control.
   * @param withProperties Initial values for properties of the new {@link MeasurementCombobox}.
   */
  add(
    withProperties?: PropertiesSetter<MeasurementCombobox>,
  ): MeasurementCombobox;
}
