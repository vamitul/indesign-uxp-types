/**
 * Behaviors.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Behavior } from './Behavior';
import type { AnyBehavior } from './_base/Unions';
import type { BehaviorEvents } from './Enums/BehaviorEvents';
import type { GotoURLBehavior } from './GotoURLBehavior';

/**
 * A collection of {@link Behavior} objects attached to interactive elements.
 * Behaviors define the specific actions (e.g., page navigation, media control)
 * that are triggered by user-driven events like clicks or rollovers.
 *
 * @collection Behavior
 */
export interface Behaviors
  extends
    BaseCollection<AnyBehavior, Behavior, BehaviorsPlural>,
    IdCollection<AnyBehavior>,
    NamedCollection<AnyBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'Behaviors';
}

/**
 * The plural proxy {@link Behaviors.everyItem} hands back.
 *
 * Reading or writing a property on the proxy applies it to every behavior at once, using only
 * the members every behavior has. `getElements()` resolves it into the individual behaviors,
 * each reported as its own specific kind.
 */
export interface BehaviorsPlural extends Behavior<'plural'> {
  /** Resolves the proxy into the individual behaviors, each at its concrete class. */
  getElements(): AnyBehavior[];
}

