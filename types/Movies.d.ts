/**
 * Movies.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  AddablePageItemCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Movie } from './Movie';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of placed {@link Movie} page items. Movie items are interactive
 * elements that allow for the playback of video content in digital exports.
 *
 * @collection Movie
 */
export interface Movies<TParent = PageItemParent>
  extends
    BaseCollection<Movie<TParent>, Movie, Movie<TParent, 'plural'>>,
    IdCollection<Movie<TParent>>,
    NamedCollection<Movie<TParent>>,
    AddablePageItemCollection<Movie<TParent>, Movie> {
  /** The object's DOM class name. */
  readonly constructorName: 'Movies';
}
