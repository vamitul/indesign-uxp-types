/**
 * EnablingGroups.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { IdCollection, BaseCollection } from './_base/Collections';
import type { EnablingGroup } from './EnablingGroup';
import type { Dialog } from './Dialog';

/**
 * A collection of {@link EnablingGroup} objects within an InDesign {@link Dialog}.
 * An enabling group is a container for UI controls that can be enabled or disabled
 * as a single unit, typically controlled by a checkbox or radio button.
 *
 * @collection EnablingGroup
 */
export interface EnablingGroups
  extends BaseCollection<EnablingGroup, EnablingGroup, EnablingGroup<'plural'>>, IdCollection<EnablingGroup> {
  /** The object's DOM class name. */
  readonly constructorName: 'EnablingGroups';

  /**
   * Creates and adds a new enabling group to the dialog.
   * @param withProperties Initial values for properties of the new group.
   */
  add(withProperties?: PropertiesSetter<EnablingGroup>): EnablingGroup;
}
