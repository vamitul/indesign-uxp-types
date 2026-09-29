/**
 * GotoAnchorBehaviors.d.ts — indesign-uxp-types
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
import type { GotoAnchorBehavior } from './GotoAnchorBehavior';
import type { HyperlinkTextDestination } from './HyperlinkTextDestination';

/**
 * A collection of {@link GotoAnchorBehavior} objects. This behavior is applied
 * to interactive elements to trigger a navigation jump to a specific {@link HyperlinkTextDestination}.
 *
 * @collection GotoAnchorBehavior
 */
export interface GotoAnchorBehaviors
  extends
    BaseCollection<GotoAnchorBehavior, GotoAnchorBehavior, GotoAnchorBehavior<'plural'>>,
    IdCollection<GotoAnchorBehavior>,
    NamedCollection<GotoAnchorBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'GotoAnchorBehaviors';

  /**
   * Creates a new goto anchor behavior.
   * @param withProperties Initial values for properties of the new {@link GotoAnchorBehavior}.
   */
  add(withProperties?: PropertiesSetter<GotoAnchorBehavior>): GotoAnchorBehavior;
}
