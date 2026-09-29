/**
 * HiddenText.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type {
  LabelableEventDOMObject,
  IndexedDOMObject,
  NamableDOMObject,
} from './_base/DomObjects';
import type { HiddenTextParent } from './_base/Parents';
import type { InsertionPoint } from './InsertionPoint';
import type { Texts } from './Texts';
import type { Characters } from './Characters';
import type { Words } from './Words';
import type { Lines } from './Lines';
import type { TextColumns } from './TextColumns';
import type { Paragraphs } from './Paragraphs';
import type { InsertionPoints } from './InsertionPoints';
import type { TextStyleRanges } from './TextStyleRanges';

/**
 * A range of text hidden from its story flow (for example, by a conditional
 * text or a layout-adjustment operation) while remaining scriptable.
 */
export interface HiddenText<M extends Mode = 'single'>
  extends LabelableEventDOMObject<HiddenTextParent, M>,
    IndexedDOMObject<HiddenTextParent, M>,
    NamableDOMObject<HiddenTextParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'HiddenText';

  /** Resolves the proxy into the individual {@link HiddenText} objects it stands for. */
  getElements(): HiddenText<'single'>[];

  /** The unique ID of the HiddenText. */
  readonly id: Read<M, number>;

  /** The location of the first insertion point of the hidden range, relative to the beginning of the story. */
  readonly storyOffset: Read<M, InsertionPoint>;

  /** A collection of text objects within the hidden range. */
  readonly texts: Texts<HiddenText>;

  /** A collection of characters within the hidden range. */
  readonly characters: Characters<HiddenText>;

  /** A collection of words within the hidden range. */
  readonly words: Words<HiddenText>;

  /** A collection of lines within the hidden range. */
  readonly lines: Lines<HiddenText>;

  /** A collection of text columns within the hidden range. */
  readonly textColumns: TextColumns<HiddenText>;

  /** A collection of paragraphs within the hidden range. */
  readonly paragraphs: Paragraphs<HiddenText>;

  /** A collection of insertion points within the hidden range. */
  readonly insertionPoints: InsertionPoints<HiddenText>;

  /** A collection of text style ranges within the hidden range. */
  readonly textStyleRanges: TextStyleRanges<HiddenText>;
}
