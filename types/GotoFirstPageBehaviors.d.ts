/**
 * GotoFirstPageBehaviors.d.ts — indesign-uxp-types
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
import type { GotoFirstPageBehavior } from './GotoFirstPageBehavior';

/**
 * A collection of {@link GotoFirstPageBehavior} objects. This behavior is
 * applied to interactive elements to trigger a navigation jump to the first
 * page of the document.
 *
 * @collection GotoFirstPageBehavior
 */
export interface GotoFirstPageBehaviors
  extends
    BaseCollection<GotoFirstPageBehavior, GotoFirstPageBehavior, GotoFirstPageBehavior<'plural'>>,
    IdCollection<GotoFirstPageBehavior>,
    NamedCollection<GotoFirstPageBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'GotoFirstPageBehaviors';

  /**
   * Creates a new {@link GotoFirstPageBehavior} from a properties bag alone.
   */
  add(withProperties: PropertiesSetter<GotoFirstPageBehavior>): GotoFirstPageBehavior;

  /**
   * Creates a new {@link GotoFirstPageBehavior}.
   * @param withProperties Initial values for properties of the new {@link GotoFirstPageBehavior}.
   */
  add(
    withProperties?: PropertiesSetter<GotoFirstPageBehavior>,
  ): GotoFirstPageBehavior;
}
