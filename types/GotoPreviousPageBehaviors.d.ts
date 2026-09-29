/**
 * GotoPreviousPageBehaviors.d.ts — indesign-uxp-types
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
import type { GotoPreviousPageBehavior } from './GotoPreviousPageBehavior';

/**
 * A collection of {@link GotoPreviousPageBehavior} objects. This behavior is
 * applied to interactive elements to trigger a navigation jump to the previous
 * page in the document sequence.
 *
 * @collection GotoPreviousPageBehavior
 */
export interface GotoPreviousPageBehaviors
  extends
    BaseCollection<GotoPreviousPageBehavior, GotoPreviousPageBehavior, GotoPreviousPageBehavior<'plural'>>,
    IdCollection<GotoPreviousPageBehavior>,
    NamedCollection<GotoPreviousPageBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'GotoPreviousPageBehaviors';

  /**
   * Creates a new {@link GotoPreviousPageBehavior} from a properties bag alone.
   */
  add(withProperties: PropertiesSetter<GotoPreviousPageBehavior>): GotoPreviousPageBehavior;

  /**
   * Creates a new {@link GotoPreviousPageBehavior}.
   * @param withProperties Initial values for properties of the new {@link GotoPreviousPageBehavior}.
   */
  add(
    withProperties?: PropertiesSetter<GotoPreviousPageBehavior>,
  ): GotoPreviousPageBehavior;
}
