/**
 * Line.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Text } from './Text';
import type { TextParent } from './_base/Parents';
import type { Mode } from './_base/Types';
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
import type { AdornmentOverprint } from './Enums/AdornmentOverprint';
import type { AlternateGlyphForms } from './Enums/AlternateGlyphForms';
import type { AnyGraphic } from './_base/Unions';
import type { AnyPageItem } from './_base/Unions';
import type { ChangecaseMode } from './Enums/ChangecaseMode';
import type { Character } from './Character';
import type { CharacterAlignment } from './Enums/CharacterAlignment';
import type { CharacterDirectionOptions } from './Enums/CharacterDirectionOptions';
import type { Characters } from './Characters';
import type { ColorSpace } from './Enums/ColorSpace';
import type { ComposerName } from './_base/Types';
import type { DiacriticPositionOptions } from './Enums/DiacriticPositionOptions';
import type { EndCap } from './Enums/EndCap';
import type { EndJoin } from './Enums/EndJoin';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { ExportFormat } from './Enums/ExportFormat';
import type { FilePath } from './_base/Types';
import type { GridAlignment } from './Enums/GridAlignment';
import type { HyperlinkTextSource } from './HyperlinkTextSource';
import type { HyphenationStyleEnum } from './Enums/HyphenationStyleEnum';
import type { InDesignEventMap } from './_base/Events';
import type { InsertionPoints } from './InsertionPoints';
import type { Justification } from './Enums/Justification';
import type { KashidasOptions } from './Enums/KashidasOptions';
import type { KentenAlignment } from './Enums/KentenAlignment';
import type { KentenCharacter } from './Enums/KentenCharacter';
import type { KentenCharacterSet } from './Enums/KentenCharacterSet';
import type { KerningMethodName } from './_base/Types';
import type { KinsokuHangTypes } from './Enums/KinsokuHangTypes';
import type { KinsokuSet } from './Enums/KinsokuSet';
import type { KinsokuTable } from './KinsokuTable';
import type { KinsokuType } from './Enums/KinsokuType';
import type { LeadingModel } from './Enums/LeadingModel';
import type { Lines } from './Lines';
import type { ListAlignment } from './Enums/ListAlignment';
import type { ListType } from './Enums/ListType';
import type { LocationOptions } from './Enums/LocationOptions';
import type { MeasurementValue } from './_base/Types';
import type { MojikumiTable } from './MojikumiTable';
import type { MojikumiTableDefaults } from './Enums/MojikumiTableDefaults';
import type { NestedGrepStyles } from './NestedGrepStyles';
import type { NestedLineStyles } from './NestedLineStyles';
import type { NestedStyles } from './NestedStyles';
import type { NumberingList } from './NumberingList';
import type { OTFFigureStyle } from './Enums/OTFFigureStyle';
import type { OutlineJoin } from './Enums/OutlineJoin';
import type { OverrideType } from './Enums/OverrideType';
import type { PDFExportPreset } from './PDFExportPreset';
import type { PageItemUnion } from './_base/Unions';
import type { PageItems } from './PageItems';
import type { ParagraphBorderBottomOriginEnum } from './Enums/ParagraphBorderBottomOriginEnum';
import type { ParagraphBorderEnum } from './Enums/ParagraphBorderEnum';
import type { ParagraphBorderTopOriginEnum } from './Enums/ParagraphBorderTopOriginEnum';
import type { ParagraphDirectionOptions } from './Enums/ParagraphDirectionOptions';
import type { ParagraphShadingBottomOriginEnum } from './Enums/ParagraphShadingBottomOriginEnum';
import type { ParagraphShadingTopOriginEnum } from './Enums/ParagraphShadingTopOriginEnum';
import type { ParagraphShadingWidthEnum } from './Enums/ParagraphShadingWidthEnum';
import type { Paragraphs } from './Paragraphs';
import type { Position } from './Enums/Position';
import type { Preferences } from './Preferences';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
import type { RangeSortOrder } from './Enums/RangeSortOrder';
import type { RubyKentenPosition } from './Enums/RubyKentenPosition';
import type { RubyOverhang } from './Enums/RubyOverhang';
import type { RubyParentSpacing } from './Enums/RubyParentSpacing';
import type { RuleWidth } from './Enums/RuleWidth';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { SingleWordJustification } from './Enums/SingleWordJustification';
import type { Spacing } from './Enums/Spacing';
import type { SpanColumnCountOptions } from './Enums/SpanColumnCountOptions';
import type { SpanColumnTypeOptions } from './Enums/SpanColumnTypeOptions';
import type { StartParagraph } from './Enums/StartParagraph';
import type { StrokeStyle } from './StrokeStyle';
import type { StyleType } from './Enums/StyleType';
import type { TabStops } from './TabStops';
import type { TextColumns } from './TextColumns';
import type { TextDuplicateReference } from './Text';
import type { TextStrokeAlign } from './Enums/TextStrokeAlign';
import type { TextStyleRanges } from './TextStyleRanges';
import type { Texts } from './Texts';
import type { Words } from './Words';
import type { XMLElement } from './XMLElement';
/**
 * A single line of text as currently composed — it changes as the text reflows.
 */
export interface Line<TParent = TextParent> {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: TParent;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Line<TParent>, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Line<TParent>, 'single'>);
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
  /**
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /**
   * The applied font. Accepts a {@link Font} object or a font-family name as a
   * `string`; pair with {@link fontStyle} to pick a specific style.
   */
  get appliedFont(): Font;
  set appliedFont(value: Font | string);
  /** The name of the font style. */
  get fontStyle(): string;
  set fontStyle(value: string);
  /** The type size. */
  get pointSize(): number;
  set pointSize(value: MeasurementValue);
  /**
   * The leading. A number is explicit leading; the {@link Leading} enumerator
   * `AUTO` selects automatic leading.
   */
  get leading(): number | Leading;
  set leading(value: MeasurementValue | Leading);
  /** The type of pair kerning. */
  get kerningMethod(): KerningMethodName;
  set kerningMethod(value: KerningMethodName);
  /** Tracking, in thousandths of an em, applied between characters. */
  get tracking(): number;
  set tracking(value: number);
  /** Whether the text renders normally, as small caps, as all caps, or using the font's OpenType small-caps forms. See {@link Capitalization}. */
  get capitalization(): Capitalization;
  set capitalization(value: Capitalization);
  /** The text position relative to the baseline. */
  get position(): Position;
  set position(value: Position);
  /** If true, underlines the text. */
  get underline(): boolean;
  set underline(value: boolean);
  /** If true, draws a strikethrough line through the text. */
  get strikeThru(): boolean;
  set strikeThru(value: boolean);
  /** If `true`, substitutes ligature glyphs (e.g. `fi`, `fl`) where available. */
  get ligatures(): boolean;
  set ligatures(value: boolean);
  /** If true, keeps the text on the same line. */
  get noBreak(): boolean;
  set noBreak(value: boolean);
  /** The baseline shift applied to the text. */
  get baselineShift(): number;
  set baselineShift(value: MeasurementValue);
  /** The figure style in OpenType fonts. */
  get otfFigureStyle(): OTFFigureStyle;
  set otfFigureStyle(value: OTFFigureStyle);
  /** If true, uses ordinals in OpenType fonts. */
  get otfOrdinal(): boolean;
  set otfOrdinal(value: boolean);
  /** If true, uses fractions in OpenType fonts. */
  get otfFraction(): boolean;
  set otfFraction(value: boolean);
  /** If true, uses discretionary ligatures in OpenType fonts. */
  get otfDiscretionaryLigature(): boolean;
  set otfDiscretionaryLigature(value: boolean);
  /** If true, uses titling forms in OpenType fonts. */
  get otfTitling(): boolean;
  set otfTitling(value: boolean);
  /** If true, uses contextual alternate forms in OpenType fonts. */
  get otfContextualAlternate(): boolean;
  set otfContextualAlternate(value: boolean);
  /** If true, uses swash forms in OpenType fonts. */
  get otfSwash(): boolean;
  set otfSwash(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. */
  get underlineColor(): Swatch;
  set underlineColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. */
  get underlineGapColor(): Swatch;
  set underlineGapColor(value: Swatch | string);
  /** The underline stroke tint (as a percentage). (Range: 0 to 100). */
  get underlineTint(): number;
  set underlineTint(value: number);
  /** The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. */
  get underlineGapTint(): number;
  set underlineGapTint(value: number);
  /** If true, the underline stroke color will overprint. */
  get underlineOverprint(): boolean;
  set underlineOverprint(value: boolean);
  /** If true, the gap color of the underline stroke will overprint. */
  get underlineGapOverprint(): boolean;
  set underlineGapOverprint(value: boolean);
  /** The stroke type of the underline stroke. */
  get underlineType(): StrokeStyle;
  set underlineType(value: StrokeStyle | string);
  /** The amount by which to offset the underline from the text baseline. */
  get underlineOffset(): number;
  set underlineOffset(value: MeasurementValue);
  /** The stroke weight of the underline stroke. */
  get underlineWeight(): number;
  set underlineWeight(value: MeasurementValue);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. */
  get strikeThroughColor(): Swatch;
  set strikeThroughColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. */
  get strikeThroughGapColor(): Swatch;
  set strikeThroughGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). */
  get strikeThroughTint(): number;
  set strikeThroughTint(value: number);
  /** The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. */
  get strikeThroughGapTint(): number;
  set strikeThroughGapTint(value: number);
  /** If true, the strikethrough stroke will overprint. */
  get strikeThroughOverprint(): boolean;
  set strikeThroughOverprint(value: boolean);
  /** If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. */
  get strikeThroughGapOverprint(): boolean;
  set strikeThroughGapOverprint(value: boolean);
  /** The stroke type of the strikethrough stroke. */
  get strikeThroughType(): StrokeStyle;
  set strikeThroughType(value: StrokeStyle | string);
  /** The amount by which to offset the strikethrough stroke from the text baseline. */
  get strikeThroughOffset(): number;
  set strikeThroughOffset(value: MeasurementValue);
  /** The stroke weight of the strikethrough stroke. */
  get strikeThroughWeight(): number;
  set strikeThroughWeight(value: MeasurementValue);
  /**
   * The applied language / spelling dictionary. Accepts a
   * {@link LanguageWithVendors} or {@link Language} object, or its name.
   */
  get appliedLanguage(): LanguageWithVendors | Language;
  set appliedLanguage(value: LanguageWithVendors | Language | string);
  /** Value of Design Axes. */
  get designAxes(): number[];
  set designAxes(value: number[]);
  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): boolean;
  set otfSlashedZero(value: boolean);
  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): boolean;
  set otfHistorical(value: boolean);
  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): number;
  set otfStylisticSets(value: number);
  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): boolean;
  set otfMark(value: boolean);
  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): boolean;
  set otfLocale(value: boolean);
  /** Which contextual glyph form — initial, medial, final, or isolated — to use for connected scripts, or `CALCULATE` to derive it automatically. See {@link PositionalForms}. */
  get positionalForm(): PositionalForms;
  set positionalForm(value: PositionalForms);
  /** If true, use overlapping swash forms in OpenType fonts. */
  get otfOverlapSwash(): boolean;
  set otfOverlapSwash(value: boolean);
  /** If true, use stylistic alternate forms in OpenType fonts. */
  get otfStylisticAlternate(): boolean;
  set otfStylisticAlternate(value: boolean);
  /** If true, use alternate justification forms in OpenType fonts. */
  get otfJustificationAlternate(): boolean;
  set otfJustificationAlternate(value: boolean);
  /** If true, use stretched alternate forms in OpenType fonts. */
  get otfStretchedAlternate(): boolean;
  set otfStretchedAlternate(value: boolean);
  /** The direction of the character. */
  get characterDirection(): CharacterDirectionOptions;
  set characterDirection(value: CharacterDirectionOptions);
  /** The keyboard direction of the character. */
  get keyboardDirection(): CharacterDirectionOptions;
  set keyboardDirection(value: CharacterDirectionOptions);
  /** Which digit glyphs — Arabic numerals, Hindi, Farsi, or another script's digits — render numbers in the text. See {@link DigitsTypeOptions}. */
  get digitsType(): DigitsTypeOptions;
  set digitsType(value: DigitsTypeOptions);
  /** Use of Kashidas for justification. */
  get kashidas(): KashidasOptions;
  set kashidas(value: KashidasOptions);
  /** Position of diacritical characters. */
  get diacriticPosition(): DiacriticPositionOptions;
  set diacriticPosition(value: DiacriticPositionOptions);
  /** The x (horizontal) offset for diacritic adjustment. */
  get xOffsetDiacritic(): number;
  set xOffsetDiacritic(value: number);
  /** The y (vertical) offset for diacritic adjustment. */
  get yOffsetDiacritic(): number;
  set yOffsetDiacritic(value: number);
  /** The alignment of small characters to the largest character in the line. */
  get characterAlignment(): CharacterAlignment;
  set characterAlignment(value: CharacterAlignment);
  /** The amount of horizontal character compression. */
  get tsume(): number;
  set tsume(value: number);
  /** The amount of space before each character. */
  get leadingAki(): number;
  set leadingAki(value: number);
  /** The amount of space after each character. */
  get trailingAki(): number;
  set trailingAki(value: number);
  /** The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. */
  get characterRotation(): number;
  set characterRotation(value: number);
  /** The number of grid squares in which to arrange the text. */
  get jidori(): number;
  set jidori(value: number);
  /** The amount (as a percentage) of shatai obliquing to apply. */
  get shataiMagnification(): number;
  set shataiMagnification(value: number);
  /** The shatai lens angle (in degrees). */
  get shataiDegreeAngle(): number;
  set shataiDegreeAngle(value: number);
  /** If true, applies shatai rotation. */
  get shataiAdjustRotation(): boolean;
  set shataiAdjustRotation(value: boolean);
  /** If true, adjusts shatai tsume. */
  get shataiAdjustTsume(): boolean;
  set shataiAdjustTsume(value: boolean);
  /** If true, makes the character horizontal in vertical text. */
  get tatechuyoko(): boolean;
  set tatechuyoko(value: boolean);
  /** The horizontal offset for horizontal characters in vertical text. */
  get tatechuyokoXOffset(): number;
  set tatechuyokoXOffset(value: number);
  /** The vertical offset for horizontal characters in vertical text. */
  get tatechuyokoYOffset(): number;
  set tatechuyokoYOffset(value: number);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. */
  get kentenFillColor(): Swatch;
  set kentenFillColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. */
  get kentenStrokeColor(): Swatch;
  set kentenStrokeColor(value: Swatch | string);
  /** The fill tint (as a percentage) of kenten characters. (Range: 0 to 100). */
  get kentenTint(): number;
  set kentenTint(value: number);
  /** The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100). */
  get kentenStrokeTint(): number;
  set kentenStrokeTint(value: number);
  /** The stroke weight (in points) of kenten characters. */
  get kentenWeight(): number;
  set kentenWeight(value: number);
  /** The method of overprinting the kenten fill. */
  get kentenOverprintFill(): AdornmentOverprint;
  set kentenOverprintFill(value: AdornmentOverprint);
  /** The method of overprinting the kenten stroke. */
  get kentenOverprintStroke(): AdornmentOverprint;
  set kentenOverprintStroke(value: AdornmentOverprint);
  /** The style of kenten characters. */
  get kentenKind(): KentenCharacter;
  set kentenKind(value: KentenCharacter);
  /** The distance between kenten characters and their parent characters. */
  get kentenPlacement(): number;
  set kentenPlacement(value: number);
  /** The alignment of kenten characters relative to the parent characters. */
  get kentenAlignment(): KentenAlignment;
  set kentenAlignment(value: KentenAlignment);
  /** The kenten position relative to the parent character. */
  get kentenPosition(): RubyKentenPosition;
  set kentenPosition(value: RubyKentenPosition);
  /** The font to use for kenten characters. */
  get kentenFont(): Font;
  set kentenFont(value: Font | string);
  /** The font style of kenten characters. */
  get kentenFontStyle(): string;
  set kentenFontStyle(value: string);
  /** The size (in points) of kenten characters. */
  get kentenFontSize(): number;
  set kentenFontSize(value: number);
  /** The horizontal size of kenten characters as a percent of the original size. */
  get kentenXScale(): number;
  set kentenXScale(value: number);
  /** The vertical size of kenten characters as a percent of the original size. */
  get kentenYScale(): number;
  set kentenYScale(value: number);
  /** The character used for kenten. Note: Valid only when kenten kind is custom. */
  get kentenCustomCharacter(): string;
  set kentenCustomCharacter(value: string);
  /** The character set used for the custom kenten character. Note: Valid only when kenten kind is custom. */
  get kentenCharacterSet(): KentenCharacterSet;
  set kentenCharacterSet(value: KentenCharacterSet);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. */
  get rubyFill(): Swatch;
  set rubyFill(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. */
  get rubyStroke(): Swatch;
  set rubyStroke(value: Swatch | string);
  /** The tint (as a percentage) of the ruby fill color. (Range: 0 to 100). */
  get rubyTint(): number;
  set rubyTint(value: number);
  /** The stroke weight (in points) of ruby characters. */
  get rubyWeight(): number;
  set rubyWeight(value: number);
  /** The method of overprinting the ruby fill. */
  get rubyOverprintFill(): AdornmentOverprint;
  set rubyOverprintFill(value: AdornmentOverprint);
  /** The method of overprinting the ruby stroke. */
  get rubyOverprintStroke(): AdornmentOverprint;
  set rubyOverprintStroke(value: AdornmentOverprint);
  /** The stroke tint (as a percentage) of ruby characters. */
  get rubyStrokeTint(): number;
  set rubyStrokeTint(value: number);
  /** The font applied to ruby characters. */
  get rubyFont(): Font;
  set rubyFont(value: Font | string);
  /** The font style of ruby characters. */
  get rubyFontStyle(): string;
  set rubyFontStyle(value: string);
  /** The size (in points) of ruby characters. */
  get rubyFontSize(): number;
  set rubyFontSize(value: number);
  /** If true, uses OpenType Pro fonts for ruby. */
  get rubyOpenTypePro(): boolean;
  set rubyOpenTypePro(value: boolean);
  /** The horizontal size of ruby characters, specified as a percent of the original size. */
  get rubyXScale(): number;
  set rubyXScale(value: number);
  /** The vertical size of ruby characters, specified as a percent of the original size. */
  get rubyYScale(): number;
  set rubyYScale(value: number);
  /** Whether ruby is assigned once to the whole character group or individually per character. See {@link RubyTypes}. */
  get rubyType(): RubyTypes;
  set rubyType(value: RubyTypes);
  /** How the ruby text aligns relative to its parent characters — left, centered, right, justified, or one of the JIS/aki spacing variants. See {@link RubyAlignments}. */
  get rubyAlignment(): RubyAlignments;
  set rubyAlignment(value: RubyAlignments);
  /** The position of ruby characters relative to the parent text. */
  get rubyPosition(): RubyKentenPosition;
  set rubyPosition(value: RubyKentenPosition);
  /** The amount of horizontal space between ruby and parent characters. */
  get rubyXOffset(): number;
  set rubyXOffset(value: number);
  /** The amount of vertical space between ruby and parent characters. */
  get rubyYOffset(): number;
  set rubyYOffset(value: number);
  /** The ruby spacing relative to the parent text. */
  get rubyParentSpacing(): RubyParentSpacing;
  set rubyParentSpacing(value: RubyParentSpacing);
  /** If true, auto aligns ruby. */
  get rubyAutoAlign(): boolean;
  set rubyAutoAlign(value: boolean);
  /** If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount. */
  get rubyOverhang(): boolean;
  set rubyOverhang(value: boolean);
  /** If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent. */
  get rubyAutoScaling(): boolean;
  set rubyAutoScaling(value: boolean);
  /** The amount (as a percentage) to scale the parent text size to determine the ruby text size. */
  get rubyParentScalingPercent(): number;
  set rubyParentScalingPercent(value: number);
  /** The amount by which ruby characters can overhang the parent text. */
  get rubyParentOverhangAmount(): RubyOverhang;
  set rubyParentOverhangAmount(value: RubyOverhang);
  /** If true, turns on warichu. */
  get warichu(): boolean;
  set warichu(value: boolean);
  /** The amount (as a percentage) to scale parent text size to determine warichu size. */
  get warichuSize(): number;
  set warichuSize(value: number);
  /** The number of lines of warichu within a single normal line. */
  get warichuLines(): number;
  set warichuLines(value: number);
  /** The gap between lines of warichu characters. */
  get warichuLineSpacing(): number;
  set warichuLineSpacing(value: number);
  /** How warichu lines align within the text frame — automatic, left/center/right, or one of the justified variants. See {@link WarichuAlignment}. */
  get warichuAlignment(): WarichuAlignment;
  set warichuAlignment(value: WarichuAlignment);
  /** The minimum number of characters allowed after a line break. */
  get warichuCharsAfterBreak(): number;
  set warichuCharsAfterBreak(value: number);
  /** The minimum number of characters allowed before a line break. */
  get warichuCharsBeforeBreak(): number;
  set warichuCharsBeforeBreak(value: number);
  /** If true, kerns according to proportional CJK metrics in OpenType fonts. */
  get otfProportionalMetrics(): boolean;
  set otfProportionalMetrics(value: boolean);
  /** If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. */
  get otfHVKana(): boolean;
  set otfHVKana(value: boolean);
  /** If true, applies italics to half-width alphanumerics. */
  get otfRomanItalics(): boolean;
  set otfRomanItalics(value: boolean);
  /** If true, the line changes size when characters are scaled. */
  get scaleAffectsLineHeight(): boolean;
  set scaleAffectsLineHeight(value: boolean);
  /** If true, uses grid tracking to track non-Roman characters in CJK grids. */
  get cjkGridTracking(): boolean;
  set cjkGridTracking(value: boolean);
  /** The glyph variant to substitute for standard glyphs. */
  get glyphForm(): AlternateGlyphForms;
  set glyphForm(value: AlternateGlyphForms);
  /** The number of digits included in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyDigits(): number;
  set rubyAutoTcyDigits(value: number);
  /** If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyIncludeRoman(): boolean;
  set rubyAutoTcyIncludeRoman(value: boolean);
  /** If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. */
  get rubyAutoTcyAutoScale(): boolean;
  set rubyAutoTcyAutoScale(value: boolean);
  /** The {@link Bullet} character used by the paragraph's bulleted list. */
  readonly bulletChar: Bullet;
  /** The {@link NumberingRestartPolicy} governing when the paragraph's list numbering restarts. */
  readonly numberingRestartPolicies: NumberingRestartPolicy;
  /** A collection of nested line styles. */
  readonly nestedLineStyles: NestedLineStyles;
  /** A collection of nested GREP styles. */
  readonly nestedGrepStyles: NestedGrepStyles;
  /** A collection of nested styles. */
  readonly nestedStyles: NestedStyles;
  /** A collection of tab stops. */
  readonly tabStops: TabStops;
  /** A collection of preferences objects. */
  readonly preferences: Preferences;
  /** The distance to offset the left edge of the paragraph. */
  get paragraphShadingLeftOffset(): number;
  set paragraphShadingLeftOffset(value: MeasurementValue | never);
  /** The distance to offset the right edge of the paragraph. */
  get paragraphShadingRightOffset(): number;
  set paragraphShadingRightOffset(value: MeasurementValue | never);
  /** The distance to offset the top edge of the paragraph. */
  get paragraphShadingTopOffset(): number;
  set paragraphShadingTopOffset(value: MeasurementValue | never);
  /** The distance to offset the bottom edge of the paragraph. */
  get paragraphShadingBottomOffset(): number;
  set paragraphShadingBottomOffset(value: MeasurementValue | never);
  /** The basis (text width or column width) used to calculate the width of the paragraph shading. */
  get paragraphShadingWidth(): ParagraphShadingWidthEnum;
  set paragraphShadingWidth(value: ParagraphShadingWidthEnum | never);
  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph shading. */
  get paragraphShadingTopOrigin(): ParagraphShadingTopOriginEnum;
  set paragraphShadingTopOrigin(value: ParagraphShadingTopOriginEnum | never);
  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph shading. */
  get paragraphShadingBottomOrigin(): ParagraphShadingBottomOriginEnum;
  set paragraphShadingBottomOrigin(value: ParagraphShadingBottomOriginEnum | never);
  /** If true, forces the shading of the paragraph to be clipped with respect to frame shape. */
  get paragraphShadingClipToFrame(): boolean;
  set paragraphShadingClipToFrame(value: boolean | never);
  /** If true, suppress printing of the shading of the paragraph. */
  get paragraphShadingSuppressPrinting(): boolean;
  set paragraphShadingSuppressPrinting(value: boolean | never);
  /** If true, the paragraph shading is On. */
  get paragraphShadingOn(): boolean;
  set paragraphShadingOn(value: boolean | never);
  /** If true, the paragraph shading will overprint. */
  get paragraphShadingOverprint(): boolean;
  set paragraphShadingOverprint(value: boolean | never);
  /** The tint (as a percentage) of the paragraph shading. (Range: 0 to 100) */
  get paragraphShadingTint(): number;
  set paragraphShadingTint(value: number | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph shading. */
  get paragraphShadingColor(): Swatch;
  set paragraphShadingColor(value: Swatch | string | never);
  /** If true, the paragraph border is on. */
  get paragraphBorderOn(): boolean;
  set paragraphBorderOn(value: boolean | never);
  /** If true, the paragraph border will overprint. */
  get paragraphBorderOverprint(): boolean;
  set paragraphBorderOverprint(value: boolean | never);
  /** The tint (as a percentage) of the paragraph stroke. (Range: 0 to 100) */
  get paragraphBorderTint(): number;
  set paragraphBorderTint(value: number | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph stroke. */
  get paragraphBorderColor(): Swatch;
  set paragraphBorderColor(value: Swatch | string | never);
  /** If true, the paragraph border gap will overprint. Note: Valid only when border type is not solid. */
  get paragraphBorderGapOverprint(): boolean;
  set paragraphBorderGapOverprint(value: boolean | never);
  /** The tint (as a percentage) of the paragraph border gap. Note: Valid only when the border type is not solid. (Range: 0 to 100) */
  get paragraphBorderGapTint(): number;
  set paragraphBorderGapTint(value: number | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph border gap. Note: Valid only when the border type is not solid. */
  get paragraphBorderGapColor(): Swatch;
  set paragraphBorderGapColor(value: Swatch | string | never);
  /** The type of the border for the paragraph. */
  get paragraphBorderType(): StrokeStyle;
  set paragraphBorderType(value: StrokeStyle | string | never);
  /** The left line weight of the border of paragraph. */
  get paragraphBorderLeftLineWeight(): number;
  set paragraphBorderLeftLineWeight(value: MeasurementValue | never);
  /** The top line weight of the border of paragraph. */
  get paragraphBorderTopLineWeight(): number;
  set paragraphBorderTopLineWeight(value: MeasurementValue | never);
  /** The right line weight of the border of paragraph. */
  get paragraphBorderRightLineWeight(): number;
  set paragraphBorderRightLineWeight(value: MeasurementValue | never);
  /** The bottom line weight of the border of paragraph. */
  get paragraphBorderBottomLineWeight(): number;
  set paragraphBorderBottomLineWeight(value: MeasurementValue | never);
  /** The end shape of an open path. */
  get paragraphBorderStrokeEndCap(): EndCap;
  set paragraphBorderStrokeEndCap(value: EndCap | never);
  /** The corner join applied to the ParagraphStyle. */
  get paragraphBorderStrokeEndJoin(): EndJoin;
  set paragraphBorderStrokeEndJoin(value: EndJoin | never);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphShadingTopLeftCornerRadius(): number;
  set paragraphShadingTopLeftCornerRadius(value: MeasurementValue | never);
  /**
   * The corner shape applied to the top-left corner of a rectangular shading
   * area, and to all corners of a non-rectangular one.
   *
   * A {@link CornerOptions} radius is set explicitly, unlike the rounded or
   * beveled effect of a stroke's end join, which follows the stroke weight.
   */
  get paragraphShadingTopLeftCornerOption(): CornerOptions;
  set paragraphShadingTopLeftCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerRadius(): number;
  set paragraphShadingTopRightCornerRadius(value: MeasurementValue | never);
  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerOption(): CornerOptions;
  set paragraphShadingTopRightCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphShadingBottomLeftCornerRadius(): number;
  set paragraphShadingBottomLeftCornerRadius(value: MeasurementValue | never);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphShadingBottomLeftCornerOption(): CornerOptions;
  set paragraphShadingBottomLeftCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphShadingBottomRightCornerRadius(): number;
  set paragraphShadingBottomRightCornerRadius(value: MeasurementValue | never);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphShadingBottomRightCornerOption(): CornerOptions;
  set paragraphShadingBottomRightCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphBorderTopLeftCornerRadius(): number;
  set paragraphBorderTopLeftCornerRadius(value: MeasurementValue | never);
  /**
   * The corner shape applied to the top-left corner of a rectangular border,
   * and to all corners of a non-rectangular one.
   *
   * Unlike {@link paragraphBorderStrokeEndJoin}, a {@link CornerOptions}
   * radius is set explicitly rather than derived from the stroke weight.
   */
  get paragraphBorderTopLeftCornerOption(): CornerOptions;
  set paragraphBorderTopLeftCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerRadius(): number;
  set paragraphBorderTopRightCornerRadius(value: MeasurementValue | never);
  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerOption(): CornerOptions;
  set paragraphBorderTopRightCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphBorderBottomLeftCornerRadius(): number;
  set paragraphBorderBottomLeftCornerRadius(value: MeasurementValue | never);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphBorderBottomLeftCornerOption(): CornerOptions;
  set paragraphBorderBottomLeftCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphBorderBottomRightCornerRadius(): number;
  set paragraphBorderBottomRightCornerRadius(value: MeasurementValue | never);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphBorderBottomRightCornerOption(): CornerOptions;
  set paragraphBorderBottomRightCornerOption(value: CornerOptions | never);
  /** The basis (text width or column width) used to calculate the width of the paragraph border. */
  get paragraphBorderWidth(): ParagraphBorderEnum;
  set paragraphBorderWidth(value: ParagraphBorderEnum | never);
  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph border. */
  get paragraphBorderTopOrigin(): ParagraphBorderTopOriginEnum;
  set paragraphBorderTopOrigin(value: ParagraphBorderTopOriginEnum | never);
  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph border. */
  get paragraphBorderBottomOrigin(): ParagraphBorderBottomOriginEnum;
  set paragraphBorderBottomOrigin(value: ParagraphBorderBottomOriginEnum | never);
  /** The distance to offset the left edge of the paragraph border. */
  get paragraphBorderLeftOffset(): number;
  set paragraphBorderLeftOffset(value: MeasurementValue | never);
  /** The distance to offset the right edge of the paragraph border. */
  get paragraphBorderRightOffset(): number;
  set paragraphBorderRightOffset(value: MeasurementValue | never);
  /** The distance to offset the top edge of the paragraph border. */
  get paragraphBorderTopOffset(): number;
  set paragraphBorderTopOffset(value: MeasurementValue | never);
  /** The distance to offset the bottom edge of the paragraph border. */
  get paragraphBorderBottomOffset(): number;
  set paragraphBorderBottomOffset(value: MeasurementValue | never);
  /** If true, then paragraph border is also displayed at the points where the paragraph splits across frames or columns. */
  get paragraphBorderDisplayIfSplits(): boolean;
  set paragraphBorderDisplayIfSplits(value: boolean | never);
  /** The hyphenation style chosen for the provider. */
  get providerHyphenationStyle(): HyphenationStyleEnum;
  set providerHyphenationStyle(value: HyphenationStyleEnum | never);
  /** If true, consecutive para borders with completely similar properties are merged. */
  get mergeConsecutiveParaBorders(): boolean;
  set mergeConsecutiveParaBorders(value: boolean | never);
  /** The space between paragraphs using same style. */
  get sameParaStyleSpacing(): number | Spacing;
  set sameParaStyleSpacing(value: MeasurementValue | Spacing | never);
  /** Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long */
  get paragraphKashidaWidth(): number;
  set paragraphKashidaWidth(value: number | never);
  /** If true, aligns the baseline of the text to the baseline grid. */
  get alignToBaseline(): boolean;
  set alignToBaseline(value: boolean | never);
  /** First-line indent, relative to {@link leftIndent}. Negative values hang. */
  get firstLineIndent(): number;
  set firstLineIndent(value: MeasurementValue | never);
  /** The width of the left indent. */
  get leftIndent(): number;
  set leftIndent(value: MeasurementValue | never);
  /** The width of the right indent. */
  get rightIndent(): number;
  set rightIndent(value: MeasurementValue | never);
  /** The height of the paragraph space above. */
  get spaceBefore(): number;
  set spaceBefore(value: MeasurementValue | never);
  /** The height of the paragraph space below. */
  get spaceAfter(): number;
  set spaceAfter(value: MeasurementValue | never);
  /**
   * Balances ragged lines. `true` uses the default style; a
   * {@link BalanceLinesStyle} value selects a specific style. Ignored by the
   * single-line composer.
   */
  get balanceRaggedLines(): boolean | BalanceLinesStyle;
  set balanceRaggedLines(value: boolean | BalanceLinesStyle | never);
  /** Horizontal alignment of the paragraph's lines. */
  get justification(): Justification;
  set justification(value: Justification | never);
  /** The alignment to use for lines that contain a single word. */
  get singleWordJustification(): SingleWordJustification;
  set singleWordJustification(value: SingleWordJustification | never);
  /** The percent of the type size to use for auto leading. (Range: 0 to 500). */
  get autoLeading(): number;
  set autoLeading(value: number | never);
  /** The number of lines to drop cap. */
  get dropCapLines(): number;
  set dropCapLines(value: number | never);
  /** The number of characters to drop cap. */
  get dropCapCharacters(): number;
  set dropCapCharacters(value: number | never);
  /** If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames. */
  get keepLinesTogether(): boolean;
  set keepLinesTogether(value: boolean | never);
  /** If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns. */
  get keepAllLinesTogether(): boolean;
  set keepAllLinesTogether(value: boolean | never);
  /** The minimum number of lines to keep with the next paragraph. */
  get keepWithNext(): number;
  set keepWithNext(value: number | never);
  /** The minimum number of lines to keep together in a paragraph before allowing a page break. */
  get keepFirstLines(): number;
  set keepFirstLines(value: number | never);
  /** The minimum number of lines to keep together in a paragraph after a page break. */
  get keepLastLines(): number;
  set keepLastLines(value: number | never);
  /** The location at which to start the paragraph. */
  get startParagraph(): StartParagraph;
  set startParagraph(value: StartParagraph | never);
  /** The text composer to use to compose the text. */
  get composer(): ComposerName;
  set composer(value: ComposerName | never);
  /** The minimum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get minimumWordSpacing(): number;
  set minimumWordSpacing(value: number | never);
  /** The maximum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get maximumWordSpacing(): number;
  set maximumWordSpacing(value: number | never);
  /** The desired word spacing, specified as a percentage of the font word space value. (Range: 0 to 1000) */
  get desiredWordSpacing(): number;
  set desiredWordSpacing(value: number | never);
  /** The minimum letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get minimumLetterSpacing(): number;
  set minimumLetterSpacing(value: number | never);
  /** The maximum letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get maximumLetterSpacing(): number;
  set maximumLetterSpacing(value: number | never);
  /** The desired letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) */
  get desiredLetterSpacing(): number;
  set desiredLetterSpacing(value: number | never);
  /** The minimum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get minimumGlyphScaling(): number;
  set minimumGlyphScaling(value: number | never);
  /** The maximum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get maximumGlyphScaling(): number;
  set maximumGlyphScaling(value: number | never);
  /** The desired width (as a percentage) of individual characters. (Range: 50 to 200) */
  get desiredGlyphScaling(): number;
  set desiredGlyphScaling(value: number | never);
  /** If true, places a rule above the paragraph. */
  get ruleAbove(): boolean;
  set ruleAbove(value: boolean | never);
  /** If true, the paragraph rule above will overprint. */
  get ruleAboveOverprint(): boolean;
  set ruleAboveOverprint(value: boolean | never);
  /** The line weight of the rule above. */
  get ruleAboveLineWeight(): number;
  set ruleAboveLineWeight(value: MeasurementValue | never);
  /** The tint (as a percentage) of the paragraph rule above. (Range: 0 to 100) */
  get ruleAboveTint(): number;
  set ruleAboveTint(value: number | never);
  /** The amount to offset the paragraph rule above from the baseline of the first line the paragraph. */
  get ruleAboveOffset(): number;
  set ruleAboveOffset(value: MeasurementValue | never);
  /** The distance to indent the left edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveLeftIndent(): number;
  set ruleAboveLeftIndent(value: MeasurementValue | never);
  /** The distance to indent the right edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveRightIndent(): number;
  set ruleAboveRightIndent(value: MeasurementValue | never);
  /** The basis (text width or column width) used to calculate the width of the paragraph rule above. */
  get ruleAboveWidth(): RuleWidth;
  set ruleAboveWidth(value: RuleWidth | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule above. */
  get ruleAboveColor(): Swatch;
  set ruleAboveColor(value: Swatch | string | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule above. Note: Valid only when the paragraph rule above type is not solid. */
  get ruleAboveGapColor(): Swatch;
  set ruleAboveGapColor(value: Swatch | string | never);
  /** The tint (as a percentage) of the stroke gap color of the paragraph rule. (Range: 0 to 100) Note: Valid only when the rule above type is not solid. */
  get ruleAboveGapTint(): number;
  set ruleAboveGapTint(value: number | never);
  /** If true, the stroke gap of the paragraph rule above will overprint. Note: Valid only the rule above type is not solid. */
  get ruleAboveGapOverprint(): boolean;
  set ruleAboveGapOverprint(value: boolean | never);
  /** The stroke type of the rule above the paragraph. */
  get ruleAboveType(): StrokeStyle;
  set ruleAboveType(value: StrokeStyle | string | never);
  /** If true, applies a paragraph rule below. */
  get ruleBelow(): boolean;
  set ruleBelow(value: boolean | never);
  /** The line weight of the rule below. */
  get ruleBelowLineWeight(): number;
  set ruleBelowLineWeight(value: MeasurementValue | never);
  /** The tint (as a percentage) of the paragraph rule below. (Range: 0 to 100) */
  get ruleBelowTint(): number;
  set ruleBelowTint(value: number | never);
  /** The amount to offset the the paragraph rule below from the baseline of the last line of the paragraph. */
  get ruleBelowOffset(): number;
  set ruleBelowOffset(value: MeasurementValue | never);
  /** The distance to indent the left edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowLeftIndent(): number;
  set ruleBelowLeftIndent(value: MeasurementValue | never);
  /** The distance to indent the right edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowRightIndent(): number;
  set ruleBelowRightIndent(value: MeasurementValue | never);
  /** The basis (text width or column width) used to calculate the width of the paragraph rule below. */
  get ruleBelowWidth(): RuleWidth;
  set ruleBelowWidth(value: RuleWidth | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule below. */
  get ruleBelowColor(): Swatch;
  set ruleBelowColor(value: Swatch | string | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule below. Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapColor(): Swatch;
  set ruleBelowGapColor(value: Swatch | string | never);
  /** The tint (as a percentage) of the stroke gap color of the paragraph rule below. (Range: 0 to 100) Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapTint(): number;
  set ruleBelowGapTint(value: number | never);
  /** The stroke type of the rule below the paragraph. */
  get ruleBelowType(): StrokeStyle;
  set ruleBelowType(value: StrokeStyle | string | never);
  /** If true, allows hyphenation of capitalized words. */
  get hyphenateCapitalizedWords(): boolean;
  set hyphenateCapitalizedWords(value: boolean | never);
  /** If true, allows hyphenation. */
  get hyphenation(): boolean;
  set hyphenation(value: boolean | never);
  /** The minimum number of letters at the end of a word that can be broken by a hyphen. */
  get hyphenateBeforeLast(): number;
  set hyphenateBeforeLast(value: number | never);
  /** The minimum number of letters at the beginning of a word that can be broken by a hyphen. */
  get hyphenateAfterFirst(): number;
  set hyphenateAfterFirst(value: number | never);
  /** The minimum number of letters a word must have in order to qualify for hyphenation. */
  get hyphenateWordsLongerThan(): number;
  set hyphenateWordsLongerThan(value: number | never);
  /** The maximum number of hyphens that can appear on consecutive lines. To specify unlimited consecutive lines, use zero. */
  get hyphenateLadderLimit(): number;
  set hyphenateLadderLimit(value: number | never);
  /** The amount of white space allowed at the end of a line of non-justified text before hyphenation begins. Note: Valid when composer is single-line composer. */
  get hyphenationZone(): number;
  set hyphenationZone(value: MeasurementValue | never);
  /** The relative desirability of better spacing vs. fewer hyphens. A lower value results in greater use of hyphens. (Range: 0 to 100) */
  get hyphenWeight(): number;
  set hyphenWeight(value: number | never);
  /** The character style to apply to the drop cap. */
  get dropCapStyle(): CharacterStyle;
  set dropCapStyle(value: CharacterStyle | string | never);
  /** The amount to indent the last line in the paragraph. */
  get lastLineIndent(): number;
  set lastLineIndent(value: MeasurementValue | never);
  /** If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true. */
  get hyphenateLastWord(): boolean;
  set hyphenateLastWord(value: boolean | never);
  /** If the first line in the paragraph should be kept with the last line of previous paragraph. */
  get keepWithPrevious(): boolean;
  set keepWithPrevious(value: boolean | never);
  /** The number of columns a paragraph spans or the number of split columns. */
  get spanSplitColumnCount(): number | SpanColumnCountOptions;
  set spanSplitColumnCount(value: number | SpanColumnCountOptions | never);
  /** Whether a paragraph should be a single column, span columns or split columns */
  get spanColumnType(): SpanColumnTypeOptions;
  set spanColumnType(value: SpanColumnTypeOptions | never);
  /** The inside gutter if the paragraph splits columns */
  get splitColumnInsideGutter(): number;
  set splitColumnInsideGutter(value: MeasurementValue | never);
  /** The outside gutter if the paragraph splits columns */
  get splitColumnOutsideGutter(): number;
  set splitColumnOutsideGutter(value: MeasurementValue | never);
  /** The minimum space before a span or a split column */
  get spanColumnMinSpaceBefore(): number;
  set spanColumnMinSpaceBefore(value: MeasurementValue | never);
  /** The minimum space after a span or a split column */
  get spanColumnMinSpaceAfter(): number;
  set spanColumnMinSpaceAfter(value: MeasurementValue | never);
  /** If true, the rule below will overprint. */
  get ruleBelowOverprint(): boolean;
  set ruleBelowOverprint(value: boolean | never);
  /** If true, the gap color of the rule below will overprint. */
  get ruleBelowGapOverprint(): boolean;
  set ruleBelowGapOverprint(value: boolean | never);
  /** Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid. */
  get dropcapDetail(): number;
  set dropcapDetail(value: number | never);
  /** If true, allows the last word in a text column to be hyphenated. */
  get hyphenateAcrossColumns(): boolean;
  set hyphenateAcrossColumns(value: boolean | never);
  /** If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true. */
  get keepRuleAboveInFrame(): boolean;
  set keepRuleAboveInFrame(value: boolean | never);
  /** If true, ignores optical edge alignment for the paragraph. */
  get ignoreEdgeAlignment(): boolean;
  set ignoreEdgeAlignment(value: boolean | never);
  /** Whether the paragraph reads left-to-right or right-to-left. */
  get paragraphDirection(): ParagraphDirectionOptions;
  set paragraphDirection(value: ParagraphDirectionOptions | never);
  /** The justification method for Arabic-script text — the default, or one of the Naskh/Kashida variants. See {@link ParagraphJustificationOptions}. */
  get paragraphJustification(): ParagraphJustificationOptions;
  set paragraphJustification(value: ParagraphJustificationOptions | never);
  /**
   * The paragraph's tab stops, as an array of property-name/value pair arrays.
   *
   * Assigning replaces the whole list; there is no way to add a single stop
   * through this property. The individual {@link TabStop} objects are reachable
   * through {@link tabStops}.
   */
  get tabList(): object[];
  set tabList(value: PropertiesSetter<TabStop>[] | never);
  /** If true, aligns only the first line to the frame grid or baseline grid. If false, aligns all lines to the grid. */
  get gridAlignFirstLineOnly(): boolean;
  set gridAlignFirstLineOnly(value: boolean | never);
  /** The alignment to the frame grid or baseline grid. */
  get gridAlignment(): GridAlignment;
  set gridAlignment(value: GridAlignment | never);
  /** The manual gyoudori setting. */
  get gridGyoudori(): number;
  set gridGyoudori(value: number | never);
  /** The number of half-width characters at or below which the characters automatically run horizontally in vertical text. */
  get autoTcy(): number;
  set autoTcy(value: number | never);
  /** If true, auto tcy includes Roman characters. */
  get autoTcyIncludeRoman(): boolean;
  set autoTcyIncludeRoman(value: boolean | never);
  /** The kinsoku set that determines legitimate line breaks. */
  kinsokuSet: KinsokuTable | KinsokuSet | string;
  /** The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined. */
  get kinsokuType(): KinsokuType;
  set kinsokuType(value: KinsokuType | never);
  /** The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect. */
  get kinsokuHangType(): KinsokuHangTypes;
  set kinsokuHangType(value: KinsokuHangTypes | never);
  /** If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect. */
  get bunriKinshi(): boolean;
  set bunriKinshi(value: boolean | never);
  /** The mojikumi table. For information, see mojikumi table defaults. */
  mojikumi: MojikumiTable | string | MojikumiTableDefaults;
  /** If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers. */
  get rensuuji(): boolean;
  set rensuuji(value: boolean | never);
  /** If true, rotates Roman characters in vertical text. */
  get rotateSingleByteCharacters(): boolean;
  set rotateSingleByteCharacters(value: boolean | never);
  /** The point from which leading is measured from line to line. */
  get leadingModel(): LeadingModel;
  set leadingModel(value: LeadingModel | never);
  /** If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph. */
  get paragraphGyoudori(): boolean;
  set paragraphGyoudori(value: boolean | never);
  /** If true, ideographic spaces will not wrap to the next line like text characters. */
  get treatIdeographicSpaceAsSpace(): boolean;
  set treatIdeographicSpaceAsSpace(value: boolean | never);
  /** If true, words unassociated with a hyphenation dictionary can break to the next line on any character. */
  get allowArbitraryHyphenation(): boolean;
  set allowArbitraryHyphenation(value: boolean | never);
  /** List type for bullets and numbering. */
  get bulletsAndNumberingListType(): ListType;
  set bulletsAndNumberingListType(value: ListType | never);
  /** The character style to be used for the text after string. */
  get bulletsCharacterStyle(): CharacterStyle;
  set bulletsCharacterStyle(value: CharacterStyle | string | never);
  /** The character style to be used for the number string. */
  get numberingCharacterStyle(): CharacterStyle;
  set numberingCharacterStyle(value: CharacterStyle | string | never);
  /** The number string expression for numbering. */
  get numberingExpression(): string;
  set numberingExpression(value: string | never);
  /** The text after string expression for bullets. */
  get bulletsTextAfter(): string;
  set bulletsTextAfter(value: string | never);
  /** The list to be part of. */
  get appliedNumberingList(): NumberingList;
  set appliedNumberingList(value: NumberingList | string | never);
  /** The level of the paragraph. */
  get numberingLevel(): number;
  set numberingLevel(value: number | never);
  /**
   * The numeral or letter style for the number string.
   *
   * Accepts a {@link NumberingStyle} member, or the format template string InDesign stores
   * for it — `I, II, III, IV...`, `$ID/(kanji) 1,2,3,4...`. The templates are tabulated on
   * {@link NumberingStyle}.
   */
  get numberingFormat(): NumberingStyle | string;
  set numberingFormat(value: NumberingStyle | string | never);
  /** Continue the numbering at this level. */
  get numberingContinue(): boolean;
  set numberingContinue(value: boolean | never);
  /** Determines starting number in a numbered list. */
  get numberingStartAt(): number;
  set numberingStartAt(value: number | never);
  /** If true, apply the numbering restart policy. */
  get numberingApplyRestartPolicy(): boolean;
  set numberingApplyRestartPolicy(value: boolean | never);
  /** The alignment of the bullet character. */
  get bulletsAlignment(): ListAlignment;
  set bulletsAlignment(value: ListAlignment | never);
  /** The alignment of the number. */
  get numberingAlignment(): ListAlignment;
  set numberingAlignment(value: ListAlignment | never);
  /** Horizontal scaling of the glyphs, as a percentage. */
  get horizontalScale(): number;
  set horizontalScale(value: number);
  /** Vertical scaling of the glyphs, as a percentage. */
  get verticalScale(): number;
  set verticalScale(value: number);
  /** Skew (false-italic) angle applied to the glyphs, in degrees. */
  get skew(): number;
  set skew(value: number);
  /** The tint (as a percentage, 0–100) of the fill color. Use `-1` to use the inherited or overridden value instead of a specific tint. */
  get fillTint(): number;
  set fillTint(value: number);
  /** The tint (as a percentage, 0–100) of the stroke color. Use `-1` to use the inherited or overridden value instead of a specific tint. */
  get strokeTint(): number;
  set strokeTint(value: number);
  /** The stroke weight applied to the characters of the text. */
  get strokeWeight(): number;
  set strokeWeight(value: MeasurementValue);
  /** If true, the stroke of the characters will overprint. */
  get overprintStroke(): boolean;
  set overprintStroke(value: boolean);
  /** If true, the fill color of the characters will overprint. */
  get overprintFill(): boolean;
  set overprintFill(value: boolean);
  /**
   * Swatch applied to the fill of the text. Accepts a {@link Swatch}
   * (or a {@link Color}, {@link Tint}, {@link Gradient}, or {@link MixedInk})
   * or its name.
   */
  get fillColor(): Swatch;
  set fillColor(value: Swatch | string);
  /** Swatch applied to the stroke of the text. Accepts a {@link Swatch} or its name. */
  get strokeColor(): Swatch;
  set strokeColor(value: Swatch | string);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text. */
  get gradientFillLength(): number;
  set gradientFillLength(value: number);
  /** The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180). */
  get gradientFillAngle(): number;
  set gradientFillAngle(value: number);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text. */
  get gradientStrokeLength(): number;
  set gradientStrokeLength(value: number);
  /** The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180). */
  get gradientStrokeAngle(): number;
  set gradientStrokeAngle(value: number);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y]. */
  get gradientFillStart(): number[];
  set gradientFillStart(value: number[]);
  /** The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y]. */
  get gradientStrokeStart(): number[];
  set gradientStrokeStart(value: number[]);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): number;
  set miterLimit(value: number);
  /** The stroke alignment applied to the text. */
  get strokeAlignment(): TextStrokeAlign;
  set strokeAlignment(value: TextStrokeAlign);
  /** The stroke join type applied to the characters of the text. */
  get endJoin(): OutlineJoin;
  set endJoin(value: OutlineJoin);
  /** A collection of text objects. */
  readonly texts: Texts<TParent>;
  /** A collection of characters. */
  readonly characters: Characters<TParent>;
  /** A collection of words. */
  readonly words: Words<TParent>;
  /** A collection of lines. */
  readonly lines: Lines<TParent>;
  /** A collection of text columns. */
  readonly textColumns: TextColumns<TParent>;
  /** A collection of paragraphs. */
  readonly paragraphs: Paragraphs<TParent>;
  /** A collection of insertion points. */
  readonly insertionPoints: InsertionPoints<TParent>;
  /** A collection of text style ranges. */
  readonly textStyleRanges: TextStyleRanges<TParent>;
  /**
   * Converts text to outlines — one polygon per line of text. A single letter
   * with no internal spaces or detached parts becomes a single-path polygon.
   * Some fonts block outline creation; check `allowOutlines` first.
   * @param deleteOriginal If `true`, deletes the original text. If `false`, adds the outlines as new objects on top of it.
   */
  createOutlines(deleteOriginal?: boolean): PageItem[];
  /**
   * Finds text that matches the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findText(reverseOrder?: boolean): Text[];
  /**
   * Finds text that matches the find what value and replaces the text with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeText(reverseOrder?: boolean): Text[];
  /**
   * Finds text that matches the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findGrep(reverseOrder?: boolean): Text[];
  /**
   * Finds text that matches the find what value and replaces the text with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): Text[];
  /**
   * Finds glyphs that match the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findGlyph(reverseOrder?: boolean): Text[];
  /**
   * Finds glyphs that match the find what value and replaces the glyphs with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeGlyph(reverseOrder?: boolean): Text[];
  /**
   * Finds text that matches the transliterate find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): Text[];
  /**
   * Finds text matching the transliterate find what value and replaces it with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): Text[];
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
  /** {@link EndnoteRanges} covered by this range. */
  readonly endnoteRanges: EndnoteRanges;
  /** The {@link ParagraphStyle} applied to the range. Setting it does not clear existing local overrides — use {@link clearOverrides} for that. */
  get appliedParagraphStyle(): ParagraphStyle;
  set appliedParagraphStyle(value: ParagraphStyle | string);
  /** The {@link CharacterStyle} applied to the range. */
  get appliedCharacterStyle(): CharacterStyle;
  set appliedCharacterStyle(value: CharacterStyle | string);
  /** The OpenType features in effect, as `[featureTag, value]` pairs. Assigning replaces the whole list. */
  get opentypeFeatures(): unknown[][];
  set opentypeFeatures(value: unknown[][]);
  /** Whether ruby (phonetic annotation) is switched on for the range. */
  get rubyFlag(): boolean;
  set rubyFlag(value: boolean);
  /** The ruby annotation text attached to the range. */
  get rubyString(): string;
  set rubyString(value: string);
  /**
   * Changes the case of the text.
   * @param using Uppercase, lowercase, title case, or sentence case — see {@link ChangecaseMode}.
   */
  changecase(using: ChangecaseMode): void;
  /**
   * Clears the specified types of override.
   * @param overridesToClear The types of override to clear.
   */
  clearOverrides(overridesToClear?: OverrideType): void;
  /** Converts bullets and numbering in the range to literal text. */
  convertBulletsAndNumberingToText(): void;
  /** Forces the text to recompose, applying any pending composition changes. */
  recompose(): void;
  /** The number of characters spanned by this range. */
  readonly length: number;
  /** The {@link XMLItem} elements (XML elements, comments, or instructions) associated with this text. */
  readonly associatedXMLElements: XMLItem[];
  /** The {@link Story} that contains this text. */
  readonly parentStory: Story;
  /** The {@link TextFrame}s or {@link TextPath}s the text flows through. */
  readonly parentTextFrames: Array<TextFrame | TextPath>;
  /** The maximum ascent of any character in the range. */
  readonly ascent: number;
  /** The maximum descent of any character in the range. */
  readonly descent: number;
  /** The vertical offset of the range's baseline. */
  readonly baseline: number;
  /** The horizontal offset of the range's start. */
  readonly horizontalOffset: number;
  /** The vertical offset of the range's end baseline. */
  readonly endBaseline: number;
  /** The horizontal offset of the range's end. */
  readonly endHorizontalOffset: number;
  /** Whether the applied style has been overridden with additional attributes on this range. */
  readonly styleOverridden: boolean;
  /** The {@link CharacterStyle}s dictated by nested styles for each character in the range. */
  readonly appliedNestedStyles: CharacterStyle[];
  /** The {@link Condition}s applied to the range. */
  get appliedConditions(): Condition[];
  set appliedConditions(value: Array<Condition | string>);
  /** The amount of space to add or remove between characters, in thousandths of an em. */
  get kerningValue(): number;
  set kerningValue(value: number);
  /** {@link Ovals} (ellipses) anchored in this range. */
  readonly ovals: Ovals<Character>;
  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) anchored in this range. */
  readonly splineItems: SplineItems<Character>;
  /** Every {@link PageItem} anchored in this range, regardless of type. */
  readonly pageItems: PageItems<Character>;
  /** {@link Rectangles} anchored in this range. */
  readonly rectangles: Rectangles<Character>;
  /** {@link GraphicLines} anchored in this range. */
  readonly graphicLines: GraphicLines<Character>;
  /** {@link TextFrames} anchored in this range. */
  readonly textFrames: TextFrames<Character>;
  /** {@link Polygons} anchored in this range. */
  readonly polygons: Polygons<Character>;
  /** {@link EndnoteTextFrames} anchored in this range. */
  readonly endnoteTextFrames: EndnoteTextFrames<Character>;
  /** {@link Groups} anchored in this range. */
  readonly groups: Groups<Character>;
  /** {@link EPSTexts} anchored in this range. */
  readonly epstexts: EPSTexts<Character>;
  /** {@link FormFields} of every kind anchored in this range. */
  readonly formFields: FormFields<Character>;
  /** {@link Buttons} anchored in this range. */
  readonly buttons: Buttons<Character>;
  /** {@link MultiStateObjects} anchored in this range. */
  readonly multiStateObjects: MultiStateObjects<Character>;
  /** {@link CheckBoxes} anchored in this range. */
  readonly checkBoxes: CheckBoxes<Character>;
  /** {@link ComboBoxes} anchored in this range. */
  readonly comboBoxes: ComboBoxes<Character>;
  /** {@link ListBoxes} anchored in this range. */
  readonly listBoxes: ListBoxes<Character>;
  /** {@link RadioButtons} anchored in this range. */
  readonly radioButtons: RadioButtons<Character>;
  /** {@link TextBoxes} anchored in this range. */
  readonly textBoxes: TextBoxes<Character>;
  /** {@link SignatureFields} anchored in this range. */
  readonly signatureFields: SignatureFields<Character>;
  /** Every {@link Graphic} anchored anywhere in this range, recursing into nested groups. */
  readonly allGraphics: AnyGraphic[];
  /** Every {@link PageItem} anchored anywhere in this range, recursing into nested groups. */
  readonly allPageItems: AnyPageItem[];
  /**
   * The range's plain-text contents. Reading yields the text as a `string`, or a
   * {@link SpecialCharacters} value when the range holds only a single special
   * character; assignment accepts either form.
   */
  get contents(): string | SpecialCharacters;
  set contents(value: string | SpecialCharacters);
  /**
   * Creates a thumbnail image of the range as it would render, independent of
   * its currently applied style.
   * @param space The color space to render swatches in.
   * @param to Destination path for the generated image.
   */
  createThumbnailWithProperties(previewText: string, pointSize: number, space: ColorSpace, colorValue: number[], to: FilePath): boolean;
  /**
   * Whether the range has local formatting overrides on top of its applied style.
   * @param charStyleAsOverride If `true`, treats an applied {@link CharacterStyle} itself as an override. Defaults to `true`.
   */
  textHasOverrides(charOrParaStyle: StyleType, charStyleAsOverride?: boolean): boolean;
  /**
   * Creates a thumbnail image of the range using its applied style and any
   * local overrides.
   * @param space The color space to render swatches in.
   * @param to Destination path for the generated image.
   * @param charOrParaStyle Which applied style (character or paragraph) to render with.
   */
  createStyleThumbnailWithProperties(previewText: string, pointSize: number, space: ColorSpace, colorValue: number[], to: FilePath, charOrParaStyle: StyleType): boolean;
  /** Tags the range's parent story using the default tags from XML preferences. */
  autoTag(): void;
  /** Associates the range with an XML element while preserving its existing content. @param using The XML element to associate. */
  markup(using: XMLElement): void;
  /** Deletes the text in this range. */
  remove(): void;
  /**
   * Converts the range's text to a {@link Table}, splitting on the given
   * separator characters.
   * @param columnSeparator Character that starts a new column.
   * @param rowSeparator Character that starts a new row.
   * @param numberOfColumns Number of columns to split into. Valid only when
   * `columnSeparator` and `rowSeparator` are the same character. Defaults to `1`.
   */
  convertToTable(columnSeparator?: string, rowSeparator?: string, numberOfColumns?: number): Table;
  /**
   * Sets the Nth design axis of a variable font applied to the range.
   * @param nthAxisIndex Index of the design axis.
   * @param nthAxisValue Value to set the axis to.
   */
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void;
  /** Whether the Nth design axis of the range's variable font is hidden. @param nthAxisIndex Index of the design axis. */
  isNthDesignAxisHidden(nthAxisIndex: number): boolean;
  /** Scrolls the active window to bring this range into view. */
  showText(): void;
  /**
   * Applies a {@link ParagraphStyle} to the paragraphs spanned by the range.
   * @param clearingOverrides If `true`, clears local text attributes before applying the style. Defaults to `true`.
   */
  applyParagraphStyle(using: ParagraphStyle, clearingOverrides?: boolean): void;
  /** Applies a {@link CharacterStyle} to the range. */
  applyCharacterStyle(using: CharacterStyle): void;
  /**
   * Duplicates the range's text into a new location.
   * @param to Where to insert the copy relative to `reference`, or within the containing object.
   * @param reference Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER} — see {@link TextDuplicateReference}.
   */
  duplicate(to: LocationOptions, reference?: TextDuplicateReference): Text;
  /**
   * Moves the range's text into a new location.
   * @param to Where to move the text relative to `reference`, or within the containing object.
   * @param reference Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER} — see {@link TextDuplicateReference}.
   */
  move(to: LocationOptions, reference?: TextDuplicateReference): Text;
  /**
   * Places a file into the range, replacing its content.
   * @param fileName Path to the asset to place.
   * @param showingOptions If `true`, shows the format's import-options dialog. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   */
  place(fileName: FilePath, showingOptions?: boolean, withProperties?: object): PageItemUnion[];
  /** Converts the range to a {@link Note}. */
  convertToNote(): Note;
  /**
   * Finds hyperlink sources that intersect the range.
   * @param sortOrder Sort order of the returned sources.
   */
  findHyperlinks(sortOrder?: RangeSortOrder): HyperlinkTextSource[];
  /**
   * Creates a plain-text QR code and places it as a graphic anchored to the range.
   * @param qrCodeSwatch Swatch (or its name) to color the code.
   */
  createPlainTextQRCode(plainText?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /** Creates a QR code linking to a URL, placed as a graphic anchored to the range. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createHyperlinkQRCode(urlLink?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /** Creates a QR code that composes an SMS, placed as a graphic anchored to the range. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createTextMsgQRCode(cellNumber?: string, textMessage?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /** Creates a QR code that composes an email, placed as a graphic anchored to the range. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createEmailQRCode(emailAddress?: string, subject?: string, body?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /**
   * Creates a business-card (vCard) QR code, placed as a graphic anchored to the range.
   * @param qrCodeSwatch Swatch (or its name) to color the code.
   */
  createVCardQRCode(
    firstName?: string,
    lastName?: string,
    jobTitle?: string,
    cellPhone?: string,
    phone?: string,
    email?: string,
    organisation?: string,
    streetAddress?: string,
    city?: string,
    adrState?: string,
    country?: string,
    postalCode?: string,
    website?: string,
    qrCodeSwatch?: Swatch | string,
    withProperties?: object,
  ): void;
  /**
   * Exports the range to a file.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param to Destination path.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   * @param using An export preset such as a {@link PDFExportPreset}.
   */
  exportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): void;
  /**
   * Exports the range to a file on a background thread, returning the running {@link BackgroundTask}.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   */
  asynchronousExportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): BackgroundTask;
  /**
   * Applies one or more {@link Condition}s to the range.
   * @param removeExisting If `true`, removes conditions already applied before applying the new ones. Defaults to `false`.
   */
  applyConditions(using: Condition | Condition[], removeExisting?: boolean): void;
  /**
   * Selects the range in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): void;
  /** The object's DOM class name. */
  readonly constructorName: 'Line';
  /** Resolves the proxy into the individual {@link Line}s it stands for. */
  getElements(): Line<TParent>[];
}


/**
 * The broadcast proxy for {@link Line} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Line} there.
 */
export interface LinePlural<TParent = TextParent> {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (TParent)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<LinePlural<TParent>, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<LinePlural<TParent>, 'plural'>);
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
  /**
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /**
   * The applied font. Accepts a {@link Font} object or a font-family name as a
   * `string`; pair with {@link fontStyle} to pick a specific style.
   */
  get appliedFont(): (Font)[];
  set appliedFont(value: Font | string);
  /** The name of the font style. */
  get fontStyle(): (string)[];
  set fontStyle(value: string);
  /** The type size. */
  get pointSize(): (number)[];
  set pointSize(value: MeasurementValue);
  /**
   * The leading. A number is explicit leading; the {@link Leading} enumerator
   * `AUTO` selects automatic leading.
   */
  get leading(): (number | Leading)[];
  set leading(value: MeasurementValue | Leading);
  /** The type of pair kerning. */
  get kerningMethod(): (KerningMethodName)[];
  set kerningMethod(value: KerningMethodName);
  /** Tracking, in thousandths of an em, applied between characters. */
  get tracking(): (number)[];
  set tracking(value: number);
  /** Whether the text renders normally, as small caps, as all caps, or using the font's OpenType small-caps forms. See {@link Capitalization}. */
  get capitalization(): (Capitalization)[];
  set capitalization(value: Capitalization);
  /** The text position relative to the baseline. */
  get position(): (Position)[];
  set position(value: Position);
  /** If true, underlines the text. */
  get underline(): (boolean)[];
  set underline(value: boolean);
  /** If true, draws a strikethrough line through the text. */
  get strikeThru(): (boolean)[];
  set strikeThru(value: boolean);
  /** If `true`, substitutes ligature glyphs (e.g. `fi`, `fl`) where available. */
  get ligatures(): (boolean)[];
  set ligatures(value: boolean);
  /** If true, keeps the text on the same line. */
  get noBreak(): (boolean)[];
  set noBreak(value: boolean);
  /** The baseline shift applied to the text. */
  get baselineShift(): (number)[];
  set baselineShift(value: MeasurementValue);
  /** The figure style in OpenType fonts. */
  get otfFigureStyle(): (OTFFigureStyle)[];
  set otfFigureStyle(value: OTFFigureStyle);
  /** If true, uses ordinals in OpenType fonts. */
  get otfOrdinal(): (boolean)[];
  set otfOrdinal(value: boolean);
  /** If true, uses fractions in OpenType fonts. */
  get otfFraction(): (boolean)[];
  set otfFraction(value: boolean);
  /** If true, uses discretionary ligatures in OpenType fonts. */
  get otfDiscretionaryLigature(): (boolean)[];
  set otfDiscretionaryLigature(value: boolean);
  /** If true, uses titling forms in OpenType fonts. */
  get otfTitling(): (boolean)[];
  set otfTitling(value: boolean);
  /** If true, uses contextual alternate forms in OpenType fonts. */
  get otfContextualAlternate(): (boolean)[];
  set otfContextualAlternate(value: boolean);
  /** If true, uses swash forms in OpenType fonts. */
  get otfSwash(): (boolean)[];
  set otfSwash(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. */
  get underlineColor(): (Swatch)[];
  set underlineColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. */
  get underlineGapColor(): (Swatch)[];
  set underlineGapColor(value: Swatch | string);
  /** The underline stroke tint (as a percentage). (Range: 0 to 100). */
  get underlineTint(): (number)[];
  set underlineTint(value: number);
  /** The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. */
  get underlineGapTint(): (number)[];
  set underlineGapTint(value: number);
  /** If true, the underline stroke color will overprint. */
  get underlineOverprint(): (boolean)[];
  set underlineOverprint(value: boolean);
  /** If true, the gap color of the underline stroke will overprint. */
  get underlineGapOverprint(): (boolean)[];
  set underlineGapOverprint(value: boolean);
  /** The stroke type of the underline stroke. */
  get underlineType(): (StrokeStyle)[];
  set underlineType(value: StrokeStyle | string);
  /** The amount by which to offset the underline from the text baseline. */
  get underlineOffset(): (number)[];
  set underlineOffset(value: MeasurementValue);
  /** The stroke weight of the underline stroke. */
  get underlineWeight(): (number)[];
  set underlineWeight(value: MeasurementValue);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. */
  get strikeThroughColor(): (Swatch)[];
  set strikeThroughColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. */
  get strikeThroughGapColor(): (Swatch)[];
  set strikeThroughGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). */
  get strikeThroughTint(): (number)[];
  set strikeThroughTint(value: number);
  /** The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. */
  get strikeThroughGapTint(): (number)[];
  set strikeThroughGapTint(value: number);
  /** If true, the strikethrough stroke will overprint. */
  get strikeThroughOverprint(): (boolean)[];
  set strikeThroughOverprint(value: boolean);
  /** If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. */
  get strikeThroughGapOverprint(): (boolean)[];
  set strikeThroughGapOverprint(value: boolean);
  /** The stroke type of the strikethrough stroke. */
  get strikeThroughType(): (StrokeStyle)[];
  set strikeThroughType(value: StrokeStyle | string);
  /** The amount by which to offset the strikethrough stroke from the text baseline. */
  get strikeThroughOffset(): (number)[];
  set strikeThroughOffset(value: MeasurementValue);
  /** The stroke weight of the strikethrough stroke. */
  get strikeThroughWeight(): (number)[];
  set strikeThroughWeight(value: MeasurementValue);
  /**
   * The applied language / spelling dictionary. Accepts a
   * {@link LanguageWithVendors} or {@link Language} object, or its name.
   */
  get appliedLanguage(): (LanguageWithVendors | Language)[];
  set appliedLanguage(value: LanguageWithVendors | Language | string);
  /** Value of Design Axes. */
  get designAxes(): (number[])[];
  set designAxes(value: number[]);
  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): (boolean)[];
  set otfSlashedZero(value: boolean);
  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): (boolean)[];
  set otfHistorical(value: boolean);
  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): (number)[];
  set otfStylisticSets(value: number);
  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): (boolean)[];
  set otfMark(value: boolean);
  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): (boolean)[];
  set otfLocale(value: boolean);
  /** Which contextual glyph form — initial, medial, final, or isolated — to use for connected scripts, or `CALCULATE` to derive it automatically. See {@link PositionalForms}. */
  get positionalForm(): (PositionalForms)[];
  set positionalForm(value: PositionalForms);
  /** If true, use overlapping swash forms in OpenType fonts. */
  get otfOverlapSwash(): (boolean)[];
  set otfOverlapSwash(value: boolean);
  /** If true, use stylistic alternate forms in OpenType fonts. */
  get otfStylisticAlternate(): (boolean)[];
  set otfStylisticAlternate(value: boolean);
  /** If true, use alternate justification forms in OpenType fonts. */
  get otfJustificationAlternate(): (boolean)[];
  set otfJustificationAlternate(value: boolean);
  /** If true, use stretched alternate forms in OpenType fonts. */
  get otfStretchedAlternate(): (boolean)[];
  set otfStretchedAlternate(value: boolean);
  /** The direction of the character. */
  get characterDirection(): (CharacterDirectionOptions)[];
  set characterDirection(value: CharacterDirectionOptions);
  /** The keyboard direction of the character. */
  get keyboardDirection(): (CharacterDirectionOptions)[];
  set keyboardDirection(value: CharacterDirectionOptions);
  /** Which digit glyphs — Arabic numerals, Hindi, Farsi, or another script's digits — render numbers in the text. See {@link DigitsTypeOptions}. */
  get digitsType(): (DigitsTypeOptions)[];
  set digitsType(value: DigitsTypeOptions);
  /** Use of Kashidas for justification. */
  get kashidas(): (KashidasOptions)[];
  set kashidas(value: KashidasOptions);
  /** Position of diacritical characters. */
  get diacriticPosition(): (DiacriticPositionOptions)[];
  set diacriticPosition(value: DiacriticPositionOptions);
  /** The x (horizontal) offset for diacritic adjustment. */
  get xOffsetDiacritic(): (number)[];
  set xOffsetDiacritic(value: number);
  /** The y (vertical) offset for diacritic adjustment. */
  get yOffsetDiacritic(): (number)[];
  set yOffsetDiacritic(value: number);
  /** The alignment of small characters to the largest character in the line. */
  get characterAlignment(): (CharacterAlignment)[];
  set characterAlignment(value: CharacterAlignment);
  /** The amount of horizontal character compression. */
  get tsume(): (number)[];
  set tsume(value: number);
  /** The amount of space before each character. */
  get leadingAki(): (number)[];
  set leadingAki(value: number);
  /** The amount of space after each character. */
  get trailingAki(): (number)[];
  set trailingAki(value: number);
  /** The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. */
  get characterRotation(): (number)[];
  set characterRotation(value: number);
  /** The number of grid squares in which to arrange the text. */
  get jidori(): (number)[];
  set jidori(value: number);
  /** The amount (as a percentage) of shatai obliquing to apply. */
  get shataiMagnification(): (number)[];
  set shataiMagnification(value: number);
  /** The shatai lens angle (in degrees). */
  get shataiDegreeAngle(): (number)[];
  set shataiDegreeAngle(value: number);
  /** If true, applies shatai rotation. */
  get shataiAdjustRotation(): (boolean)[];
  set shataiAdjustRotation(value: boolean);
  /** If true, adjusts shatai tsume. */
  get shataiAdjustTsume(): (boolean)[];
  set shataiAdjustTsume(value: boolean);
  /** If true, makes the character horizontal in vertical text. */
  get tatechuyoko(): (boolean)[];
  set tatechuyoko(value: boolean);
  /** The horizontal offset for horizontal characters in vertical text. */
  get tatechuyokoXOffset(): (number)[];
  set tatechuyokoXOffset(value: number);
  /** The vertical offset for horizontal characters in vertical text. */
  get tatechuyokoYOffset(): (number)[];
  set tatechuyokoYOffset(value: number);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. */
  get kentenFillColor(): (Swatch)[];
  set kentenFillColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. */
  get kentenStrokeColor(): (Swatch)[];
  set kentenStrokeColor(value: Swatch | string);
  /** The fill tint (as a percentage) of kenten characters. (Range: 0 to 100). */
  get kentenTint(): (number)[];
  set kentenTint(value: number);
  /** The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100). */
  get kentenStrokeTint(): (number)[];
  set kentenStrokeTint(value: number);
  /** The stroke weight (in points) of kenten characters. */
  get kentenWeight(): (number)[];
  set kentenWeight(value: number);
  /** The method of overprinting the kenten fill. */
  get kentenOverprintFill(): (AdornmentOverprint)[];
  set kentenOverprintFill(value: AdornmentOverprint);
  /** The method of overprinting the kenten stroke. */
  get kentenOverprintStroke(): (AdornmentOverprint)[];
  set kentenOverprintStroke(value: AdornmentOverprint);
  /** The style of kenten characters. */
  get kentenKind(): (KentenCharacter)[];
  set kentenKind(value: KentenCharacter);
  /** The distance between kenten characters and their parent characters. */
  get kentenPlacement(): (number)[];
  set kentenPlacement(value: number);
  /** The alignment of kenten characters relative to the parent characters. */
  get kentenAlignment(): (KentenAlignment)[];
  set kentenAlignment(value: KentenAlignment);
  /** The kenten position relative to the parent character. */
  get kentenPosition(): (RubyKentenPosition)[];
  set kentenPosition(value: RubyKentenPosition);
  /** The font to use for kenten characters. */
  get kentenFont(): (Font)[];
  set kentenFont(value: Font | string);
  /** The font style of kenten characters. */
  get kentenFontStyle(): (string)[];
  set kentenFontStyle(value: string);
  /** The size (in points) of kenten characters. */
  get kentenFontSize(): (number)[];
  set kentenFontSize(value: number);
  /** The horizontal size of kenten characters as a percent of the original size. */
  get kentenXScale(): (number)[];
  set kentenXScale(value: number);
  /** The vertical size of kenten characters as a percent of the original size. */
  get kentenYScale(): (number)[];
  set kentenYScale(value: number);
  /** The character used for kenten. Note: Valid only when kenten kind is custom. */
  get kentenCustomCharacter(): (string)[];
  set kentenCustomCharacter(value: string);
  /** The character set used for the custom kenten character. Note: Valid only when kenten kind is custom. */
  get kentenCharacterSet(): (KentenCharacterSet)[];
  set kentenCharacterSet(value: KentenCharacterSet);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. */
  get rubyFill(): (Swatch)[];
  set rubyFill(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. */
  get rubyStroke(): (Swatch)[];
  set rubyStroke(value: Swatch | string);
  /** The tint (as a percentage) of the ruby fill color. (Range: 0 to 100). */
  get rubyTint(): (number)[];
  set rubyTint(value: number);
  /** The stroke weight (in points) of ruby characters. */
  get rubyWeight(): (number)[];
  set rubyWeight(value: number);
  /** The method of overprinting the ruby fill. */
  get rubyOverprintFill(): (AdornmentOverprint)[];
  set rubyOverprintFill(value: AdornmentOverprint);
  /** The method of overprinting the ruby stroke. */
  get rubyOverprintStroke(): (AdornmentOverprint)[];
  set rubyOverprintStroke(value: AdornmentOverprint);
  /** The stroke tint (as a percentage) of ruby characters. */
  get rubyStrokeTint(): (number)[];
  set rubyStrokeTint(value: number);
  /** The font applied to ruby characters. */
  get rubyFont(): (Font)[];
  set rubyFont(value: Font | string);
  /** The font style of ruby characters. */
  get rubyFontStyle(): (string)[];
  set rubyFontStyle(value: string);
  /** The size (in points) of ruby characters. */
  get rubyFontSize(): (number)[];
  set rubyFontSize(value: number);
  /** If true, uses OpenType Pro fonts for ruby. */
  get rubyOpenTypePro(): (boolean)[];
  set rubyOpenTypePro(value: boolean);
  /** The horizontal size of ruby characters, specified as a percent of the original size. */
  get rubyXScale(): (number)[];
  set rubyXScale(value: number);
  /** The vertical size of ruby characters, specified as a percent of the original size. */
  get rubyYScale(): (number)[];
  set rubyYScale(value: number);
  /** Whether ruby is assigned once to the whole character group or individually per character. See {@link RubyTypes}. */
  get rubyType(): (RubyTypes)[];
  set rubyType(value: RubyTypes);
  /** How the ruby text aligns relative to its parent characters — left, centered, right, justified, or one of the JIS/aki spacing variants. See {@link RubyAlignments}. */
  get rubyAlignment(): (RubyAlignments)[];
  set rubyAlignment(value: RubyAlignments);
  /** The position of ruby characters relative to the parent text. */
  get rubyPosition(): (RubyKentenPosition)[];
  set rubyPosition(value: RubyKentenPosition);
  /** The amount of horizontal space between ruby and parent characters. */
  get rubyXOffset(): (number)[];
  set rubyXOffset(value: number);
  /** The amount of vertical space between ruby and parent characters. */
  get rubyYOffset(): (number)[];
  set rubyYOffset(value: number);
  /** The ruby spacing relative to the parent text. */
  get rubyParentSpacing(): (RubyParentSpacing)[];
  set rubyParentSpacing(value: RubyParentSpacing);
  /** If true, auto aligns ruby. */
  get rubyAutoAlign(): (boolean)[];
  set rubyAutoAlign(value: boolean);
  /** If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount. */
  get rubyOverhang(): (boolean)[];
  set rubyOverhang(value: boolean);
  /** If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent. */
  get rubyAutoScaling(): (boolean)[];
  set rubyAutoScaling(value: boolean);
  /** The amount (as a percentage) to scale the parent text size to determine the ruby text size. */
  get rubyParentScalingPercent(): (number)[];
  set rubyParentScalingPercent(value: number);
  /** The amount by which ruby characters can overhang the parent text. */
  get rubyParentOverhangAmount(): (RubyOverhang)[];
  set rubyParentOverhangAmount(value: RubyOverhang);
  /** If true, turns on warichu. */
  get warichu(): (boolean)[];
  set warichu(value: boolean);
  /** The amount (as a percentage) to scale parent text size to determine warichu size. */
  get warichuSize(): (number)[];
  set warichuSize(value: number);
  /** The number of lines of warichu within a single normal line. */
  get warichuLines(): (number)[];
  set warichuLines(value: number);
  /** The gap between lines of warichu characters. */
  get warichuLineSpacing(): (number)[];
  set warichuLineSpacing(value: number);
  /** How warichu lines align within the text frame — automatic, left/center/right, or one of the justified variants. See {@link WarichuAlignment}. */
  get warichuAlignment(): (WarichuAlignment)[];
  set warichuAlignment(value: WarichuAlignment);
  /** The minimum number of characters allowed after a line break. */
  get warichuCharsAfterBreak(): (number)[];
  set warichuCharsAfterBreak(value: number);
  /** The minimum number of characters allowed before a line break. */
  get warichuCharsBeforeBreak(): (number)[];
  set warichuCharsBeforeBreak(value: number);
  /** If true, kerns according to proportional CJK metrics in OpenType fonts. */
  get otfProportionalMetrics(): (boolean)[];
  set otfProportionalMetrics(value: boolean);
  /** If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. */
  get otfHVKana(): (boolean)[];
  set otfHVKana(value: boolean);
  /** If true, applies italics to half-width alphanumerics. */
  get otfRomanItalics(): (boolean)[];
  set otfRomanItalics(value: boolean);
  /** If true, the line changes size when characters are scaled. */
  get scaleAffectsLineHeight(): (boolean)[];
  set scaleAffectsLineHeight(value: boolean);
  /** If true, uses grid tracking to track non-Roman characters in CJK grids. */
  get cjkGridTracking(): (boolean)[];
  set cjkGridTracking(value: boolean);
  /** The glyph variant to substitute for standard glyphs. */
  get glyphForm(): (AlternateGlyphForms)[];
  set glyphForm(value: AlternateGlyphForms);
  /** The number of digits included in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyDigits(): (number)[];
  set rubyAutoTcyDigits(value: number);
  /** If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyIncludeRoman(): (boolean)[];
  set rubyAutoTcyIncludeRoman(value: boolean);
  /** If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. */
  get rubyAutoTcyAutoScale(): (boolean)[];
  set rubyAutoTcyAutoScale(value: boolean);
  /** The {@link Bullet} character used by the paragraph's bulleted list. */
  readonly bulletChar: (Bullet)[];
  /** The {@link NumberingRestartPolicy} governing when the paragraph's list numbering restarts. */
  readonly numberingRestartPolicies: (NumberingRestartPolicy)[];
  /** A collection of nested line styles. */
  readonly nestedLineStyles: NestedLineStyles;
  /** A collection of nested GREP styles. */
  readonly nestedGrepStyles: NestedGrepStyles;
  /** A collection of nested styles. */
  readonly nestedStyles: NestedStyles;
  /** A collection of tab stops. */
  readonly tabStops: TabStops;
  /** A collection of preferences objects. */
  readonly preferences: Preferences;
  /** The distance to offset the left edge of the paragraph. */
  get paragraphShadingLeftOffset(): (number)[];
  set paragraphShadingLeftOffset(value: MeasurementValue | never);
  /** The distance to offset the right edge of the paragraph. */
  get paragraphShadingRightOffset(): (number)[];
  set paragraphShadingRightOffset(value: MeasurementValue | never);
  /** The distance to offset the top edge of the paragraph. */
  get paragraphShadingTopOffset(): (number)[];
  set paragraphShadingTopOffset(value: MeasurementValue | never);
  /** The distance to offset the bottom edge of the paragraph. */
  get paragraphShadingBottomOffset(): (number)[];
  set paragraphShadingBottomOffset(value: MeasurementValue | never);
  /** The basis (text width or column width) used to calculate the width of the paragraph shading. */
  get paragraphShadingWidth(): (ParagraphShadingWidthEnum)[];
  set paragraphShadingWidth(value: ParagraphShadingWidthEnum | never);
  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph shading. */
  get paragraphShadingTopOrigin(): (ParagraphShadingTopOriginEnum)[];
  set paragraphShadingTopOrigin(value: ParagraphShadingTopOriginEnum | never);
  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph shading. */
  get paragraphShadingBottomOrigin(): (ParagraphShadingBottomOriginEnum)[];
  set paragraphShadingBottomOrigin(value: ParagraphShadingBottomOriginEnum | never);
  /** If true, forces the shading of the paragraph to be clipped with respect to frame shape. */
  get paragraphShadingClipToFrame(): (boolean)[];
  set paragraphShadingClipToFrame(value: boolean | never);
  /** If true, suppress printing of the shading of the paragraph. */
  get paragraphShadingSuppressPrinting(): (boolean)[];
  set paragraphShadingSuppressPrinting(value: boolean | never);
  /** If true, the paragraph shading is On. */
  get paragraphShadingOn(): (boolean)[];
  set paragraphShadingOn(value: boolean | never);
  /** If true, the paragraph shading will overprint. */
  get paragraphShadingOverprint(): (boolean)[];
  set paragraphShadingOverprint(value: boolean | never);
  /** The tint (as a percentage) of the paragraph shading. (Range: 0 to 100) */
  get paragraphShadingTint(): (number)[];
  set paragraphShadingTint(value: number | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph shading. */
  get paragraphShadingColor(): (Swatch)[];
  set paragraphShadingColor(value: Swatch | string | never);
  /** If true, the paragraph border is on. */
  get paragraphBorderOn(): (boolean)[];
  set paragraphBorderOn(value: boolean | never);
  /** If true, the paragraph border will overprint. */
  get paragraphBorderOverprint(): (boolean)[];
  set paragraphBorderOverprint(value: boolean | never);
  /** The tint (as a percentage) of the paragraph stroke. (Range: 0 to 100) */
  get paragraphBorderTint(): (number)[];
  set paragraphBorderTint(value: number | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph stroke. */
  get paragraphBorderColor(): (Swatch)[];
  set paragraphBorderColor(value: Swatch | string | never);
  /** If true, the paragraph border gap will overprint. Note: Valid only when border type is not solid. */
  get paragraphBorderGapOverprint(): (boolean)[];
  set paragraphBorderGapOverprint(value: boolean | never);
  /** The tint (as a percentage) of the paragraph border gap. Note: Valid only when the border type is not solid. (Range: 0 to 100) */
  get paragraphBorderGapTint(): (number)[];
  set paragraphBorderGapTint(value: number | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph border gap. Note: Valid only when the border type is not solid. */
  get paragraphBorderGapColor(): (Swatch)[];
  set paragraphBorderGapColor(value: Swatch | string | never);
  /** The type of the border for the paragraph. */
  get paragraphBorderType(): (StrokeStyle)[];
  set paragraphBorderType(value: StrokeStyle | string | never);
  /** The left line weight of the border of paragraph. */
  get paragraphBorderLeftLineWeight(): (number)[];
  set paragraphBorderLeftLineWeight(value: MeasurementValue | never);
  /** The top line weight of the border of paragraph. */
  get paragraphBorderTopLineWeight(): (number)[];
  set paragraphBorderTopLineWeight(value: MeasurementValue | never);
  /** The right line weight of the border of paragraph. */
  get paragraphBorderRightLineWeight(): (number)[];
  set paragraphBorderRightLineWeight(value: MeasurementValue | never);
  /** The bottom line weight of the border of paragraph. */
  get paragraphBorderBottomLineWeight(): (number)[];
  set paragraphBorderBottomLineWeight(value: MeasurementValue | never);
  /** The end shape of an open path. */
  get paragraphBorderStrokeEndCap(): (EndCap)[];
  set paragraphBorderStrokeEndCap(value: EndCap | never);
  /** The corner join applied to the ParagraphStyle. */
  get paragraphBorderStrokeEndJoin(): (EndJoin)[];
  set paragraphBorderStrokeEndJoin(value: EndJoin | never);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphShadingTopLeftCornerRadius(): (number)[];
  set paragraphShadingTopLeftCornerRadius(value: MeasurementValue | never);
  /**
   * The corner shape applied to the top-left corner of a rectangular shading
   * area, and to all corners of a non-rectangular one.
   *
   * A {@link CornerOptions} radius is set explicitly, unlike the rounded or
   * beveled effect of a stroke's end join, which follows the stroke weight.
   */
  get paragraphShadingTopLeftCornerOption(): (CornerOptions)[];
  set paragraphShadingTopLeftCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerRadius(): (number)[];
  set paragraphShadingTopRightCornerRadius(value: MeasurementValue | never);
  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerOption(): (CornerOptions)[];
  set paragraphShadingTopRightCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphShadingBottomLeftCornerRadius(): (number)[];
  set paragraphShadingBottomLeftCornerRadius(value: MeasurementValue | never);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphShadingBottomLeftCornerOption(): (CornerOptions)[];
  set paragraphShadingBottomLeftCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphShadingBottomRightCornerRadius(): (number)[];
  set paragraphShadingBottomRightCornerRadius(value: MeasurementValue | never);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphShadingBottomRightCornerOption(): (CornerOptions)[];
  set paragraphShadingBottomRightCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphBorderTopLeftCornerRadius(): (number)[];
  set paragraphBorderTopLeftCornerRadius(value: MeasurementValue | never);
  /**
   * The corner shape applied to the top-left corner of a rectangular border,
   * and to all corners of a non-rectangular one.
   *
   * Unlike {@link paragraphBorderStrokeEndJoin}, a {@link CornerOptions}
   * radius is set explicitly rather than derived from the stroke weight.
   */
  get paragraphBorderTopLeftCornerOption(): (CornerOptions)[];
  set paragraphBorderTopLeftCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerRadius(): (number)[];
  set paragraphBorderTopRightCornerRadius(value: MeasurementValue | never);
  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerOption(): (CornerOptions)[];
  set paragraphBorderTopRightCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphBorderBottomLeftCornerRadius(): (number)[];
  set paragraphBorderBottomLeftCornerRadius(value: MeasurementValue | never);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphBorderBottomLeftCornerOption(): (CornerOptions)[];
  set paragraphBorderBottomLeftCornerOption(value: CornerOptions | never);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphBorderBottomRightCornerRadius(): (number)[];
  set paragraphBorderBottomRightCornerRadius(value: MeasurementValue | never);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphBorderBottomRightCornerOption(): (CornerOptions)[];
  set paragraphBorderBottomRightCornerOption(value: CornerOptions | never);
  /** The basis (text width or column width) used to calculate the width of the paragraph border. */
  get paragraphBorderWidth(): (ParagraphBorderEnum)[];
  set paragraphBorderWidth(value: ParagraphBorderEnum | never);
  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph border. */
  get paragraphBorderTopOrigin(): (ParagraphBorderTopOriginEnum)[];
  set paragraphBorderTopOrigin(value: ParagraphBorderTopOriginEnum | never);
  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph border. */
  get paragraphBorderBottomOrigin(): (ParagraphBorderBottomOriginEnum)[];
  set paragraphBorderBottomOrigin(value: ParagraphBorderBottomOriginEnum | never);
  /** The distance to offset the left edge of the paragraph border. */
  get paragraphBorderLeftOffset(): (number)[];
  set paragraphBorderLeftOffset(value: MeasurementValue | never);
  /** The distance to offset the right edge of the paragraph border. */
  get paragraphBorderRightOffset(): (number)[];
  set paragraphBorderRightOffset(value: MeasurementValue | never);
  /** The distance to offset the top edge of the paragraph border. */
  get paragraphBorderTopOffset(): (number)[];
  set paragraphBorderTopOffset(value: MeasurementValue | never);
  /** The distance to offset the bottom edge of the paragraph border. */
  get paragraphBorderBottomOffset(): (number)[];
  set paragraphBorderBottomOffset(value: MeasurementValue | never);
  /** If true, then paragraph border is also displayed at the points where the paragraph splits across frames or columns. */
  get paragraphBorderDisplayIfSplits(): (boolean)[];
  set paragraphBorderDisplayIfSplits(value: boolean | never);
  /** The hyphenation style chosen for the provider. */
  get providerHyphenationStyle(): (HyphenationStyleEnum)[];
  set providerHyphenationStyle(value: HyphenationStyleEnum | never);
  /** If true, consecutive para borders with completely similar properties are merged. */
  get mergeConsecutiveParaBorders(): (boolean)[];
  set mergeConsecutiveParaBorders(value: boolean | never);
  /** The space between paragraphs using same style. */
  get sameParaStyleSpacing(): (number | Spacing)[];
  set sameParaStyleSpacing(value: MeasurementValue | Spacing | never);
  /** Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long */
  get paragraphKashidaWidth(): (number)[];
  set paragraphKashidaWidth(value: number | never);
  /** If true, aligns the baseline of the text to the baseline grid. */
  get alignToBaseline(): (boolean)[];
  set alignToBaseline(value: boolean | never);
  /** First-line indent, relative to {@link leftIndent}. Negative values hang. */
  get firstLineIndent(): (number)[];
  set firstLineIndent(value: MeasurementValue | never);
  /** The width of the left indent. */
  get leftIndent(): (number)[];
  set leftIndent(value: MeasurementValue | never);
  /** The width of the right indent. */
  get rightIndent(): (number)[];
  set rightIndent(value: MeasurementValue | never);
  /** The height of the paragraph space above. */
  get spaceBefore(): (number)[];
  set spaceBefore(value: MeasurementValue | never);
  /** The height of the paragraph space below. */
  get spaceAfter(): (number)[];
  set spaceAfter(value: MeasurementValue | never);
  /**
   * Balances ragged lines. `true` uses the default style; a
   * {@link BalanceLinesStyle} value selects a specific style. Ignored by the
   * single-line composer.
   */
  get balanceRaggedLines(): (boolean | BalanceLinesStyle)[];
  set balanceRaggedLines(value: boolean | BalanceLinesStyle | never);
  /** Horizontal alignment of the paragraph's lines. */
  get justification(): (Justification)[];
  set justification(value: Justification | never);
  /** The alignment to use for lines that contain a single word. */
  get singleWordJustification(): (SingleWordJustification)[];
  set singleWordJustification(value: SingleWordJustification | never);
  /** The percent of the type size to use for auto leading. (Range: 0 to 500). */
  get autoLeading(): (number)[];
  set autoLeading(value: number | never);
  /** The number of lines to drop cap. */
  get dropCapLines(): (number)[];
  set dropCapLines(value: number | never);
  /** The number of characters to drop cap. */
  get dropCapCharacters(): (number)[];
  set dropCapCharacters(value: number | never);
  /** If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames. */
  get keepLinesTogether(): (boolean)[];
  set keepLinesTogether(value: boolean | never);
  /** If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns. */
  get keepAllLinesTogether(): (boolean)[];
  set keepAllLinesTogether(value: boolean | never);
  /** The minimum number of lines to keep with the next paragraph. */
  get keepWithNext(): (number)[];
  set keepWithNext(value: number | never);
  /** The minimum number of lines to keep together in a paragraph before allowing a page break. */
  get keepFirstLines(): (number)[];
  set keepFirstLines(value: number | never);
  /** The minimum number of lines to keep together in a paragraph after a page break. */
  get keepLastLines(): (number)[];
  set keepLastLines(value: number | never);
  /** The location at which to start the paragraph. */
  get startParagraph(): (StartParagraph)[];
  set startParagraph(value: StartParagraph | never);
  /** The text composer to use to compose the text. */
  get composer(): (ComposerName)[];
  set composer(value: ComposerName | never);
  /** The minimum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get minimumWordSpacing(): (number)[];
  set minimumWordSpacing(value: number | never);
  /** The maximum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get maximumWordSpacing(): (number)[];
  set maximumWordSpacing(value: number | never);
  /** The desired word spacing, specified as a percentage of the font word space value. (Range: 0 to 1000) */
  get desiredWordSpacing(): (number)[];
  set desiredWordSpacing(value: number | never);
  /** The minimum letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get minimumLetterSpacing(): (number)[];
  set minimumLetterSpacing(value: number | never);
  /** The maximum letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get maximumLetterSpacing(): (number)[];
  set maximumLetterSpacing(value: number | never);
  /** The desired letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) */
  get desiredLetterSpacing(): (number)[];
  set desiredLetterSpacing(value: number | never);
  /** The minimum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get minimumGlyphScaling(): (number)[];
  set minimumGlyphScaling(value: number | never);
  /** The maximum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get maximumGlyphScaling(): (number)[];
  set maximumGlyphScaling(value: number | never);
  /** The desired width (as a percentage) of individual characters. (Range: 50 to 200) */
  get desiredGlyphScaling(): (number)[];
  set desiredGlyphScaling(value: number | never);
  /** If true, places a rule above the paragraph. */
  get ruleAbove(): (boolean)[];
  set ruleAbove(value: boolean | never);
  /** If true, the paragraph rule above will overprint. */
  get ruleAboveOverprint(): (boolean)[];
  set ruleAboveOverprint(value: boolean | never);
  /** The line weight of the rule above. */
  get ruleAboveLineWeight(): (number)[];
  set ruleAboveLineWeight(value: MeasurementValue | never);
  /** The tint (as a percentage) of the paragraph rule above. (Range: 0 to 100) */
  get ruleAboveTint(): (number)[];
  set ruleAboveTint(value: number | never);
  /** The amount to offset the paragraph rule above from the baseline of the first line the paragraph. */
  get ruleAboveOffset(): (number)[];
  set ruleAboveOffset(value: MeasurementValue | never);
  /** The distance to indent the left edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveLeftIndent(): (number)[];
  set ruleAboveLeftIndent(value: MeasurementValue | never);
  /** The distance to indent the right edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveRightIndent(): (number)[];
  set ruleAboveRightIndent(value: MeasurementValue | never);
  /** The basis (text width or column width) used to calculate the width of the paragraph rule above. */
  get ruleAboveWidth(): (RuleWidth)[];
  set ruleAboveWidth(value: RuleWidth | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule above. */
  get ruleAboveColor(): (Swatch)[];
  set ruleAboveColor(value: Swatch | string | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule above. Note: Valid only when the paragraph rule above type is not solid. */
  get ruleAboveGapColor(): (Swatch)[];
  set ruleAboveGapColor(value: Swatch | string | never);
  /** The tint (as a percentage) of the stroke gap color of the paragraph rule. (Range: 0 to 100) Note: Valid only when the rule above type is not solid. */
  get ruleAboveGapTint(): (number)[];
  set ruleAboveGapTint(value: number | never);
  /** If true, the stroke gap of the paragraph rule above will overprint. Note: Valid only the rule above type is not solid. */
  get ruleAboveGapOverprint(): (boolean)[];
  set ruleAboveGapOverprint(value: boolean | never);
  /** The stroke type of the rule above the paragraph. */
  get ruleAboveType(): (StrokeStyle)[];
  set ruleAboveType(value: StrokeStyle | string | never);
  /** If true, applies a paragraph rule below. */
  get ruleBelow(): (boolean)[];
  set ruleBelow(value: boolean | never);
  /** The line weight of the rule below. */
  get ruleBelowLineWeight(): (number)[];
  set ruleBelowLineWeight(value: MeasurementValue | never);
  /** The tint (as a percentage) of the paragraph rule below. (Range: 0 to 100) */
  get ruleBelowTint(): (number)[];
  set ruleBelowTint(value: number | never);
  /** The amount to offset the the paragraph rule below from the baseline of the last line of the paragraph. */
  get ruleBelowOffset(): (number)[];
  set ruleBelowOffset(value: MeasurementValue | never);
  /** The distance to indent the left edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowLeftIndent(): (number)[];
  set ruleBelowLeftIndent(value: MeasurementValue | never);
  /** The distance to indent the right edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowRightIndent(): (number)[];
  set ruleBelowRightIndent(value: MeasurementValue | never);
  /** The basis (text width or column width) used to calculate the width of the paragraph rule below. */
  get ruleBelowWidth(): (RuleWidth)[];
  set ruleBelowWidth(value: RuleWidth | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule below. */
  get ruleBelowColor(): (Swatch)[];
  set ruleBelowColor(value: Swatch | string | never);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule below. Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapColor(): (Swatch)[];
  set ruleBelowGapColor(value: Swatch | string | never);
  /** The tint (as a percentage) of the stroke gap color of the paragraph rule below. (Range: 0 to 100) Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapTint(): (number)[];
  set ruleBelowGapTint(value: number | never);
  /** The stroke type of the rule below the paragraph. */
  get ruleBelowType(): (StrokeStyle)[];
  set ruleBelowType(value: StrokeStyle | string | never);
  /** If true, allows hyphenation of capitalized words. */
  get hyphenateCapitalizedWords(): (boolean)[];
  set hyphenateCapitalizedWords(value: boolean | never);
  /** If true, allows hyphenation. */
  get hyphenation(): (boolean)[];
  set hyphenation(value: boolean | never);
  /** The minimum number of letters at the end of a word that can be broken by a hyphen. */
  get hyphenateBeforeLast(): (number)[];
  set hyphenateBeforeLast(value: number | never);
  /** The minimum number of letters at the beginning of a word that can be broken by a hyphen. */
  get hyphenateAfterFirst(): (number)[];
  set hyphenateAfterFirst(value: number | never);
  /** The minimum number of letters a word must have in order to qualify for hyphenation. */
  get hyphenateWordsLongerThan(): (number)[];
  set hyphenateWordsLongerThan(value: number | never);
  /** The maximum number of hyphens that can appear on consecutive lines. To specify unlimited consecutive lines, use zero. */
  get hyphenateLadderLimit(): (number)[];
  set hyphenateLadderLimit(value: number | never);
  /** The amount of white space allowed at the end of a line of non-justified text before hyphenation begins. Note: Valid when composer is single-line composer. */
  get hyphenationZone(): (number)[];
  set hyphenationZone(value: MeasurementValue | never);
  /** The relative desirability of better spacing vs. fewer hyphens. A lower value results in greater use of hyphens. (Range: 0 to 100) */
  get hyphenWeight(): (number)[];
  set hyphenWeight(value: number | never);
  /** The character style to apply to the drop cap. */
  get dropCapStyle(): (CharacterStyle)[];
  set dropCapStyle(value: CharacterStyle | string | never);
  /** The amount to indent the last line in the paragraph. */
  get lastLineIndent(): (number)[];
  set lastLineIndent(value: MeasurementValue | never);
  /** If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true. */
  get hyphenateLastWord(): (boolean)[];
  set hyphenateLastWord(value: boolean | never);
  /** If the first line in the paragraph should be kept with the last line of previous paragraph. */
  get keepWithPrevious(): (boolean)[];
  set keepWithPrevious(value: boolean | never);
  /** The number of columns a paragraph spans or the number of split columns. */
  get spanSplitColumnCount(): (number | SpanColumnCountOptions)[];
  set spanSplitColumnCount(value: number | SpanColumnCountOptions | never);
  /** Whether a paragraph should be a single column, span columns or split columns */
  get spanColumnType(): (SpanColumnTypeOptions)[];
  set spanColumnType(value: SpanColumnTypeOptions | never);
  /** The inside gutter if the paragraph splits columns */
  get splitColumnInsideGutter(): (number)[];
  set splitColumnInsideGutter(value: MeasurementValue | never);
  /** The outside gutter if the paragraph splits columns */
  get splitColumnOutsideGutter(): (number)[];
  set splitColumnOutsideGutter(value: MeasurementValue | never);
  /** The minimum space before a span or a split column */
  get spanColumnMinSpaceBefore(): (number)[];
  set spanColumnMinSpaceBefore(value: MeasurementValue | never);
  /** The minimum space after a span or a split column */
  get spanColumnMinSpaceAfter(): (number)[];
  set spanColumnMinSpaceAfter(value: MeasurementValue | never);
  /** If true, the rule below will overprint. */
  get ruleBelowOverprint(): (boolean)[];
  set ruleBelowOverprint(value: boolean | never);
  /** If true, the gap color of the rule below will overprint. */
  get ruleBelowGapOverprint(): (boolean)[];
  set ruleBelowGapOverprint(value: boolean | never);
  /** Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid. */
  get dropcapDetail(): (number)[];
  set dropcapDetail(value: number | never);
  /** If true, allows the last word in a text column to be hyphenated. */
  get hyphenateAcrossColumns(): (boolean)[];
  set hyphenateAcrossColumns(value: boolean | never);
  /** If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true. */
  get keepRuleAboveInFrame(): (boolean)[];
  set keepRuleAboveInFrame(value: boolean | never);
  /** If true, ignores optical edge alignment for the paragraph. */
  get ignoreEdgeAlignment(): (boolean)[];
  set ignoreEdgeAlignment(value: boolean | never);
  /** Whether the paragraph reads left-to-right or right-to-left. */
  get paragraphDirection(): (ParagraphDirectionOptions)[];
  set paragraphDirection(value: ParagraphDirectionOptions | never);
  /** The justification method for Arabic-script text — the default, or one of the Naskh/Kashida variants. See {@link ParagraphJustificationOptions}. */
  get paragraphJustification(): (ParagraphJustificationOptions)[];
  set paragraphJustification(value: ParagraphJustificationOptions | never);
  /**
   * The paragraph's tab stops, as an array of property-name/value pair arrays.
   *
   * Assigning replaces the whole list; there is no way to add a single stop
   * through this property. The individual {@link TabStop} objects are reachable
   * through {@link tabStops}.
   */
  get tabList(): (object[])[];
  set tabList(value: PropertiesSetter<TabStop>[] | never);
  /** If true, aligns only the first line to the frame grid or baseline grid. If false, aligns all lines to the grid. */
  get gridAlignFirstLineOnly(): (boolean)[];
  set gridAlignFirstLineOnly(value: boolean | never);
  /** The alignment to the frame grid or baseline grid. */
  get gridAlignment(): (GridAlignment)[];
  set gridAlignment(value: GridAlignment | never);
  /** The manual gyoudori setting. */
  get gridGyoudori(): (number)[];
  set gridGyoudori(value: number | never);
  /** The number of half-width characters at or below which the characters automatically run horizontally in vertical text. */
  get autoTcy(): (number)[];
  set autoTcy(value: number | never);
  /** If true, auto tcy includes Roman characters. */
  get autoTcyIncludeRoman(): (boolean)[];
  set autoTcyIncludeRoman(value: boolean | never);
  /** The kinsoku set that determines legitimate line breaks. */
  kinsokuSet: (KinsokuTable | KinsokuSet | string)[];
  /** The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined. */
  get kinsokuType(): (KinsokuType)[];
  set kinsokuType(value: KinsokuType | never);
  /** The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect. */
  get kinsokuHangType(): (KinsokuHangTypes)[];
  set kinsokuHangType(value: KinsokuHangTypes | never);
  /** If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect. */
  get bunriKinshi(): (boolean)[];
  set bunriKinshi(value: boolean | never);
  /** The mojikumi table. For information, see mojikumi table defaults. */
  mojikumi: (MojikumiTable | string | MojikumiTableDefaults)[];
  /** If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers. */
  get rensuuji(): (boolean)[];
  set rensuuji(value: boolean | never);
  /** If true, rotates Roman characters in vertical text. */
  get rotateSingleByteCharacters(): (boolean)[];
  set rotateSingleByteCharacters(value: boolean | never);
  /** The point from which leading is measured from line to line. */
  get leadingModel(): (LeadingModel)[];
  set leadingModel(value: LeadingModel | never);
  /** If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph. */
  get paragraphGyoudori(): (boolean)[];
  set paragraphGyoudori(value: boolean | never);
  /** If true, ideographic spaces will not wrap to the next line like text characters. */
  get treatIdeographicSpaceAsSpace(): (boolean)[];
  set treatIdeographicSpaceAsSpace(value: boolean | never);
  /** If true, words unassociated with a hyphenation dictionary can break to the next line on any character. */
  get allowArbitraryHyphenation(): (boolean)[];
  set allowArbitraryHyphenation(value: boolean | never);
  /** List type for bullets and numbering. */
  get bulletsAndNumberingListType(): (ListType)[];
  set bulletsAndNumberingListType(value: ListType | never);
  /** The character style to be used for the text after string. */
  get bulletsCharacterStyle(): (CharacterStyle)[];
  set bulletsCharacterStyle(value: CharacterStyle | string | never);
  /** The character style to be used for the number string. */
  get numberingCharacterStyle(): (CharacterStyle)[];
  set numberingCharacterStyle(value: CharacterStyle | string | never);
  /** The number string expression for numbering. */
  get numberingExpression(): (string)[];
  set numberingExpression(value: string | never);
  /** The text after string expression for bullets. */
  get bulletsTextAfter(): (string)[];
  set bulletsTextAfter(value: string | never);
  /** The list to be part of. */
  get appliedNumberingList(): (NumberingList)[];
  set appliedNumberingList(value: NumberingList | string | never);
  /** The level of the paragraph. */
  get numberingLevel(): (number)[];
  set numberingLevel(value: number | never);
  /**
   * The numeral or letter style for the number string.
   *
   * Accepts a {@link NumberingStyle} member, or the format template string InDesign stores
   * for it — `I, II, III, IV...`, `$ID/(kanji) 1,2,3,4...`. The templates are tabulated on
   * {@link NumberingStyle}.
   */
  get numberingFormat(): (NumberingStyle | string)[];
  set numberingFormat(value: NumberingStyle | string | never);
  /** Continue the numbering at this level. */
  get numberingContinue(): (boolean)[];
  set numberingContinue(value: boolean | never);
  /** Determines starting number in a numbered list. */
  get numberingStartAt(): (number)[];
  set numberingStartAt(value: number | never);
  /** If true, apply the numbering restart policy. */
  get numberingApplyRestartPolicy(): (boolean)[];
  set numberingApplyRestartPolicy(value: boolean | never);
  /** The alignment of the bullet character. */
  get bulletsAlignment(): (ListAlignment)[];
  set bulletsAlignment(value: ListAlignment | never);
  /** The alignment of the number. */
  get numberingAlignment(): (ListAlignment)[];
  set numberingAlignment(value: ListAlignment | never);
  /** Horizontal scaling of the glyphs, as a percentage. */
  get horizontalScale(): (number)[];
  set horizontalScale(value: number);
  /** Vertical scaling of the glyphs, as a percentage. */
  get verticalScale(): (number)[];
  set verticalScale(value: number);
  /** Skew (false-italic) angle applied to the glyphs, in degrees. */
  get skew(): (number)[];
  set skew(value: number);
  /** The tint (as a percentage, 0–100) of the fill color. Use `-1` to use the inherited or overridden value instead of a specific tint. */
  get fillTint(): (number)[];
  set fillTint(value: number);
  /** The tint (as a percentage, 0–100) of the stroke color. Use `-1` to use the inherited or overridden value instead of a specific tint. */
  get strokeTint(): (number)[];
  set strokeTint(value: number);
  /** The stroke weight applied to the characters of the text. */
  get strokeWeight(): (number)[];
  set strokeWeight(value: MeasurementValue);
  /** If true, the stroke of the characters will overprint. */
  get overprintStroke(): (boolean)[];
  set overprintStroke(value: boolean);
  /** If true, the fill color of the characters will overprint. */
  get overprintFill(): (boolean)[];
  set overprintFill(value: boolean);
  /**
   * Swatch applied to the fill of the text. Accepts a {@link Swatch}
   * (or a {@link Color}, {@link Tint}, {@link Gradient}, or {@link MixedInk})
   * or its name.
   */
  get fillColor(): (Swatch)[];
  set fillColor(value: Swatch | string);
  /** Swatch applied to the stroke of the text. Accepts a {@link Swatch} or its name. */
  get strokeColor(): (Swatch)[];
  set strokeColor(value: Swatch | string);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text. */
  get gradientFillLength(): (number)[];
  set gradientFillLength(value: number);
  /** The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180). */
  get gradientFillAngle(): (number)[];
  set gradientFillAngle(value: number);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text. */
  get gradientStrokeLength(): (number)[];
  set gradientStrokeLength(value: number);
  /** The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180). */
  get gradientStrokeAngle(): (number)[];
  set gradientStrokeAngle(value: number);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y]. */
  get gradientFillStart(): (number[])[];
  set gradientFillStart(value: number[]);
  /** The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y]. */
  get gradientStrokeStart(): (number[])[];
  set gradientStrokeStart(value: number[]);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): (number)[];
  set miterLimit(value: number);
  /** The stroke alignment applied to the text. */
  get strokeAlignment(): (TextStrokeAlign)[];
  set strokeAlignment(value: TextStrokeAlign);
  /** The stroke join type applied to the characters of the text. */
  get endJoin(): (OutlineJoin)[];
  set endJoin(value: OutlineJoin);
  /** A collection of text objects. */
  readonly texts: Texts<TParent>;
  /** A collection of characters. */
  readonly characters: Characters<TParent>;
  /** A collection of words. */
  readonly words: Words<TParent>;
  /** A collection of lines. */
  readonly lines: Lines<TParent>;
  /** A collection of text columns. */
  readonly textColumns: TextColumns<TParent>;
  /** A collection of paragraphs. */
  readonly paragraphs: Paragraphs<TParent>;
  /** A collection of insertion points. */
  readonly insertionPoints: InsertionPoints<TParent>;
  /** A collection of text style ranges. */
  readonly textStyleRanges: TextStyleRanges<TParent>;
  /**
   * Converts text to outlines — one polygon per line of text. A single letter
   * with no internal spaces or detached parts becomes a single-path polygon.
   * Some fonts block outline creation; check `allowOutlines` first.
   * @param deleteOriginal If `true`, deletes the original text. If `false`, adds the outlines as new objects on top of it.
   */
  createOutlines(deleteOriginal?: boolean): (PageItem[])[];
  /**
   * Finds text that matches the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findText(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text that matches the find what value and replaces the text with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeText(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text that matches the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findGrep(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text that matches the find what value and replaces the text with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeGrep(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds glyphs that match the find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findGlyph(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds glyphs that match the find what value and replaces the glyphs with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeGlyph(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text that matches the transliterate find what value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  findTransliterate(reverseOrder?: boolean): (Text[])[];
  /**
   * Finds text matching the transliterate find what value and replaces it with the change to value.
   * @param reverseOrder If true, returns the results in reverse order.
   */
  changeTransliterate(reverseOrder?: boolean): (Text[])[];
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
  /** {@link EndnoteRanges} covered by this range. */
  readonly endnoteRanges: EndnoteRanges;
  /** The {@link ParagraphStyle} applied to the range. Setting it does not clear existing local overrides — use {@link clearOverrides} for that. */
  get appliedParagraphStyle(): (ParagraphStyle)[];
  set appliedParagraphStyle(value: ParagraphStyle | string);
  /** The {@link CharacterStyle} applied to the range. */
  get appliedCharacterStyle(): (CharacterStyle)[];
  set appliedCharacterStyle(value: CharacterStyle | string);
  /** The OpenType features in effect, as `[featureTag, value]` pairs. Assigning replaces the whole list. */
  get opentypeFeatures(): (unknown[][])[];
  set opentypeFeatures(value: unknown[][]);
  /** Whether ruby (phonetic annotation) is switched on for the range. */
  get rubyFlag(): (boolean)[];
  set rubyFlag(value: boolean);
  /** The ruby annotation text attached to the range. */
  get rubyString(): (string)[];
  set rubyString(value: string);
  /**
   * Changes the case of the text.
   * @param using Uppercase, lowercase, title case, or sentence case — see {@link ChangecaseMode}.
   */
  changecase(using: ChangecaseMode): (void)[];
  /**
   * Clears the specified types of override.
   * @param overridesToClear The types of override to clear.
   */
  clearOverrides(overridesToClear?: OverrideType): (void)[];
  /** Converts bullets and numbering in the range to literal text. */
  convertBulletsAndNumberingToText(): (void)[];
  /** Forces the text to recompose, applying any pending composition changes. */
  recompose(): (void)[];
  /** The number of characters spanned by this range. */
  readonly length: (number)[];
  /** The {@link XMLItem} elements (XML elements, comments, or instructions) associated with this text. */
  readonly associatedXMLElements: (XMLItem[])[];
  /** The {@link Story} that contains this text. */
  readonly parentStory: (Story)[];
  /** The {@link TextFrame}s or {@link TextPath}s the text flows through. */
  readonly parentTextFrames: (Array<TextFrame | TextPath>)[];
  /** The maximum ascent of any character in the range. */
  readonly ascent: (number)[];
  /** The maximum descent of any character in the range. */
  readonly descent: (number)[];
  /** The vertical offset of the range's baseline. */
  readonly baseline: (number)[];
  /** The horizontal offset of the range's start. */
  readonly horizontalOffset: (number)[];
  /** The vertical offset of the range's end baseline. */
  readonly endBaseline: (number)[];
  /** The horizontal offset of the range's end. */
  readonly endHorizontalOffset: (number)[];
  /** Whether the applied style has been overridden with additional attributes on this range. */
  readonly styleOverridden: (boolean)[];
  /** The {@link CharacterStyle}s dictated by nested styles for each character in the range. */
  readonly appliedNestedStyles: (CharacterStyle[])[];
  /** The {@link Condition}s applied to the range. */
  get appliedConditions(): (Condition[])[];
  set appliedConditions(value: Array<Condition | string>);
  /** The amount of space to add or remove between characters, in thousandths of an em. */
  get kerningValue(): (number)[];
  set kerningValue(value: number);
  /** {@link Ovals} (ellipses) anchored in this range. */
  readonly ovals: Ovals<Character>;
  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) anchored in this range. */
  readonly splineItems: SplineItems<Character>;
  /** Every {@link PageItem} anchored in this range, regardless of type. */
  readonly pageItems: PageItems<Character>;
  /** {@link Rectangles} anchored in this range. */
  readonly rectangles: Rectangles<Character>;
  /** {@link GraphicLines} anchored in this range. */
  readonly graphicLines: GraphicLines<Character>;
  /** {@link TextFrames} anchored in this range. */
  readonly textFrames: TextFrames<Character>;
  /** {@link Polygons} anchored in this range. */
  readonly polygons: Polygons<Character>;
  /** {@link EndnoteTextFrames} anchored in this range. */
  readonly endnoteTextFrames: EndnoteTextFrames<Character>;
  /** {@link Groups} anchored in this range. */
  readonly groups: Groups<Character>;
  /** {@link EPSTexts} anchored in this range. */
  readonly epstexts: EPSTexts<Character>;
  /** {@link FormFields} of every kind anchored in this range. */
  readonly formFields: FormFields<Character>;
  /** {@link Buttons} anchored in this range. */
  readonly buttons: Buttons<Character>;
  /** {@link MultiStateObjects} anchored in this range. */
  readonly multiStateObjects: MultiStateObjects<Character>;
  /** {@link CheckBoxes} anchored in this range. */
  readonly checkBoxes: CheckBoxes<Character>;
  /** {@link ComboBoxes} anchored in this range. */
  readonly comboBoxes: ComboBoxes<Character>;
  /** {@link ListBoxes} anchored in this range. */
  readonly listBoxes: ListBoxes<Character>;
  /** {@link RadioButtons} anchored in this range. */
  readonly radioButtons: RadioButtons<Character>;
  /** {@link TextBoxes} anchored in this range. */
  readonly textBoxes: TextBoxes<Character>;
  /** {@link SignatureFields} anchored in this range. */
  readonly signatureFields: SignatureFields<Character>;
  /** Every {@link Graphic} anchored anywhere in this range, recursing into nested groups. */
  readonly allGraphics: (AnyGraphic[])[];
  /** Every {@link PageItem} anchored anywhere in this range, recursing into nested groups. */
  readonly allPageItems: (AnyPageItem[])[];
  /**
   * The range's plain-text contents. Reading yields the text as a `string`, or a
   * {@link SpecialCharacters} value when the range holds only a single special
   * character; assignment accepts either form.
   */
  get contents(): (string | SpecialCharacters)[];
  set contents(value: string | SpecialCharacters);
  /**
   * Creates a thumbnail image of the range as it would render, independent of
   * its currently applied style.
   * @param space The color space to render swatches in.
   * @param to Destination path for the generated image.
   */
  createThumbnailWithProperties(previewText: string, pointSize: number, space: ColorSpace, colorValue: number[], to: FilePath): (boolean)[];
  /**
   * Whether the range has local formatting overrides on top of its applied style.
   * @param charStyleAsOverride If `true`, treats an applied {@link CharacterStyle} itself as an override. Defaults to `true`.
   */
  textHasOverrides(charOrParaStyle: StyleType, charStyleAsOverride?: boolean): (boolean)[];
  /**
   * Creates a thumbnail image of the range using its applied style and any
   * local overrides.
   * @param space The color space to render swatches in.
   * @param to Destination path for the generated image.
   * @param charOrParaStyle Which applied style (character or paragraph) to render with.
   */
  createStyleThumbnailWithProperties(previewText: string, pointSize: number, space: ColorSpace, colorValue: number[], to: FilePath, charOrParaStyle: StyleType): (boolean)[];
  /** Tags the range's parent story using the default tags from XML preferences. */
  autoTag(): (void)[];
  /** Associates the range with an XML element while preserving its existing content. @param using The XML element to associate. */
  markup(using: XMLElement): (void)[];
  /** Deletes the text in this range. */
  remove(): (void)[];
  /**
   * Converts the range's text to a {@link Table}, splitting on the given
   * separator characters.
   * @param columnSeparator Character that starts a new column.
   * @param rowSeparator Character that starts a new row.
   * @param numberOfColumns Number of columns to split into. Valid only when
   * `columnSeparator` and `rowSeparator` are the same character. Defaults to `1`.
   */
  convertToTable(columnSeparator?: string, rowSeparator?: string, numberOfColumns?: number): (Table)[];
  /**
   * Sets the Nth design axis of a variable font applied to the range.
   * @param nthAxisIndex Index of the design axis.
   * @param nthAxisValue Value to set the axis to.
   */
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): (void)[];
  /** Whether the Nth design axis of the range's variable font is hidden. @param nthAxisIndex Index of the design axis. */
  isNthDesignAxisHidden(nthAxisIndex: number): (boolean)[];
  /** Scrolls the active window to bring this range into view. */
  showText(): (void)[];
  /**
   * Applies a {@link ParagraphStyle} to the paragraphs spanned by the range.
   * @param clearingOverrides If `true`, clears local text attributes before applying the style. Defaults to `true`.
   */
  applyParagraphStyle(using: ParagraphStyle, clearingOverrides?: boolean): (void)[];
  /** Applies a {@link CharacterStyle} to the range. */
  applyCharacterStyle(using: CharacterStyle): (void)[];
  /**
   * Duplicates the range's text into a new location.
   * @param to Where to insert the copy relative to `reference`, or within the containing object.
   * @param reference Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER} — see {@link TextDuplicateReference}.
   */
  duplicate(to: LocationOptions, reference?: TextDuplicateReference): (Text)[];
  /**
   * Moves the range's text into a new location.
   * @param to Where to move the text relative to `reference`, or within the containing object.
   * @param reference Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER} — see {@link TextDuplicateReference}.
   */
  move(to: LocationOptions, reference?: TextDuplicateReference): (Text)[];
  /**
   * Places a file into the range, replacing its content.
   * @param fileName Path to the asset to place.
   * @param showingOptions If `true`, shows the format's import-options dialog. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   */
  place(fileName: FilePath, showingOptions?: boolean, withProperties?: object): (PageItemUnion[])[];
  /** Converts the range to a {@link Note}. */
  convertToNote(): (Note)[];
  /**
   * Finds hyperlink sources that intersect the range.
   * @param sortOrder Sort order of the returned sources.
   */
  findHyperlinks(sortOrder?: RangeSortOrder): (HyperlinkTextSource[])[];
  /**
   * Creates a plain-text QR code and places it as a graphic anchored to the range.
   * @param qrCodeSwatch Swatch (or its name) to color the code.
   */
  createPlainTextQRCode(plainText?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /** Creates a QR code linking to a URL, placed as a graphic anchored to the range. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createHyperlinkQRCode(urlLink?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /** Creates a QR code that composes an SMS, placed as a graphic anchored to the range. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createTextMsgQRCode(cellNumber?: string, textMessage?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /** Creates a QR code that composes an email, placed as a graphic anchored to the range. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createEmailQRCode(emailAddress?: string, subject?: string, body?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /**
   * Creates a business-card (vCard) QR code, placed as a graphic anchored to the range.
   * @param qrCodeSwatch Swatch (or its name) to color the code.
   */
  createVCardQRCode(
    firstName?: string,
    lastName?: string,
    jobTitle?: string,
    cellPhone?: string,
    phone?: string,
    email?: string,
    organisation?: string,
    streetAddress?: string,
    city?: string,
    adrState?: string,
    country?: string,
    postalCode?: string,
    website?: string,
    qrCodeSwatch?: Swatch | string,
    withProperties?: object,
  ): void;
  /**
   * Exports the range to a file.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param to Destination path.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   * @param using An export preset such as a {@link PDFExportPreset}.
   */
  exportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): (void)[];
  /**
   * Exports the range to a file on a background thread, returning the running {@link BackgroundTask}.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   */
  asynchronousExportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): (BackgroundTask)[];
  /**
   * Applies one or more {@link Condition}s to the range.
   * @param removeExisting If `true`, removes conditions already applied before applying the new ones. Defaults to `false`.
   */
  applyConditions(using: Condition | Condition[], removeExisting?: boolean): (void)[];
  /**
   * Selects the range in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): (void)[];
  /** The object's DOM class name. */
  readonly constructorName: 'Line';
  /** Resolves the proxy into the individual {@link Line}s it stands for. */
  getElements(): Line<TParent>[];
}
