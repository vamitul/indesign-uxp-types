/**
 * GotoNextViewBehaviors.d.ts — indesign-uxp-types
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
import type { GotoNextViewBehavior } from './GotoNextViewBehavior';

/**
 * A collection of {@link GotoNextViewBehavior} objects. This behavior is
 * applied to interactive elements to trigger a navigation jump to the next
 * view in the user's history (similar to a browser's "Forward" button).
 *
 * @collection GotoNextViewBehavior
 */
export interface GotoNextViewBehaviors
  extends
    BaseCollection<GotoNextViewBehavior, GotoNextViewBehavior, GotoNextViewBehavior<'plural'>>,
    IdCollection<GotoNextViewBehavior>,
    NamedCollection<GotoNextViewBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'GotoNextViewBehaviors';

  /**
   * Creates a new {@link GotoNextViewBehavior} from a properties bag alone.
   */
  add(withProperties: PropertiesSetter<GotoNextViewBehavior>): GotoNextViewBehavior;

  /**
   * Creates a new {@link GotoNextViewBehavior}.
   * @param withProperties Initial values for properties of the new {@link GotoNextViewBehavior}.
   */
  add(
    withProperties?: PropertiesSetter<GotoNextViewBehavior>,
  ): GotoNextViewBehavior;
}
