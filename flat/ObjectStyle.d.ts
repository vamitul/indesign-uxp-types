/**
 * ObjectStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { ObjectStyleGroup } from './ObjectStyleGroup';
import type { GraphicAttributesBase } from './_base/GraphicAttributes';
import type { ObjectStyleExportTagMaps } from './ObjectStyleExportTagMaps';
import type { Preferences } from './Preferences';
import type { ObjectExportOption } from './ObjectExportOption';
import type { TransparencySetting } from './TransparencySetting';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { ObjectStyleObjectEffectsCategorySettings } from './ObjectStyleObjectEffectsCategorySettings';
import type { ObjectStyleStrokeEffectsCategorySettings } from './ObjectStyleStrokeEffectsCategorySettings';
import type { ObjectStyleFillEffectsCategorySettings } from './ObjectStyleFillEffectsCategorySettings';
import type { ObjectStyleContentEffectsCategorySettings } from './ObjectStyleContentEffectsCategorySettings';
import type { TransformAttributeOption } from './TransformAttributeOption';
import type { FlexLayoutAttributeOption } from './FlexLayoutAttributeOption';
import type { TextFramePreference } from './TextFramePreference';
import type { BaselineFrameGridOption } from './BaselineFrameGridOption';
import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { TextWrapPreference } from './TextWrapPreference';
import type { StoryPreference } from './StoryPreference';
import type { FrameFittingOption } from './FrameFittingOption';
import type { ParagraphStyle } from './ParagraphStyle';
import type { LocationOptions } from './Enums/LocationOptions';
import type { EpubAriaLabelSourceType } from './Enums/EpubAriaLabelSourceType';
import type { DimensionAttributes } from './Enums/DimensionAttributes';
import type { PositionAttributes } from './Enums/PositionAttributes';
import type { ObjectStyles } from './ObjectStyles';
import type { FlexObject } from './FlexObject';
import type { ArrowHead } from './Enums/ArrowHead';
import type { ArrowHeadAlignmentEnum } from './Enums/ArrowHeadAlignmentEnum';
import type { CornerOptions } from './Enums/CornerOptions';
import type { EndCap } from './Enums/EndCap';
import type { EndJoin } from './Enums/EndJoin';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { FilePath } from './_base/Types';
import type { InDesignEventMap } from './_base/Events';
import type { MeasurementValue } from './_base/Types';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
import type { StrokeAlignment } from './Enums/StrokeAlignment';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
/**
 * A named object style definition, held in a document's or the application's {@link ObjectStyles} collection (optionally nested inside an {@link ObjectStyleGroup}).
 *
 * An enabling flag gates each category independently — {@link enableFill}, {@link enableStroke},
 * {@link enableParagraphStyle}, and similar — so applying the style overrides only the
 * categories it enables, leaving everything else on the target object untouched.
 *
 * It carries the same fill, stroke, gradient, overprint, corner-effect and arrowhead
 * attributes any drawable object has, but none of the geometry — a gradient's start point and
 * length, and the dash-and-gap pattern, belong to the drawn object rather than to the style.
 */
export interface ObjectStyle {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Document | Application | ObjectStyleGroup;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<ObjectStyle, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ObjectStyle, 'single'>);
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
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItem. */
  get fillColor(): Swatch;
  set fillColor(value: Swatch | string);
  /** The percent of tint to use in the PageItem's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): number;
  set fillTint(value: number);
  /** If true, the PageItem's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. */
  get overprintFill(): boolean;
  set overprintFill(value: boolean);
  /** The weight (in points) to apply to the PageItem's stroke. */
  get strokeWeight(): number;
  set strokeWeight(value: MeasurementValue);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): number;
  set miterLimit(value: number);
  /** The end shape of an open path. */
  get endCap(): EndCap;
  set endCap(value: EndCap);
  /** The corner join applied to the PageItem. */
  get endJoin(): EndJoin;
  set endJoin(value: EndJoin);
  /** The name of the stroke style to apply. */
  get strokeType(): StrokeStyle;
  set strokeType(value: StrokeStyle | string);
  /** The arrowhead applied to the start of the path. */
  get leftLineEnd(): ArrowHead;
  set leftLineEnd(value: ArrowHead);
  /** The arrowhead applied to the end of the path. */
  get rightLineEnd(): ArrowHead;
  set rightLineEnd(value: ArrowHead);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItem. */
  get strokeColor(): Swatch;
  set strokeColor(value: Swatch | string);
  /** The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get strokeTint(): number;
  set strokeTint(value: number);
  /** The angle of a linear gradient applied to the fill of the PageItem. (Range: -180 to 180) */
  get gradientFillAngle(): number;
  set gradientFillAngle(value: number);
  /** The angle of a linear gradient applied to the stroke of the PageItem. (Range: -180 to 180) */
  get gradientStrokeAngle(): number;
  set gradientStrokeAngle(value: number);
  /** If true, the PageItem's stroke color overprints any underlying objects. If false, the stroke color knocks out the underlying colors. */
  get overprintStroke(): boolean;
  set overprintStroke(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): Swatch;
  set gapColor(value: Swatch);
  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get gapTint(): number;
  set gapTint(value: number);
  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): boolean;
  set overprintGap(value: boolean);
  /** The stroke alignment applied to the PageItem. */
  get strokeAlignment(): StrokeAlignment;
  set strokeAlignment(value: StrokeAlignment);
  /** If true, the PageItem does not print. */
  get nonprinting(): boolean;
  set nonprinting(value: boolean);
  /**
   * The corner shape applied to the top left corner of rectangular shapes, and
   * to all corners of non-rectangular shapes.
   *
   * Differs from {@link endJoin}: this lets you set a radius for the corner,
   * while an end join's rounded or beveled effect instead depends on the
   * stroke weight.
   */
  get topLeftCornerOption(): CornerOptions;
  set topLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the top right corner of rectangular shapes */
  get topRightCornerOption(): CornerOptions;
  set topRightCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get bottomLeftCornerOption(): CornerOptions;
  set bottomLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get bottomRightCornerOption(): CornerOptions;
  set bottomRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get topLeftCornerRadius(): number;
  set topLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get topRightCornerRadius(): number;
  set topRightCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get bottomLeftCornerRadius(): number;
  set bottomLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get bottomRightCornerRadius(): number;
  set bottomRightCornerRadius(value: MeasurementValue);
  /** The arrowhead alignment applied to the PageItem. */
  get arrowHeadAlignment(): ArrowHeadAlignmentEnum;
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum);
  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000) */
  get leftArrowHeadScale(): number;
  set leftArrowHeadScale(value: number);
  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000) */
  get rightArrowHeadScale(): number;
  set rightArrowHeadScale(value: number);
  /** The object's DOM class name. */
  readonly constructorName: 'ObjectStyle';
  /** Resolves the proxy into the individual {@link ObjectStyle} objects it stands for. */
  getElements(): ObjectStyle[];
  /** The unique ID of the object style, stable across saves and reopens. */
  readonly id: number;
  /** The name of the object style. */
  get name(): string;
  set name(value: string);
  /** The style this style is based on. Accepts an {@link ObjectStyle} or its name. */
  get basedOn(): ObjectStyle | string;
  set basedOn(value: ObjectStyle | string);
  /** A collection of object style export tag maps, mapping the style to markup tags for each export format. */
  readonly objectStyleExportTagMaps: ObjectStyleExportTagMaps;
  /** A collection of preferences objects holding this style's default settings for each preference category. */
  readonly preferences: Preferences;
  /** Export options (alt text, tagging, reflowable-format conversion) applied by this style. */
  readonly objectExportOptions: ObjectExportOption;
  /** Transparency settings applied by this style. */
  readonly transparencySettings: TransparencySetting;
  /** Stroke transparency settings applied by this style. */
  readonly strokeTransparencySettings: StrokeTransparencySetting;
  /** Fill transparency settings applied by this style. */
  readonly fillTransparencySettings: FillTransparencySetting;
  /** Content (placed graphic or text) transparency settings applied by this style. */
  readonly contentTransparencySettings: ContentTransparencySetting;
  /** Which object-effect categories this style enables. */
  readonly objectEffectsEnablingSettings: ObjectStyleObjectEffectsCategorySettings;
  /** Which stroke-effect categories this style enables. */
  readonly strokeEffectsEnablingSettings: ObjectStyleStrokeEffectsCategorySettings;
  /** Which fill-effect categories this style enables. */
  readonly fillEffectsEnablingSettings: ObjectStyleFillEffectsCategorySettings;
  /** Which content-effect categories this style enables. */
  readonly contentEffectsEnablingSettings: ObjectStyleContentEffectsCategorySettings;
  /** If `true`, generates a CSS class attribute for the style on export. */
  get includeClass(): boolean;
  set includeClass(value: boolean);
  /** The ARIA role to emit for objects in this style, as recommended by the IDPF, when exporting to EPUB. */
  get epubAriaRole(): string;
  set epubAriaRole(value: string);
  /** The ARIA label to emit for objects in this style, as recommended by the IDPF, when exporting to EPUB. */
  get epubAriaLabel(): string;
  set epubAriaLabel(value: string);
  /** The source used to generate the ARIA label during EPUB export. */
  get epubAriaLabelSourceType(): EpubAriaLabelSourceType;
  set epubAriaLabelSourceType(value: EpubAriaLabelSourceType);
  /** If `true`, emits CSS for this style when exporting to EPUB or HTML. */
  get emitCss(): boolean;
  set emitCss(value: boolean);
  /** The dimension and position attribute overrides this style applies to any page item it is used on. */
  get transformAttributeOptions(): TransformAttributeOption;
  set transformAttributeOptions(value: TransformAttributeOption);
  /** If `true`, this style enables its {@link transformAttributeOptions} (dimension and position) overrides. */
  get enableTransformAttributes(): boolean;
  set enableTransformAttributes(value: boolean);
  /** If `true`, this style enables auto-sizing text frame options. */
  get enableTextFrameAutoSizingOptions(): boolean;
  set enableTextFrameAutoSizingOptions(value: boolean);
  /** If `true`, this style enables text frame column rule options. */
  get enableTextFrameColumnRuleOptions(): boolean;
  set enableTextFrameColumnRuleOptions(value: boolean);
  /** If `true`, this style enables its {@link flexLayoutAttributeOptions} on a {@link FlexObject}. */
  get enableFlexLayoutAttributes(): boolean;
  set enableFlexLayoutAttributes(value: boolean);
  /** The flex layout attribute overrides this style applies to a {@link FlexObject}. */
  get flexLayoutAttributeOptions(): FlexLayoutAttributeOption;
  set flexLayoutAttributeOptions(value: FlexLayoutAttributeOption);
  /** If `true`, this style applies an EPUB export tag and CSS class. */
  get enableExportTagging(): boolean;
  set enableExportTagging(value: boolean);
  /** If `true`, this style applies alt-text export options. */
  get enableObjectExportAltTextOptions(): boolean;
  set enableObjectExportAltTextOptions(value: boolean);
  /** If `true`, this style applies tagged-PDF export options. */
  get enableObjectExportTaggedPdfOptions(): boolean;
  set enableObjectExportTaggedPdfOptions(value: boolean);
  /** If `true`, this style applies EPUB export options. */
  get enableObjectExportEpubOptions(): boolean;
  set enableObjectExportEpubOptions(value: boolean);
  /** The paragraph style this object style applies to the frame's text. Accepts a {@link ParagraphStyle} or its name. */
  get appliedParagraphStyle(): ParagraphStyle | string;
  set appliedParagraphStyle(value: ParagraphStyle | string);
  /**
   * If `true`, applies each paragraph's {@link ParagraphStyle.nextStyle} chain
   * starting from {@link appliedParagraphStyle}'s next style, rather than
   * reapplying {@link appliedParagraphStyle} to every paragraph.
   */
  get applyNextParagraphStyle(): boolean;
  set applyNextParagraphStyle(value: boolean);
  /** If `true`, this style enables its fill attributes. */
  get enableFill(): boolean;
  set enableFill(value: boolean);
  /** If `true`, this style enables its stroke attributes. */
  get enableStroke(): boolean;
  set enableStroke(value: boolean);
  /** If `true`, this style enables {@link appliedParagraphStyle}. */
  get enableParagraphStyle(): boolean;
  set enableParagraphStyle(value: boolean);
  /** If `true`, this style enables general text frame options. */
  get enableTextFrameGeneralOptions(): boolean;
  set enableTextFrameGeneralOptions(value: boolean);
  /** If `true`, this style enables baseline text frame options. */
  get enableTextFrameBaselineOptions(): boolean;
  set enableTextFrameBaselineOptions(value: boolean);
  /** If `true`, this style enables its {@link storyPreferences}. */
  get enableStoryOptions(): boolean;
  set enableStoryOptions(value: boolean);
  /** If `true`, this style enables its {@link textWrapPreferences} plus contour and non-printing settings. */
  get enableTextWrapAndOthers(): boolean;
  set enableTextWrapAndOthers(value: boolean);
  /** If `true`, this style enables its {@link anchoredObjectSettings}. */
  get enableAnchoredObjectOptions(): boolean;
  set enableAnchoredObjectOptions(value: boolean);
  /** Text frame preference settings this style applies. */
  get textFramePreferences(): TextFramePreference;
  set textFramePreferences(value: TextFramePreference);
  /** Baseline frame grid option settings this style applies. */
  get baselineFrameGridOptions(): BaselineFrameGridOption;
  set baselineFrameGridOptions(value: BaselineFrameGridOption);
  /** Anchored object settings this style applies. */
  get anchoredObjectSettings(): AnchoredObjectSetting;
  set anchoredObjectSettings(value: AnchoredObjectSetting);
  /** Default text wrap settings this style applies for wrapping text around the object. */
  get textWrapPreferences(): TextWrapPreference;
  set textWrapPreferences(value: TextWrapPreference);
  /** Story preference settings this style applies. */
  get storyPreferences(): StoryPreference;
  set storyPreferences(value: StoryPreference);
  /** The frame fitting options this style applies to placed or pasted content. */
  get frameFittingOptions(): FrameFittingOption;
  set frameFittingOptions(value: FrameFittingOption);
  /** If `true`, this style enables its {@link frameFittingOptions}. */
  get enableFrameFittingOptions(): boolean;
  set enableFrameFittingOptions(value: boolean);
  /** If `true`, this style enables its stroke and corner options. */
  get enableStrokeAndCornerOptions(): boolean;
  set enableStrokeAndCornerOptions(value: boolean);
  /** If `true`, this style enables text frame footnote options. */
  get enableTextFrameFootnoteOptions(): boolean;
  set enableTextFrameFootnoteOptions(value: boolean);
  /**
   * Enables or disables one of this style's dimension attributes.
   * @param whichAttributes The dimension attribute to enable or disable.
   * @param attributeState `true` to enable, `false` to disable.
   */
  setDimensionAttributeState(whichAttributes: DimensionAttributes, attributeState: boolean): boolean;
  /**
   * Enables or disables one of this style's position attributes.
   * @param whichAttributes The position attribute to enable or disable.
   * @param attributeState `true` to enable, `false` to disable.
   */
  setPositionAttributeState(whichAttributes: PositionAttributes, attributeState: boolean): boolean;
  /** Duplicates the object style. */
  duplicate(): ObjectStyle;
  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(
    to: LocationOptions,
    reference?: ObjectStyle | ObjectStyleGroup | Document | Application,
  ): ObjectStyle;
  /**
   * Deletes the style.
   * @param replacingWith The style applied to any objects currently tagged with this style. Objects are left unstyled if omitted.
   */
  remove(replacingWith?: ObjectStyle | string): void;
}


/**
 * The broadcast proxy for {@link ObjectStyle} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link ObjectStyle} there.
 */
export interface ObjectStylePlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Document | Application | ObjectStyleGroup)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<ObjectStylePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ObjectStylePlural, 'plural'>);
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
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItem. */
  get fillColor(): (Swatch)[];
  set fillColor(value: Swatch | string);
  /** The percent of tint to use in the PageItem's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): (number)[];
  set fillTint(value: number);
  /** If true, the PageItem's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. */
  get overprintFill(): (boolean)[];
  set overprintFill(value: boolean);
  /** The weight (in points) to apply to the PageItem's stroke. */
  get strokeWeight(): (number)[];
  set strokeWeight(value: MeasurementValue);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): (number)[];
  set miterLimit(value: number);
  /** The end shape of an open path. */
  get endCap(): (EndCap)[];
  set endCap(value: EndCap);
  /** The corner join applied to the PageItem. */
  get endJoin(): (EndJoin)[];
  set endJoin(value: EndJoin);
  /** The name of the stroke style to apply. */
  get strokeType(): (StrokeStyle)[];
  set strokeType(value: StrokeStyle | string);
  /** The arrowhead applied to the start of the path. */
  get leftLineEnd(): (ArrowHead)[];
  set leftLineEnd(value: ArrowHead);
  /** The arrowhead applied to the end of the path. */
  get rightLineEnd(): (ArrowHead)[];
  set rightLineEnd(value: ArrowHead);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItem. */
  get strokeColor(): (Swatch)[];
  set strokeColor(value: Swatch | string);
  /** The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get strokeTint(): (number)[];
  set strokeTint(value: number);
  /** The angle of a linear gradient applied to the fill of the PageItem. (Range: -180 to 180) */
  get gradientFillAngle(): (number)[];
  set gradientFillAngle(value: number);
  /** The angle of a linear gradient applied to the stroke of the PageItem. (Range: -180 to 180) */
  get gradientStrokeAngle(): (number)[];
  set gradientStrokeAngle(value: number);
  /** If true, the PageItem's stroke color overprints any underlying objects. If false, the stroke color knocks out the underlying colors. */
  get overprintStroke(): (boolean)[];
  set overprintStroke(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): (Swatch)[];
  set gapColor(value: Swatch);
  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get gapTint(): (number)[];
  set gapTint(value: number);
  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): (boolean)[];
  set overprintGap(value: boolean);
  /** The stroke alignment applied to the PageItem. */
  get strokeAlignment(): (StrokeAlignment)[];
  set strokeAlignment(value: StrokeAlignment);
  /** If true, the PageItem does not print. */
  get nonprinting(): (boolean)[];
  set nonprinting(value: boolean);
  /**
   * The corner shape applied to the top left corner of rectangular shapes, and
   * to all corners of non-rectangular shapes.
   *
   * Differs from {@link endJoin}: this lets you set a radius for the corner,
   * while an end join's rounded or beveled effect instead depends on the
   * stroke weight.
   */
  get topLeftCornerOption(): (CornerOptions)[];
  set topLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the top right corner of rectangular shapes */
  get topRightCornerOption(): (CornerOptions)[];
  set topRightCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get bottomLeftCornerOption(): (CornerOptions)[];
  set bottomLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get bottomRightCornerOption(): (CornerOptions)[];
  set bottomRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get topLeftCornerRadius(): (number)[];
  set topLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get topRightCornerRadius(): (number)[];
  set topRightCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get bottomLeftCornerRadius(): (number)[];
  set bottomLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get bottomRightCornerRadius(): (number)[];
  set bottomRightCornerRadius(value: MeasurementValue);
  /** The arrowhead alignment applied to the PageItem. */
  get arrowHeadAlignment(): (ArrowHeadAlignmentEnum)[];
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum);
  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000) */
  get leftArrowHeadScale(): (number)[];
  set leftArrowHeadScale(value: number);
  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000) */
  get rightArrowHeadScale(): (number)[];
  set rightArrowHeadScale(value: number);
  /** The object's DOM class name. */
  readonly constructorName: 'ObjectStyle';
  /** Resolves the proxy into the individual {@link ObjectStyle} objects it stands for. */
  getElements(): ObjectStyle[];
  /** The unique ID of the object style, stable across saves and reopens. */
  readonly id: (number)[];
  /** The name of the object style. */
  get name(): (string)[];
  set name(value: string);
  /** The style this style is based on. Accepts an {@link ObjectStyle} or its name. */
  get basedOn(): (ObjectStyle | string)[];
  set basedOn(value: ObjectStyle | string);
  /** A collection of object style export tag maps, mapping the style to markup tags for each export format. */
  readonly objectStyleExportTagMaps: ObjectStyleExportTagMaps;
  /** A collection of preferences objects holding this style's default settings for each preference category. */
  readonly preferences: Preferences;
  /** Export options (alt text, tagging, reflowable-format conversion) applied by this style. */
  readonly objectExportOptions: (ObjectExportOption)[];
  /** Transparency settings applied by this style. */
  readonly transparencySettings: (TransparencySetting)[];
  /** Stroke transparency settings applied by this style. */
  readonly strokeTransparencySettings: (StrokeTransparencySetting)[];
  /** Fill transparency settings applied by this style. */
  readonly fillTransparencySettings: (FillTransparencySetting)[];
  /** Content (placed graphic or text) transparency settings applied by this style. */
  readonly contentTransparencySettings: (ContentTransparencySetting)[];
  /** Which object-effect categories this style enables. */
  readonly objectEffectsEnablingSettings: (ObjectStyleObjectEffectsCategorySettings)[];
  /** Which stroke-effect categories this style enables. */
  readonly strokeEffectsEnablingSettings: (ObjectStyleStrokeEffectsCategorySettings)[];
  /** Which fill-effect categories this style enables. */
  readonly fillEffectsEnablingSettings: (ObjectStyleFillEffectsCategorySettings)[];
  /** Which content-effect categories this style enables. */
  readonly contentEffectsEnablingSettings: (ObjectStyleContentEffectsCategorySettings)[];
  /** If `true`, generates a CSS class attribute for the style on export. */
  get includeClass(): (boolean)[];
  set includeClass(value: boolean);
  /** The ARIA role to emit for objects in this style, as recommended by the IDPF, when exporting to EPUB. */
  get epubAriaRole(): (string)[];
  set epubAriaRole(value: string);
  /** The ARIA label to emit for objects in this style, as recommended by the IDPF, when exporting to EPUB. */
  get epubAriaLabel(): (string)[];
  set epubAriaLabel(value: string);
  /** The source used to generate the ARIA label during EPUB export. */
  get epubAriaLabelSourceType(): (EpubAriaLabelSourceType)[];
  set epubAriaLabelSourceType(value: EpubAriaLabelSourceType);
  /** If `true`, emits CSS for this style when exporting to EPUB or HTML. */
  get emitCss(): (boolean)[];
  set emitCss(value: boolean);
  /** The dimension and position attribute overrides this style applies to any page item it is used on. */
  get transformAttributeOptions(): (TransformAttributeOption)[];
  set transformAttributeOptions(value: TransformAttributeOption);
  /** If `true`, this style enables its {@link transformAttributeOptions} (dimension and position) overrides. */
  get enableTransformAttributes(): (boolean)[];
  set enableTransformAttributes(value: boolean);
  /** If `true`, this style enables auto-sizing text frame options. */
  get enableTextFrameAutoSizingOptions(): (boolean)[];
  set enableTextFrameAutoSizingOptions(value: boolean);
  /** If `true`, this style enables text frame column rule options. */
  get enableTextFrameColumnRuleOptions(): (boolean)[];
  set enableTextFrameColumnRuleOptions(value: boolean);
  /** If `true`, this style enables its {@link flexLayoutAttributeOptions} on a {@link FlexObject}. */
  get enableFlexLayoutAttributes(): (boolean)[];
  set enableFlexLayoutAttributes(value: boolean);
  /** The flex layout attribute overrides this style applies to a {@link FlexObject}. */
  get flexLayoutAttributeOptions(): (FlexLayoutAttributeOption)[];
  set flexLayoutAttributeOptions(value: FlexLayoutAttributeOption);
  /** If `true`, this style applies an EPUB export tag and CSS class. */
  get enableExportTagging(): (boolean)[];
  set enableExportTagging(value: boolean);
  /** If `true`, this style applies alt-text export options. */
  get enableObjectExportAltTextOptions(): (boolean)[];
  set enableObjectExportAltTextOptions(value: boolean);
  /** If `true`, this style applies tagged-PDF export options. */
  get enableObjectExportTaggedPdfOptions(): (boolean)[];
  set enableObjectExportTaggedPdfOptions(value: boolean);
  /** If `true`, this style applies EPUB export options. */
  get enableObjectExportEpubOptions(): (boolean)[];
  set enableObjectExportEpubOptions(value: boolean);
  /** The paragraph style this object style applies to the frame's text. Accepts a {@link ParagraphStyle} or its name. */
  get appliedParagraphStyle(): (ParagraphStyle | string)[];
  set appliedParagraphStyle(value: ParagraphStyle | string);
  /**
   * If `true`, applies each paragraph's {@link ParagraphStyle.nextStyle} chain
   * starting from {@link appliedParagraphStyle}'s next style, rather than
   * reapplying {@link appliedParagraphStyle} to every paragraph.
   */
  get applyNextParagraphStyle(): (boolean)[];
  set applyNextParagraphStyle(value: boolean);
  /** If `true`, this style enables its fill attributes. */
  get enableFill(): (boolean)[];
  set enableFill(value: boolean);
  /** If `true`, this style enables its stroke attributes. */
  get enableStroke(): (boolean)[];
  set enableStroke(value: boolean);
  /** If `true`, this style enables {@link appliedParagraphStyle}. */
  get enableParagraphStyle(): (boolean)[];
  set enableParagraphStyle(value: boolean);
  /** If `true`, this style enables general text frame options. */
  get enableTextFrameGeneralOptions(): (boolean)[];
  set enableTextFrameGeneralOptions(value: boolean);
  /** If `true`, this style enables baseline text frame options. */
  get enableTextFrameBaselineOptions(): (boolean)[];
  set enableTextFrameBaselineOptions(value: boolean);
  /** If `true`, this style enables its {@link storyPreferences}. */
  get enableStoryOptions(): (boolean)[];
  set enableStoryOptions(value: boolean);
  /** If `true`, this style enables its {@link textWrapPreferences} plus contour and non-printing settings. */
  get enableTextWrapAndOthers(): (boolean)[];
  set enableTextWrapAndOthers(value: boolean);
  /** If `true`, this style enables its {@link anchoredObjectSettings}. */
  get enableAnchoredObjectOptions(): (boolean)[];
  set enableAnchoredObjectOptions(value: boolean);
  /** Text frame preference settings this style applies. */
  get textFramePreferences(): (TextFramePreference)[];
  set textFramePreferences(value: TextFramePreference);
  /** Baseline frame grid option settings this style applies. */
  get baselineFrameGridOptions(): (BaselineFrameGridOption)[];
  set baselineFrameGridOptions(value: BaselineFrameGridOption);
  /** Anchored object settings this style applies. */
  get anchoredObjectSettings(): (AnchoredObjectSetting)[];
  set anchoredObjectSettings(value: AnchoredObjectSetting);
  /** Default text wrap settings this style applies for wrapping text around the object. */
  get textWrapPreferences(): (TextWrapPreference)[];
  set textWrapPreferences(value: TextWrapPreference);
  /** Story preference settings this style applies. */
  get storyPreferences(): (StoryPreference)[];
  set storyPreferences(value: StoryPreference);
  /** The frame fitting options this style applies to placed or pasted content. */
  get frameFittingOptions(): (FrameFittingOption)[];
  set frameFittingOptions(value: FrameFittingOption);
  /** If `true`, this style enables its {@link frameFittingOptions}. */
  get enableFrameFittingOptions(): (boolean)[];
  set enableFrameFittingOptions(value: boolean);
  /** If `true`, this style enables its stroke and corner options. */
  get enableStrokeAndCornerOptions(): (boolean)[];
  set enableStrokeAndCornerOptions(value: boolean);
  /** If `true`, this style enables text frame footnote options. */
  get enableTextFrameFootnoteOptions(): (boolean)[];
  set enableTextFrameFootnoteOptions(value: boolean);
  /**
   * Enables or disables one of this style's dimension attributes.
   * @param whichAttributes The dimension attribute to enable or disable.
   * @param attributeState `true` to enable, `false` to disable.
   */
  setDimensionAttributeState(whichAttributes: DimensionAttributes, attributeState: boolean): (boolean)[];
  /**
   * Enables or disables one of this style's position attributes.
   * @param whichAttributes The position attribute to enable or disable.
   * @param attributeState `true` to enable, `false` to disable.
   */
  setPositionAttributeState(whichAttributes: PositionAttributes, attributeState: boolean): (boolean)[];
  /** Duplicates the object style. */
  duplicate(): (ObjectStyle)[];
  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(
    to: LocationOptions,
    reference?: ObjectStyle | ObjectStyleGroup | Document | Application,
  ): ObjectStyle;
  /**
   * Deletes the style.
   * @param replacingWith The style applied to any objects currently tagged with this style. Objects are left unstyled if omitted.
   */
  remove(replacingWith?: ObjectStyle | string): (void)[];
}
