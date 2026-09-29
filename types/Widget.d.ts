/**
 * Widget.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { WidgetParent } from './_base/Parents';
import type { Dropdown } from './Dropdown';

/**
 * The base of every dialog control: editboxes, comboboxes, dropdowns,
 * checkboxes, radio controls, static text, and the panel/grouping controls
 * (`EnablingGroup`, `BorderPanel`) that contain them.
 */
export interface Widget<M extends Mode = 'single'>
  extends EventTargetDOMObject<WidgetParent, M>,
    IndexedDOMObject<WidgetParent, M> {
  /** The object's DOM class name — reports the specific kind, such as `'Dropdown'` when the object is a {@link Dropdown}. */
  readonly constructorName: 'Widget' | 'AngleCombobox' | 'AngleEditbox' | 'BorderPanel' | 'CheckboxControl' | 'Dropdown' | 'EnablingGroup' | 'IntegerCombobox' | 'IntegerEditbox' | 'MeasurementCombobox' | 'MeasurementEditbox' | 'PercentCombobox' | 'PercentEditbox' | 'RadiobuttonControl' | 'RadiobuttonGroup' | 'RealCombobox' | 'RealEditbox' | 'StaticText' | 'TextEditbox';

  /** Resolves the proxy into the individual {@link Widget} objects it stands for. */
  getElements(): Widget<'single'>[];

  /** The unique ID of the Widget. */
  readonly id: Read<M, number>;

  /**
   * The width of the control. For an editbox or combobox, the minimum width
   * of the box.
   */
  get minWidth(): Read<M, number>;
  set minWidth(value: number);
}
