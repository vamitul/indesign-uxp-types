/**
 * RadiobuttonGroups.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { RadiobuttonGroup } from './RadiobuttonGroup';
import type { RadiobuttonControl } from './RadiobuttonControl';

/**
 * A collection of {@link RadiobuttonGroup} containers within an InDesign dialog.
 *
 * Each group acts as a logical parent for a set of {@link RadiobuttonControl} objects,
 * enforcing mutual exclusivity: selecting one button automatically deselects all others
 * within the same group.
 * @collection RadiobuttonGroup
 */
export interface RadiobuttonGroups
  extends BaseCollection<RadiobuttonGroup, RadiobuttonGroup, RadiobuttonGroup<'plural'>>, IdCollection<RadiobuttonGroup> {
  /** The object's DOM class name. */
  readonly constructorName: 'RadiobuttonGroups';

  /**
   * Creates and adds a new radio button group container to the dialog.
   * @param withProperties Initial values for properties of the new group.
   */
  add(withProperties?: PropertiesSetter<RadiobuttonGroup>): RadiobuttonGroup;
}
