/**
 * TextFramePreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
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
 * Text-frame column layout, inset, vertical-justification, and baseline-grid defaults, applicable at the application/document default level, on a live frame, or on an object style.
 */
export interface TextFramePreference {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Application | Document | TextFrame | EndnoteTextFrame | ObjectStyle;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<TextFramePreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TextFramePreference, 'single'>);
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
  readonly constructorName: 'TextFramePreference';
  /** Resolves the proxy into the individual {@link TextFramePreference} objects it stands for. */
  getElements(): TextFramePreference[];
  /** The number of columns in the text frame. Note: Depending on the value of use fixed column width, the number of columns can change automatically when the text frame size changes. */
  get textColumnCount(): number;
  set textColumnCount(value: number);
  /** The space between columns in the text frame. */
  get textColumnGutter(): number;
  set textColumnGutter(value: MeasurementValue);
  /** The column width of the columns in the text frame. */
  get textColumnFixedWidth(): number;
  set textColumnFixedWidth(value: MeasurementValue);
  /** If true, maintains column width when the text frame is resized. If false, causes columns to resize when the text frame is resized. Note: When true, resizing the frame can change the number of columns in the frame. */
  get useFixedColumnWidth(): boolean;
  set useFixedColumnWidth(value: boolean);
  /** The amount to offset text from the edges of the text frame, specified either as a single value applied uniformly to all sides of the text frame or as an array of 4 values in the format [top inset, left inset, bottom inset, right inset]. */
  get insetSpacing(): number | number[];
  set insetSpacing(value: MeasurementValue | MeasurementValue[]);
  /** The distance between the baseline of the text and the top inset of the text frame or cell. */
  get firstBaselineOffset(): FirstBaseline;
  set firstBaselineOffset(value: FirstBaseline);
  /** The minimum distance between the baseline of the text and the top inset of the text frame or cell. */
  get minimumFirstBaselineOffset(): number;
  set minimumFirstBaselineOffset(value: MeasurementValue);
  /** The vertical alignment of the text content. */
  get verticalJustification(): VerticalJustification;
  set verticalJustification(value: VerticalJustification);
  /** The maximum amount of vertical space between two paragraphs. Note: Valid only when vertical justification is justified; the specified amount is applied in addition to the space before or space after values defined for the paragraph. */
  get verticalThreshold(): number;
  set verticalThreshold(value: MeasurementValue);
  /** If true, ignores text wrap settings for drawn or placed objects in the text frame. */
  get ignoreWrap(): boolean;
  set ignoreWrap(value: boolean);
  /**
   * If true, maintains column width between a min and max range when the text frame is
   * resized.
   *
   * If false, causes columns to resize when the text frame is resized. Note: When true,
   * resizing the frame can change the number of columns in the frame.
   */
  get useFlexibleColumnWidth(): boolean;
  set useFlexibleColumnWidth(value: boolean);
  /** The maximum column width of the columns in the text frame. Use 0 to indicate no upper limit. */
  get textColumnMaxWidth(): number;
  set textColumnMaxWidth(value: MeasurementValue);
  /**
   * Auto-sizing type of text frame.
   *
   * Based on type, reference value is automatically adjusted. For example, for height only
   * type, top-left reference point becomes top-center. Recommended to change auto-sizing
   * type, after setting other auto-sizing attributes
   */
  get autoSizingType(): AutoSizingTypeEnum;
  set autoSizingType(value: AutoSizingTypeEnum);
  /** The reference point for auto sizing of text frame. Reference point is automatically adjusted to the suitable value depending on the auto-sizing type value. As an example, top left reference point becomes top center for height only dimension */
  get autoSizingReferencePoint(): AutoSizingReferenceEnum;
  set autoSizingReferencePoint(value: AutoSizingReferenceEnum);
  /** If true, minimum height value is used during the auto-sizing of text frame. */
  get useMinimumHeightForAutoSizing(): boolean;
  set useMinimumHeightForAutoSizing(value: boolean);
  /** The minimum height for auto-sizing of the text frame. */
  get minimumHeightForAutoSizing(): number;
  set minimumHeightForAutoSizing(value: MeasurementValue);
  /** If true, minimum width value is used during the auto-sizing of text frame. */
  get useMinimumWidthForAutoSizing(): boolean;
  set useMinimumWidthForAutoSizing(value: boolean);
  /** The minimum width for auto-sizing of the text frame. */
  get minimumWidthForAutoSizing(): number;
  set minimumWidthForAutoSizing(value: MeasurementValue);
  /** If true, line-breaks are not introduced after auto sizing. */
  get useNoLineBreaksForAutoSizing(): boolean;
  set useNoLineBreaksForAutoSizing(value: boolean);
  /** If true, enable overrides to text frame vertical column rule options. */
  get columnRuleOverride(): boolean;
  set columnRuleOverride(value: boolean);
  /** The vertical offset of the column rule — the rule drawn between the frame's text columns. */
  get columnRuleOffset(): number;
  set columnRuleOffset(value: number);
  /** The column rule's inset from the top of the text frame. */
  get columnRuleTopInset(): number;
  set columnRuleTopInset(value: number);
  /** If true, enable inset chain override. */
  get columnRuleInsetChainOverride(): boolean;
  set columnRuleInsetChainOverride(value: boolean);
  /** The column rule's inset from the bottom of the text frame. */
  get columnRuleBottomInset(): number;
  set columnRuleBottomInset(value: number);
  /** The weight of the column rule's stroke. */
  get columnRuleStrokeWidth(): number;
  set columnRuleStrokeWidth(value: number);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the column rule's stroke. */
  get columnRuleStrokeColor(): Swatch;
  set columnRuleStrokeColor(value: Swatch);
  /** The name of the stroke style applied to the column rule. */
  get columnRuleStrokeType(): StrokeStyle;
  set columnRuleStrokeType(value: StrokeStyle);
  /** The tint (as a percentage) of the column rule's stroke color. */
  get columnRuleStrokeTint(): number;
  set columnRuleStrokeTint(value: number);
  /** If true, enable overprint override. */
  get columnRuleOverprintOverride(): boolean;
  set columnRuleOverprintOverride(value: boolean);
  /** If true, enable overrides to document footnote options. */
  get footnotesEnableOverrides(): boolean;
  set footnotesEnableOverrides(value: boolean);
  /** If true, enable straddling footnotes. */
  get footnotesSpanAcrossColumns(): boolean;
  set footnotesSpanAcrossColumns(value: boolean);
  /** The minimum vertical space between the bottom of the text column and the first footnote. */
  get footnotesMinimumSpacing(): number;
  set footnotesMinimumSpacing(value: MeasurementValue);
  /** The vertical space between footnotes. */
  get footnotesSpaceBetween(): number;
  set footnotesSpaceBetween(value: MeasurementValue);
  /** Whether the text is vertically balanced across all columns in the frame. */
  get verticalBalanceColumns(): boolean;
  set verticalBalanceColumns(value: boolean);
}


/**
 * The broadcast proxy for {@link TextFramePreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link TextFramePreference} there.
 */
export interface TextFramePreferencePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Application | Document | TextFrame | EndnoteTextFrame | ObjectStyle)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<TextFramePreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<TextFramePreferencePlural, 'plural'>);
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
  readonly constructorName: 'TextFramePreference';
  /** Resolves the proxy into the individual {@link TextFramePreference} objects it stands for. */
  getElements(): TextFramePreference[];
  /** The number of columns in the text frame. Note: Depending on the value of use fixed column width, the number of columns can change automatically when the text frame size changes. */
  get textColumnCount(): (number)[];
  set textColumnCount(value: number);
  /** The space between columns in the text frame. */
  get textColumnGutter(): (number)[];
  set textColumnGutter(value: MeasurementValue);
  /** The column width of the columns in the text frame. */
  get textColumnFixedWidth(): (number)[];
  set textColumnFixedWidth(value: MeasurementValue);
  /** If true, maintains column width when the text frame is resized. If false, causes columns to resize when the text frame is resized. Note: When true, resizing the frame can change the number of columns in the frame. */
  get useFixedColumnWidth(): (boolean)[];
  set useFixedColumnWidth(value: boolean);
  /** The amount to offset text from the edges of the text frame, specified either as a single value applied uniformly to all sides of the text frame or as an array of 4 values in the format [top inset, left inset, bottom inset, right inset]. */
  get insetSpacing(): (number | number[])[];
  set insetSpacing(value: MeasurementValue | MeasurementValue[]);
  /** The distance between the baseline of the text and the top inset of the text frame or cell. */
  get firstBaselineOffset(): (FirstBaseline)[];
  set firstBaselineOffset(value: FirstBaseline);
  /** The minimum distance between the baseline of the text and the top inset of the text frame or cell. */
  get minimumFirstBaselineOffset(): (number)[];
  set minimumFirstBaselineOffset(value: MeasurementValue);
  /** The vertical alignment of the text content. */
  get verticalJustification(): (VerticalJustification)[];
  set verticalJustification(value: VerticalJustification);
  /** The maximum amount of vertical space between two paragraphs. Note: Valid only when vertical justification is justified; the specified amount is applied in addition to the space before or space after values defined for the paragraph. */
  get verticalThreshold(): (number)[];
  set verticalThreshold(value: MeasurementValue);
  /** If true, ignores text wrap settings for drawn or placed objects in the text frame. */
  get ignoreWrap(): (boolean)[];
  set ignoreWrap(value: boolean);
  /**
   * If true, maintains column width between a min and max range when the text frame is
   * resized.
   *
   * If false, causes columns to resize when the text frame is resized. Note: When true,
   * resizing the frame can change the number of columns in the frame.
   */
  get useFlexibleColumnWidth(): (boolean)[];
  set useFlexibleColumnWidth(value: boolean);
  /** The maximum column width of the columns in the text frame. Use 0 to indicate no upper limit. */
  get textColumnMaxWidth(): (number)[];
  set textColumnMaxWidth(value: MeasurementValue);
  /**
   * Auto-sizing type of text frame.
   *
   * Based on type, reference value is automatically adjusted. For example, for height only
   * type, top-left reference point becomes top-center. Recommended to change auto-sizing
   * type, after setting other auto-sizing attributes
   */
  get autoSizingType(): (AutoSizingTypeEnum)[];
  set autoSizingType(value: AutoSizingTypeEnum);
  /** The reference point for auto sizing of text frame. Reference point is automatically adjusted to the suitable value depending on the auto-sizing type value. As an example, top left reference point becomes top center for height only dimension */
  get autoSizingReferencePoint(): (AutoSizingReferenceEnum)[];
  set autoSizingReferencePoint(value: AutoSizingReferenceEnum);
  /** If true, minimum height value is used during the auto-sizing of text frame. */
  get useMinimumHeightForAutoSizing(): (boolean)[];
  set useMinimumHeightForAutoSizing(value: boolean);
  /** The minimum height for auto-sizing of the text frame. */
  get minimumHeightForAutoSizing(): (number)[];
  set minimumHeightForAutoSizing(value: MeasurementValue);
  /** If true, minimum width value is used during the auto-sizing of text frame. */
  get useMinimumWidthForAutoSizing(): (boolean)[];
  set useMinimumWidthForAutoSizing(value: boolean);
  /** The minimum width for auto-sizing of the text frame. */
  get minimumWidthForAutoSizing(): (number)[];
  set minimumWidthForAutoSizing(value: MeasurementValue);
  /** If true, line-breaks are not introduced after auto sizing. */
  get useNoLineBreaksForAutoSizing(): (boolean)[];
  set useNoLineBreaksForAutoSizing(value: boolean);
  /** If true, enable overrides to text frame vertical column rule options. */
  get columnRuleOverride(): (boolean)[];
  set columnRuleOverride(value: boolean);
  /** The vertical offset of the column rule — the rule drawn between the frame's text columns. */
  get columnRuleOffset(): (number)[];
  set columnRuleOffset(value: number);
  /** The column rule's inset from the top of the text frame. */
  get columnRuleTopInset(): (number)[];
  set columnRuleTopInset(value: number);
  /** If true, enable inset chain override. */
  get columnRuleInsetChainOverride(): (boolean)[];
  set columnRuleInsetChainOverride(value: boolean);
  /** The column rule's inset from the bottom of the text frame. */
  get columnRuleBottomInset(): (number)[];
  set columnRuleBottomInset(value: number);
  /** The weight of the column rule's stroke. */
  get columnRuleStrokeWidth(): (number)[];
  set columnRuleStrokeWidth(value: number);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the column rule's stroke. */
  get columnRuleStrokeColor(): (Swatch)[];
  set columnRuleStrokeColor(value: Swatch);
  /** The name of the stroke style applied to the column rule. */
  get columnRuleStrokeType(): (StrokeStyle)[];
  set columnRuleStrokeType(value: StrokeStyle);
  /** The tint (as a percentage) of the column rule's stroke color. */
  get columnRuleStrokeTint(): (number)[];
  set columnRuleStrokeTint(value: number);
  /** If true, enable overprint override. */
  get columnRuleOverprintOverride(): (boolean)[];
  set columnRuleOverprintOverride(value: boolean);
  /** If true, enable overrides to document footnote options. */
  get footnotesEnableOverrides(): (boolean)[];
  set footnotesEnableOverrides(value: boolean);
  /** If true, enable straddling footnotes. */
  get footnotesSpanAcrossColumns(): (boolean)[];
  set footnotesSpanAcrossColumns(value: boolean);
  /** The minimum vertical space between the bottom of the text column and the first footnote. */
  get footnotesMinimumSpacing(): (number)[];
  set footnotesMinimumSpacing(value: MeasurementValue);
  /** The vertical space between footnotes. */
  get footnotesSpaceBetween(): (number)[];
  set footnotesSpaceBetween(value: MeasurementValue);
  /** Whether the text is vertically balanced across all columns in the frame. */
  get verticalBalanceColumns(): (boolean)[];
  set verticalBalanceColumns(value: boolean);
}
