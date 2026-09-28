/**
 * Section.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Page } from './Page';
import type { NumberingStyle } from './Enums/NumberingStyle';

/**
 * A page-numbering section of the document, controlling page numbering
 * style, restart behavior, and an optional section marker/prefix for the
 * pages it spans.
 */
export interface Section<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Section';

  /** Resolves the proxy into the individual {@link Section} objects it stands for. */
  getElements(): Section<'single'>[];

  /** The unique ID of the section. */
  readonly id: Read<M, number>;

  /** The number of pages in the section. */
  readonly length: Read<M, number>;

  /** The number of pages in the alternate layout section. */
  readonly alternateLayoutLength: Read<M, number>;

  /** The alternate layout name for the set of pages this section spans. */
  get alternateLayout(): Read<M, string>;
  set alternateLayout(value: string);

  /** The page number style used within the section. */
  get pageNumberStyle(): Read<M, NumberingStyle | string>;
  set pageNumberStyle(value: NumberingStyle | string);

  /** If `true`, continues page numbers sequentially from the previous section. */
  get continueNumbering(): Read<M, boolean>;
  set continueNumbering(value: boolean);

  /** If `true`, places {@link sectionPrefix} before page numbers on every page in the section. */
  get includeSectionPrefix(): Read<M, boolean>;
  set includeSectionPrefix(value: boolean);

  /**
   * The page number assigned to the first page in the section. Valid only
   * when {@link continueNumbering} is `false`.
   * @default 1
   */
  get pageNumberStart(): Read<M, number>;
  set pageNumberStart(value: number);

  /** The section marker, shown in the InDesign UI's page indicator. */
  get marker(): Read<M, string>;
  set marker(value: string);

  /** The first page of the section. */
  get pageStart(): Read<M, Page>;
  set pageStart(value: Page);

  /**
   * The prefix placed before page numbers on pages in the section. May
   * include up to 8 characters. Valid only when {@link includeSectionPrefix}
   * is `true`.
   */
  get sectionPrefix(): Read<M, string>;
  set sectionPrefix(value: string);

  /** Deletes the section. */
  remove(): Read<M, void>;
}
