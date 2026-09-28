/**
 * GotoLastPageBehaviors.d.ts — indesign-uxp-types
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
import type { GotoLastPageBehavior } from './GotoLastPageBehavior';

/**
 * A collection of {@link GotoLastPageBehavior} objects. This behavior is
 * applied to interactive elements to trigger a navigation jump to the last
 * page of the document.
 *
 * @collection GotoLastPageBehavior
 */
export interface GotoLastPageBehaviors
  extends
    BaseCollection<GotoLastPageBehavior, GotoLastPageBehavior, GotoLastPageBehavior<'plural'>>,
    IdCollection<GotoLastPageBehavior>,
    NamedCollection<GotoLastPageBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'GotoLastPageBehaviors';

  /**
   * Creates a new {@link GotoLastPageBehavior} from a properties bag alone.
   */
  add(withProperties: PropertiesSetter<GotoLastPageBehavior>): GotoLastPageBehavior;

  /**
   * Creates a new {@link GotoLastPageBehavior}.
   * @param withProperties Initial values for properties of the new {@link GotoLastPageBehavior}.
   */
  add(
    withProperties?: PropertiesSetter<GotoLastPageBehavior>,
  ): GotoLastPageBehavior;
}
