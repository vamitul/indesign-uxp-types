/**
 * Snippets.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { Snippet } from './Snippet';
import type { PlaceGun } from './PlaceGun';

/**
 * A collection of {@link Snippet} objects loaded in the {@link PlaceGun}.
 * Snippets are serialized InDesign objects stored in `.idms` files.
 * @collection Snippet
 */
export interface Snippets
  extends
    BaseCollection<Snippet, Snippet, Snippet<'plural'>>,
    IdCollection<Snippet>,
    NamedCollection<Snippet> {
  /** The object's DOM class name. */
  readonly constructorName: 'Snippets';
}
