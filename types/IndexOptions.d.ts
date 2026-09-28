/**
 * IndexOptions.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { CharacterStyle } from './CharacterStyle';
import type { ParagraphStyle } from './ParagraphStyle';
import type { IndexFormat } from './Enums/IndexFormat';

/**
 * How a generated index is laid out — its title and title style, the section headings,
 * the separators between entries and page numbers, and whether empty sections are kept.
 */
export interface IndexOptions<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'IndexOptions';

  /** Resolves the proxy into the individual {@link IndexOptions} objects it stands for. */
  getElements(): IndexOptions<'single'>[];

  /** The title of the generated index. */
  get title(): Read<M, string>;
  set title(value: string);

  /** The paragraph style applied to the title of the generated index. */
  get titleStyle(): Read<M, ParagraphStyle>;
  set titleStyle(value: ParagraphStyle | string);

  /** If true, replaces the content of the existing index. Note: Replaces only index content; does not update the index location or other index properties that may have been changed. */
  get replaceExistingIndex(): Read<M, boolean>;
  set replaceExistingIndex(value: boolean);

  /** If true, includes topics and page references from all the documents in a book. */
  get includeBookDocuments(): Read<M, boolean>;
  set includeBookDocuments(value: boolean);

  /** If true, includes topics and page references on hidden layers. */
  get includeHiddenEntries(): Read<M, boolean>;
  set includeHiddenEntries(value: boolean);

  /** The format for level 2 and lower index topics. */
  get indexFormat(): Read<M, IndexFormat>;
  set indexFormat(value: IndexFormat);

  /** If true, displays the letters of the alphabet as index section headings. */
  get includeSectionHeadings(): Read<M, boolean>;
  set includeSectionHeadings(value: boolean);

  /** If true, displays headings for sections with no index topics. Applies only when {@link includeSectionHeadings} is `true`. */
  get includeEmptyIndexSections(): Read<M, boolean>;
  set includeEmptyIndexSections(value: boolean);

  /** The paragraph style applied to level 1 index topics. */
  get level1Style(): Read<M, ParagraphStyle>;
  set level1Style(value: ParagraphStyle);

  /** The paragraph style applied to level 2 index topics. */
  get level2Style(): Read<M, ParagraphStyle>;
  set level2Style(value: ParagraphStyle);

  /** The paragraph style applied to level 3 index topics. */
  get level3Style(): Read<M, ParagraphStyle>;
  set level3Style(value: ParagraphStyle);

  /** The paragraph style applied to level 4 index topics. */
  get level4Style(): Read<M, ParagraphStyle>;
  set level4Style(value: ParagraphStyle);

  /** The paragraph style applied to index section headings. Applies only when {@link includeSectionHeadings} is `true`. */
  get sectionHeadingStyle(): Read<M, ParagraphStyle>;
  set sectionHeadingStyle(value: ParagraphStyle);

  /** The character style applied to page numbers in the index. */
  get pageNumberStyle(): Read<M, CharacterStyle>;
  set pageNumberStyle(value: CharacterStyle);

  /** The character style applied to cross references. */
  get crossReferenceStyle(): Read<M, CharacterStyle>;
  set crossReferenceStyle(value: CharacterStyle);

  /** The character style applied to cross reference topics. */
  get crossReferenceTopicStyle(): Read<M, CharacterStyle>;
  set crossReferenceTopicStyle(value: CharacterStyle);

  /** The character(s) inserted after each index topic. */
  get followingTopicSeparator(): Read<M, string>;
  set followingTopicSeparator(value: string);

  /** The character(s) inserted between index entries when runin-style index format is used for nested topics. */
  get betweenEntriesSeparator(): Read<M, string>;
  set betweenEntriesSeparator(value: string);

  /** The character(s) inserted between page numbers to indicate a page range. */
  get pageRangeSeparator(): Read<M, string>;
  set pageRangeSeparator(value: string);

  /** The character(s) inserted between separate page numbers, page numbers and page ranges, and series of page ranges. */
  get betweenPageNumbersSeparator(): Read<M, string>;
  set betweenPageNumbersSeparator(value: string);

  /** The character(s) inserted at the start of cross references. */
  get beforeCrossReferenceSeparator(): Read<M, string>;
  set beforeCrossReferenceSeparator(value: string);

  /** The character(s) inserted at the end of each index entry. */
  get entryEndSeparator(): Read<M, string>;
  set entryEndSeparator(value: string);
}
