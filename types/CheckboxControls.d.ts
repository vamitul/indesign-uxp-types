/**
 * CheckboxControls.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { CheckboxControl } from './CheckboxControl';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link CheckboxControl} objects within an InDesign {@link Dialog}.
 * These UI controls allow users to toggle a binary setting (True/False).
 *
 * @collection CheckboxControl
 */
export interface CheckboxControls
  extends BaseCollection<CheckboxControl, CheckboxControl, CheckboxControl<'plural'>>, IdCollection<CheckboxControl> {
  /** The object's DOM class name. */
  readonly constructorName: 'CheckboxControls';

  /**
   * Creates and adds a new checkbox control to the dialog.
   * @param withProperties Initial values for properties of the new control.
   */
  add(withProperties?: PropertiesSetter<CheckboxControl>): CheckboxControl;
}
