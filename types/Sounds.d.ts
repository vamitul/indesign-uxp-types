/**
 * Sounds.d.ts — indesign-uxp-types
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
import type { Sound } from './Sound';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link Sound} page items. Sound items are interactive elements
 * that allow the embedding and playback of audio content within digital exports
 * such as EPUB or HTML.
 *
 * @collection Sound
 */
export interface Sounds<TParent = PageItemParent>
  extends
    BaseCollection<Sound<TParent>, Sound, Sound<TParent, 'plural'>>,
    IdCollection<Sound<TParent>>,
    NamedCollection<Sound<TParent>>,
    AddablePageItemCollection<Sound<TParent>, Sound> {
  /** The object's DOM class name. */
  readonly constructorName: 'Sounds';
}
