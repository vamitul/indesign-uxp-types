/**
 * NavigationPoint.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Movie } from './Movie';

/**
 * A single named cue point on a {@link Movie}'s timeline, used to seek or
 * trigger behaviors at a specific playback time.
 */
export interface NavigationPoint<M extends Mode = 'single'>
  extends EventTargetDOMObject<Movie, M>,
    IndexedDOMObject<Movie, M>,
    NamableDOMObject<Movie, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'NavigationPoint';

  /** Resolves the proxy into the individual {@link NavigationPoint} objects it stands for. */
  getElements(): NavigationPoint<'single'>[];


  /** The unique numeric ID of the navigation point within its movie. */
  readonly id: Read<M, number>;
  /** The cue point's time within the movie, in seconds, rounded to two decimal places. */
  get time(): Read<M, number>;
  set time(value: number);

  /** Deletes the navigation point. */
  remove(): Read<M, void>;
}
