/**
 * EndnoteOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { CharacterStyle } from './CharacterStyle';
import type { ParagraphStyle } from './ParagraphStyle';
import type { EndnoteFrameCreate } from './Enums/EndnoteFrameCreate';
import type { EndnoteRestarting } from './Enums/EndnoteRestarting';
import type { EndnoteScope } from './Enums/EndnoteScope';
import type { FootnoteMarkerPositioning } from './Enums/FootnoteMarkerPositioning';
import type { FootnoteNumberingStyle } from './Enums/FootnoteNumberingStyle';
import type { FootnotePrefixSuffix } from './Enums/FootnotePrefixSuffix';

/**
 * Options for specifying default endnote formatting.
 */
export interface EndnoteOption<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'EndnoteOption';

  /** Resolves the proxy into the individual {@link EndnoteOption} objects it stands for. */
  getElements(): EndnoteOption<'single'>[];

  /** Title of the endnotes. (Limit: 0 to 100 characters). */
  get endnoteTitle(): Read<M, string>;
  set endnoteTitle(value: string);

  /** The paragraph style to apply to endnote title. */
  get endnoteTitleStyle(): Read<M, ParagraphStyle>;
  set endnoteTitleStyle(value: ParagraphStyle);

  /** The numbering system endnote markers are drawn in — see {@link FootnoteNumberingStyle}. */
  get endnoteNumberingStyle(): Read<M, FootnoteNumberingStyle | string>;
  set endnoteNumberingStyle(value: FootnoteNumberingStyle | string);

  /** The number at which to start endnote numbering. */
  get startEndnoteNumberAt(): Read<M, number>;
  set startEndnoteNumberAt(value: number);

  /** The point at which to restart endnote numbering. */
  get restartEndnoteNumbering(): Read<M, EndnoteRestarting | string>;
  set restartEndnoteNumbering(value: EndnoteRestarting | string);

  /** The position of endnote reference numbers in the main text. */
  get endnoteMarkerPositioning(): Read<M, FootnoteMarkerPositioning | string>;
  set endnoteMarkerPositioning(value: FootnoteMarkerPositioning | string);

  /** The character style to apply to endnote reference numbers in the main text. */
  get endnoteMarkerStyle(): Read<M, CharacterStyle>;
  set endnoteMarkerStyle(value: CharacterStyle);

  /** The paragraph style to apply to endnote text. */
  get endnoteTextStyle(): Read<M, ParagraphStyle>;
  set endnoteTextStyle(value: ParagraphStyle);

  /** The text to insert between the endnote marker number and the endnote text. (Range: 0 to 100 characters). */
  get endnoteSeparatorText(): Read<M, string>;
  set endnoteSeparatorText(value: string);

  /** Whether endnotes are numbered per story or per document — see {@link EndnoteScope}. */
  get scopeValue(): Read<M, EndnoteScope | string>;
  set scopeValue(value: EndnoteScope | string);

  /** How the frame holding placed endnotes is created — see {@link EndnoteFrameCreate}. */
  get frameCreateOption(): Read<M, EndnoteFrameCreate | string>;
  set frameCreateOption(value: EndnoteFrameCreate | string);

  /** The position of the endnote prefix and/or suffix. */
  get showEndnotePrefixSuffix(): Read<M, FootnotePrefixSuffix | string>;
  set showEndnotePrefixSuffix(value: FootnotePrefixSuffix | string);

  /** The prefix text of the endnote. (Limit: 0 to 100 characters). */
  get endnotePrefix(): Read<M, string>;
  set endnotePrefix(value: string);

  /** The suffix text of the endnote. (Limit: 0 to 100 characters). */
  get endnoteSuffix(): Read<M, string>;
  set endnoteSuffix(value: string);
}
