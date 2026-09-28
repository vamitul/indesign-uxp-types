/**
 * TOCStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { TOCStyleEntries } from './TOCStyleEntries';
import type { ParagraphStyle } from './ParagraphStyle';
import type { HorizontalOrVertical } from './Enums/HorizontalOrVertical';
import type { NumberedParagraphsOptions } from './Enums/NumberedParagraphsOptions';
import type { TOCStyleEntry } from './TOCStyleEntry';

/**
 * A table-of-contents style definition, controlling which paragraph styles
 * are collected into a TOC and how the resulting {@link TOCStyleEntry}s are
 * formatted when the TOC is generated.
 */
export interface TOCStyle<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TOCStyle';

  /** Resolves the proxy into the individual {@link TOCStyle} objects it stands for. */
  getElements(): TOCStyle<'single'>[];

  /** The unique ID of the TOC style. */
  readonly id: Read<M, number>;

  /** The style's entry definitions, one per paragraph style included in the TOC. */
  readonly tocStyleEntries: TOCStyleEntries;

  /** The paragraph style applied to the TOC title. */
  get titleStyle(): Read<M, ParagraphStyle>;
  set titleStyle(value: ParagraphStyle);

  /** The TOC title text. */
  get title(): Read<M, string>;
  set title(value: string);

  /** If `true`, the lowest-level TOC entries run in on the same line as the previous entry. */
  get runIn(): Read<M, boolean>;
  set runIn(value: boolean);

  /** If `true`, the TOC includes entries from text on hidden layers. */
  get includeHidden(): Read<M, boolean>;
  set includeHidden(value: boolean);

  /**
   * If `true`, includes the entire book in the TOC; if `false`, includes
   * only the current document's entries. Valid only when the document is
   * part of a book.
   */
  get includeBookDocuments(): Read<M, boolean>;
  set includeBookDocuments(value: boolean);

  /** If `true`, creates PDF bookmarks for the TOC entries. */
  get createBookmarks(): Read<M, boolean>;
  set createBookmarks(value: boolean);

  /** The table-of-contents story's writing direction. */
  get setStoryDirection(): Read<M, HorizontalOrVertical>;
  set setStoryDirection(value: HorizontalOrVertical);

  /** The format used when importing numbered paragraphs into the TOC. */
  get numberedParagraphs(): Read<M, NumberedParagraphsOptions>;
  set numberedParagraphs(value: NumberedParagraphsOptions);

  /** If `true`, removes forced line breaks from TOC entry text. */
  get removeForcedLineBreak(): Read<M, boolean>;
  set removeForcedLineBreak(value: boolean);

  /** If `true`, creates a text anchor in the source paragraph for each entry. */
  get makeAnchor(): Read<M, boolean>;
  set makeAnchor(value: boolean);

  /** Duplicates the TOC style. */
  duplicate(): Read<M, TOCStyle>;

  /** Deletes the TOC style. */
  remove(): Read<M, void>;
}
