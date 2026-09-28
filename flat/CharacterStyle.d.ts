/**
 * CharacterStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { CharacterStyleGroup } from './CharacterStyleGroup';
import type { CharacterStyleAttributes, TextGraphicAttributes } from './_base/TextAttributes';
import type { StyleExportTagMaps } from './StyleExportTagMaps';
import type { StyleMoveReference } from './_base/Unions';
import type { LocationOptions } from './Enums/LocationOptions';
import type { NothingEnum } from './Enums/NothingEnum';
import type { ColorSpace } from './Enums/ColorSpace';
import type { UIColors } from './Enums/UIColors';
import type { FilePath } from './_base/Types';
import type { CharacterStyles } from './CharacterStyles';
import type { Color } from './Color';
import type { Capitalization } from './Enums/Capitalization';
import type { DigitsTypeOptions } from './Enums/DigitsTypeOptions';
import type { Leading } from './Enums/Leading';
import type { PositionalForms } from './Enums/PositionalForms';
import type { RubyAlignments } from './Enums/RubyAlignments';
import type { RubyTypes } from './Enums/RubyTypes';
import type { WarichuAlignment } from './Enums/WarichuAlignment';
import type { Font } from './Font';
import type { Gradient } from './Gradient';
import type { Language } from './Language';
import type { LanguageWithVendors } from './LanguageWithVendors';
import type { MixedInk } from './MixedInk';
import type { Swatch } from './Swatch';
import type { Tint } from './Tint';
import type { AdornmentOverprint } from './Enums/AdornmentOverprint';
import type { AlternateGlyphForms } from './Enums/AlternateGlyphForms';
import type { CharacterAlignment } from './Enums/CharacterAlignment';
import type { CharacterDirectionOptions } from './Enums/CharacterDirectionOptions';
import type { DiacriticPositionOptions } from './Enums/DiacriticPositionOptions';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { InDesignEventMap } from './_base/Events';
import type { KashidasOptions } from './Enums/KashidasOptions';
import type { KentenAlignment } from './Enums/KentenAlignment';
import type { KentenCharacter } from './Enums/KentenCharacter';
import type { KentenCharacterSet } from './Enums/KentenCharacterSet';
import type { KerningMethodName } from './_base/Types';
import type { MeasurementValue } from './_base/Types';
import type { OTFFigureStyle } from './Enums/OTFFigureStyle';
import type { OutlineJoin } from './Enums/OutlineJoin';
import type { Position } from './Enums/Position';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
import type { RubyKentenPosition } from './Enums/RubyKentenPosition';
import type { RubyOverhang } from './Enums/RubyOverhang';
import type { RubyParentSpacing } from './Enums/RubyParentSpacing';
import type { StrokeStyle } from './StrokeStyle';
import type { TextStrokeAlign } from './Enums/TextStrokeAlign';
/**
 * A named character style definition, held in a document's or the application's {@link CharacterStyles} collection (optionally nested inside a {@link CharacterStyleGroup}).
 *
 * Stores the same character formatting a text range carries — font, size, leading, kerning,
 * OpenType features, CJK attributes — but as a reusable named definition rather than as
 * formatting applied directly to text.
 *
 * A character style holds only the attributes explicitly set on it: any attribute left
 * unset reads back as {@link NothingEnum.NOTHING} rather than resolving to a value.
 */
export interface CharacterStyle {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Document | Application | CharacterStyleGroup;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<CharacterStyle, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<CharacterStyle, 'single'>);
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
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): string;
  set label(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): void;
  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): string;
  /**
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /**
   * The applied font. Accepts a {@link Font} object or a font-family name as a
   * `string`; pair with {@link fontStyle} to pick a specific style.
   */
  get appliedFont(): Font | null;
  set appliedFont(value: Font | string | NothingEnum.NOTHING);
  /** The name of the font style. */
  get fontStyle(): string | NothingEnum.NOTHING;
  set fontStyle(value: string | NothingEnum.NOTHING);
  /** The type size. */
  get pointSize(): number | NothingEnum.NOTHING;
  set pointSize(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * The leading. A number is explicit leading; the {@link Leading} enumerator
   * `AUTO` selects automatic leading.
   */
  get leading(): number | Leading | NothingEnum.NOTHING;
  set leading(value: MeasurementValue | Leading | NothingEnum.NOTHING);
  /** The type of pair kerning. */
  get kerningMethod(): KerningMethodName | NothingEnum.NOTHING;
  set kerningMethod(value: KerningMethodName | NothingEnum.NOTHING);
  /** Tracking, in thousandths of an em, applied between characters. */
  get tracking(): number | NothingEnum.NOTHING;
  set tracking(value: number | NothingEnum.NOTHING);
  /** Whether the text renders normally, as small caps, as all caps, or using the font's OpenType small-caps forms. See {@link Capitalization}. */
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
  /** If `true`, substitutes ligature glyphs (e.g. `fi`, `fl`) where available. */
  get ligatures(): boolean | NothingEnum.NOTHING;
  set ligatures(value: boolean | NothingEnum.NOTHING);
  /** If true, keeps the text on the same line. */
  get noBreak(): boolean | NothingEnum.NOTHING;
  set noBreak(value: boolean | NothingEnum.NOTHING);
  /** The baseline shift applied to the text. */
  get baselineShift(): number | NothingEnum.NOTHING;
  set baselineShift(value: MeasurementValue | NothingEnum.NOTHING);
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
  get underlineColor(): Swatch | null;
  set underlineColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. */
  get underlineGapColor(): Swatch | null;
  set underlineGapColor(value: Swatch | string | NothingEnum.NOTHING);
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
  get underlineType(): StrokeStyle | null;
  set underlineType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The amount by which to offset the underline from the text baseline. */
  get underlineOffset(): number | NothingEnum.NOTHING;
  set underlineOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke weight of the underline stroke. */
  get underlineWeight(): number | NothingEnum.NOTHING;
  set underlineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. */
  get strikeThroughColor(): Swatch | null;
  set strikeThroughColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. */
  get strikeThroughGapColor(): Swatch | null;
  set strikeThroughGapColor(value: Swatch | string | NothingEnum.NOTHING);
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
  get strikeThroughType(): StrokeStyle | null;
  set strikeThroughType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The amount by which to offset the strikethrough stroke from the text baseline. */
  get strikeThroughOffset(): number | NothingEnum.NOTHING;
  set strikeThroughOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke weight of the strikethrough stroke. */
  get strikeThroughWeight(): number | NothingEnum.NOTHING;
  set strikeThroughWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * The applied language / spelling dictionary. Accepts a
   * {@link LanguageWithVendors} or {@link Language} object, or its name.
   */
  get appliedLanguage(): LanguageWithVendors | Language | NothingEnum.NOTHING;
  set appliedLanguage(value: LanguageWithVendors | Language | string | NothingEnum.NOTHING);
  /** Value of Design Axes. */
  get designAxes(): number[] | NothingEnum.NOTHING;
  set designAxes(value: number[] | NothingEnum.NOTHING);
  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): boolean | NothingEnum.NOTHING;
  set otfSlashedZero(value: boolean | NothingEnum.NOTHING);
  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): boolean | NothingEnum.NOTHING;
  set otfHistorical(value: boolean | NothingEnum.NOTHING);
  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): number | NothingEnum.NOTHING;
  set otfStylisticSets(value: number | NothingEnum.NOTHING);
  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): boolean | NothingEnum.NOTHING;
  set otfMark(value: boolean | NothingEnum.NOTHING);
  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): boolean | NothingEnum.NOTHING;
  set otfLocale(value: boolean | NothingEnum.NOTHING);
  /** Which contextual glyph form — initial, medial, final, or isolated — to use for connected scripts, or `CALCULATE` to derive it automatically. See {@link PositionalForms}. */
  get positionalForm(): PositionalForms | NothingEnum.NOTHING;
  set positionalForm(value: PositionalForms | NothingEnum.NOTHING);
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
  /** Which digit glyphs — Arabic numerals, Hindi, Farsi, or another script's digits — render numbers in the text. See {@link DigitsTypeOptions}. */
  get digitsType(): DigitsTypeOptions | NothingEnum.NOTHING;
  set digitsType(value: DigitsTypeOptions | NothingEnum.NOTHING);
  /** Use of Kashidas for justification. */
  get kashidas(): KashidasOptions | NothingEnum.NOTHING;
  set kashidas(value: KashidasOptions | NothingEnum.NOTHING);
  /** Position of diacritical characters. */
  get diacriticPosition(): DiacriticPositionOptions | NothingEnum.NOTHING;
  set diacriticPosition(value: DiacriticPositionOptions | NothingEnum.NOTHING);
  /** The x (horizontal) offset for diacritic adjustment. */
  get xOffsetDiacritic(): number | NothingEnum.NOTHING;
  set xOffsetDiacritic(value: number | NothingEnum.NOTHING);
  /** The y (vertical) offset for diacritic adjustment. */
  get yOffsetDiacritic(): number | NothingEnum.NOTHING;
  set yOffsetDiacritic(value: number | NothingEnum.NOTHING);
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
  set kentenFillColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. */
  get kentenStrokeColor(): Swatch | NothingEnum.NOTHING;
  set kentenStrokeColor(value: Swatch | string | NothingEnum.NOTHING);
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
  set kentenFont(value: Font | string | NothingEnum.NOTHING);
  /** The font style of kenten characters. */
  get kentenFontStyle(): string | NothingEnum.NOTHING;
  set kentenFontStyle(value: string | NothingEnum.NOTHING);
  /** The size (in points) of kenten characters. */
  get kentenFontSize(): number | NothingEnum.NOTHING;
  set kentenFontSize(value: number | NothingEnum.NOTHING);
  /** The horizontal size of kenten characters as a percent of the original size. */
  get kentenXScale(): number | NothingEnum.NOTHING;
  set kentenXScale(value: number | NothingEnum.NOTHING);
  /** The vertical size of kenten characters as a percent of the original size. */
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
  set rubyFill(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. */
  get rubyStroke(): Swatch | NothingEnum.NOTHING;
  set rubyStroke(value: Swatch | string | NothingEnum.NOTHING);
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
  set rubyFont(value: Font | string | NothingEnum.NOTHING);
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
  /** Whether ruby is assigned once to the whole character group or individually per character. See {@link RubyTypes}. */
  get rubyType(): RubyTypes | NothingEnum.NOTHING;
  set rubyType(value: RubyTypes | NothingEnum.NOTHING);
  /** How the ruby text aligns relative to its parent characters — left, centered, right, justified, or one of the JIS/aki spacing variants. See {@link RubyAlignments}. */
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
  /** How warichu lines align within the text frame — automatic, left/center/right, or one of the justified variants. See {@link WarichuAlignment}. */
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
  /** The number of digits included in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyDigits(): number | NothingEnum.NOTHING;
  set rubyAutoTcyDigits(value: number | NothingEnum.NOTHING);
  /** If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyIncludeRoman(): boolean | NothingEnum.NOTHING;
  set rubyAutoTcyIncludeRoman(value: boolean | NothingEnum.NOTHING);
  /** If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. */
  get rubyAutoTcyAutoScale(): boolean | NothingEnum.NOTHING;
  set rubyAutoTcyAutoScale(value: boolean | NothingEnum.NOTHING);
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
  /** The object's DOM class name. */
  readonly constructorName: 'CharacterStyle';
  /** Resolves the proxy into the individual {@link CharacterStyle} objects it stands for. */
  getElements(): CharacterStyle[];
  /** The unique ID of the character style, stable across saves and reopens. */
  readonly id: number;
  /** The name of the character style. */
  get name(): string;
  set name(value: string);
  /** If `true`, the style was imported from another document. */
  readonly imported: boolean | NothingEnum.NOTHING;
  /** The style this style is based on. Accepts a {@link CharacterStyle} or its name. */
  get basedOn(): CharacterStyle | string;
  set basedOn(value: CharacterStyle | string);
  /** A collection of style export tag maps, mapping the style to markup tags for each export format. */
  readonly styleExportTagMaps: StyleExportTagMaps;
  /** If `true`, generates a separate document when exporting to EPUB. */
  get splitDocument(): boolean | NothingEnum.NOTHING;
  set splitDocument(value: boolean | NothingEnum.NOTHING);
  /** If `true`, emits CSS for this style when exporting to EPUB or HTML. */
  get emitCss(): boolean | NothingEnum.NOTHING;
  set emitCss(value: boolean | NothingEnum.NOTHING);
  /**
   * A unique identifier that can be assigned to the style to differentiate it
   * from others. Internal use only.
   */
  get styleUniqueId(): string | NothingEnum.NOTHING;
  set styleUniqueId(value: string | NothingEnum.NOTHING);
  /** If `true`, generates a CSS class attribute for the style on export. */
  get includeClass(): boolean | NothingEnum.NOTHING;
  set includeClass(value: boolean | NothingEnum.NOTHING);
  /** The ARIA role to emit for text in this style, as recommended by the IDPF, when exporting to EPUB. */
  get epubAriaRole(): string | NothingEnum.NOTHING;
  set epubAriaRole(value: string | NothingEnum.NOTHING);
  /**
   * The color used to preview the style in the Paragraph/Character Styles
   * panel, as `[R, G, B]` (each 0-255) or a {@link UIColors} enumerator.
   */
  get previewColor(): [number, number, number] | UIColors | NothingEnum.NOTHING;
  set previewColor(value: [number, number, number] | UIColors | NothingEnum.NOTHING);
  /**
   * Sets the value of the design axis at `nthAxisIndex` in a variable font
   * applied through this style.
   */
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): void;
  /** Whether the design axis at `nthAxisIndex` is hidden in a variable font applied through this style. */
  isNthDesignAxisHidden(nthAxisIndex: number): boolean;
  /**
   * Renders a sample thumbnail image of `previewText` set in this style, and
   * writes it to `to`.
   * @param space The color space (RGB, CMYK, or LAB) `colorValue` is expressed in.
   * @param colorValue The sample text color, as component values in `space`.
   */
  createThumbnailWithProperties(
    previewText: string,
    pointSize: number,
    space: ColorSpace,
    colorValue: number[],
    to: FilePath,
  ): boolean;
  /**
   * Deletes the style.
   * @param replacingWith The style applied to any text currently tagged with this style. Text is left unstyled if omitted.
   */
  remove(replacingWith?: CharacterStyle | string): void;
  /** Duplicates the character style. */
  duplicate(): CharacterStyle;
  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): CharacterStyle;
}


/**
 * The broadcast proxy for {@link CharacterStyle} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link CharacterStyle} there.
 */
export interface CharacterStylePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Document | Application | CharacterStyleGroup)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<CharacterStylePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<CharacterStylePlural, 'plural'>);
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
   * A property that can be set to any string.
   * Note: In InDesign's UI this is user viewable and modifiable via the Script Label panel.
   */
  get label(): (string)[];
  set label(value: string);
  /**
   * Sets the label to the value associated with the specified key.
   */
  insertLabel(key: string, value: string): (void)[];
  /**
   * Gets the label value associated with the specified key.
   */
  extractLabel(key: string): (string)[];
  /**
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /**
   * The applied font. Accepts a {@link Font} object or a font-family name as a
   * `string`; pair with {@link fontStyle} to pick a specific style.
   */
  get appliedFont(): (Font | null)[];
  set appliedFont(value: Font | string | NothingEnum.NOTHING);
  /** The name of the font style. */
  get fontStyle(): (string | NothingEnum.NOTHING)[];
  set fontStyle(value: string | NothingEnum.NOTHING);
  /** The type size. */
  get pointSize(): (number | NothingEnum.NOTHING)[];
  set pointSize(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * The leading. A number is explicit leading; the {@link Leading} enumerator
   * `AUTO` selects automatic leading.
   */
  get leading(): (number | Leading | NothingEnum.NOTHING)[];
  set leading(value: MeasurementValue | Leading | NothingEnum.NOTHING);
  /** The type of pair kerning. */
  get kerningMethod(): (KerningMethodName | NothingEnum.NOTHING)[];
  set kerningMethod(value: KerningMethodName | NothingEnum.NOTHING);
  /** Tracking, in thousandths of an em, applied between characters. */
  get tracking(): (number | NothingEnum.NOTHING)[];
  set tracking(value: number | NothingEnum.NOTHING);
  /** Whether the text renders normally, as small caps, as all caps, or using the font's OpenType small-caps forms. See {@link Capitalization}. */
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
  /** If `true`, substitutes ligature glyphs (e.g. `fi`, `fl`) where available. */
  get ligatures(): (boolean | NothingEnum.NOTHING)[];
  set ligatures(value: boolean | NothingEnum.NOTHING);
  /** If true, keeps the text on the same line. */
  get noBreak(): (boolean | NothingEnum.NOTHING)[];
  set noBreak(value: boolean | NothingEnum.NOTHING);
  /** The baseline shift applied to the text. */
  get baselineShift(): (number | NothingEnum.NOTHING)[];
  set baselineShift(value: MeasurementValue | NothingEnum.NOTHING);
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
  get underlineColor(): (Swatch | null)[];
  set underlineColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. */
  get underlineGapColor(): (Swatch | null)[];
  set underlineGapColor(value: Swatch | string | NothingEnum.NOTHING);
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
  get underlineType(): (StrokeStyle | null)[];
  set underlineType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The amount by which to offset the underline from the text baseline. */
  get underlineOffset(): (number | NothingEnum.NOTHING)[];
  set underlineOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke weight of the underline stroke. */
  get underlineWeight(): (number | NothingEnum.NOTHING)[];
  set underlineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. */
  get strikeThroughColor(): (Swatch | null)[];
  set strikeThroughColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. */
  get strikeThroughGapColor(): (Swatch | null)[];
  set strikeThroughGapColor(value: Swatch | string | NothingEnum.NOTHING);
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
  get strikeThroughType(): (StrokeStyle | null)[];
  set strikeThroughType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The amount by which to offset the strikethrough stroke from the text baseline. */
  get strikeThroughOffset(): (number | NothingEnum.NOTHING)[];
  set strikeThroughOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke weight of the strikethrough stroke. */
  get strikeThroughWeight(): (number | NothingEnum.NOTHING)[];
  set strikeThroughWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * The applied language / spelling dictionary. Accepts a
   * {@link LanguageWithVendors} or {@link Language} object, or its name.
   */
  get appliedLanguage(): (LanguageWithVendors | Language | NothingEnum.NOTHING)[];
  set appliedLanguage(value: LanguageWithVendors | Language | string | NothingEnum.NOTHING);
  /** Value of Design Axes. */
  get designAxes(): (number[] | NothingEnum.NOTHING)[];
  set designAxes(value: number[] | NothingEnum.NOTHING);
  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): (boolean | NothingEnum.NOTHING)[];
  set otfSlashedZero(value: boolean | NothingEnum.NOTHING);
  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): (boolean | NothingEnum.NOTHING)[];
  set otfHistorical(value: boolean | NothingEnum.NOTHING);
  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): (number | NothingEnum.NOTHING)[];
  set otfStylisticSets(value: number | NothingEnum.NOTHING);
  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): (boolean | NothingEnum.NOTHING)[];
  set otfMark(value: boolean | NothingEnum.NOTHING);
  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): (boolean | NothingEnum.NOTHING)[];
  set otfLocale(value: boolean | NothingEnum.NOTHING);
  /** Which contextual glyph form — initial, medial, final, or isolated — to use for connected scripts, or `CALCULATE` to derive it automatically. See {@link PositionalForms}. */
  get positionalForm(): (PositionalForms | NothingEnum.NOTHING)[];
  set positionalForm(value: PositionalForms | NothingEnum.NOTHING);
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
  /** Which digit glyphs — Arabic numerals, Hindi, Farsi, or another script's digits — render numbers in the text. See {@link DigitsTypeOptions}. */
  get digitsType(): (DigitsTypeOptions | NothingEnum.NOTHING)[];
  set digitsType(value: DigitsTypeOptions | NothingEnum.NOTHING);
  /** Use of Kashidas for justification. */
  get kashidas(): (KashidasOptions | NothingEnum.NOTHING)[];
  set kashidas(value: KashidasOptions | NothingEnum.NOTHING);
  /** Position of diacritical characters. */
  get diacriticPosition(): (DiacriticPositionOptions | NothingEnum.NOTHING)[];
  set diacriticPosition(value: DiacriticPositionOptions | NothingEnum.NOTHING);
  /** The x (horizontal) offset for diacritic adjustment. */
  get xOffsetDiacritic(): (number | NothingEnum.NOTHING)[];
  set xOffsetDiacritic(value: number | NothingEnum.NOTHING);
  /** The y (vertical) offset for diacritic adjustment. */
  get yOffsetDiacritic(): (number | NothingEnum.NOTHING)[];
  set yOffsetDiacritic(value: number | NothingEnum.NOTHING);
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
  set kentenFillColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. */
  get kentenStrokeColor(): (Swatch | NothingEnum.NOTHING)[];
  set kentenStrokeColor(value: Swatch | string | NothingEnum.NOTHING);
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
  set kentenFont(value: Font | string | NothingEnum.NOTHING);
  /** The font style of kenten characters. */
  get kentenFontStyle(): (string | NothingEnum.NOTHING)[];
  set kentenFontStyle(value: string | NothingEnum.NOTHING);
  /** The size (in points) of kenten characters. */
  get kentenFontSize(): (number | NothingEnum.NOTHING)[];
  set kentenFontSize(value: number | NothingEnum.NOTHING);
  /** The horizontal size of kenten characters as a percent of the original size. */
  get kentenXScale(): (number | NothingEnum.NOTHING)[];
  set kentenXScale(value: number | NothingEnum.NOTHING);
  /** The vertical size of kenten characters as a percent of the original size. */
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
  set rubyFill(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. */
  get rubyStroke(): (Swatch | NothingEnum.NOTHING)[];
  set rubyStroke(value: Swatch | string | NothingEnum.NOTHING);
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
  set rubyFont(value: Font | string | NothingEnum.NOTHING);
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
  /** Whether ruby is assigned once to the whole character group or individually per character. See {@link RubyTypes}. */
  get rubyType(): (RubyTypes | NothingEnum.NOTHING)[];
  set rubyType(value: RubyTypes | NothingEnum.NOTHING);
  /** How the ruby text aligns relative to its parent characters — left, centered, right, justified, or one of the JIS/aki spacing variants. See {@link RubyAlignments}. */
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
  /** How warichu lines align within the text frame — automatic, left/center/right, or one of the justified variants. See {@link WarichuAlignment}. */
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
  /** The number of digits included in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyDigits(): (number | NothingEnum.NOTHING)[];
  set rubyAutoTcyDigits(value: number | NothingEnum.NOTHING);
  /** If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyIncludeRoman(): (boolean | NothingEnum.NOTHING)[];
  set rubyAutoTcyIncludeRoman(value: boolean | NothingEnum.NOTHING);
  /** If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. */
  get rubyAutoTcyAutoScale(): (boolean | NothingEnum.NOTHING)[];
  set rubyAutoTcyAutoScale(value: boolean | NothingEnum.NOTHING);
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
  /** The object's DOM class name. */
  readonly constructorName: 'CharacterStyle';
  /** Resolves the proxy into the individual {@link CharacterStyle} objects it stands for. */
  getElements(): CharacterStyle[];
  /** The unique ID of the character style, stable across saves and reopens. */
  readonly id: (number)[];
  /** The name of the character style. */
  get name(): (string)[];
  set name(value: string);
  /** If `true`, the style was imported from another document. */
  readonly imported: (boolean | NothingEnum.NOTHING)[];
  /** The style this style is based on. Accepts a {@link CharacterStyle} or its name. */
  get basedOn(): (CharacterStyle | string)[];
  set basedOn(value: CharacterStyle | string);
  /** A collection of style export tag maps, mapping the style to markup tags for each export format. */
  readonly styleExportTagMaps: StyleExportTagMaps;
  /** If `true`, generates a separate document when exporting to EPUB. */
  get splitDocument(): (boolean | NothingEnum.NOTHING)[];
  set splitDocument(value: boolean | NothingEnum.NOTHING);
  /** If `true`, emits CSS for this style when exporting to EPUB or HTML. */
  get emitCss(): (boolean | NothingEnum.NOTHING)[];
  set emitCss(value: boolean | NothingEnum.NOTHING);
  /**
   * A unique identifier that can be assigned to the style to differentiate it
   * from others. Internal use only.
   */
  get styleUniqueId(): (string | NothingEnum.NOTHING)[];
  set styleUniqueId(value: string | NothingEnum.NOTHING);
  /** If `true`, generates a CSS class attribute for the style on export. */
  get includeClass(): (boolean | NothingEnum.NOTHING)[];
  set includeClass(value: boolean | NothingEnum.NOTHING);
  /** The ARIA role to emit for text in this style, as recommended by the IDPF, when exporting to EPUB. */
  get epubAriaRole(): (string | NothingEnum.NOTHING)[];
  set epubAriaRole(value: string | NothingEnum.NOTHING);
  /**
   * The color used to preview the style in the Paragraph/Character Styles
   * panel, as `[R, G, B]` (each 0-255) or a {@link UIColors} enumerator.
   */
  get previewColor(): ([number, number, number] | UIColors | NothingEnum.NOTHING)[];
  set previewColor(value: [number, number, number] | UIColors | NothingEnum.NOTHING);
  /**
   * Sets the value of the design axis at `nthAxisIndex` in a variable font
   * applied through this style.
   */
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): (void)[];
  /** Whether the design axis at `nthAxisIndex` is hidden in a variable font applied through this style. */
  isNthDesignAxisHidden(nthAxisIndex: number): (boolean)[];
  /**
   * Renders a sample thumbnail image of `previewText` set in this style, and
   * writes it to `to`.
   * @param space The color space (RGB, CMYK, or LAB) `colorValue` is expressed in.
   * @param colorValue The sample text color, as component values in `space`.
   */
  createThumbnailWithProperties(
    previewText: string,
    pointSize: number,
    space: ColorSpace,
    colorValue: number[],
    to: FilePath,
  ): boolean;
  /**
   * Deletes the style.
   * @param replacingWith The style applied to any text currently tagged with this style. Text is left unstyled if omitted.
   */
  remove(replacingWith?: CharacterStyle | string): (void)[];
  /** Duplicates the character style. */
  duplicate(): (CharacterStyle)[];
  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): (CharacterStyle)[];
}
