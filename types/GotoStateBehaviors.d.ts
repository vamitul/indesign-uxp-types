/**
 * GotoStateBehaviors.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { GotoStateBehavior } from './GotoStateBehavior';
import type { MultiStateObject } from './MultiStateObject';

/**
 * A collection of {@link GotoStateBehavior} objects. This behavior is applied
 * to interactive elements to trigger a state change in a target {@link MultiStateObject}.
 *
 * @collection GotoStateBehavior
 */
export interface GotoStateBehaviors
  extends
    BaseCollection<GotoStateBehavior, GotoStateBehavior, GotoStateBehavior<'plural'>>,
    IdCollection<GotoStateBehavior>,
    NamedCollection<GotoStateBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'GotoStateBehaviors';

  /**
   * Creates a new goto state behavior.
   * @param withProperties Initial values for properties of the new {@link GotoStateBehavior}.
   */
  add(withProperties?: PropertiesSetter<GotoStateBehavior>): GotoStateBehavior;
}
