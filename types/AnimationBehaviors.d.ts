/**
 * AnimationBehaviors.d.ts — indesign-uxp-types
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
import type { AnimationBehavior } from './AnimationBehavior';

/**
 * A collection of {@link AnimationBehavior} objects. This behavior is applied
 * to interactive elements (like buttons) to trigger the playback of an
 * animation on a target page item.
 *
 * @collection AnimationBehavior
 */
export interface AnimationBehaviors
  extends
    BaseCollection<AnimationBehavior, AnimationBehavior, AnimationBehavior<'plural'>>,
    IdCollection<AnimationBehavior>,
    NamedCollection<AnimationBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'AnimationBehaviors';

  /**
   * Creates a new animation behavior.
   * @param withProperties Initial values for properties of the new {@link AnimationBehavior}.
   */
  add(withProperties?: PropertiesSetter<AnimationBehavior>): AnimationBehavior;
}
