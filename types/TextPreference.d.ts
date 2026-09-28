/**
 * TextPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { AddPageOptions } from './Enums/AddPageOptions';

/**
 * Application- or document-wide text composition and editing defaults (smart text reflow, highlighting, key increments).
 */
export interface TextPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextPreference';

  /** Resolves the proxy into the individual {@link TextPreference} objects it stands for. */
  getElements(): TextPreference<'single'>[];

  /** If true, converts straight quotes to typographic quotes. */
  get typographersQuotes(): Read<M, boolean>;
  set typographersQuotes(value: boolean);

  /** If true, highlights hyphenation and justification rule violations in the text. */
  get highlightHjViolations(): Read<M, boolean>;
  set highlightHjViolations(value: boolean);

  /** If true, highlights paragraphs that violate keep options. */
  get highlightKeeps(): Read<M, boolean>;
  set highlightKeeps(value: boolean);

  /** If true, highlights substituted glyphs. */
  get highlightSubstitutedGlyphs(): Read<M, boolean>;
  set highlightSubstitutedGlyphs(value: boolean);

  /** If true, highlights custom kerned or tracked characters. */
  get highlightCustomSpacing(): Read<M, boolean>;
  set highlightCustomSpacing(value: boolean);

  /** If true, highlights missing fonts. */
  get highlightSubstitutedFonts(): Read<M, boolean>;
  set highlightSubstitutedFonts(value: boolean);

  /** If true, automatically selects the correct optical size. */
  get useOpticalSize(): Read<M, boolean>;
  set useOpticalSize(value: boolean);

  /** If true, applies the leading changes made to a text range to the entire paragraph. If false, applies leading changes only to the text range. */
  get useParagraphLeading(): Read<M, boolean>;
  set useParagraphLeading(value: boolean);

  /** The size of superscript characters, specified as a percentage of the font size. (Range: 0 to 200) */
  get superscriptSize(): Read<M, number>;
  set superscriptSize(value: number);

  /** The position of superscript characters, specified as a percentage of the regular leading. (Range: -500 to 500) */
  get superscriptPosition(): Read<M, number>;
  set superscriptPosition(value: number);

  /** The size of subscript characters, specified as a percentage of the font size. (Range: 0 to 200) */
  get subscriptSize(): Read<M, number>;
  set subscriptSize(value: number);

  /** The position of subscript characters, specified as a percentage of the regular leading. (Range: -500 to 500) */
  get subscriptPosition(): Read<M, number>;
  set subscriptPosition(value: number);

  /** The size of text formatted as small caps, specified as a percentage of the font size. (Range: 1 to 200) */
  get smallCap(): Read<M, number>;
  set smallCap(value: number);

  /** The amount that leading increases each time the user presses the option/alt-up arrow keys or decreases each time the user presses the option/alt-down arrow keys. (Range:.001 to 100) */
  get leadingKeyIncrement(): Read<M, number>;
  set leadingKeyIncrement(value: MeasurementValue);

  /** The amount that the baseline shift increases each time the user presses the option/alt-shift-up arrow keys or decreases each time the user presses the option/alt-shift-down arrow keys. (Range:.001 to 100) */
  get baselineShiftKeyIncrement(): Read<M, number>;
  set baselineShiftKeyIncrement(value: MeasurementValue);

  /** The amount the kerning value per 1000 ems increases each time the user presses of the option/alt-right arrow keys or decreases each time the user presses the option/alt-left arrow keys. (Range: 1 to 100) */
  get kerningKeyIncrement(): Read<M, number>;
  set kerningKeyIncrement(value: number);

  /** If true, shows hidden characters. */
  get showInvisibles(): Read<M, boolean>;
  set showInvisibles(value: boolean);

  /** If true, justifies text around text wrap objects. */
  get justifyTextWraps(): Read<M, boolean>;
  set justifyTextWraps(value: boolean);

  /** If true, moves wrapped text to the next available leading increment below the text wrap objects (skip by leading). */
  get abutTextToTextWrap(): Read<M, boolean>;
  set abutTextToTextWrap(value: boolean);

  /** If true, text wrap does not affect text on layers above the layer that contains the text wrap object. If false, text wrap affects text on all visible layers. */
  get zOrderTextWrap(): Read<M, boolean>;
  set zOrderTextWrap(value: boolean);

  /** If true, links placed text files and spreadsheet files. If false, embeds the files. */
  get linkTextFilesWhenImporting(): Read<M, boolean>;
  set linkTextFilesWhenImporting(value: boolean);

  /** If true, uses on-screen highlighting to identify kinsoku. */
  get highlightKinsoku(): Read<M, boolean>;
  set highlightKinsoku(value: boolean);

  /** If true, Japanese composer treats quotes as half width and rotates them in vertical. */
  get quoteCharactersRotatedInVertical(): Read<M, boolean>;
  set quoteCharactersRotatedInVertical(value: boolean);

  /** If this is True, and if Smart text reflow is also enabled, then this will synchronously add/delete pages after text reflowing */
  get smartTextReflowSync(): Read<M, boolean>;
  set smartTextReflowSync(value: boolean);

  /** If this bool is set to true, shaping of Indic & Latin characters will be done through Harfbuzz Shaping engine, instead of Lipika. */
  get shapeIndicAndLatinWithHarbuzz(): Read<M, boolean>;
  set shapeIndicAndLatinWithHarbuzz(value: boolean);

  /** If true, reverses X and Y scaling on Roman characters in vertical text. */
  get useNewVerticalScaling(): Read<M, boolean>;
  set useNewVerticalScaling(value: boolean);

  /** If true, uses the glyph CID to get the mojikumi class of the character. */
  get useCidMojikumi(): Read<M, boolean>;
  set useCidMojikumi(value: boolean);

  /** If true, modifies indentation for Bulleted Paragraph and Bullets around a Text Wrap object. */
  get honourTextIndentsWithTextWrap(): Read<M, boolean>;
  set honourTextIndentsWithTextWrap(value: boolean);

  /** If true, highlights character and paragraph styles with colored backgrounds. */
  get enableStylePreviewMode(): Read<M, boolean>;
  set enableStylePreviewMode(value: boolean);

  /** If true, enable automatic adding and deleting of pages in response to text reflow. */
  get smartTextReflow(): Read<M, boolean>;
  set smartTextReflow(value: boolean);

  /** Specifies where to insert new pages in response to overset text. */
  get addPages(): Read<M, AddPageOptions>;
  set addPages(value: AddPageOptions);

  /** Restrict the adding of pages during smart text reflow to overridden master text frames. */
  get limitToMasterTextFrames(): Read<M, boolean>;
  set limitToMasterTextFrames(value: boolean);

  /** Preserve left-hand and right-and pages when facing pages are enabled during smart text reflow. */
  get preserveFacingPageSpreads(): Read<M, boolean>;
  set preserveFacingPageSpreads(value: boolean);

  /** Enable auto-deletion of pages containing empty threaded text frames. */
  get deleteEmptyPages(): Read<M, boolean>;
  set deleteEmptyPages(value: boolean);
}
