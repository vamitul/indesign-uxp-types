/**
 * GotoPreviousViewBehaviors.d.ts — indesign-uxp-types
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
import type { GotoPreviousViewBehavior } from './GotoPreviousViewBehavior';

/**
 * A collection of {@link GotoPreviousViewBehavior} objects. This behavior is
 * applied to interactive elements to trigger a navigation return to the user's
 * previously active page or view.
 *
 * @collection GotoPreviousViewBehavior
 */
export interface GotoPreviousViewBehaviors
  extends
    BaseCollection<GotoPreviousViewBehavior, GotoPreviousViewBehavior, GotoPreviousViewBehavior<'plural'>>,
    IdCollection<GotoPreviousViewBehavior>,
    NamedCollection<GotoPreviousViewBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'GotoPreviousViewBehaviors';

  /**
   * Creates a new {@link GotoPreviousViewBehavior} from a properties bag alone.
   */
  add(withProperties: PropertiesSetter<GotoPreviousViewBehavior>): GotoPreviousViewBehavior;

  /**
   * Creates a new {@link GotoPreviousViewBehavior}.
   * @param withProperties Initial values for properties of the new {@link GotoPreviousViewBehavior}.
   */
  add(
    withProperties?: PropertiesSetter<GotoPreviousViewBehavior>,
  ): GotoPreviousViewBehavior;
}
