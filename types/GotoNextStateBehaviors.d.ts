/**
 * GotoNextStateBehaviors.d.ts — indesign-uxp-types
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
import type { GotoNextStateBehavior } from './GotoNextStateBehavior';
import type { MultiStateObject } from './MultiStateObject';

/**
 * A collection of {@link GotoNextStateBehavior} objects. This behavior is
 * applied to interactive elements to trigger a transition to the next state
 * within a target {@link MultiStateObject}.
 *
 * @collection GotoNextStateBehavior
 */
export interface GotoNextStateBehaviors
  extends
    BaseCollection<GotoNextStateBehavior, GotoNextStateBehavior, GotoNextStateBehavior<'plural'>>,
    IdCollection<GotoNextStateBehavior>,
    NamedCollection<GotoNextStateBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'GotoNextStateBehaviors';

  /**
   * Creates a new {@link GotoNextStateBehavior} from a properties bag alone.
   */
  add(withProperties: PropertiesSetter<GotoNextStateBehavior>): GotoNextStateBehavior;

  /**
   * Creates a new {@link GotoNextStateBehavior}.
   * @param withProperties Initial values for properties of the new {@link GotoNextStateBehavior}.
   */
  add(
    withProperties?: PropertiesSetter<GotoNextStateBehavior>,
  ): GotoNextStateBehavior;
}
