/**
 * TextAttributes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { ComposerName, KerningMethodName, Mode, Read } from './Types';
import type { CharacterStyle } from '../CharacterStyle';
import type { TabStop } from '../TabStop';
import type { PropertiesSetter } from './Properties';
import type { AdornmentOverprint } from '../Enums/AdornmentOverprint';
import type { AlternateGlyphForms } from '../Enums/AlternateGlyphForms';
import type { BalanceLinesStyle } from '../Enums/BalanceLinesStyle';
import type { Capitalization } from '../Enums/Capitalization';
import type { CharacterAlignment } from '../Enums/CharacterAlignment';
import type { CharacterDirectionOptions } from '../Enums/CharacterDirectionOptions';
import type { CornerOptions } from '../Enums/CornerOptions';
import type { DiacriticPositionOptions } from '../Enums/DiacriticPositionOptions';
import type { DigitsTypeOptions } from '../Enums/DigitsTypeOptions';
import type { EndCap } from '../Enums/EndCap';
import type { EndJoin } from '../Enums/EndJoin';
import type { GridAlignment } from '../Enums/GridAlignment';
import type { HyphenationStyleEnum } from '../Enums/HyphenationStyleEnum';
import type { Justification } from '../Enums/Justification';
import type { KashidasOptions } from '../Enums/KashidasOptions';
import type { KentenAlignment } from '../Enums/KentenAlignment';
import type { KentenCharacter } from '../Enums/KentenCharacter';
import type { KentenCharacterSet } from '../Enums/KentenCharacterSet';
import type { KinsokuHangTypes } from '../Enums/KinsokuHangTypes';
import type { KinsokuSet } from '../Enums/KinsokuSet';
import type { KinsokuType } from '../Enums/KinsokuType';
import type { Leading } from '../Enums/Leading';
import type { LeadingModel } from '../Enums/LeadingModel';
import type { ListAlignment } from '../Enums/ListAlignment';
import type { ListType } from '../Enums/ListType';
import type { MojikumiTableDefaults } from '../Enums/MojikumiTableDefaults';
import type { NothingEnum } from '../Enums/NothingEnum';
import type { NumberingStyle } from '../Enums/NumberingStyle';
import type { OTFFigureStyle } from '../Enums/OTFFigureStyle';
import type { OutlineJoin } from '../Enums/OutlineJoin';
import type { ParagraphBorderBottomOriginEnum } from '../Enums/ParagraphBorderBottomOriginEnum';
import type { ParagraphBorderEnum } from '../Enums/ParagraphBorderEnum';
import type { ParagraphBorderTopOriginEnum } from '../Enums/ParagraphBorderTopOriginEnum';
import type { ParagraphDirectionOptions } from '../Enums/ParagraphDirectionOptions';
import type { ParagraphJustificationOptions } from '../Enums/ParagraphJustificationOptions';
import type { ParagraphShadingBottomOriginEnum } from '../Enums/ParagraphShadingBottomOriginEnum';
import type { ParagraphShadingTopOriginEnum } from '../Enums/ParagraphShadingTopOriginEnum';
import type { ParagraphShadingWidthEnum } from '../Enums/ParagraphShadingWidthEnum';
import type { Position } from '../Enums/Position';
import type { PositionalForms } from '../Enums/PositionalForms';
import type { RubyAlignments } from '../Enums/RubyAlignments';
import type { RubyKentenPosition } from '../Enums/RubyKentenPosition';
import type { RubyOverhang } from '../Enums/RubyOverhang';
import type { RubyParentSpacing } from '../Enums/RubyParentSpacing';
import type { RubyTypes } from '../Enums/RubyTypes';
import type { RuleWidth } from '../Enums/RuleWidth';
import type { SingleWordJustification } from '../Enums/SingleWordJustification';
import type { Spacing } from '../Enums/Spacing';
import type { SpanColumnCountOptions } from '../Enums/SpanColumnCountOptions';
import type { SpanColumnTypeOptions } from '../Enums/SpanColumnTypeOptions';
import type { StartParagraph } from '../Enums/StartParagraph';
import type { TextStrokeAlign } from '../Enums/TextStrokeAlign';
import type { WarichuAlignment } from '../Enums/WarichuAlignment';
import type { Font } from '../Font';
import type { KinsokuTable } from '../KinsokuTable';
import type { Language } from '../Language';
import type { LanguageWithVendors } from '../LanguageWithVendors';
import type { MojikumiTable } from '../MojikumiTable';
import type { NestedGrepStyles } from '../NestedGrepStyles';
import type { NestedLineStyles } from '../NestedLineStyles';
import type { NestedStyles } from '../NestedStyles';
import type { NumberingList } from '../NumberingList';
import type { Preferences } from '../Preferences';
import type { StrokeStyle } from '../StrokeStyle';
import type { Swatch } from '../Swatch';
import type { TabStops } from '../TabStops';
import type { MeasurementValue } from './Types';
import type { Bullet } from '../Bullet';
import type { NumberingRestartPolicy } from '../NumberingRestartPolicy';
import type { ParagraphStyle } from '../ParagraphStyle';
import type { Story } from '../Story';
import type { XmlStory } from '../XmlStory';
import type { Color } from '../Color';
import type { Gradient } from '../Gradient';
import type { MixedInk } from '../MixedInk';
import type { Text } from '../Text';
import type { Tint } from '../Tint';

/**
 * Fill, stroke, and gradient attributes a text run draws its glyphs with.
 *
 * Available on the {@link Text} family, {@link Story}, {@link CharacterStyle},
 * and {@link ParagraphStyle}.
 */
export interface TextGraphicAttributes<M extends Mode = 'single'> {
  /** Horizontal scaling of the glyphs, as a percentage. */
  get horizontalScale(): Read<M, number>;
  set horizontalScale(value: number);

  /** Vertical scaling of the glyphs, as a percentage. */
  get verticalScale(): Read<M, number>;
  set verticalScale(value: number);

  /** Skew (false-italic) angle applied to the glyphs, in degrees. */
  get skew(): Read<M, number>;
  set skew(value: number);

  /** The tint (as a percentage, 0–100) of the fill color. Use `-1` to use the inherited or overridden value instead of a specific tint. */
  get fillTint(): Read<M, number>;
  set fillTint(value: number);

  /** The tint (as a percentage, 0–100) of the stroke color. Use `-1` to use the inherited or overridden value instead of a specific tint. */
  get strokeTint(): Read<M, number>;
  set strokeTint(value: number);

  /** The stroke weight applied to the characters of the text. */
  get strokeWeight(): Read<M, number>;
  set strokeWeight(value: MeasurementValue);

  /** If true, the stroke of the characters will overprint. */
  get overprintStroke(): Read<M, boolean>;
  set overprintStroke(value: boolean);

  /** If true, the fill color of the characters will overprint. */
  get overprintFill(): Read<M, boolean>;
  set overprintFill(value: boolean);

  /**
   * Swatch applied to the fill of the text. Accepts a {@link Swatch}
   * (or a {@link Color}, {@link Tint}, {@link Gradient}, or {@link MixedInk})
   * or its name.
   */
  get fillColor(): Read<M, Swatch>;
  set fillColor(value: Swatch | string);

  /** Swatch applied to the stroke of the text. Accepts a {@link Swatch} or its name. */
  get strokeColor(): Read<M, Swatch>;
  set strokeColor(value: Swatch | string);

  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text. */
  get gradientFillLength(): Read<M, number>;
  set gradientFillLength(value: number);

  /** The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180). */
  get gradientFillAngle(): Read<M, number>;
  set gradientFillAngle(value: number);

  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text. */
  get gradientStrokeLength(): Read<M, number>;
  set gradientStrokeLength(value: number);

  /** The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180). */
  get gradientStrokeAngle(): Read<M, number>;
  set gradientStrokeAngle(value: number);

  /** The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y]. */
  get gradientFillStart(): Read<M, number[]>;
  set gradientFillStart(value: number[]);

  /** The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y]. */
  get gradientStrokeStart(): Read<M, number[]>;
  set gradientStrokeStart(value: number[]);

  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): Read<M, number>;
  set miterLimit(value: number);

  /** The stroke alignment applied to the text. */
  get strokeAlignment(): Read<M, TextStrokeAlign>;
  set strokeAlignment(value: TextStrokeAlign);

  /** The stroke join type applied to the characters of the text. */
  get endJoin(): Read<M, OutlineJoin>;
  set endJoin(value: OutlineJoin);

}

/** Character-level formatting members shared by the live {@link CharacterFormatAttributes} and style-definition {@link CharacterStyleAttributes}. */
/**
 *
 * - A live object always resolves every attribute, and reports the FIRST value
 *   across a mixed range rather than a "mixed" marker. Assigning
 *   `NothingEnum.NOTHING` to one throws. Binds all three to `never`.
 * - A SPARSE style (`CharacterStyle`, `CellStyle`) carries only what was set on
 *   it, so an unset attribute reads back `NothingEnum.NOTHING` when it is
 *   scalar-valued and `null` when it is object-valued.
 * - A COMPLETE style (`ParagraphStyle`, `TableStyle`, `ObjectStyle`) always
 *   resolves a value like a live object, but still accepts
 *   `NothingEnum.NOTHING` on assignment, meaning "revert to the default".
 *
 * `NGet` is the extra read type for scalar members, `NObj` for object-valued
 * ones, and `NSet` the extra write type. All default to `never`, which unions
 * away, so an unbound consumer keeps the live shape.
 */
export interface CharacterAttributesBase<M extends Mode = 'single', NGet = never, NObj = never, NSet = never> {
  /**
   * The applied font. Accepts a {@link Font} object or a font-family name as a
   * `string`; pair with {@link fontStyle} to pick a specific style.
   */
  get appliedFont(): Read<M, Font | NObj>;
  set appliedFont(value: Font | string | NSet);

  /** The name of the font style. */
  get fontStyle(): Read<M, string | NGet>;
  set fontStyle(value: string | NSet);

  /** The type size. */
  get pointSize(): Read<M, number | NGet>;
  set pointSize(value: MeasurementValue | NSet);

  /**
   * The leading. A number is explicit leading; the {@link Leading} enumerator
   * `AUTO` selects automatic leading.
   */
  get leading(): Read<M, number | Leading | NGet>;
  set leading(value: MeasurementValue | Leading | NSet);

  /** The type of pair kerning. */
  get kerningMethod(): Read<M, KerningMethodName | NGet>;
  set kerningMethod(value: KerningMethodName | NSet);

  /** Tracking, in thousandths of an em, applied between characters. */
  get tracking(): Read<M, number | NGet>;
  set tracking(value: number | NSet);

  /** Whether the text renders normally, as small caps, as all caps, or using the font's OpenType small-caps forms. See {@link Capitalization}. */
  get capitalization(): Read<M, Capitalization | NGet>;
  set capitalization(value: Capitalization | NSet);

  /** The text position relative to the baseline. */
  get position(): Read<M, Position | NGet>;
  set position(value: Position | NSet);

  /** If true, underlines the text. */
  get underline(): Read<M, boolean | NGet>;
  set underline(value: boolean | NSet);

  /** If true, draws a strikethrough line through the text. */
  get strikeThru(): Read<M, boolean | NGet>;
  set strikeThru(value: boolean | NSet);

  /** If `true`, substitutes ligature glyphs (e.g. `fi`, `fl`) where available. */
  get ligatures(): Read<M, boolean | NGet>;
  set ligatures(value: boolean | NSet);

  /** If true, keeps the text on the same line. */
  get noBreak(): Read<M, boolean | NGet>;
  set noBreak(value: boolean | NSet);

  /** The baseline shift applied to the text. */
  get baselineShift(): Read<M, number | NGet>;
  set baselineShift(value: MeasurementValue | NSet);

  /** The figure style in OpenType fonts. */
  get otfFigureStyle(): Read<M, OTFFigureStyle | NGet>;
  set otfFigureStyle(value: OTFFigureStyle | NSet);

  /** If true, uses ordinals in OpenType fonts. */
  get otfOrdinal(): Read<M, boolean | NGet>;
  set otfOrdinal(value: boolean | NSet);

  /** If true, uses fractions in OpenType fonts. */
  get otfFraction(): Read<M, boolean | NGet>;
  set otfFraction(value: boolean | NSet);

  /** If true, uses discretionary ligatures in OpenType fonts. */
  get otfDiscretionaryLigature(): Read<M, boolean | NGet>;
  set otfDiscretionaryLigature(value: boolean | NSet);

  /** If true, uses titling forms in OpenType fonts. */
  get otfTitling(): Read<M, boolean | NGet>;
  set otfTitling(value: boolean | NSet);

  /** If true, uses contextual alternate forms in OpenType fonts. */
  get otfContextualAlternate(): Read<M, boolean | NGet>;
  set otfContextualAlternate(value: boolean | NSet);

  /** If true, uses swash forms in OpenType fonts. */
  get otfSwash(): Read<M, boolean | NGet>;
  set otfSwash(value: boolean | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. */
  get underlineColor(): Read<M, Swatch | NObj>;
  set underlineColor(value: Swatch | string | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. */
  get underlineGapColor(): Read<M, Swatch | NObj>;
  set underlineGapColor(value: Swatch | string | NSet);

  /** The underline stroke tint (as a percentage). (Range: 0 to 100). */
  get underlineTint(): Read<M, number | NGet>;
  set underlineTint(value: number | NSet);

  /** The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. */
  get underlineGapTint(): Read<M, number | NGet>;
  set underlineGapTint(value: number | NSet);

  /** If true, the underline stroke color will overprint. */
  get underlineOverprint(): Read<M, boolean | NGet>;
  set underlineOverprint(value: boolean | NSet);

  /** If true, the gap color of the underline stroke will overprint. */
  get underlineGapOverprint(): Read<M, boolean | NGet>;
  set underlineGapOverprint(value: boolean | NSet);

  /** The stroke type of the underline stroke. */
  get underlineType(): Read<M, StrokeStyle | NObj>;
  set underlineType(value: StrokeStyle | string | NSet);

  /** The amount by which to offset the underline from the text baseline. */
  get underlineOffset(): Read<M, number | NGet>;
  set underlineOffset(value: MeasurementValue | NSet);

  /** The stroke weight of the underline stroke. */
  get underlineWeight(): Read<M, number | NGet>;
  set underlineWeight(value: MeasurementValue | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. */
  get strikeThroughColor(): Read<M, Swatch | NObj>;
  set strikeThroughColor(value: Swatch | string | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. */
  get strikeThroughGapColor(): Read<M, Swatch | NObj>;
  set strikeThroughGapColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). */
  get strikeThroughTint(): Read<M, number | NGet>;
  set strikeThroughTint(value: number | NSet);

  /** The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. */
  get strikeThroughGapTint(): Read<M, number | NGet>;
  set strikeThroughGapTint(value: number | NSet);

  /** If true, the strikethrough stroke will overprint. */
  get strikeThroughOverprint(): Read<M, boolean | NGet>;
  set strikeThroughOverprint(value: boolean | NSet);

  /** If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. */
  get strikeThroughGapOverprint(): Read<M, boolean | NGet>;
  set strikeThroughGapOverprint(value: boolean | NSet);

  /** The stroke type of the strikethrough stroke. */
  get strikeThroughType(): Read<M, StrokeStyle | NObj>;
  set strikeThroughType(value: StrokeStyle | string | NSet);

  /** The amount by which to offset the strikethrough stroke from the text baseline. */
  get strikeThroughOffset(): Read<M, number | NGet>;
  set strikeThroughOffset(value: MeasurementValue | NSet);

  /** The stroke weight of the strikethrough stroke. */
  get strikeThroughWeight(): Read<M, number | NGet>;
  set strikeThroughWeight(value: MeasurementValue | NSet);

  /**
   * The applied language / spelling dictionary. Accepts a
   * {@link LanguageWithVendors} or {@link Language} object, or its name.
   */
  get appliedLanguage(): Read<M, LanguageWithVendors | Language | NGet>;
  set appliedLanguage(value: LanguageWithVendors | Language | string | NSet);

  /** Value of Design Axes. */
  get designAxes(): Read<M, number[] | NGet>;
  set designAxes(value: number[] | NSet);

  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): Read<M, boolean | NGet>;
  set otfSlashedZero(value: boolean | NSet);

  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): Read<M, boolean | NGet>;
  set otfHistorical(value: boolean | NSet);

  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): Read<M, number | NGet>;
  set otfStylisticSets(value: number | NSet);

  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): Read<M, boolean | NGet>;
  set otfMark(value: boolean | NSet);

  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): Read<M, boolean | NGet>;
  set otfLocale(value: boolean | NSet);

  /** Which contextual glyph form — initial, medial, final, or isolated — to use for connected scripts, or `CALCULATE` to derive it automatically. See {@link PositionalForms}. */
  get positionalForm(): Read<M, PositionalForms | NGet>;
  set positionalForm(value: PositionalForms | NSet);

  /** If true, use overlapping swash forms in OpenType fonts. */
  get otfOverlapSwash(): Read<M, boolean | NGet>;
  set otfOverlapSwash(value: boolean | NSet);

  /** If true, use stylistic alternate forms in OpenType fonts. */
  get otfStylisticAlternate(): Read<M, boolean | NGet>;
  set otfStylisticAlternate(value: boolean | NSet);

  /** If true, use alternate justification forms in OpenType fonts. */
  get otfJustificationAlternate(): Read<M, boolean | NGet>;
  set otfJustificationAlternate(value: boolean | NSet);

  /** If true, use stretched alternate forms in OpenType fonts. */
  get otfStretchedAlternate(): Read<M, boolean | NGet>;
  set otfStretchedAlternate(value: boolean | NSet);

  /** The direction of the character. */
  get characterDirection(): Read<M, CharacterDirectionOptions | NGet>;
  set characterDirection(value: CharacterDirectionOptions | NSet);

  /** The keyboard direction of the character. */
  get keyboardDirection(): Read<M, CharacterDirectionOptions | NGet>;
  set keyboardDirection(value: CharacterDirectionOptions | NSet);

  /** Which digit glyphs — Arabic numerals, Hindi, Farsi, or another script's digits — render numbers in the text. See {@link DigitsTypeOptions}. */
  get digitsType(): Read<M, DigitsTypeOptions | NGet>;
  set digitsType(value: DigitsTypeOptions | NSet);

  /** Use of Kashidas for justification. */
  get kashidas(): Read<M, KashidasOptions | NGet>;
  set kashidas(value: KashidasOptions | NSet);

  /** Position of diacritical characters. */
  get diacriticPosition(): Read<M, DiacriticPositionOptions | NGet>;
  set diacriticPosition(value: DiacriticPositionOptions | NSet);

  /** The x (horizontal) offset for diacritic adjustment. */
  get xOffsetDiacritic(): Read<M, number | NGet>;
  set xOffsetDiacritic(value: number | NSet);

  /** The y (vertical) offset for diacritic adjustment. */
  get yOffsetDiacritic(): Read<M, number | NGet>;
  set yOffsetDiacritic(value: number | NSet);

  /** The alignment of small characters to the largest character in the line. */
  get characterAlignment(): Read<M, CharacterAlignment | NGet>;
  set characterAlignment(value: CharacterAlignment | NSet);

  /** The amount of horizontal character compression. */
  get tsume(): Read<M, number | NothingEnum.NOTHING>;
  set tsume(value: number | NothingEnum.NOTHING);

  /** The amount of space before each character. */
  get leadingAki(): Read<M, number | NGet>;
  set leadingAki(value: number | NSet);

  /** The amount of space after each character. */
  get trailingAki(): Read<M, number | NGet>;
  set trailingAki(value: number | NSet);

  /** The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. */
  get characterRotation(): Read<M, number | NGet>;
  set characterRotation(value: number | NSet);

  /** The number of grid squares in which to arrange the text. */
  get jidori(): Read<M, number | NothingEnum.NOTHING>;
  set jidori(value: number | NothingEnum.NOTHING);

  /** The amount (as a percentage) of shatai obliquing to apply. */
  get shataiMagnification(): Read<M, number | NothingEnum.NOTHING>;
  set shataiMagnification(value: number | NothingEnum.NOTHING);

  /** The shatai lens angle (in degrees). */
  get shataiDegreeAngle(): Read<M, number | NothingEnum.NOTHING>;
  set shataiDegreeAngle(value: number | NothingEnum.NOTHING);

  /** If true, applies shatai rotation. */
  get shataiAdjustRotation(): Read<M, boolean | NothingEnum.NOTHING>;
  set shataiAdjustRotation(value: boolean | NothingEnum.NOTHING);

  /** If true, adjusts shatai tsume. */
  get shataiAdjustTsume(): Read<M, boolean | NothingEnum.NOTHING>;
  set shataiAdjustTsume(value: boolean | NothingEnum.NOTHING);

  /** If true, makes the character horizontal in vertical text. */
  get tatechuyoko(): Read<M, boolean | NothingEnum.NOTHING>;
  set tatechuyoko(value: boolean | NothingEnum.NOTHING);

  /** The horizontal offset for horizontal characters in vertical text. */
  get tatechuyokoXOffset(): Read<M, number | NothingEnum.NOTHING>;
  set tatechuyokoXOffset(value: number | NothingEnum.NOTHING);

  /** The vertical offset for horizontal characters in vertical text. */
  get tatechuyokoYOffset(): Read<M, number | NothingEnum.NOTHING>;
  set tatechuyokoYOffset(value: number | NothingEnum.NOTHING);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. */
  get kentenFillColor(): Read<M, Swatch | NothingEnum.NOTHING>;
  set kentenFillColor(value: Swatch | string | NothingEnum.NOTHING);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. */
  get kentenStrokeColor(): Read<M, Swatch | NothingEnum.NOTHING>;
  set kentenStrokeColor(value: Swatch | string | NothingEnum.NOTHING);

  /** The fill tint (as a percentage) of kenten characters. (Range: 0 to 100). */
  get kentenTint(): Read<M, number | NothingEnum.NOTHING>;
  set kentenTint(value: number | NothingEnum.NOTHING);

  /** The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100). */
  get kentenStrokeTint(): Read<M, number | NothingEnum.NOTHING>;
  set kentenStrokeTint(value: number | NothingEnum.NOTHING);

  /** The stroke weight (in points) of kenten characters. */
  get kentenWeight(): Read<M, number | NothingEnum.NOTHING>;
  set kentenWeight(value: number | NothingEnum.NOTHING);

  /** The method of overprinting the kenten fill. */
  get kentenOverprintFill(): Read<M, AdornmentOverprint | NothingEnum.NOTHING>;
  set kentenOverprintFill(value: AdornmentOverprint | NothingEnum.NOTHING);

  /** The method of overprinting the kenten stroke. */
  get kentenOverprintStroke(): Read<M, AdornmentOverprint | NothingEnum.NOTHING>;
  set kentenOverprintStroke(value: AdornmentOverprint | NothingEnum.NOTHING);

  /** The style of kenten characters. */
  get kentenKind(): Read<M, KentenCharacter | NothingEnum.NOTHING>;
  set kentenKind(value: KentenCharacter | NothingEnum.NOTHING);

  /** The distance between kenten characters and their parent characters. */
  get kentenPlacement(): Read<M, number | NothingEnum.NOTHING>;
  set kentenPlacement(value: number | NothingEnum.NOTHING);

  /** The alignment of kenten characters relative to the parent characters. */
  get kentenAlignment(): Read<M, KentenAlignment | NothingEnum.NOTHING>;
  set kentenAlignment(value: KentenAlignment | NothingEnum.NOTHING);

  /** The kenten position relative to the parent character. */
  get kentenPosition(): Read<M, RubyKentenPosition | NothingEnum.NOTHING>;
  set kentenPosition(value: RubyKentenPosition | NothingEnum.NOTHING);

  /** The font to use for kenten characters. */
  get kentenFont(): Read<M, Font | NothingEnum.NOTHING>;
  set kentenFont(value: Font | string | NothingEnum.NOTHING);

  /** The font style of kenten characters. */
  get kentenFontStyle(): Read<M, string | NothingEnum.NOTHING>;
  set kentenFontStyle(value: string | NothingEnum.NOTHING);

  /** The size (in points) of kenten characters. */
  get kentenFontSize(): Read<M, number | NothingEnum.NOTHING>;
  set kentenFontSize(value: number | NothingEnum.NOTHING);

  /** The horizontal size of kenten characters as a percent of the original size. */
  get kentenXScale(): Read<M, number | NothingEnum.NOTHING>;
  set kentenXScale(value: number | NothingEnum.NOTHING);

  /** The vertical size of kenten characters as a percent of the original size. */
  get kentenYScale(): Read<M, number | NothingEnum.NOTHING>;
  set kentenYScale(value: number | NothingEnum.NOTHING);

  /** The character used for kenten. Note: Valid only when kenten kind is custom. */
  get kentenCustomCharacter(): Read<M, string | NothingEnum.NOTHING>;
  set kentenCustomCharacter(value: string | NothingEnum.NOTHING);

  /** The character set used for the custom kenten character. Note: Valid only when kenten kind is custom. */
  get kentenCharacterSet(): Read<M, KentenCharacterSet | NothingEnum.NOTHING>;
  set kentenCharacterSet(value: KentenCharacterSet | NothingEnum.NOTHING);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. */
  get rubyFill(): Read<M, Swatch | NothingEnum.NOTHING>;
  set rubyFill(value: Swatch | string | NothingEnum.NOTHING);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. */
  get rubyStroke(): Read<M, Swatch | NothingEnum.NOTHING>;
  set rubyStroke(value: Swatch | string | NothingEnum.NOTHING);

  /** The tint (as a percentage) of the ruby fill color. (Range: 0 to 100). */
  get rubyTint(): Read<M, number | NothingEnum.NOTHING>;
  set rubyTint(value: number | NothingEnum.NOTHING);

  /** The stroke weight (in points) of ruby characters. */
  get rubyWeight(): Read<M, number | NothingEnum.NOTHING>;
  set rubyWeight(value: number | NothingEnum.NOTHING);

  /** The method of overprinting the ruby fill. */
  get rubyOverprintFill(): Read<M, AdornmentOverprint | NothingEnum.NOTHING>;
  set rubyOverprintFill(value: AdornmentOverprint | NothingEnum.NOTHING);

  /** The method of overprinting the ruby stroke. */
  get rubyOverprintStroke(): Read<M, AdornmentOverprint | NothingEnum.NOTHING>;
  set rubyOverprintStroke(value: AdornmentOverprint | NothingEnum.NOTHING);

  /** The stroke tint (as a percentage) of ruby characters. */
  get rubyStrokeTint(): Read<M, number | NothingEnum.NOTHING>;
  set rubyStrokeTint(value: number | NothingEnum.NOTHING);

  /** The font applied to ruby characters. */
  get rubyFont(): Read<M, Font | NothingEnum.NOTHING>;
  set rubyFont(value: Font | string | NothingEnum.NOTHING);

  /** The font style of ruby characters. */
  get rubyFontStyle(): Read<M, string | NothingEnum.NOTHING>;
  set rubyFontStyle(value: string | NothingEnum.NOTHING);

  /** The size (in points) of ruby characters. */
  get rubyFontSize(): Read<M, number | NothingEnum.NOTHING>;
  set rubyFontSize(value: number | NothingEnum.NOTHING);

  /** If true, uses OpenType Pro fonts for ruby. */
  get rubyOpenTypePro(): Read<M, boolean | NothingEnum.NOTHING>;
  set rubyOpenTypePro(value: boolean | NothingEnum.NOTHING);

  /** The horizontal size of ruby characters, specified as a percent of the original size. */
  get rubyXScale(): Read<M, number | NothingEnum.NOTHING>;
  set rubyXScale(value: number | NothingEnum.NOTHING);

  /** The vertical size of ruby characters, specified as a percent of the original size. */
  get rubyYScale(): Read<M, number | NothingEnum.NOTHING>;
  set rubyYScale(value: number | NothingEnum.NOTHING);

  /** Whether ruby is assigned once to the whole character group or individually per character. See {@link RubyTypes}. */
  get rubyType(): Read<M, RubyTypes | NothingEnum.NOTHING>;
  set rubyType(value: RubyTypes | NothingEnum.NOTHING);

  /** How the ruby text aligns relative to its parent characters — left, centered, right, justified, or one of the JIS/aki spacing variants. See {@link RubyAlignments}. */
  get rubyAlignment(): Read<M, RubyAlignments | NothingEnum.NOTHING>;
  set rubyAlignment(value: RubyAlignments | NothingEnum.NOTHING);

  /** The position of ruby characters relative to the parent text. */
  get rubyPosition(): Read<M, RubyKentenPosition | NothingEnum.NOTHING>;
  set rubyPosition(value: RubyKentenPosition | NothingEnum.NOTHING);

  /** The amount of horizontal space between ruby and parent characters. */
  get rubyXOffset(): Read<M, number | NothingEnum.NOTHING>;
  set rubyXOffset(value: number | NothingEnum.NOTHING);

  /** The amount of vertical space between ruby and parent characters. */
  get rubyYOffset(): Read<M, number | NothingEnum.NOTHING>;
  set rubyYOffset(value: number | NothingEnum.NOTHING);

  /** The ruby spacing relative to the parent text. */
  get rubyParentSpacing(): Read<M, RubyParentSpacing | NothingEnum.NOTHING>;
  set rubyParentSpacing(value: RubyParentSpacing | NothingEnum.NOTHING);

  /** If true, auto aligns ruby. */
  get rubyAutoAlign(): Read<M, boolean | NothingEnum.NOTHING>;
  set rubyAutoAlign(value: boolean | NothingEnum.NOTHING);

  /** If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount. */
  get rubyOverhang(): Read<M, boolean | NothingEnum.NOTHING>;
  set rubyOverhang(value: boolean | NothingEnum.NOTHING);

  /** If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent. */
  get rubyAutoScaling(): Read<M, boolean | NothingEnum.NOTHING>;
  set rubyAutoScaling(value: boolean | NothingEnum.NOTHING);

  /** The amount (as a percentage) to scale the parent text size to determine the ruby text size. */
  get rubyParentScalingPercent(): Read<M, number | NothingEnum.NOTHING>;
  set rubyParentScalingPercent(value: number | NothingEnum.NOTHING);

  /** The amount by which ruby characters can overhang the parent text. */
  get rubyParentOverhangAmount(): Read<M, RubyOverhang | NothingEnum.NOTHING>;
  set rubyParentOverhangAmount(value: RubyOverhang | NothingEnum.NOTHING);

  /** If true, turns on warichu. */
  get warichu(): Read<M, boolean | NothingEnum.NOTHING>;
  set warichu(value: boolean | NothingEnum.NOTHING);

  /** The amount (as a percentage) to scale parent text size to determine warichu size. */
  get warichuSize(): Read<M, number | NothingEnum.NOTHING>;
  set warichuSize(value: number | NothingEnum.NOTHING);

  /** The number of lines of warichu within a single normal line. */
  get warichuLines(): Read<M, number | NothingEnum.NOTHING>;
  set warichuLines(value: number | NothingEnum.NOTHING);

  /** The gap between lines of warichu characters. */
  get warichuLineSpacing(): Read<M, number | NothingEnum.NOTHING>;
  set warichuLineSpacing(value: number | NothingEnum.NOTHING);

  /** How warichu lines align within the text frame — automatic, left/center/right, or one of the justified variants. See {@link WarichuAlignment}. */
  get warichuAlignment(): Read<M, WarichuAlignment | NothingEnum.NOTHING>;
  set warichuAlignment(value: WarichuAlignment | NothingEnum.NOTHING);

  /** The minimum number of characters allowed after a line break. */
  get warichuCharsAfterBreak(): Read<M, number | NothingEnum.NOTHING>;
  set warichuCharsAfterBreak(value: number | NothingEnum.NOTHING);

  /** The minimum number of characters allowed before a line break. */
  get warichuCharsBeforeBreak(): Read<M, number | NothingEnum.NOTHING>;
  set warichuCharsBeforeBreak(value: number | NothingEnum.NOTHING);

  /** If true, kerns according to proportional CJK metrics in OpenType fonts. */
  get otfProportionalMetrics(): Read<M, boolean | NGet>;
  set otfProportionalMetrics(value: boolean | NSet);

  /** If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. */
  get otfHVKana(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfHVKana(value: boolean | NothingEnum.NOTHING);

  /** If true, applies italics to half-width alphanumerics. */
  get otfRomanItalics(): Read<M, boolean | NGet>;
  set otfRomanItalics(value: boolean | NSet);

  /** If true, the line changes size when characters are scaled. */
  get scaleAffectsLineHeight(): Read<M, boolean | NGet>;
  set scaleAffectsLineHeight(value: boolean | NSet);

  /** If true, uses grid tracking to track non-Roman characters in CJK grids. */
  get cjkGridTracking(): Read<M, boolean | NothingEnum.NOTHING>;
  set cjkGridTracking(value: boolean | NothingEnum.NOTHING);

  /** The glyph variant to substitute for standard glyphs. */
  get glyphForm(): Read<M, AlternateGlyphForms | NGet>;
  set glyphForm(value: AlternateGlyphForms | NSet);

  /** The number of digits included in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyDigits(): Read<M, number | NothingEnum.NOTHING>;
  set rubyAutoTcyDigits(value: number | NothingEnum.NOTHING);

  /** If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyIncludeRoman(): Read<M, boolean | NothingEnum.NOTHING>;
  set rubyAutoTcyIncludeRoman(value: boolean | NothingEnum.NOTHING);

  /** If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. */
  get rubyAutoTcyAutoScale(): Read<M, boolean | NothingEnum.NOTHING>;
  set rubyAutoTcyAutoScale(value: boolean | NothingEnum.NOTHING);
}

/**
 * Live character-level formatting on a text range: font, size, leading,
 * kerning, tracking, OpenType features, underline/strikethrough, ruby/kenten,
 * and CJK attributes.
 *
 * Available on the {@link Text} family, {@link Story}, and {@link XmlStory}.
 * The style-definition twin is {@link CharacterStyleAttributes}.
 */
export interface CharacterFormatAttributes<M extends Mode = 'single'> extends CharacterAttributesBase<M> {

  /**
   * The applied font. Accepts a {@link Font} object or a font-family name as a
   * `string`; pair with {@link fontStyle} to pick a specific style.
   */
  get appliedFont(): Read<M, Font>;
  set appliedFont(value: Font | string);

  /** The name of the font style. */
  get fontStyle(): Read<M, string>;
  set fontStyle(value: string);

  /** The type size. */
  get pointSize(): Read<M, number>;
  set pointSize(value: MeasurementValue);

  /**
   * The leading. A number is explicit leading; the {@link Leading} enumerator
   * `AUTO` selects automatic leading.
   */
  get leading(): Read<M, number | Leading>;
  set leading(value: MeasurementValue | Leading);

  /** The type of pair kerning. */
  get kerningMethod(): Read<M, KerningMethodName>;
  set kerningMethod(value: KerningMethodName);

  /** Tracking, in thousandths of an em, applied between characters. */
  get tracking(): Read<M, number>;
  set tracking(value: number);

  /** Whether the text renders normally, as small caps, as all caps, or using the font's OpenType small-caps forms. See {@link Capitalization}. */
  get capitalization(): Read<M, Capitalization>;
  set capitalization(value: Capitalization);

  /** The text position relative to the baseline. */
  get position(): Read<M, Position>;
  set position(value: Position);

  /** If true, underlines the text. */
  get underline(): Read<M, boolean>;
  set underline(value: boolean);

  /** If true, draws a strikethrough line through the text. */
  get strikeThru(): Read<M, boolean>;
  set strikeThru(value: boolean);

  /** If `true`, substitutes ligature glyphs (e.g. `fi`, `fl`) where available. */
  get ligatures(): Read<M, boolean>;
  set ligatures(value: boolean);

  /** If true, keeps the text on the same line. */
  get noBreak(): Read<M, boolean>;
  set noBreak(value: boolean);

  /** The baseline shift applied to the text. */
  get baselineShift(): Read<M, number>;
  set baselineShift(value: MeasurementValue);

  /** The figure style in OpenType fonts. */
  get otfFigureStyle(): Read<M, OTFFigureStyle>;
  set otfFigureStyle(value: OTFFigureStyle);

  /** If true, uses ordinals in OpenType fonts. */
  get otfOrdinal(): Read<M, boolean>;
  set otfOrdinal(value: boolean);

  /** If true, uses fractions in OpenType fonts. */
  get otfFraction(): Read<M, boolean>;
  set otfFraction(value: boolean);

  /** If true, uses discretionary ligatures in OpenType fonts. */
  get otfDiscretionaryLigature(): Read<M, boolean>;
  set otfDiscretionaryLigature(value: boolean);

  /** If true, uses titling forms in OpenType fonts. */
  get otfTitling(): Read<M, boolean>;
  set otfTitling(value: boolean);

  /** If true, uses contextual alternate forms in OpenType fonts. */
  get otfContextualAlternate(): Read<M, boolean>;
  set otfContextualAlternate(value: boolean);

  /** If true, uses swash forms in OpenType fonts. */
  get otfSwash(): Read<M, boolean>;
  set otfSwash(value: boolean);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. */
  get underlineColor(): Read<M, Swatch>;
  set underlineColor(value: Swatch | string);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. */
  get underlineGapColor(): Read<M, Swatch>;
  set underlineGapColor(value: Swatch | string);

  /** The underline stroke tint (as a percentage). (Range: 0 to 100). */
  get underlineTint(): Read<M, number>;
  set underlineTint(value: number);

  /** The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. */
  get underlineGapTint(): Read<M, number>;
  set underlineGapTint(value: number);

  /** If true, the underline stroke color will overprint. */
  get underlineOverprint(): Read<M, boolean>;
  set underlineOverprint(value: boolean);

  /** If true, the gap color of the underline stroke will overprint. */
  get underlineGapOverprint(): Read<M, boolean>;
  set underlineGapOverprint(value: boolean);

  /** The stroke type of the underline stroke. */
  get underlineType(): Read<M, StrokeStyle>;
  set underlineType(value: StrokeStyle | string);

  /** The amount by which to offset the underline from the text baseline. */
  get underlineOffset(): Read<M, number>;
  set underlineOffset(value: MeasurementValue);

  /** The stroke weight of the underline stroke. */
  get underlineWeight(): Read<M, number>;
  set underlineWeight(value: MeasurementValue);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. */
  get strikeThroughColor(): Read<M, Swatch>;
  set strikeThroughColor(value: Swatch | string);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. */
  get strikeThroughGapColor(): Read<M, Swatch>;
  set strikeThroughGapColor(value: Swatch | string);

  /** The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). */
  get strikeThroughTint(): Read<M, number>;
  set strikeThroughTint(value: number);

  /** The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. */
  get strikeThroughGapTint(): Read<M, number>;
  set strikeThroughGapTint(value: number);

  /** If true, the strikethrough stroke will overprint. */
  get strikeThroughOverprint(): Read<M, boolean>;
  set strikeThroughOverprint(value: boolean);

  /** If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. */
  get strikeThroughGapOverprint(): Read<M, boolean>;
  set strikeThroughGapOverprint(value: boolean);

  /** The stroke type of the strikethrough stroke. */
  get strikeThroughType(): Read<M, StrokeStyle>;
  set strikeThroughType(value: StrokeStyle | string);

  /** The amount by which to offset the strikethrough stroke from the text baseline. */
  get strikeThroughOffset(): Read<M, number>;
  set strikeThroughOffset(value: MeasurementValue);

  /** The stroke weight of the strikethrough stroke. */
  get strikeThroughWeight(): Read<M, number>;
  set strikeThroughWeight(value: MeasurementValue);

  /**
   * The applied language / spelling dictionary. Accepts a
   * {@link LanguageWithVendors} or {@link Language} object, or its name.
   */
  get appliedLanguage(): Read<M, LanguageWithVendors | Language>;
  set appliedLanguage(value: LanguageWithVendors | Language | string);

  /** Value of Design Axes. */
  get designAxes(): Read<M, number[]>;
  set designAxes(value: number[]);

  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): Read<M, boolean>;
  set otfSlashedZero(value: boolean);

  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): Read<M, boolean>;
  set otfHistorical(value: boolean);

  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): Read<M, number>;
  set otfStylisticSets(value: number);

  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): Read<M, boolean>;
  set otfMark(value: boolean);

  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): Read<M, boolean>;
  set otfLocale(value: boolean);

  /** Which contextual glyph form — initial, medial, final, or isolated — to use for connected scripts, or `CALCULATE` to derive it automatically. See {@link PositionalForms}. */
  get positionalForm(): Read<M, PositionalForms>;
  set positionalForm(value: PositionalForms);

  /** If true, use overlapping swash forms in OpenType fonts. */
  get otfOverlapSwash(): Read<M, boolean>;
  set otfOverlapSwash(value: boolean);

  /** If true, use stylistic alternate forms in OpenType fonts. */
  get otfStylisticAlternate(): Read<M, boolean>;
  set otfStylisticAlternate(value: boolean);

  /** If true, use alternate justification forms in OpenType fonts. */
  get otfJustificationAlternate(): Read<M, boolean>;
  set otfJustificationAlternate(value: boolean);

  /** If true, use stretched alternate forms in OpenType fonts. */
  get otfStretchedAlternate(): Read<M, boolean>;
  set otfStretchedAlternate(value: boolean);

  /** The direction of the character. */
  get characterDirection(): Read<M, CharacterDirectionOptions>;
  set characterDirection(value: CharacterDirectionOptions);

  /** The keyboard direction of the character. */
  get keyboardDirection(): Read<M, CharacterDirectionOptions>;
  set keyboardDirection(value: CharacterDirectionOptions);

  /** Which digit glyphs — Arabic numerals, Hindi, Farsi, or another script's digits — render numbers in the text. See {@link DigitsTypeOptions}. */
  get digitsType(): Read<M, DigitsTypeOptions>;
  set digitsType(value: DigitsTypeOptions);

  /** Use of Kashidas for justification. */
  get kashidas(): Read<M, KashidasOptions>;
  set kashidas(value: KashidasOptions);

  /** Position of diacritical characters. */
  get diacriticPosition(): Read<M, DiacriticPositionOptions>;
  set diacriticPosition(value: DiacriticPositionOptions);

  /** The x (horizontal) offset for diacritic adjustment. */
  get xOffsetDiacritic(): Read<M, number>;
  set xOffsetDiacritic(value: number);

  /** The y (vertical) offset for diacritic adjustment. */
  get yOffsetDiacritic(): Read<M, number>;
  set yOffsetDiacritic(value: number);

  /** The alignment of small characters to the largest character in the line. */
  get characterAlignment(): Read<M, CharacterAlignment>;
  set characterAlignment(value: CharacterAlignment);

  /** The amount of horizontal character compression. */
  get tsume(): Read<M, number>;
  set tsume(value: number);

  /** The amount of space before each character. */
  get leadingAki(): Read<M, number>;
  set leadingAki(value: number);

  /** The amount of space after each character. */
  get trailingAki(): Read<M, number>;
  set trailingAki(value: number);

  /** The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. */
  get characterRotation(): Read<M, number>;
  set characterRotation(value: number);

  /** The number of grid squares in which to arrange the text. */
  get jidori(): Read<M, number>;
  set jidori(value: number);

  /** The amount (as a percentage) of shatai obliquing to apply. */
  get shataiMagnification(): Read<M, number>;
  set shataiMagnification(value: number);

  /** The shatai lens angle (in degrees). */
  get shataiDegreeAngle(): Read<M, number>;
  set shataiDegreeAngle(value: number);

  /** If true, applies shatai rotation. */
  get shataiAdjustRotation(): Read<M, boolean>;
  set shataiAdjustRotation(value: boolean);

  /** If true, adjusts shatai tsume. */
  get shataiAdjustTsume(): Read<M, boolean>;
  set shataiAdjustTsume(value: boolean);

  /** If true, makes the character horizontal in vertical text. */
  get tatechuyoko(): Read<M, boolean>;
  set tatechuyoko(value: boolean);

  /** The horizontal offset for horizontal characters in vertical text. */
  get tatechuyokoXOffset(): Read<M, number>;
  set tatechuyokoXOffset(value: number);

  /** The vertical offset for horizontal characters in vertical text. */
  get tatechuyokoYOffset(): Read<M, number>;
  set tatechuyokoYOffset(value: number);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of kenten characters. */
  get kentenFillColor(): Read<M, Swatch>;
  set kentenFillColor(value: Swatch | string);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. */
  get kentenStrokeColor(): Read<M, Swatch>;
  set kentenStrokeColor(value: Swatch | string);

  /** The fill tint (as a percentage) of kenten characters. (Range: 0 to 100). */
  get kentenTint(): Read<M, number>;
  set kentenTint(value: number);

  /** The stroke tint (as a percentage) of kenten characters. (Range: 0 to 100). */
  get kentenStrokeTint(): Read<M, number>;
  set kentenStrokeTint(value: number);

  /** The stroke weight (in points) of kenten characters. */
  get kentenWeight(): Read<M, number>;
  set kentenWeight(value: number);

  /** The method of overprinting the kenten fill. */
  get kentenOverprintFill(): Read<M, AdornmentOverprint>;
  set kentenOverprintFill(value: AdornmentOverprint);

  /** The method of overprinting the kenten stroke. */
  get kentenOverprintStroke(): Read<M, AdornmentOverprint>;
  set kentenOverprintStroke(value: AdornmentOverprint);

  /** The style of kenten characters. */
  get kentenKind(): Read<M, KentenCharacter>;
  set kentenKind(value: KentenCharacter);

  /** The distance between kenten characters and their parent characters. */
  get kentenPlacement(): Read<M, number>;
  set kentenPlacement(value: number);

  /** The alignment of kenten characters relative to the parent characters. */
  get kentenAlignment(): Read<M, KentenAlignment>;
  set kentenAlignment(value: KentenAlignment);

  /** The kenten position relative to the parent character. */
  get kentenPosition(): Read<M, RubyKentenPosition>;
  set kentenPosition(value: RubyKentenPosition);

  /** The font to use for kenten characters. */
  get kentenFont(): Read<M, Font>;
  set kentenFont(value: Font | string);

  /** The font style of kenten characters. */
  get kentenFontStyle(): Read<M, string>;
  set kentenFontStyle(value: string);

  /** The size (in points) of kenten characters. */
  get kentenFontSize(): Read<M, number>;
  set kentenFontSize(value: number);

  /** The horizontal size of kenten characters as a percent of the original size. */
  get kentenXScale(): Read<M, number>;
  set kentenXScale(value: number);

  /** The vertical size of kenten characters as a percent of the original size. */
  get kentenYScale(): Read<M, number>;
  set kentenYScale(value: number);

  /** The character used for kenten. Note: Valid only when kenten kind is custom. */
  get kentenCustomCharacter(): Read<M, string>;
  set kentenCustomCharacter(value: string);

  /** The character set used for the custom kenten character. Note: Valid only when kenten kind is custom. */
  get kentenCharacterSet(): Read<M, KentenCharacterSet>;
  set kentenCharacterSet(value: KentenCharacterSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of ruby characters. */
  get rubyFill(): Read<M, Swatch>;
  set rubyFill(value: Swatch | string);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. */
  get rubyStroke(): Read<M, Swatch>;
  set rubyStroke(value: Swatch | string);

  /** The tint (as a percentage) of the ruby fill color. (Range: 0 to 100). */
  get rubyTint(): Read<M, number>;
  set rubyTint(value: number);

  /** The stroke weight (in points) of ruby characters. */
  get rubyWeight(): Read<M, number>;
  set rubyWeight(value: number);

  /** The method of overprinting the ruby fill. */
  get rubyOverprintFill(): Read<M, AdornmentOverprint>;
  set rubyOverprintFill(value: AdornmentOverprint);

  /** The method of overprinting the ruby stroke. */
  get rubyOverprintStroke(): Read<M, AdornmentOverprint>;
  set rubyOverprintStroke(value: AdornmentOverprint);

  /** The stroke tint (as a percentage) of ruby characters. */
  get rubyStrokeTint(): Read<M, number>;
  set rubyStrokeTint(value: number);

  /** The font applied to ruby characters. */
  get rubyFont(): Read<M, Font>;
  set rubyFont(value: Font | string);

  /** The font style of ruby characters. */
  get rubyFontStyle(): Read<M, string>;
  set rubyFontStyle(value: string);

  /** The size (in points) of ruby characters. */
  get rubyFontSize(): Read<M, number>;
  set rubyFontSize(value: number);

  /** If true, uses OpenType Pro fonts for ruby. */
  get rubyOpenTypePro(): Read<M, boolean>;
  set rubyOpenTypePro(value: boolean);

  /** The horizontal size of ruby characters, specified as a percent of the original size. */
  get rubyXScale(): Read<M, number>;
  set rubyXScale(value: number);

  /** The vertical size of ruby characters, specified as a percent of the original size. */
  get rubyYScale(): Read<M, number>;
  set rubyYScale(value: number);

  /** Whether ruby is assigned once to the whole character group or individually per character. See {@link RubyTypes}. */
  get rubyType(): Read<M, RubyTypes>;
  set rubyType(value: RubyTypes);

  /** How the ruby text aligns relative to its parent characters — left, centered, right, justified, or one of the JIS/aki spacing variants. See {@link RubyAlignments}. */
  get rubyAlignment(): Read<M, RubyAlignments>;
  set rubyAlignment(value: RubyAlignments);

  /** The position of ruby characters relative to the parent text. */
  get rubyPosition(): Read<M, RubyKentenPosition>;
  set rubyPosition(value: RubyKentenPosition);

  /** The amount of horizontal space between ruby and parent characters. */
  get rubyXOffset(): Read<M, number>;
  set rubyXOffset(value: number);

  /** The amount of vertical space between ruby and parent characters. */
  get rubyYOffset(): Read<M, number>;
  set rubyYOffset(value: number);

  /** The ruby spacing relative to the parent text. */
  get rubyParentSpacing(): Read<M, RubyParentSpacing>;
  set rubyParentSpacing(value: RubyParentSpacing);

  /** If true, auto aligns ruby. */
  get rubyAutoAlign(): Read<M, boolean>;
  set rubyAutoAlign(value: boolean);

  /** If true, constrains ruby overhang to the specified amount. For information on specifying an amount, see ruby parent overhang amount. */
  get rubyOverhang(): Read<M, boolean>;
  set rubyOverhang(value: boolean);

  /** If true, automatically scales ruby to the specified percent of parent text size. For information on specifying a percent, see ruby parent scaling percent. */
  get rubyAutoScaling(): Read<M, boolean>;
  set rubyAutoScaling(value: boolean);

  /** The amount (as a percentage) to scale the parent text size to determine the ruby text size. */
  get rubyParentScalingPercent(): Read<M, number>;
  set rubyParentScalingPercent(value: number);

  /** The amount by which ruby characters can overhang the parent text. */
  get rubyParentOverhangAmount(): Read<M, RubyOverhang>;
  set rubyParentOverhangAmount(value: RubyOverhang);

  /** If true, turns on warichu. */
  get warichu(): Read<M, boolean>;
  set warichu(value: boolean);

  /** The amount (as a percentage) to scale parent text size to determine warichu size. */
  get warichuSize(): Read<M, number>;
  set warichuSize(value: number);

  /** The number of lines of warichu within a single normal line. */
  get warichuLines(): Read<M, number>;
  set warichuLines(value: number);

  /** The gap between lines of warichu characters. */
  get warichuLineSpacing(): Read<M, number>;
  set warichuLineSpacing(value: number);

  /** How warichu lines align within the text frame — automatic, left/center/right, or one of the justified variants. See {@link WarichuAlignment}. */
  get warichuAlignment(): Read<M, WarichuAlignment>;
  set warichuAlignment(value: WarichuAlignment);

  /** The minimum number of characters allowed after a line break. */
  get warichuCharsAfterBreak(): Read<M, number>;
  set warichuCharsAfterBreak(value: number);

  /** The minimum number of characters allowed before a line break. */
  get warichuCharsBeforeBreak(): Read<M, number>;
  set warichuCharsBeforeBreak(value: number);

  /** If true, kerns according to proportional CJK metrics in OpenType fonts. */
  get otfProportionalMetrics(): Read<M, boolean>;
  set otfProportionalMetrics(value: boolean);

  /** If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. */
  get otfHVKana(): Read<M, boolean>;
  set otfHVKana(value: boolean);

  /** If true, applies italics to half-width alphanumerics. */
  get otfRomanItalics(): Read<M, boolean>;
  set otfRomanItalics(value: boolean);

  /** If true, the line changes size when characters are scaled. */
  get scaleAffectsLineHeight(): Read<M, boolean>;
  set scaleAffectsLineHeight(value: boolean);

  /** If true, uses grid tracking to track non-Roman characters in CJK grids. */
  get cjkGridTracking(): Read<M, boolean>;
  set cjkGridTracking(value: boolean);

  /** The glyph variant to substitute for standard glyphs. */
  get glyphForm(): Read<M, AlternateGlyphForms>;
  set glyphForm(value: AlternateGlyphForms);

  /** The number of digits included in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyDigits(): Read<M, number>;
  set rubyAutoTcyDigits(value: number);

  /** If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyIncludeRoman(): Read<M, boolean>;
  set rubyAutoTcyIncludeRoman(value: boolean);

  /** If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. */
  get rubyAutoTcyAutoScale(): Read<M, boolean>;
  set rubyAutoTcyAutoScale(value: boolean);

}

/**
 * Character formatting stored as a named **style definition**
 * ({@link CharacterStyle}).
 *
 * Same attributes as {@link CharacterFormatAttributes}, but any attribute the
 * style leaves unset reads back and accepts {@link NothingEnum.NOTHING}
 * instead of a resolved value.
 */
export interface CharacterStyleAttributes<M extends Mode = 'single', NGet = never, NObj = never, NSet = never>
  extends CharacterAttributesBase<M, NGet, NObj, NSet> {}

/** Paragraph-level formatting members shared by the live {@link ParagraphFormatAttributes} and style-definition {@link ParagraphStyleAttributes}. */
export interface ParagraphAttributesBase<M extends Mode = 'single', NSet = never> {
  /** The {@link Bullet} character used by the paragraph's bulleted list. */
  readonly bulletChar: Read<M, Bullet>;

  /** The {@link NumberingRestartPolicy} governing when the paragraph's list numbering restarts. */
  readonly numberingRestartPolicies: Read<M, NumberingRestartPolicy>;

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
  get paragraphShadingLeftOffset(): Read<M, number>;
  set paragraphShadingLeftOffset(value: MeasurementValue | NSet);

  /** The distance to offset the right edge of the paragraph. */
  get paragraphShadingRightOffset(): Read<M, number>;
  set paragraphShadingRightOffset(value: MeasurementValue | NSet);

  /** The distance to offset the top edge of the paragraph. */
  get paragraphShadingTopOffset(): Read<M, number>;
  set paragraphShadingTopOffset(value: MeasurementValue | NSet);

  /** The distance to offset the bottom edge of the paragraph. */
  get paragraphShadingBottomOffset(): Read<M, number>;
  set paragraphShadingBottomOffset(value: MeasurementValue | NSet);

  /** The basis (text width or column width) used to calculate the width of the paragraph shading. */
  get paragraphShadingWidth(): Read<M, ParagraphShadingWidthEnum>;
  set paragraphShadingWidth(value: ParagraphShadingWidthEnum | NSet);

  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph shading. */
  get paragraphShadingTopOrigin(): Read<M, ParagraphShadingTopOriginEnum>;
  set paragraphShadingTopOrigin(value: ParagraphShadingTopOriginEnum | NSet);

  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph shading. */
  get paragraphShadingBottomOrigin(): Read<M, ParagraphShadingBottomOriginEnum>;
  set paragraphShadingBottomOrigin(value: ParagraphShadingBottomOriginEnum | NSet);

  /** If true, forces the shading of the paragraph to be clipped with respect to frame shape. */
  get paragraphShadingClipToFrame(): Read<M, boolean>;
  set paragraphShadingClipToFrame(value: boolean | NSet);

  /** If true, suppress printing of the shading of the paragraph. */
  get paragraphShadingSuppressPrinting(): Read<M, boolean>;
  set paragraphShadingSuppressPrinting(value: boolean | NSet);

  /** If true, the paragraph shading is On. */
  get paragraphShadingOn(): Read<M, boolean>;
  set paragraphShadingOn(value: boolean | NSet);

  /** If true, the paragraph shading will overprint. */
  get paragraphShadingOverprint(): Read<M, boolean>;
  set paragraphShadingOverprint(value: boolean | NSet);

  /** The tint (as a percentage) of the paragraph shading. (Range: 0 to 100) */
  get paragraphShadingTint(): Read<M, number>;
  set paragraphShadingTint(value: number | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph shading. */
  get paragraphShadingColor(): Read<M, Swatch>;
  set paragraphShadingColor(value: Swatch | string | NSet);

  /** If true, the paragraph border is on. */
  get paragraphBorderOn(): Read<M, boolean>;
  set paragraphBorderOn(value: boolean | NSet);

  /** If true, the paragraph border will overprint. */
  get paragraphBorderOverprint(): Read<M, boolean>;
  set paragraphBorderOverprint(value: boolean | NSet);

  /** The tint (as a percentage) of the paragraph stroke. (Range: 0 to 100) */
  get paragraphBorderTint(): Read<M, number>;
  set paragraphBorderTint(value: number | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph stroke. */
  get paragraphBorderColor(): Read<M, Swatch>;
  set paragraphBorderColor(value: Swatch | string | NSet);

  /** If true, the paragraph border gap will overprint. Note: Valid only when border type is not solid. */
  get paragraphBorderGapOverprint(): Read<M, boolean>;
  set paragraphBorderGapOverprint(value: boolean | NSet);

  /** The tint (as a percentage) of the paragraph border gap. Note: Valid only when the border type is not solid. (Range: 0 to 100) */
  get paragraphBorderGapTint(): Read<M, number>;
  set paragraphBorderGapTint(value: number | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph border gap. Note: Valid only when the border type is not solid. */
  get paragraphBorderGapColor(): Read<M, Swatch>;
  set paragraphBorderGapColor(value: Swatch | string | NSet);

  /** The type of the border for the paragraph. */
  get paragraphBorderType(): Read<M, StrokeStyle>;
  set paragraphBorderType(value: StrokeStyle | string | NSet);

  /** The left line weight of the border of paragraph. */
  get paragraphBorderLeftLineWeight(): Read<M, number>;
  set paragraphBorderLeftLineWeight(value: MeasurementValue | NSet);

  /** The top line weight of the border of paragraph. */
  get paragraphBorderTopLineWeight(): Read<M, number>;
  set paragraphBorderTopLineWeight(value: MeasurementValue | NSet);

  /** The right line weight of the border of paragraph. */
  get paragraphBorderRightLineWeight(): Read<M, number>;
  set paragraphBorderRightLineWeight(value: MeasurementValue | NSet);

  /** The bottom line weight of the border of paragraph. */
  get paragraphBorderBottomLineWeight(): Read<M, number>;
  set paragraphBorderBottomLineWeight(value: MeasurementValue | NSet);

  /** The end shape of an open path. */
  get paragraphBorderStrokeEndCap(): Read<M, EndCap>;
  set paragraphBorderStrokeEndCap(value: EndCap | NSet);

  /** The corner join applied to the ParagraphStyle. */
  get paragraphBorderStrokeEndJoin(): Read<M, EndJoin>;
  set paragraphBorderStrokeEndJoin(value: EndJoin | NSet);

  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphShadingTopLeftCornerRadius(): Read<M, number>;
  set paragraphShadingTopLeftCornerRadius(value: MeasurementValue | NSet);

  /**
   * The corner shape applied to the top-left corner of a rectangular shading
   * area, and to all corners of a non-rectangular one.
   *
   * A {@link CornerOptions} radius is set explicitly, unlike the rounded or
   * beveled effect of a stroke's end join, which follows the stroke weight.
   */
  get paragraphShadingTopLeftCornerOption(): Read<M, CornerOptions>;
  set paragraphShadingTopLeftCornerOption(value: CornerOptions | NSet);

  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerRadius(): Read<M, number>;
  set paragraphShadingTopRightCornerRadius(value: MeasurementValue | NSet);

  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerOption(): Read<M, CornerOptions>;
  set paragraphShadingTopRightCornerOption(value: CornerOptions | NSet);

  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphShadingBottomLeftCornerRadius(): Read<M, number>;
  set paragraphShadingBottomLeftCornerRadius(value: MeasurementValue | NSet);

  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphShadingBottomLeftCornerOption(): Read<M, CornerOptions>;
  set paragraphShadingBottomLeftCornerOption(value: CornerOptions | NSet);

  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphShadingBottomRightCornerRadius(): Read<M, number>;
  set paragraphShadingBottomRightCornerRadius(value: MeasurementValue | NSet);

  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphShadingBottomRightCornerOption(): Read<M, CornerOptions>;
  set paragraphShadingBottomRightCornerOption(value: CornerOptions | NSet);

  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphBorderTopLeftCornerRadius(): Read<M, number>;
  set paragraphBorderTopLeftCornerRadius(value: MeasurementValue | NSet);

  /**
   * The corner shape applied to the top-left corner of a rectangular border,
   * and to all corners of a non-rectangular one.
   *
   * Unlike {@link paragraphBorderStrokeEndJoin}, a {@link CornerOptions}
   * radius is set explicitly rather than derived from the stroke weight.
   */
  get paragraphBorderTopLeftCornerOption(): Read<M, CornerOptions>;
  set paragraphBorderTopLeftCornerOption(value: CornerOptions | NSet);

  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerRadius(): Read<M, number>;
  set paragraphBorderTopRightCornerRadius(value: MeasurementValue | NSet);

  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerOption(): Read<M, CornerOptions>;
  set paragraphBorderTopRightCornerOption(value: CornerOptions | NSet);

  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphBorderBottomLeftCornerRadius(): Read<M, number>;
  set paragraphBorderBottomLeftCornerRadius(value: MeasurementValue | NSet);

  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphBorderBottomLeftCornerOption(): Read<M, CornerOptions>;
  set paragraphBorderBottomLeftCornerOption(value: CornerOptions | NSet);

  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphBorderBottomRightCornerRadius(): Read<M, number>;
  set paragraphBorderBottomRightCornerRadius(value: MeasurementValue | NSet);

  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphBorderBottomRightCornerOption(): Read<M, CornerOptions>;
  set paragraphBorderBottomRightCornerOption(value: CornerOptions | NSet);

  /** The basis (text width or column width) used to calculate the width of the paragraph border. */
  get paragraphBorderWidth(): Read<M, ParagraphBorderEnum>;
  set paragraphBorderWidth(value: ParagraphBorderEnum | NSet);

  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph border. */
  get paragraphBorderTopOrigin(): Read<M, ParagraphBorderTopOriginEnum>;
  set paragraphBorderTopOrigin(value: ParagraphBorderTopOriginEnum | NSet);

  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph border. */
  get paragraphBorderBottomOrigin(): Read<M, ParagraphBorderBottomOriginEnum>;
  set paragraphBorderBottomOrigin(value: ParagraphBorderBottomOriginEnum | NSet);

  /** The distance to offset the left edge of the paragraph border. */
  get paragraphBorderLeftOffset(): Read<M, number>;
  set paragraphBorderLeftOffset(value: MeasurementValue | NSet);

  /** The distance to offset the right edge of the paragraph border. */
  get paragraphBorderRightOffset(): Read<M, number>;
  set paragraphBorderRightOffset(value: MeasurementValue | NSet);

  /** The distance to offset the top edge of the paragraph border. */
  get paragraphBorderTopOffset(): Read<M, number>;
  set paragraphBorderTopOffset(value: MeasurementValue | NSet);

  /** The distance to offset the bottom edge of the paragraph border. */
  get paragraphBorderBottomOffset(): Read<M, number>;
  set paragraphBorderBottomOffset(value: MeasurementValue | NSet);

  /** If true, then paragraph border is also displayed at the points where the paragraph splits across frames or columns. */
  get paragraphBorderDisplayIfSplits(): Read<M, boolean>;
  set paragraphBorderDisplayIfSplits(value: boolean | NSet);

  /** The hyphenation style chosen for the provider. */
  get providerHyphenationStyle(): Read<M, HyphenationStyleEnum>;
  set providerHyphenationStyle(value: HyphenationStyleEnum | NSet);

  /** If true, consecutive para borders with completely similar properties are merged. */
  get mergeConsecutiveParaBorders(): Read<M, boolean>;
  set mergeConsecutiveParaBorders(value: boolean | NSet);

  /** The space between paragraphs using same style. */
  get sameParaStyleSpacing(): Read<M, number | Spacing>;
  set sameParaStyleSpacing(value: MeasurementValue | Spacing | NSet);

  /** Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long */
  get paragraphKashidaWidth(): Read<M, number>;
  set paragraphKashidaWidth(value: number | NSet);

  /** If true, aligns the baseline of the text to the baseline grid. */
  get alignToBaseline(): Read<M, boolean>;
  set alignToBaseline(value: boolean | NSet);

  /** First-line indent, relative to {@link leftIndent}. Negative values hang. */
  get firstLineIndent(): Read<M, number>;
  set firstLineIndent(value: MeasurementValue | NSet);

  /** The width of the left indent. */
  get leftIndent(): Read<M, number>;
  set leftIndent(value: MeasurementValue | NSet);

  /** The width of the right indent. */
  get rightIndent(): Read<M, number>;
  set rightIndent(value: MeasurementValue | NSet);

  /** The height of the paragraph space above. */
  get spaceBefore(): Read<M, number>;
  set spaceBefore(value: MeasurementValue | NSet);

  /** The height of the paragraph space below. */
  get spaceAfter(): Read<M, number>;
  set spaceAfter(value: MeasurementValue | NSet);

  /**
   * Balances ragged lines. `true` uses the default style; a
   * {@link BalanceLinesStyle} value selects a specific style. Ignored by the
   * single-line composer.
   */
  get balanceRaggedLines(): Read<M, boolean | BalanceLinesStyle>;
  set balanceRaggedLines(value: boolean | BalanceLinesStyle | NSet);

  /** Horizontal alignment of the paragraph's lines. */
  get justification(): Read<M, Justification>;
  set justification(value: Justification | NSet);

  /** The alignment to use for lines that contain a single word. */
  get singleWordJustification(): Read<M, SingleWordJustification>;
  set singleWordJustification(value: SingleWordJustification | NSet);

  /** The percent of the type size to use for auto leading. (Range: 0 to 500). */
  get autoLeading(): Read<M, number>;
  set autoLeading(value: number | NSet);

  /** The number of lines to drop cap. */
  get dropCapLines(): Read<M, number>;
  set dropCapLines(value: number | NSet);

  /** The number of characters to drop cap. */
  get dropCapCharacters(): Read<M, number>;
  set dropCapCharacters(value: number | NSet);

  /** If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames. */
  get keepLinesTogether(): Read<M, boolean>;
  set keepLinesTogether(value: boolean | NSet);

  /** If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns. */
  get keepAllLinesTogether(): Read<M, boolean>;
  set keepAllLinesTogether(value: boolean | NSet);

  /** The minimum number of lines to keep with the next paragraph. */
  get keepWithNext(): Read<M, number>;
  set keepWithNext(value: number | NSet);

  /** The minimum number of lines to keep together in a paragraph before allowing a page break. */
  get keepFirstLines(): Read<M, number>;
  set keepFirstLines(value: number | NSet);

  /** The minimum number of lines to keep together in a paragraph after a page break. */
  get keepLastLines(): Read<M, number>;
  set keepLastLines(value: number | NSet);

  /** The location at which to start the paragraph. */
  get startParagraph(): Read<M, StartParagraph>;
  set startParagraph(value: StartParagraph | NSet);

  /** The text composer to use to compose the text. */
  get composer(): Read<M, ComposerName>;
  set composer(value: ComposerName | NSet);

  /** The minimum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get minimumWordSpacing(): Read<M, number>;
  set minimumWordSpacing(value: number | NSet);

  /** The maximum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get maximumWordSpacing(): Read<M, number>;
  set maximumWordSpacing(value: number | NSet);

  /** The desired word spacing, specified as a percentage of the font word space value. (Range: 0 to 1000) */
  get desiredWordSpacing(): Read<M, number>;
  set desiredWordSpacing(value: number | NSet);

  /** The minimum letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get minimumLetterSpacing(): Read<M, number>;
  set minimumLetterSpacing(value: number | NSet);

  /** The maximum letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get maximumLetterSpacing(): Read<M, number>;
  set maximumLetterSpacing(value: number | NSet);

  /** The desired letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) */
  get desiredLetterSpacing(): Read<M, number>;
  set desiredLetterSpacing(value: number | NSet);

  /** The minimum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get minimumGlyphScaling(): Read<M, number>;
  set minimumGlyphScaling(value: number | NSet);

  /** The maximum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get maximumGlyphScaling(): Read<M, number>;
  set maximumGlyphScaling(value: number | NSet);

  /** The desired width (as a percentage) of individual characters. (Range: 50 to 200) */
  get desiredGlyphScaling(): Read<M, number>;
  set desiredGlyphScaling(value: number | NSet);

  /** If true, places a rule above the paragraph. */
  get ruleAbove(): Read<M, boolean>;
  set ruleAbove(value: boolean | NSet);

  /** If true, the paragraph rule above will overprint. */
  get ruleAboveOverprint(): Read<M, boolean>;
  set ruleAboveOverprint(value: boolean | NSet);

  /** The line weight of the rule above. */
  get ruleAboveLineWeight(): Read<M, number>;
  set ruleAboveLineWeight(value: MeasurementValue | NSet);

  /** The tint (as a percentage) of the paragraph rule above. (Range: 0 to 100) */
  get ruleAboveTint(): Read<M, number>;
  set ruleAboveTint(value: number | NSet);

  /** The amount to offset the paragraph rule above from the baseline of the first line the paragraph. */
  get ruleAboveOffset(): Read<M, number>;
  set ruleAboveOffset(value: MeasurementValue | NSet);

  /** The distance to indent the left edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveLeftIndent(): Read<M, number>;
  set ruleAboveLeftIndent(value: MeasurementValue | NSet);

  /** The distance to indent the right edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveRightIndent(): Read<M, number>;
  set ruleAboveRightIndent(value: MeasurementValue | NSet);

  /** The basis (text width or column width) used to calculate the width of the paragraph rule above. */
  get ruleAboveWidth(): Read<M, RuleWidth>;
  set ruleAboveWidth(value: RuleWidth | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule above. */
  get ruleAboveColor(): Read<M, Swatch>;
  set ruleAboveColor(value: Swatch | string | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule above. Note: Valid only when the paragraph rule above type is not solid. */
  get ruleAboveGapColor(): Read<M, Swatch>;
  set ruleAboveGapColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the stroke gap color of the paragraph rule. (Range: 0 to 100) Note: Valid only when the rule above type is not solid. */
  get ruleAboveGapTint(): Read<M, number>;
  set ruleAboveGapTint(value: number | NSet);

  /** If true, the stroke gap of the paragraph rule above will overprint. Note: Valid only the rule above type is not solid. */
  get ruleAboveGapOverprint(): Read<M, boolean>;
  set ruleAboveGapOverprint(value: boolean | NSet);

  /** The stroke type of the rule above the paragraph. */
  get ruleAboveType(): Read<M, StrokeStyle>;
  set ruleAboveType(value: StrokeStyle | string | NSet);

  /** If true, applies a paragraph rule below. */
  get ruleBelow(): Read<M, boolean>;
  set ruleBelow(value: boolean | NSet);

  /** The line weight of the rule below. */
  get ruleBelowLineWeight(): Read<M, number>;
  set ruleBelowLineWeight(value: MeasurementValue | NSet);

  /** The tint (as a percentage) of the paragraph rule below. (Range: 0 to 100) */
  get ruleBelowTint(): Read<M, number>;
  set ruleBelowTint(value: number | NSet);

  /** The amount to offset the the paragraph rule below from the baseline of the last line of the paragraph. */
  get ruleBelowOffset(): Read<M, number>;
  set ruleBelowOffset(value: MeasurementValue | NSet);

  /** The distance to indent the left edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowLeftIndent(): Read<M, number>;
  set ruleBelowLeftIndent(value: MeasurementValue | NSet);

  /** The distance to indent the right edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowRightIndent(): Read<M, number>;
  set ruleBelowRightIndent(value: MeasurementValue | NSet);

  /** The basis (text width or column width) used to calculate the width of the paragraph rule below. */
  get ruleBelowWidth(): Read<M, RuleWidth>;
  set ruleBelowWidth(value: RuleWidth | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule below. */
  get ruleBelowColor(): Read<M, Swatch>;
  set ruleBelowColor(value: Swatch | string | NSet);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule below. Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapColor(): Read<M, Swatch>;
  set ruleBelowGapColor(value: Swatch | string | NSet);

  /** The tint (as a percentage) of the stroke gap color of the paragraph rule below. (Range: 0 to 100) Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapTint(): Read<M, number>;
  set ruleBelowGapTint(value: number | NSet);

  /** The stroke type of the rule below the paragraph. */
  get ruleBelowType(): Read<M, StrokeStyle>;
  set ruleBelowType(value: StrokeStyle | string | NSet);

  /** If true, allows hyphenation of capitalized words. */
  get hyphenateCapitalizedWords(): Read<M, boolean>;
  set hyphenateCapitalizedWords(value: boolean | NSet);

  /** If true, allows hyphenation. */
  get hyphenation(): Read<M, boolean>;
  set hyphenation(value: boolean | NSet);

  /** The minimum number of letters at the end of a word that can be broken by a hyphen. */
  get hyphenateBeforeLast(): Read<M, number>;
  set hyphenateBeforeLast(value: number | NSet);

  /** The minimum number of letters at the beginning of a word that can be broken by a hyphen. */
  get hyphenateAfterFirst(): Read<M, number>;
  set hyphenateAfterFirst(value: number | NSet);

  /** The minimum number of letters a word must have in order to qualify for hyphenation. */
  get hyphenateWordsLongerThan(): Read<M, number>;
  set hyphenateWordsLongerThan(value: number | NSet);

  /** The maximum number of hyphens that can appear on consecutive lines. To specify unlimited consecutive lines, use zero. */
  get hyphenateLadderLimit(): Read<M, number>;
  set hyphenateLadderLimit(value: number | NSet);

  /** The amount of white space allowed at the end of a line of non-justified text before hyphenation begins. Note: Valid when composer is single-line composer. */
  get hyphenationZone(): Read<M, number>;
  set hyphenationZone(value: MeasurementValue | NSet);

  /** The relative desirability of better spacing vs. fewer hyphens. A lower value results in greater use of hyphens. (Range: 0 to 100) */
  get hyphenWeight(): Read<M, number>;
  set hyphenWeight(value: number | NSet);

  /** The character style to apply to the drop cap. */
  get dropCapStyle(): Read<M, CharacterStyle>;
  set dropCapStyle(value: CharacterStyle | string | NSet);

  /** The amount to indent the last line in the paragraph. */
  get lastLineIndent(): Read<M, number>;
  set lastLineIndent(value: MeasurementValue | NSet);

  /** If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true. */
  get hyphenateLastWord(): Read<M, boolean>;
  set hyphenateLastWord(value: boolean | NSet);

  /** If the first line in the paragraph should be kept with the last line of previous paragraph. */
  get keepWithPrevious(): Read<M, boolean>;
  set keepWithPrevious(value: boolean | NSet);

  /** The number of columns a paragraph spans or the number of split columns. */
  get spanSplitColumnCount(): Read<M, number | SpanColumnCountOptions>;
  set spanSplitColumnCount(value: number | SpanColumnCountOptions | NSet);

  /** Whether a paragraph should be a single column, span columns or split columns */
  get spanColumnType(): Read<M, SpanColumnTypeOptions>;
  set spanColumnType(value: SpanColumnTypeOptions | NSet);

  /** The inside gutter if the paragraph splits columns */
  get splitColumnInsideGutter(): Read<M, number>;
  set splitColumnInsideGutter(value: MeasurementValue | NSet);

  /** The outside gutter if the paragraph splits columns */
  get splitColumnOutsideGutter(): Read<M, number>;
  set splitColumnOutsideGutter(value: MeasurementValue | NSet);

  /** The minimum space before a span or a split column */
  get spanColumnMinSpaceBefore(): Read<M, number>;
  set spanColumnMinSpaceBefore(value: MeasurementValue | NSet);

  /** The minimum space after a span or a split column */
  get spanColumnMinSpaceAfter(): Read<M, number>;
  set spanColumnMinSpaceAfter(value: MeasurementValue | NSet);

  /** If true, the rule below will overprint. */
  get ruleBelowOverprint(): Read<M, boolean>;
  set ruleBelowOverprint(value: boolean | NSet);

  /** If true, the gap color of the rule below will overprint. */
  get ruleBelowGapOverprint(): Read<M, boolean>;
  set ruleBelowGapOverprint(value: boolean | NSet);

  /** Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid. */
  get dropcapDetail(): Read<M, number>;
  set dropcapDetail(value: number | NSet);

  /** If true, allows the last word in a text column to be hyphenated. */
  get hyphenateAcrossColumns(): Read<M, boolean>;
  set hyphenateAcrossColumns(value: boolean | NSet);

  /** If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true. */
  get keepRuleAboveInFrame(): Read<M, boolean>;
  set keepRuleAboveInFrame(value: boolean | NSet);

  /** If true, ignores optical edge alignment for the paragraph. */
  get ignoreEdgeAlignment(): Read<M, boolean>;
  set ignoreEdgeAlignment(value: boolean | NSet);

  /** Whether the paragraph reads left-to-right or right-to-left. */
  get paragraphDirection(): Read<M, ParagraphDirectionOptions>;
  set paragraphDirection(value: ParagraphDirectionOptions | NSet);

  /** The justification method for Arabic-script text — the default, or one of the Naskh/Kashida variants. See {@link ParagraphJustificationOptions}. */
  get paragraphJustification(): Read<M, ParagraphJustificationOptions>;
  set paragraphJustification(value: ParagraphJustificationOptions | NSet);

  /**
   * The paragraph's tab stops, as an array of property-name/value pair arrays.
   *
   * Assigning replaces the whole list; there is no way to add a single stop
   * through this property. The individual {@link TabStop} objects are reachable
   * through {@link tabStops}.
   */
  get tabList(): Read<M, object[]>;
  set tabList(value: PropertiesSetter<TabStop>[] | NSet);

  /** If true, aligns only the first line to the frame grid or baseline grid. If false, aligns all lines to the grid. */
  get gridAlignFirstLineOnly(): Read<M, boolean>;
  set gridAlignFirstLineOnly(value: boolean | NSet);

  /** The alignment to the frame grid or baseline grid. */
  get gridAlignment(): Read<M, GridAlignment>;
  set gridAlignment(value: GridAlignment | NSet);

  /** The manual gyoudori setting. */
  get gridGyoudori(): Read<M, number>;
  set gridGyoudori(value: number | NSet);

  /** The number of half-width characters at or below which the characters automatically run horizontally in vertical text. */
  get autoTcy(): Read<M, number>;
  set autoTcy(value: number | NSet);

  /** If true, auto tcy includes Roman characters. */
  get autoTcyIncludeRoman(): Read<M, boolean>;
  set autoTcyIncludeRoman(value: boolean | NSet);

  /** The kinsoku set that determines legitimate line breaks. */
  kinsokuSet: Read<M, KinsokuTable | KinsokuSet | string>;

  /** The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined. */
  get kinsokuType(): Read<M, KinsokuType>;
  set kinsokuType(value: KinsokuType | NSet);

  /** The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect. */
  get kinsokuHangType(): Read<M, KinsokuHangTypes>;
  set kinsokuHangType(value: KinsokuHangTypes | NSet);

  /** If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect. */
  get bunriKinshi(): Read<M, boolean>;
  set bunriKinshi(value: boolean | NSet);

  /** The mojikumi table. For information, see mojikumi table defaults. */
  mojikumi: Read<M, MojikumiTable | string | MojikumiTableDefaults>;

  /** If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers. */
  get rensuuji(): Read<M, boolean>;
  set rensuuji(value: boolean | NSet);

  /** If true, rotates Roman characters in vertical text. */
  get rotateSingleByteCharacters(): Read<M, boolean>;
  set rotateSingleByteCharacters(value: boolean | NSet);

  /** The point from which leading is measured from line to line. */
  get leadingModel(): Read<M, LeadingModel>;
  set leadingModel(value: LeadingModel | NSet);

  /** If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph. */
  get paragraphGyoudori(): Read<M, boolean>;
  set paragraphGyoudori(value: boolean | NSet);

  /** If true, ideographic spaces will not wrap to the next line like text characters. */
  get treatIdeographicSpaceAsSpace(): Read<M, boolean>;
  set treatIdeographicSpaceAsSpace(value: boolean | NSet);

  /** If true, words unassociated with a hyphenation dictionary can break to the next line on any character. */
  get allowArbitraryHyphenation(): Read<M, boolean>;
  set allowArbitraryHyphenation(value: boolean | NSet);

  /** List type for bullets and numbering. */
  get bulletsAndNumberingListType(): Read<M, ListType>;
  set bulletsAndNumberingListType(value: ListType | NSet);

  /** The character style to be used for the text after string. */
  get bulletsCharacterStyle(): Read<M, CharacterStyle>;
  set bulletsCharacterStyle(value: CharacterStyle | string | NSet);

  /** The character style to be used for the number string. */
  get numberingCharacterStyle(): Read<M, CharacterStyle>;
  set numberingCharacterStyle(value: CharacterStyle | string | NSet);

  /** The number string expression for numbering. */
  get numberingExpression(): Read<M, string>;
  set numberingExpression(value: string | NSet);

  /** The text after string expression for bullets. */
  get bulletsTextAfter(): Read<M, string>;
  set bulletsTextAfter(value: string | NSet);

  /** The list to be part of. */
  get appliedNumberingList(): Read<M, NumberingList>;
  set appliedNumberingList(value: NumberingList | string | NSet);

  /** The level of the paragraph. */
  get numberingLevel(): Read<M, number>;
  set numberingLevel(value: number | NSet);

  /**
   * The numeral or letter style for the number string.
   *
   * Accepts a {@link NumberingStyle} member, or the format template string InDesign stores
   * for it — `I, II, III, IV...`, `$ID/(kanji) 1,2,3,4...`. The templates are tabulated on
   * {@link NumberingStyle}.
   */
  get numberingFormat(): Read<M, NumberingStyle | string>;
  set numberingFormat(value: NumberingStyle | string | NSet);

  /** Continue the numbering at this level. */
  get numberingContinue(): Read<M, boolean>;
  set numberingContinue(value: boolean | NSet);

  /** Determines starting number in a numbered list. */
  get numberingStartAt(): Read<M, number>;
  set numberingStartAt(value: number | NSet);

  /** If true, apply the numbering restart policy. */
  get numberingApplyRestartPolicy(): Read<M, boolean>;
  set numberingApplyRestartPolicy(value: boolean | NSet);

  /** The alignment of the bullet character. */
  get bulletsAlignment(): Read<M, ListAlignment>;
  set bulletsAlignment(value: ListAlignment | NSet);

  /** The alignment of the number. */
  get numberingAlignment(): Read<M, ListAlignment>;
  set numberingAlignment(value: ListAlignment | NSet);
}

/**
 * Live paragraph-level formatting on a text range: indents, spacing,
 * justification, drop caps, rules, borders and shading, hyphenation,
 * bullets/numbering, nested styles, and tab stops.
 *
 * Resolves for any text range, even one shorter than a full paragraph.
 * Applied alongside {@link CharacterFormatAttributes}; the style-definition
 * twin is {@link ParagraphStyleAttributes}.
 */
export interface ParagraphFormatAttributes<M extends Mode = 'single'> extends ParagraphAttributesBase<M> {}

/**
 * Paragraph formatting stored as a named **style definition**
 * ({@link ParagraphStyle}).
 *
 * A paragraph style also carries the full character-attribute set — see
 * {@link CharacterStyleAttributes}.
 */
export interface ParagraphStyleAttributes<M extends Mode = 'single', NSet = never>
  extends ParagraphAttributesBase<M, NSet> {}
