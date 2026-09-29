/**
 * MeasurementEditboxes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { MeasurementEditbox } from './MeasurementEditbox';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link MeasurementEditbox} objects within an InDesign {@link Dialog}.
 *
 * These UI controls allow users to input or edit dimensional values (e.g., points, mm) and
 * automatically handle unit conversion based on the application or document settings.
 * @collection MeasurementEditbox
 */
export interface MeasurementEditboxes
  extends BaseCollection<MeasurementEditbox, MeasurementEditbox, MeasurementEditbox<'plural'>>, IdCollection<MeasurementEditbox> {
  /** The object's DOM class name. */
  readonly constructorName: 'MeasurementEditboxes';

  /**
   * Creates and adds a new measurement editbox control to the dialog.
   * @param withProperties Initial values for properties of the new control.
   */
  add(withProperties?: PropertiesSetter<MeasurementEditbox>): MeasurementEditbox;
}
