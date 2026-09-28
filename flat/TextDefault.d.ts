/**
 * TextDefault.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { TabStop } from './TabStop';
import type { ComposerName, KerningMethodName, Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { Bullet } from './Bullet';
import type { CharacterStyle } from './CharacterStyle';
import type { Font } from './Font';
import type { KinsokuTable } from './KinsokuTable';
import type { Language } from './Language';
import type { LanguageWithVendors } from './LanguageWithVendors';
import type { MojikumiTable } from './MojikumiTable';
import type { NamedGrid } from './NamedGrid';
import type { NestedGrepStyles } from './NestedGrepStyles';
import type { NestedLineStyles } from './NestedLineStyles';
import type { NestedStyles } from './NestedStyles';
import type { NumberingList } from './NumberingList';
import type { NumberingRestartPolicy } from './NumberingRestartPolicy';
import type { ParagraphStyle } from './ParagraphStyle';
import type { Preferences } from './Preferences';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
import type { TabStops } from './TabStops';
import type { AdornmentOverprint } from './Enums/AdornmentOverprint';
import type { AlternateGlyphForms } from './Enums/AlternateGlyphForms';
import type { BalanceLinesStyle } from './Enums/BalanceLinesStyle';
import type { Capitalization } from './Enums/Capitalization';
import type { CharacterAlignment } from './Enums/CharacterAlignment';
import type { CharacterDirectionOptions } from './Enums/CharacterDirectionOptions';
import type { CornerOptions } from './Enums/CornerOptions';
import type { DiacriticPositionOptions } from './Enums/DiacriticPositionOptions';
import type { DigitsTypeOptions } from './Enums/DigitsTypeOptions';
import type { EndCap } from './Enums/EndCap';
import type { EndJoin } from './Enums/EndJoin';
import type { GridAlignment } from './Enums/GridAlignment';
import type { HyphenationStyleEnum } from './Enums/HyphenationStyleEnum';
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
import type { ListAlignment } from './Enums/ListAlignment';
import type { ListType } from './Enums/ListType';
import type { MojikumiTableDefaults } from './Enums/MojikumiTableDefaults';
import type { NothingEnum } from './Enums/NothingEnum';
import type { NumberingStyle } from './Enums/NumberingStyle';
import type { OTFFigureStyle } from './Enums/OTFFigureStyle';
import type { OutlineJoin } from './Enums/OutlineJoin';
import type { ParagraphBorderBottomOriginEnum } from './Enums/ParagraphBorderBottomOriginEnum';
import type { ParagraphBorderEnum } from './Enums/ParagraphBorderEnum';
import type { ParagraphBorderTopOriginEnum } from './Enums/ParagraphBorderTopOriginEnum';
import type { ParagraphDirectionOptions } from './Enums/ParagraphDirectionOptions';
import type { ParagraphJustificationOptions } from './Enums/ParagraphJustificationOptions';
import type { ParagraphShadingBottomOriginEnum } from './Enums/ParagraphShadingBottomOriginEnum';
import type { ParagraphShadingTopOriginEnum } from './Enums/ParagraphShadingTopOriginEnum';
import type { ParagraphShadingWidthEnum } from './Enums/ParagraphShadingWidthEnum';
import type { Position } from './Enums/Position';
import type { PositionalForms } from './Enums/PositionalForms';
import type { RubyAlignments } from './Enums/RubyAlignments';
import type { RubyKentenPosition } from './Enums/RubyKentenPosition';
import type { RubyOverhang } from './Enums/RubyOverhang';
import type { RubyParentSpacing } from './Enums/RubyParentSpacing';
import type { RubyTypes } from './Enums/RubyTypes';
import type { RuleWidth } from './Enums/RuleWidth';
import type { SingleWordJustification } from './Enums/SingleWordJustification';
import type { Spacing } from './Enums/Spacing';
import type { SpanColumnCountOptions } from './Enums/SpanColumnCountOptions';
import type { SpanColumnTypeOptions } from './Enums/SpanColumnTypeOptions';
import type { StartParagraph } from './Enums/StartParagraph';
import type { TextStrokeAlign } from './Enums/TextStrokeAlign';
import type { WarichuAlignment } from './Enums/WarichuAlignment';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
/**
 * Application- or document-level default character and paragraph formatting applied to new text.
 */
export interface TextDefault {
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
  get properties(): PropertiesGetter<TextDefault, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TextDefault, 'single'>);
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
  readonly constructorName: 'TextDefault';
  /** Resolves the proxy into the individual {@link TextDefault} objects it stands for. */
  getElements(): TextDefault[];
  /** Bullet character. */
  readonly bulletChar: Bullet;
  /** The rules controlling when a numbered list restarts counting — after any higher level, after a specific level, or across a range of levels. */
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
  set paragraphShadingLeftOffset(value: MeasurementValue);
  /** The distance to offset the right edge of the paragraph. */
  get paragraphShadingRightOffset(): number;
  set paragraphShadingRightOffset(value: MeasurementValue);
  /** The distance to offset the top edge of the paragraph. */
  get paragraphShadingTopOffset(): number;
  set paragraphShadingTopOffset(value: MeasurementValue);
  /** The distance to offset the bottom edge of the paragraph. */
  get paragraphShadingBottomOffset(): number;
  set paragraphShadingBottomOffset(value: MeasurementValue);
  /** The basis (text width or column width) used to calculate the width of the paragraph shading. */
  get paragraphShadingWidth(): ParagraphShadingWidthEnum;
  set paragraphShadingWidth(value: ParagraphShadingWidthEnum);
  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph shading. */
  get paragraphShadingTopOrigin(): ParagraphShadingTopOriginEnum;
  set paragraphShadingTopOrigin(value: ParagraphShadingTopOriginEnum);
  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph shading. */
  get paragraphShadingBottomOrigin(): ParagraphShadingBottomOriginEnum;
  set paragraphShadingBottomOrigin(value: ParagraphShadingBottomOriginEnum);
  /** If true, forces the shading of the paragraph to be clipped with respect to frame shape. */
  get paragraphShadingClipToFrame(): boolean;
  set paragraphShadingClipToFrame(value: boolean);
  /** If true, suppress printing of the shading of the paragraph. */
  get paragraphShadingSuppressPrinting(): boolean;
  set paragraphShadingSuppressPrinting(value: boolean);
  /** If true, the paragraph shading is On. */
  get paragraphShadingOn(): boolean;
  set paragraphShadingOn(value: boolean);
  /** If true, the paragraph shading will overprint. */
  get paragraphShadingOverprint(): boolean;
  set paragraphShadingOverprint(value: boolean);
  /** The tint (as a percentage) of the paragraph shading. (Range: 0 to 100) */
  get paragraphShadingTint(): number;
  set paragraphShadingTint(value: number);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph shading. */
  get paragraphShadingColor(): Swatch;
  set paragraphShadingColor(value: Swatch | string);
  /** The font applied to the TextDefault, specified as either a font object or the name of font family. */
  get appliedFont(): Font;
  set appliedFont(value: Font | string);
  /** The name of the font style. */
  get fontStyle(): string;
  set fontStyle(value: string);
  /** The text size. */
  get pointSize(): number;
  set pointSize(value: MeasurementValue);
  /** The leading applied to the text. */
  get leading(): number | Leading;
  set leading(value: MeasurementValue | Leading);
  /** The type of pair kerning. */
  get kerningMethod(): KerningMethodName;
  set kerningMethod(value: KerningMethodName);
  /** The amount by which to loosen or tighten a block of text, specified in thousands of an em. */
  get tracking(): number;
  set tracking(value: number);
  /** The capitalization scheme. */
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
  /** If true, replaces specific character combinations (e.g., fl, fi) with ligature characters. */
  get ligatures(): boolean;
  set ligatures(value: boolean);
  /** If true, keeps the text on the same line. */
  get noBreak(): boolean;
  set noBreak(value: boolean);
  /** The horizontal scaling applied to the TextDefault. */
  get horizontalScale(): number;
  set horizontalScale(value: number);
  /** The vertical scaling applied to the TextDefault. */
  get verticalScale(): number;
  set verticalScale(value: number);
  /** The baseline shift applied to the text. */
  get baselineShift(): number;
  set baselineShift(value: MeasurementValue);
  /** The skew angle of the TextDefault. */
  get skew(): number;
  set skew(value: number);
  /** The tint (as a percentage) of the fill color of the TextDefault. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): number;
  set fillTint(value: number);
  /** The tint (as a percentage) of the stroke color of the TextDefault. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
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
  /** The underline stroke tint (as a percentage). (Range: 0 to 100) */
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
  /** The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100) */
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
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the TextDefault. */
  get fillColor(): Swatch;
  set fillColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the TextDefault. */
  get strokeColor(): Swatch;
  set strokeColor(value: Swatch | string);
  /** The language of the text. */
  get appliedLanguage(): LanguageWithVendors | Language;
  set appliedLanguage(value: LanguageWithVendors | Language | string);
  /** If true, the paragraph border is on. */
  get paragraphBorderOn(): boolean;
  set paragraphBorderOn(value: boolean);
  /** If true, the paragraph border will overprint. */
  get paragraphBorderOverprint(): boolean;
  set paragraphBorderOverprint(value: boolean);
  /** The tint (as a percentage) of the paragraph stroke. (Range: 0 to 100) */
  get paragraphBorderTint(): number;
  set paragraphBorderTint(value: number);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph stroke. */
  get paragraphBorderColor(): Swatch;
  set paragraphBorderColor(value: Swatch | string);
  /** If true, the paragraph border gap will overprint. Note: Valid only when border type is not solid. */
  get paragraphBorderGapOverprint(): boolean;
  set paragraphBorderGapOverprint(value: boolean);
  /** The tint (as a percentage) of the paragraph border gap. Note: Valid only when the border type is not solid. (Range: 0 to 100) */
  get paragraphBorderGapTint(): number;
  set paragraphBorderGapTint(value: number);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph border gap. Note: Valid only when the border type is not solid. */
  get paragraphBorderGapColor(): Swatch;
  set paragraphBorderGapColor(value: Swatch | string);
  /** The type of the border for the paragraph. */
  get paragraphBorderType(): StrokeStyle;
  set paragraphBorderType(value: StrokeStyle | string);
  /** The left line weight of the border of paragraph. */
  get paragraphBorderLeftLineWeight(): number;
  set paragraphBorderLeftLineWeight(value: MeasurementValue);
  /** The top line weight of the border of paragraph. */
  get paragraphBorderTopLineWeight(): number;
  set paragraphBorderTopLineWeight(value: MeasurementValue);
  /** The right line weight of the border of paragraph. */
  get paragraphBorderRightLineWeight(): number;
  set paragraphBorderRightLineWeight(value: MeasurementValue);
  /** The bottom line weight of the border of paragraph. */
  get paragraphBorderBottomLineWeight(): number;
  set paragraphBorderBottomLineWeight(value: MeasurementValue);
  /** The end shape of an open path. */
  get paragraphBorderStrokeEndCap(): EndCap;
  set paragraphBorderStrokeEndCap(value: EndCap);
  /** The corner join applied to the TextDefault. */
  get paragraphBorderStrokeEndJoin(): EndJoin;
  set paragraphBorderStrokeEndJoin(value: EndJoin);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphShadingTopLeftCornerRadius(): number;
  set paragraphShadingTopLeftCornerRadius(value: MeasurementValue);
  /**
   * The shape to apply to the top left corner of rectangular shapes and all corners of non-rectangular shapes.
   *
   * Note: this differs from an end join, where the rounded or beveled effect comes from the stroke weight rather than an explicit radius.
   */
  get paragraphShadingTopLeftCornerOption(): CornerOptions;
  set paragraphShadingTopLeftCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerRadius(): number;
  set paragraphShadingTopRightCornerRadius(value: MeasurementValue);
  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerOption(): CornerOptions;
  set paragraphShadingTopRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphShadingBottomLeftCornerRadius(): number;
  set paragraphShadingBottomLeftCornerRadius(value: MeasurementValue);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphShadingBottomLeftCornerOption(): CornerOptions;
  set paragraphShadingBottomLeftCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphShadingBottomRightCornerRadius(): number;
  set paragraphShadingBottomRightCornerRadius(value: MeasurementValue);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphShadingBottomRightCornerOption(): CornerOptions;
  set paragraphShadingBottomRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphBorderTopLeftCornerRadius(): number;
  set paragraphBorderTopLeftCornerRadius(value: MeasurementValue);
  /**
   * The shape to apply to the top left corner of rectangular shapes and all corners of non-rectangular shapes.
   *
   * Note: this differs from an end join, where the rounded or beveled effect comes from the stroke weight rather than an explicit radius.
   */
  get paragraphBorderTopLeftCornerOption(): CornerOptions;
  set paragraphBorderTopLeftCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerRadius(): number;
  set paragraphBorderTopRightCornerRadius(value: MeasurementValue);
  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerOption(): CornerOptions;
  set paragraphBorderTopRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphBorderBottomLeftCornerRadius(): number;
  set paragraphBorderBottomLeftCornerRadius(value: MeasurementValue);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphBorderBottomLeftCornerOption(): CornerOptions;
  set paragraphBorderBottomLeftCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphBorderBottomRightCornerRadius(): number;
  set paragraphBorderBottomRightCornerRadius(value: MeasurementValue);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphBorderBottomRightCornerOption(): CornerOptions;
  set paragraphBorderBottomRightCornerOption(value: CornerOptions);
  /** The basis (text width or column width) used to calculate the width of the paragraph border. */
  get paragraphBorderWidth(): ParagraphBorderEnum;
  set paragraphBorderWidth(value: ParagraphBorderEnum);
  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph border. */
  get paragraphBorderTopOrigin(): ParagraphBorderTopOriginEnum;
  set paragraphBorderTopOrigin(value: ParagraphBorderTopOriginEnum);
  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph border. */
  get paragraphBorderBottomOrigin(): ParagraphBorderBottomOriginEnum;
  set paragraphBorderBottomOrigin(value: ParagraphBorderBottomOriginEnum);
  /** The distance to offset the left edge of the paragraph border. */
  get paragraphBorderLeftOffset(): number;
  set paragraphBorderLeftOffset(value: MeasurementValue);
  /** The distance to offset the right edge of the paragraph border. */
  get paragraphBorderRightOffset(): number;
  set paragraphBorderRightOffset(value: MeasurementValue);
  /** The distance to offset the top edge of the paragraph border. */
  get paragraphBorderTopOffset(): number;
  set paragraphBorderTopOffset(value: MeasurementValue);
  /** The distance to offset the bottom edge of the paragraph border. */
  get paragraphBorderBottomOffset(): number;
  set paragraphBorderBottomOffset(value: MeasurementValue);
  /** If true, then paragraph border is also displayed at the points where the paragraph splits across frames or columns. */
  get paragraphBorderDisplayIfSplits(): boolean;
  set paragraphBorderDisplayIfSplits(value: boolean);
  /** The hyphenation style chosen for the provider. */
  get providerHyphenationStyle(): HyphenationStyleEnum;
  set providerHyphenationStyle(value: HyphenationStyleEnum);
  /** If true, consecutive para borders with completely similar properties are merged. */
  get mergeConsecutiveParaBorders(): boolean;
  set mergeConsecutiveParaBorders(value: boolean);
  /** The space between paragraphs using same style. */
  get sameParaStyleSpacing(): number | Spacing;
  set sameParaStyleSpacing(value: MeasurementValue | Spacing);
  /** Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long */
  get paragraphKashidaWidth(): number;
  set paragraphKashidaWidth(value: number);
  /** The values of the applied variable font's design axes, indexed to match {@link setNthDesignAxis} and {@link isNthDesignAxisHidden}. */
  get designAxes(): number[];
  set designAxes(value: number[]);
  /** If true, aligns the baseline of the text to the baseline grid. */
  get alignToBaseline(): boolean;
  set alignToBaseline(value: boolean);
  /** The amount to indent the first line. */
  get firstLineIndent(): number;
  set firstLineIndent(value: MeasurementValue);
  /** The width of the left indent. */
  get leftIndent(): number;
  set leftIndent(value: MeasurementValue);
  /** The width of the right indent. */
  get rightIndent(): number;
  set rightIndent(value: MeasurementValue);
  /** The height of the paragraph space above. */
  get spaceBefore(): number;
  set spaceBefore(value: MeasurementValue);
  /** The height of the paragraph space below. */
  get spaceAfter(): number;
  set spaceAfter(value: MeasurementValue);
  /** If true or set to an enumeration value, balances ragged lines. Note: Not valid with a single-line text composer. */
  get balanceRaggedLines(): boolean | BalanceLinesStyle;
  set balanceRaggedLines(value: boolean | BalanceLinesStyle);
  /** The paragraph alignment. */
  get justification(): Justification;
  set justification(value: Justification);
  /** The alignment to use for lines that contain a single word. */
  get singleWordJustification(): SingleWordJustification;
  set singleWordJustification(value: SingleWordJustification);
  /** The percent of the type size to use for auto leading. (Range: 0 to 500). */
  get autoLeading(): number;
  set autoLeading(value: number);
  /** The number of lines to drop cap. */
  get dropCapLines(): number;
  set dropCapLines(value: number);
  /** The number of characters to drop cap. */
  get dropCapCharacters(): number;
  set dropCapCharacters(value: number);
  /** If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames. */
  get keepLinesTogether(): boolean;
  set keepLinesTogether(value: boolean);
  /** If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns. */
  get keepAllLinesTogether(): boolean;
  set keepAllLinesTogether(value: boolean);
  /** The minimum number of lines to keep with the next paragraph. */
  get keepWithNext(): number;
  set keepWithNext(value: number);
  /** The minimum number of lines to keep together in a paragraph before allowing a page break. */
  get keepFirstLines(): number;
  set keepFirstLines(value: number);
  /** The minimum number of lines to keep together in a paragraph after a page break. */
  get keepLastLines(): number;
  set keepLastLines(value: number);
  /** Where the paragraph is forced to begin — anywhere, or at the top of the next column, frame, page, or odd/even page. */
  get startParagraph(): StartParagraph;
  set startParagraph(value: StartParagraph);
  /** The name of the composer that determines how the text's lines break — for example the single-line composer noted on {@link hyphenationZone}. */
  get composer(): ComposerName;
  set composer(value: ComposerName);
  /** The minimum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get minimumWordSpacing(): number;
  set minimumWordSpacing(value: number);
  /** The maximum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get maximumWordSpacing(): number;
  set maximumWordSpacing(value: number);
  /** The desired word spacing, specified as a percentage of the font word space value. (Range: 0 to 1000) */
  get desiredWordSpacing(): number;
  set desiredWordSpacing(value: number);
  /** The minimum letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get minimumLetterSpacing(): number;
  set minimumLetterSpacing(value: number);
  /** The maximum letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get maximumLetterSpacing(): number;
  set maximumLetterSpacing(value: number);
  /** The desired letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500) */
  get desiredLetterSpacing(): number;
  set desiredLetterSpacing(value: number);
  /** The minimum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get minimumGlyphScaling(): number;
  set minimumGlyphScaling(value: number);
  /** The maximum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get maximumGlyphScaling(): number;
  set maximumGlyphScaling(value: number);
  /** The desired width (as a percentage) of individual characters. (Range: 50 to 200) */
  get desiredGlyphScaling(): number;
  set desiredGlyphScaling(value: number);
  /** If true, places a rule above the paragraph. */
  get ruleAbove(): boolean;
  set ruleAbove(value: boolean);
  /** If true, the paragraph rule above will overprint. */
  get ruleAboveOverprint(): boolean;
  set ruleAboveOverprint(value: boolean);
  /** The line weight of the rule above. */
  get ruleAboveLineWeight(): number;
  set ruleAboveLineWeight(value: MeasurementValue);
  /** The tint (as a percentage) of the paragraph rule above. (Range: 0 to 100) */
  get ruleAboveTint(): number;
  set ruleAboveTint(value: number);
  /** The amount to offset the paragraph rule above from the baseline of the first line the paragraph. */
  get ruleAboveOffset(): number;
  set ruleAboveOffset(value: MeasurementValue);
  /** The distance to indent the left edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveLeftIndent(): number;
  set ruleAboveLeftIndent(value: MeasurementValue);
  /** The distance to indent the right edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveRightIndent(): number;
  set ruleAboveRightIndent(value: MeasurementValue);
  /** The basis (text width or column width) used to calculate the width of the paragraph rule above. */
  get ruleAboveWidth(): RuleWidth;
  set ruleAboveWidth(value: RuleWidth);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule above. */
  get ruleAboveColor(): Swatch;
  set ruleAboveColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule above. Note: Valid only when the paragraph rule above type is not solid. */
  get ruleAboveGapColor(): Swatch;
  set ruleAboveGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the stroke gap color of the paragraph rule. (Range: 0 to 100) Note: Valid only when the rule above type is not solid. */
  get ruleAboveGapTint(): number;
  set ruleAboveGapTint(value: number);
  /** If true, the stroke gap of the paragraph rule above will overprint. Note: Valid only the rule above type is not solid. */
  get ruleAboveGapOverprint(): boolean;
  set ruleAboveGapOverprint(value: boolean);
  /** The stroke type of the rule above the paragraph. */
  get ruleAboveType(): StrokeStyle;
  set ruleAboveType(value: StrokeStyle | string);
  /** If true, applies a paragraph rule below. */
  get ruleBelow(): boolean;
  set ruleBelow(value: boolean);
  /** The line weight of the rule below. */
  get ruleBelowLineWeight(): number;
  set ruleBelowLineWeight(value: MeasurementValue);
  /** The tint (as a percentage) of the paragraph rule below. (Range: 0 to 100) */
  get ruleBelowTint(): number;
  set ruleBelowTint(value: number);
  /** The amount to offset the the paragraph rule below from the baseline of the last line of the paragraph. */
  get ruleBelowOffset(): number;
  set ruleBelowOffset(value: MeasurementValue);
  /** The distance to indent the left edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowLeftIndent(): number;
  set ruleBelowLeftIndent(value: MeasurementValue);
  /** The distance to indent the right edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowRightIndent(): number;
  set ruleBelowRightIndent(value: MeasurementValue);
  /** The basis (text width or column width) used to calculate the width of the paragraph rule below. */
  get ruleBelowWidth(): RuleWidth;
  set ruleBelowWidth(value: RuleWidth);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule below. */
  get ruleBelowColor(): Swatch;
  set ruleBelowColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule below. Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapColor(): Swatch;
  set ruleBelowGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the stroke gap color of the paragraph rule below. (Range: 0 to 100) Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapTint(): number;
  set ruleBelowGapTint(value: number);
  /** The stroke type of the rule below the paragraph. */
  get ruleBelowType(): StrokeStyle;
  set ruleBelowType(value: StrokeStyle | string);
  /** If true, allows hyphenation of capitalized words. */
  get hyphenateCapitalizedWords(): boolean;
  set hyphenateCapitalizedWords(value: boolean);
  /** If true, allows hyphenation. */
  get hyphenation(): boolean;
  set hyphenation(value: boolean);
  /** The minimum number of letters at the end of a word that can be broken by a hyphen. */
  get hyphenateBeforeLast(): number;
  set hyphenateBeforeLast(value: number);
  /** The mininum number of letters at the beginning of a word that can be broken by a hyphen. */
  get hyphenateAfterFirst(): number;
  set hyphenateAfterFirst(value: number);
  /** The minimum number of letters a word must have in order to qualify for hyphenation. */
  get hyphenateWordsLongerThan(): number;
  set hyphenateWordsLongerThan(value: number);
  /** The maximum number of hyphens that can appear on consecutive lines. To specify unlimited consecutive lines, use zero. */
  get hyphenateLadderLimit(): number;
  set hyphenateLadderLimit(value: number);
  /** The amount of white space allowed at the end of a line of non-justified text before hypenation begins. Note: Valid when composer is single-line composer. */
  get hyphenationZone(): number;
  set hyphenationZone(value: MeasurementValue);
  /** The relative desirability of better spacing vs. fewer hyphens. A lower value results in greater use of hyphens. (Range: 0 to 100) */
  get hyphenWeight(): number;
  set hyphenWeight(value: number);
  /** The character style to apply to the drop cap. */
  get dropCapStyle(): CharacterStyle;
  set dropCapStyle(value: CharacterStyle | string);
  /** The paragraph style applied to the text. */
  get appliedParagraphStyle(): ParagraphStyle;
  set appliedParagraphStyle(value: ParagraphStyle | string);
  /** The character style applied to the text. */
  get appliedCharacterStyle(): CharacterStyle;
  set appliedCharacterStyle(value: CharacterStyle | string);
  /** The amount to indent the last line in the paragraph. */
  get lastLineIndent(): number;
  set lastLineIndent(value: MeasurementValue);
  /** If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true. */
  get hyphenateLastWord(): boolean;
  set hyphenateLastWord(value: boolean);
  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): boolean;
  set otfSlashedZero(value: boolean);
  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): boolean;
  set otfHistorical(value: boolean);
  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): number;
  set otfStylisticSets(value: number);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text. */
  get gradientFillLength(): number;
  set gradientFillLength(value: number);
  /** The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180) */
  get gradientFillAngle(): number;
  set gradientFillAngle(value: number);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text. */
  get gradientStrokeLength(): number;
  set gradientStrokeLength(value: number);
  /** The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180) */
  get gradientStrokeAngle(): number;
  set gradientStrokeAngle(value: number);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y]. */
  get gradientFillStart(): number[];
  set gradientFillStart(value: MeasurementValue[]);
  /** The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y]. */
  get gradientStrokeStart(): number[];
  set gradientStrokeStart(value: MeasurementValue[]);
  /** If the first line in the paragraph should be kept with the last line of previous paragraph. */
  get keepWithPrevious(): boolean;
  set keepWithPrevious(value: boolean);
  /** The number of columns a paragraph spans or the number of split columns. */
  get spanSplitColumnCount(): number | SpanColumnCountOptions;
  set spanSplitColumnCount(value: number | SpanColumnCountOptions);
  /** Whether a paragraph should be a single column, span columns or split columns */
  get spanColumnType(): SpanColumnTypeOptions;
  set spanColumnType(value: SpanColumnTypeOptions);
  /** The inside gutter if the paragraph splits columns */
  get splitColumnInsideGutter(): number;
  set splitColumnInsideGutter(value: MeasurementValue);
  /** The outside gutter if the paragraph splits columns */
  get splitColumnOutsideGutter(): number;
  set splitColumnOutsideGutter(value: MeasurementValue);
  /** The minimum space before a span or a split column */
  get spanColumnMinSpaceBefore(): number;
  set spanColumnMinSpaceBefore(value: MeasurementValue);
  /** The minimum space after a span or a split column */
  get spanColumnMinSpaceAfter(): number;
  set spanColumnMinSpaceAfter(value: MeasurementValue);
  /** If true, the rule below will overprint. */
  get ruleBelowOverprint(): boolean;
  set ruleBelowOverprint(value: boolean);
  /** If true, the gap color of the rule below will overprint. */
  get ruleBelowGapOverprint(): boolean;
  set ruleBelowGapOverprint(value: boolean);
  /** Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid. */
  get dropcapDetail(): number;
  set dropcapDetail(value: number);
  /** If true, allows the last word in a text column to be hyphenated. */
  get hyphenateAcrossColumns(): boolean;
  set hyphenateAcrossColumns(value: boolean);
  /** If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true. */
  get keepRuleAboveInFrame(): boolean;
  set keepRuleAboveInFrame(value: boolean);
  /** If true, ignores optical edge alignment for the paragraph. */
  get ignoreEdgeAlignment(): boolean;
  set ignoreEdgeAlignment(value: boolean);
  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): boolean;
  set otfMark(value: boolean);
  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): boolean;
  set otfLocale(value: boolean);
  /** Which contextual glyph form OpenType substitutes for joining scripts — initial, medial, final, isolated, or calculated automatically. */
  get positionalForm(): PositionalForms;
  set positionalForm(value: PositionalForms);
  /** Whether the paragraph reads left-to-right or right-to-left. */
  get paragraphDirection(): ParagraphDirectionOptions;
  set paragraphDirection(value: ParagraphDirectionOptions);
  /** The justification method for Arabic-script text — standard, Arabic, Naskh, or one of the kashida-based variants. See {@link ParagraphJustificationOptions}. */
  get paragraphJustification(): ParagraphJustificationOptions;
  set paragraphJustification(value: ParagraphJustificationOptions);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): number;
  set miterLimit(value: number);
  /** The stroke alignment applied to the text. */
  get strokeAlignment(): TextStrokeAlign;
  set strokeAlignment(value: TextStrokeAlign);
  /** The stroke join type applied to the characters of the text. */
  get endJoin(): OutlineJoin;
  set endJoin(value: OutlineJoin);
  /** If true, use overlapping swash forms in OpenType fonts */
  get otfOverlapSwash(): boolean;
  set otfOverlapSwash(value: boolean);
  /** If true, use stylistic alternate forms in OpenType fonts */
  get otfStylisticAlternate(): boolean;
  set otfStylisticAlternate(value: boolean);
  /** If true, use alternate justification forms in OpenType fonts */
  get otfJustificationAlternate(): boolean;
  set otfJustificationAlternate(value: boolean);
  /** If true, use stretched alternate forms in OpenType fonts */
  get otfStretchedAlternate(): boolean;
  set otfStretchedAlternate(value: boolean);
  /** The reading direction of the text's characters — left-to-right, right-to-left, or the script's default. */
  get characterDirection(): CharacterDirectionOptions;
  set characterDirection(value: CharacterDirectionOptions);
  /** The direction the keyboard advances when entering text — left-to-right, right-to-left, or the script's default. */
  get keyboardDirection(): CharacterDirectionOptions;
  set keyboardDirection(value: CharacterDirectionOptions);
  /** Which digit glyphs represent numbers in the text — Arabic numerals, Hindi, Farsi, or another script-specific digit set. */
  get digitsType(): DigitsTypeOptions;
  set digitsType(value: DigitsTypeOptions);
  /** Whether kashida justification (Arabic letter elongation) is applied when justifying text. */
  get kashidas(): KashidasOptions;
  set kashidas(value: KashidasOptions);
  /** Position of diacriticical characters. */
  get diacriticPosition(): DiacriticPositionOptions;
  set diacriticPosition(value: DiacriticPositionOptions);
  /** The x (horizontal) offset for diacritic adjustment. */
  get xOffsetDiacritic(): number;
  set xOffsetDiacritic(value: number);
  /** The y (vertical) offset for diacritic adjustment. */
  get yOffsetDiacritic(): number;
  set yOffsetDiacritic(value: number);
  /**
   * The tab stops, as a list of property bags — distinct from the
   * {@link TabStop}/{@link TabStops} DOM collection, which holds the same stops as
   * objects.
   *
   * Assigning replaces the whole list; there is no way to add a single stop this way.
   */
  get tabList(): object[];
  set tabList(value: PropertiesSetter<TabStop>[]);
  /** The named grid in use. */
  get appliedNamedGrid(): NamedGrid;
  set appliedNamedGrid(value: NamedGrid);
  /** If true, aligns only the first line to the frame grid or baseline grid. If false, aligns all lines to the grid. */
  get gridAlignFirstLineOnly(): boolean;
  set gridAlignFirstLineOnly(value: boolean);
  /** The alignment to the frame grid or baseline grid. */
  get gridAlignment(): GridAlignment;
  set gridAlignment(value: GridAlignment);
  /** The manual gyoudori setting. */
  get gridGyoudori(): number;
  set gridGyoudori(value: number);
  /** The number of half-width characters at or below which the characters automatically run horizontally in vertical text. */
  get autoTcy(): number;
  set autoTcy(value: number);
  /** If true, auto tcy includes Roman characters. */
  get autoTcyIncludeRoman(): boolean;
  set autoTcyIncludeRoman(value: boolean);
  /** The kinsoku set that determines legitimate line breaks. */
  get kinsokuSet(): KinsokuTable | KinsokuSet | string;
  set kinsokuSet(value: KinsokuTable | KinsokuSet | string);
  /** The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined. */
  get kinsokuType(): KinsokuType;
  set kinsokuType(value: KinsokuType);
  /** The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect. */
  get kinsokuHangType(): KinsokuHangTypes;
  set kinsokuHangType(value: KinsokuHangTypes);
  /** If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect. */
  get bunriKinshi(): boolean;
  set bunriKinshi(value: boolean);
  /** The mojikumi table controlling spacing between Japanese character classes and punctuation — a custom {@link MojikumiTable}, its name, or one of the built-in presets in {@link MojikumiTableDefaults}. */
  get mojikumi(): MojikumiTable | string | MojikumiTableDefaults;
  set mojikumi(value: MojikumiTable | string | MojikumiTableDefaults);
  /** If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers. */
  get rensuuji(): boolean;
  set rensuuji(value: boolean);
  /** If true, rotates Roman characters in vertical text. */
  get rotateSingleByteCharacters(): boolean;
  set rotateSingleByteCharacters(value: boolean);
  /** The point from which leading is measured from line to line. */
  get leadingModel(): LeadingModel;
  set leadingModel(value: LeadingModel);
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
  /** The fill tint (as a percentage) of kenten characters. (Range: 0 to 100) */
  get kentenTint(): number;
  set kentenTint(value: number);
  /** The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100) */
  get kentenStrokeTint(): number;
  set kentenStrokeTint(value: number);
  /** The stroke weight (in points) of kenten characters. */
  get kentenWeight(): number;
  set kentenWeight(value: number);
  /** Whether the kenten fill overprints — on, off, or automatically. */
  get kentenOverprintFill(): AdornmentOverprint;
  set kentenOverprintFill(value: AdornmentOverprint);
  /** Whether the kenten stroke overprints — on, off, or automatically. */
  get kentenOverprintStroke(): AdornmentOverprint;
  set kentenOverprintStroke(value: AdornmentOverprint);
  /** The kenten mark applied above the characters — a dot, circle, triangle, bullseye, fisheye, or a custom character. */
  get kentenKind(): KentenCharacter;
  set kentenKind(value: KentenCharacter);
  /** The distance between kenten characters and their parent characters. */
  get kentenPlacement(): number;
  set kentenPlacement(value: number);
  /** The alignment of kenten characters relative to the parent characters. */
  get kentenAlignment(): KentenAlignment;
  set kentenAlignment(value: KentenAlignment);
  /** Whether the kenten sits above-right or below-left of the parent character. */
  get kentenPosition(): RubyKentenPosition;
  set kentenPosition(value: RubyKentenPosition);
  /** The font to use for kenten characters. */
  get kentenFont(): Font;
  set kentenFont(value: Font | string);
  /** The font style of kenten characters. */
  get kentenFontStyle(): string | NothingEnum.NOTHING;
  set kentenFontStyle(value: string | NothingEnum.NOTHING);
  /** The size (in points) of kenten characters. */
  get kentenFontSize(): number;
  set kentenFontSize(value: number);
  /** The horizontal size of kenten characters as a percent of the original size. */
  get kentenXScale(): number;
  set kentenXScale(value: number);
  /** The vertical size of kenten charachers as a percent of the original size. */
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
  /** The tint (as a percentage) of the ruby fill color. (Range: 0 to 100) */
  get rubyTint(): number;
  set rubyTint(value: number);
  /** The stroke weight (in points) of ruby characters. */
  get rubyWeight(): number;
  set rubyWeight(value: number);
  /** Whether the ruby fill overprints — on, off, or automatically. */
  get rubyOverprintFill(): AdornmentOverprint;
  set rubyOverprintFill(value: AdornmentOverprint);
  /** Whether the ruby stroke overprints — on, off, or automatically. */
  get rubyOverprintStroke(): AdornmentOverprint;
  set rubyOverprintStroke(value: AdornmentOverprint);
  /** The stroke tint (as a percentage) of ruby characters. */
  get rubyStrokeTint(): number;
  set rubyStrokeTint(value: number);
  /** The font applied to ruby characters. */
  get rubyFont(): Font;
  set rubyFont(value: Font | string);
  /** The font style of ruby characters. */
  get rubyFontStyle(): string | NothingEnum.NOTHING;
  set rubyFontStyle(value: string | NothingEnum.NOTHING);
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
  /** Whether ruby text is assigned to the whole group of characters or to each character individually. */
  get rubyType(): RubyTypes;
  set rubyType(value: RubyTypes);
  /** How ruby text is aligned to its parent characters — left, center, right, fully justified, or one of the Japanese-standard (JIS, equal-aki, 1-aki) spacing methods. */
  get rubyAlignment(): RubyAlignments;
  set rubyAlignment(value: RubyAlignments);
  /** Whether the ruby sits above-right or below-left of the parent text. */
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
  /** How the lines of warichu text are aligned — left, center, right, automatically, or justified with the last line aligned left, center, or right. */
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
  /** If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph. */
  get paragraphGyoudori(): boolean;
  set paragraphGyoudori(value: boolean);
  /** The number of digits included in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyDigits(): number;
  set rubyAutoTcyDigits(value: number);
  /** If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyIncludeRoman(): boolean;
  set rubyAutoTcyIncludeRoman(value: boolean);
  /** If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. */
  get rubyAutoTcyAutoScale(): boolean;
  set rubyAutoTcyAutoScale(value: boolean);
  /** If true, ideographic spaces will not wrap to the next line like text characters. */
  get treatIdeographicSpaceAsSpace(): boolean;
  set treatIdeographicSpaceAsSpace(value: boolean);
  /** If true, words unassociated with a hyphenation dictionary can break to the next line on any character. */
  get allowArbitraryHyphenation(): boolean;
  set allowArbitraryHyphenation(value: boolean);
  /** List type for bullets and numbering. */
  get bulletsAndNumberingListType(): ListType;
  set bulletsAndNumberingListType(value: ListType);
  /** The character style to be used for the text after string. */
  get bulletsCharacterStyle(): CharacterStyle;
  set bulletsCharacterStyle(value: CharacterStyle | string);
  /** The character style to be used for the number string. */
  get numberingCharacterStyle(): CharacterStyle;
  set numberingCharacterStyle(value: CharacterStyle | string);
  /** The number string expression for numbering. */
  get numberingExpression(): string;
  set numberingExpression(value: string);
  /** The text after string expression for bullets. */
  get bulletsTextAfter(): string;
  set bulletsTextAfter(value: string);
  /** The list to be part of. */
  get appliedNumberingList(): NumberingList;
  set appliedNumberingList(value: NumberingList | string);
  /** The level of the paragraph. */
  get numberingLevel(): number;
  set numberingLevel(value: number);
  /**
   * The numeral or letter style for the number string.
   *
   * Accepts a {@link NumberingStyle} member, or the format template string InDesign stores
   * for it — `I, II, III, IV...`, `$ID/(kanji) 1,2,3,4...`. The templates are tabulated on
   * {@link NumberingStyle}.
   */
  get numberingFormat(): NumberingStyle | string;
  set numberingFormat(value: NumberingStyle | string);
  /** Continue the numbering at this level. */
  get numberingContinue(): boolean;
  set numberingContinue(value: boolean);
  /** Determines starting number in a numbered list. */
  get numberingStartAt(): number;
  set numberingStartAt(value: number);
  /** If true, apply the numbering restart policy. */
  get numberingApplyRestartPolicy(): boolean;
  set numberingApplyRestartPolicy(value: boolean);
  /** The alignment of the bullet character. */
  get bulletsAlignment(): ListAlignment;
  set bulletsAlignment(value: ListAlignment);
  /** The alignment of the number. */
  get numberingAlignment(): ListAlignment;
  set numberingAlignment(value: ListAlignment);
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
 * The broadcast proxy for {@link TextDefault} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link TextDefault} there.
 */
export interface TextDefaultPlural {
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
  get properties(): (PropertiesGetter<TextDefaultPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TextDefaultPlural, 'plural'>);
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
  readonly constructorName: 'TextDefault';
  /** Resolves the proxy into the individual {@link TextDefault} objects it stands for. */
  getElements(): TextDefault[];
  /** Bullet character. */
  readonly bulletChar: (Bullet)[];
  /** The rules controlling when a numbered list restarts counting — after any higher level, after a specific level, or across a range of levels. */
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
  set paragraphShadingLeftOffset(value: MeasurementValue);
  /** The distance to offset the right edge of the paragraph. */
  get paragraphShadingRightOffset(): (number)[];
  set paragraphShadingRightOffset(value: MeasurementValue);
  /** The distance to offset the top edge of the paragraph. */
  get paragraphShadingTopOffset(): (number)[];
  set paragraphShadingTopOffset(value: MeasurementValue);
  /** The distance to offset the bottom edge of the paragraph. */
  get paragraphShadingBottomOffset(): (number)[];
  set paragraphShadingBottomOffset(value: MeasurementValue);
  /** The basis (text width or column width) used to calculate the width of the paragraph shading. */
  get paragraphShadingWidth(): (ParagraphShadingWidthEnum)[];
  set paragraphShadingWidth(value: ParagraphShadingWidthEnum);
  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph shading. */
  get paragraphShadingTopOrigin(): (ParagraphShadingTopOriginEnum)[];
  set paragraphShadingTopOrigin(value: ParagraphShadingTopOriginEnum);
  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph shading. */
  get paragraphShadingBottomOrigin(): (ParagraphShadingBottomOriginEnum)[];
  set paragraphShadingBottomOrigin(value: ParagraphShadingBottomOriginEnum);
  /** If true, forces the shading of the paragraph to be clipped with respect to frame shape. */
  get paragraphShadingClipToFrame(): (boolean)[];
  set paragraphShadingClipToFrame(value: boolean);
  /** If true, suppress printing of the shading of the paragraph. */
  get paragraphShadingSuppressPrinting(): (boolean)[];
  set paragraphShadingSuppressPrinting(value: boolean);
  /** If true, the paragraph shading is On. */
  get paragraphShadingOn(): (boolean)[];
  set paragraphShadingOn(value: boolean);
  /** If true, the paragraph shading will overprint. */
  get paragraphShadingOverprint(): (boolean)[];
  set paragraphShadingOverprint(value: boolean);
  /** The tint (as a percentage) of the paragraph shading. (Range: 0 to 100) */
  get paragraphShadingTint(): (number)[];
  set paragraphShadingTint(value: number);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph shading. */
  get paragraphShadingColor(): (Swatch)[];
  set paragraphShadingColor(value: Swatch | string);
  /** The font applied to the TextDefault, specified as either a font object or the name of font family. */
  get appliedFont(): (Font)[];
  set appliedFont(value: Font | string);
  /** The name of the font style. */
  get fontStyle(): (string)[];
  set fontStyle(value: string);
  /** The text size. */
  get pointSize(): (number)[];
  set pointSize(value: MeasurementValue);
  /** The leading applied to the text. */
  get leading(): (number | Leading)[];
  set leading(value: MeasurementValue | Leading);
  /** The type of pair kerning. */
  get kerningMethod(): (KerningMethodName)[];
  set kerningMethod(value: KerningMethodName);
  /** The amount by which to loosen or tighten a block of text, specified in thousands of an em. */
  get tracking(): (number)[];
  set tracking(value: number);
  /** The capitalization scheme. */
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
  /** If true, replaces specific character combinations (e.g., fl, fi) with ligature characters. */
  get ligatures(): (boolean)[];
  set ligatures(value: boolean);
  /** If true, keeps the text on the same line. */
  get noBreak(): (boolean)[];
  set noBreak(value: boolean);
  /** The horizontal scaling applied to the TextDefault. */
  get horizontalScale(): (number)[];
  set horizontalScale(value: number);
  /** The vertical scaling applied to the TextDefault. */
  get verticalScale(): (number)[];
  set verticalScale(value: number);
  /** The baseline shift applied to the text. */
  get baselineShift(): (number)[];
  set baselineShift(value: MeasurementValue);
  /** The skew angle of the TextDefault. */
  get skew(): (number)[];
  set skew(value: number);
  /** The tint (as a percentage) of the fill color of the TextDefault. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): (number)[];
  set fillTint(value: number);
  /** The tint (as a percentage) of the stroke color of the TextDefault. (To specify a tint percentage, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
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
  /** The underline stroke tint (as a percentage). (Range: 0 to 100) */
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
  /** The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100) */
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
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the TextDefault. */
  get fillColor(): (Swatch)[];
  set fillColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the TextDefault. */
  get strokeColor(): (Swatch)[];
  set strokeColor(value: Swatch | string);
  /** The language of the text. */
  get appliedLanguage(): (LanguageWithVendors | Language)[];
  set appliedLanguage(value: LanguageWithVendors | Language | string);
  /** If true, the paragraph border is on. */
  get paragraphBorderOn(): (boolean)[];
  set paragraphBorderOn(value: boolean);
  /** If true, the paragraph border will overprint. */
  get paragraphBorderOverprint(): (boolean)[];
  set paragraphBorderOverprint(value: boolean);
  /** The tint (as a percentage) of the paragraph stroke. (Range: 0 to 100) */
  get paragraphBorderTint(): (number)[];
  set paragraphBorderTint(value: number);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph stroke. */
  get paragraphBorderColor(): (Swatch)[];
  set paragraphBorderColor(value: Swatch | string);
  /** If true, the paragraph border gap will overprint. Note: Valid only when border type is not solid. */
  get paragraphBorderGapOverprint(): (boolean)[];
  set paragraphBorderGapOverprint(value: boolean);
  /** The tint (as a percentage) of the paragraph border gap. Note: Valid only when the border type is not solid. (Range: 0 to 100) */
  get paragraphBorderGapTint(): (number)[];
  set paragraphBorderGapTint(value: number);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph border gap. Note: Valid only when the border type is not solid. */
  get paragraphBorderGapColor(): (Swatch)[];
  set paragraphBorderGapColor(value: Swatch | string);
  /** The type of the border for the paragraph. */
  get paragraphBorderType(): (StrokeStyle)[];
  set paragraphBorderType(value: StrokeStyle | string);
  /** The left line weight of the border of paragraph. */
  get paragraphBorderLeftLineWeight(): (number)[];
  set paragraphBorderLeftLineWeight(value: MeasurementValue);
  /** The top line weight of the border of paragraph. */
  get paragraphBorderTopLineWeight(): (number)[];
  set paragraphBorderTopLineWeight(value: MeasurementValue);
  /** The right line weight of the border of paragraph. */
  get paragraphBorderRightLineWeight(): (number)[];
  set paragraphBorderRightLineWeight(value: MeasurementValue);
  /** The bottom line weight of the border of paragraph. */
  get paragraphBorderBottomLineWeight(): (number)[];
  set paragraphBorderBottomLineWeight(value: MeasurementValue);
  /** The end shape of an open path. */
  get paragraphBorderStrokeEndCap(): (EndCap)[];
  set paragraphBorderStrokeEndCap(value: EndCap);
  /** The corner join applied to the TextDefault. */
  get paragraphBorderStrokeEndJoin(): (EndJoin)[];
  set paragraphBorderStrokeEndJoin(value: EndJoin);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphShadingTopLeftCornerRadius(): (number)[];
  set paragraphShadingTopLeftCornerRadius(value: MeasurementValue);
  /**
   * The shape to apply to the top left corner of rectangular shapes and all corners of non-rectangular shapes.
   *
   * Note: this differs from an end join, where the rounded or beveled effect comes from the stroke weight rather than an explicit radius.
   */
  get paragraphShadingTopLeftCornerOption(): (CornerOptions)[];
  set paragraphShadingTopLeftCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerRadius(): (number)[];
  set paragraphShadingTopRightCornerRadius(value: MeasurementValue);
  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerOption(): (CornerOptions)[];
  set paragraphShadingTopRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphShadingBottomLeftCornerRadius(): (number)[];
  set paragraphShadingBottomLeftCornerRadius(value: MeasurementValue);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphShadingBottomLeftCornerOption(): (CornerOptions)[];
  set paragraphShadingBottomLeftCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphShadingBottomRightCornerRadius(): (number)[];
  set paragraphShadingBottomRightCornerRadius(value: MeasurementValue);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphShadingBottomRightCornerOption(): (CornerOptions)[];
  set paragraphShadingBottomRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphBorderTopLeftCornerRadius(): (number)[];
  set paragraphBorderTopLeftCornerRadius(value: MeasurementValue);
  /**
   * The shape to apply to the top left corner of rectangular shapes and all corners of non-rectangular shapes.
   *
   * Note: this differs from an end join, where the rounded or beveled effect comes from the stroke weight rather than an explicit radius.
   */
  get paragraphBorderTopLeftCornerOption(): (CornerOptions)[];
  set paragraphBorderTopLeftCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerRadius(): (number)[];
  set paragraphBorderTopRightCornerRadius(value: MeasurementValue);
  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerOption(): (CornerOptions)[];
  set paragraphBorderTopRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphBorderBottomLeftCornerRadius(): (number)[];
  set paragraphBorderBottomLeftCornerRadius(value: MeasurementValue);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphBorderBottomLeftCornerOption(): (CornerOptions)[];
  set paragraphBorderBottomLeftCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphBorderBottomRightCornerRadius(): (number)[];
  set paragraphBorderBottomRightCornerRadius(value: MeasurementValue);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphBorderBottomRightCornerOption(): (CornerOptions)[];
  set paragraphBorderBottomRightCornerOption(value: CornerOptions);
  /** The basis (text width or column width) used to calculate the width of the paragraph border. */
  get paragraphBorderWidth(): (ParagraphBorderEnum)[];
  set paragraphBorderWidth(value: ParagraphBorderEnum);
  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph border. */
  get paragraphBorderTopOrigin(): (ParagraphBorderTopOriginEnum)[];
  set paragraphBorderTopOrigin(value: ParagraphBorderTopOriginEnum);
  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph border. */
  get paragraphBorderBottomOrigin(): (ParagraphBorderBottomOriginEnum)[];
  set paragraphBorderBottomOrigin(value: ParagraphBorderBottomOriginEnum);
  /** The distance to offset the left edge of the paragraph border. */
  get paragraphBorderLeftOffset(): (number)[];
  set paragraphBorderLeftOffset(value: MeasurementValue);
  /** The distance to offset the right edge of the paragraph border. */
  get paragraphBorderRightOffset(): (number)[];
  set paragraphBorderRightOffset(value: MeasurementValue);
  /** The distance to offset the top edge of the paragraph border. */
  get paragraphBorderTopOffset(): (number)[];
  set paragraphBorderTopOffset(value: MeasurementValue);
  /** The distance to offset the bottom edge of the paragraph border. */
  get paragraphBorderBottomOffset(): (number)[];
  set paragraphBorderBottomOffset(value: MeasurementValue);
  /** If true, then paragraph border is also displayed at the points where the paragraph splits across frames or columns. */
  get paragraphBorderDisplayIfSplits(): (boolean)[];
  set paragraphBorderDisplayIfSplits(value: boolean);
  /** The hyphenation style chosen for the provider. */
  get providerHyphenationStyle(): (HyphenationStyleEnum)[];
  set providerHyphenationStyle(value: HyphenationStyleEnum);
  /** If true, consecutive para borders with completely similar properties are merged. */
  get mergeConsecutiveParaBorders(): (boolean)[];
  set mergeConsecutiveParaBorders(value: boolean);
  /** The space between paragraphs using same style. */
  get sameParaStyleSpacing(): (number | Spacing)[];
  set sameParaStyleSpacing(value: MeasurementValue | Spacing);
  /** Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long */
  get paragraphKashidaWidth(): (number)[];
  set paragraphKashidaWidth(value: number);
  /** The values of the applied variable font's design axes, indexed to match {@link setNthDesignAxis} and {@link isNthDesignAxisHidden}. */
  get designAxes(): (number[])[];
  set designAxes(value: number[]);
  /** If true, aligns the baseline of the text to the baseline grid. */
  get alignToBaseline(): (boolean)[];
  set alignToBaseline(value: boolean);
  /** The amount to indent the first line. */
  get firstLineIndent(): (number)[];
  set firstLineIndent(value: MeasurementValue);
  /** The width of the left indent. */
  get leftIndent(): (number)[];
  set leftIndent(value: MeasurementValue);
  /** The width of the right indent. */
  get rightIndent(): (number)[];
  set rightIndent(value: MeasurementValue);
  /** The height of the paragraph space above. */
  get spaceBefore(): (number)[];
  set spaceBefore(value: MeasurementValue);
  /** The height of the paragraph space below. */
  get spaceAfter(): (number)[];
  set spaceAfter(value: MeasurementValue);
  /** If true or set to an enumeration value, balances ragged lines. Note: Not valid with a single-line text composer. */
  get balanceRaggedLines(): (boolean | BalanceLinesStyle)[];
  set balanceRaggedLines(value: boolean | BalanceLinesStyle);
  /** The paragraph alignment. */
  get justification(): (Justification)[];
  set justification(value: Justification);
  /** The alignment to use for lines that contain a single word. */
  get singleWordJustification(): (SingleWordJustification)[];
  set singleWordJustification(value: SingleWordJustification);
  /** The percent of the type size to use for auto leading. (Range: 0 to 500). */
  get autoLeading(): (number)[];
  set autoLeading(value: number);
  /** The number of lines to drop cap. */
  get dropCapLines(): (number)[];
  set dropCapLines(value: number);
  /** The number of characters to drop cap. */
  get dropCapCharacters(): (number)[];
  set dropCapCharacters(value: number);
  /** If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames. */
  get keepLinesTogether(): (boolean)[];
  set keepLinesTogether(value: boolean);
  /** If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns. */
  get keepAllLinesTogether(): (boolean)[];
  set keepAllLinesTogether(value: boolean);
  /** The minimum number of lines to keep with the next paragraph. */
  get keepWithNext(): (number)[];
  set keepWithNext(value: number);
  /** The minimum number of lines to keep together in a paragraph before allowing a page break. */
  get keepFirstLines(): (number)[];
  set keepFirstLines(value: number);
  /** The minimum number of lines to keep together in a paragraph after a page break. */
  get keepLastLines(): (number)[];
  set keepLastLines(value: number);
  /** Where the paragraph is forced to begin — anywhere, or at the top of the next column, frame, page, or odd/even page. */
  get startParagraph(): (StartParagraph)[];
  set startParagraph(value: StartParagraph);
  /** The name of the composer that determines how the text's lines break — for example the single-line composer noted on {@link hyphenationZone}. */
  get composer(): (ComposerName)[];
  set composer(value: ComposerName);
  /** The minimum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get minimumWordSpacing(): (number)[];
  set minimumWordSpacing(value: number);
  /** The maximum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get maximumWordSpacing(): (number)[];
  set maximumWordSpacing(value: number);
  /** The desired word spacing, specified as a percentage of the font word space value. (Range: 0 to 1000) */
  get desiredWordSpacing(): (number)[];
  set desiredWordSpacing(value: number);
  /** The minimum letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get minimumLetterSpacing(): (number)[];
  set minimumLetterSpacing(value: number);
  /** The maximum letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get maximumLetterSpacing(): (number)[];
  set maximumLetterSpacing(value: number);
  /** The desired letter spacing, specified as a percentge of the built-in space between letters in the font. (Range: -100 to 500) */
  get desiredLetterSpacing(): (number)[];
  set desiredLetterSpacing(value: number);
  /** The minimum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get minimumGlyphScaling(): (number)[];
  set minimumGlyphScaling(value: number);
  /** The maximum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get maximumGlyphScaling(): (number)[];
  set maximumGlyphScaling(value: number);
  /** The desired width (as a percentage) of individual characters. (Range: 50 to 200) */
  get desiredGlyphScaling(): (number)[];
  set desiredGlyphScaling(value: number);
  /** If true, places a rule above the paragraph. */
  get ruleAbove(): (boolean)[];
  set ruleAbove(value: boolean);
  /** If true, the paragraph rule above will overprint. */
  get ruleAboveOverprint(): (boolean)[];
  set ruleAboveOverprint(value: boolean);
  /** The line weight of the rule above. */
  get ruleAboveLineWeight(): (number)[];
  set ruleAboveLineWeight(value: MeasurementValue);
  /** The tint (as a percentage) of the paragraph rule above. (Range: 0 to 100) */
  get ruleAboveTint(): (number)[];
  set ruleAboveTint(value: number);
  /** The amount to offset the paragraph rule above from the baseline of the first line the paragraph. */
  get ruleAboveOffset(): (number)[];
  set ruleAboveOffset(value: MeasurementValue);
  /** The distance to indent the left edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveLeftIndent(): (number)[];
  set ruleAboveLeftIndent(value: MeasurementValue);
  /** The distance to indent the right edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveRightIndent(): (number)[];
  set ruleAboveRightIndent(value: MeasurementValue);
  /** The basis (text width or column width) used to calculate the width of the paragraph rule above. */
  get ruleAboveWidth(): (RuleWidth)[];
  set ruleAboveWidth(value: RuleWidth);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule above. */
  get ruleAboveColor(): (Swatch)[];
  set ruleAboveColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule above. Note: Valid only when the paragraph rule above type is not solid. */
  get ruleAboveGapColor(): (Swatch)[];
  set ruleAboveGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the stroke gap color of the paragraph rule. (Range: 0 to 100) Note: Valid only when the rule above type is not solid. */
  get ruleAboveGapTint(): (number)[];
  set ruleAboveGapTint(value: number);
  /** If true, the stroke gap of the paragraph rule above will overprint. Note: Valid only the rule above type is not solid. */
  get ruleAboveGapOverprint(): (boolean)[];
  set ruleAboveGapOverprint(value: boolean);
  /** The stroke type of the rule above the paragraph. */
  get ruleAboveType(): (StrokeStyle)[];
  set ruleAboveType(value: StrokeStyle | string);
  /** If true, applies a paragraph rule below. */
  get ruleBelow(): (boolean)[];
  set ruleBelow(value: boolean);
  /** The line weight of the rule below. */
  get ruleBelowLineWeight(): (number)[];
  set ruleBelowLineWeight(value: MeasurementValue);
  /** The tint (as a percentage) of the paragraph rule below. (Range: 0 to 100) */
  get ruleBelowTint(): (number)[];
  set ruleBelowTint(value: number);
  /** The amount to offset the the paragraph rule below from the baseline of the last line of the paragraph. */
  get ruleBelowOffset(): (number)[];
  set ruleBelowOffset(value: MeasurementValue);
  /** The distance to indent the left edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowLeftIndent(): (number)[];
  set ruleBelowLeftIndent(value: MeasurementValue);
  /** The distance to indent the right edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowRightIndent(): (number)[];
  set ruleBelowRightIndent(value: MeasurementValue);
  /** The basis (text width or column width) used to calculate the width of the paragraph rule below. */
  get ruleBelowWidth(): (RuleWidth)[];
  set ruleBelowWidth(value: RuleWidth);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule below. */
  get ruleBelowColor(): (Swatch)[];
  set ruleBelowColor(value: Swatch | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule below. Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapColor(): (Swatch)[];
  set ruleBelowGapColor(value: Swatch | string);
  /** The tint (as a percentage) of the stroke gap color of the paragraph rule below. (Range: 0 to 100) Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapTint(): (number)[];
  set ruleBelowGapTint(value: number);
  /** The stroke type of the rule below the paragraph. */
  get ruleBelowType(): (StrokeStyle)[];
  set ruleBelowType(value: StrokeStyle | string);
  /** If true, allows hyphenation of capitalized words. */
  get hyphenateCapitalizedWords(): (boolean)[];
  set hyphenateCapitalizedWords(value: boolean);
  /** If true, allows hyphenation. */
  get hyphenation(): (boolean)[];
  set hyphenation(value: boolean);
  /** The minimum number of letters at the end of a word that can be broken by a hyphen. */
  get hyphenateBeforeLast(): (number)[];
  set hyphenateBeforeLast(value: number);
  /** The mininum number of letters at the beginning of a word that can be broken by a hyphen. */
  get hyphenateAfterFirst(): (number)[];
  set hyphenateAfterFirst(value: number);
  /** The minimum number of letters a word must have in order to qualify for hyphenation. */
  get hyphenateWordsLongerThan(): (number)[];
  set hyphenateWordsLongerThan(value: number);
  /** The maximum number of hyphens that can appear on consecutive lines. To specify unlimited consecutive lines, use zero. */
  get hyphenateLadderLimit(): (number)[];
  set hyphenateLadderLimit(value: number);
  /** The amount of white space allowed at the end of a line of non-justified text before hypenation begins. Note: Valid when composer is single-line composer. */
  get hyphenationZone(): (number)[];
  set hyphenationZone(value: MeasurementValue);
  /** The relative desirability of better spacing vs. fewer hyphens. A lower value results in greater use of hyphens. (Range: 0 to 100) */
  get hyphenWeight(): (number)[];
  set hyphenWeight(value: number);
  /** The character style to apply to the drop cap. */
  get dropCapStyle(): (CharacterStyle)[];
  set dropCapStyle(value: CharacterStyle | string);
  /** The paragraph style applied to the text. */
  get appliedParagraphStyle(): (ParagraphStyle)[];
  set appliedParagraphStyle(value: ParagraphStyle | string);
  /** The character style applied to the text. */
  get appliedCharacterStyle(): (CharacterStyle)[];
  set appliedCharacterStyle(value: CharacterStyle | string);
  /** The amount to indent the last line in the paragraph. */
  get lastLineIndent(): (number)[];
  set lastLineIndent(value: MeasurementValue);
  /** If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true. */
  get hyphenateLastWord(): (boolean)[];
  set hyphenateLastWord(value: boolean);
  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): (boolean)[];
  set otfSlashedZero(value: boolean);
  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): (boolean)[];
  set otfHistorical(value: boolean);
  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): (number)[];
  set otfStylisticSets(value: number);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text. */
  get gradientFillLength(): (number)[];
  set gradientFillLength(value: number);
  /** The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180) */
  get gradientFillAngle(): (number)[];
  set gradientFillAngle(value: number);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text. */
  get gradientStrokeLength(): (number)[];
  set gradientStrokeLength(value: number);
  /** The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180) */
  get gradientStrokeAngle(): (number)[];
  set gradientStrokeAngle(value: number);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y]. */
  get gradientFillStart(): (number[])[];
  set gradientFillStart(value: MeasurementValue[]);
  /** The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y]. */
  get gradientStrokeStart(): (number[])[];
  set gradientStrokeStart(value: MeasurementValue[]);
  /** If the first line in the paragraph should be kept with the last line of previous paragraph. */
  get keepWithPrevious(): (boolean)[];
  set keepWithPrevious(value: boolean);
  /** The number of columns a paragraph spans or the number of split columns. */
  get spanSplitColumnCount(): (number | SpanColumnCountOptions)[];
  set spanSplitColumnCount(value: number | SpanColumnCountOptions);
  /** Whether a paragraph should be a single column, span columns or split columns */
  get spanColumnType(): (SpanColumnTypeOptions)[];
  set spanColumnType(value: SpanColumnTypeOptions);
  /** The inside gutter if the paragraph splits columns */
  get splitColumnInsideGutter(): (number)[];
  set splitColumnInsideGutter(value: MeasurementValue);
  /** The outside gutter if the paragraph splits columns */
  get splitColumnOutsideGutter(): (number)[];
  set splitColumnOutsideGutter(value: MeasurementValue);
  /** The minimum space before a span or a split column */
  get spanColumnMinSpaceBefore(): (number)[];
  set spanColumnMinSpaceBefore(value: MeasurementValue);
  /** The minimum space after a span or a split column */
  get spanColumnMinSpaceAfter(): (number)[];
  set spanColumnMinSpaceAfter(value: MeasurementValue);
  /** If true, the rule below will overprint. */
  get ruleBelowOverprint(): (boolean)[];
  set ruleBelowOverprint(value: boolean);
  /** If true, the gap color of the rule below will overprint. */
  get ruleBelowGapOverprint(): (boolean)[];
  set ruleBelowGapOverprint(value: boolean);
  /** Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid. */
  get dropcapDetail(): (number)[];
  set dropcapDetail(value: number);
  /** If true, allows the last word in a text column to be hyphenated. */
  get hyphenateAcrossColumns(): (boolean)[];
  set hyphenateAcrossColumns(value: boolean);
  /** If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true. */
  get keepRuleAboveInFrame(): (boolean)[];
  set keepRuleAboveInFrame(value: boolean);
  /** If true, ignores optical edge alignment for the paragraph. */
  get ignoreEdgeAlignment(): (boolean)[];
  set ignoreEdgeAlignment(value: boolean);
  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): (boolean)[];
  set otfMark(value: boolean);
  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): (boolean)[];
  set otfLocale(value: boolean);
  /** Which contextual glyph form OpenType substitutes for joining scripts — initial, medial, final, isolated, or calculated automatically. */
  get positionalForm(): (PositionalForms)[];
  set positionalForm(value: PositionalForms);
  /** Whether the paragraph reads left-to-right or right-to-left. */
  get paragraphDirection(): (ParagraphDirectionOptions)[];
  set paragraphDirection(value: ParagraphDirectionOptions);
  /** The justification method for Arabic-script text — standard, Arabic, Naskh, or one of the kashida-based variants. See {@link ParagraphJustificationOptions}. */
  get paragraphJustification(): (ParagraphJustificationOptions)[];
  set paragraphJustification(value: ParagraphJustificationOptions);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): (number)[];
  set miterLimit(value: number);
  /** The stroke alignment applied to the text. */
  get strokeAlignment(): (TextStrokeAlign)[];
  set strokeAlignment(value: TextStrokeAlign);
  /** The stroke join type applied to the characters of the text. */
  get endJoin(): (OutlineJoin)[];
  set endJoin(value: OutlineJoin);
  /** If true, use overlapping swash forms in OpenType fonts */
  get otfOverlapSwash(): (boolean)[];
  set otfOverlapSwash(value: boolean);
  /** If true, use stylistic alternate forms in OpenType fonts */
  get otfStylisticAlternate(): (boolean)[];
  set otfStylisticAlternate(value: boolean);
  /** If true, use alternate justification forms in OpenType fonts */
  get otfJustificationAlternate(): (boolean)[];
  set otfJustificationAlternate(value: boolean);
  /** If true, use stretched alternate forms in OpenType fonts */
  get otfStretchedAlternate(): (boolean)[];
  set otfStretchedAlternate(value: boolean);
  /** The reading direction of the text's characters — left-to-right, right-to-left, or the script's default. */
  get characterDirection(): (CharacterDirectionOptions)[];
  set characterDirection(value: CharacterDirectionOptions);
  /** The direction the keyboard advances when entering text — left-to-right, right-to-left, or the script's default. */
  get keyboardDirection(): (CharacterDirectionOptions)[];
  set keyboardDirection(value: CharacterDirectionOptions);
  /** Which digit glyphs represent numbers in the text — Arabic numerals, Hindi, Farsi, or another script-specific digit set. */
  get digitsType(): (DigitsTypeOptions)[];
  set digitsType(value: DigitsTypeOptions);
  /** Whether kashida justification (Arabic letter elongation) is applied when justifying text. */
  get kashidas(): (KashidasOptions)[];
  set kashidas(value: KashidasOptions);
  /** Position of diacriticical characters. */
  get diacriticPosition(): (DiacriticPositionOptions)[];
  set diacriticPosition(value: DiacriticPositionOptions);
  /** The x (horizontal) offset for diacritic adjustment. */
  get xOffsetDiacritic(): (number)[];
  set xOffsetDiacritic(value: number);
  /** The y (vertical) offset for diacritic adjustment. */
  get yOffsetDiacritic(): (number)[];
  set yOffsetDiacritic(value: number);
  /**
   * The tab stops, as a list of property bags — distinct from the
   * {@link TabStop}/{@link TabStops} DOM collection, which holds the same stops as
   * objects.
   *
   * Assigning replaces the whole list; there is no way to add a single stop this way.
   */
  get tabList(): (object[])[];
  set tabList(value: PropertiesSetter<TabStop>[]);
  /** The named grid in use. */
  get appliedNamedGrid(): (NamedGrid)[];
  set appliedNamedGrid(value: NamedGrid);
  /** If true, aligns only the first line to the frame grid or baseline grid. If false, aligns all lines to the grid. */
  get gridAlignFirstLineOnly(): (boolean)[];
  set gridAlignFirstLineOnly(value: boolean);
  /** The alignment to the frame grid or baseline grid. */
  get gridAlignment(): (GridAlignment)[];
  set gridAlignment(value: GridAlignment);
  /** The manual gyoudori setting. */
  get gridGyoudori(): (number)[];
  set gridGyoudori(value: number);
  /** The number of half-width characters at or below which the characters automatically run horizontally in vertical text. */
  get autoTcy(): (number)[];
  set autoTcy(value: number);
  /** If true, auto tcy includes Roman characters. */
  get autoTcyIncludeRoman(): (boolean)[];
  set autoTcyIncludeRoman(value: boolean);
  /** The kinsoku set that determines legitimate line breaks. */
  get kinsokuSet(): (KinsokuTable | KinsokuSet | string)[];
  set kinsokuSet(value: KinsokuTable | KinsokuSet | string);
  /** The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined. */
  get kinsokuType(): (KinsokuType)[];
  set kinsokuType(value: KinsokuType);
  /** The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect. */
  get kinsokuHangType(): (KinsokuHangTypes)[];
  set kinsokuHangType(value: KinsokuHangTypes);
  /** If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect. */
  get bunriKinshi(): (boolean)[];
  set bunriKinshi(value: boolean);
  /** The mojikumi table controlling spacing between Japanese character classes and punctuation — a custom {@link MojikumiTable}, its name, or one of the built-in presets in {@link MojikumiTableDefaults}. */
  get mojikumi(): (MojikumiTable | string | MojikumiTableDefaults)[];
  set mojikumi(value: MojikumiTable | string | MojikumiTableDefaults);
  /** If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers. */
  get rensuuji(): (boolean)[];
  set rensuuji(value: boolean);
  /** If true, rotates Roman characters in vertical text. */
  get rotateSingleByteCharacters(): (boolean)[];
  set rotateSingleByteCharacters(value: boolean);
  /** The point from which leading is measured from line to line. */
  get leadingModel(): (LeadingModel)[];
  set leadingModel(value: LeadingModel);
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
  /** The fill tint (as a percentage) of kenten characters. (Range: 0 to 100) */
  get kentenTint(): (number)[];
  set kentenTint(value: number);
  /** The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100) */
  get kentenStrokeTint(): (number)[];
  set kentenStrokeTint(value: number);
  /** The stroke weight (in points) of kenten characters. */
  get kentenWeight(): (number)[];
  set kentenWeight(value: number);
  /** Whether the kenten fill overprints — on, off, or automatically. */
  get kentenOverprintFill(): (AdornmentOverprint)[];
  set kentenOverprintFill(value: AdornmentOverprint);
  /** Whether the kenten stroke overprints — on, off, or automatically. */
  get kentenOverprintStroke(): (AdornmentOverprint)[];
  set kentenOverprintStroke(value: AdornmentOverprint);
  /** The kenten mark applied above the characters — a dot, circle, triangle, bullseye, fisheye, or a custom character. */
  get kentenKind(): (KentenCharacter)[];
  set kentenKind(value: KentenCharacter);
  /** The distance between kenten characters and their parent characters. */
  get kentenPlacement(): (number)[];
  set kentenPlacement(value: number);
  /** The alignment of kenten characters relative to the parent characters. */
  get kentenAlignment(): (KentenAlignment)[];
  set kentenAlignment(value: KentenAlignment);
  /** Whether the kenten sits above-right or below-left of the parent character. */
  get kentenPosition(): (RubyKentenPosition)[];
  set kentenPosition(value: RubyKentenPosition);
  /** The font to use for kenten characters. */
  get kentenFont(): (Font)[];
  set kentenFont(value: Font | string);
  /** The font style of kenten characters. */
  get kentenFontStyle(): (string | NothingEnum.NOTHING)[];
  set kentenFontStyle(value: string | NothingEnum.NOTHING);
  /** The size (in points) of kenten characters. */
  get kentenFontSize(): (number)[];
  set kentenFontSize(value: number);
  /** The horizontal size of kenten characters as a percent of the original size. */
  get kentenXScale(): (number)[];
  set kentenXScale(value: number);
  /** The vertical size of kenten charachers as a percent of the original size. */
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
  /** The tint (as a percentage) of the ruby fill color. (Range: 0 to 100) */
  get rubyTint(): (number)[];
  set rubyTint(value: number);
  /** The stroke weight (in points) of ruby characters. */
  get rubyWeight(): (number)[];
  set rubyWeight(value: number);
  /** Whether the ruby fill overprints — on, off, or automatically. */
  get rubyOverprintFill(): (AdornmentOverprint)[];
  set rubyOverprintFill(value: AdornmentOverprint);
  /** Whether the ruby stroke overprints — on, off, or automatically. */
  get rubyOverprintStroke(): (AdornmentOverprint)[];
  set rubyOverprintStroke(value: AdornmentOverprint);
  /** The stroke tint (as a percentage) of ruby characters. */
  get rubyStrokeTint(): (number)[];
  set rubyStrokeTint(value: number);
  /** The font applied to ruby characters. */
  get rubyFont(): (Font)[];
  set rubyFont(value: Font | string);
  /** The font style of ruby characters. */
  get rubyFontStyle(): (string | NothingEnum.NOTHING)[];
  set rubyFontStyle(value: string | NothingEnum.NOTHING);
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
  /** Whether ruby text is assigned to the whole group of characters or to each character individually. */
  get rubyType(): (RubyTypes)[];
  set rubyType(value: RubyTypes);
  /** How ruby text is aligned to its parent characters — left, center, right, fully justified, or one of the Japanese-standard (JIS, equal-aki, 1-aki) spacing methods. */
  get rubyAlignment(): (RubyAlignments)[];
  set rubyAlignment(value: RubyAlignments);
  /** Whether the ruby sits above-right or below-left of the parent text. */
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
  /** How the lines of warichu text are aligned — left, center, right, automatically, or justified with the last line aligned left, center, or right. */
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
  /** If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph. */
  get paragraphGyoudori(): (boolean)[];
  set paragraphGyoudori(value: boolean);
  /** The number of digits included in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyDigits(): (number)[];
  set rubyAutoTcyDigits(value: number);
  /** If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyIncludeRoman(): (boolean)[];
  set rubyAutoTcyIncludeRoman(value: boolean);
  /** If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. */
  get rubyAutoTcyAutoScale(): (boolean)[];
  set rubyAutoTcyAutoScale(value: boolean);
  /** If true, ideographic spaces will not wrap to the next line like text characters. */
  get treatIdeographicSpaceAsSpace(): (boolean)[];
  set treatIdeographicSpaceAsSpace(value: boolean);
  /** If true, words unassociated with a hyphenation dictionary can break to the next line on any character. */
  get allowArbitraryHyphenation(): (boolean)[];
  set allowArbitraryHyphenation(value: boolean);
  /** List type for bullets and numbering. */
  get bulletsAndNumberingListType(): (ListType)[];
  set bulletsAndNumberingListType(value: ListType);
  /** The character style to be used for the text after string. */
  get bulletsCharacterStyle(): (CharacterStyle)[];
  set bulletsCharacterStyle(value: CharacterStyle | string);
  /** The character style to be used for the number string. */
  get numberingCharacterStyle(): (CharacterStyle)[];
  set numberingCharacterStyle(value: CharacterStyle | string);
  /** The number string expression for numbering. */
  get numberingExpression(): (string)[];
  set numberingExpression(value: string);
  /** The text after string expression for bullets. */
  get bulletsTextAfter(): (string)[];
  set bulletsTextAfter(value: string);
  /** The list to be part of. */
  get appliedNumberingList(): (NumberingList)[];
  set appliedNumberingList(value: NumberingList | string);
  /** The level of the paragraph. */
  get numberingLevel(): (number)[];
  set numberingLevel(value: number);
  /**
   * The numeral or letter style for the number string.
   *
   * Accepts a {@link NumberingStyle} member, or the format template string InDesign stores
   * for it — `I, II, III, IV...`, `$ID/(kanji) 1,2,3,4...`. The templates are tabulated on
   * {@link NumberingStyle}.
   */
  get numberingFormat(): (NumberingStyle | string)[];
  set numberingFormat(value: NumberingStyle | string);
  /** Continue the numbering at this level. */
  get numberingContinue(): (boolean)[];
  set numberingContinue(value: boolean);
  /** Determines starting number in a numbered list. */
  get numberingStartAt(): (number)[];
  set numberingStartAt(value: number);
  /** If true, apply the numbering restart policy. */
  get numberingApplyRestartPolicy(): (boolean)[];
  set numberingApplyRestartPolicy(value: boolean);
  /** The alignment of the bullet character. */
  get bulletsAlignment(): (ListAlignment)[];
  set bulletsAlignment(value: ListAlignment);
  /** The alignment of the number. */
  get numberingAlignment(): (ListAlignment)[];
  set numberingAlignment(value: ListAlignment);
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
