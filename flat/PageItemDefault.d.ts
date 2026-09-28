/**
 * PageItemDefault.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { ObjectStyle } from './ObjectStyle';
import type { Preferences } from './Preferences';
import type { StrokeStyle } from './StrokeStyle';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { Swatch } from './Swatch';
import type { TransparencySetting } from './TransparencySetting';
import type { ArrowHead } from './Enums/ArrowHead';
import type { ArrowHeadAlignmentEnum } from './Enums/ArrowHeadAlignmentEnum';
import type { CornerOptions } from './Enums/CornerOptions';
import type { EndCap } from './Enums/EndCap';
import type { EndJoin } from './Enums/EndJoin';
import type { StrokeAlignment } from './Enums/StrokeAlignment';
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
 * Application- or document-level default page-item formatting (fill, stroke, object styles) applied to newly created page items.
 */
export interface PageItemDefault {
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
  get properties(): PropertiesGetter<PageItemDefault, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PageItemDefault, 'single'>);
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
  readonly constructorName: 'PageItemDefault';
  /** Resolves the proxy into the individual {@link PageItemDefault} objects it stands for. */
  getElements(): PageItemDefault[];
  /** Opacity, blend mode, and the fill, stroke and content transparency groups applied to new page items — see {@link TransparencySetting}. */
  readonly transparencySettings: TransparencySetting;
  /** Transparency settings for the stroke. */
  readonly strokeTransparencySettings: StrokeTransparencySetting;
  /** Transparency settings for the fill applied to the PageItemDefault. */
  readonly fillTransparencySettings: FillTransparencySetting;
  /** Transparency settings for the content of the PageItemDefault. */
  readonly contentTransparencySettings: ContentTransparencySetting;
  /** A collection of preferences objects. */
  readonly preferences: Preferences;
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
  /** The default graphic object style applied to the PageItemDefault. */
  get appliedGraphicObjectStyle(): ObjectStyle;
  set appliedGraphicObjectStyle(value: ObjectStyle | string);
  /** The default text object style applied to the PageItemDefault. */
  get appliedTextObjectStyle(): ObjectStyle;
  set appliedTextObjectStyle(value: ObjectStyle | string);
  /** The default frame grid object style applied to the PageItemDefault. */
  get appliedGridObjectStyle(): ObjectStyle;
  set appliedGridObjectStyle(value: ObjectStyle | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItemDefault. */
  get fillColor(): Swatch;
  set fillColor(value: Swatch | string);
  /** The percent of tint to use in the PageItemDefault's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): number;
  set fillTint(value: number);
  /** The weight (in points) to apply to the PageItemDefault's stroke. */
  get strokeWeight(): number;
  set strokeWeight(value: MeasurementValue);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): number;
  set miterLimit(value: number);
  /** The end shape of an open path. */
  get endCap(): EndCap;
  set endCap(value: EndCap);
  /** The corner join applied to the PageItemDefault. */
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
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItemDefault. */
  get strokeColor(): Swatch;
  set strokeColor(value: Swatch | string);
  /** The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get strokeTint(): number;
  set strokeTint(value: number);
  /** The angle of a linear gradient applied to the fill of the PageItemDefault. (Range: -180 to 180) */
  get gradientFillAngle(): number;
  set gradientFillAngle(value: number);
  /** The angle of a linear gradient applied to the stroke of the PageItemDefault. (Range: -180 to 180) */
  get gradientStrokeAngle(): number;
  set gradientStrokeAngle(value: number);
  /** If true, the PageItemDefault's stroke color overprints any underlying objects. If false, the stroke color knocks out the underlying colors. */
  get overprintStroke(): boolean;
  set overprintStroke(value: boolean);
  /** If true, the PageItemDefault's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. */
  get overprintFill(): boolean;
  set overprintFill(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): Swatch;
  set gapColor(value: Swatch);
  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get gapTint(): number;
  set gapTint(value: number);
  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): boolean;
  set overprintGap(value: boolean);
  /** The stroke alignment applied to the PageItemDefault. */
  get strokeAlignment(): StrokeAlignment;
  set strokeAlignment(value: StrokeAlignment);
  /** If true, the PageItemDefault does not print. */
  get nonprinting(): boolean;
  set nonprinting(value: boolean);
  /** The arrowhead alignment applied to the PageItemDefault. */
  get arrowHeadAlignment(): ArrowHeadAlignmentEnum;
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum);
  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000) */
  get leftArrowHeadScale(): number;
  set leftArrowHeadScale(value: number);
  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000) */
  get rightArrowHeadScale(): number;
  set rightArrowHeadScale(value: number);
  /**
   * Applies the specified object style.
   * @param using The object style to apply.
   * @param clearingOverrides If true, clears the PageItemDefault's existing attributes before applying the style.
   * @param clearingOverridesThroughRootObjectStyle If true, clears attributes and formatting applied to the PageItemDefault that are not defined in the object style.
   */
  applyObjectStyle(using: ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): void;
  /** Clear overrides for object style */
  clearObjectStyleOverrides(): void;
}


/**
 * The broadcast proxy for {@link PageItemDefault} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PageItemDefault} there.
 */
export interface PageItemDefaultPlural {
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
  get properties(): (PropertiesGetter<PageItemDefaultPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PageItemDefaultPlural, 'plural'>);
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
  readonly constructorName: 'PageItemDefault';
  /** Resolves the proxy into the individual {@link PageItemDefault} objects it stands for. */
  getElements(): PageItemDefault[];
  /** Opacity, blend mode, and the fill, stroke and content transparency groups applied to new page items — see {@link TransparencySetting}. */
  readonly transparencySettings: (TransparencySetting)[];
  /** Transparency settings for the stroke. */
  readonly strokeTransparencySettings: (StrokeTransparencySetting)[];
  /** Transparency settings for the fill applied to the PageItemDefault. */
  readonly fillTransparencySettings: (FillTransparencySetting)[];
  /** Transparency settings for the content of the PageItemDefault. */
  readonly contentTransparencySettings: (ContentTransparencySetting)[];
  /** A collection of preferences objects. */
  readonly preferences: Preferences;
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
  /** The default graphic object style applied to the PageItemDefault. */
  get appliedGraphicObjectStyle(): (ObjectStyle)[];
  set appliedGraphicObjectStyle(value: ObjectStyle | string);
  /** The default text object style applied to the PageItemDefault. */
  get appliedTextObjectStyle(): (ObjectStyle)[];
  set appliedTextObjectStyle(value: ObjectStyle | string);
  /** The default frame grid object style applied to the PageItemDefault. */
  get appliedGridObjectStyle(): (ObjectStyle)[];
  set appliedGridObjectStyle(value: ObjectStyle | string);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItemDefault. */
  get fillColor(): (Swatch)[];
  set fillColor(value: Swatch | string);
  /** The percent of tint to use in the PageItemDefault's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): (number)[];
  set fillTint(value: number);
  /** The weight (in points) to apply to the PageItemDefault's stroke. */
  get strokeWeight(): (number)[];
  set strokeWeight(value: MeasurementValue);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): (number)[];
  set miterLimit(value: number);
  /** The end shape of an open path. */
  get endCap(): (EndCap)[];
  set endCap(value: EndCap);
  /** The corner join applied to the PageItemDefault. */
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
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItemDefault. */
  get strokeColor(): (Swatch)[];
  set strokeColor(value: Swatch | string);
  /** The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get strokeTint(): (number)[];
  set strokeTint(value: number);
  /** The angle of a linear gradient applied to the fill of the PageItemDefault. (Range: -180 to 180) */
  get gradientFillAngle(): (number)[];
  set gradientFillAngle(value: number);
  /** The angle of a linear gradient applied to the stroke of the PageItemDefault. (Range: -180 to 180) */
  get gradientStrokeAngle(): (number)[];
  set gradientStrokeAngle(value: number);
  /** If true, the PageItemDefault's stroke color overprints any underlying objects. If false, the stroke color knocks out the underlying colors. */
  get overprintStroke(): (boolean)[];
  set overprintStroke(value: boolean);
  /** If true, the PageItemDefault's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. */
  get overprintFill(): (boolean)[];
  set overprintFill(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): (Swatch)[];
  set gapColor(value: Swatch);
  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get gapTint(): (number)[];
  set gapTint(value: number);
  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): (boolean)[];
  set overprintGap(value: boolean);
  /** The stroke alignment applied to the PageItemDefault. */
  get strokeAlignment(): (StrokeAlignment)[];
  set strokeAlignment(value: StrokeAlignment);
  /** If true, the PageItemDefault does not print. */
  get nonprinting(): (boolean)[];
  set nonprinting(value: boolean);
  /** The arrowhead alignment applied to the PageItemDefault. */
  get arrowHeadAlignment(): (ArrowHeadAlignmentEnum)[];
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum);
  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000) */
  get leftArrowHeadScale(): (number)[];
  set leftArrowHeadScale(value: number);
  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000) */
  get rightArrowHeadScale(): (number)[];
  set rightArrowHeadScale(value: number);
  /**
   * Applies the specified object style.
   * @param using The object style to apply.
   * @param clearingOverrides If true, clears the PageItemDefault's existing attributes before applying the style.
   * @param clearingOverridesThroughRootObjectStyle If true, clears attributes and formatting applied to the PageItemDefault that are not defined in the object style.
   */
  applyObjectStyle(using: ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): (void)[];
  /** Clear overrides for object style */
  clearObjectStyleOverrides(): (void)[];
}
