/**
 * RadiobuttonControls.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { RadiobuttonControl } from './RadiobuttonControl';
import type { RadiobuttonGroup } from './RadiobuttonGroup';

/**
 * A collection of {@link RadiobuttonControl} objects within a {@link RadiobuttonGroup}.
 *
 * These controls represent individual, mutually exclusive options in an InDesign dialog
 * box. Selecting one radio button in the group automatically deselects all others in the
 * same collection.
 * @collection RadiobuttonControl
 */
export interface RadiobuttonControls
  extends BaseCollection<RadiobuttonControl, RadiobuttonControl, RadiobuttonControl<'plural'>>, IdCollection<RadiobuttonControl> {
  /** The object's DOM class name. */
  readonly constructorName: 'RadiobuttonControls';

  /**
   * Creates and adds a new radio button control to the parent radio button group.
   * @param withProperties Initial values for properties of the new control, such as its label or initial checked state.
   */
  add(withProperties?: PropertiesSetter<RadiobuttonControl>): RadiobuttonControl;
}
