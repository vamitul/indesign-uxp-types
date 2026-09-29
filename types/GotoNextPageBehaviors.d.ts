/**
 * GotoNextPageBehaviors.d.ts — indesign-uxp-types
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
import type { GotoNextPageBehavior } from './GotoNextPageBehavior';

/**
 * A collection of {@link GotoNextPageBehavior} objects. This behavior is
 * applied to interactive elements to trigger a navigation jump to the next
 * page in the document sequence.
 *
 * @collection GotoNextPageBehavior
 */
export interface GotoNextPageBehaviors
  extends
    BaseCollection<GotoNextPageBehavior, GotoNextPageBehavior, GotoNextPageBehavior<'plural'>>,
    IdCollection<GotoNextPageBehavior>,
    NamedCollection<GotoNextPageBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'GotoNextPageBehaviors';

  /**
   * Creates a new {@link GotoNextPageBehavior} from a properties bag alone.
   */
  add(withProperties: PropertiesSetter<GotoNextPageBehavior>): GotoNextPageBehavior;

  /**
   * Creates a new {@link GotoNextPageBehavior}.
   * @param withProperties Initial values for properties of the new {@link GotoNextPageBehavior}.
   */
  add(
    withProperties?: PropertiesSetter<GotoNextPageBehavior>,
  ): GotoNextPageBehavior;
}
