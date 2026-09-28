/**
 * FindObjectPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { FindChangeContentTransparencySetting } from './FindChangeContentTransparencySetting';
import type { FindChangeFillTransparencySetting } from './FindChangeFillTransparencySetting';
import type { FindChangeStrokeTransparencySetting } from './FindChangeStrokeTransparencySetting';
import type { FindChangeTransparencySetting } from './FindChangeTransparencySetting';
import type { Preferences } from './Preferences';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
import type { AnchorPoint } from './Enums/AnchorPoint';
import type { AnchorPosition } from './Enums/AnchorPosition';
import type { AnchoredRelativeTo } from './Enums/AnchoredRelativeTo';
import type { ArrowHead } from './Enums/ArrowHead';
import type { ArrowHeadAlignmentEnum } from './Enums/ArrowHeadAlignmentEnum';
import type { AutoSizingReferenceEnum } from './Enums/AutoSizingReferenceEnum';
import type { AutoSizingTypeEnum } from './Enums/AutoSizingTypeEnum';
import type { BaselineFrameGridRelativeOption } from './Enums/BaselineFrameGridRelativeOption';
import type { ContourOptionsTypes } from './Enums/ContourOptionsTypes';
import type { CornerOptions } from './Enums/CornerOptions';
import type { EmptyFrameFittingOptions } from './Enums/EmptyFrameFittingOptions';
import type { EndCap } from './Enums/EndCap';
import type { EndJoin } from './Enums/EndJoin';
import type { FirstBaseline } from './Enums/FirstBaseline';
import type { GIFOptionsPalette } from './Enums/GIFOptionsPalette';
import type { ImageAlignmentType } from './Enums/ImageAlignmentType';
import type { ImageFormat } from './Enums/ImageFormat';
import type { ImagePageBreakType } from './Enums/ImagePageBreakType';
import type { ImageResolution } from './Enums/ImageResolution';
import type { JPEGOptionsFormat } from './Enums/JPEGOptionsFormat';
import type { JPEGOptionsQuality } from './Enums/JPEGOptionsQuality';
import type { NothingEnum } from './Enums/NothingEnum';
import type { PreserveAppearanceFromLayoutEnum } from './Enums/PreserveAppearanceFromLayoutEnum';
import type { SourceType } from './Enums/SourceType';
import type { StoryDirectionOptions } from './Enums/StoryDirectionOptions';
import type { StrokeAlignment } from './Enums/StrokeAlignment';
import type { StrokeCornerAdjustment } from './Enums/StrokeCornerAdjustment';
import type { TagType } from './Enums/TagType';
import type { TextWrapModes } from './Enums/TextWrapModes';
import type { TextWrapSideOptions } from './Enums/TextWrapSideOptions';
import type { UIColors } from './Enums/UIColors';
import type { VerticalJustification } from './Enums/VerticalJustification';
import type { VerticallyRelativeTo } from './Enums/VerticallyRelativeTo';
import type { ObjectStyle } from './ObjectStyle';

/**
 * The object criteria a find/change object operation matches against, set via
 * {@link Application.findObjectPreferences} and used by {@link Application.findObject}.
 */
export interface FindObjectPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'FindObjectPreference';

  /** Resolves the proxy into the individual {@link FindObjectPreference} objects it stands for. */
  getElements(): FindObjectPreference<'single'>[];

  /** The transparency settings to match. */
  readonly transparencySettings: Read<M, FindChangeTransparencySetting | NothingEnum.NOTHING>;

  /** The stroke transparency settings to match. */
  readonly strokeTransparencySettings: Read<M, FindChangeStrokeTransparencySetting | NothingEnum.NOTHING>;

  /** The fill transparency settings to match. */
  readonly fillTransparencySettings: Read<M, FindChangeFillTransparencySetting | NothingEnum.NOTHING>;

  /** The content transparency settings to match. */
  readonly contentTransparencySettings: Read<M, FindChangeContentTransparencySetting | NothingEnum.NOTHING>;

  /** If true, the text wrap path has been explicitly modified by the user. */
  readonly userModifiedWrap: Read<M, boolean | NothingEnum.NOTHING>;

  /** A collection of preferences objects. */
  readonly preferences: Preferences;

  /** The story's text direction to match — left-to-right, right-to-left, or unknown; see {@link StoryDirectionOptions}. */
  get storyDirection(): Read<M, StoryDirectionOptions | NothingEnum.NOTHING>;
  set storyDirection(value: StoryDirectionOptions | NothingEnum.NOTHING);

  /** The point in the referenced object relative to which to position the anchored object. Notes: Valid only when anchored position is custom. */
  get positionReferencePoint(): Read<M, AnchorPoint | NothingEnum.NOTHING>;
  set positionReferencePoint(value: AnchorPoint | NothingEnum.NOTHING);

  /** If true, text wraps on the master spread apply to that spread only, and not to any pages the master spread has been applied to. */
  get applyToMasterPageOnly(): Read<M, boolean | NothingEnum.NOTHING>;
  set applyToMasterPageOnly(value: boolean | NothingEnum.NOTHING);

  /** Which side of the object text wraps around to match — both, left, right, toward the spine, or away from it; see {@link TextWrapSideOptions}. */
  get textWrapSide(): Read<M, TextWrapSideOptions | NothingEnum.NOTHING>;
  set textWrapSide(value: TextWrapSideOptions | NothingEnum.NOTHING);

  /** The minimum space between text and the edges of the wrapped object. Specify four values in the format [top, left, bottom, right]. */
  get textWrapOffset(): Read<M, number[] | NothingEnum.NOTHING>;
  set textWrapOffset(value: MeasurementValue[] | NothingEnum.NOTHING);

  /** How text wraps around the object — see {@link TextWrapModes}. */
  get textWrapMode(): Read<M, TextWrapModes | NothingEnum.NOTHING>;
  set textWrapMode(value: TextWrapModes | NothingEnum.NOTHING);

  /** If true, enable overrides to document footnote options. */
  get footnotesEnableOverrides(): Read<M, boolean | NothingEnum.NOTHING>;
  set footnotesEnableOverrides(value: boolean | NothingEnum.NOTHING);

  /** If true, enable straddling footnotes. */
  get footnotesSpanAcrossColumns(): Read<M, boolean | NothingEnum.NOTHING>;
  set footnotesSpanAcrossColumns(value: boolean | NothingEnum.NOTHING);

  /** Minimum Spacing Before First Footnote. */
  get footnotesMinimumSpacing(): Read<M, number | NothingEnum.NOTHING>;
  set footnotesMinimumSpacing(value: number | NothingEnum.NOTHING);

  /** Space between footnotes. */
  get footnotesSpaceBetween(): Read<M, number | NothingEnum.NOTHING>;
  set footnotesSpaceBetween(value: number | NothingEnum.NOTHING);

  /** The applied object style(s). */
  get appliedObjectStyles(): Read<M, string | NothingEnum.NOTHING>;
  set appliedObjectStyles(value: string | NothingEnum.NOTHING | null | ObjectStyle);

  /** The swatch (color, gradient, tint, or mixed ink) to match as the fill color. */
  get fillColor(): Read<M, Swatch | NothingEnum.NOTHING>;
  set fillColor(value: Swatch | string | NothingEnum.NOTHING);

  /** The fill color tint (as a percentage) to match. Use a number from `0` to `100`, or `-1` for the inherited or overridden value. */
  get fillTint(): Read<M, number | NothingEnum.NOTHING>;
  set fillTint(value: number | NothingEnum.NOTHING);

  /** If true, matches objects whose fill color overprints underlying objects; if false, matches objects whose fill color knocks out underlying colors. */
  get overprintFill(): Read<M, boolean | NothingEnum.NOTHING>;
  set overprintFill(value: boolean | NothingEnum.NOTHING);

  /** The stroke weight (in points) to match. */
  get strokeWeight(): Read<M, number | NothingEnum.NOTHING>;
  set strokeWeight(value: MeasurementValue | NothingEnum.NOTHING);

  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): Read<M, number | NothingEnum.NOTHING>;
  set miterLimit(value: number | NothingEnum.NOTHING);

  /** The end shape of an open path. */
  get endCap(): Read<M, EndCap | NothingEnum.NOTHING>;
  set endCap(value: EndCap | NothingEnum.NOTHING);

  /** The corner join to match. */
  get endJoin(): Read<M, EndJoin | NothingEnum.NOTHING>;
  set endJoin(value: EndJoin | NothingEnum.NOTHING);

  /** The name of the stroke style to apply. */
  get strokeType(): Read<M, StrokeStyle | NothingEnum.NOTHING>;
  set strokeType(value: StrokeStyle | string | NothingEnum.NOTHING | null);

  /** The corner adjustment to match. */
  get strokeCornerAdjustment(): Read<M, StrokeCornerAdjustment | NothingEnum.NOTHING>;
  set strokeCornerAdjustment(value: StrokeCornerAdjustment | NothingEnum.NOTHING);

  /** The dash and gap measurements that define the pattern of a custom dashed line. Define up to six values (in points) in the format [dash1, gap1, dash2, gap2, dash3, gap3]. */
  get strokeDashAndGap(): Read<M, number[] | NothingEnum.NOTHING>;
  set strokeDashAndGap(value: number[] | NothingEnum.NOTHING);

  /** The arrowhead applied to the start of the path. */
  get leftLineEnd(): Read<M, ArrowHead | NothingEnum.NOTHING>;
  set leftLineEnd(value: ArrowHead | NothingEnum.NOTHING);

  /** The arrowhead applied to the end of the path. */
  get rightLineEnd(): Read<M, ArrowHead | NothingEnum.NOTHING>;
  set rightLineEnd(value: ArrowHead | NothingEnum.NOTHING);

  /** The swatch (color, gradient, tint, or mixed ink) to match as the stroke color. */
  get strokeColor(): Read<M, Swatch | NothingEnum.NOTHING>;
  set strokeColor(value: Swatch | string | NothingEnum.NOTHING);

  /** The stroke color tint (as a percentage) to match. Use a number from `0` to `100`, or `-1` for the inherited or overridden value. */
  get strokeTint(): Read<M, number | NothingEnum.NOTHING>;
  set strokeTint(value: number | NothingEnum.NOTHING);

  /** If true, matches objects whose stroke color overprints underlying objects; if false, matches objects whose stroke color knocks out underlying colors. */
  get overprintStroke(): Read<M, boolean | NothingEnum.NOTHING>;
  set overprintStroke(value: boolean | NothingEnum.NOTHING);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): Read<M, Swatch | NothingEnum.NOTHING>;
  set gapColor(value: Swatch | string | NothingEnum.NOTHING);

  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.). */
  get gapTint(): Read<M, number | NothingEnum.NOTHING>;
  set gapTint(value: number | NothingEnum.NOTHING);

  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): Read<M, boolean | NothingEnum.NOTHING>;
  set overprintGap(value: boolean | NothingEnum.NOTHING);

  /** The stroke alignment to match. */
  get strokeAlignment(): Read<M, StrokeAlignment | NothingEnum.NOTHING>;
  set strokeAlignment(value: StrokeAlignment | NothingEnum.NOTHING);

  /** If true, matches objects that do not print. */
  get nonprinting(): Read<M, boolean | NothingEnum.NOTHING>;
  set nonprinting(value: boolean | NothingEnum.NOTHING);

  /** The angle of a linear gradient to match on the fill. (Range: -180 to 180). */
  get gradientFillAngle(): Read<M, number | NothingEnum.NOTHING>;
  set gradientFillAngle(value: number | NothingEnum.NOTHING);

  /** The angle of a linear gradient to match on the stroke. (Range: -180 to 180). */
  get gradientStrokeAngle(): Read<M, number | NothingEnum.NOTHING>;
  set gradientStrokeAngle(value: number | NothingEnum.NOTHING);

  /** The number of columns in the text frame. Note: Depending on the value of use fixed column width, the number of columns can change automatically when the text frame size changes. */
  get textColumnCount(): Read<M, number | NothingEnum.NOTHING>;
  set textColumnCount(value: number | NothingEnum.NOTHING);

  /** The space between columns in the text frame. */
  get textColumnGutter(): Read<M, number | NothingEnum.NOTHING>;
  set textColumnGutter(value: number | NothingEnum.NOTHING);

  /** The column width of the columns in the text frame. */
  get textColumnFixedWidth(): Read<M, number | NothingEnum.NOTHING>;
  set textColumnFixedWidth(value: number | NothingEnum.NOTHING);

  /** If true, maintains column width when the text frame is resized. If false, causes columns to resize when the text frame is resized. Note: When true, resizing the frame can change the number of columns in the frame. */
  get useFixedColumnWidth(): Read<M, boolean | NothingEnum.NOTHING>;
  set useFixedColumnWidth(value: boolean | NothingEnum.NOTHING);

  /** The amount to offset text from the edges of the text frame, specified either as a single value applied uniformly to all sides of the text frame or as an array of 4 values in the format [top inset, left inset, bottom inset, right inset]. */
  get insetSpacing(): Read<M, number | number[] | NothingEnum.NOTHING>;
  set insetSpacing(value: MeasurementValue | MeasurementValue[] | NothingEnum.NOTHING);

  /** The distance between the baseline of the text and the top inset of the text frame or cell. */
  get firstBaselineOffset(): Read<M, FirstBaseline | NothingEnum.NOTHING>;
  set firstBaselineOffset(value: FirstBaseline | NothingEnum.NOTHING);

  /** The minimum distance between the baseline of the text and the top inset of the text frame or cell. */
  get minimumFirstBaselineOffset(): Read<M, number | NothingEnum.NOTHING>;
  set minimumFirstBaselineOffset(value: number | NothingEnum.NOTHING);

  /** The vertical alignment of the text content. */
  get verticalJustification(): Read<M, VerticalJustification | NothingEnum.NOTHING>;
  set verticalJustification(value: VerticalJustification | NothingEnum.NOTHING);

  /** The maximum amount of vertical space between two paragraphs. Note: Valid only when vertical justification is justified; the specified amount is applied in addition to the space before or space after values defined for the paragraph. */
  get verticalThreshold(): Read<M, number | NothingEnum.NOTHING>;
  set verticalThreshold(value: number | NothingEnum.NOTHING);

  /** If true, ignores text wrap settings for drawn or placed objects in the text frame. */
  get ignoreWrap(): Read<M, boolean | NothingEnum.NOTHING>;
  set ignoreWrap(value: boolean | NothingEnum.NOTHING);

  /** If true, uses a custom baseline frame grid. */
  get useCustomBaselineFrameGrid(): Read<M, boolean | NothingEnum.NOTHING>;
  set useCustomBaselineFrameGrid(value: boolean | NothingEnum.NOTHING);

  /** The amount to offset the baseline grid. */
  get startingOffsetForBaselineFrameGrid(): Read<M, number | NothingEnum.NOTHING>;
  set startingOffsetForBaselineFrameGrid(value: number | NothingEnum.NOTHING);

  /** The location (top of page, top margin, top of frame, or frame inset) on which to base the custom baseline grid. */
  get baselineFrameGridRelativeOption(): Read<M, BaselineFrameGridRelativeOption | NothingEnum.NOTHING>;
  set baselineFrameGridRelativeOption(value: BaselineFrameGridRelativeOption | NothingEnum.NOTHING);

  /** The distance between grid lines. */
  get baselineFrameGridIncrement(): Read<M, number | NothingEnum.NOTHING>;
  set baselineFrameGridIncrement(value: number | NothingEnum.NOTHING);

  /** The grid line color, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values, or as a UI color. */
  get baselineFrameGridColor(): Read<M, number[] | UIColors | NothingEnum.NOTHING>;
  set baselineFrameGridColor(value: number[] | UIColors | NothingEnum.NOTHING);

  /** If true, inverts the text wrap. */
  get inverse(): Read<M, boolean | NothingEnum.NOTHING>;
  set inverse(value: boolean | NothingEnum.NOTHING);

  /** Which shape traces the text-wrap outline — see {@link ContourOptionsTypes}. */
  get contourType(): Read<M, ContourOptionsTypes | NothingEnum.NOTHING>;
  set contourType(value: ContourOptionsTypes | NothingEnum.NOTHING);

  /** If true, creates interior clipping paths within the surrounding clipping path. Note: Valid only when clipping type is alpha channel or detect edges. */
  get includeInsideEdges(): Read<M, boolean | NothingEnum.NOTHING>;
  set includeInsideEdges(value: boolean | NothingEnum.NOTHING);

  /** The position of the anchored object relative to the anchor. */
  get anchoredPosition(): Read<M, AnchorPosition | NothingEnum.NOTHING>;
  set anchoredPosition(value: AnchorPosition | NothingEnum.NOTHING);

  /** If true, the position of the anchored object is relative to the binding spine of the page or spread. */
  get spineRelative(): Read<M, boolean | NothingEnum.NOTHING>;
  set spineRelative(value: boolean | NothingEnum.NOTHING);

  /** If true, prevents manual positioning of the anchored object. */
  get lockPosition(): Read<M, boolean | NothingEnum.NOTHING>;
  set lockPosition(value: boolean | NothingEnum.NOTHING);

  /** If true, pins the position of the anchored object within the text frame top and bottom. */
  get pinPosition(): Read<M, boolean | NothingEnum.NOTHING>;
  set pinPosition(value: boolean | NothingEnum.NOTHING);

  /** The point in the anchored object to position. */
  get anchorPoint(): Read<M, AnchorPoint | NothingEnum.NOTHING>;
  set anchorPoint(value: AnchorPoint | NothingEnum.NOTHING);

  /** The horizontal reference point on the page. Valid only when anchored position is custom. */
  get horizontalReferencePoint(): Read<M, AnchoredRelativeTo | NothingEnum.NOTHING>;
  set horizontalReferencePoint(value: AnchoredRelativeTo | NothingEnum.NOTHING);

  /** The vertical reference point on the page. Valid when anchored position is custom. */
  get verticalReferencePoint(): Read<M, VerticallyRelativeTo | NothingEnum.NOTHING>;
  set verticalReferencePoint(value: VerticallyRelativeTo | NothingEnum.NOTHING);

  /** The horizontal (x) offset of the anchored object. */
  get anchorXoffset(): Read<M, number | NothingEnum.NOTHING>;
  set anchorXoffset(value: MeasurementValue | NothingEnum.NOTHING | null);

  /** The vertical (y) offset of the anchored object. Corresponds to the space after property for above line positioning. */
  get anchorYoffset(): Read<M, number | NothingEnum.NOTHING>;
  set anchorYoffset(value: MeasurementValue | NothingEnum.NOTHING | null);

  /** The space above an above-line anchored object. */
  get anchorSpaceAbove(): Read<M, number | NothingEnum.NOTHING>;
  set anchorSpaceAbove(value: MeasurementValue | NothingEnum.NOTHING | null);

  /** If true, adjust the position of characters at the edges of the frame to provide a better appearance. */
  get opticalMarginAlignment(): Read<M, boolean | NothingEnum.NOTHING>;
  set opticalMarginAlignment(value: boolean | NothingEnum.NOTHING);

  /** The point size used as the basis for calculating optical margin alignment. (Range: 0.1 to 1296).1 - 1296 points) or NothingEnum enumerator. */
  get opticalMarginSize(): Read<M, number | NothingEnum.NOTHING>;
  set opticalMarginSize(value: MeasurementValue | NothingEnum.NOTHING);

  /** The amount in measurement units to crop the left edge of a graphic. */
  get leftCrop(): Read<M, number | NothingEnum.NOTHING>;
  set leftCrop(value: MeasurementValue | NothingEnum.NOTHING);

  /** The amount in measurement units to crop the top edge of a graphic. */
  get topCrop(): Read<M, number | NothingEnum.NOTHING>;
  set topCrop(value: MeasurementValue | NothingEnum.NOTHING);

  /** The amount in measurement units to crop the right edge of a graphic. */
  get rightCrop(): Read<M, number | NothingEnum.NOTHING>;
  set rightCrop(value: MeasurementValue | NothingEnum.NOTHING);

  /** The amount in measurement units to crop the bottom edge of a graphic. */
  get bottomCrop(): Read<M, number | NothingEnum.NOTHING>;
  set bottomCrop(value: MeasurementValue | NothingEnum.NOTHING);

  /** The frame fitting option to apply to placed or pasted content if the frame is empty. Can be applied to a frame, object style, or document or to the application. */
  get fittingOnEmptyFrame(): Read<M, EmptyFrameFittingOptions | NothingEnum.NOTHING>;
  set fittingOnEmptyFrame(value: EmptyFrameFittingOptions | NothingEnum.NOTHING);

  /** The point with which to align the image empty when fitting in a frame. For information, see frame fitting options. */
  get fittingAlignment(): Read<M, AnchorPoint | NothingEnum.NOTHING>;
  set fittingAlignment(value: AnchorPoint | NothingEnum.NOTHING);

  /** The arrowhead alignment to match. */
  get arrowHeadAlignment(): Read<M, ArrowHeadAlignmentEnum | NothingEnum.NOTHING>;
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum | NothingEnum.NOTHING);

  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000). */
  get leftArrowHeadScale(): Read<M, number | NothingEnum.NOTHING>;
  set leftArrowHeadScale(value: number | NothingEnum.NOTHING);

  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000). */
  get rightArrowHeadScale(): Read<M, number | NothingEnum.NOTHING>;
  set rightArrowHeadScale(value: number | NothingEnum.NOTHING);

  /**
   * The corner shape to match at the top left corner of rectangular shapes,
   * and at all corners of non-rectangular shapes.
   *
   * Differs from {@link endJoin}: a corner option carries its own radius,
   * while an end join's rounded or beveled effect instead depends on the
   * stroke weight.
   */
  get topLeftCornerOption(): Read<M, CornerOptions | NothingEnum.NOTHING>;
  set topLeftCornerOption(value: CornerOptions | NothingEnum.NOTHING);

  /** The shape to apply to the top right corner of rectangular shapes. */
  get topRightCornerOption(): Read<M, CornerOptions | NothingEnum.NOTHING>;
  set topRightCornerOption(value: CornerOptions | NothingEnum.NOTHING);

  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get bottomLeftCornerOption(): Read<M, CornerOptions | NothingEnum.NOTHING>;
  set bottomLeftCornerOption(value: CornerOptions | NothingEnum.NOTHING);

  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get bottomRightCornerOption(): Read<M, CornerOptions | NothingEnum.NOTHING>;
  set bottomRightCornerOption(value: CornerOptions | NothingEnum.NOTHING);

  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes. */
  get topLeftCornerRadius(): Read<M, number | NothingEnum.NOTHING>;
  set topLeftCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);

  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes. */
  get topRightCornerRadius(): Read<M, number | NothingEnum.NOTHING>;
  set topRightCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);

  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes. */
  get bottomLeftCornerRadius(): Read<M, number | NothingEnum.NOTHING>;
  set bottomLeftCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);

  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes. */
  get bottomRightCornerRadius(): Read<M, number | NothingEnum.NOTHING>;
  set bottomRightCornerRadius(value: MeasurementValue | NothingEnum.NOTHING);

  /**
   * Auto-sizing type of text frame.
   *
   * Based on type, reference value is automatically adjusted. For example, for height only
   * type, top-left reference point becomes top-center. Recommended to change auto-sizing
   * type, after setting other auto-sizing attributes.
   */
  get autoSizingType(): Read<M, AutoSizingTypeEnum | NothingEnum.NOTHING>;
  set autoSizingType(value: AutoSizingTypeEnum | NothingEnum.NOTHING);

  /**
   * The reference point for auto sizing of text frame.
   *
   * Reference point is automatically adjusted to the suitable value depending on the
   * auto-sizing type value. As an example, top left reference point becomes top center for
   * height only dimension.
   */
  get autoSizingReferencePoint(): Read<M, AutoSizingReferenceEnum | NothingEnum.NOTHING>;
  set autoSizingReferencePoint(value: AutoSizingReferenceEnum | NothingEnum.NOTHING);

  /** If true, minimum height value is used during the auto-sizing of text frame. */
  get useMinimumHeightForAutoSizing(): Read<M, boolean | NothingEnum.NOTHING>;
  set useMinimumHeightForAutoSizing(value: boolean | NothingEnum.NOTHING);

  /** The minimum height for auto-sizing of the text frame. */
  get minimumHeightForAutoSizing(): Read<M, number | NothingEnum.NOTHING>;
  set minimumHeightForAutoSizing(value: MeasurementValue | NothingEnum.NOTHING);

  /** If true, minimum width value is used during the auto-sizing of text frame. */
  get useMinimumWidthForAutoSizing(): Read<M, boolean | NothingEnum.NOTHING>;
  set useMinimumWidthForAutoSizing(value: boolean | NothingEnum.NOTHING);

  /** The minimum width for auto-sizing of the text frame. */
  get minimumWidthForAutoSizing(): Read<M, number | NothingEnum.NOTHING>;
  set minimumWidthForAutoSizing(value: MeasurementValue | NothingEnum.NOTHING);

  /** If true, line-breaks are not introduced after auto sizing. */
  get useNoLineBreaksForAutoSizing(): Read<M, boolean | NothingEnum.NOTHING>;
  set useNoLineBreaksForAutoSizing(value: boolean | NothingEnum.NOTHING);

  /** How placed content is preserved on export to match — honoring export preferences, keeping the existing image, or rasterizing the container or content; see {@link PreserveAppearanceFromLayoutEnum}. */
  get preserveAppearanceFromLayout(): Read<M, PreserveAppearanceFromLayoutEnum | NothingEnum.NOTHING>;
  set preserveAppearanceFromLayout(value: PreserveAppearanceFromLayoutEnum | NothingEnum.NOTHING);

  /** The source type of alternate text. */
  get altTextSourceType(): Read<M, SourceType | NothingEnum.NOTHING>;
  set altTextSourceType(value: SourceType | NothingEnum.NOTHING);

  /** The source type of actual text. */
  get actualTextSourceType(): Read<M, SourceType | NothingEnum.NOTHING>;
  set actualTextSourceType(value: SourceType | NothingEnum.NOTHING);

  /** The custom alternate text entered by the user. */
  get customAltText(): Read<M, string | NothingEnum.NOTHING>;
  set customAltText(value: string | NothingEnum.NOTHING);

  /** The custom actual text entered by the user. */
  get customActualText(): Read<M, string | NothingEnum.NOTHING>;
  set customActualText(value: string | NothingEnum.NOTHING);

  /** The metadata property to use as source of alternate text. */
  get altMetadataProperty(): Read<M, [namespacePrefix: string, propertyPath: string] | NothingEnum.NOTHING>;
  set altMetadataProperty(value: [namespacePrefix: string, propertyPath: string] | NothingEnum.NOTHING);

  /** The metadata property to use as source of actual text. */
  get actualMetadataProperty(): Read<M, [namespacePrefix: string, propertyPath: string] | NothingEnum.NOTHING>;
  set actualMetadataProperty(value: [namespacePrefix: string, propertyPath: string] | NothingEnum.NOTHING);

  /** The tag type of page item. */
  get applyTagType(): Read<M, TagType | NothingEnum.NOTHING>;
  set applyTagType(value: TagType | NothingEnum.NOTHING);

  /** Allows user to select the image format for conversion. */
  get imageConversionType(): Read<M, ImageFormat | NothingEnum.NOTHING>;
  set imageConversionType(value: ImageFormat | NothingEnum.NOTHING);

  /** The export resolution. */
  get imageExportResolution(): Read<M, ImageResolution | NothingEnum.NOTHING>;
  set imageExportResolution(value: ImageResolution | NothingEnum.NOTHING);

  /** The color palette for GIF conversion. Note: Not valid when image conversion is JPEG. */
  get gifOptionsPalette(): Read<M, GIFOptionsPalette | NothingEnum.NOTHING>;
  set gifOptionsPalette(value: GIFOptionsPalette | NothingEnum.NOTHING);

  /** If true, generates interlaced GIFs. Note: Not valid when image conversion is JPEG. */
  get gifOptionsInterlaced(): Read<M, boolean | NothingEnum.NOTHING>;
  set gifOptionsInterlaced(value: boolean | NothingEnum.NOTHING);

  /** The quality of converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsQuality(): Read<M, JPEGOptionsQuality | NothingEnum.NOTHING>;
  set jpegOptionsQuality(value: JPEGOptionsQuality | NothingEnum.NOTHING);

  /** The formatting method for converted JPEG images. Note: Not valid when image conversion is GIF. */
  get jpegOptionsFormat(): Read<M, JPEGOptionsFormat | NothingEnum.NOTHING>;
  set jpegOptionsFormat(value: JPEGOptionsFormat | NothingEnum.NOTHING);

  /** Alignment applied to images. */
  get imageAlignment(): Read<M, ImageAlignmentType | NothingEnum.NOTHING>;
  set imageAlignment(value: ImageAlignmentType | NothingEnum.NOTHING);

  /** Space Before applied to images. */
  get imageSpaceBefore(): Read<M, number | NothingEnum.NOTHING>;
  set imageSpaceBefore(value: number | NothingEnum.NOTHING);

  /** Space After applied to images. */
  get imageSpaceAfter(): Read<M, number | NothingEnum.NOTHING>;
  set imageSpaceAfter(value: number | NothingEnum.NOTHING);

  /** If true, image page break settings will be used in objects. */
  get useImagePageBreak(): Read<M, boolean | NothingEnum.NOTHING>;
  set useImagePageBreak(value: boolean | NothingEnum.NOTHING);

  /** Image page break settings to be used with objects. */
  get imagePageBreak(): Read<M, ImagePageBreakType | NothingEnum.NOTHING>;
  set imagePageBreak(value: ImagePageBreakType | NothingEnum.NOTHING);

  /** Provides the alternate text for the object. */
  altText(): Read<M, string>;

  /** Provides the actual text for the object. */
  actualText(): Read<M, string>;
}
