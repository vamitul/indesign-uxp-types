/**
 * MovieBehaviors.d.ts — indesign-uxp-types
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
import type { MovieBehavior } from './MovieBehavior';

/**
 * A collection of {@link MovieBehavior} objects. This behavior is applied
 * to interactive elements (like buttons) to control the playback, volume,
 * and visibility of a movie clip.
 *
 * @collection MovieBehavior
 */
export interface MovieBehaviors
  extends
    BaseCollection<MovieBehavior, MovieBehavior, MovieBehavior<'plural'>>,
    IdCollection<MovieBehavior>,
    NamedCollection<MovieBehavior> {
  /** The object's DOM class name. */
  readonly constructorName: 'MovieBehaviors';

  /**
   * Creates a new movie behavior.
   * @param withProperties Initial values for properties of the new {@link MovieBehavior}.
   */
  add(withProperties?: PropertiesSetter<MovieBehavior>): MovieBehavior;
}
