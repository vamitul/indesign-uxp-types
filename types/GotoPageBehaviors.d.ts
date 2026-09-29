/**
 * GotoPageBehaviors.d.ts — indesign-uxp-types
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
import type { GotoPageBehavior } from './GotoPageBehavior';

/**
 * A collection of {@link GotoPageBehavior} objects. This behavior is applied
 * to interactive elements to trigger a navigation jump to a specific page
 * defined within the behavior settings.
 *
 * @collection GotoPageBehavior
 */
export interface GotoPageBehaviors
  extends
    BaseCollection<GotoPageBehavior, GotoPageBehavior, GotoPageBehavior<'plural'>>,
    IdCollection<GotoPageBehavior>,
    NamedCollection<GotoPageBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'GotoPageBehaviors';

  /**
   * Creates a new goto page behavior.
   * @param withProperties Initial values for properties of the new {@link GotoPageBehavior}.
   */
  add(withProperties?: PropertiesSetter<GotoPageBehavior>): GotoPageBehavior;
}
