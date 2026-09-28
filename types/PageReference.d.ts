/**
 * PageReference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Topic } from './Topic';
import type { Text } from './Text';
import type { ParagraphStyle } from './ParagraphStyle';
import type { CharacterStyle } from './CharacterStyle';
import type { PageReferenceType } from './Enums/PageReferenceType';
import type { Index } from './Index';

/**
 * The page reference for an {@link Index} topic — the location in the
 * document's text that the generated index entry points to.
 */
export interface PageReference<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Topic, M>,
    IndexedDOMObject<Topic, M>,
    NamableDOMObject<Topic, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'PageReference';

  /** Resolves the proxy into the individual {@link PageReference} objects it stands for. */
  getElements(): PageReference<'single'>[];

  /** The unique ID of the page reference. */
  readonly id: Read<M, number>;

  /** The hyperlinked text or insertion point the page reference is anchored to. */
  readonly sourceText: Read<M, Text>;

  /** How the page reference resolves to a page (or range of pages) in the index. */
  get pageReferenceType(): Read<M, PageReferenceType>;
  set pageReferenceType(value: PageReferenceType);

  /**
   * The paragraph style, or number of paragraphs or pages, that defines the
   * last page in a page range. Valid only when {@link pageReferenceType}
   * specifies the next use of a paragraph style, or a number of paragraphs
   * or pages.
   */
  get pageReferenceLimit(): Read<M, ParagraphStyle | number>;
  set pageReferenceLimit(value: ParagraphStyle | number);

  /** The character style applied to the page number in the generated index entry. */
  get pageNumberStyleOverride(): Read<M, CharacterStyle>;
  set pageNumberStyleOverride(value: CharacterStyle);

  /** Deletes the page reference. */
  remove(): Read<M, void>;
}
