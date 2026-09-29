/**
 * ParagraphStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { ParagraphStyleGroup } from './ParagraphStyleGroup';
import type {
  ParagraphStyleAttributes,
  CharacterStyleAttributes,
  TextGraphicAttributes,
} from './_base/TextAttributes';
import type { StyleExportTagMaps } from './StyleExportTagMaps';
import type { StyleMoveReference } from './_base/Unions';
import type { LocationOptions } from './Enums/LocationOptions';
import type { ColorSpace } from './Enums/ColorSpace';
import type { UIColors } from './Enums/UIColors';
import type { NothingEnum } from './Enums/NothingEnum';
import type { FilePath } from './_base/Types';
import type { ParagraphStyles } from './ParagraphStyles';
import type { Bullet } from './Bullet';
import type { Color } from './Color';
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
import type { WarichuAlignment } from './Enums/WarichuAlignment';
import type { Font } from './Font';
import type { Gradient } from './Gradient';
import type { Language } from './Language';
import type { LanguageWithVendors } from './LanguageWithVendors';
import type { MixedInk } from './MixedInk';
import type { NumberingRestartPolicy } from './NumberingRestartPolicy';
import type { Swatch } from './Swatch';
import type { TabStop } from './TabStop';
import type { Tint } from './Tint';
import type { AdornmentOverprint } from './Enums/AdornmentOverprint';
import type { AlternateGlyphForms } from './Enums/AlternateGlyphForms';
import type { CharacterAlignment } from './Enums/CharacterAlignment';
import type { CharacterDirectionOptions } from './Enums/CharacterDirectionOptions';
import type { CharacterStyle } from './CharacterStyle';
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
import type { GridAlignment } from './Enums/GridAlignment';
import type { HyphenationStyleEnum } from './Enums/HyphenationStyleEnum';
import type { InDesignEventMap } from './_base/Events';
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
import type { ListAlignment } from './Enums/ListAlignment';
import type { ListType } from './Enums/ListType';
import type { MeasurementValue } from './_base/Types';
import type { MojikumiTable } from './MojikumiTable';
import type { MojikumiTableDefaults } from './Enums/MojikumiTableDefaults';
import type { NestedGrepStyles } from './NestedGrepStyles';
import type { NestedLineStyles } from './NestedLineStyles';
import type { NestedStyles } from './NestedStyles';
import type { NumberingList } from './NumberingList';
import type { OTFFigureStyle } from './Enums/OTFFigureStyle';
import type { OutlineJoin } from './Enums/OutlineJoin';
import type { ParagraphBorderBottomOriginEnum } from './Enums/ParagraphBorderBottomOriginEnum';
import type { ParagraphBorderEnum } from './Enums/ParagraphBorderEnum';
import type { ParagraphBorderTopOriginEnum } from './Enums/ParagraphBorderTopOriginEnum';
import type { ParagraphDirectionOptions } from './Enums/ParagraphDirectionOptions';
import type { ParagraphShadingBottomOriginEnum } from './Enums/ParagraphShadingBottomOriginEnum';
import type { ParagraphShadingTopOriginEnum } from './Enums/ParagraphShadingTopOriginEnum';
import type { ParagraphShadingWidthEnum } from './Enums/ParagraphShadingWidthEnum';
import type { Position } from './Enums/Position';
import type { Preferences } from './Preferences';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
import type { RubyKentenPosition } from './Enums/RubyKentenPosition';
import type { RubyOverhang } from './Enums/RubyOverhang';
import type { RubyParentSpacing } from './Enums/RubyParentSpacing';
import type { RuleWidth } from './Enums/RuleWidth';
import type { SingleWordJustification } from './Enums/SingleWordJustification';
import type { Spacing } from './Enums/Spacing';
import type { SpanColumnCountOptions } from './Enums/SpanColumnCountOptions';
import type { SpanColumnTypeOptions } from './Enums/SpanColumnTypeOptions';
import type { StartParagraph } from './Enums/StartParagraph';
import type { StrokeStyle } from './StrokeStyle';
import type { TabStops } from './TabStops';
import type { TextStrokeAlign } from './Enums/TextStrokeAlign';
/**
 * A named paragraph style definition, held in a document's or the application's {@link ParagraphStyles} collection (optionally nested inside a {@link ParagraphStyleGroup}).
 *
 * Stores both the paragraph-level formatting — indents, spacing, justification, drop caps,
 * rules, hyphenation, bullets and numbering — and the character formatting applied along with
 * it, as a reusable named definition rather than as formatting applied directly to text.
 *
 * Unlike a character style, a paragraph style always resolves every attribute to a
 * concrete value rather than leaving unset ones as {@link NothingEnum.NOTHING}.
 */
export interface ParagraphStyle {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Document | Application | ParagraphStyleGroup;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<ParagraphStyle, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ParagraphStyle, 'single'>);
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
  set paragraphShadingLeftOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to offset the right edge of the paragraph. */
  get paragraphShadingRightOffset(): number;
  set paragraphShadingRightOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to offset the top edge of the paragraph. */
  get paragraphShadingTopOffset(): number;
  set paragraphShadingTopOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to offset the bottom edge of the paragraph. */
  get paragraphShadingBottomOffset(): number;
  set paragraphShadingBottomOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The basis (text width or column width) used to calculate the width of the paragraph shading. */
  get paragraphShadingWidth(): ParagraphShadingWidthEnum;
  set paragraphShadingWidth(value: ParagraphShadingWidthEnum | NothingEnum.NOTHING);
  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph shading. */
  get paragraphShadingTopOrigin(): ParagraphShadingTopOriginEnum;
  set paragraphShadingTopOrigin(value: ParagraphShadingTopOriginEnum | NothingEnum.NOTHING);
  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph shading. */
  get paragraphShadingBottomOrigin(): ParagraphShadingBottomOriginEnum;
  set paragraphShadingBottomOrigin(value: ParagraphShadingBottomOriginEnum | NothingEnum.NOTHING);
  /** If true, forces the shading of the paragraph to be clipped with respect to frame shape. */
  get paragraphShadingClipToFrame(): boolean;
  set paragraphShadingClipToFrame(value: boolean | NothingEnum.NOTHING);
  /** If true, suppress printing of the shading of the paragraph. */
  get paragraphShadingSuppressPrinting(): boolean;
  set paragraphShadingSuppressPrinting(value: boolean | NothingEnum.NOTHING);
  /** If true, the paragraph shading is On. */
  get paragraphShadingOn(): boolean;
  set paragraphShadingOn(value: boolean | NothingEnum.NOTHING);
  /** If true, the paragraph shading will overprint. */
  get paragraphShadingOverprint(): boolean;
  set paragraphShadingOverprint(value: boolean | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the paragraph shading. (Range: 0 to 100) */
  get paragraphShadingTint(): number;
  set paragraphShadingTint(value: number | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph shading. */
  get paragraphShadingColor(): Swatch;
  set paragraphShadingColor(value: Swatch | string | NothingEnum.NOTHING);
  /** If true, the paragraph border is on. */
  get paragraphBorderOn(): boolean;
  set paragraphBorderOn(value: boolean | NothingEnum.NOTHING);
  /** If true, the paragraph border will overprint. */
  get paragraphBorderOverprint(): boolean;
  set paragraphBorderOverprint(value: boolean | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the paragraph stroke. (Range: 0 to 100) */
  get paragraphBorderTint(): number;
  set paragraphBorderTint(value: number | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph stroke. */
  get paragraphBorderColor(): Swatch;
  set paragraphBorderColor(value: Swatch | string | NothingEnum.NOTHING);
  /** If true, the paragraph border gap will overprint. Note: Valid only when border type is not solid. */
  get paragraphBorderGapOverprint(): boolean;
  set paragraphBorderGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the paragraph border gap. Note: Valid only when the border type is not solid. (Range: 0 to 100) */
  get paragraphBorderGapTint(): number;
  set paragraphBorderGapTint(value: number | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph border gap. Note: Valid only when the border type is not solid. */
  get paragraphBorderGapColor(): Swatch;
  set paragraphBorderGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The type of the border for the paragraph. */
  get paragraphBorderType(): StrokeStyle;
  set paragraphBorderType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The left line weight of the border of paragraph. */
  get paragraphBorderLeftLineWeight(): number;
  set paragraphBorderLeftLineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The top line weight of the border of paragraph. */
  get paragraphBorderTopLineWeight(): number;
  set paragraphBorderTopLineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The right line weight of the border of paragraph. */
  get paragraphBorderRightLineWeight(): number;
  set paragraphBorderRightLineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The bottom line weight of the border of paragraph. */
  get paragraphBorderBottomLineWeight(): number;
  set paragraphBorderBottomLineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The end shape of an open path. */
  get paragraphBorderStrokeEndCap(): EndCap;
  set paragraphBorderStrokeEndCap(value: EndCap | NothingEnum.NOTHING);
  /** The corner join applied to the ParagraphStyle. */
  get paragraphBorderStrokeEndJoin(): EndJoin;
  set paragraphBorderStrokeEndJoin(value: EndJoin | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphShadingTopLeftCornerRadius(): number;
  set paragraphShadingTopLeftCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * The corner shape applied to the top-left corner of a rectangular shading
   * area, and to all corners of a non-rectangular one.
   *
   * A {@link CornerOptions} radius is set explicitly, unlike the rounded or
   * beveled effect of a stroke's end join, which follows the stroke weight.
   */
  get paragraphShadingTopLeftCornerOption(): CornerOptions;
  set paragraphShadingTopLeftCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerRadius(): number;
  set paragraphShadingTopRightCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerOption(): CornerOptions;
  set paragraphShadingTopRightCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphShadingBottomLeftCornerRadius(): number;
  set paragraphShadingBottomLeftCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphShadingBottomLeftCornerOption(): CornerOptions;
  set paragraphShadingBottomLeftCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphShadingBottomRightCornerRadius(): number;
  set paragraphShadingBottomRightCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphShadingBottomRightCornerOption(): CornerOptions;
  set paragraphShadingBottomRightCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphBorderTopLeftCornerRadius(): number;
  set paragraphBorderTopLeftCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * The corner shape applied to the top-left corner of a rectangular border,
   * and to all corners of a non-rectangular one.
   *
   * Unlike {@link paragraphBorderStrokeEndJoin}, a {@link CornerOptions}
   * radius is set explicitly rather than derived from the stroke weight.
   */
  get paragraphBorderTopLeftCornerOption(): CornerOptions;
  set paragraphBorderTopLeftCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerRadius(): number;
  set paragraphBorderTopRightCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerOption(): CornerOptions;
  set paragraphBorderTopRightCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphBorderBottomLeftCornerRadius(): number;
  set paragraphBorderBottomLeftCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphBorderBottomLeftCornerOption(): CornerOptions;
  set paragraphBorderBottomLeftCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphBorderBottomRightCornerRadius(): number;
  set paragraphBorderBottomRightCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphBorderBottomRightCornerOption(): CornerOptions;
  set paragraphBorderBottomRightCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The basis (text width or column width) used to calculate the width of the paragraph border. */
  get paragraphBorderWidth(): ParagraphBorderEnum;
  set paragraphBorderWidth(value: ParagraphBorderEnum | NothingEnum.NOTHING);
  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph border. */
  get paragraphBorderTopOrigin(): ParagraphBorderTopOriginEnum;
  set paragraphBorderTopOrigin(value: ParagraphBorderTopOriginEnum | NothingEnum.NOTHING);
  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph border. */
  get paragraphBorderBottomOrigin(): ParagraphBorderBottomOriginEnum;
  set paragraphBorderBottomOrigin(value: ParagraphBorderBottomOriginEnum | NothingEnum.NOTHING);
  /** The distance to offset the left edge of the paragraph border. */
  get paragraphBorderLeftOffset(): number;
  set paragraphBorderLeftOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to offset the right edge of the paragraph border. */
  get paragraphBorderRightOffset(): number;
  set paragraphBorderRightOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to offset the top edge of the paragraph border. */
  get paragraphBorderTopOffset(): number;
  set paragraphBorderTopOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to offset the bottom edge of the paragraph border. */
  get paragraphBorderBottomOffset(): number;
  set paragraphBorderBottomOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, then paragraph border is also displayed at the points where the paragraph splits across frames or columns. */
  get paragraphBorderDisplayIfSplits(): boolean;
  set paragraphBorderDisplayIfSplits(value: boolean | NothingEnum.NOTHING);
  /** The hyphenation style chosen for the provider. */
  get providerHyphenationStyle(): HyphenationStyleEnum;
  set providerHyphenationStyle(value: HyphenationStyleEnum | NothingEnum.NOTHING);
  /** If true, consecutive para borders with completely similar properties are merged. */
  get mergeConsecutiveParaBorders(): boolean;
  set mergeConsecutiveParaBorders(value: boolean | NothingEnum.NOTHING);
  /** The space between paragraphs using same style. */
  get sameParaStyleSpacing(): number | Spacing;
  set sameParaStyleSpacing(value: MeasurementValue | Spacing | NothingEnum.NOTHING);
  /** Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long */
  get paragraphKashidaWidth(): number;
  set paragraphKashidaWidth(value: number | NothingEnum.NOTHING);
  /** If true, aligns the baseline of the text to the baseline grid. */
  get alignToBaseline(): boolean;
  set alignToBaseline(value: boolean | NothingEnum.NOTHING);
  /** First-line indent, relative to {@link leftIndent}. Negative values hang. */
  get firstLineIndent(): number;
  set firstLineIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The width of the left indent. */
  get leftIndent(): number;
  set leftIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The width of the right indent. */
  get rightIndent(): number;
  set rightIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The height of the paragraph space above. */
  get spaceBefore(): number;
  set spaceBefore(value: MeasurementValue | NothingEnum.NOTHING);
  /** The height of the paragraph space below. */
  get spaceAfter(): number;
  set spaceAfter(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * Balances ragged lines. `true` uses the default style; a
   * {@link BalanceLinesStyle} value selects a specific style. Ignored by the
   * single-line composer.
   */
  get balanceRaggedLines(): boolean | BalanceLinesStyle;
  set balanceRaggedLines(value: boolean | BalanceLinesStyle | NothingEnum.NOTHING);
  /** Horizontal alignment of the paragraph's lines. */
  get justification(): Justification;
  set justification(value: Justification | NothingEnum.NOTHING);
  /** The alignment to use for lines that contain a single word. */
  get singleWordJustification(): SingleWordJustification;
  set singleWordJustification(value: SingleWordJustification | NothingEnum.NOTHING);
  /** The percent of the type size to use for auto leading. (Range: 0 to 500). */
  get autoLeading(): number;
  set autoLeading(value: number | NothingEnum.NOTHING);
  /** The number of lines to drop cap. */
  get dropCapLines(): number;
  set dropCapLines(value: number | NothingEnum.NOTHING);
  /** The number of characters to drop cap. */
  get dropCapCharacters(): number;
  set dropCapCharacters(value: number | NothingEnum.NOTHING);
  /** If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames. */
  get keepLinesTogether(): boolean;
  set keepLinesTogether(value: boolean | NothingEnum.NOTHING);
  /** If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns. */
  get keepAllLinesTogether(): boolean;
  set keepAllLinesTogether(value: boolean | NothingEnum.NOTHING);
  /** The minimum number of lines to keep with the next paragraph. */
  get keepWithNext(): number;
  set keepWithNext(value: number | NothingEnum.NOTHING);
  /** The minimum number of lines to keep together in a paragraph before allowing a page break. */
  get keepFirstLines(): number;
  set keepFirstLines(value: number | NothingEnum.NOTHING);
  /** The minimum number of lines to keep together in a paragraph after a page break. */
  get keepLastLines(): number;
  set keepLastLines(value: number | NothingEnum.NOTHING);
  /** The location at which to start the paragraph. */
  get startParagraph(): StartParagraph;
  set startParagraph(value: StartParagraph | NothingEnum.NOTHING);
  /** The text composer to use to compose the text. */
  get composer(): ComposerName;
  set composer(value: ComposerName | NothingEnum.NOTHING);
  /** The minimum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get minimumWordSpacing(): number;
  set minimumWordSpacing(value: number | NothingEnum.NOTHING);
  /** The maximum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get maximumWordSpacing(): number;
  set maximumWordSpacing(value: number | NothingEnum.NOTHING);
  /** The desired word spacing, specified as a percentage of the font word space value. (Range: 0 to 1000) */
  get desiredWordSpacing(): number;
  set desiredWordSpacing(value: number | NothingEnum.NOTHING);
  /** The minimum letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get minimumLetterSpacing(): number;
  set minimumLetterSpacing(value: number | NothingEnum.NOTHING);
  /** The maximum letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get maximumLetterSpacing(): number;
  set maximumLetterSpacing(value: number | NothingEnum.NOTHING);
  /** The desired letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) */
  get desiredLetterSpacing(): number;
  set desiredLetterSpacing(value: number | NothingEnum.NOTHING);
  /** The minimum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get minimumGlyphScaling(): number;
  set minimumGlyphScaling(value: number | NothingEnum.NOTHING);
  /** The maximum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get maximumGlyphScaling(): number;
  set maximumGlyphScaling(value: number | NothingEnum.NOTHING);
  /** The desired width (as a percentage) of individual characters. (Range: 50 to 200) */
  get desiredGlyphScaling(): number;
  set desiredGlyphScaling(value: number | NothingEnum.NOTHING);
  /** If true, places a rule above the paragraph. */
  get ruleAbove(): boolean;
  set ruleAbove(value: boolean | NothingEnum.NOTHING);
  /** If true, the paragraph rule above will overprint. */
  get ruleAboveOverprint(): boolean;
  set ruleAboveOverprint(value: boolean | NothingEnum.NOTHING);
  /** The line weight of the rule above. */
  get ruleAboveLineWeight(): number;
  set ruleAboveLineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the paragraph rule above. (Range: 0 to 100) */
  get ruleAboveTint(): number;
  set ruleAboveTint(value: number | NothingEnum.NOTHING);
  /** The amount to offset the paragraph rule above from the baseline of the first line the paragraph. */
  get ruleAboveOffset(): number;
  set ruleAboveOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to indent the left edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveLeftIndent(): number;
  set ruleAboveLeftIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to indent the right edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveRightIndent(): number;
  set ruleAboveRightIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The basis (text width or column width) used to calculate the width of the paragraph rule above. */
  get ruleAboveWidth(): RuleWidth;
  set ruleAboveWidth(value: RuleWidth | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule above. */
  get ruleAboveColor(): Swatch;
  set ruleAboveColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule above. Note: Valid only when the paragraph rule above type is not solid. */
  get ruleAboveGapColor(): Swatch;
  set ruleAboveGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the stroke gap color of the paragraph rule. (Range: 0 to 100) Note: Valid only when the rule above type is not solid. */
  get ruleAboveGapTint(): number;
  set ruleAboveGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the stroke gap of the paragraph rule above will overprint. Note: Valid only the rule above type is not solid. */
  get ruleAboveGapOverprint(): boolean;
  set ruleAboveGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke type of the rule above the paragraph. */
  get ruleAboveType(): StrokeStyle;
  set ruleAboveType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** If true, applies a paragraph rule below. */
  get ruleBelow(): boolean;
  set ruleBelow(value: boolean | NothingEnum.NOTHING);
  /** The line weight of the rule below. */
  get ruleBelowLineWeight(): number;
  set ruleBelowLineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the paragraph rule below. (Range: 0 to 100) */
  get ruleBelowTint(): number;
  set ruleBelowTint(value: number | NothingEnum.NOTHING);
  /** The amount to offset the the paragraph rule below from the baseline of the last line of the paragraph. */
  get ruleBelowOffset(): number;
  set ruleBelowOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to indent the left edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowLeftIndent(): number;
  set ruleBelowLeftIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to indent the right edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowRightIndent(): number;
  set ruleBelowRightIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The basis (text width or column width) used to calculate the width of the paragraph rule below. */
  get ruleBelowWidth(): RuleWidth;
  set ruleBelowWidth(value: RuleWidth | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule below. */
  get ruleBelowColor(): Swatch;
  set ruleBelowColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule below. Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapColor(): Swatch;
  set ruleBelowGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the stroke gap color of the paragraph rule below. (Range: 0 to 100) Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapTint(): number;
  set ruleBelowGapTint(value: number | NothingEnum.NOTHING);
  /** The stroke type of the rule below the paragraph. */
  get ruleBelowType(): StrokeStyle;
  set ruleBelowType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** If true, allows hyphenation of capitalized words. */
  get hyphenateCapitalizedWords(): boolean;
  set hyphenateCapitalizedWords(value: boolean | NothingEnum.NOTHING);
  /** If true, allows hyphenation. */
  get hyphenation(): boolean;
  set hyphenation(value: boolean | NothingEnum.NOTHING);
  /** The minimum number of letters at the end of a word that can be broken by a hyphen. */
  get hyphenateBeforeLast(): number;
  set hyphenateBeforeLast(value: number | NothingEnum.NOTHING);
  /** The minimum number of letters at the beginning of a word that can be broken by a hyphen. */
  get hyphenateAfterFirst(): number;
  set hyphenateAfterFirst(value: number | NothingEnum.NOTHING);
  /** The minimum number of letters a word must have in order to qualify for hyphenation. */
  get hyphenateWordsLongerThan(): number;
  set hyphenateWordsLongerThan(value: number | NothingEnum.NOTHING);
  /** The maximum number of hyphens that can appear on consecutive lines. To specify unlimited consecutive lines, use zero. */
  get hyphenateLadderLimit(): number;
  set hyphenateLadderLimit(value: number | NothingEnum.NOTHING);
  /** The amount of white space allowed at the end of a line of non-justified text before hyphenation begins. Note: Valid when composer is single-line composer. */
  get hyphenationZone(): number;
  set hyphenationZone(value: MeasurementValue | NothingEnum.NOTHING);
  /** The relative desirability of better spacing vs. fewer hyphens. A lower value results in greater use of hyphens. (Range: 0 to 100) */
  get hyphenWeight(): number;
  set hyphenWeight(value: number | NothingEnum.NOTHING);
  /** The character style to apply to the drop cap. */
  get dropCapStyle(): CharacterStyle;
  set dropCapStyle(value: CharacterStyle | string | NothingEnum.NOTHING);
  /** The amount to indent the last line in the paragraph. */
  get lastLineIndent(): number;
  set lastLineIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true. */
  get hyphenateLastWord(): boolean;
  set hyphenateLastWord(value: boolean | NothingEnum.NOTHING);
  /** If the first line in the paragraph should be kept with the last line of previous paragraph. */
  get keepWithPrevious(): boolean;
  set keepWithPrevious(value: boolean | NothingEnum.NOTHING);
  /** The number of columns a paragraph spans or the number of split columns. */
  get spanSplitColumnCount(): number | SpanColumnCountOptions;
  set spanSplitColumnCount(value: number | SpanColumnCountOptions | NothingEnum.NOTHING);
  /** Whether a paragraph should be a single column, span columns or split columns */
  get spanColumnType(): SpanColumnTypeOptions;
  set spanColumnType(value: SpanColumnTypeOptions | NothingEnum.NOTHING);
  /** The inside gutter if the paragraph splits columns */
  get splitColumnInsideGutter(): number;
  set splitColumnInsideGutter(value: MeasurementValue | NothingEnum.NOTHING);
  /** The outside gutter if the paragraph splits columns */
  get splitColumnOutsideGutter(): number;
  set splitColumnOutsideGutter(value: MeasurementValue | NothingEnum.NOTHING);
  /** The minimum space before a span or a split column */
  get spanColumnMinSpaceBefore(): number;
  set spanColumnMinSpaceBefore(value: MeasurementValue | NothingEnum.NOTHING);
  /** The minimum space after a span or a split column */
  get spanColumnMinSpaceAfter(): number;
  set spanColumnMinSpaceAfter(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, the rule below will overprint. */
  get ruleBelowOverprint(): boolean;
  set ruleBelowOverprint(value: boolean | NothingEnum.NOTHING);
  /** If true, the gap color of the rule below will overprint. */
  get ruleBelowGapOverprint(): boolean;
  set ruleBelowGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid. */
  get dropcapDetail(): number;
  set dropcapDetail(value: number | NothingEnum.NOTHING);
  /** If true, allows the last word in a text column to be hyphenated. */
  get hyphenateAcrossColumns(): boolean;
  set hyphenateAcrossColumns(value: boolean | NothingEnum.NOTHING);
  /** If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true. */
  get keepRuleAboveInFrame(): boolean;
  set keepRuleAboveInFrame(value: boolean | NothingEnum.NOTHING);
  /** If true, ignores optical edge alignment for the paragraph. */
  get ignoreEdgeAlignment(): boolean;
  set ignoreEdgeAlignment(value: boolean | NothingEnum.NOTHING);
  /** Whether the paragraph reads left-to-right or right-to-left. */
  get paragraphDirection(): ParagraphDirectionOptions;
  set paragraphDirection(value: ParagraphDirectionOptions | NothingEnum.NOTHING);
  /** The justification method for Arabic-script text — the default, or one of the Naskh/Kashida variants. See {@link ParagraphJustificationOptions}. */
  get paragraphJustification(): ParagraphJustificationOptions;
  set paragraphJustification(value: ParagraphJustificationOptions | NothingEnum.NOTHING);
  /**
   * The paragraph's tab stops, as an array of property-name/value pair arrays.
   *
   * Assigning replaces the whole list; there is no way to add a single stop
   * through this property. The individual {@link TabStop} objects are reachable
   * through {@link tabStops}.
   */
  get tabList(): object[];
  set tabList(value: PropertiesSetter<TabStop>[] | NothingEnum.NOTHING);
  /** If true, aligns only the first line to the frame grid or baseline grid. If false, aligns all lines to the grid. */
  get gridAlignFirstLineOnly(): boolean;
  set gridAlignFirstLineOnly(value: boolean | NothingEnum.NOTHING);
  /** The alignment to the frame grid or baseline grid. */
  get gridAlignment(): GridAlignment;
  set gridAlignment(value: GridAlignment | NothingEnum.NOTHING);
  /** The manual gyoudori setting. */
  get gridGyoudori(): number;
  set gridGyoudori(value: number | NothingEnum.NOTHING);
  /** The number of half-width characters at or below which the characters automatically run horizontally in vertical text. */
  get autoTcy(): number;
  set autoTcy(value: number | NothingEnum.NOTHING);
  /** If true, auto tcy includes Roman characters. */
  get autoTcyIncludeRoman(): boolean;
  set autoTcyIncludeRoman(value: boolean | NothingEnum.NOTHING);
  /** The kinsoku set that determines legitimate line breaks. */
  kinsokuSet: KinsokuTable | KinsokuSet | string;
  /** The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined. */
  get kinsokuType(): KinsokuType;
  set kinsokuType(value: KinsokuType | NothingEnum.NOTHING);
  /** The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect. */
  get kinsokuHangType(): KinsokuHangTypes;
  set kinsokuHangType(value: KinsokuHangTypes | NothingEnum.NOTHING);
  /** If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect. */
  get bunriKinshi(): boolean;
  set bunriKinshi(value: boolean | NothingEnum.NOTHING);
  /** The mojikumi table. For information, see mojikumi table defaults. */
  mojikumi: MojikumiTable | string | MojikumiTableDefaults;
  /** If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers. */
  get rensuuji(): boolean;
  set rensuuji(value: boolean | NothingEnum.NOTHING);
  /** If true, rotates Roman characters in vertical text. */
  get rotateSingleByteCharacters(): boolean;
  set rotateSingleByteCharacters(value: boolean | NothingEnum.NOTHING);
  /** The point from which leading is measured from line to line. */
  get leadingModel(): LeadingModel;
  set leadingModel(value: LeadingModel | NothingEnum.NOTHING);
  /** If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph. */
  get paragraphGyoudori(): boolean;
  set paragraphGyoudori(value: boolean | NothingEnum.NOTHING);
  /** If true, ideographic spaces will not wrap to the next line like text characters. */
  get treatIdeographicSpaceAsSpace(): boolean;
  set treatIdeographicSpaceAsSpace(value: boolean | NothingEnum.NOTHING);
  /** If true, words unassociated with a hyphenation dictionary can break to the next line on any character. */
  get allowArbitraryHyphenation(): boolean;
  set allowArbitraryHyphenation(value: boolean | NothingEnum.NOTHING);
  /** List type for bullets and numbering. */
  get bulletsAndNumberingListType(): ListType;
  set bulletsAndNumberingListType(value: ListType | NothingEnum.NOTHING);
  /** The character style to be used for the text after string. */
  get bulletsCharacterStyle(): CharacterStyle;
  set bulletsCharacterStyle(value: CharacterStyle | string | NothingEnum.NOTHING);
  /** The character style to be used for the number string. */
  get numberingCharacterStyle(): CharacterStyle;
  set numberingCharacterStyle(value: CharacterStyle | string | NothingEnum.NOTHING);
  /** The number string expression for numbering. */
  get numberingExpression(): string;
  set numberingExpression(value: string | NothingEnum.NOTHING);
  /** The text after string expression for bullets. */
  get bulletsTextAfter(): string;
  set bulletsTextAfter(value: string | NothingEnum.NOTHING);
  /** The list to be part of. */
  get appliedNumberingList(): NumberingList;
  set appliedNumberingList(value: NumberingList | string | NothingEnum.NOTHING);
  /** The level of the paragraph. */
  get numberingLevel(): number;
  set numberingLevel(value: number | NothingEnum.NOTHING);
  /**
   * The numeral or letter style for the number string.
   *
   * Accepts a {@link NumberingStyle} member, or the format template string InDesign stores
   * for it — `I, II, III, IV...`, `$ID/(kanji) 1,2,3,4...`. The templates are tabulated on
   * {@link NumberingStyle}.
   */
  get numberingFormat(): NumberingStyle | string;
  set numberingFormat(value: NumberingStyle | string | NothingEnum.NOTHING);
  /** Continue the numbering at this level. */
  get numberingContinue(): boolean;
  set numberingContinue(value: boolean | NothingEnum.NOTHING);
  /** Determines starting number in a numbered list. */
  get numberingStartAt(): number;
  set numberingStartAt(value: number | NothingEnum.NOTHING);
  /** If true, apply the numbering restart policy. */
  get numberingApplyRestartPolicy(): boolean;
  set numberingApplyRestartPolicy(value: boolean | NothingEnum.NOTHING);
  /** The alignment of the bullet character. */
  get bulletsAlignment(): ListAlignment;
  set bulletsAlignment(value: ListAlignment | NothingEnum.NOTHING);
  /** The alignment of the number. */
  get numberingAlignment(): ListAlignment;
  set numberingAlignment(value: ListAlignment | NothingEnum.NOTHING);
  /**
   * The applied font. Accepts a {@link Font} object or a font-family name as a
   * `string`; pair with {@link fontStyle} to pick a specific style.
   */
  get appliedFont(): Font | never;
  set appliedFont(value: Font | string | NothingEnum.NOTHING);
  /** The name of the font style. */
  get fontStyle(): string | never;
  set fontStyle(value: string | NothingEnum.NOTHING);
  /** The type size. */
  get pointSize(): number | never;
  set pointSize(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * The leading. A number is explicit leading; the {@link Leading} enumerator
   * `AUTO` selects automatic leading.
   */
  get leading(): number | Leading | never;
  set leading(value: MeasurementValue | Leading | NothingEnum.NOTHING);
  /** The type of pair kerning. */
  get kerningMethod(): KerningMethodName | never;
  set kerningMethod(value: KerningMethodName | NothingEnum.NOTHING);
  /** Tracking, in thousandths of an em, applied between characters. */
  get tracking(): number | never;
  set tracking(value: number | NothingEnum.NOTHING);
  /** Whether the text renders normally, as small caps, as all caps, or using the font's OpenType small-caps forms. See {@link Capitalization}. */
  get capitalization(): Capitalization | never;
  set capitalization(value: Capitalization | NothingEnum.NOTHING);
  /** The text position relative to the baseline. */
  get position(): Position | never;
  set position(value: Position | NothingEnum.NOTHING);
  /** If true, underlines the text. */
  get underline(): boolean | never;
  set underline(value: boolean | NothingEnum.NOTHING);
  /** If true, draws a strikethrough line through the text. */
  get strikeThru(): boolean | never;
  set strikeThru(value: boolean | NothingEnum.NOTHING);
  /** If `true`, substitutes ligature glyphs (e.g. `fi`, `fl`) where available. */
  get ligatures(): boolean | never;
  set ligatures(value: boolean | NothingEnum.NOTHING);
  /** If true, keeps the text on the same line. */
  get noBreak(): boolean | never;
  set noBreak(value: boolean | NothingEnum.NOTHING);
  /** The baseline shift applied to the text. */
  get baselineShift(): number | never;
  set baselineShift(value: MeasurementValue | NothingEnum.NOTHING);
  /** The figure style in OpenType fonts. */
  get otfFigureStyle(): OTFFigureStyle | never;
  set otfFigureStyle(value: OTFFigureStyle | NothingEnum.NOTHING);
  /** If true, uses ordinals in OpenType fonts. */
  get otfOrdinal(): boolean | never;
  set otfOrdinal(value: boolean | NothingEnum.NOTHING);
  /** If true, uses fractions in OpenType fonts. */
  get otfFraction(): boolean | never;
  set otfFraction(value: boolean | NothingEnum.NOTHING);
  /** If true, uses discretionary ligatures in OpenType fonts. */
  get otfDiscretionaryLigature(): boolean | never;
  set otfDiscretionaryLigature(value: boolean | NothingEnum.NOTHING);
  /** If true, uses titling forms in OpenType fonts. */
  get otfTitling(): boolean | never;
  set otfTitling(value: boolean | NothingEnum.NOTHING);
  /** If true, uses contextual alternate forms in OpenType fonts. */
  get otfContextualAlternate(): boolean | never;
  set otfContextualAlternate(value: boolean | NothingEnum.NOTHING);
  /** If true, uses swash forms in OpenType fonts. */
  get otfSwash(): boolean | never;
  set otfSwash(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. */
  get underlineColor(): Swatch | never;
  set underlineColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. */
  get underlineGapColor(): Swatch | never;
  set underlineGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The underline stroke tint (as a percentage). (Range: 0 to 100). */
  get underlineTint(): number | never;
  set underlineTint(value: number | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. */
  get underlineGapTint(): number | never;
  set underlineGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the underline stroke color will overprint. */
  get underlineOverprint(): boolean | never;
  set underlineOverprint(value: boolean | NothingEnum.NOTHING);
  /** If true, the gap color of the underline stroke will overprint. */
  get underlineGapOverprint(): boolean | never;
  set underlineGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke type of the underline stroke. */
  get underlineType(): StrokeStyle | never;
  set underlineType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The amount by which to offset the underline from the text baseline. */
  get underlineOffset(): number | never;
  set underlineOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke weight of the underline stroke. */
  get underlineWeight(): number | never;
  set underlineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. */
  get strikeThroughColor(): Swatch | never;
  set strikeThroughColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. */
  get strikeThroughGapColor(): Swatch | never;
  set strikeThroughGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). */
  get strikeThroughTint(): number | never;
  set strikeThroughTint(value: number | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. */
  get strikeThroughGapTint(): number | never;
  set strikeThroughGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the strikethrough stroke will overprint. */
  get strikeThroughOverprint(): boolean | never;
  set strikeThroughOverprint(value: boolean | NothingEnum.NOTHING);
  /** If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. */
  get strikeThroughGapOverprint(): boolean | never;
  set strikeThroughGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke type of the strikethrough stroke. */
  get strikeThroughType(): StrokeStyle | never;
  set strikeThroughType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The amount by which to offset the strikethrough stroke from the text baseline. */
  get strikeThroughOffset(): number | never;
  set strikeThroughOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke weight of the strikethrough stroke. */
  get strikeThroughWeight(): number | never;
  set strikeThroughWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * The applied language / spelling dictionary. Accepts a
   * {@link LanguageWithVendors} or {@link Language} object, or its name.
   */
  get appliedLanguage(): LanguageWithVendors | Language | never;
  set appliedLanguage(value: LanguageWithVendors | Language | string | NothingEnum.NOTHING);
  /** Value of Design Axes. */
  get designAxes(): number[] | never;
  set designAxes(value: number[] | NothingEnum.NOTHING);
  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): boolean | never;
  set otfSlashedZero(value: boolean | NothingEnum.NOTHING);
  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): boolean | never;
  set otfHistorical(value: boolean | NothingEnum.NOTHING);
  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): number | never;
  set otfStylisticSets(value: number | NothingEnum.NOTHING);
  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): boolean | never;
  set otfMark(value: boolean | NothingEnum.NOTHING);
  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): boolean | never;
  set otfLocale(value: boolean | NothingEnum.NOTHING);
  /** Which contextual glyph form — initial, medial, final, or isolated — to use for connected scripts, or `CALCULATE` to derive it automatically. See {@link PositionalForms}. */
  get positionalForm(): PositionalForms | never;
  set positionalForm(value: PositionalForms | NothingEnum.NOTHING);
  /** If true, use overlapping swash forms in OpenType fonts. */
  get otfOverlapSwash(): boolean | never;
  set otfOverlapSwash(value: boolean | NothingEnum.NOTHING);
  /** If true, use stylistic alternate forms in OpenType fonts. */
  get otfStylisticAlternate(): boolean | never;
  set otfStylisticAlternate(value: boolean | NothingEnum.NOTHING);
  /** If true, use alternate justification forms in OpenType fonts. */
  get otfJustificationAlternate(): boolean | never;
  set otfJustificationAlternate(value: boolean | NothingEnum.NOTHING);
  /** If true, use stretched alternate forms in OpenType fonts. */
  get otfStretchedAlternate(): boolean | never;
  set otfStretchedAlternate(value: boolean | NothingEnum.NOTHING);
  /** The direction of the character. */
  get characterDirection(): CharacterDirectionOptions | never;
  set characterDirection(value: CharacterDirectionOptions | NothingEnum.NOTHING);
  /** The keyboard direction of the character. */
  get keyboardDirection(): CharacterDirectionOptions | never;
  set keyboardDirection(value: CharacterDirectionOptions | NothingEnum.NOTHING);
  /** Which digit glyphs — Arabic numerals, Hindi, Farsi, or another script's digits — render numbers in the text. See {@link DigitsTypeOptions}. */
  get digitsType(): DigitsTypeOptions | never;
  set digitsType(value: DigitsTypeOptions | NothingEnum.NOTHING);
  /** Use of Kashidas for justification. */
  get kashidas(): KashidasOptions | never;
  set kashidas(value: KashidasOptions | NothingEnum.NOTHING);
  /** Position of diacritical characters. */
  get diacriticPosition(): DiacriticPositionOptions | never;
  set diacriticPosition(value: DiacriticPositionOptions | NothingEnum.NOTHING);
  /** The x (horizontal) offset for diacritic adjustment. */
  get xOffsetDiacritic(): number | never;
  set xOffsetDiacritic(value: number | NothingEnum.NOTHING);
  /** The y (vertical) offset for diacritic adjustment. */
  get yOffsetDiacritic(): number | never;
  set yOffsetDiacritic(value: number | NothingEnum.NOTHING);
  /** The alignment of small characters to the largest character in the line. */
  get characterAlignment(): CharacterAlignment | never;
  set characterAlignment(value: CharacterAlignment | NothingEnum.NOTHING);
  /** The amount of horizontal character compression. */
  get tsume(): number | NothingEnum.NOTHING;
  set tsume(value: number | NothingEnum.NOTHING);
  /** The amount of space before each character. */
  get leadingAki(): number | never;
  set leadingAki(value: number | NothingEnum.NOTHING);
  /** The amount of space after each character. */
  get trailingAki(): number | never;
  set trailingAki(value: number | NothingEnum.NOTHING);
  /** The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. */
  get characterRotation(): number | never;
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
  get otfProportionalMetrics(): boolean | never;
  set otfProportionalMetrics(value: boolean | NothingEnum.NOTHING);
  /** If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. */
  get otfHVKana(): boolean | NothingEnum.NOTHING;
  set otfHVKana(value: boolean | NothingEnum.NOTHING);
  /** If true, applies italics to half-width alphanumerics. */
  get otfRomanItalics(): boolean | never;
  set otfRomanItalics(value: boolean | NothingEnum.NOTHING);
  /** If true, the line changes size when characters are scaled. */
  get scaleAffectsLineHeight(): boolean | never;
  set scaleAffectsLineHeight(value: boolean | NothingEnum.NOTHING);
  /** If true, uses grid tracking to track non-Roman characters in CJK grids. */
  get cjkGridTracking(): boolean | NothingEnum.NOTHING;
  set cjkGridTracking(value: boolean | NothingEnum.NOTHING);
  /** The glyph variant to substitute for standard glyphs. */
  get glyphForm(): AlternateGlyphForms | never;
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
  readonly constructorName: 'ParagraphStyle';
  /** Resolves the proxy into the individual {@link ParagraphStyle} objects it stands for. */
  getElements(): ParagraphStyle[];
  /** The unique ID of the paragraph style, stable across saves and reopens. */
  readonly id: number;
  /** The name of the paragraph style. */
  get name(): string;
  set name(value: string);
  /** If `true`, the style was imported from another document. */
  readonly imported: boolean;
  /** The style this style is based on. Accepts a {@link ParagraphStyle} or its name. */
  get basedOn(): ParagraphStyle | string;
  set basedOn(value: ParagraphStyle | string);
  /** The style automatically applied to a new paragraph typed after one tagged with this style. */
  get nextStyle(): ParagraphStyle;
  set nextStyle(value: ParagraphStyle);
  /** A collection of style export tag maps, mapping the style to markup tags for each export format. */
  readonly styleExportTagMaps: StyleExportTagMaps;
  /** If `true`, generates a separate document when exporting to EPUB. */
  get splitDocument(): boolean;
  set splitDocument(value: boolean);
  /** If `true`, emits CSS for this style when exporting to EPUB or HTML. */
  get emitCss(): boolean;
  set emitCss(value: boolean);
  /**
   * A unique identifier that can be assigned to the style to differentiate it
   * from others. Internal use only.
   */
  get styleUniqueId(): string;
  set styleUniqueId(value: string);
  /** If `true`, generates a CSS class attribute for the style on export. */
  get includeClass(): boolean;
  set includeClass(value: boolean);
  /** The ARIA role to emit for text in this style, as recommended by the IDPF, when exporting to EPUB. */
  get epubAriaRole(): string;
  set epubAriaRole(value: string);
  /**
   * The color used to preview the style in the Paragraph Styles panel, as
   * `[R, G, B]` (each 0-255) or a {@link UIColors} enumerator.
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
  /** Converts any bullets or numbering applied through this style into literal text. */
  convertBulletsAndNumberingToText(): void;
  /**
   * Deletes the style.
   * @param replacingWith The style applied to any paragraphs currently tagged with this style. Paragraphs are left unstyled if omitted.
   */
  remove(replacingWith?: ParagraphStyle | string): void;
  /**
   * @internal Forcefully deletes the style, bypassing the usual safety checks. Internal use only.
   * @param replacingWith The style applied to any paragraphs currently tagged with this style.
   */
  forceDelete(replacingWith?: ParagraphStyle): void;
  /** Duplicates the paragraph style. */
  duplicate(): ParagraphStyle;
  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): ParagraphStyle;
}


/**
 * The broadcast proxy for {@link ParagraphStyle} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link ParagraphStyle} there.
 */
export interface ParagraphStylePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Document | Application | ParagraphStyleGroup)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<ParagraphStylePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ParagraphStylePlural, 'plural'>);
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
  set paragraphShadingLeftOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to offset the right edge of the paragraph. */
  get paragraphShadingRightOffset(): (number)[];
  set paragraphShadingRightOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to offset the top edge of the paragraph. */
  get paragraphShadingTopOffset(): (number)[];
  set paragraphShadingTopOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to offset the bottom edge of the paragraph. */
  get paragraphShadingBottomOffset(): (number)[];
  set paragraphShadingBottomOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The basis (text width or column width) used to calculate the width of the paragraph shading. */
  get paragraphShadingWidth(): (ParagraphShadingWidthEnum)[];
  set paragraphShadingWidth(value: ParagraphShadingWidthEnum | NothingEnum.NOTHING);
  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph shading. */
  get paragraphShadingTopOrigin(): (ParagraphShadingTopOriginEnum)[];
  set paragraphShadingTopOrigin(value: ParagraphShadingTopOriginEnum | NothingEnum.NOTHING);
  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph shading. */
  get paragraphShadingBottomOrigin(): (ParagraphShadingBottomOriginEnum)[];
  set paragraphShadingBottomOrigin(value: ParagraphShadingBottomOriginEnum | NothingEnum.NOTHING);
  /** If true, forces the shading of the paragraph to be clipped with respect to frame shape. */
  get paragraphShadingClipToFrame(): (boolean)[];
  set paragraphShadingClipToFrame(value: boolean | NothingEnum.NOTHING);
  /** If true, suppress printing of the shading of the paragraph. */
  get paragraphShadingSuppressPrinting(): (boolean)[];
  set paragraphShadingSuppressPrinting(value: boolean | NothingEnum.NOTHING);
  /** If true, the paragraph shading is On. */
  get paragraphShadingOn(): (boolean)[];
  set paragraphShadingOn(value: boolean | NothingEnum.NOTHING);
  /** If true, the paragraph shading will overprint. */
  get paragraphShadingOverprint(): (boolean)[];
  set paragraphShadingOverprint(value: boolean | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the paragraph shading. (Range: 0 to 100) */
  get paragraphShadingTint(): (number)[];
  set paragraphShadingTint(value: number | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph shading. */
  get paragraphShadingColor(): (Swatch)[];
  set paragraphShadingColor(value: Swatch | string | NothingEnum.NOTHING);
  /** If true, the paragraph border is on. */
  get paragraphBorderOn(): (boolean)[];
  set paragraphBorderOn(value: boolean | NothingEnum.NOTHING);
  /** If true, the paragraph border will overprint. */
  get paragraphBorderOverprint(): (boolean)[];
  set paragraphBorderOverprint(value: boolean | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the paragraph stroke. (Range: 0 to 100) */
  get paragraphBorderTint(): (number)[];
  set paragraphBorderTint(value: number | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph stroke. */
  get paragraphBorderColor(): (Swatch)[];
  set paragraphBorderColor(value: Swatch | string | NothingEnum.NOTHING);
  /** If true, the paragraph border gap will overprint. Note: Valid only when border type is not solid. */
  get paragraphBorderGapOverprint(): (boolean)[];
  set paragraphBorderGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the paragraph border gap. Note: Valid only when the border type is not solid. (Range: 0 to 100) */
  get paragraphBorderGapTint(): (number)[];
  set paragraphBorderGapTint(value: number | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph border gap. Note: Valid only when the border type is not solid. */
  get paragraphBorderGapColor(): (Swatch)[];
  set paragraphBorderGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The type of the border for the paragraph. */
  get paragraphBorderType(): (StrokeStyle)[];
  set paragraphBorderType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The left line weight of the border of paragraph. */
  get paragraphBorderLeftLineWeight(): (number)[];
  set paragraphBorderLeftLineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The top line weight of the border of paragraph. */
  get paragraphBorderTopLineWeight(): (number)[];
  set paragraphBorderTopLineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The right line weight of the border of paragraph. */
  get paragraphBorderRightLineWeight(): (number)[];
  set paragraphBorderRightLineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The bottom line weight of the border of paragraph. */
  get paragraphBorderBottomLineWeight(): (number)[];
  set paragraphBorderBottomLineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The end shape of an open path. */
  get paragraphBorderStrokeEndCap(): (EndCap)[];
  set paragraphBorderStrokeEndCap(value: EndCap | NothingEnum.NOTHING);
  /** The corner join applied to the ParagraphStyle. */
  get paragraphBorderStrokeEndJoin(): (EndJoin)[];
  set paragraphBorderStrokeEndJoin(value: EndJoin | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphShadingTopLeftCornerRadius(): (number)[];
  set paragraphShadingTopLeftCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * The corner shape applied to the top-left corner of a rectangular shading
   * area, and to all corners of a non-rectangular one.
   *
   * A {@link CornerOptions} radius is set explicitly, unlike the rounded or
   * beveled effect of a stroke's end join, which follows the stroke weight.
   */
  get paragraphShadingTopLeftCornerOption(): (CornerOptions)[];
  set paragraphShadingTopLeftCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerRadius(): (number)[];
  set paragraphShadingTopRightCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphShadingTopRightCornerOption(): (CornerOptions)[];
  set paragraphShadingTopRightCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphShadingBottomLeftCornerRadius(): (number)[];
  set paragraphShadingBottomLeftCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphShadingBottomLeftCornerOption(): (CornerOptions)[];
  set paragraphShadingBottomLeftCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphShadingBottomRightCornerRadius(): (number)[];
  set paragraphShadingBottomRightCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphShadingBottomRightCornerOption(): (CornerOptions)[];
  set paragraphShadingBottomRightCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get paragraphBorderTopLeftCornerRadius(): (number)[];
  set paragraphBorderTopLeftCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * The corner shape applied to the top-left corner of a rectangular border,
   * and to all corners of a non-rectangular one.
   *
   * Unlike {@link paragraphBorderStrokeEndJoin}, a {@link CornerOptions}
   * radius is set explicitly rather than derived from the stroke weight.
   */
  get paragraphBorderTopLeftCornerOption(): (CornerOptions)[];
  set paragraphBorderTopLeftCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerRadius(): (number)[];
  set paragraphBorderTopRightCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /** The shape to apply to the top right corner of rectangular shapes */
  get paragraphBorderTopRightCornerOption(): (CornerOptions)[];
  set paragraphBorderTopRightCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get paragraphBorderBottomLeftCornerRadius(): (number)[];
  set paragraphBorderBottomLeftCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get paragraphBorderBottomLeftCornerOption(): (CornerOptions)[];
  set paragraphBorderBottomLeftCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get paragraphBorderBottomRightCornerRadius(): (number)[];
  set paragraphBorderBottomRightCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get paragraphBorderBottomRightCornerOption(): (CornerOptions)[];
  set paragraphBorderBottomRightCornerOption(value: CornerOptions | NothingEnum.NOTHING);
  /** The basis (text width or column width) used to calculate the width of the paragraph border. */
  get paragraphBorderWidth(): (ParagraphBorderEnum)[];
  set paragraphBorderWidth(value: ParagraphBorderEnum | NothingEnum.NOTHING);
  /** The basis (cap height, ascent or baseline) used to calculate the top origin of the paragraph border. */
  get paragraphBorderTopOrigin(): (ParagraphBorderTopOriginEnum)[];
  set paragraphBorderTopOrigin(value: ParagraphBorderTopOriginEnum | NothingEnum.NOTHING);
  /** The basis (descent or baseline) used to calculate the bottom origin of the paragraph border. */
  get paragraphBorderBottomOrigin(): (ParagraphBorderBottomOriginEnum)[];
  set paragraphBorderBottomOrigin(value: ParagraphBorderBottomOriginEnum | NothingEnum.NOTHING);
  /** The distance to offset the left edge of the paragraph border. */
  get paragraphBorderLeftOffset(): (number)[];
  set paragraphBorderLeftOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to offset the right edge of the paragraph border. */
  get paragraphBorderRightOffset(): (number)[];
  set paragraphBorderRightOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to offset the top edge of the paragraph border. */
  get paragraphBorderTopOffset(): (number)[];
  set paragraphBorderTopOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to offset the bottom edge of the paragraph border. */
  get paragraphBorderBottomOffset(): (number)[];
  set paragraphBorderBottomOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, then paragraph border is also displayed at the points where the paragraph splits across frames or columns. */
  get paragraphBorderDisplayIfSplits(): (boolean)[];
  set paragraphBorderDisplayIfSplits(value: boolean | NothingEnum.NOTHING);
  /** The hyphenation style chosen for the provider. */
  get providerHyphenationStyle(): (HyphenationStyleEnum)[];
  set providerHyphenationStyle(value: HyphenationStyleEnum | NothingEnum.NOTHING);
  /** If true, consecutive para borders with completely similar properties are merged. */
  get mergeConsecutiveParaBorders(): (boolean)[];
  set mergeConsecutiveParaBorders(value: boolean | NothingEnum.NOTHING);
  /** The space between paragraphs using same style. */
  get sameParaStyleSpacing(): (number | Spacing)[];
  set sameParaStyleSpacing(value: MeasurementValue | Spacing | NothingEnum.NOTHING);
  /** Paragraph kashida width. 0 is none, 1 is short, 2 is medium, 3 is long */
  get paragraphKashidaWidth(): (number)[];
  set paragraphKashidaWidth(value: number | NothingEnum.NOTHING);
  /** If true, aligns the baseline of the text to the baseline grid. */
  get alignToBaseline(): (boolean)[];
  set alignToBaseline(value: boolean | NothingEnum.NOTHING);
  /** First-line indent, relative to {@link leftIndent}. Negative values hang. */
  get firstLineIndent(): (number)[];
  set firstLineIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The width of the left indent. */
  get leftIndent(): (number)[];
  set leftIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The width of the right indent. */
  get rightIndent(): (number)[];
  set rightIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The height of the paragraph space above. */
  get spaceBefore(): (number)[];
  set spaceBefore(value: MeasurementValue | NothingEnum.NOTHING);
  /** The height of the paragraph space below. */
  get spaceAfter(): (number)[];
  set spaceAfter(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * Balances ragged lines. `true` uses the default style; a
   * {@link BalanceLinesStyle} value selects a specific style. Ignored by the
   * single-line composer.
   */
  get balanceRaggedLines(): (boolean | BalanceLinesStyle)[];
  set balanceRaggedLines(value: boolean | BalanceLinesStyle | NothingEnum.NOTHING);
  /** Horizontal alignment of the paragraph's lines. */
  get justification(): (Justification)[];
  set justification(value: Justification | NothingEnum.NOTHING);
  /** The alignment to use for lines that contain a single word. */
  get singleWordJustification(): (SingleWordJustification)[];
  set singleWordJustification(value: SingleWordJustification | NothingEnum.NOTHING);
  /** The percent of the type size to use for auto leading. (Range: 0 to 500). */
  get autoLeading(): (number)[];
  set autoLeading(value: number | NothingEnum.NOTHING);
  /** The number of lines to drop cap. */
  get dropCapLines(): (number)[];
  set dropCapLines(value: number | NothingEnum.NOTHING);
  /** The number of characters to drop cap. */
  get dropCapCharacters(): (number)[];
  set dropCapCharacters(value: number | NothingEnum.NOTHING);
  /** If true, keeps a specified number of lines together when the paragraph breaks across columns or text frames. */
  get keepLinesTogether(): (boolean)[];
  set keepLinesTogether(value: boolean | NothingEnum.NOTHING);
  /** If true, keeps all lines of the paragraph together. If false, allows paragraphs to break across pages or columns. */
  get keepAllLinesTogether(): (boolean)[];
  set keepAllLinesTogether(value: boolean | NothingEnum.NOTHING);
  /** The minimum number of lines to keep with the next paragraph. */
  get keepWithNext(): (number)[];
  set keepWithNext(value: number | NothingEnum.NOTHING);
  /** The minimum number of lines to keep together in a paragraph before allowing a page break. */
  get keepFirstLines(): (number)[];
  set keepFirstLines(value: number | NothingEnum.NOTHING);
  /** The minimum number of lines to keep together in a paragraph after a page break. */
  get keepLastLines(): (number)[];
  set keepLastLines(value: number | NothingEnum.NOTHING);
  /** The location at which to start the paragraph. */
  get startParagraph(): (StartParagraph)[];
  set startParagraph(value: StartParagraph | NothingEnum.NOTHING);
  /** The text composer to use to compose the text. */
  get composer(): (ComposerName)[];
  set composer(value: ComposerName | NothingEnum.NOTHING);
  /** The minimum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get minimumWordSpacing(): (number)[];
  set minimumWordSpacing(value: number | NothingEnum.NOTHING);
  /** The maximum word spacing, specified as a percentage of the font word space value. Note: Valid only when text is justified. (Range: 0 to 1000) */
  get maximumWordSpacing(): (number)[];
  set maximumWordSpacing(value: number | NothingEnum.NOTHING);
  /** The desired word spacing, specified as a percentage of the font word space value. (Range: 0 to 1000) */
  get desiredWordSpacing(): (number)[];
  set desiredWordSpacing(value: number | NothingEnum.NOTHING);
  /** The minimum letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get minimumLetterSpacing(): (number)[];
  set minimumLetterSpacing(value: number | NothingEnum.NOTHING);
  /** The maximum letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) Note: Valid only when text is justified. */
  get maximumLetterSpacing(): (number)[];
  set maximumLetterSpacing(value: number | NothingEnum.NOTHING);
  /** The desired letter spacing, specified as a percentage of the built-in space between letters in the font. (Range: -100 to 500) */
  get desiredLetterSpacing(): (number)[];
  set desiredLetterSpacing(value: number | NothingEnum.NOTHING);
  /** The minimum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get minimumGlyphScaling(): (number)[];
  set minimumGlyphScaling(value: number | NothingEnum.NOTHING);
  /** The maximum width (as a percentage) of individual characters. (Range: 50 to 200) */
  get maximumGlyphScaling(): (number)[];
  set maximumGlyphScaling(value: number | NothingEnum.NOTHING);
  /** The desired width (as a percentage) of individual characters. (Range: 50 to 200) */
  get desiredGlyphScaling(): (number)[];
  set desiredGlyphScaling(value: number | NothingEnum.NOTHING);
  /** If true, places a rule above the paragraph. */
  get ruleAbove(): (boolean)[];
  set ruleAbove(value: boolean | NothingEnum.NOTHING);
  /** If true, the paragraph rule above will overprint. */
  get ruleAboveOverprint(): (boolean)[];
  set ruleAboveOverprint(value: boolean | NothingEnum.NOTHING);
  /** The line weight of the rule above. */
  get ruleAboveLineWeight(): (number)[];
  set ruleAboveLineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the paragraph rule above. (Range: 0 to 100) */
  get ruleAboveTint(): (number)[];
  set ruleAboveTint(value: number | NothingEnum.NOTHING);
  /** The amount to offset the paragraph rule above from the baseline of the first line the paragraph. */
  get ruleAboveOffset(): (number)[];
  set ruleAboveOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to indent the left edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveLeftIndent(): (number)[];
  set ruleAboveLeftIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to indent the right edge of the paragraph rule above (based on either the text width or the column width of the first line in the paragraph. */
  get ruleAboveRightIndent(): (number)[];
  set ruleAboveRightIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The basis (text width or column width) used to calculate the width of the paragraph rule above. */
  get ruleAboveWidth(): (RuleWidth)[];
  set ruleAboveWidth(value: RuleWidth | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule above. */
  get ruleAboveColor(): (Swatch)[];
  set ruleAboveColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule above. Note: Valid only when the paragraph rule above type is not solid. */
  get ruleAboveGapColor(): (Swatch)[];
  set ruleAboveGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the stroke gap color of the paragraph rule. (Range: 0 to 100) Note: Valid only when the rule above type is not solid. */
  get ruleAboveGapTint(): (number)[];
  set ruleAboveGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the stroke gap of the paragraph rule above will overprint. Note: Valid only the rule above type is not solid. */
  get ruleAboveGapOverprint(): (boolean)[];
  set ruleAboveGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke type of the rule above the paragraph. */
  get ruleAboveType(): (StrokeStyle)[];
  set ruleAboveType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** If true, applies a paragraph rule below. */
  get ruleBelow(): (boolean)[];
  set ruleBelow(value: boolean | NothingEnum.NOTHING);
  /** The line weight of the rule below. */
  get ruleBelowLineWeight(): (number)[];
  set ruleBelowLineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the paragraph rule below. (Range: 0 to 100) */
  get ruleBelowTint(): (number)[];
  set ruleBelowTint(value: number | NothingEnum.NOTHING);
  /** The amount to offset the the paragraph rule below from the baseline of the last line of the paragraph. */
  get ruleBelowOffset(): (number)[];
  set ruleBelowOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to indent the left edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowLeftIndent(): (number)[];
  set ruleBelowLeftIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The distance to indent the right edge of the paragraph rule below (based on either the text width or the column width of the last line in the paragraph. */
  get ruleBelowRightIndent(): (number)[];
  set ruleBelowRightIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** The basis (text width or column width) used to calculate the width of the paragraph rule below. */
  get ruleBelowWidth(): (RuleWidth)[];
  set ruleBelowWidth(value: RuleWidth | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the paragraph rule below. */
  get ruleBelowColor(): (Swatch)[];
  set ruleBelowColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke gap of the paragraph rule below. Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapColor(): (Swatch)[];
  set ruleBelowGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the stroke gap color of the paragraph rule below. (Range: 0 to 100) Note: Valid only when the paragraph rule below type is not solid. */
  get ruleBelowGapTint(): (number)[];
  set ruleBelowGapTint(value: number | NothingEnum.NOTHING);
  /** The stroke type of the rule below the paragraph. */
  get ruleBelowType(): (StrokeStyle)[];
  set ruleBelowType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** If true, allows hyphenation of capitalized words. */
  get hyphenateCapitalizedWords(): (boolean)[];
  set hyphenateCapitalizedWords(value: boolean | NothingEnum.NOTHING);
  /** If true, allows hyphenation. */
  get hyphenation(): (boolean)[];
  set hyphenation(value: boolean | NothingEnum.NOTHING);
  /** The minimum number of letters at the end of a word that can be broken by a hyphen. */
  get hyphenateBeforeLast(): (number)[];
  set hyphenateBeforeLast(value: number | NothingEnum.NOTHING);
  /** The minimum number of letters at the beginning of a word that can be broken by a hyphen. */
  get hyphenateAfterFirst(): (number)[];
  set hyphenateAfterFirst(value: number | NothingEnum.NOTHING);
  /** The minimum number of letters a word must have in order to qualify for hyphenation. */
  get hyphenateWordsLongerThan(): (number)[];
  set hyphenateWordsLongerThan(value: number | NothingEnum.NOTHING);
  /** The maximum number of hyphens that can appear on consecutive lines. To specify unlimited consecutive lines, use zero. */
  get hyphenateLadderLimit(): (number)[];
  set hyphenateLadderLimit(value: number | NothingEnum.NOTHING);
  /** The amount of white space allowed at the end of a line of non-justified text before hyphenation begins. Note: Valid when composer is single-line composer. */
  get hyphenationZone(): (number)[];
  set hyphenationZone(value: MeasurementValue | NothingEnum.NOTHING);
  /** The relative desirability of better spacing vs. fewer hyphens. A lower value results in greater use of hyphens. (Range: 0 to 100) */
  get hyphenWeight(): (number)[];
  set hyphenWeight(value: number | NothingEnum.NOTHING);
  /** The character style to apply to the drop cap. */
  get dropCapStyle(): (CharacterStyle)[];
  set dropCapStyle(value: CharacterStyle | string | NothingEnum.NOTHING);
  /** The amount to indent the last line in the paragraph. */
  get lastLineIndent(): (number)[];
  set lastLineIndent(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, allows hyphenation in the last word in a paragraph. Note: Valid only when hyphenation is true. */
  get hyphenateLastWord(): (boolean)[];
  set hyphenateLastWord(value: boolean | NothingEnum.NOTHING);
  /** If the first line in the paragraph should be kept with the last line of previous paragraph. */
  get keepWithPrevious(): (boolean)[];
  set keepWithPrevious(value: boolean | NothingEnum.NOTHING);
  /** The number of columns a paragraph spans or the number of split columns. */
  get spanSplitColumnCount(): (number | SpanColumnCountOptions)[];
  set spanSplitColumnCount(value: number | SpanColumnCountOptions | NothingEnum.NOTHING);
  /** Whether a paragraph should be a single column, span columns or split columns */
  get spanColumnType(): (SpanColumnTypeOptions)[];
  set spanColumnType(value: SpanColumnTypeOptions | NothingEnum.NOTHING);
  /** The inside gutter if the paragraph splits columns */
  get splitColumnInsideGutter(): (number)[];
  set splitColumnInsideGutter(value: MeasurementValue | NothingEnum.NOTHING);
  /** The outside gutter if the paragraph splits columns */
  get splitColumnOutsideGutter(): (number)[];
  set splitColumnOutsideGutter(value: MeasurementValue | NothingEnum.NOTHING);
  /** The minimum space before a span or a split column */
  get spanColumnMinSpaceBefore(): (number)[];
  set spanColumnMinSpaceBefore(value: MeasurementValue | NothingEnum.NOTHING);
  /** The minimum space after a span or a split column */
  get spanColumnMinSpaceAfter(): (number)[];
  set spanColumnMinSpaceAfter(value: MeasurementValue | NothingEnum.NOTHING);
  /** If true, the rule below will overprint. */
  get ruleBelowOverprint(): (boolean)[];
  set ruleBelowOverprint(value: boolean | NothingEnum.NOTHING);
  /** If true, the gap color of the rule below will overprint. */
  get ruleBelowGapOverprint(): (boolean)[];
  set ruleBelowGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** Details about the drop cap based on the glyph outlines. 1 = left side bearing. 2 = descenders. 0x100,0x200,0x400 are used for Japanese frame grid. */
  get dropcapDetail(): (number)[];
  set dropcapDetail(value: number | NothingEnum.NOTHING);
  /** If true, allows the last word in a text column to be hyphenated. */
  get hyphenateAcrossColumns(): (boolean)[];
  set hyphenateAcrossColumns(value: boolean | NothingEnum.NOTHING);
  /** If true, forces the rule above the paragraph to remain in the frame bounds. Note: Valid only when rule above is true. */
  get keepRuleAboveInFrame(): (boolean)[];
  set keepRuleAboveInFrame(value: boolean | NothingEnum.NOTHING);
  /** If true, ignores optical edge alignment for the paragraph. */
  get ignoreEdgeAlignment(): (boolean)[];
  set ignoreEdgeAlignment(value: boolean | NothingEnum.NOTHING);
  /** Whether the paragraph reads left-to-right or right-to-left. */
  get paragraphDirection(): (ParagraphDirectionOptions)[];
  set paragraphDirection(value: ParagraphDirectionOptions | NothingEnum.NOTHING);
  /** The justification method for Arabic-script text — the default, or one of the Naskh/Kashida variants. See {@link ParagraphJustificationOptions}. */
  get paragraphJustification(): (ParagraphJustificationOptions)[];
  set paragraphJustification(value: ParagraphJustificationOptions | NothingEnum.NOTHING);
  /**
   * The paragraph's tab stops, as an array of property-name/value pair arrays.
   *
   * Assigning replaces the whole list; there is no way to add a single stop
   * through this property. The individual {@link TabStop} objects are reachable
   * through {@link tabStops}.
   */
  get tabList(): (object[])[];
  set tabList(value: PropertiesSetter<TabStop>[] | NothingEnum.NOTHING);
  /** If true, aligns only the first line to the frame grid or baseline grid. If false, aligns all lines to the grid. */
  get gridAlignFirstLineOnly(): (boolean)[];
  set gridAlignFirstLineOnly(value: boolean | NothingEnum.NOTHING);
  /** The alignment to the frame grid or baseline grid. */
  get gridAlignment(): (GridAlignment)[];
  set gridAlignment(value: GridAlignment | NothingEnum.NOTHING);
  /** The manual gyoudori setting. */
  get gridGyoudori(): (number)[];
  set gridGyoudori(value: number | NothingEnum.NOTHING);
  /** The number of half-width characters at or below which the characters automatically run horizontally in vertical text. */
  get autoTcy(): (number)[];
  set autoTcy(value: number | NothingEnum.NOTHING);
  /** If true, auto tcy includes Roman characters. */
  get autoTcyIncludeRoman(): (boolean)[];
  set autoTcyIncludeRoman(value: boolean | NothingEnum.NOTHING);
  /** The kinsoku set that determines legitimate line breaks. */
  kinsokuSet: (KinsokuTable | KinsokuSet | string)[];
  /** The type of kinsoku processing for preventing kinsoku characters from beginning or ending a line. Note: Valid only when a kinsoku set is defined. */
  get kinsokuType(): (KinsokuType)[];
  set kinsokuType(value: KinsokuType | NothingEnum.NOTHING);
  /** The type of hanging punctuation to allow. Note: Valid only when a kinsoku set is in effect. */
  get kinsokuHangType(): (KinsokuHangTypes)[];
  set kinsokuHangType(value: KinsokuHangTypes | NothingEnum.NOTHING);
  /** If true, adds the double period (..), ellipse (...), and double hyphen (--) to the selected kinsoku set. Note: Valid only when a kinsoku set is in effect. */
  get bunriKinshi(): (boolean)[];
  set bunriKinshi(value: boolean | NothingEnum.NOTHING);
  /** The mojikumi table. For information, see mojikumi table defaults. */
  mojikumi: (MojikumiTable | string | MojikumiTableDefaults)[];
  /** If true, disallows line breaks in numbers. If false, lines can break between digits in multi-digit numbers. */
  get rensuuji(): (boolean)[];
  set rensuuji(value: boolean | NothingEnum.NOTHING);
  /** If true, rotates Roman characters in vertical text. */
  get rotateSingleByteCharacters(): (boolean)[];
  set rotateSingleByteCharacters(value: boolean | NothingEnum.NOTHING);
  /** The point from which leading is measured from line to line. */
  get leadingModel(): (LeadingModel)[];
  set leadingModel(value: LeadingModel | NothingEnum.NOTHING);
  /** If true, the gyoudori mode applies to the entire paragraph. If false, the gyoudori mode applies to each line in the paragraph. */
  get paragraphGyoudori(): (boolean)[];
  set paragraphGyoudori(value: boolean | NothingEnum.NOTHING);
  /** If true, ideographic spaces will not wrap to the next line like text characters. */
  get treatIdeographicSpaceAsSpace(): (boolean)[];
  set treatIdeographicSpaceAsSpace(value: boolean | NothingEnum.NOTHING);
  /** If true, words unassociated with a hyphenation dictionary can break to the next line on any character. */
  get allowArbitraryHyphenation(): (boolean)[];
  set allowArbitraryHyphenation(value: boolean | NothingEnum.NOTHING);
  /** List type for bullets and numbering. */
  get bulletsAndNumberingListType(): (ListType)[];
  set bulletsAndNumberingListType(value: ListType | NothingEnum.NOTHING);
  /** The character style to be used for the text after string. */
  get bulletsCharacterStyle(): (CharacterStyle)[];
  set bulletsCharacterStyle(value: CharacterStyle | string | NothingEnum.NOTHING);
  /** The character style to be used for the number string. */
  get numberingCharacterStyle(): (CharacterStyle)[];
  set numberingCharacterStyle(value: CharacterStyle | string | NothingEnum.NOTHING);
  /** The number string expression for numbering. */
  get numberingExpression(): (string)[];
  set numberingExpression(value: string | NothingEnum.NOTHING);
  /** The text after string expression for bullets. */
  get bulletsTextAfter(): (string)[];
  set bulletsTextAfter(value: string | NothingEnum.NOTHING);
  /** The list to be part of. */
  get appliedNumberingList(): (NumberingList)[];
  set appliedNumberingList(value: NumberingList | string | NothingEnum.NOTHING);
  /** The level of the paragraph. */
  get numberingLevel(): (number)[];
  set numberingLevel(value: number | NothingEnum.NOTHING);
  /**
   * The numeral or letter style for the number string.
   *
   * Accepts a {@link NumberingStyle} member, or the format template string InDesign stores
   * for it — `I, II, III, IV...`, `$ID/(kanji) 1,2,3,4...`. The templates are tabulated on
   * {@link NumberingStyle}.
   */
  get numberingFormat(): (NumberingStyle | string)[];
  set numberingFormat(value: NumberingStyle | string | NothingEnum.NOTHING);
  /** Continue the numbering at this level. */
  get numberingContinue(): (boolean)[];
  set numberingContinue(value: boolean | NothingEnum.NOTHING);
  /** Determines starting number in a numbered list. */
  get numberingStartAt(): (number)[];
  set numberingStartAt(value: number | NothingEnum.NOTHING);
  /** If true, apply the numbering restart policy. */
  get numberingApplyRestartPolicy(): (boolean)[];
  set numberingApplyRestartPolicy(value: boolean | NothingEnum.NOTHING);
  /** The alignment of the bullet character. */
  get bulletsAlignment(): (ListAlignment)[];
  set bulletsAlignment(value: ListAlignment | NothingEnum.NOTHING);
  /** The alignment of the number. */
  get numberingAlignment(): (ListAlignment)[];
  set numberingAlignment(value: ListAlignment | NothingEnum.NOTHING);
  /**
   * The applied font. Accepts a {@link Font} object or a font-family name as a
   * `string`; pair with {@link fontStyle} to pick a specific style.
   */
  get appliedFont(): (Font | never)[];
  set appliedFont(value: Font | string | NothingEnum.NOTHING);
  /** The name of the font style. */
  get fontStyle(): (string | never)[];
  set fontStyle(value: string | NothingEnum.NOTHING);
  /** The type size. */
  get pointSize(): (number | never)[];
  set pointSize(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * The leading. A number is explicit leading; the {@link Leading} enumerator
   * `AUTO` selects automatic leading.
   */
  get leading(): (number | Leading | never)[];
  set leading(value: MeasurementValue | Leading | NothingEnum.NOTHING);
  /** The type of pair kerning. */
  get kerningMethod(): (KerningMethodName | never)[];
  set kerningMethod(value: KerningMethodName | NothingEnum.NOTHING);
  /** Tracking, in thousandths of an em, applied between characters. */
  get tracking(): (number | never)[];
  set tracking(value: number | NothingEnum.NOTHING);
  /** Whether the text renders normally, as small caps, as all caps, or using the font's OpenType small-caps forms. See {@link Capitalization}. */
  get capitalization(): (Capitalization | never)[];
  set capitalization(value: Capitalization | NothingEnum.NOTHING);
  /** The text position relative to the baseline. */
  get position(): (Position | never)[];
  set position(value: Position | NothingEnum.NOTHING);
  /** If true, underlines the text. */
  get underline(): (boolean | never)[];
  set underline(value: boolean | NothingEnum.NOTHING);
  /** If true, draws a strikethrough line through the text. */
  get strikeThru(): (boolean | never)[];
  set strikeThru(value: boolean | NothingEnum.NOTHING);
  /** If `true`, substitutes ligature glyphs (e.g. `fi`, `fl`) where available. */
  get ligatures(): (boolean | never)[];
  set ligatures(value: boolean | NothingEnum.NOTHING);
  /** If true, keeps the text on the same line. */
  get noBreak(): (boolean | never)[];
  set noBreak(value: boolean | NothingEnum.NOTHING);
  /** The baseline shift applied to the text. */
  get baselineShift(): (number | never)[];
  set baselineShift(value: MeasurementValue | NothingEnum.NOTHING);
  /** The figure style in OpenType fonts. */
  get otfFigureStyle(): (OTFFigureStyle | never)[];
  set otfFigureStyle(value: OTFFigureStyle | NothingEnum.NOTHING);
  /** If true, uses ordinals in OpenType fonts. */
  get otfOrdinal(): (boolean | never)[];
  set otfOrdinal(value: boolean | NothingEnum.NOTHING);
  /** If true, uses fractions in OpenType fonts. */
  get otfFraction(): (boolean | never)[];
  set otfFraction(value: boolean | NothingEnum.NOTHING);
  /** If true, uses discretionary ligatures in OpenType fonts. */
  get otfDiscretionaryLigature(): (boolean | never)[];
  set otfDiscretionaryLigature(value: boolean | NothingEnum.NOTHING);
  /** If true, uses titling forms in OpenType fonts. */
  get otfTitling(): (boolean | never)[];
  set otfTitling(value: boolean | NothingEnum.NOTHING);
  /** If true, uses contextual alternate forms in OpenType fonts. */
  get otfContextualAlternate(): (boolean | never)[];
  set otfContextualAlternate(value: boolean | NothingEnum.NOTHING);
  /** If true, uses swash forms in OpenType fonts. */
  get otfSwash(): (boolean | never)[];
  set otfSwash(value: boolean | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the underline stroke. */
  get underlineColor(): (Swatch | never)[];
  set underlineColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the underline stroke. Note: Valid when underline type is not solid. */
  get underlineGapColor(): (Swatch | never)[];
  set underlineGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The underline stroke tint (as a percentage). (Range: 0 to 100). */
  get underlineTint(): (number | never)[];
  set underlineTint(value: number | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the gap color of the underline stroke. (Range: 0 to 100) Note: Valid when underline type is not solid. */
  get underlineGapTint(): (number | never)[];
  set underlineGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the underline stroke color will overprint. */
  get underlineOverprint(): (boolean | never)[];
  set underlineOverprint(value: boolean | NothingEnum.NOTHING);
  /** If true, the gap color of the underline stroke will overprint. */
  get underlineGapOverprint(): (boolean | never)[];
  set underlineGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke type of the underline stroke. */
  get underlineType(): (StrokeStyle | never)[];
  set underlineType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The amount by which to offset the underline from the text baseline. */
  get underlineOffset(): (number | never)[];
  set underlineOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke weight of the underline stroke. */
  get underlineWeight(): (number | never)[];
  set underlineWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the strikethrough stroke. */
  get strikeThroughColor(): (Swatch | never)[];
  set strikeThroughColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of the strikethrough stroke. */
  get strikeThroughGapColor(): (Swatch | never)[];
  set strikeThroughGapColor(value: Swatch | string | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the strikethrough stroke. (Range: 0 to 100). */
  get strikeThroughTint(): (number | never)[];
  set strikeThroughTint(value: number | NothingEnum.NOTHING);
  /** The tint (as a percentage) of the strikethrough stroke gap color. (Range: 0 to 100) Note: Valid when strike through type is not solid. */
  get strikeThroughGapTint(): (number | never)[];
  set strikeThroughGapTint(value: number | NothingEnum.NOTHING);
  /** If true, the strikethrough stroke will overprint. */
  get strikeThroughOverprint(): (boolean | never)[];
  set strikeThroughOverprint(value: boolean | NothingEnum.NOTHING);
  /** If true, the gap color of the strikethrough stroke will overprint. Note: Valid when strike through type is not solid. */
  get strikeThroughGapOverprint(): (boolean | never)[];
  set strikeThroughGapOverprint(value: boolean | NothingEnum.NOTHING);
  /** The stroke type of the strikethrough stroke. */
  get strikeThroughType(): (StrokeStyle | never)[];
  set strikeThroughType(value: StrokeStyle | string | NothingEnum.NOTHING);
  /** The amount by which to offset the strikethrough stroke from the text baseline. */
  get strikeThroughOffset(): (number | never)[];
  set strikeThroughOffset(value: MeasurementValue | NothingEnum.NOTHING);
  /** The stroke weight of the strikethrough stroke. */
  get strikeThroughWeight(): (number | never)[];
  set strikeThroughWeight(value: MeasurementValue | NothingEnum.NOTHING);
  /**
   * The applied language / spelling dictionary. Accepts a
   * {@link LanguageWithVendors} or {@link Language} object, or its name.
   */
  get appliedLanguage(): (LanguageWithVendors | Language | never)[];
  set appliedLanguage(value: LanguageWithVendors | Language | string | NothingEnum.NOTHING);
  /** Value of Design Axes. */
  get designAxes(): (number[] | never)[];
  set designAxes(value: number[] | NothingEnum.NOTHING);
  /** If true, use a slashed zeroes in OpenType fonts. */
  get otfSlashedZero(): (boolean | never)[];
  set otfSlashedZero(value: boolean | NothingEnum.NOTHING);
  /** If true, use historical forms in OpenType fonts. */
  get otfHistorical(): (boolean | never)[];
  set otfHistorical(value: boolean | NothingEnum.NOTHING);
  /** The stylistic sets to use in OpenType fonts. */
  get otfStylisticSets(): (number | never)[];
  set otfStylisticSets(value: number | NothingEnum.NOTHING);
  /** If true, uses mark positioning in OpenType fonts. */
  get otfMark(): (boolean | never)[];
  set otfMark(value: boolean | NothingEnum.NOTHING);
  /** If true, uses localized forms in OpenType fonts. */
  get otfLocale(): (boolean | never)[];
  set otfLocale(value: boolean | NothingEnum.NOTHING);
  /** Which contextual glyph form — initial, medial, final, or isolated — to use for connected scripts, or `CALCULATE` to derive it automatically. See {@link PositionalForms}. */
  get positionalForm(): (PositionalForms | never)[];
  set positionalForm(value: PositionalForms | NothingEnum.NOTHING);
  /** If true, use overlapping swash forms in OpenType fonts. */
  get otfOverlapSwash(): (boolean | never)[];
  set otfOverlapSwash(value: boolean | NothingEnum.NOTHING);
  /** If true, use stylistic alternate forms in OpenType fonts. */
  get otfStylisticAlternate(): (boolean | never)[];
  set otfStylisticAlternate(value: boolean | NothingEnum.NOTHING);
  /** If true, use alternate justification forms in OpenType fonts. */
  get otfJustificationAlternate(): (boolean | never)[];
  set otfJustificationAlternate(value: boolean | NothingEnum.NOTHING);
  /** If true, use stretched alternate forms in OpenType fonts. */
  get otfStretchedAlternate(): (boolean | never)[];
  set otfStretchedAlternate(value: boolean | NothingEnum.NOTHING);
  /** The direction of the character. */
  get characterDirection(): (CharacterDirectionOptions | never)[];
  set characterDirection(value: CharacterDirectionOptions | NothingEnum.NOTHING);
  /** The keyboard direction of the character. */
  get keyboardDirection(): (CharacterDirectionOptions | never)[];
  set keyboardDirection(value: CharacterDirectionOptions | NothingEnum.NOTHING);
  /** Which digit glyphs — Arabic numerals, Hindi, Farsi, or another script's digits — render numbers in the text. See {@link DigitsTypeOptions}. */
  get digitsType(): (DigitsTypeOptions | never)[];
  set digitsType(value: DigitsTypeOptions | NothingEnum.NOTHING);
  /** Use of Kashidas for justification. */
  get kashidas(): (KashidasOptions | never)[];
  set kashidas(value: KashidasOptions | NothingEnum.NOTHING);
  /** Position of diacritical characters. */
  get diacriticPosition(): (DiacriticPositionOptions | never)[];
  set diacriticPosition(value: DiacriticPositionOptions | NothingEnum.NOTHING);
  /** The x (horizontal) offset for diacritic adjustment. */
  get xOffsetDiacritic(): (number | never)[];
  set xOffsetDiacritic(value: number | NothingEnum.NOTHING);
  /** The y (vertical) offset for diacritic adjustment. */
  get yOffsetDiacritic(): (number | never)[];
  set yOffsetDiacritic(value: number | NothingEnum.NOTHING);
  /** The alignment of small characters to the largest character in the line. */
  get characterAlignment(): (CharacterAlignment | never)[];
  set characterAlignment(value: CharacterAlignment | NothingEnum.NOTHING);
  /** The amount of horizontal character compression. */
  get tsume(): (number | NothingEnum.NOTHING)[];
  set tsume(value: number | NothingEnum.NOTHING);
  /** The amount of space before each character. */
  get leadingAki(): (number | never)[];
  set leadingAki(value: number | NothingEnum.NOTHING);
  /** The amount of space after each character. */
  get trailingAki(): (number | never)[];
  set trailingAki(value: number | NothingEnum.NOTHING);
  /** The rotation angle (in degrees) of individual characters. Note: The rotation is counterclockwise. */
  get characterRotation(): (number | never)[];
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
  get otfProportionalMetrics(): (boolean | never)[];
  set otfProportionalMetrics(value: boolean | NothingEnum.NOTHING);
  /** If true, switches hiragana fonts, which have different glyphs for horizontal and vertical. */
  get otfHVKana(): (boolean | NothingEnum.NOTHING)[];
  set otfHVKana(value: boolean | NothingEnum.NOTHING);
  /** If true, applies italics to half-width alphanumerics. */
  get otfRomanItalics(): (boolean | never)[];
  set otfRomanItalics(value: boolean | NothingEnum.NOTHING);
  /** If true, the line changes size when characters are scaled. */
  get scaleAffectsLineHeight(): (boolean | never)[];
  set scaleAffectsLineHeight(value: boolean | NothingEnum.NOTHING);
  /** If true, uses grid tracking to track non-Roman characters in CJK grids. */
  get cjkGridTracking(): (boolean | NothingEnum.NOTHING)[];
  set cjkGridTracking(value: boolean | NothingEnum.NOTHING);
  /** The glyph variant to substitute for standard glyphs. */
  get glyphForm(): (AlternateGlyphForms | never)[];
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
  readonly constructorName: 'ParagraphStyle';
  /** Resolves the proxy into the individual {@link ParagraphStyle} objects it stands for. */
  getElements(): ParagraphStyle[];
  /** The unique ID of the paragraph style, stable across saves and reopens. */
  readonly id: (number)[];
  /** The name of the paragraph style. */
  get name(): (string)[];
  set name(value: string);
  /** If `true`, the style was imported from another document. */
  readonly imported: (boolean)[];
  /** The style this style is based on. Accepts a {@link ParagraphStyle} or its name. */
  get basedOn(): (ParagraphStyle | string)[];
  set basedOn(value: ParagraphStyle | string);
  /** The style automatically applied to a new paragraph typed after one tagged with this style. */
  get nextStyle(): (ParagraphStyle)[];
  set nextStyle(value: ParagraphStyle);
  /** A collection of style export tag maps, mapping the style to markup tags for each export format. */
  readonly styleExportTagMaps: StyleExportTagMaps;
  /** If `true`, generates a separate document when exporting to EPUB. */
  get splitDocument(): (boolean)[];
  set splitDocument(value: boolean);
  /** If `true`, emits CSS for this style when exporting to EPUB or HTML. */
  get emitCss(): (boolean)[];
  set emitCss(value: boolean);
  /**
   * A unique identifier that can be assigned to the style to differentiate it
   * from others. Internal use only.
   */
  get styleUniqueId(): (string)[];
  set styleUniqueId(value: string);
  /** If `true`, generates a CSS class attribute for the style on export. */
  get includeClass(): (boolean)[];
  set includeClass(value: boolean);
  /** The ARIA role to emit for text in this style, as recommended by the IDPF, when exporting to EPUB. */
  get epubAriaRole(): (string)[];
  set epubAriaRole(value: string);
  /**
   * The color used to preview the style in the Paragraph Styles panel, as
   * `[R, G, B]` (each 0-255) or a {@link UIColors} enumerator.
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
  /** Converts any bullets or numbering applied through this style into literal text. */
  convertBulletsAndNumberingToText(): (void)[];
  /**
   * Deletes the style.
   * @param replacingWith The style applied to any paragraphs currently tagged with this style. Paragraphs are left unstyled if omitted.
   */
  remove(replacingWith?: ParagraphStyle | string): (void)[];
  /**
   * @internal Forcefully deletes the style, bypassing the usual safety checks. Internal use only.
   * @param replacingWith The style applied to any paragraphs currently tagged with this style.
   */
  forceDelete(replacingWith?: ParagraphStyle): (void)[];
  /** Duplicates the paragraph style. */
  duplicate(): (ParagraphStyle)[];
  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): (ParagraphStyle)[];
}
