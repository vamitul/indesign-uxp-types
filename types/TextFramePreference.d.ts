/**
 * TextFramePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { Document } from './Document';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { ObjectStyle } from './ObjectStyle';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
import type { TextFrame } from './TextFrame';
import type { AutoSizingReferenceEnum } from './Enums/AutoSizingReferenceEnum';
import type { AutoSizingTypeEnum } from './Enums/AutoSizingTypeEnum';
import type { FirstBaseline } from './Enums/FirstBaseline';
import type { VerticalJustification } from './Enums/VerticalJustification';

/**
 * Text-frame column layout, inset, vertical-justification, and baseline-grid defaults, applicable at the application/document default level, on a live frame, or on an object style.
 */
export interface TextFramePreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application | Document | TextFrame | EndnoteTextFrame | ObjectStyle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextFramePreference';

  /** Resolves the proxy into the individual {@link TextFramePreference} objects it stands for. */
  getElements(): TextFramePreference<'single'>[];

  /** The number of columns in the text frame. Note: Depending on the value of use fixed column width, the number of columns can change automatically when the text frame size changes. */
  get textColumnCount(): Read<M, number>;
  set textColumnCount(value: number);

  /** The space between columns in the text frame. */
  get textColumnGutter(): Read<M, number>;
  set textColumnGutter(value: MeasurementValue);

  /** The column width of the columns in the text frame. */
  get textColumnFixedWidth(): Read<M, number>;
  set textColumnFixedWidth(value: MeasurementValue);

  /** If true, maintains column width when the text frame is resized. If false, causes columns to resize when the text frame is resized. Note: When true, resizing the frame can change the number of columns in the frame. */
  get useFixedColumnWidth(): Read<M, boolean>;
  set useFixedColumnWidth(value: boolean);

  /** The amount to offset text from the edges of the text frame, specified either as a single value applied uniformly to all sides of the text frame or as an array of 4 values in the format [top inset, left inset, bottom inset, right inset]. */
  get insetSpacing(): Read<M, number | number[]>;
  set insetSpacing(value: MeasurementValue | MeasurementValue[]);

  /** The distance between the baseline of the text and the top inset of the text frame or cell. */
  get firstBaselineOffset(): Read<M, FirstBaseline>;
  set firstBaselineOffset(value: FirstBaseline);

  /** The minimum distance between the baseline of the text and the top inset of the text frame or cell. */
  get minimumFirstBaselineOffset(): Read<M, number>;
  set minimumFirstBaselineOffset(value: MeasurementValue);

  /** The vertical alignment of the text content. */
  get verticalJustification(): Read<M, VerticalJustification>;
  set verticalJustification(value: VerticalJustification);

  /** The maximum amount of vertical space between two paragraphs. Note: Valid only when vertical justification is justified; the specified amount is applied in addition to the space before or space after values defined for the paragraph. */
  get verticalThreshold(): Read<M, number>;
  set verticalThreshold(value: MeasurementValue);

  /** If true, ignores text wrap settings for drawn or placed objects in the text frame. */
  get ignoreWrap(): Read<M, boolean>;
  set ignoreWrap(value: boolean);

  /**
   * If true, maintains column width between a min and max range when the text frame is
   * resized.
   *
   * If false, causes columns to resize when the text frame is resized. Note: When true,
   * resizing the frame can change the number of columns in the frame.
   */
  get useFlexibleColumnWidth(): Read<M, boolean>;
  set useFlexibleColumnWidth(value: boolean);

  /** The maximum column width of the columns in the text frame. Use 0 to indicate no upper limit. */
  get textColumnMaxWidth(): Read<M, number>;
  set textColumnMaxWidth(value: MeasurementValue);

  /**
   * Auto-sizing type of text frame.
   *
   * Based on type, reference value is automatically adjusted. For example, for height only
   * type, top-left reference point becomes top-center. Recommended to change auto-sizing
   * type, after setting other auto-sizing attributes
   */
  get autoSizingType(): Read<M, AutoSizingTypeEnum>;
  set autoSizingType(value: AutoSizingTypeEnum);

  /** The reference point for auto sizing of text frame. Reference point is automatically adjusted to the suitable value depending on the auto-sizing type value. As an example, top left reference point becomes top center for height only dimension */
  get autoSizingReferencePoint(): Read<M, AutoSizingReferenceEnum>;
  set autoSizingReferencePoint(value: AutoSizingReferenceEnum);

  /** If true, minimum height value is used during the auto-sizing of text frame. */
  get useMinimumHeightForAutoSizing(): Read<M, boolean>;
  set useMinimumHeightForAutoSizing(value: boolean);

  /** The minimum height for auto-sizing of the text frame. */
  get minimumHeightForAutoSizing(): Read<M, number>;
  set minimumHeightForAutoSizing(value: MeasurementValue);

  /** If true, minimum width value is used during the auto-sizing of text frame. */
  get useMinimumWidthForAutoSizing(): Read<M, boolean>;
  set useMinimumWidthForAutoSizing(value: boolean);

  /** The minimum width for auto-sizing of the text frame. */
  get minimumWidthForAutoSizing(): Read<M, number>;
  set minimumWidthForAutoSizing(value: MeasurementValue);

  /** If true, line-breaks are not introduced after auto sizing. */
  get useNoLineBreaksForAutoSizing(): Read<M, boolean>;
  set useNoLineBreaksForAutoSizing(value: boolean);

  /** If true, enable overrides to text frame vertical column rule options. */
  get columnRuleOverride(): Read<M, boolean>;
  set columnRuleOverride(value: boolean);

  /** The vertical offset of the column rule — the rule drawn between the frame's text columns. */
  get columnRuleOffset(): Read<M, number>;
  set columnRuleOffset(value: number);

  /** The column rule's inset from the top of the text frame. */
  get columnRuleTopInset(): Read<M, number>;
  set columnRuleTopInset(value: number);

  /** If true, enable inset chain override. */
  get columnRuleInsetChainOverride(): Read<M, boolean>;
  set columnRuleInsetChainOverride(value: boolean);

  /** The column rule's inset from the bottom of the text frame. */
  get columnRuleBottomInset(): Read<M, number>;
  set columnRuleBottomInset(value: number);

  /** The weight of the column rule's stroke. */
  get columnRuleStrokeWidth(): Read<M, number>;
  set columnRuleStrokeWidth(value: number);

  /** The swatch (color, gradient, tint, or mixed ink) applied to the column rule's stroke. */
  get columnRuleStrokeColor(): Read<M, Swatch>;
  set columnRuleStrokeColor(value: Swatch);

  /** The name of the stroke style applied to the column rule. */
  get columnRuleStrokeType(): Read<M, StrokeStyle>;
  set columnRuleStrokeType(value: StrokeStyle);

  /** The tint (as a percentage) of the column rule's stroke color. */
  get columnRuleStrokeTint(): Read<M, number>;
  set columnRuleStrokeTint(value: number);

  /** If true, enable overprint override. */
  get columnRuleOverprintOverride(): Read<M, boolean>;
  set columnRuleOverprintOverride(value: boolean);

  /** If true, enable overrides to document footnote options. */
  get footnotesEnableOverrides(): Read<M, boolean>;
  set footnotesEnableOverrides(value: boolean);

  /** If true, enable straddling footnotes. */
  get footnotesSpanAcrossColumns(): Read<M, boolean>;
  set footnotesSpanAcrossColumns(value: boolean);

  /** The minimum vertical space between the bottom of the text column and the first footnote. */
  get footnotesMinimumSpacing(): Read<M, number>;
  set footnotesMinimumSpacing(value: MeasurementValue);

  /** The vertical space between footnotes. */
  get footnotesSpaceBetween(): Read<M, number>;
  set footnotesSpaceBetween(value: MeasurementValue);

  /** Whether the text is vertically balanced across all columns in the frame. */
  get verticalBalanceColumns(): Read<M, boolean>;
  set verticalBalanceColumns(value: boolean);
}
