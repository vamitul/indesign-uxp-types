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
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * Application- or document-wide text composition and editing defaults (smart text reflow, highlighting, key increments).
 */
export interface TextPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: DocumentOrApplication;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<TextPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TextPreference, 'single'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /** The object's DOM class name. */
  readonly constructorName: 'TextPreference';
  /** Resolves the proxy into the individual {@link TextPreference} objects it stands for. */
  getElements(): TextPreference[];
  /** If true, converts straight quotes to typographic quotes. */
  get typographersQuotes(): boolean;
  set typographersQuotes(value: boolean);
  /** If true, highlights hyphenation and justification rule violations in the text. */
  get highlightHjViolations(): boolean;
  set highlightHjViolations(value: boolean);
  /** If true, highlights paragraphs that violate keep options. */
  get highlightKeeps(): boolean;
  set highlightKeeps(value: boolean);
  /** If true, highlights substituted glyphs. */
  get highlightSubstitutedGlyphs(): boolean;
  set highlightSubstitutedGlyphs(value: boolean);
  /** If true, highlights custom kerned or tracked characters. */
  get highlightCustomSpacing(): boolean;
  set highlightCustomSpacing(value: boolean);
  /** If true, highlights missing fonts. */
  get highlightSubstitutedFonts(): boolean;
  set highlightSubstitutedFonts(value: boolean);
  /** If true, automatically selects the correct optical size. */
  get useOpticalSize(): boolean;
  set useOpticalSize(value: boolean);
  /** If true, applies the leading changes made to a text range to the entire paragraph. If false, applies leading changes only to the text range. */
  get useParagraphLeading(): boolean;
  set useParagraphLeading(value: boolean);
  /** The size of superscript characters, specified as a percentage of the font size. (Range: 0 to 200) */
  get superscriptSize(): number;
  set superscriptSize(value: number);
  /** The position of superscript characters, specified as a percentage of the regular leading. (Range: -500 to 500) */
  get superscriptPosition(): number;
  set superscriptPosition(value: number);
  /** The size of subscript characters, specified as a percentage of the font size. (Range: 0 to 200) */
  get subscriptSize(): number;
  set subscriptSize(value: number);
  /** The position of subscript characters, specified as a percentage of the regular leading. (Range: -500 to 500) */
  get subscriptPosition(): number;
  set subscriptPosition(value: number);
  /** The size of text formatted as small caps, specified as a percentage of the font size. (Range: 1 to 200) */
  get smallCap(): number;
  set smallCap(value: number);
  /** The amount that leading increases each time the user presses the option/alt-up arrow keys or decreases each time the user presses the option/alt-down arrow keys. (Range:.001 to 100) */
  get leadingKeyIncrement(): number;
  set leadingKeyIncrement(value: MeasurementValue);
  /** The amount that the baseline shift increases each time the user presses the option/alt-shift-up arrow keys or decreases each time the user presses the option/alt-shift-down arrow keys. (Range:.001 to 100) */
  get baselineShiftKeyIncrement(): number;
  set baselineShiftKeyIncrement(value: MeasurementValue);
  /** The amount the kerning value per 1000 ems increases each time the user presses of the option/alt-right arrow keys or decreases each time the user presses the option/alt-left arrow keys. (Range: 1 to 100) */
  get kerningKeyIncrement(): number;
  set kerningKeyIncrement(value: number);
  /** If true, shows hidden characters. */
  get showInvisibles(): boolean;
  set showInvisibles(value: boolean);
  /** If true, justifies text around text wrap objects. */
  get justifyTextWraps(): boolean;
  set justifyTextWraps(value: boolean);
  /** If true, moves wrapped text to the next available leading increment below the text wrap objects (skip by leading). */
  get abutTextToTextWrap(): boolean;
  set abutTextToTextWrap(value: boolean);
  /** If true, text wrap does not affect text on layers above the layer that contains the text wrap object. If false, text wrap affects text on all visible layers. */
  get zOrderTextWrap(): boolean;
  set zOrderTextWrap(value: boolean);
  /** If true, links placed text files and spreadsheet files. If false, embeds the files. */
  get linkTextFilesWhenImporting(): boolean;
  set linkTextFilesWhenImporting(value: boolean);
  /** If true, uses on-screen highlighting to identify kinsoku. */
  get highlightKinsoku(): boolean;
  set highlightKinsoku(value: boolean);
  /** If true, Japanese composer treats quotes as half width and rotates them in vertical. */
  get quoteCharactersRotatedInVertical(): boolean;
  set quoteCharactersRotatedInVertical(value: boolean);
  /** If this is True, and if Smart text reflow is also enabled, then this will synchronously add/delete pages after text reflowing */
  get smartTextReflowSync(): boolean;
  set smartTextReflowSync(value: boolean);
  /** If this bool is set to true, shaping of Indic & Latin characters will be done through Harfbuzz Shaping engine, instead of Lipika. */
  get shapeIndicAndLatinWithHarbuzz(): boolean;
  set shapeIndicAndLatinWithHarbuzz(value: boolean);
  /** If true, reverses X and Y scaling on Roman characters in vertical text. */
  get useNewVerticalScaling(): boolean;
  set useNewVerticalScaling(value: boolean);
  /** If true, uses the glyph CID to get the mojikumi class of the character. */
  get useCidMojikumi(): boolean;
  set useCidMojikumi(value: boolean);
  /** If true, modifies indentation for Bulleted Paragraph and Bullets around a Text Wrap object. */
  get honourTextIndentsWithTextWrap(): boolean;
  set honourTextIndentsWithTextWrap(value: boolean);
  /** If true, highlights character and paragraph styles with colored backgrounds. */
  get enableStylePreviewMode(): boolean;
  set enableStylePreviewMode(value: boolean);
  /** If true, enable automatic adding and deleting of pages in response to text reflow. */
  get smartTextReflow(): boolean;
  set smartTextReflow(value: boolean);
  /** Specifies where to insert new pages in response to overset text. */
  get addPages(): AddPageOptions;
  set addPages(value: AddPageOptions);
  /** Restrict the adding of pages during smart text reflow to overridden master text frames. */
  get limitToMasterTextFrames(): boolean;
  set limitToMasterTextFrames(value: boolean);
  /** Preserve left-hand and right-and pages when facing pages are enabled during smart text reflow. */
  get preserveFacingPageSpreads(): boolean;
  set preserveFacingPageSpreads(value: boolean);
  /** Enable auto-deletion of pages containing empty threaded text frames. */
  get deleteEmptyPages(): boolean;
  set deleteEmptyPages(value: boolean);
}


/**
 * The broadcast proxy for {@link TextPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link TextPreference} there.
 */
export interface TextPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (DocumentOrApplication)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<TextPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TextPreferencePlural, 'plural'>);
  /**
   * Compares this object with another object to determine if they refer to the
   * exact same underlying InDesign DOM element.
   *
   * Use this instead of `==` or `===`: every property read mints a fresh
   * object, so two references to the same element still compare unequal by
   * reference.
   */
  equals(otherObject: any): boolean;
  /**
   * Generates a string which, if executed, will return the InDesign object referenced.
   */
  toSource(): string;
  /**
   * Generates the specifier string stringently mapping the path
   * to this object within the InDesign DOM hierarchy (e.g., `/document[@id=1]/rectangle[@id=242]`).
   */
  toSpecifier(): string;
  /**
   * The object's specifier string — the same value as {@link toSpecifier}, not a
   * human-readable description.
   */
  toString(): string;
  /**
   * A collection of events
   */
  readonly events: Events;
  /**
   * A collection of event listeners
   */
  readonly eventListeners: EventListeners;
  /**
   * Adds an event listener.
   * @param eventType The event to listen for, such as `beforeSave` or `afterOpen`.
   * @param handler Invoked when the event fires. Either a JavaScript function or a {@link FilePath} referencing an external script.
   * @param captures Obsolete and ignored. Defaults to `false`.
   */
  addEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): EventListener;
  addEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): EventListener;
  /**
   * Removes a previously registered event listener. The `eventType`, `handler`,
   * and `captures` must match those passed to {@link addEventListener}.
   * @param captures Obsolete and ignored. Defaults to `false`.
   * @returns `true` if a matching listener was found and removed.
   */
  removeEventListener<K extends keyof InDesignEventMap>(
    eventType: K,
    handler: EventHandler<K>,
    captures?: boolean,
  ): boolean;
  removeEventListener(
    eventType: EventString,
    handler: ((event: Event) => void) | FilePath,
    captures?: boolean,
  ): boolean;
  /** The object's DOM class name. */
  readonly constructorName: 'TextPreference';
  /** Resolves the proxy into the individual {@link TextPreference} objects it stands for. */
  getElements(): TextPreference[];
  /** If true, converts straight quotes to typographic quotes. */
  get typographersQuotes(): (boolean)[];
  set typographersQuotes(value: boolean);
  /** If true, highlights hyphenation and justification rule violations in the text. */
  get highlightHjViolations(): (boolean)[];
  set highlightHjViolations(value: boolean);
  /** If true, highlights paragraphs that violate keep options. */
  get highlightKeeps(): (boolean)[];
  set highlightKeeps(value: boolean);
  /** If true, highlights substituted glyphs. */
  get highlightSubstitutedGlyphs(): (boolean)[];
  set highlightSubstitutedGlyphs(value: boolean);
  /** If true, highlights custom kerned or tracked characters. */
  get highlightCustomSpacing(): (boolean)[];
  set highlightCustomSpacing(value: boolean);
  /** If true, highlights missing fonts. */
  get highlightSubstitutedFonts(): (boolean)[];
  set highlightSubstitutedFonts(value: boolean);
  /** If true, automatically selects the correct optical size. */
  get useOpticalSize(): (boolean)[];
  set useOpticalSize(value: boolean);
  /** If true, applies the leading changes made to a text range to the entire paragraph. If false, applies leading changes only to the text range. */
  get useParagraphLeading(): (boolean)[];
  set useParagraphLeading(value: boolean);
  /** The size of superscript characters, specified as a percentage of the font size. (Range: 0 to 200) */
  get superscriptSize(): (number)[];
  set superscriptSize(value: number);
  /** The position of superscript characters, specified as a percentage of the regular leading. (Range: -500 to 500) */
  get superscriptPosition(): (number)[];
  set superscriptPosition(value: number);
  /** The size of subscript characters, specified as a percentage of the font size. (Range: 0 to 200) */
  get subscriptSize(): (number)[];
  set subscriptSize(value: number);
  /** The position of subscript characters, specified as a percentage of the regular leading. (Range: -500 to 500) */
  get subscriptPosition(): (number)[];
  set subscriptPosition(value: number);
  /** The size of text formatted as small caps, specified as a percentage of the font size. (Range: 1 to 200) */
  get smallCap(): (number)[];
  set smallCap(value: number);
  /** The amount that leading increases each time the user presses the option/alt-up arrow keys or decreases each time the user presses the option/alt-down arrow keys. (Range:.001 to 100) */
  get leadingKeyIncrement(): (number)[];
  set leadingKeyIncrement(value: MeasurementValue);
  /** The amount that the baseline shift increases each time the user presses the option/alt-shift-up arrow keys or decreases each time the user presses the option/alt-shift-down arrow keys. (Range:.001 to 100) */
  get baselineShiftKeyIncrement(): (number)[];
  set baselineShiftKeyIncrement(value: MeasurementValue);
  /** The amount the kerning value per 1000 ems increases each time the user presses of the option/alt-right arrow keys or decreases each time the user presses the option/alt-left arrow keys. (Range: 1 to 100) */
  get kerningKeyIncrement(): (number)[];
  set kerningKeyIncrement(value: number);
  /** If true, shows hidden characters. */
  get showInvisibles(): (boolean)[];
  set showInvisibles(value: boolean);
  /** If true, justifies text around text wrap objects. */
  get justifyTextWraps(): (boolean)[];
  set justifyTextWraps(value: boolean);
  /** If true, moves wrapped text to the next available leading increment below the text wrap objects (skip by leading). */
  get abutTextToTextWrap(): (boolean)[];
  set abutTextToTextWrap(value: boolean);
  /** If true, text wrap does not affect text on layers above the layer that contains the text wrap object. If false, text wrap affects text on all visible layers. */
  get zOrderTextWrap(): (boolean)[];
  set zOrderTextWrap(value: boolean);
  /** If true, links placed text files and spreadsheet files. If false, embeds the files. */
  get linkTextFilesWhenImporting(): (boolean)[];
  set linkTextFilesWhenImporting(value: boolean);
  /** If true, uses on-screen highlighting to identify kinsoku. */
  get highlightKinsoku(): (boolean)[];
  set highlightKinsoku(value: boolean);
  /** If true, Japanese composer treats quotes as half width and rotates them in vertical. */
  get quoteCharactersRotatedInVertical(): (boolean)[];
  set quoteCharactersRotatedInVertical(value: boolean);
  /** If this is True, and if Smart text reflow is also enabled, then this will synchronously add/delete pages after text reflowing */
  get smartTextReflowSync(): (boolean)[];
  set smartTextReflowSync(value: boolean);
  /** If this bool is set to true, shaping of Indic & Latin characters will be done through Harfbuzz Shaping engine, instead of Lipika. */
  get shapeIndicAndLatinWithHarbuzz(): (boolean)[];
  set shapeIndicAndLatinWithHarbuzz(value: boolean);
  /** If true, reverses X and Y scaling on Roman characters in vertical text. */
  get useNewVerticalScaling(): (boolean)[];
  set useNewVerticalScaling(value: boolean);
  /** If true, uses the glyph CID to get the mojikumi class of the character. */
  get useCidMojikumi(): (boolean)[];
  set useCidMojikumi(value: boolean);
  /** If true, modifies indentation for Bulleted Paragraph and Bullets around a Text Wrap object. */
  get honourTextIndentsWithTextWrap(): (boolean)[];
  set honourTextIndentsWithTextWrap(value: boolean);
  /** If true, highlights character and paragraph styles with colored backgrounds. */
  get enableStylePreviewMode(): (boolean)[];
  set enableStylePreviewMode(value: boolean);
  /** If true, enable automatic adding and deleting of pages in response to text reflow. */
  get smartTextReflow(): (boolean)[];
  set smartTextReflow(value: boolean);
  /** Specifies where to insert new pages in response to overset text. */
  get addPages(): (AddPageOptions)[];
  set addPages(value: AddPageOptions);
  /** Restrict the adding of pages during smart text reflow to overridden master text frames. */
  get limitToMasterTextFrames(): (boolean)[];
  set limitToMasterTextFrames(value: boolean);
  /** Preserve left-hand and right-and pages when facing pages are enabled during smart text reflow. */
  get preserveFacingPageSpreads(): (boolean)[];
  set preserveFacingPageSpreads(value: boolean);
  /** Enable auto-deletion of pages containing empty threaded text frames. */
  get deleteEmptyPages(): (boolean)[];
  set deleteEmptyPages(value: boolean);
}
