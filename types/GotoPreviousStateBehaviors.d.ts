/**
 * GotoPreviousStateBehaviors.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { GotoPreviousStateBehavior } from './GotoPreviousStateBehavior';
import type { MultiStateObject } from './MultiStateObject';

/**
 * A collection of {@link GotoPreviousStateBehavior} objects. This behavior is
 * applied to interactive elements to trigger a transition to the previous state
 * within a target {@link MultiStateObject}.
 *
 * @collection GotoPreviousStateBehavior
 */
export interface GotoPreviousStateBehaviors
  extends
    BaseCollection<GotoPreviousStateBehavior, GotoPreviousStateBehavior, GotoPreviousStateBehavior<'plural'>>,
    IdCollection<GotoPreviousStateBehavior>,
    NamedCollection<GotoPreviousStateBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'GotoPreviousStateBehaviors';

  /**
   * Creates a new {@link GotoPreviousStateBehavior} from a properties bag alone.
   */
  add(withProperties: PropertiesSetter<GotoPreviousStateBehavior>): GotoPreviousStateBehavior;

  /**
   * Creates a new {@link GotoPreviousStateBehavior}.
   * @param withProperties Initial values for properties of the new {@link GotoPreviousStateBehavior}.
   */
  add(
    withProperties?: PropertiesSetter<GotoPreviousStateBehavior>,
  ): GotoPreviousStateBehavior;
}
