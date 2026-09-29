/**
 * InsertionPoint.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { KerningMethodName, KerningMethodValue, Mode, Read } from './_base/Types';
import type { Text } from './Text';
import type { Endnote } from './Endnote';
import type { Endnotes } from './Endnotes';
import type { Link } from './Link';
import type { TextParent } from './_base/Parents';
import type { BackgroundTask } from './BackgroundTask';
import type { Bullet } from './Bullet';
import type { Buttons } from './Buttons';
import type { CharacterStyle } from './CharacterStyle';
import type { CheckBoxes } from './CheckBoxes';
import type { Color } from './Color';
import type { ComboBoxes } from './ComboBoxes';
import type { Condition } from './Condition';
import type { EPSTexts } from './EPSTexts';
import type { EndnoteRanges } from './EndnoteRanges';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { BalanceLinesStyle } from './Enums/BalanceLinesStyle';
import type { Capitalization } from './Enums/Capitalization';
import type { CornerOptions } from './Enums/CornerOptions';
import type { DigitsTypeOptions } from './Enums/DigitsTypeOptions';
import type { Leading } from './Enums/Leading';
import type { NumberingStyle } from './Enums/NumberingStyle';
import type { ParagraphJustificationOptions } from './Enums/ParagraphJustificationOptions';
import type { PositionalForms } from './Enums/PositionalForms';
import type { RubyAlignments } from './Enums/RubyAlignments';
import type { RubyTypes } from './Enums/RubyTypes';
import type { SpecialCharacters } from './Enums/SpecialCharacters';
import type { WarichuAlignment } from './Enums/WarichuAlignment';
import type { Font } from './Font';
import type { Footnotes } from './Footnotes';
import type { FormFields } from './FormFields';
import type { Gradient } from './Gradient';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { Groups } from './Groups';
import type { HiddenTexts } from './HiddenTexts';
import type { Language } from './Language';
import type { LanguageWithVendors } from './LanguageWithVendors';
import type { ListBoxes } from './ListBoxes';
import type { MixedInk } from './MixedInk';
import type { MultiStateObjects } from './MultiStateObjects';
import type { Note } from './Note';
import type { Notes } from './Notes';
import type { NumberingRestartPolicy } from './NumberingRestartPolicy';
import type { Ovals } from './Ovals';
import type { PageItem } from './PageItem';
import type { ParagraphStyle } from './ParagraphStyle';
import type { Polygons } from './Polygons';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { SignatureFields } from './SignatureFields';
import type { SplineItems } from './SplineItems';
import type { Story } from './Story';
import type { Swatch } from './Swatch';
import type { TabStop } from './TabStop';
import type { Table } from './Table';
import type { Tables } from './Tables';
import type { TextBoxes } from './TextBoxes';
import type { TextFrame } from './TextFrame';
import type { TextFrames } from './TextFrames';
import type { TextPath } from './TextPath';
import type { TextVariableInstances } from './TextVariableInstances';
import type { Tint } from './Tint';
import type { XMLItem } from './XMLItem';

/**
 * A zero-width position between two characters — the target of text-insertion
 * operations and the point where new content is typed or placed.
 *
 * It is where an endnote reference is anchored, so it alone exposes the
 * {@link endnotes} collection and the endnote/text-fragment creation methods
 * below.
 */
export interface InsertionPoint<TParent = TextParent, M extends Mode = 'single'> extends Text<TParent, M> {
  /**
   * The type of pair kerning. Unlike every other text object, an insertion point also reports
   * `'Manual'` — the state it enters when {@link kerningValue} is set by hand.
   *
   * Reported only. Assigning `'Manual'` throws at runtime; set {@link kerningValue} instead.
   */
  get kerningMethod(): Read<M, KerningMethodValue>;
  set kerningMethod(value: KerningMethodName);

  /** The object's DOM class name. */
  readonly constructorName: 'InsertionPoint';

  /** Resolves the proxy into the individual {@link InsertionPoint} objects it stands for. */
  getElements(): InsertionPoint<TParent, 'single'>[];

  /** {@link Endnotes} anchored at this insertion point. */
  readonly endnotes: Endnotes;

  /** Creates a new {@link Endnote}, inserting its reference here and creating its endnote text range. */
  createEndnote(): Read<M, Endnote>;

  /**
   * Experimental: fetches a text fragment from a URL and places it at this
   * insertion point, creating a {@link Link} that tracks the source.
   * @param linkResourceURI URI of the text fragment to fetch and place.
   * @param name Tag name used as the link's key.
   */
  createTextFragmentLink(linkResourceURI: string, name?: string): Read<M, Link>;
}
