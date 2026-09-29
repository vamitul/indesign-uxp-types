/**
 * FindTransliteratePreference.d.ts — indesign-uxp-types
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
import type { Preferences } from './Preferences';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
import type { AdornmentOverprint } from './Enums/AdornmentOverprint';
import type { AlternateGlyphForms } from './Enums/AlternateGlyphForms';
import type { BalanceLinesStyle } from './Enums/BalanceLinesStyle';
import type { Capitalization } from './Enums/Capitalization';
import type { CharacterAlignment } from './Enums/CharacterAlignment';
import type { FindChangeTransliterateCharacterTypes } from './Enums/FindChangeTransliterateCharacterTypes';
import type { GridAlignment } from './Enums/GridAlignment';
import type { Justification } from './Enums/Justification';
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
import type { Position } from './Enums/Position';
import type { PositionalForms } from './Enums/PositionalForms';
import type { RubyAlignments } from './Enums/RubyAlignments';
import type { RubyKentenPosition } from './Enums/RubyKentenPosition';
import type { RubyOverhang } from './Enums/RubyOverhang';
import type { RubyParentSpacing } from './Enums/RubyParentSpacing';
import type { RubyTypes } from './Enums/RubyTypes';
import type { SingleWordJustification } from './Enums/SingleWordJustification';
import type { Spacing } from './Enums/Spacing';
import type { StartParagraph } from './Enums/StartParagraph';
import type { WarichuAlignment } from './Enums/WarichuAlignment';
import type { Language } from './Language';
import type { LanguageWithVendors } from './LanguageWithVendors';
import type { ParagraphStyle } from './ParagraphStyle';

/**
 * The character-type and formatting criteria a transliteration search matches against,
 * set via {@link Application.findTransliteratePreferences}.
 */
export interface FindTransliteratePreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FindTransliteratePreference';

  /** Resolves the proxy into the individual {@link FindTransliteratePreference} objects it stands for. */
  getElements(): FindTransliteratePreference<'single'>[];

  /** The bullet glyph to match — its character, font, and style; see {@link Bullet}. */
  readonly bulletChar: Read<M, Bullet | NothingEnum.NOTHING>;

  /** A collection of preferences objects. */
  readonly preferences: Preferences;

  /** The space between paragraphs using same style. */
  get sameParaStyleSpacing(): Read<M, number | Spacing | NothingEnum.NOTHING>;
  set sameParaStyleSpacing(value: MeasurementValue | Spacing | NothingEnum.NOTHING);

  /** Value of Design Axes. */
  get designAxes(): Read<M, number[] | NothingEnum.NOTHING>;
  set designAxes(value: number[] | NothingEnum.NOTHING);

  /** The character type to find. */
  get findCharacterType(): Read<M, FindChangeTransliterateCharacterTypes | NothingEnum.NOTHING>;
  set findCharacterType(value: FindChangeTransliterateCharacterTypes | NothingEnum.NOTHING);

  /** The character style to search for or change to. */
  get appliedCharacterStyle(): Read<M, string | NothingEnum.NOTHING>;
  set appliedCharacterStyle(value: string | NothingEnum.NOTHING | null | CharacterStyle);

  /** The paragraph style to search for or change to. */
  get appliedParagraphStyle(): Read<M, string | NothingEnum.NOTHING>;
  set appliedParagraphStyle(value: string | NothingEnum.NOTHING | null | ParagraphStyle);

  /** The amount to indent the first line. */
  get firstLineIndent(): Read<M, number | NothingEnum.NOTHING>;
  set firstLineIndent(value: MeasurementValue | NothingEnum.NOTHING);

  /** The width of the left indent. */
  get leftIndent(): Read<M, number | NothingEnum.NOTHING>;
  set leftIndent(value: MeasurementValue | NothingEnum.NOTHING);

  /** The width of the right indent. */
  get rightIndent(): Read<M, number | NothingEnum.NOTHING>;
  set rightIndent(value: MeasurementValue | NothingEnum.NOTHING);

  /** The height of the paragraph space above. */
  get spaceBefore(): Read<M, number | NothingEnum.NOTHING>;
  set spaceBefore(value: MeasurementValue | NothingEnum.NOTHING);

  /** The height of the paragraph space below. */
  get spaceAfter(): Read<M, number | NothingEnum.NOTHING>;
  set spaceAfter(value: MeasurementValue | NothingEnum.NOTHING);

  /** If true or set to an enumeration value, balances ragged lines. Note: Not valid with a single-line text composer. */
  get balanceRaggedLines(): Read<M, boolean | BalanceLinesStyle | NothingEnum.NOTHING>;
  set balanceRaggedLines(value: boolean | BalanceLinesStyle | NothingEnum.NOTHING);

  /** The paragraph alignment. */
  get justification(): Read<M, Justification | NothingEnum.NOTHING>;
  set justification(value: Justification | NothingEnum.NOTHING);

  /** The alignment to use for lines that contain a single word. */
  get singleWordJustification(): Read<M, SingleWordJustification | NothingEnum.NOTHING>;
  set singleWordJustification(value: SingleWordJustification | NothingEnum.NOTHING);

  /** The percent of the type size to use for auto leading. (Range: 0 to 500). */
  get autoLeading(): Read<M, number | NothingEnum.NOTHING>;
  set autoLeading(value: number | NothingEnum.NOTHING);

  /** The number of lines to drop cap. */
  get dropCapLines(): Read<M, number | NothingEnum.NOTHING>;
  set dropCapLines(value: number | NothingEnum.NOTHING);

  /** The number of characters to drop cap. */
  get dropCapCharacters(): Read<M, number | NothingEnum.NOTHING>;
  set dropCapCharacters(value: number | NothingEnum.NOTHING);

  /** If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames. */
  get keepLinesTogether(): Read<M, boolean | NothingEnum.NOTHING>;
  set keepLinesTogether(value: boolean | NothingEnum.NOTHING);

  /** If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns. */
  get keepAllLinesTogether(): Read<M, boolean | NothingEnum.NOTHING>;
  set keepAllLinesTogether(value: boolean | NothingEnum.NOTHING);

  /** The minimum number of lines to keep with the next paragraph. */
  get keepWithNext(): Read<M, number | NothingEnum.NOTHING>;
  set keepWithNext(value: number | NothingEnum.NOTHING);

  /** The minimum number of lines to keep together in a paragraph before allowing a page break. */
  get keepFirstLines(): Read<M, number | NothingEnum.NOTHING>;
  set keepFirstLines(value: number | NothingEnum.NOTHING);

  /** The minimum number of lines to keep together in a paragraph after a page break. */
  get keepLastLines(): Read<M, number | NothingEnum.NOTHING>;
  set keepLastLines(value: number | NothingEnum.NOTHING);

  /** The location at which to start the paragraph. */
  get startParagraph(): Read<M, StartParagraph | NothingEnum.NOTHING>;
  set startParagraph(value: StartParagraph | NothingEnum.NOTHING);

  /** The text composer to use to compose the text. */
  get composer(): Read<M, ComposerName | NothingEnum.NOTHING>;
  set composer(value: ComposerName | NothingEnum.NOTHING);

  /** The amount to indent the last line in the paragraph. */
  get lastLineIndent(): Read<M, number | NothingEnum.NOTHING>;
  set lastLineIndent(value: MeasurementValue | NothingEnum.NOTHING);

  /** If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true. */
  get hyphenateLastWord(): Read<M, boolean | NothingEnum.NOTHING>;
  set hyphenateLastWord(value: boolean | NothingEnum.NOTHING);

  /** Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid. */
  get dropcapDetail(): Read<M, number | NothingEnum.NOTHING>;
  set dropcapDetail(value: number | NothingEnum.NOTHING);

  /** If true, allows the last word in a text column to be hyphenated. */
  get hyphenateAcrossColumns(): Read<M, boolean | NothingEnum.NOTHING>;
  set hyphenateAcrossColumns(value: boolean | NothingEnum.NOTHING);

  /** If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true. */
  get keepRuleAboveInFrame(): Read<M, boolean | NothingEnum.NOTHING>;
  set keepRuleAboveInFrame(value: boolean | NothingEnum.NOTHING);

  /** If true, ignores optical edge alignment for the paragraph. */
  get ignoreEdgeAlignment(): Read<M, boolean | NothingEnum.NOTHING>;
  set ignoreEdgeAlignment(value: boolean | NothingEnum.NOTHING);

  /** The font to match, as a {@link Font} object or a font family name. */
  get appliedFont(): Read<M, Font | NothingEnum.NOTHING>;
  set appliedFont(value: Font | string | NothingEnum.NOTHING | null);

  /** The name of the font style. */
  get fontStyle(): Read<M, string | NothingEnum.NOTHING>;
  set fontStyle(value: string | NothingEnum.NOTHING);

  /** The text size. */
  get pointSize(): Read<M, number | NothingEnum.NOTHING>;
  set pointSize(value: MeasurementValue | NothingEnum.NOTHING);

  /** The leading applied to the text. */
  get leading(): Read<M, number | Leading | NothingEnum.NOTHING>;
  set leading(value: MeasurementValue | Leading | NothingEnum.NOTHING);

  /** The type of pair kerning. */
  get kerningMethod(): Read<M, KerningMethodName | NothingEnum.NOTHING>;
  set kerningMethod(value: KerningMethodName | NothingEnum.NOTHING);

  /** The amount by which to loosen or tighten a block of text, specified in thousands of an em. */
  get tracking(): Read<M, number | NothingEnum.NOTHING>;
  set tracking(value: number | NothingEnum.NOTHING);

  /** The capitalization scheme. */
  get capitalization(): Read<M, Capitalization | NothingEnum.NOTHING>;
  set capitalization(value: Capitalization | NothingEnum.NOTHING);

  /** The text position relative to the baseline. */
  get position(): Read<M, Position | NothingEnum.NOTHING>;
  set position(value: Position | NothingEnum.NOTHING);

  /** If true, underlines the text. */
  get underline(): Read<M, boolean | NothingEnum.NOTHING>;
  set underline(value: boolean | NothingEnum.NOTHING);

  /** If true, draws a strikethrough line through the text. */
  get strikeThru(): Read<M, boolean | NothingEnum.NOTHING>;
  set strikeThru(value: boolean | NothingEnum.NOTHING);

  /** If true, replaces specific character combinations (e.g., fl, fi) with ligature characters. */
  get ligatures(): Read<M, boolean | NothingEnum.NOTHING>;
  set ligatures(value: boolean | NothingEnum.NOTHING);

  /** If true, keeps the text on the same line. */
  get noBreak(): Read<M, boolean | NothingEnum.NOTHING>;
  set noBreak(value: boolean | NothingEnum.NOTHING);

  /** The horizontal scaling to match. */
  get horizontalScale(): Read<M, number | NothingEnum.NOTHING>;
  set horizontalScale(value: number | NothingEnum.NOTHING);

  /** The vertical scaling to match. */
  get verticalScale(): Read<M, number | NothingEnum.NOTHING>;
  set verticalScale(value: number | NothingEnum.NOTHING);

  /** The baseline shift applied to the text. */
  get baselineShift(): Read<M, number | NothingEnum.NOTHING>;
  set baselineShift(value: MeasurementValue | NothingEnum.NOTHING);

  /** The skew angle to match. */
  get skew(): Read<M, number | NothingEnum.NOTHING>;
  set skew(value: number | NothingEnum.NOTHING);

  /** The fill color tint (as a percentage) to match. Use a number from `0` to `100`, or `-1` for the inherited or overridden value. */
  get fillTint(): Read<M, number | NothingEnum.NOTHING>;
  set fillTint(value: number | NothingEnum.NOTHING);

  /** The stroke color tint (as a percentage) to match. Use a number from `0` to `100`, or `-1` for the inherited or overridden value. */
  get strokeTint(): Read<M, number | NothingEnum.NOTHING>;
  set strokeTint(value: number | NothingEnum.NOTHING);

  /** The stroke weight applied to the characters of the text. */
  get strokeWeight(): Read<M, number | NothingEnum.NOTHING>;
  set strokeWeight(value: MeasurementValue | NothingEnum.NOTHING);

  /** If true, the stroke of the characters will overprint. */
  get overprintStroke(): Read<M, boolean | NothingEnum.NOTHING>;
  set overprintStroke(value: boolean | NothingEnum.NOTHING);

  /** If true, the fill color of the characters will overprint. */
  get overprintFill(): Read<M, boolean | NothingEnum.NOTHING>;
  set overprintFill(value: boolean | NothingEnum.NOTHING);

  /** The figure style in OpenType fonts. */
  get otfFigureStyle(): Read<M, OTFFigureStyle | NothingEnum.NOTHING>;
  set otfFigureStyle(value: OTFFigureStyle | NothingEnum.NOTHING);

  /** If true, uses ordinals in OpenType fonts. */
  get otfOrdinal(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfOrdinal(value: boolean | NothingEnum.NOTHING);

  /** If true, uses fractions in OpenType fonts. */
  get otfFraction(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfFraction(value: boolean | NothingEnum.NOTHING);

  /** If true, uses discretionary ligatures in OpenType fonts. */
  get otfDiscretionaryLigature(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfDiscretionaryLigature(value: boolean | NothingEnum.NOTHING);

  /** If true, uses titling forms in OpenType fonts. */
  get otfTitling(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfTitling(value: boolean | NothingEnum.NOTHING);

  /** If true, uses contextual alternate forms in OpenType fonts. */
  get otfContextualAlternate(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfContextualAlternate(value: boolean | NothingEnum.NOTHING);

  /** If true, uses swash forms in OpenType fonts. */
  get otfSwash(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfSwash(value: boolean | NothingEnum.NOTHING);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. */
  get underlineColor(): Read<M, Swatch | NothingEnum.NOTHING>;
  set underlineColor(value: Swatch | string | NothingEnum.NOTHING | null);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. */
  get underlineGapColor(): Read<M, Swatch | NothingEnum.NOTHING>;
  set underlineGapColor(value: Swatch | string | NothingEnum.NOTHING | null);

  /** The underline stroke tint (as a percentage). (Range: 0 to 100). */
  get underlineTint(): Read<M, number | NothingEnum.NOTHING>;
  set underlineTint(value: number | NothingEnum.NOTHING);

  /** The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. */
  get underlineGapTint(): Read<M, number | NothingEnum.NOTHING>;
  set underlineGapTint(value: number | NothingEnum.NOTHING);

  /** If true, the underline stroke color will overprint. */
  get underlineOverprint(): Read<M, boolean | NothingEnum.NOTHING>;
  set underlineOverprint(value: boolean | NothingEnum.NOTHING);

  /** If true, the gap color of the underline stroke will overprint. */
  get underlineGapOverprint(): Read<M, boolean | NothingEnum.NOTHING>;
  set underlineGapOverprint(value: boolean | NothingEnum.NOTHING);

  /** The stroke type of the underline stroke. */
  get underlineType(): Read<M, StrokeStyle | NothingEnum.NOTHING>;
  set underlineType(value: StrokeStyle | string | NothingEnum.NOTHING | null);

  /** The amount by which to offset the underline from the text baseline. */
  get underlineOffset(): Read<M, number | NothingEnum.NOTHING>;
  set underlineOffset(value: MeasurementValue | NothingEnum.NOTHING);

  /** The stroke weight of the underline stroke. */
  get underlineWeight(): Read<M, number | NothingEnum.NOTHING>;
  set underlineWeight(value: MeasurementValue | NothingEnum.NOTHING);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. */
  get strikeThroughColor(): Read<M, Swatch | NothingEnum.NOTHING>;
  set strikeThroughColor(value: Swatch | string | NothingEnum.NOTHING | null);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. */
  get strikeThroughGapColor(): Read<M, Swatch | NothingEnum.NOTHING>;
  set strikeThroughGapColor(value: Swatch | string | NothingEnum.NOTHING | null);

  /** The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). */
  get strikeThroughTint(): Read<M, number | NothingEnum.NOTHING>;
  set strikeThroughTint(value: number | NothingEnum.NOTHING);

  /** The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. */
  get strikeThroughGapTint(): Read<M, number | NothingEnum.NOTHING>;
  set strikeThroughGapTint(value: number | NothingEnum.NOTHING);

  /** If true, the strikethrough stroke will overprint. */
  get strikeThroughOverprint(): Read<M, boolean | NothingEnum.NOTHING>;
  set strikeThroughOverprint(value: boolean | NothingEnum.NOTHING);

  /** If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. */
  get strikeThroughGapOverprint(): Read<M, boolean | NothingEnum.NOTHING>;
  set strikeThroughGapOverprint(value: boolean | NothingEnum.NOTHING);

  /** The stroke type of the strikethrough stroke. */
  get strikeThroughType(): Read<M, StrokeStyle | NothingEnum.NOTHING>;
  set strikeThroughType(value: StrokeStyle | string | NothingEnum.NOTHING | null);

  /** The amount by which to offset the strikethrough stroke from the text baseline. */
  get strikeThroughOffset(): Read<M, number | NothingEnum.NOTHING>;
  set strikeThroughOffset(value: MeasurementValue | NothingEnum.NOTHING);

  /** The stroke weight of the strikethrough stroke. */
  get strikeThroughWeight(): Read<M, number | NothingEnum.NOTHING>;
  set strikeThroughWeight(value: MeasurementValue | NothingEnum.NOTHING);

  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfSlashedZero(value: boolean | NothingEnum.NOTHING);

  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfHistorical(value: boolean | NothingEnum.NOTHING);

  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): Read<M, number | NothingEnum.NOTHING>;
  set otfStylisticSets(value: number | NothingEnum.NOTHING);

  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the text. */
  get gradientFillLength(): Read<M, number | NothingEnum.NOTHING>;
  set gradientFillLength(value: number | NothingEnum.NOTHING);

  /** The angle of a linear gradient applied to the fill of the text. (Range: -180 to 180). */
  get gradientFillAngle(): Read<M, number | NothingEnum.NOTHING>;
  set gradientFillAngle(value: number | NothingEnum.NOTHING);

  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the text. */
  get gradientStrokeLength(): Read<M, number | NothingEnum.NOTHING>;
  set gradientStrokeLength(value: number | NothingEnum.NOTHING);

  /** The angle of a linear gradient applied to the stroke of the text. (Range: -180 to 180). */
  get gradientStrokeAngle(): Read<M, number | NothingEnum.NOTHING>;
  set gradientStrokeAngle(value: number | NothingEnum.NOTHING);

  /** The starting point (in page coordinates) of a gradient applied to the fill of the text, in the format [x, y]. */
  get gradientFillStart(): Read<M, number[] | NothingEnum.NOTHING>;
  set gradientFillStart(value: number[] | NothingEnum.NOTHING);

  /** The starting point (in page coordinates) of a gradient applied to the stroke of the text, in the format [x, y]. */
  get gradientStrokeStart(): Read<M, number[] | NothingEnum.NOTHING>;
  set gradientStrokeStart(value: number[] | NothingEnum.NOTHING);

  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfMark(value: boolean | NothingEnum.NOTHING);

  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfLocale(value: boolean | NothingEnum.NOTHING);

  /** The OpenType positional form. */
  get positionalForm(): Read<M, PositionalForms | NothingEnum.NOTHING>;
  set positionalForm(value: PositionalForms | NothingEnum.NOTHING);

  /** The swatch (color, gradient, tint, or mixed ink), applied as a fill color, to search for or change to. */
  get fillColor(): Read<M, string | NothingEnum.NOTHING>;
  set fillColor(value: string | NothingEnum.NOTHING | null | Swatch);

  /** The swatch (color, gradient, tint, or mixed ink), applied as a stroke color, to search for or change to. */
  get strokeColor(): Read<M, string | NothingEnum.NOTHING>;
  set strokeColor(value: string | NothingEnum.NOTHING | null | Swatch);

  /** The language to search for or change to. */
  get appliedLanguage(): Read<M, string | NothingEnum.NOTHING>;
  set appliedLanguage(value: string | NothingEnum.NOTHING | null | Language | LanguageWithVendors);

  /** The amount of space to add or remove between characters, specified in thousands of an em. */
  get kerningValue(): Read<M, number | NothingEnum.NOTHING>;
  set kerningValue(value: number | NothingEnum.NOTHING);

  /** The alignment of small characters to the largest character in the line. */
  get characterAlignment(): Read<M, CharacterAlignment | NothingEnum.NOTHING>;
  set characterAlignment(value: CharacterAlignment | NothingEnum.NOTHING);

  /** The amount of horizontal character compression. */
  get tsume(): Read<M, number | NothingEnum.NOTHING>;
  set tsume(value: number | NothingEnum.NOTHING);

  /** The amount of space before each character. */
  get leadingAki(): Read<M, number | NothingEnum.NOTHING>;
  set leadingAki(value: number | NothingEnum.NOTHING);

  /** The amount of space after each character. */
  get trailingAki(): Read<M, number | NothingEnum.NOTHING>;
  set trailingAki(value: number | NothingEnum.NOTHING);

  /** The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. */
  get characterRotation(): Read<M, number | NothingEnum.NOTHING>;
  set characterRotation(value: number | NothingEnum.NOTHING);

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
  set kentenFillColor(value: Swatch | string | NothingEnum.NOTHING | null);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of kenten characters. */
  get kentenStrokeColor(): Read<M, Swatch | NothingEnum.NOTHING>;
  set kentenStrokeColor(value: Swatch | string | NothingEnum.NOTHING | null);

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
  set kentenFont(value: Font | string | NothingEnum.NOTHING | null);

  /** The font style of kenten characters. */
  get kentenFontStyle(): Read<M, string | NothingEnum.NOTHING>;
  set kentenFontStyle(value: string | NothingEnum.NOTHING);

  /** The size (in points) of kenten characters. */
  get kentenFontSize(): Read<M, number | NothingEnum.NOTHING>;
  set kentenFontSize(value: number | NothingEnum.NOTHING);

  /** The horizontal size of kenten characters as a percent of the original size. */
  get kentenXScale(): Read<M, number | NothingEnum.NOTHING>;
  set kentenXScale(value: number | NothingEnum.NOTHING);

  /** The vertical size of kenten charachers as a percent of the original size. */
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
  set rubyFill(value: Swatch | string | NothingEnum.NOTHING | null);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of ruby characters. */
  get rubyStroke(): Read<M, Swatch | NothingEnum.NOTHING>;
  set rubyStroke(value: Swatch | string | NothingEnum.NOTHING | null);

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
  set rubyFont(value: Font | string | NothingEnum.NOTHING | null);

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

  /** Whether ruby applies to the whole character group or to each character individually; see {@link RubyTypes}. */
  get rubyType(): Read<M, RubyTypes | NothingEnum.NOTHING>;
  set rubyType(value: RubyTypes | NothingEnum.NOTHING);

  /** How ruby text is aligned relative to its parent characters — see {@link RubyAlignments}. */
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

  /** The number of digits included in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyDigits(): Read<M, number | NothingEnum.NOTHING>;
  set rubyAutoTcyDigits(value: number | NothingEnum.NOTHING);

  /** If true, includes Roman characters in auto tcy (tate-chuu-yoko) in ruby. */
  get rubyAutoTcyIncludeRoman(): Read<M, boolean | NothingEnum.NOTHING>;
  set rubyAutoTcyIncludeRoman(value: boolean | NothingEnum.NOTHING);

  /** If true, automatically scales glyphs in auto tcy (tate-chuu-yoko) in ruby to fit one em. */
  get rubyAutoTcyAutoScale(): Read<M, boolean | NothingEnum.NOTHING>;
  set rubyAutoTcyAutoScale(value: boolean | NothingEnum.NOTHING);

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

  /** How the two warichu lines align against each other — left, center, right, justified, or automatic; see {@link WarichuAlignment}. */
  get warichuAlignment(): Read<M, WarichuAlignment | NothingEnum.NOTHING>;
  set warichuAlignment(value: WarichuAlignment | NothingEnum.NOTHING);

  /** The minimum number of characters allowed after a line break. */
  get warichuCharsAfterBreak(): Read<M, number | NothingEnum.NOTHING>;
  set warichuCharsAfterBreak(value: number | NothingEnum.NOTHING);

  /** The minimum number of characters allowed before a line break. */
  get warichuCharsBeforeBreak(): Read<M, number | NothingEnum.NOTHING>;
  set warichuCharsBeforeBreak(value: number | NothingEnum.NOTHING);

  /** If true, kerns according to proportional CJK metrics in OpenType fonts. */
  get otfProportionalMetrics(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfProportionalMetrics(value: boolean | NothingEnum.NOTHING);

  /** If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. */
  get otfHVKana(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfHVKana(value: boolean | NothingEnum.NOTHING);

  /** If true, applies italics to half-width alphanumerics. */
  get otfRomanItalics(): Read<M, boolean | NothingEnum.NOTHING>;
  set otfRomanItalics(value: boolean | NothingEnum.NOTHING);

  /** If true, the line changes size when characters are scaled. */
  get scaleAffectsLineHeight(): Read<M, boolean | NothingEnum.NOTHING>;
  set scaleAffectsLineHeight(value: boolean | NothingEnum.NOTHING);

  /** If true, uses grid tracking to track non-Roman characters in CJK grids. */
  get cjkGridTracking(): Read<M, boolean | NothingEnum.NOTHING>;
  set cjkGridTracking(value: boolean | NothingEnum.NOTHING);

  /** The glyph variant to substitute for standard glyphs. */
  get glyphForm(): Read<M, AlternateGlyphForms | NothingEnum.NOTHING>;
  set glyphForm(value: AlternateGlyphForms | NothingEnum.NOTHING);

  /** If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph. */
  get paragraphGyoudori(): Read<M, boolean | NothingEnum.NOTHING>;
  set paragraphGyoudori(value: boolean | NothingEnum.NOTHING);

  /** The alignment to the frame grid or baseline grid. */
  get gridAlignment(): Read<M, GridAlignment | NothingEnum.NOTHING>;
  set gridAlignment(value: GridAlignment | NothingEnum.NOTHING);

  /** The manual gyoudori setting. */
  get gridGyoudori(): Read<M, number | NothingEnum.NOTHING>;
  set gridGyoudori(value: number | NothingEnum.NOTHING);

  /** The number of half-width characters at or below which the characters automatically run horizontally in vertical text. */
  get autoTcy(): Read<M, number | NothingEnum.NOTHING>;
  set autoTcy(value: number | NothingEnum.NOTHING);

  /** If true, auto tcy includes Roman characters. */
  get autoTcyIncludeRoman(): Read<M, boolean | NothingEnum.NOTHING>;
  set autoTcyIncludeRoman(value: boolean | NothingEnum.NOTHING);

  /** The kinsoku set that determines legitimate line breaks. */
  get kinsokuSet(): Read<M, KinsokuTable | KinsokuSet | string | NothingEnum.NOTHING>;
  set kinsokuSet(value: KinsokuTable | KinsokuSet | string | NothingEnum.NOTHING);

  /** The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined. */
  get kinsokuType(): Read<M, KinsokuType | NothingEnum.NOTHING>;
  set kinsokuType(value: KinsokuType | NothingEnum.NOTHING);

  /** The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect. */
  get kinsokuHangType(): Read<M, KinsokuHangTypes | NothingEnum.NOTHING>;
  set kinsokuHangType(value: KinsokuHangTypes | NothingEnum.NOTHING);

  /** If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect. */
  get bunriKinshi(): Read<M, boolean | NothingEnum.NOTHING>;
  set bunriKinshi(value: boolean | NothingEnum.NOTHING);

  /** The mojikumi table. For information, see mojikumi table defaults. */
  get mojikumi(): Read<M, MojikumiTable | string | MojikumiTableDefaults | NothingEnum.NOTHING>;
  set mojikumi(value: MojikumiTable | string | MojikumiTableDefaults | NothingEnum.NOTHING);

  /** If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers. */
  get rensuuji(): Read<M, boolean | NothingEnum.NOTHING>;
  set rensuuji(value: boolean | NothingEnum.NOTHING);

  /** If true, rotates Roman characters in vertical text. */
  get rotateSingleByteCharacters(): Read<M, boolean | NothingEnum.NOTHING>;
  set rotateSingleByteCharacters(value: boolean | NothingEnum.NOTHING);

  /** The point from which leading is measured from line to line. */
  get leadingModel(): Read<M, LeadingModel | NothingEnum.NOTHING>;
  set leadingModel(value: LeadingModel | NothingEnum.NOTHING);

  /** If true, ideographic spaces will not wrap to the next line like text characters. */
  get treatIdeographicSpaceAsSpace(): Read<M, boolean | NothingEnum.NOTHING>;
  set treatIdeographicSpaceAsSpace(value: boolean | NothingEnum.NOTHING);

  /** If true, words unassociated with a hyphenation dictionary can break to the next line on any character. */
  get allowArbitraryHyphenation(): Read<M, boolean | NothingEnum.NOTHING>;
  set allowArbitraryHyphenation(value: boolean | NothingEnum.NOTHING);

  /** The text after string expression for bullets. */
  get bulletsTextAfter(): Read<M, string | NothingEnum.NOTHING>;
  set bulletsTextAfter(value: string | NothingEnum.NOTHING);

  /** The character style to be used for the text after string. */
  get bulletsCharacterStyle(): Read<M, CharacterStyle | NothingEnum.NOTHING>;
  set bulletsCharacterStyle(value: CharacterStyle | string | NothingEnum.NOTHING);

  /** The alignment of the bullet character. */
  get bulletsAlignment(): Read<M, ListAlignment | NothingEnum.NOTHING>;
  set bulletsAlignment(value: ListAlignment | NothingEnum.NOTHING);

  /** The list to be part of. */
  get appliedNumberingList(): Read<M, NumberingList | NothingEnum.NOTHING>;
  set appliedNumberingList(value: NumberingList | string | NothingEnum.NOTHING);

  /** The level of the paragraph. */
  get numberingLevel(): Read<M, number | NothingEnum.NOTHING>;
  set numberingLevel(value: number | NothingEnum.NOTHING);

  /**
   * The numeral or letter style for the number string.
   *
   * Accepts a {@link NumberingStyle} member, or the format template string InDesign stores
   * for it — `I, II, III, IV...`, `$ID/(kanji) 1,2,3,4...`. The templates are tabulated on
   * {@link NumberingStyle}.
   */
  get numberingFormat(): Read<M, NumberingStyle | string | NothingEnum.NOTHING>;
  set numberingFormat(value: NumberingStyle | string | NothingEnum.NOTHING);

  /** The number string expression for numbering. */
  get numberingExpression(): Read<M, string | NothingEnum.NOTHING>;
  set numberingExpression(value: string | NothingEnum.NOTHING);

  /** The character style to be used for the number string. */
  get numberingCharacterStyle(): Read<M, CharacterStyle | NothingEnum.NOTHING>;
  set numberingCharacterStyle(value: CharacterStyle | string | NothingEnum.NOTHING);

  /** Continue the numbering at this level. */
  get numberingContinue(): Read<M, boolean | NothingEnum.NOTHING>;
  set numberingContinue(value: boolean | NothingEnum.NOTHING);

  /** Determines starting number in a numbered list. */
  get numberingStartAt(): Read<M, number | NothingEnum.NOTHING>;
  set numberingStartAt(value: number | NothingEnum.NOTHING);

  /** If true, apply the numbering restart policy. */
  get numberingApplyRestartPolicy(): Read<M, boolean | NothingEnum.NOTHING>;
  set numberingApplyRestartPolicy(value: boolean | NothingEnum.NOTHING);

  /** The alignment of the number. */
  get numberingAlignment(): Read<M, ListAlignment | NothingEnum.NOTHING>;
  set numberingAlignment(value: ListAlignment | NothingEnum.NOTHING);

  /** List type for bullets and numbering. */
  get bulletsAndNumberingListType(): Read<M, ListType | NothingEnum.NOTHING>;
  set bulletsAndNumberingListType(value: ListType | NothingEnum.NOTHING);

  /**
   * Set Nth design axis of a variable font.
   * @param nthAxisIndex Index of design axis.
   * @param nthAxisValue Value of nth design axis.
   */
  setNthDesignAxis(nthAxisIndex: number, nthAxisValue: number): Read<M, void>;

  /**
   * If true, Nth design axis of variable font is hidden.
   * @param nthAxisIndex Index of design axis.
   */
  isNthDesignAxisHidden(nthAxisIndex: number): Read<M, boolean>;
}
