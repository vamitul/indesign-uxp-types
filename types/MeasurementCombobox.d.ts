/**
 * MeasurementCombobox.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Widget } from './Widget';
import type { NumericComboboxSurface } from './_base/WidgetMixins';
import type { MeasurementUnits } from './Enums/MeasurementUnits';

/**
 * An editable dropdown for measurement values, interpreted internally in
 * points and converted to {@link editUnits} for display when the dialog opens.
 */
export interface MeasurementCombobox<M extends Mode = 'single'> extends Widget<M>, NumericComboboxSurface<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'MeasurementCombobox';

  /** Resolves the proxy into the individual {@link MeasurementCombobox} objects it stands for. */
  getElements(): MeasurementCombobox<'single'>[];

  /** The {@link MeasurementUnits display unit} the control converts to when the dialog opens. */
  get editUnits(): Read<M, MeasurementUnits>;
  set editUnits(value: MeasurementUnits);
}
