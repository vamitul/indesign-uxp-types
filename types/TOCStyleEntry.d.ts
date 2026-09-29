/**
 * TOCStyleEntry.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { TOCStyle } from './TOCStyle';
import type { ParagraphStyle } from './ParagraphStyle';
import type { CharacterStyle } from './CharacterStyle';
import type { PageNumberPosition } from './Enums/PageNumberPosition';

/**
 * A single entry definition within a {@link TOCStyle}, mapping one source
 * paragraph style to its formatting, indent level, and page-number display
 * in the generated table of contents.
 */
export interface TOCStyleEntry<M extends Mode = 'single'>
  extends EventTargetDOMObject<TOCStyle, M>,
    IndexedDOMObject<TOCStyle, M>,
    NamableDOMObject<TOCStyle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TOCStyleEntry';

  /** Resolves the proxy into the individual {@link TOCStyleEntry} objects it stands for. */
  getElements(): TOCStyleEntry<'single'>[];

  /** The paragraph style applied to the TOC entry. */
  get formatStyle(): Read<M, ParagraphStyle | string>;
  set formatStyle(value: ParagraphStyle | string);

  /** The indent level of the entry in the TOC. */
  get level(): Read<M, number>;
  set level(value: number);

  /** The character style applied to the entry's page number. */
  get pageNumberStyle(): Read<M, CharacterStyle | string>;
  set pageNumberStyle(value: CharacterStyle | string);

  /** Where the page number is placed relative to the entry text. */
  get pageNumberPosition(): Read<M, PageNumberPosition>;
  set pageNumberPosition(value: PageNumberPosition);

  /** The string inserted between the entry text and its page number. */
  get separator(): Read<M, string>;
  set separator(value: string);

  /** The character style applied to {@link separator}. */
  get separatorStyle(): Read<M, CharacterStyle | string>;
  set separatorStyle(value: CharacterStyle | string);

  /** If `true`, sorts the entries alphabetically. */
  get sortAlphabet(): Read<M, boolean>;
  set sortAlphabet(value: boolean);

  /** Deletes the TOC style entry. */
  remove(): Read<M, void>;
}
