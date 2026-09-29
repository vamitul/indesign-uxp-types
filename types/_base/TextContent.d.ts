/**
 * TextContent.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './Types';
import type { Characters } from '../Characters';
import type { CharacterStyle } from '../CharacterStyle';
import type { ChangecaseMode } from '../Enums/ChangecaseMode';
import type { EndnoteRanges } from '../EndnoteRanges';
import type { Footnotes } from '../Footnotes';
import type { HiddenTexts } from '../HiddenTexts';
import type { Notes } from '../Notes';
import type { OverrideType } from '../Enums/OverrideType';
import type { ParagraphStyle } from '../ParagraphStyle';
import type { Tables } from '../Tables';
import type { TextVariableInstances } from '../TextVariableInstances';
import type { InsertionPoints } from '../InsertionPoints';
import type { Lines } from '../Lines';
import type { PageItem } from '../PageItem';
import type { Paragraphs } from '../Paragraphs';
import type { Text } from '../Text';
import type { TextColumns } from '../TextColumns';
import type { TextStyleRanges } from '../TextStyleRanges';
import type { Texts } from '../Texts';
import type { Words } from '../Words';
import type { TextParent } from './Parents';
import type { Column } from '../Column';
import type { Paragraph } from '../Paragraph';
import type { Row } from '../Row';
import type { TextFrame } from '../TextFrame';

/**
 * The text-content surface shared by every object that exposes a text flow: the
 * per-granularity range collections and the find/change + recompose + outline
 * editing methods.
 *
 * The find/change methods (`findText`, `changeText`, `findGrep`, `changeGrep`,
 * `findGlyph`, `changeGlyph`, `findTransliterate`, `changeTransliterate`) act
 * on the application-level `findTextPreferences` / `changeTextPreferences`
 * (and their GREP, glyph, and transliterate equivalents) — set those first to
 * define what is matched.
 */
export interface TextContainerContent<TChildParent = TextParent, M extends Mode = 'single'> {
  /** A collection of text objects. */
  readonly texts: Texts<TChildParent>;

  /** A collection of characters. */
  readonly characters: Characters<TChildParent>;

  /** A collection of words. */
  readonly words: Words<TChildParent>;

  /** A collection of lines. */
  readonly lines: Lines<TChildParent>;

  /** A collection of text columns. */
  readonly textColumns: TextColumns<TChildParent>;

  /** A collection of paragraphs. */
  readonly paragraphs: Paragraphs<TChildParent>;

  /** A collection of insertion points. */
  readonly insertionPoints: InsertionPoints<TChildParent>;

  /** A collection of text style ranges. */
  readonly textStyleRanges: TextStyleRanges<TChildParent>;

  /**
   * Converts text to outlines — one polygon per line of text. A single letter
   * with no internal spaces or detached parts becomes a single-path polygon.
   * Some fonts block outline creation; check `allowOutlines` first.
   * @param deleteOriginal If `true`, deletes the original text. If `false`, adds the outlines as new objects on top of it.
   */
  createOutlines(deleteOriginal?: boolean): Read<M, PageItem[]>;

  /**
   * Finds text that matches the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findText(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text that matches the find what value and replaces the text with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeText(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text that matches the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text that matches the find what value and replaces the text with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds glyphs that match the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findGlyph(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds glyphs that match the find what value and replaces the glyphs with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeGlyph(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text that matches the transliterate find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): Read<M, Text[]>;

  /**
   * Finds text matching the transliterate find what value and replaces it with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): Read<M, Text[]>;
}

/**
 * The child objects embedded in a text flow — anything anchored into the stream
 * rather than being a range of it.
 *
 * A {@link Column} or {@link Row} is searchable like any other text, but the footnotes and
 * anchored objects belong to the story running through it rather than to the column itself.
 */
export interface TextEmbeddedContent<M extends Mode = 'single'> {
  /** {@link Footnotes} anchored in this text. */
  readonly footnotes: Footnotes;

  /** {@link Notes} anchored in this text. */
  readonly notes: Notes;

  /** {@link HiddenTexts} (conditional text currently hidden) in this text. */
  readonly hiddenTexts: HiddenTexts;

  /** {@link TextVariableInstances} placed in this text. */
  readonly textVariableInstances: TextVariableInstances;

  /** {@link Tables} anchored in this text. */
  readonly tables: Tables;
}

/**
 * The surface of a text *range* — a run of the flow rather than the thing that
 * holds it.
 *
 * Applying a style, changing case, or clearing overrides addresses a span of
 * characters, which is why a {@link TextFrame} (a container) does not have
 * these members while a {@link Paragraph} (a range) does.
 */
export interface TextRangeContent<TChildParent = TextParent, M extends Mode = 'single'>
  extends TextContainerContent<TChildParent, M>,
    TextEmbeddedContent<M>{
  /** {@link EndnoteRanges} covered by this range. */
  readonly endnoteRanges: EndnoteRanges;

  /** The {@link ParagraphStyle} applied to the range. Setting it does not clear existing local overrides — use {@link clearOverrides} for that. */
  get appliedParagraphStyle(): Read<M, ParagraphStyle>;
  set appliedParagraphStyle(value: ParagraphStyle | string);

  /** The {@link CharacterStyle} applied to the range. */
  get appliedCharacterStyle(): Read<M, CharacterStyle>;
  set appliedCharacterStyle(value: CharacterStyle | string);

  /** The OpenType features in effect, as `[featureTag, value]` pairs. Assigning replaces the whole list. */
  get opentypeFeatures(): Read<M, unknown[][]>;
  set opentypeFeatures(value: unknown[][]);

  /** Whether ruby (phonetic annotation) is switched on for the range. */
  get rubyFlag(): Read<M, boolean>;
  set rubyFlag(value: boolean);

  /** The ruby annotation text attached to the range. */
  get rubyString(): Read<M, string>;
  set rubyString(value: string);

  /**
   * Changes the case of the text.
   * @param using Uppercase, lowercase, title case, or sentence case — see {@link ChangecaseMode}.
   */
  changecase(using: ChangecaseMode): Read<M, void>;

  /**
   * Clears the specified types of override.
   * @param overridesToClear The types of override to clear.
   */
  clearOverrides(overridesToClear?: OverrideType): Read<M, void>;

  /** Converts bullets and numbering in the range to literal text. */
  convertBulletsAndNumberingToText(): Read<M, void>;
}
