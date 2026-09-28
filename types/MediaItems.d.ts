/**
 * MediaItems.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { MediaItem } from './MediaItem';
import type { PageItemParent } from './_base/Parents';
import type { Movie } from './Movie';
import type { Sound } from './Sound';

/**
 * A collection of interactive {@link MediaItem} objects, including {@link Movie}
 * and {@link Sound} clips placed within the document layout.
 *
 * @collection MediaItem
 */
export interface MediaItems<TParent = PageItemParent>
  extends
    BaseCollection<MediaItem<TParent>, MediaItem, MediaItem<TParent, 'plural'>>,
    IdCollection<MediaItem<TParent>>,
    NamedCollection<MediaItem<TParent>> {
  /** The object's DOM class name. */
  readonly constructorName: 'MediaItems';
}
