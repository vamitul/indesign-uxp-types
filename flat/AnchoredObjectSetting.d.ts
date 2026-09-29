/**
 * AnchoredObjectSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { Application } from './Application';
import type { Button } from './Button';
import type { CheckBox } from './CheckBox';
import type { ComboBox } from './ComboBox';
import type { Document } from './Document';
import type { EPSText } from './EPSText';
import type { EndnoteTextFrame } from './EndnoteTextFrame';
import type { FlexObject } from './FlexObject';
import type { FormField } from './FormField';
import type { GraphicLine } from './GraphicLine';
import type { Group } from './Group';
import type { InsertionPoint } from './InsertionPoint';
import type { ListBox } from './ListBox';
import type { MultiStateObject } from './MultiStateObject';
import type { ObjectStyle } from './ObjectStyle';
import type { Oval } from './Oval';
import type { Polygon } from './Polygon';
import type { RadioButton } from './RadioButton';
import type { Rectangle } from './Rectangle';
import type { SignatureField } from './SignatureField';
import type { TextBox } from './TextBox';
import type { TextFrame } from './TextFrame';
import type { AnchorPoint } from './Enums/AnchorPoint';
import type { AnchorPosition } from './Enums/AnchorPosition';
import type { AnchoredRelativeTo } from './Enums/AnchoredRelativeTo';
import type { HorizontalAlignment } from './Enums/HorizontalAlignment';
import type { VerticalAlignment } from './Enums/VerticalAlignment';
import type { VerticallyRelativeTo } from './Enums/VerticallyRelativeTo';
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
 * The settings for an anchored object.
 */
export interface AnchoredObjectSetting {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: FlexObject | Application | Document | EPSText | Polygon | GraphicLine | Rectangle | Oval | Group | TextFrame | EndnoteTextFrame | Button | FormField | SignatureField | TextBox | RadioButton | ListBox | ComboBox | CheckBox | MultiStateObject | ObjectStyle;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<AnchoredObjectSetting, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<AnchoredObjectSetting, 'single'>);
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
  readonly constructorName: 'AnchoredObjectSetting';
  /** Resolves the proxy into the individual {@link AnchoredObjectSetting} objects it stands for. */
  getElements(): AnchoredObjectSetting[];
  /** The position of the anchored object relative to the anchor. */
  get anchoredPosition(): AnchorPosition;
  set anchoredPosition(value: AnchorPosition);
  /** If true, the position of the anchored object is relative to the binding spine of the page or spread. */
  get spineRelative(): boolean;
  set spineRelative(value: boolean);
  /** If true, prevents manual positioning of the anchored object. */
  get lockPosition(): boolean;
  set lockPosition(value: boolean);
  /** If true, pins the position of the anchored object within the text frame top and bottom. */
  get pinPosition(): boolean;
  set pinPosition(value: boolean);
  /** The point in the anchored object to position. */
  get anchorPoint(): AnchorPoint;
  set anchorPoint(value: AnchorPoint);
  /**
   * When {@link anchoredPosition} is {@link AnchorPosition.ABOVE_LINE}, positions the anchored
   * object relative to the text area.
   *
   * When {@link anchoredPosition} is {@link AnchorPosition.ANCHORED},
   * {@link horizontalReferencePoint} sets it instead. Has no effect when
   * {@link anchoredPosition} is {@link AnchorPosition.INLINE_POSITION}.
   */
  get horizontalAlignment(): HorizontalAlignment;
  set horizontalAlignment(value: HorizontalAlignment);
  /** The horizontal reference point on the page. Applies only when {@link anchoredPosition} is {@link AnchorPosition.ANCHORED}. */
  get horizontalReferencePoint(): AnchoredRelativeTo;
  set horizontalReferencePoint(value: AnchoredRelativeTo);
  /** The vertical alignment of the anchored object's reference point with {@link verticalReferencePoint}. Applies only when {@link anchoredPosition} is {@link AnchorPosition.ANCHORED}. */
  get verticalAlignment(): VerticalAlignment;
  set verticalAlignment(value: VerticalAlignment);
  /** The vertical reference point on the page. Applies only when {@link anchoredPosition} is {@link AnchorPosition.ANCHORED}. */
  get verticalReferencePoint(): VerticallyRelativeTo;
  set verticalReferencePoint(value: VerticallyRelativeTo);
  /** The horizontal (x) offset of the anchored object. */
  get anchorXoffset(): number;
  set anchorXoffset(value: MeasurementValue);
  /** The vertical (y) offset of the anchored object. Corresponds to the space after property for above line positioning. */
  get anchorYoffset(): number;
  set anchorYoffset(value: MeasurementValue);
  /** The space above an above-line anchored object. */
  get anchorSpaceAbove(): number;
  set anchorSpaceAbove(value: MeasurementValue);
  /**
   * Inserts the anchored object into specified story.
   * @param storyOffset The location within the story, specified as an insertion point.
   * @param anchoredPosition The position of the anchored object relative to the anchor.
   */
  insertAnchoredObject(storyOffset: InsertionPoint, anchoredPosition?: AnchorPosition): void;
  /** Releases the anchored object from its associated text. */
  releaseAnchoredObject(): void;
}


/**
 * The broadcast proxy for {@link AnchoredObjectSetting} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link AnchoredObjectSetting} there.
 */
export interface AnchoredObjectSettingPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (FlexObject | Application | Document | EPSText | Polygon | GraphicLine | Rectangle | Oval | Group | TextFrame | EndnoteTextFrame | Button | FormField | SignatureField | TextBox | RadioButton | ListBox | ComboBox | CheckBox | MultiStateObject | ObjectStyle)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<AnchoredObjectSettingPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<AnchoredObjectSettingPlural, 'plural'>);
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
  readonly constructorName: 'AnchoredObjectSetting';
  /** Resolves the proxy into the individual {@link AnchoredObjectSetting} objects it stands for. */
  getElements(): AnchoredObjectSetting[];
  /** The position of the anchored object relative to the anchor. */
  get anchoredPosition(): (AnchorPosition)[];
  set anchoredPosition(value: AnchorPosition);
  /** If true, the position of the anchored object is relative to the binding spine of the page or spread. */
  get spineRelative(): (boolean)[];
  set spineRelative(value: boolean);
  /** If true, prevents manual positioning of the anchored object. */
  get lockPosition(): (boolean)[];
  set lockPosition(value: boolean);
  /** If true, pins the position of the anchored object within the text frame top and bottom. */
  get pinPosition(): (boolean)[];
  set pinPosition(value: boolean);
  /** The point in the anchored object to position. */
  get anchorPoint(): (AnchorPoint)[];
  set anchorPoint(value: AnchorPoint);
  /**
   * When {@link anchoredPosition} is {@link AnchorPosition.ABOVE_LINE}, positions the anchored
   * object relative to the text area.
   *
   * When {@link anchoredPosition} is {@link AnchorPosition.ANCHORED},
   * {@link horizontalReferencePoint} sets it instead. Has no effect when
   * {@link anchoredPosition} is {@link AnchorPosition.INLINE_POSITION}.
   */
  get horizontalAlignment(): (HorizontalAlignment)[];
  set horizontalAlignment(value: HorizontalAlignment);
  /** The horizontal reference point on the page. Applies only when {@link anchoredPosition} is {@link AnchorPosition.ANCHORED}. */
  get horizontalReferencePoint(): (AnchoredRelativeTo)[];
  set horizontalReferencePoint(value: AnchoredRelativeTo);
  /** The vertical alignment of the anchored object's reference point with {@link verticalReferencePoint}. Applies only when {@link anchoredPosition} is {@link AnchorPosition.ANCHORED}. */
  get verticalAlignment(): (VerticalAlignment)[];
  set verticalAlignment(value: VerticalAlignment);
  /** The vertical reference point on the page. Applies only when {@link anchoredPosition} is {@link AnchorPosition.ANCHORED}. */
  get verticalReferencePoint(): (VerticallyRelativeTo)[];
  set verticalReferencePoint(value: VerticallyRelativeTo);
  /** The horizontal (x) offset of the anchored object. */
  get anchorXoffset(): (number)[];
  set anchorXoffset(value: MeasurementValue);
  /** The vertical (y) offset of the anchored object. Corresponds to the space after property for above line positioning. */
  get anchorYoffset(): (number)[];
  set anchorYoffset(value: MeasurementValue);
  /** The space above an above-line anchored object. */
  get anchorSpaceAbove(): (number)[];
  set anchorSpaceAbove(value: MeasurementValue);
  /**
   * Inserts the anchored object into specified story.
   * @param storyOffset The location within the story, specified as an insertion point.
   * @param anchoredPosition The position of the anchored object relative to the anchor.
   */
  insertAnchoredObject(storyOffset: InsertionPoint, anchoredPosition?: AnchorPosition): (void)[];
  /** Releases the anchored object from its associated text. */
  releaseAnchoredObject(): (void)[];
}
