/**
 * ChangeGrepPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { ComposerName, KerningMethodName, Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { Bullet } from './Bullet';
import type { CharacterStyle } from './CharacterStyle';
import type { Font } from './Font';
import type { KinsokuTable } from './KinsokuTable';
import type { MojikumiTable } from './MojikumiTable';
import type { NumberingList } from './NumberingList';
import type { NumberingRestartPolicy } from './NumberingRestartPolicy';
import type { Preferences } from './Preferences';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
import type { AdornmentOverprint } from './Enums/AdornmentOverprint';
import type { AlternateGlyphForms } from './Enums/AlternateGlyphForms';
import type { BalanceLinesStyle } from './Enums/BalanceLinesStyle';
import type { Capitalization } from './Enums/Capitalization';
import type { ChangeConditionsModes } from './Enums/ChangeConditionsModes';
import type { ChangecaseMode } from './Enums/ChangecaseMode';
import type { CharacterAlignment } from './Enums/CharacterAlignment';
import type { CharacterDirectionOptions } from './Enums/CharacterDirectionOptions';
import type { DiacriticPositionOptions } from './Enums/DiacriticPositionOptions';
import type { DigitsTypeOptions } from './Enums/DigitsTypeOptions';
import type { GridAlignment } from './Enums/GridAlignment';
import type { Justification } from './Enums/Justification';
import type { KashidasOptions } from './Enums/KashidasOptions';
import type { KentenAlignment } from './Enums/KentenAlignment';
import type { KentenCharacter } from './Enums/KentenCharacter';
import type { KentenCharacterSet } from './Enums/KentenCharacterSet';
import type { KinsokuHangTypes } from './Enums/KinsokuHangTypes';
import type { KinsokuSet } from './Enums/KinsokuSet';
import type { KinsokuType } from './Enums/KinsokuType';
import type { Leading } from './Enums/Leading';
import type { LeadingModel } from './Enums/LeadingModel';
import type { ListType } from './Enums/ListType';
import type { MojikumiTableDefaults } from './Enums/MojikumiTableDefaults';
import type { NothingEnum } from './Enums/NothingEnum';
import type { NumberingStyle } from './Enums/NumberingStyle';
import type { OTFFigureStyle } from './Enums/OTFFigureStyle';
import type { OutlineJoin } from './Enums/OutlineJoin';
import type { ParagraphDirectionOptions } from './Enums/ParagraphDirectionOptions';
import type { ParagraphJustificationOptions } from './Enums/ParagraphJustificationOptions';
import type { Position } from './Enums/Position';
import type { PositionalForms } from './Enums/PositionalForms';
import type { RubyAlignments } from './Enums/RubyAlignments';
import type { RubyKentenPosition } from './Enums/RubyKentenPosition';
import type { RubyOverhang } from './Enums/RubyOverhang';
import type { RubyParentSpacing } from './Enums/RubyParentSpacing';
import type { RubyTypes } from './Enums/RubyTypes';
import type { SingleWordJustification } from './Enums/SingleWordJustification';
import type { Spacing } from './Enums/Spacing';
import type { SpanColumnCountOptions } from './Enums/SpanColumnCountOptions';
import type { SpanColumnTypeOptions } from './Enums/SpanColumnTypeOptions';
import type { StartParagraph } from './Enums/StartParagraph';
import type { TextStrokeAlign } from './Enums/TextStrokeAlign';
import type { WarichuAlignment } from './Enums/WarichuAlignment';
import type { Language } from './Language';
import type { LanguageWithVendors } from './LanguageWithVendors';
import type { ParagraphStyle } from './ParagraphStyle';
import type { XMLTag } from './XMLTag';
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
 * GREP search-and-replace criteria and formatting options, used with {@link Application.changeGrep}.
 */
export interface ChangeGrepPreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Application;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<ChangeGrepPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ChangeGrepPreference, 'single'>);
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
  readonly constructorName: 'ChangeGrepPreference';
  /** Resolves the proxy into the individual {@link ChangeGrepPreference} objects it stands for. */
  getElements(): ChangeGrepPreference[];
  /** The numbering-restart policy and level range for the numbered list, set through {@link NumberingRestartPolicy}'s own properties. */
  readonly numberingRestartPolicies: NumberingRestartPolicy | NothingEnum.NOTHING;
  /** The bullet character, set through {@link Bullet}'s own properties (glyph, font, and style). */
  readonly bulletChar: Bullet | NothingEnum.NOTHING;
  /** A collection of preferences objects. */
  readonly preferences: Preferences;
  /** The space between paragraphs using same style. */
  get sameParaStyleSpacing(): number | Spacing | NothingEnum.NOTHING;
  set sameParaStyleSpacing(value: MeasurementValue | Spacing | NothingEnum.NOTHING);
  /** Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long. */
  get paragraphKashidaWidth(): number | NothingEnum.NOTHING;
  set paragraphKashidaWidth(value: number | NothingEnum.NOTHING);
  /** Value of Design Axes. */
  get designAxes(): number[] | NothingEnum.NOTHING;
  set designAxes(value: number[] | NothingEnum.NOTHING);
  /** The replacement ChangeGrepPreference. */
  get changeTo(): string | NothingEnum.NOTHING;
  set changeTo(value: string | NothingEnum.NOTHING);
  /** The character style to search for or change to. */
  get appliedCharacterStyle(): string | NothingEnum.NOTHING;
  set appliedCharacterStyle(value: string | NothingEnum.NOTHING | null | CharacterStyle);
  /** The paragraph style to search for or change to. */
  get appliedParagraphStyle(): string | NothingEnum.NOTHING;
  set appliedParagraphStyle(value: string | NothingEnum.NOTHING | null | ParagraphStyle);
  /** The XML tag applied to the element. */
  get markupTag(): string | NothingEnum.NOTHING;
  set markupTag(value: string | NothingEnum.NOTHING | null | XMLTag);
  /** The amount to indent the first line. */
  get firstLineIndent(): number | NothingEnum.NOTHING;
  set firstLineIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The width of the left indent. */
  get leftIndent(): number | NothingEnum.NOTHING;
  set leftIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The width of the right indent. */
  get rightIndent(): number | NothingEnum.NOTHING;
  set rightIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The height of the paragraph space above. */
  get spaceBefore(): number | NothingEnum.NOTHING;
  set spaceBefore(value: MeasurementValue | NothingEnum.NOTHING);
  /** The height of the paragraph space below. */
  get spaceAfter(): number | NothingEnum.NOTHING;
  set spaceAfter(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true or set to an enumeration value, balances ragged lines. Note: Not valid with a single-line text composer. */
  get balanceRaggedLines(): boolean | BalanceLinesStyle | NothingEnum.NOTHING;
  set balanceRaggedLines(value: boolean | BalanceLinesStyle | NothingEnum.NOTHING);
  /** The paragraph alignment. */
  get justification(): Justification | NothingEnum.NOTHING;
  set justification(value: Justification | NothingEnum.NOTHING);
  /** The alignment to use for lines that contain a single word. */
  get singleWordJustification(): SingleWordJustification | NothingEnum.NOTHING;
  set singleWordJustification(value: SingleWordJustification | NothingEnum.NOTHING);
  /** The percent of the type size to use for auto leading. (Range: 0 to 500). */
  get autoLeading(): number | NothingEnum.NOTHING;
  set autoLeading(value: number | NothingEnum.NOTHING);
  /** The number of lines to drop cap. */
  get dropCapLines(): number | NothingEnum.NOTHING;
  set dropCapLines(value: number | NothingEnum.NOTHING);
  /** The number of characters to drop cap. */
  get dropCapCharacters(): number | NothingEnum.NOTHING;
  set dropCapCharacters(value: number | NothingEnum.NOTHING);
  /** If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames. */
  get keepLinesTogether(): boolean | NothingEnum.NOTHING;
  set keepLinesTogether(value: boolean | NothingEnum.NOTHING);
  /** If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns. */
  get keepAllLinesTogether(): boolean | NothingEnum.NOTHING;
  set keepAllLinesTogether(value: boolean | NothingEnum.NOTHING);
  /** The minimum number of lines to keep with the next paragraph. */
  get keepWithNext(): number | NothingEnum.NOTHING;
  set keepWithNext(value: number | NothingEnum.NOTHING);
  /** The minimum number of lines to keep together in a paragraph before allowing a page break. */
  get keepFirstLines(): number | NothingEnum.NOTHING;
  set keepFirstLines(value: number | NothingEnum.NOTHING);
  /** The minimum number of lines to keep together in a paragraph after a page break. */
  get keepLastLines(): number | NothingEnum.NOTHING;
  set keepLastLines(value: number | NothingEnum.NOTHING);
  /** The location at which to start the paragraph. */
  get startParagraph(): StartParagraph | NothingEnum.NOTHING;
  set startParagraph(value: StartParagraph | NothingEnum.NOTHING);
  /** The text composer to use to compose the text. */
  get composer(): ComposerName | NothingEnum.NOTHING;
  set composer(value: ComposerName | NothingEnum.NOTHING);
  /** The amount to indent the last line in the paragraph. */
  get lastLineIndent(): number | NothingEnum.NOTHING;
  set lastLineIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true. */
  get hyphenateLastWord(): boolean | NothingEnum.NOTHING;
  set hyphenateLastWord(value: boolean | NothingEnum.NOTHING);
  /** Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid. */
  get dropcapDetail(): number | NothingEnum.NOTHING;
  set dropcapDetail(value: number | NothingEnum.NOTHING);
  /** If true, allows the last word in a text column to be hyphenated. */
  get hyphenateAcrossColumns(): boolean | NothingEnum.NOTHING;
  set hyphenateAcrossColumns(value: boolean | NothingEnum.NOTHING);
  /** If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true. */
  get keepRuleAboveInFrame(): boolean | NothingEnum.NOTHING;
  set keepRuleAboveInFrame(value: boolean | NothingEnum.NOTHING);
  /** If true, ignores optical edge alignment for the paragraph. */
  get ignoreEdgeAlignment(): boolean | NothingEnum.NOTHING;
  set ignoreEdgeAlignment(value: boolean | NothingEnum.NOTHING);
  /** The font applied to the ChangeGrepPreference, specified as either a font object or the name of font family. */
  get appliedFont(): Font | NothingEnum.NOTHING;
  set appliedFont(value: Font | string | NothingEnum.NOTHING | null);
  /** The name of the font style. */
  get fontStyle(): string | NothingEnum.NOTHING;
  set fontStyle(value: string | NothingEnum.NOTHING);
  /** The text size. */
  get pointSize(): number | NothingEnum.NOTHING;
  set pointSize(value: MeasurementValue | NothingEnum.NOTHING);
  /** The leading applied to the text. */
  get leading(): number | Leading | NothingEnum.NOTHING;
  set leading(value: MeasurementValue | Leading | NothingEnum.NOTHING);
  /** The type of pair kerning. */
  get kerningMethod(): KerningMethodName | NothingEnum.NOTHING;
  set kerningMethod(value: KerningMethodName | NothingEnum.NOTHING);
  /** The amount by which to loosen or tighten a block of text, specified in thousands of an em. */
  get tracking(): number | NothingEnum.NOTHING;
  set tracking(value: number | NothingEnum.NOTHING);
  /** How the text is capitalized — small caps, all caps, OpenType small caps, or forced lowercase — see {@link Capitalization}. */
  get capitalization(): Capitalization | NothingEnum.NOTHING;
  set capitalization(value: Capitalization | NothingEnum.NOTHING);
  /** The text position relative to the baseline. */
  get position(): Position | NothingEnum.NOTHING;
  set position(value: Position | NothingEnum.NOTHING);
  /** If true, underlines the text. */
  get underline(): boolean | NothingEnum.NOTHING;
  set underline(value: boolean | NothingEnum.NOTHING);
  /** If true, draws a strikethrough line through the text. */
  get strikeThru(): boolean | NothingEnum.NOTHING;
  set strikeThru(value: boolean | NothingEnum.NOTHING);
  /** If true, replaces specific character combinations (e.g., fl, fi) with ligature characters. */
  get ligatures(): boolean | NothingEnum.NOTHING;
  set ligatures(value: boolean | NothingEnum.NOTHING);
  /** If true, keeps the text on the same line. */
  get noBreak(): boolean | NothingEnum.NOTHING;
  set noBreak(value: boolean | NothingEnum.NOTHING);
  /** The horizontal scaling applied to the ChangeGrepPreference. */
  get horizontalScale(): number | NothingEnum.NOTHING;
  set horizontalScale(value: number | NothingEnum.NOTHING);
  /** The vertical scaling applied to the ChangeGrepPreference. */
  get verticalScale(): number | NothingEnum.NOTHING;
  set verticalScale(value: number | NothingEnum.NOTHING);
  /** The baseline shift applied to the text. */
  get baselineShift(): number | NothingEnum.NOTHING;
  set baselineShift(value: MeasurementValue | NothingEnum.NOTHING);
  /** The skew angle of the ChangeGrepPreference. */
  get skew(): number | NothingEnum.NOTHING;
  set skew(value: number | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the fill color of the ChangeGrepPreference. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). */
  get fillTint(): number | NothingEnum.NOTHING;
  set fillTint(value: number | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the stroke color of the ChangeGrepPreference. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). */
  get strokeTint(): number | NothingEnum.NOTHING;
  set strokeTint(value: number | NothingEnum.NOTHING);
  /** The stroke weight applied to the characters of the text. */
  get strokeWeight(): number | NothingEnum.NOTHING;
  set strokeWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, the stroke of the characters will overprint. */
  get overprintStroke(): boolean | NothingEnum.NOTHING;
  set overprintStroke(value: boolean | NothingEnum.NOTHING);
  /** If true, the fill color of the characters will overprint. */
  get overprintFill(): boolean | NothingEnum.NOTHING;
  set overprintFill(value: boolean | NothingEnum.NOTHING);
  /** The figure style in OpenType fonts. */
  get otfFigureStyle(): OTFFigureStyle | NothingEnum.NOTHING;
  set otfFigureStyle(value: OTFFigureStyle | NothingEnum.NOTHING);
  /** If true, uses ordinals in OpenType fonts. */
  get otfOrdinal(): boolean | NothingEnum.NOTHING;
  set otfOrdinal(value: boolean | NothingEnum.NOTHING);
  /** If true, uses fractions in OpenType fonts. */
  get otfFraction(): boolean | NothingEnum.NOTHING;
  set otfFraction(value: boolean | NothingEnum.NOTHING);
  /** If true, uses discretionary ligatures in OpenType fonts. */
  get otfDiscretionaryLigature(): boolean | NothingEnum.NOTHING;
  set otfDiscretionaryLigature(value: boolean | NothingEnum.NOTHING);
  /** If true, uses titling forms in OpenType fonts. */
  get otfTitling(): boolean | NothingEnum.NOTHING;
  set otfTitling(value: boolean | NothingEnum.NOTHING);
  /** If true, uses contextual alternate forms in OpenType fonts. */
  get otfContextualAlternate(): boolean | NothingEnum.NOTHING;
  set otfContextualAlternate(value: boolean | NothingEnum.NOTHING);
  /** If true, uses swash forms in OpenType fonts. */
  get otfSwash(): boolean | NothingEnum.NOTHING;
  set otfSwash(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. */
  get underlineColor(): Swatch | NothingEnum.NOTHING;
  set underlineColor(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. */
  get underlineGapColor(): Swatch | NothingEnum.NOTHING;
  set underlineGapColor(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The underline stroke tint (as a percentage). (Range: 0 to 100). */
  get underlineTint(): number | NothingEnum.NOTHING;
  set underlineTint(value: number | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. */
  get underlineGapTint(): number | NothingEnum.NOTHING;
  set underlineGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the underline stroke color will overprint. */
  get underlineOverprint(): boolean | NothingEnum.NOTHING;
  set underlineOverprint(value: boolean | NothingEnum.NOTHING);
  /** If true, the gap color of the underline stroke will overprint. */
  get underlineGapOverprint(): boolean | NothingEnum.NOTHING;
  set underlineGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke type of the underline stroke. */
  get underlineType(): StrokeStyle | NothingEnum.NOTHING;
  set underlineType(value: StrokeStyle | string | NothingEnum.NOTHING | null);
  /** The amount by which to offset the underline from the text baseline. */
  get underlineOffset(): number | NothingEnum.NOTHING;
  set underlineOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke weight of the underline stroke. */
  get underlineWeight(): number | NothingEnum.NOTHING;
  set underlineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. */
  get strikeThroughColor(): Swatch | NothingEnum.NOTHING;
  set strikeThroughColor(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. */
  get strikeThroughGapColor(): Swatch | NothingEnum.NOTHING;
  set strikeThroughGapColor(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). */
  get strikeThroughTint(): number | NothingEnum.NOTHING;
  set strikeThroughTint(value: number | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. */
  get strikeThroughGapTint(): number | NothingEnum.NOTHING;
  set strikeThroughGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the strikethrough stroke will overprint. */
  get strikeThroughOverprint(): boolean | NothingEnum.NOTHING;
  set strikeThroughOverprint(value: boolean | NothingEnum.NOTHING);
  /** If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. */
  get strikeThroughGapOverprint(): boolean | NothingEnum.NOTHING;
  set strikeThroughGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke type of the strikethrough stroke. */
  get strikeThroughType(): StrokeStyle | NothingEnum.NOTHING;
  set strikeThroughType(value: StrokeStyle | string | NothingEnum.NOTHING | null);
  /** The amount by which to offset the strikethrough stroke from the text baseline. */
  get strikeThroughOffset(): number | NothingEnum.NOTHING;
  set strikeThroughOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke weight of the strikethrough stroke. */
  get strikeThroughWeight(): number | NothingEnum.NOTHING;
  set strikeThroughWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): boolean | NothingEnum.NOTHING;
  set otfSlashedZero(value: boolean | NothingEnum.NOTHING);
  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): boolean | NothingEnum.NOTHING;
  set otfHistorical(value: boolean | NothingEnum.NOTHING);
  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): number | NothingEnum.NOTHING;
  set otfStylisticSets(value: number | NothingEnum.NOTHING);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text. */
  get gradientFillLength(): number | NothingEnum.NOTHING;
  set gradientFillLength(value: number | NothingEnum.NOTHING);
  /** The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180). */
  get gradientFillAngle(): number | NothingEnum.NOTHING;
  set gradientFillAngle(value: number | NothingEnum.NOTHING);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text. */
  get gradientStrokeLength(): number | NothingEnum.NOTHING;
  set gradientStrokeLength(value: number | NothingEnum.NOTHING);
  /** The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180). */
  get gradientStrokeAngle(): number | NothingEnum.NOTHING;
  set gradientStrokeAngle(value: number | NothingEnum.NOTHING);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y]. */
  get gradientFillStart(): number[] | NothingEnum.NOTHING;
  set gradientFillStart(value: number[] | NothingEnum.NOTHING);
  /** The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y]. */
  get gradientStrokeStart(): number[] | NothingEnum.NOTHING;
  set gradientStrokeStart(value: number[] | NothingEnum.NOTHING);
  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): boolean | NothingEnum.NOTHING;
  set otfMark(value: boolean | NothingEnum.NOTHING);
  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): boolean | NothingEnum.NOTHING;
  set otfLocale(value: boolean | NothingEnum.NOTHING);
  /** Which positional form of the glyph to use (initial, medial, final, or isolated) — see {@link PositionalForms}. */
  get positionalForm(): PositionalForms | NothingEnum.NOTHING;
  set positionalForm(value: PositionalForms | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink), applied as a fill color, to search for or change to. */
  get fillColor(): string | NothingEnum.NOTHING;
  set fillColor(value: string | NothingEnum.NOTHING | null | Swatch);
  /** The swatch (color, gradient, tint, or mixed ink), applied as a stroke color, to search for or change to. */
  get strokeColor(): string | NothingEnum.NOTHING;
  set strokeColor(value: string | NothingEnum.NOTHING | null | Swatch);
  /** The language to search for or change to. */
  get appliedLanguage(): string | NothingEnum.NOTHING;
  set appliedLanguage(value: string | NothingEnum.NOTHING | null | Language | LanguageWithVendors);
  /** The amount of space to add or remove between characters, specified in thousands of an em. */
  get kerningValue(): number | NothingEnum.NOTHING;
  set kerningValue(value: number | NothingEnum.NOTHING);
  /** The change conditions mode, change either replaces applied conditions or adds to applied conditions. */
  get changeConditionsMode(): ChangeConditionsModes | NothingEnum.NOTHING;
  set changeConditionsMode(value: ChangeConditionsModes | NothingEnum.NOTHING);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): number | NothingEnum.NOTHING;
  set miterLimit(value: number | NothingEnum.NOTHING);
  /** The stroke alignment applied to the text. */
  get strokeAlignment(): TextStrokeAlign | NothingEnum.NOTHING;
  set strokeAlignment(value: TextStrokeAlign | NothingEnum.NOTHING);
  /** The stroke join type applied to the characters of the text. */
  get endJoin(): OutlineJoin | NothingEnum.NOTHING;
  set endJoin(value: OutlineJoin | NothingEnum.NOTHING);
  /** The conditions to search for or change to. Specify the "nothing" enum for "Any" or an empty list for "[Unconditional]". */
  get appliedConditions(): string[] | NothingEnum.NOTHING;
  set appliedConditions(value: string[] | NothingEnum.NOTHING);
  /** Whether the paragraph reads left-to-right or right-to-left — see {@link ParagraphDirectionOptions}. */
  get paragraphDirection(): ParagraphDirectionOptions | NothingEnum.NOTHING;
  set paragraphDirection(value: ParagraphDirectionOptions | NothingEnum.NOTHING);
  /** The justification method for Arabic and Naskh text, including kashida behavior — see {@link ParagraphJustificationOptions}. */
  get paragraphJustification(): ParagraphJustificationOptions | NothingEnum.NOTHING;
  set paragraphJustification(value: ParagraphJustificationOptions | NothingEnum.NOTHING);
  /** If true, use overlapping swash forms in OpenType fonts. */
  get otfOverlapSwash(): boolean | NothingEnum.NOTHING;
  set otfOverlapSwash(value: boolean | NothingEnum.NOTHING);
  /** If true, use stylistic alternate forms in OpenType fonts. */
  get otfStylisticAlternate(): boolean | NothingEnum.NOTHING;
  set otfStylisticAlternate(value: boolean | NothingEnum.NOTHING);
  /** If true, use alternate justification forms in OpenType fonts. */
  get otfJustificationAlternate(): boolean | NothingEnum.NOTHING;
  set otfJustificationAlternate(value: boolean | NothingEnum.NOTHING);
  /** If true, use stretched alternate forms in OpenType fonts. */
  get otfStretchedAlternate(): boolean | NothingEnum.NOTHING;
  set otfStretchedAlternate(value: boolean | NothingEnum.NOTHING);
  /** The direction of the character. */
  get characterDirection(): CharacterDirectionOptions | NothingEnum.NOTHING;
  set characterDirection(value: CharacterDirectionOptions | NothingEnum.NOTHING);
  /** The keyboard direction of the character. */
  get keyboardDirection(): CharacterDirectionOptions | NothingEnum.NOTHING;
  set keyboardDirection(value: CharacterDirectionOptions | NothingEnum.NOTHING);
  /** The script-specific digit glyphs used to display numbers — see {@link DigitsTypeOptions}. */
  get digitsType(): DigitsTypeOptions | NothingEnum.NOTHING;
  set digitsType(value: DigitsTypeOptions | NothingEnum.NOTHING);
  /** Use of Kashidas for justification. */
  get kashidas(): KashidasOptions | NothingEnum.NOTHING;
  set kashidas(value: KashidasOptions | NothingEnum.NOTHING);
  /** Position of diacriticical characters. */
  get diacriticPosition(): DiacriticPositionOptions | NothingEnum.NOTHING;
  set diacriticPosition(value: DiacriticPositionOptions | NothingEnum.NOTHING);
  /** The x (horizontal) offset for diacritic adjustment. */
  get xOffsetDiacritic(): number | NothingEnum.NOTHING;
  set xOffsetDiacritic(value: number | NothingEnum.NOTHING);
  /** The y (vertical) offset for diacritic adjustment. */
  get yOffsetDiacritic(): number | NothingEnum.NOTHING;
  set yOffsetDiacritic(value: number | NothingEnum.NOTHING);
  /** The change case mode, changes the case of the found text. */
  get changeCaseMode(): ChangecaseMode | NothingEnum.NOTHING;
  set changeCaseMode(value: ChangecaseMode | NothingEnum.NOTHING);
  /** If the first line in the paragraph should be kept with the last line of previous paragraph. */
  get keepWithPrevious(): boolean | NothingEnum.NOTHING;
  set keepWithPrevious(value: boolean | NothingEnum.NOTHING);
  /** The number of columns a paragraph spans or the number of split columns. */
  get spanSplitColumnCount(): number | SpanColumnCountOptions | NothingEnum.NOTHING;
  set spanSplitColumnCount(value: number | SpanColumnCountOptions | NothingEnum.NOTHING);
  /** Whether a paragraph should be a single column, span columns or split columns. */
  get spanColumnType(): SpanColumnTypeOptions | NothingEnum.NOTHING;
  set spanColumnType(value: SpanColumnTypeOptions | NothingEnum.NOTHING);
  /** The inside gutter if the paragraph splits columns. */
  get splitColumnInsideGutter(): number | NothingEnum.NOTHING;
  set splitColumnInsideGutter(value: MeasurementValue | NothingEnum.NOTHING);
  /** The outside gutter if the paragraph splits columns. */
  get splitColumnOutsideGutter(): number | NothingEnum.NOTHING;
  set splitColumnOutsideGutter(value: MeasurementValue | NothingEnum.NOTHING);
  /** The minimum space before a span or a split column. */
  get spanColumnMinSpaceBefore(): number | NothingEnum.NOTHING;
  set spanColumnMinSpaceBefore(value: MeasurementValue | NothingEnum.NOTHING);
  /** The minimum space after a span or a split column. */
  get spanColumnMinSpaceAfter(): number | NothingEnum.NOTHING;
  set spanColumnMinSpaceAfter(value: MeasurementValue | NothingEnum.NOTHING);
  /** The alignment of small characters to the largest character in the line. */
  get characterAlignment(): CharacterAlignment | NothingEnum.NOTHING;
  set characterAlignment(value: CharacterAlignment | NothingEnum.NOTHING);
  /** The amount of horizontal character compression. */
  get tsume(): number | NothingEnum.NOTHING;
  set tsume(value: number | NothingEnum.NOTHING);
  /** The amount of space before each character. */
  get leadingAki(): number | NothingEnum.NOTHING;
  set leadingAki(value: number | NothingEnum.NOTHING);
  /** The amount of space after each character. */
  get trailingAki(): number | NothingEnum.NOTHING;
  set trailingAki(value: number | NothingEnum.NOTHING);
  /** The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. */
  get characterRotation(): number | NothingEnum.NOTHING;
  set characterRotation(value: number | NothingEnum.NOTHING);
  /** The number of grid squares in which to arrange the text. */
  get jidori(): number | NothingEnum.NOTHING;
  set jidori(value: number | NothingEnum.NOTHING);
  /** The amount (as a percentage) of shatai obliquing to apply. */
  get shataiMagnification(): number | NothingEnum.NOTHING;
  set shataiMagnification(value: number | NothingEnum.NOTHING);
  /** The shatai lens angle (in degrees). */
  get shataiDegreeAngle(): number | NothingEnum.NOTHING;
  set shataiDegreeAngle(value: number | NothingEnum.NOTHING);
  /** If true, applies shatai rotation. */
  get shataiAdjustRotation(): boolean | NothingEnum.NOTHING;
  set shataiAdjustRotation(value: boolean | NothingEnum.NOTHING);
  /** If true, adjusts shatai tsume. */
  get shataiAdjustTsume(): boolean | NothingEnum.NOTHING;
  set shataiAdjustTsume(value: boolean | NothingEnum.NOTHING);
  /** If true, makes the character horizontal in vertical text. */
  get tatechuyoko(): boolean | NothingEnum.NOTHING;
  set tatechuyoko(value: boolean | NothingEnum.NOTHING);
  /** The horizontal offset for horizontal characters in vertical text. */
  get tatechuyokoXOffset(): number | NothingEnum.NOTHING;
  set tatechuyokoXOffset(value: number | NothingEnum.NOTHING);
  /** The vertical offset for horizontal characters in vertical text. */
  get tatechuyokoYOffset(): number | NothingEnum.NOTHING;
  set tatechuyokoYOffset(value: number | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. */
  get kentenFillColor(): Swatch | NothingEnum.NOTHING;
  set kentenFillColor(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. */
  get kentenStrokeColor(): Swatch | NothingEnum.NOTHING;
  set kentenStrokeColor(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The fill tint (as a percentage) of kenten characters. (Range: 0 to 100). */
  get kentenTint(): number | NothingEnum.NOTHING;
  set kentenTint(value: number | NothingEnum.NOTHING);
  /** The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100). */
  get kentenStrokeTint(): number | NothingEnum.NOTHING;
  set kentenStrokeTint(value: number | NothingEnum.NOTHING);
  /** The stroke weight (in points) of kenten characters. */
  get kentenWeight(): number | NothingEnum.NOTHING;
  set kentenWeight(value: number | NothingEnum.NOTHING);
  /** The method of overprinting the kenten fill. */
  get kentenOverprintFill(): AdornmentOverprint | NothingEnum.NOTHING;
  set kentenOverprintFill(value: AdornmentOverprint | NothingEnum.NOTHING);
  /** The method of overprinting the kenten stroke. */
  get kentenOverprintStroke(): AdornmentOverprint | NothingEnum.NOTHING;
  set kentenOverprintStroke(value: AdornmentOverprint | NothingEnum.NOTHING);
  /** The style of kenten characters. */
  get kentenKind(): KentenCharacter | NothingEnum.NOTHING;
  set kentenKind(value: KentenCharacter | NothingEnum.NOTHING);
  /** The distance between kenten characters and their parent characters. */
  get kentenPlacement(): number | NothingEnum.NOTHING;
  set kentenPlacement(value: number | NothingEnum.NOTHING);
  /** The alignment of kenten characters relative to the parent characters. */
  get kentenAlignment(): KentenAlignment | NothingEnum.NOTHING;
  set kentenAlignment(value: KentenAlignment | NothingEnum.NOTHING);
  /** The kenten position relative to the parent character. */
  get kentenPosition(): RubyKentenPosition | NothingEnum.NOTHING;
  set kentenPosition(value: RubyKentenPosition | NothingEnum.NOTHING);
  /** The font to use for kenten characters. */
  get kentenFont(): Font | NothingEnum.NOTHING;
  set kentenFont(value: Font | string | NothingEnum.NOTHING | null);
  /** The font style of kenten characters. */
  get kentenFontStyle(): string | NothingEnum.NOTHING;
  set kentenFontStyle(value: string | NothingEnum.NOTHING);
  /** The size (in points) of kenten characters. */
  get kentenFontSize(): number | NothingEnum.NOTHING;
  set kentenFontSize(value: number | NothingEnum.NOTHING);
  /** The horizontal size of kenten characters as a percent of the original size. */
  get kentenXScale(): number | NothingEnum.NOTHING;
  set kentenXScale(value: number | NothingEnum.NOTHING);
  /** The vertical size of kenten charachers as a percent of the original size. */
  get kentenYScale(): number | NothingEnum.NOTHING;
  set kentenYScale(value: number | NothingEnum.NOTHING);
  /** The character used for kenten. Note: Valid only when kenten kind is custom. */
  get kentenCustomCharacter(): string | NothingEnum.NOTHING;
  set kentenCustomCharacter(value: string | NothingEnum.NOTHING);
  /** The character set used for the custom kenten character. Note: Valid only when kenten kind is custom. */
  get kentenCharacterSet(): KentenCharacterSet | NothingEnum.NOTHING;
  set kentenCharacterSet(value: KentenCharacterSet | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. */
  get rubyFill(): Swatch | NothingEnum.NOTHING;
  set rubyFill(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. */
  get rubyStroke(): Swatch | NothingEnum.NOTHING;
  set rubyStroke(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The tint (as a percentage) of the ruby fill color. (Range: 0 to 100). */
  get rubyTint(): number | NothingEnum.NOTHING;
  set rubyTint(value: number | NothingEnum.NOTHING);
  /** The stroke weight (in points) of ruby characters. */
  get rubyWeight(): number | NothingEnum.NOTHING;
  set rubyWeight(value: number | NothingEnum.NOTHING);
  /** The method of overprinting the ruby fill. */
  get rubyOverprintFill(): AdornmentOverprint | NothingEnum.NOTHING;
  set rubyOverprintFill(value: AdornmentOverprint | NothingEnum.NOTHING);
  /** The method of overprinting the ruby stroke. */
  get rubyOverprintStroke(): AdornmentOverprint | NothingEnum.NOTHING;
  set rubyOverprintStroke(value: AdornmentOverprint | NothingEnum.NOTHING);
  /** The stroke tint (as a percentage) of ruby characters. */
  get rubyStrokeTint(): number | NothingEnum.NOTHING;
  set rubyStrokeTint(value: number | NothingEnum.NOTHING);
  /** The font applied to ruby characters. */
  get rubyFont(): Font | NothingEnum.NOTHING;
  set rubyFont(value: Font | string | NothingEnum.NOTHING | null);
  /** The font style of ruby characters. */
  get rubyFontStyle(): string | NothingEnum.NOTHING;
  set rubyFontStyle(value: string | NothingEnum.NOTHING);
  /** The size (in points) of ruby characters. */
  get rubyFontSize(): number | NothingEnum.NOTHING;
  set rubyFontSize(value: number | NothingEnum.NOTHING);
  /** If true, uses OpenType Pro fonts for ruby. */
  get rubyOpenTypePro(): boolean | NothingEnum.NOTHING;
  set rubyOpenTypePro(value: boolean | NothingEnum.NOTHING);
  /** The horizontal size of ruby characters, specified as a percent of the original size. */
  get rubyXScale(): number | NothingEnum.NOTHING;
  set rubyXScale(value: number | NothingEnum.NOTHING);
  /** The vertical size of ruby characters, specified as a percent of the original size. */
  get rubyYScale(): number | NothingEnum.NOTHING;
  set rubyYScale(value: number | NothingEnum.NOTHING);
  /** Whether ruby applies to the whole group of characters or to each one individually — see {@link RubyTypes}. */
  get rubyType(): RubyTypes | NothingEnum.NOTHING;
  set rubyType(value: RubyTypes | NothingEnum.NOTHING);
  /** How ruby text is aligned relative to its parent characters — see {@link RubyAlignments}. */
  get rubyAlignment(): RubyAlignments | NothingEnum.NOTHING;
  set rubyAlignment(value: RubyAlignments | NothingEnum.NOTHING);
  /** The position of ruby characters relative to the parent text. */
  get rubyPosition(): RubyKentenPosition | NothingEnum.NOTHING;
  set rubyPosition(value: RubyKentenPosition | NothingEnum.NOTHING);
  /** The amount of horizontal space between ruby and parent characters. */
  get rubyXOffset(): number | NothingEnum.NOTHING;
  set rubyXOffset(value: number | NothingEnum.NOTHING);
  /** The amount of vertical space between ruby and parent characters. */
  get rubyYOffset(): number | NothingEnum.NOTHING;
  set rubyYOffset(value: number | NothingEnum.NOTHING);
  /** The ruby spacing relative to the parent text. */
  get rubyParentSpacing(): RubyParentSpacing | NothingEnum.NOTHING;
  set rubyParentSpacing(value: RubyParentSpacing | NothingEnum.NOTHING);
  /** If true, auto aligns ruby. */
  get rubyAutoAlign(): boolean | NothingEnum.NOTHING;
  set rubyAutoAlign(value: boolean | NothingEnum.NOTHING);
  /** If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount. */
  get rubyOverhang(): boolean | NothingEnum.NOTHING;
  set rubyOverhang(value: boolean | NothingEnum.NOTHING);
  /** If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent. */
  get rubyAutoScaling(): boolean | NothingEnum.NOTHING;
  set rubyAutoScaling(value: boolean | NothingEnum.NOTHING);
  /** The amount (as a percentage) to scale the parent text size to determine the ruby text size. */
  get rubyParentScalingPercent(): number | NothingEnum.NOTHING;
  set rubyParentScalingPercent(value: number | NothingEnum.NOTHING);
  /** The amount by which ruby characters can overhang the parent text. */
  get rubyParentOverhangAmount(): RubyOverhang | NothingEnum.NOTHING;
  set rubyParentOverhangAmount(value: RubyOverhang | NothingEnum.NOTHING);
  /** The number of digits included in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyDigits(): number | NothingEnum.NOTHING;
  set rubyAutoTcyDigits(value: number | NothingEnum.NOTHING);
  /** If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyIncludeRoman(): boolean | NothingEnum.NOTHING;
  set rubyAutoTcyIncludeRoman(value: boolean | NothingEnum.NOTHING);
  /** If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. */
  get rubyAutoTcyAutoScale(): boolean | NothingEnum.NOTHING;
  set rubyAutoTcyAutoScale(value: boolean | NothingEnum.NOTHING);
  /** If true, turns on warichu. */
  get warichu(): boolean | NothingEnum.NOTHING;
  set warichu(value: boolean | NothingEnum.NOTHING);
  /** The amount (as a percentage) to scale parent text size to determine warichu size. */
  get warichuSize(): number | NothingEnum.NOTHING;
  set warichuSize(value: number | NothingEnum.NOTHING);
  /** The number of lines of warichu within a single normal line. */
  get warichuLines(): number | NothingEnum.NOTHING;
  set warichuLines(value: number | NothingEnum.NOTHING);
  /** The gap between lines of warichu characters. */
  get warichuLineSpacing(): number | NothingEnum.NOTHING;
  set warichuLineSpacing(value: number | NothingEnum.NOTHING);
  /** How warichu lines are aligned and justified — see {@link WarichuAlignment}. */
  get warichuAlignment(): WarichuAlignment | NothingEnum.NOTHING;
  set warichuAlignment(value: WarichuAlignment | NothingEnum.NOTHING);
  /** The minimum number of characters allowed after a line break. */
  get warichuCharsAfterBreak(): number | NothingEnum.NOTHING;
  set warichuCharsAfterBreak(value: number | NothingEnum.NOTHING);
  /** The minimum number of characters allowed before a line break. */
  get warichuCharsBeforeBreak(): number | NothingEnum.NOTHING;
  set warichuCharsBeforeBreak(value: number | NothingEnum.NOTHING);
  /** If true, kerns according to proportional CJK metrics in OpenType fonts. */
  get otfProportionalMetrics(): boolean | NothingEnum.NOTHING;
  set otfProportionalMetrics(value: boolean | NothingEnum.NOTHING);
  /** If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. */
  get otfHVKana(): boolean | NothingEnum.NOTHING;
  set otfHVKana(value: boolean | NothingEnum.NOTHING);
  /** If true, applies italics to half-width alphanumerics. */
  get otfRomanItalics(): boolean | NothingEnum.NOTHING;
  set otfRomanItalics(value: boolean | NothingEnum.NOTHING);
  /** If true, the line changes size when characters are scaled. */
  get scaleAffectsLineHeight(): boolean | NothingEnum.NOTHING;
  set scaleAffectsLineHeight(value: boolean | NothingEnum.NOTHING);
  /** If true, uses grid tracking to track non-Roman characters in CJK grids. */
  get cjkGridTracking(): boolean | NothingEnum.NOTHING;
  set cjkGridTracking(value: boolean | NothingEnum.NOTHING);
  /** The glyph variant to substitute for standard glyphs. */
  get glyphForm(): AlternateGlyphForms | NothingEnum.NOTHING;
  set glyphForm(value: AlternateGlyphForms | NothingEnum.NOTHING);
  /** If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph. */
  get paragraphGyoudori(): boolean | NothingEnum.NOTHING;
  set paragraphGyoudori(value: boolean | NothingEnum.NOTHING);
  /** The alignment to the frame grid or baseline grid. */
  get gridAlignment(): GridAlignment | NothingEnum.NOTHING;
  set gridAlignment(value: GridAlignment | NothingEnum.NOTHING);
  /** The manual gyoudori setting. */
  get gridGyoudori(): number | NothingEnum.NOTHING;
  set gridGyoudori(value: number | NothingEnum.NOTHING);
  /** The number of half-width characters at or below which the characters automatically run horizontally in vertical text. */
  get autoTcy(): number | NothingEnum.NOTHING;
  set autoTcy(value: number | NothingEnum.NOTHING);
  /** If true, auto tcy includes Roman characters. */
  get autoTcyIncludeRoman(): boolean | NothingEnum.NOTHING;
  set autoTcyIncludeRoman(value: boolean | NothingEnum.NOTHING);
  /** The kinsoku set that determines legitimate line breaks. */
  get kinsokuSet(): KinsokuTable | KinsokuSet | string | NothingEnum.NOTHING;
  set kinsokuSet(value: KinsokuTable | KinsokuSet | string | NothingEnum.NOTHING);
  /** The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined. */
  get kinsokuType(): KinsokuType | NothingEnum.NOTHING;
  set kinsokuType(value: KinsokuType | NothingEnum.NOTHING);
  /** The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect. */
  get kinsokuHangType(): KinsokuHangTypes | NothingEnum.NOTHING;
  set kinsokuHangType(value: KinsokuHangTypes | NothingEnum.NOTHING);
  /** If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect. */
  get bunriKinshi(): boolean | NothingEnum.NOTHING;
  set bunriKinshi(value: boolean | NothingEnum.NOTHING);
  /** The mojikumi table. For information, see mojikumi table defaults. */
  get mojikumi(): MojikumiTable | string | MojikumiTableDefaults | NothingEnum.NOTHING;
  set mojikumi(value: MojikumiTable | string | MojikumiTableDefaults | NothingEnum.NOTHING);
  /** If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers. */
  get rensuuji(): boolean | NothingEnum.NOTHING;
  set rensuuji(value: boolean | NothingEnum.NOTHING);
  /** If true, rotates Roman characters in vertical text. */
  get rotateSingleByteCharacters(): boolean | NothingEnum.NOTHING;
  set rotateSingleByteCharacters(value: boolean | NothingEnum.NOTHING);
  /** The point from which leading is measured from line to line. */
  get leadingModel(): LeadingModel | NothingEnum.NOTHING;
  set leadingModel(value: LeadingModel | NothingEnum.NOTHING);
  /** If true, ideographic spaces will not wrap to the next line like text characters. */
  get treatIdeographicSpaceAsSpace(): boolean | NothingEnum.NOTHING;
  set treatIdeographicSpaceAsSpace(value: boolean | NothingEnum.NOTHING);
  /** If true, words unassociated with a hyphenation dictionary can break to the next line on any character. */
  get allowArbitraryHyphenation(): boolean | NothingEnum.NOTHING;
  set allowArbitraryHyphenation(value: boolean | NothingEnum.NOTHING);
  /** The text after string expression for bullets. */
  get bulletsTextAfter(): string | NothingEnum.NOTHING;
  set bulletsTextAfter(value: string | NothingEnum.NOTHING);
  /** The list to be part of. */
  get appliedNumberingList(): NumberingList | NothingEnum.NOTHING;
  set appliedNumberingList(value: NumberingList | string | NothingEnum.NOTHING);
  /** The level of the paragraph. */
  get numberingLevel(): number | NothingEnum.NOTHING;
  set numberingLevel(value: number | NothingEnum.NOTHING);
  /**
   * The numeral or letter style for the number string.
   *
   * Accepts a {@link NumberingStyle} member, or the format template string InDesign stores
   * for it — `I, II, III, IV...`, `$ID/(kanji) 1,2,3,4...`. The templates are tabulated on
   * {@link NumberingStyle}.
   */
  get numberingFormat(): NumberingStyle | string | NothingEnum.NOTHING;
  set numberingFormat(value: NumberingStyle | string | NothingEnum.NOTHING);
  /** Continue the numbering at this level. */
  get numberingContinue(): boolean | NothingEnum.NOTHING;
  set numberingContinue(value: boolean | NothingEnum.NOTHING);
  /** Determines starting number in a numbered list. */
  get numberingStartAt(): number | NothingEnum.NOTHING;
  set numberingStartAt(value: number | NothingEnum.NOTHING);
  /** If true, apply the numbering restart policy. */
  get numberingApplyRestartPolicy(): boolean | NothingEnum.NOTHING;
  set numberingApplyRestartPolicy(value: boolean | NothingEnum.NOTHING);
  /** The character style to be used for the text after string. */
  get bulletsCharacterStyle(): CharacterStyle | NothingEnum.NOTHING;
  set bulletsCharacterStyle(value: CharacterStyle | string | NothingEnum.NOTHING);
  /** The character style to be used for the number string. */
  get numberingCharacterStyle(): CharacterStyle | NothingEnum.NOTHING;
  set numberingCharacterStyle(value: CharacterStyle | string | NothingEnum.NOTHING);
  /** The number string expression for numbering. */
  get numberingExpression(): string | NothingEnum.NOTHING;
  set numberingExpression(value: string | NothingEnum.NOTHING);
  /** Whether the paragraph has no list, a bulleted list, or a numbered list — see {@link ListType}. */
  get bulletsAndNumberingListType(): ListType | NothingEnum.NOTHING;
  set bulletsAndNumberingListType(value: ListType | NothingEnum.NOTHING);
  /**
   * Set Nth design axis of a variable font.
   * @param nthAxisIndex Index of design axis.
   * @param nthAxisValue Value of nth design axis.
   */
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void;
  /**
   * If true, Nth design axis of variable font is hidden.
   * @param nthAxisIndex Index of design axis.
   */
  isNthDesignAxisHidden(nthAxisIndex: number): boolean;
}


/**
 * The broadcast proxy for {@link ChangeGrepPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link ChangeGrepPreference} there.
 */
export interface ChangeGrepPreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Application)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<ChangeGrepPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ChangeGrepPreferencePlural, 'plural'>);
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
  readonly constructorName: 'ChangeGrepPreference';
  /** Resolves the proxy into the individual {@link ChangeGrepPreference} objects it stands for. */
  getElements(): ChangeGrepPreference[];
  /** The numbering-restart policy and level range for the numbered list, set through {@link NumberingRestartPolicy}'s own properties. */
  readonly numberingRestartPolicies: (NumberingRestartPolicy | NothingEnum.NOTHING)[];
  /** The bullet character, set through {@link Bullet}'s own properties (glyph, font, and style). */
  readonly bulletChar: (Bullet | NothingEnum.NOTHING)[];
  /** A collection of preferences objects. */
  readonly preferences: Preferences;
  /** The space between paragraphs using same style. */
  get sameParaStyleSpacing(): (number | Spacing | NothingEnum.NOTHING)[];
  set sameParaStyleSpacing(value: MeasurementValue | Spacing | NothingEnum.NOTHING);
  /** Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long. */
  get paragraphKashidaWidth(): (number | NothingEnum.NOTHING)[];
  set paragraphKashidaWidth(value: number | NothingEnum.NOTHING);
  /** Value of Design Axes. */
  get designAxes(): (number[] | NothingEnum.NOTHING)[];
  set designAxes(value: number[] | NothingEnum.NOTHING);
  /** The replacement ChangeGrepPreference. */
  get changeTo(): (string | NothingEnum.NOTHING)[];
  set changeTo(value: string | NothingEnum.NOTHING);
  /** The character style to search for or change to. */
  get appliedCharacterStyle(): (string | NothingEnum.NOTHING)[];
  set appliedCharacterStyle(value: string | NothingEnum.NOTHING | null | CharacterStyle);
  /** The paragraph style to search for or change to. */
  get appliedParagraphStyle(): (string | NothingEnum.NOTHING)[];
  set appliedParagraphStyle(value: string | NothingEnum.NOTHING | null | ParagraphStyle);
  /** The XML tag applied to the element. */
  get markupTag(): (string | NothingEnum.NOTHING)[];
  set markupTag(value: string | NothingEnum.NOTHING | null | XMLTag);
  /** The amount to indent the first line. */
  get firstLineIndent(): (number | NothingEnum.NOTHING)[];
  set firstLineIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The width of the left indent. */
  get leftIndent(): (number | NothingEnum.NOTHING)[];
  set leftIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The width of the right indent. */
  get rightIndent(): (number | NothingEnum.NOTHING)[];
  set rightIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The height of the paragraph space above. */
  get spaceBefore(): (number | NothingEnum.NOTHING)[];
  set spaceBefore(value: MeasurementValue | NothingEnum.NOTHING);
  /** The height of the paragraph space below. */
  get spaceAfter(): (number | NothingEnum.NOTHING)[];
  set spaceAfter(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true or set to an enumeration value, balances ragged lines. Note: Not valid with a single-line text composer. */
  get balanceRaggedLines(): (boolean | BalanceLinesStyle | NothingEnum.NOTHING)[];
  set balanceRaggedLines(value: boolean | BalanceLinesStyle | NothingEnum.NOTHING);
  /** The paragraph alignment. */
  get justification(): (Justification | NothingEnum.NOTHING)[];
  set justification(value: Justification | NothingEnum.NOTHING);
  /** The alignment to use for lines that contain a single word. */
  get singleWordJustification(): (SingleWordJustification | NothingEnum.NOTHING)[];
  set singleWordJustification(value: SingleWordJustification | NothingEnum.NOTHING);
  /** The percent of the type size to use for auto leading. (Range: 0 to 500). */
  get autoLeading(): (number | NothingEnum.NOTHING)[];
  set autoLeading(value: number | NothingEnum.NOTHING);
  /** The number of lines to drop cap. */
  get dropCapLines(): (number | NothingEnum.NOTHING)[];
  set dropCapLines(value: number | NothingEnum.NOTHING);
  /** The number of characters to drop cap. */
  get dropCapCharacters(): (number | NothingEnum.NOTHING)[];
  set dropCapCharacters(value: number | NothingEnum.NOTHING);
  /** If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames. */
  get keepLinesTogether(): (boolean | NothingEnum.NOTHING)[];
  set keepLinesTogether(value: boolean | NothingEnum.NOTHING);
  /** If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns. */
  get keepAllLinesTogether(): (boolean | NothingEnum.NOTHING)[];
  set keepAllLinesTogether(value: boolean | NothingEnum.NOTHING);
  /** The minimum number of lines to keep with the next paragraph. */
  get keepWithNext(): (number | NothingEnum.NOTHING)[];
  set keepWithNext(value: number | NothingEnum.NOTHING);
  /** The minimum number of lines to keep together in a paragraph before allowing a page break. */
  get keepFirstLines(): (number | NothingEnum.NOTHING)[];
  set keepFirstLines(value: number | NothingEnum.NOTHING);
  /** The minimum number of lines to keep together in a paragraph after a page break. */
  get keepLastLines(): (number | NothingEnum.NOTHING)[];
  set keepLastLines(value: number | NothingEnum.NOTHING);
  /** The location at which to start the paragraph. */
  get startParagraph(): (StartParagraph | NothingEnum.NOTHING)[];
  set startParagraph(value: StartParagraph | NothingEnum.NOTHING);
  /** The text composer to use to compose the text. */
  get composer(): (ComposerName | NothingEnum.NOTHING)[];
  set composer(value: ComposerName | NothingEnum.NOTHING);
  /** The amount to indent the last line in the paragraph. */
  get lastLineIndent(): (number | NothingEnum.NOTHING)[];
  set lastLineIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true. */
  get hyphenateLastWord(): (boolean | NothingEnum.NOTHING)[];
  set hyphenateLastWord(value: boolean | NothingEnum.NOTHING);
  /** Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid. */
  get dropcapDetail(): (number | NothingEnum.NOTHING)[];
  set dropcapDetail(value: number | NothingEnum.NOTHING);
  /** If true, allows the last word in a text column to be hyphenated. */
  get hyphenateAcrossColumns(): (boolean | NothingEnum.NOTHING)[];
  set hyphenateAcrossColumns(value: boolean | NothingEnum.NOTHING);
  /** If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true. */
  get keepRuleAboveInFrame(): (boolean | NothingEnum.NOTHING)[];
  set keepRuleAboveInFrame(value: boolean | NothingEnum.NOTHING);
  /** If true, ignores optical edge alignment for the paragraph. */
  get ignoreEdgeAlignment(): (boolean | NothingEnum.NOTHING)[];
  set ignoreEdgeAlignment(value: boolean | NothingEnum.NOTHING);
  /** The font applied to the ChangeGrepPreference, specified as either a font object or the name of font family. */
  get appliedFont(): (Font | NothingEnum.NOTHING)[];
  set appliedFont(value: Font | string | NothingEnum.NOTHING | null);
  /** The name of the font style. */
  get fontStyle(): (string | NothingEnum.NOTHING)[];
  set fontStyle(value: string | NothingEnum.NOTHING);
  /** The text size. */
  get pointSize(): (number | NothingEnum.NOTHING)[];
  set pointSize(value: MeasurementValue | NothingEnum.NOTHING);
  /** The leading applied to the text. */
  get leading(): (number | Leading | NothingEnum.NOTHING)[];
  set leading(value: MeasurementValue | Leading | NothingEnum.NOTHING);
  /** The type of pair kerning. */
  get kerningMethod(): (KerningMethodName | NothingEnum.NOTHING)[];
  set kerningMethod(value: KerningMethodName | NothingEnum.NOTHING);
  /** The amount by which to loosen or tighten a block of text, specified in thousands of an em. */
  get tracking(): (number | NothingEnum.NOTHING)[];
  set tracking(value: number | NothingEnum.NOTHING);
  /** How the text is capitalized — small caps, all caps, OpenType small caps, or forced lowercase — see {@link Capitalization}. */
  get capitalization(): (Capitalization | NothingEnum.NOTHING)[];
  set capitalization(value: Capitalization | NothingEnum.NOTHING);
  /** The text position relative to the baseline. */
  get position(): (Position | NothingEnum.NOTHING)[];
  set position(value: Position | NothingEnum.NOTHING);
  /** If true, underlines the text. */
  get underline(): (boolean | NothingEnum.NOTHING)[];
  set underline(value: boolean | NothingEnum.NOTHING);
  /** If true, draws a strikethrough line through the text. */
  get strikeThru(): (boolean | NothingEnum.NOTHING)[];
  set strikeThru(value: boolean | NothingEnum.NOTHING);
  /** If true, replaces specific character combinations (e.g., fl, fi) with ligature characters. */
  get ligatures(): (boolean | NothingEnum.NOTHING)[];
  set ligatures(value: boolean | NothingEnum.NOTHING);
  /** If true, keeps the text on the same line. */
  get noBreak(): (boolean | NothingEnum.NOTHING)[];
  set noBreak(value: boolean | NothingEnum.NOTHING);
  /** The horizontal scaling applied to the ChangeGrepPreference. */
  get horizontalScale(): (number | NothingEnum.NOTHING)[];
  set horizontalScale(value: number | NothingEnum.NOTHING);
  /** The vertical scaling applied to the ChangeGrepPreference. */
  get verticalScale(): (number | NothingEnum.NOTHING)[];
  set verticalScale(value: number | NothingEnum.NOTHING);
  /** The baseline shift applied to the text. */
  get baselineShift(): (number | NothingEnum.NOTHING)[];
  set baselineShift(value: MeasurementValue | NothingEnum.NOTHING);
  /** The skew angle of the ChangeGrepPreference. */
  get skew(): (number | NothingEnum.NOTHING)[];
  set skew(value: number | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the fill color of the ChangeGrepPreference. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). */
  get fillTint(): (number | NothingEnum.NOTHING)[];
  set fillTint(value: number | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the stroke color of the ChangeGrepPreference. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). */
  get strokeTint(): (number | NothingEnum.NOTHING)[];
  set strokeTint(value: number | NothingEnum.NOTHING);
  /** The stroke weight applied to the characters of the text. */
  get strokeWeight(): (number | NothingEnum.NOTHING)[];
  set strokeWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, the stroke of the characters will overprint. */
  get overprintStroke(): (boolean | NothingEnum.NOTHING)[];
  set overprintStroke(value: boolean | NothingEnum.NOTHING);
  /** If true, the fill color of the characters will overprint. */
  get overprintFill(): (boolean | NothingEnum.NOTHING)[];
  set overprintFill(value: boolean | NothingEnum.NOTHING);
  /** The figure style in OpenType fonts. */
  get otfFigureStyle(): (OTFFigureStyle | NothingEnum.NOTHING)[];
  set otfFigureStyle(value: OTFFigureStyle | NothingEnum.NOTHING);
  /** If true, uses ordinals in OpenType fonts. */
  get otfOrdinal(): (boolean | NothingEnum.NOTHING)[];
  set otfOrdinal(value: boolean | NothingEnum.NOTHING);
  /** If true, uses fractions in OpenType fonts. */
  get otfFraction(): (boolean | NothingEnum.NOTHING)[];
  set otfFraction(value: boolean | NothingEnum.NOTHING);
  /** If true, uses discretionary ligatures in OpenType fonts. */
  get otfDiscretionaryLigature(): (boolean | NothingEnum.NOTHING)[];
  set otfDiscretionaryLigature(value: boolean | NothingEnum.NOTHING);
  /** If true, uses titling forms in OpenType fonts. */
  get otfTitling(): (boolean | NothingEnum.NOTHING)[];
  set otfTitling(value: boolean | NothingEnum.NOTHING);
  /** If true, uses contextual alternate forms in OpenType fonts. */
  get otfContextualAlternate(): (boolean | NothingEnum.NOTHING)[];
  set otfContextualAlternate(value: boolean | NothingEnum.NOTHING);
  /** If true, uses swash forms in OpenType fonts. */
  get otfSwash(): (boolean | NothingEnum.NOTHING)[];
  set otfSwash(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. */
  get underlineColor(): (Swatch | NothingEnum.NOTHING)[];
  set underlineColor(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. */
  get underlineGapColor(): (Swatch | NothingEnum.NOTHING)[];
  set underlineGapColor(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The underline stroke tint (as a percentage). (Range: 0 to 100). */
  get underlineTint(): (number | NothingEnum.NOTHING)[];
  set underlineTint(value: number | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. */
  get underlineGapTint(): (number | NothingEnum.NOTHING)[];
  set underlineGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the underline stroke color will overprint. */
  get underlineOverprint(): (boolean | NothingEnum.NOTHING)[];
  set underlineOverprint(value: boolean | NothingEnum.NOTHING);
  /** If true, the gap color of the underline stroke will overprint. */
  get underlineGapOverprint(): (boolean | NothingEnum.NOTHING)[];
  set underlineGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke type of the underline stroke. */
  get underlineType(): (StrokeStyle | NothingEnum.NOTHING)[];
  set underlineType(value: StrokeStyle | string | NothingEnum.NOTHING | null);
  /** The amount by which to offset the underline from the text baseline. */
  get underlineOffset(): (number | NothingEnum.NOTHING)[];
  set underlineOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke weight of the underline stroke. */
  get underlineWeight(): (number | NothingEnum.NOTHING)[];
  set underlineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. */
  get strikeThroughColor(): (Swatch | NothingEnum.NOTHING)[];
  set strikeThroughColor(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. */
  get strikeThroughGapColor(): (Swatch | NothingEnum.NOTHING)[];
  set strikeThroughGapColor(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). */
  get strikeThroughTint(): (number | NothingEnum.NOTHING)[];
  set strikeThroughTint(value: number | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. */
  get strikeThroughGapTint(): (number | NothingEnum.NOTHING)[];
  set strikeThroughGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the strikethrough stroke will overprint. */
  get strikeThroughOverprint(): (boolean | NothingEnum.NOTHING)[];
  set strikeThroughOverprint(value: boolean | NothingEnum.NOTHING);
  /** If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. */
  get strikeThroughGapOverprint(): (boolean | NothingEnum.NOTHING)[];
  set strikeThroughGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke type of the strikethrough stroke. */
  get strikeThroughType(): (StrokeStyle | NothingEnum.NOTHING)[];
  set strikeThroughType(value: StrokeStyle | string | NothingEnum.NOTHING | null);
  /** The amount by which to offset the strikethrough stroke from the text baseline. */
  get strikeThroughOffset(): (number | NothingEnum.NOTHING)[];
  set strikeThroughOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke weight of the strikethrough stroke. */
  get strikeThroughWeight(): (number | NothingEnum.NOTHING)[];
  set strikeThroughWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): (boolean | NothingEnum.NOTHING)[];
  set otfSlashedZero(value: boolean | NothingEnum.NOTHING);
  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): (boolean | NothingEnum.NOTHING)[];
  set otfHistorical(value: boolean | NothingEnum.NOTHING);
  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): (number | NothingEnum.NOTHING)[];
  set otfStylisticSets(value: number | NothingEnum.NOTHING);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text. */
  get gradientFillLength(): (number | NothingEnum.NOTHING)[];
  set gradientFillLength(value: number | NothingEnum.NOTHING);
  /** The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180). */
  get gradientFillAngle(): (number | NothingEnum.NOTHING)[];
  set gradientFillAngle(value: number | NothingEnum.NOTHING);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text. */
  get gradientStrokeLength(): (number | NothingEnum.NOTHING)[];
  set gradientStrokeLength(value: number | NothingEnum.NOTHING);
  /** The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180). */
  get gradientStrokeAngle(): (number | NothingEnum.NOTHING)[];
  set gradientStrokeAngle(value: number | NothingEnum.NOTHING);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y]. */
  get gradientFillStart(): (number[] | NothingEnum.NOTHING)[];
  set gradientFillStart(value: number[] | NothingEnum.NOTHING);
  /** The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y]. */
  get gradientStrokeStart(): (number[] | NothingEnum.NOTHING)[];
  set gradientStrokeStart(value: number[] | NothingEnum.NOTHING);
  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): (boolean | NothingEnum.NOTHING)[];
  set otfMark(value: boolean | NothingEnum.NOTHING);
  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): (boolean | NothingEnum.NOTHING)[];
  set otfLocale(value: boolean | NothingEnum.NOTHING);
  /** Which positional form of the glyph to use (initial, medial, final, or isolated) — see {@link PositionalForms}. */
  get positionalForm(): (PositionalForms | NothingEnum.NOTHING)[];
  set positionalForm(value: PositionalForms | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink), applied as a fill color, to search for or change to. */
  get fillColor(): (string | NothingEnum.NOTHING)[];
  set fillColor(value: string | NothingEnum.NOTHING | null | Swatch);
  /** The swatch (color, gradient, tint, or mixed ink), applied as a stroke color, to search for or change to. */
  get strokeColor(): (string | NothingEnum.NOTHING)[];
  set strokeColor(value: string | NothingEnum.NOTHING | null | Swatch);
  /** The language to search for or change to. */
  get appliedLanguage(): (string | NothingEnum.NOTHING)[];
  set appliedLanguage(value: string | NothingEnum.NOTHING | null | Language | LanguageWithVendors);
  /** The amount of space to add or remove between characters, specified in thousands of an em. */
  get kerningValue(): (number | NothingEnum.NOTHING)[];
  set kerningValue(value: number | NothingEnum.NOTHING);
  /** The change conditions mode, change either replaces applied conditions or adds to applied conditions. */
  get changeConditionsMode(): (ChangeConditionsModes | NothingEnum.NOTHING)[];
  set changeConditionsMode(value: ChangeConditionsModes | NothingEnum.NOTHING);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): (number | NothingEnum.NOTHING)[];
  set miterLimit(value: number | NothingEnum.NOTHING);
  /** The stroke alignment applied to the text. */
  get strokeAlignment(): (TextStrokeAlign | NothingEnum.NOTHING)[];
  set strokeAlignment(value: TextStrokeAlign | NothingEnum.NOTHING);
  /** The stroke join type applied to the characters of the text. */
  get endJoin(): (OutlineJoin | NothingEnum.NOTHING)[];
  set endJoin(value: OutlineJoin | NothingEnum.NOTHING);
  /** The conditions to search for or change to. Specify the "nothing" enum for "Any" or an empty list for "[Unconditional]". */
  get appliedConditions(): (string[] | NothingEnum.NOTHING)[];
  set appliedConditions(value: string[] | NothingEnum.NOTHING);
  /** Whether the paragraph reads left-to-right or right-to-left — see {@link ParagraphDirectionOptions}. */
  get paragraphDirection(): (ParagraphDirectionOptions | NothingEnum.NOTHING)[];
  set paragraphDirection(value: ParagraphDirectionOptions | NothingEnum.NOTHING);
  /** The justification method for Arabic and Naskh text, including kashida behavior — see {@link ParagraphJustificationOptions}. */
  get paragraphJustification(): (ParagraphJustificationOptions | NothingEnum.NOTHING)[];
  set paragraphJustification(value: ParagraphJustificationOptions | NothingEnum.NOTHING);
  /** If true, use overlapping swash forms in OpenType fonts. */
  get otfOverlapSwash(): (boolean | NothingEnum.NOTHING)[];
  set otfOverlapSwash(value: boolean | NothingEnum.NOTHING);
  /** If true, use stylistic alternate forms in OpenType fonts. */
  get otfStylisticAlternate(): (boolean | NothingEnum.NOTHING)[];
  set otfStylisticAlternate(value: boolean | NothingEnum.NOTHING);
  /** If true, use alternate justification forms in OpenType fonts. */
  get otfJustificationAlternate(): (boolean | NothingEnum.NOTHING)[];
  set otfJustificationAlternate(value: boolean | NothingEnum.NOTHING);
  /** If true, use stretched alternate forms in OpenType fonts. */
  get otfStretchedAlternate(): (boolean | NothingEnum.NOTHING)[];
  set otfStretchedAlternate(value: boolean | NothingEnum.NOTHING);
  /** The direction of the character. */
  get characterDirection(): (CharacterDirectionOptions | NothingEnum.NOTHING)[];
  set characterDirection(value: CharacterDirectionOptions | NothingEnum.NOTHING);
  /** The keyboard direction of the character. */
  get keyboardDirection(): (CharacterDirectionOptions | NothingEnum.NOTHING)[];
  set keyboardDirection(value: CharacterDirectionOptions | NothingEnum.NOTHING);
  /** The script-specific digit glyphs used to display numbers — see {@link DigitsTypeOptions}. */
  get digitsType(): (DigitsTypeOptions | NothingEnum.NOTHING)[];
  set digitsType(value: DigitsTypeOptions | NothingEnum.NOTHING);
  /** Use of Kashidas for justification. */
  get kashidas(): (KashidasOptions | NothingEnum.NOTHING)[];
  set kashidas(value: KashidasOptions | NothingEnum.NOTHING);
  /** Position of diacriticical characters. */
  get diacriticPosition(): (DiacriticPositionOptions | NothingEnum.NOTHING)[];
  set diacriticPosition(value: DiacriticPositionOptions | NothingEnum.NOTHING);
  /** The x (horizontal) offset for diacritic adjustment. */
  get xOffsetDiacritic(): (number | NothingEnum.NOTHING)[];
  set xOffsetDiacritic(value: number | NothingEnum.NOTHING);
  /** The y (vertical) offset for diacritic adjustment. */
  get yOffsetDiacritic(): (number | NothingEnum.NOTHING)[];
  set yOffsetDiacritic(value: number | NothingEnum.NOTHING);
  /** The change case mode, changes the case of the found text. */
  get changeCaseMode(): (ChangecaseMode | NothingEnum.NOTHING)[];
  set changeCaseMode(value: ChangecaseMode | NothingEnum.NOTHING);
  /** If the first line in the paragraph should be kept with the last line of previous paragraph. */
  get keepWithPrevious(): (boolean | NothingEnum.NOTHING)[];
  set keepWithPrevious(value: boolean | NothingEnum.NOTHING);
  /** The number of columns a paragraph spans or the number of split columns. */
  get spanSplitColumnCount(): (number | SpanColumnCountOptions | NothingEnum.NOTHING)[];
  set spanSplitColumnCount(value: number | SpanColumnCountOptions | NothingEnum.NOTHING);
  /** Whether a paragraph should be a single column, span columns or split columns. */
  get spanColumnType(): (SpanColumnTypeOptions | NothingEnum.NOTHING)[];
  set spanColumnType(value: SpanColumnTypeOptions | NothingEnum.NOTHING);
  /** The inside gutter if the paragraph splits columns. */
  get splitColumnInsideGutter(): (number | NothingEnum.NOTHING)[];
  set splitColumnInsideGutter(value: MeasurementValue | NothingEnum.NOTHING);
  /** The outside gutter if the paragraph splits columns. */
  get splitColumnOutsideGutter(): (number | NothingEnum.NOTHING)[];
  set splitColumnOutsideGutter(value: MeasurementValue | NothingEnum.NOTHING);
  /** The minimum space before a span or a split column. */
  get spanColumnMinSpaceBefore(): (number | NothingEnum.NOTHING)[];
  set spanColumnMinSpaceBefore(value: MeasurementValue | NothingEnum.NOTHING);
  /** The minimum space after a span or a split column. */
  get spanColumnMinSpaceAfter(): (number | NothingEnum.NOTHING)[];
  set spanColumnMinSpaceAfter(value: MeasurementValue | NothingEnum.NOTHING);
  /** The alignment of small characters to the largest character in the line. */
  get characterAlignment(): (CharacterAlignment | NothingEnum.NOTHING)[];
  set characterAlignment(value: CharacterAlignment | NothingEnum.NOTHING);
  /** The amount of horizontal character compression. */
  get tsume(): (number | NothingEnum.NOTHING)[];
  set tsume(value: number | NothingEnum.NOTHING);
  /** The amount of space before each character. */
  get leadingAki(): (number | NothingEnum.NOTHING)[];
  set leadingAki(value: number | NothingEnum.NOTHING);
  /** The amount of space after each character. */
  get trailingAki(): (number | NothingEnum.NOTHING)[];
  set trailingAki(value: number | NothingEnum.NOTHING);
  /** The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. */
  get characterRotation(): (number | NothingEnum.NOTHING)[];
  set characterRotation(value: number | NothingEnum.NOTHING);
  /** The number of grid squares in which to arrange the text. */
  get jidori(): (number | NothingEnum.NOTHING)[];
  set jidori(value: number | NothingEnum.NOTHING);
  /** The amount (as a percentage) of shatai obliquing to apply. */
  get shataiMagnification(): (number | NothingEnum.NOTHING)[];
  set shataiMagnification(value: number | NothingEnum.NOTHING);
  /** The shatai lens angle (in degrees). */
  get shataiDegreeAngle(): (number | NothingEnum.NOTHING)[];
  set shataiDegreeAngle(value: number | NothingEnum.NOTHING);
  /** If true, applies shatai rotation. */
  get shataiAdjustRotation(): (boolean | NothingEnum.NOTHING)[];
  set shataiAdjustRotation(value: boolean | NothingEnum.NOTHING);
  /** If true, adjusts shatai tsume. */
  get shataiAdjustTsume(): (boolean | NothingEnum.NOTHING)[];
  set shataiAdjustTsume(value: boolean | NothingEnum.NOTHING);
  /** If true, makes the character horizontal in vertical text. */
  get tatechuyoko(): (boolean | NothingEnum.NOTHING)[];
  set tatechuyoko(value: boolean | NothingEnum.NOTHING);
  /** The horizontal offset for horizontal characters in vertical text. */
  get tatechuyokoXOffset(): (number | NothingEnum.NOTHING)[];
  set tatechuyokoXOffset(value: number | NothingEnum.NOTHING);
  /** The vertical offset for horizontal characters in vertical text. */
  get tatechuyokoYOffset(): (number | NothingEnum.NOTHING)[];
  set tatechuyokoYOffset(value: number | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. */
  get kentenFillColor(): (Swatch | NothingEnum.NOTHING)[];
  set kentenFillColor(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. */
  get kentenStrokeColor(): (Swatch | NothingEnum.NOTHING)[];
  set kentenStrokeColor(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The fill tint (as a percentage) of kenten characters. (Range: 0 to 100). */
  get kentenTint(): (number | NothingEnum.NOTHING)[];
  set kentenTint(value: number | NothingEnum.NOTHING);
  /** The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100). */
  get kentenStrokeTint(): (number | NothingEnum.NOTHING)[];
  set kentenStrokeTint(value: number | NothingEnum.NOTHING);
  /** The stroke weight (in points) of kenten characters. */
  get kentenWeight(): (number | NothingEnum.NOTHING)[];
  set kentenWeight(value: number | NothingEnum.NOTHING);
  /** The method of overprinting the kenten fill. */
  get kentenOverprintFill(): (AdornmentOverprint | NothingEnum.NOTHING)[];
  set kentenOverprintFill(value: AdornmentOverprint | NothingEnum.NOTHING);
  /** The method of overprinting the kenten stroke. */
  get kentenOverprintStroke(): (AdornmentOverprint | NothingEnum.NOTHING)[];
  set kentenOverprintStroke(value: AdornmentOverprint | NothingEnum.NOTHING);
  /** The style of kenten characters. */
  get kentenKind(): (KentenCharacter | NothingEnum.NOTHING)[];
  set kentenKind(value: KentenCharacter | NothingEnum.NOTHING);
  /** The distance between kenten characters and their parent characters. */
  get kentenPlacement(): (number | NothingEnum.NOTHING)[];
  set kentenPlacement(value: number | NothingEnum.NOTHING);
  /** The alignment of kenten characters relative to the parent characters. */
  get kentenAlignment(): (KentenAlignment | NothingEnum.NOTHING)[];
  set kentenAlignment(value: KentenAlignment | NothingEnum.NOTHING);
  /** The kenten position relative to the parent character. */
  get kentenPosition(): (RubyKentenPosition | NothingEnum.NOTHING)[];
  set kentenPosition(value: RubyKentenPosition | NothingEnum.NOTHING);
  /** The font to use for kenten characters. */
  get kentenFont(): (Font | NothingEnum.NOTHING)[];
  set kentenFont(value: Font | string | NothingEnum.NOTHING | null);
  /** The font style of kenten characters. */
  get kentenFontStyle(): (string | NothingEnum.NOTHING)[];
  set kentenFontStyle(value: string | NothingEnum.NOTHING);
  /** The size (in points) of kenten characters. */
  get kentenFontSize(): (number | NothingEnum.NOTHING)[];
  set kentenFontSize(value: number | NothingEnum.NOTHING);
  /** The horizontal size of kenten characters as a percent of the original size. */
  get kentenXScale(): (number | NothingEnum.NOTHING)[];
  set kentenXScale(value: number | NothingEnum.NOTHING);
  /** The vertical size of kenten charachers as a percent of the original size. */
  get kentenYScale(): (number | NothingEnum.NOTHING)[];
  set kentenYScale(value: number | NothingEnum.NOTHING);
  /** The character used for kenten. Note: Valid only when kenten kind is custom. */
  get kentenCustomCharacter(): (string | NothingEnum.NOTHING)[];
  set kentenCustomCharacter(value: string | NothingEnum.NOTHING);
  /** The character set used for the custom kenten character. Note: Valid only when kenten kind is custom. */
  get kentenCharacterSet(): (KentenCharacterSet | NothingEnum.NOTHING)[];
  set kentenCharacterSet(value: KentenCharacterSet | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. */
  get rubyFill(): (Swatch | NothingEnum.NOTHING)[];
  set rubyFill(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. */
  get rubyStroke(): (Swatch | NothingEnum.NOTHING)[];
  set rubyStroke(value: Swatch | string | NothingEnum.NOTHING | null);
  /** The tint (as a percentage) of the ruby fill color. (Range: 0 to 100). */
  get rubyTint(): (number | NothingEnum.NOTHING)[];
  set rubyTint(value: number | NothingEnum.NOTHING);
  /** The stroke weight (in points) of ruby characters. */
  get rubyWeight(): (number | NothingEnum.NOTHING)[];
  set rubyWeight(value: number | NothingEnum.NOTHING);
  /** The method of overprinting the ruby fill. */
  get rubyOverprintFill(): (AdornmentOverprint | NothingEnum.NOTHING)[];
  set rubyOverprintFill(value: AdornmentOverprint | NothingEnum.NOTHING);
  /** The method of overprinting the ruby stroke. */
  get rubyOverprintStroke(): (AdornmentOverprint | NothingEnum.NOTHING)[];
  set rubyOverprintStroke(value: AdornmentOverprint | NothingEnum.NOTHING);
  /** The stroke tint (as a percentage) of ruby characters. */
  get rubyStrokeTint(): (number | NothingEnum.NOTHING)[];
  set rubyStrokeTint(value: number | NothingEnum.NOTHING);
  /** The font applied to ruby characters. */
  get rubyFont(): (Font | NothingEnum.NOTHING)[];
  set rubyFont(value: Font | string | NothingEnum.NOTHING | null);
  /** The font style of ruby characters. */
  get rubyFontStyle(): (string | NothingEnum.NOTHING)[];
  set rubyFontStyle(value: string | NothingEnum.NOTHING);
  /** The size (in points) of ruby characters. */
  get rubyFontSize(): (number | NothingEnum.NOTHING)[];
  set rubyFontSize(value: number | NothingEnum.NOTHING);
  /** If true, uses OpenType Pro fonts for ruby. */
  get rubyOpenTypePro(): (boolean | NothingEnum.NOTHING)[];
  set rubyOpenTypePro(value: boolean | NothingEnum.NOTHING);
  /** The horizontal size of ruby characters, specified as a percent of the original size. */
  get rubyXScale(): (number | NothingEnum.NOTHING)[];
  set rubyXScale(value: number | NothingEnum.NOTHING);
  /** The vertical size of ruby characters, specified as a percent of the original size. */
  get rubyYScale(): (number | NothingEnum.NOTHING)[];
  set rubyYScale(value: number | NothingEnum.NOTHING);
  /** Whether ruby applies to the whole group of characters or to each one individually — see {@link RubyTypes}. */
  get rubyType(): (RubyTypes | NothingEnum.NOTHING)[];
  set rubyType(value: RubyTypes | NothingEnum.NOTHING);
  /** How ruby text is aligned relative to its parent characters — see {@link RubyAlignments}. */
  get rubyAlignment(): (RubyAlignments | NothingEnum.NOTHING)[];
  set rubyAlignment(value: RubyAlignments | NothingEnum.NOTHING);
  /** The position of ruby characters relative to the parent text. */
  get rubyPosition(): (RubyKentenPosition | NothingEnum.NOTHING)[];
  set rubyPosition(value: RubyKentenPosition | NothingEnum.NOTHING);
  /** The amount of horizontal space between ruby and parent characters. */
  get rubyXOffset(): (number | NothingEnum.NOTHING)[];
  set rubyXOffset(value: number | NothingEnum.NOTHING);
  /** The amount of vertical space between ruby and parent characters. */
  get rubyYOffset(): (number | NothingEnum.NOTHING)[];
  set rubyYOffset(value: number | NothingEnum.NOTHING);
  /** The ruby spacing relative to the parent text. */
  get rubyParentSpacing(): (RubyParentSpacing | NothingEnum.NOTHING)[];
  set rubyParentSpacing(value: RubyParentSpacing | NothingEnum.NOTHING);
  /** If true, auto aligns ruby. */
  get rubyAutoAlign(): (boolean | NothingEnum.NOTHING)[];
  set rubyAutoAlign(value: boolean | NothingEnum.NOTHING);
  /** If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount. */
  get rubyOverhang(): (boolean | NothingEnum.NOTHING)[];
  set rubyOverhang(value: boolean | NothingEnum.NOTHING);
  /** If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent. */
  get rubyAutoScaling(): (boolean | NothingEnum.NOTHING)[];
  set rubyAutoScaling(value: boolean | NothingEnum.NOTHING);
  /** The amount (as a percentage) to scale the parent text size to determine the ruby text size. */
  get rubyParentScalingPercent(): (number | NothingEnum.NOTHING)[];
  set rubyParentScalingPercent(value: number | NothingEnum.NOTHING);
  /** The amount by which ruby characters can overhang the parent text. */
  get rubyParentOverhangAmount(): (RubyOverhang | NothingEnum.NOTHING)[];
  set rubyParentOverhangAmount(value: RubyOverhang | NothingEnum.NOTHING);
  /** The number of digits included in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyDigits(): (number | NothingEnum.NOTHING)[];
  set rubyAutoTcyDigits(value: number | NothingEnum.NOTHING);
  /** If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyIncludeRoman(): (boolean | NothingEnum.NOTHING)[];
  set rubyAutoTcyIncludeRoman(value: boolean | NothingEnum.NOTHING);
  /** If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. */
  get rubyAutoTcyAutoScale(): (boolean | NothingEnum.NOTHING)[];
  set rubyAutoTcyAutoScale(value: boolean | NothingEnum.NOTHING);
  /** If true, turns on warichu. */
  get warichu(): (boolean | NothingEnum.NOTHING)[];
  set warichu(value: boolean | NothingEnum.NOTHING);
  /** The amount (as a percentage) to scale parent text size to determine warichu size. */
  get warichuSize(): (number | NothingEnum.NOTHING)[];
  set warichuSize(value: number | NothingEnum.NOTHING);
  /** The number of lines of warichu within a single normal line. */
  get warichuLines(): (number | NothingEnum.NOTHING)[];
  set warichuLines(value: number | NothingEnum.NOTHING);
  /** The gap between lines of warichu characters. */
  get warichuLineSpacing(): (number | NothingEnum.NOTHING)[];
  set warichuLineSpacing(value: number | NothingEnum.NOTHING);
  /** How warichu lines are aligned and justified — see {@link WarichuAlignment}. */
  get warichuAlignment(): (WarichuAlignment | NothingEnum.NOTHING)[];
  set warichuAlignment(value: WarichuAlignment | NothingEnum.NOTHING);
  /** The minimum number of characters allowed after a line break. */
  get warichuCharsAfterBreak(): (number | NothingEnum.NOTHING)[];
  set warichuCharsAfterBreak(value: number | NothingEnum.NOTHING);
  /** The minimum number of characters allowed before a line break. */
  get warichuCharsBeforeBreak(): (number | NothingEnum.NOTHING)[];
  set warichuCharsBeforeBreak(value: number | NothingEnum.NOTHING);
  /** If true, kerns according to proportional CJK metrics in OpenType fonts. */
  get otfProportionalMetrics(): (boolean | NothingEnum.NOTHING)[];
  set otfProportionalMetrics(value: boolean | NothingEnum.NOTHING);
  /** If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. */
  get otfHVKana(): (boolean | NothingEnum.NOTHING)[];
  set otfHVKana(value: boolean | NothingEnum.NOTHING);
  /** If true, applies italics to half-width alphanumerics. */
  get otfRomanItalics(): (boolean | NothingEnum.NOTHING)[];
  set otfRomanItalics(value: boolean | NothingEnum.NOTHING);
  /** If true, the line changes size when characters are scaled. */
  get scaleAffectsLineHeight(): (boolean | NothingEnum.NOTHING)[];
  set scaleAffectsLineHeight(value: boolean | NothingEnum.NOTHING);
  /** If true, uses grid tracking to track non-Roman characters in CJK grids. */
  get cjkGridTracking(): (boolean | NothingEnum.NOTHING)[];
  set cjkGridTracking(value: boolean | NothingEnum.NOTHING);
  /** The glyph variant to substitute for standard glyphs. */
  get glyphForm(): (AlternateGlyphForms | NothingEnum.NOTHING)[];
  set glyphForm(value: AlternateGlyphForms | NothingEnum.NOTHING);
  /** If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph. */
  get paragraphGyoudori(): (boolean | NothingEnum.NOTHING)[];
  set paragraphGyoudori(value: boolean | NothingEnum.NOTHING);
  /** The alignment to the frame grid or baseline grid. */
  get gridAlignment(): (GridAlignment | NothingEnum.NOTHING)[];
  set gridAlignment(value: GridAlignment | NothingEnum.NOTHING);
  /** The manual gyoudori setting. */
  get gridGyoudori(): (number | NothingEnum.NOTHING)[];
  set gridGyoudori(value: number | NothingEnum.NOTHING);
  /** The number of half-width characters at or below which the characters automatically run horizontally in vertical text. */
  get autoTcy(): (number | NothingEnum.NOTHING)[];
  set autoTcy(value: number | NothingEnum.NOTHING);
  /** If true, auto tcy includes Roman characters. */
  get autoTcyIncludeRoman(): (boolean | NothingEnum.NOTHING)[];
  set autoTcyIncludeRoman(value: boolean | NothingEnum.NOTHING);
  /** The kinsoku set that determines legitimate line breaks. */
  get kinsokuSet(): (KinsokuTable | KinsokuSet | string | NothingEnum.NOTHING)[];
  set kinsokuSet(value: KinsokuTable | KinsokuSet | string | NothingEnum.NOTHING);
  /** The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined. */
  get kinsokuType(): (KinsokuType | NothingEnum.NOTHING)[];
  set kinsokuType(value: KinsokuType | NothingEnum.NOTHING);
  /** The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect. */
  get kinsokuHangType(): (KinsokuHangTypes | NothingEnum.NOTHING)[];
  set kinsokuHangType(value: KinsokuHangTypes | NothingEnum.NOTHING);
  /** If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect. */
  get bunriKinshi(): (boolean | NothingEnum.NOTHING)[];
  set bunriKinshi(value: boolean | NothingEnum.NOTHING);
  /** The mojikumi table. For information, see mojikumi table defaults. */
  get mojikumi(): (MojikumiTable | string | MojikumiTableDefaults | NothingEnum.NOTHING)[];
  set mojikumi(value: MojikumiTable | string | MojikumiTableDefaults | NothingEnum.NOTHING);
  /** If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers. */
  get rensuuji(): (boolean | NothingEnum.NOTHING)[];
  set rensuuji(value: boolean | NothingEnum.NOTHING);
  /** If true, rotates Roman characters in vertical text. */
  get rotateSingleByteCharacters(): (boolean | NothingEnum.NOTHING)[];
  set rotateSingleByteCharacters(value: boolean | NothingEnum.NOTHING);
  /** The point from which leading is measured from line to line. */
  get leadingModel(): (LeadingModel | NothingEnum.NOTHING)[];
  set leadingModel(value: LeadingModel | NothingEnum.NOTHING);
  /** If true, ideographic spaces will not wrap to the next line like text characters. */
  get treatIdeographicSpaceAsSpace(): (boolean | NothingEnum.NOTHING)[];
  set treatIdeographicSpaceAsSpace(value: boolean | NothingEnum.NOTHING);
  /** If true, words unassociated with a hyphenation dictionary can break to the next line on any character. */
  get allowArbitraryHyphenation(): (boolean | NothingEnum.NOTHING)[];
  set allowArbitraryHyphenation(value: boolean | NothingEnum.NOTHING);
  /** The text after string expression for bullets. */
  get bulletsTextAfter(): (string | NothingEnum.NOTHING)[];
  set bulletsTextAfter(value: string | NothingEnum.NOTHING);
  /** The list to be part of. */
  get appliedNumberingList(): (NumberingList | NothingEnum.NOTHING)[];
  set appliedNumberingList(value: NumberingList | string | NothingEnum.NOTHING);
  /** The level of the paragraph. */
  get numberingLevel(): (number | NothingEnum.NOTHING)[];
  set numberingLevel(value: number | NothingEnum.NOTHING);
  /**
   * The numeral or letter style for the number string.
   *
   * Accepts a {@link NumberingStyle} member, or the format template string InDesign stores
   * for it — `I, II, III, IV...`, `$ID/(kanji) 1,2,3,4...`. The templates are tabulated on
   * {@link NumberingStyle}.
   */
  get numberingFormat(): (NumberingStyle | string | NothingEnum.NOTHING)[];
  set numberingFormat(value: NumberingStyle | string | NothingEnum.NOTHING);
  /** Continue the numbering at this level. */
  get numberingContinue(): (boolean | NothingEnum.NOTHING)[];
  set numberingContinue(value: boolean | NothingEnum.NOTHING);
  /** Determines starting number in a numbered list. */
  get numberingStartAt(): (number | NothingEnum.NOTHING)[];
  set numberingStartAt(value: number | NothingEnum.NOTHING);
  /** If true, apply the numbering restart policy. */
  get numberingApplyRestartPolicy(): (boolean | NothingEnum.NOTHING)[];
  set numberingApplyRestartPolicy(value: boolean | NothingEnum.NOTHING);
  /** The character style to be used for the text after string. */
  get bulletsCharacterStyle(): (CharacterStyle | NothingEnum.NOTHING)[];
  set bulletsCharacterStyle(value: CharacterStyle | string | NothingEnum.NOTHING);
  /** The character style to be used for the number string. */
  get numberingCharacterStyle(): (CharacterStyle | NothingEnum.NOTHING)[];
  set numberingCharacterStyle(value: CharacterStyle | string | NothingEnum.NOTHING);
  /** The number string expression for numbering. */
  get numberingExpression(): (string | NothingEnum.NOTHING)[];
  set numberingExpression(value: string | NothingEnum.NOTHING);
  /** Whether the paragraph has no list, a bulleted list, or a numbered list — see {@link ListType}. */
  get bulletsAndNumberingListType(): (ListType | NothingEnum.NOTHING)[];
  set bulletsAndNumberingListType(value: ListType | NothingEnum.NOTHING);
  /**
   * Set Nth design axis of a variable font.
   * @param nthAxisIndex Index of design axis.
   * @param nthAxisValue Value of nth design axis.
   */
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): (void)[];
  /**
   * If true, Nth design axis of variable font is hidden.
   * @param nthAxisIndex Index of design axis.
   */
  isNthDesignAxisHidden(nthAxisIndex: number): (boolean)[];
}
