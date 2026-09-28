/**
 * BevelAndEmbossSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { Swatch } from './Swatch';
import type { TransparencySetting } from './TransparencySetting';
import type { BevelAndEmbossDirection } from './Enums/BevelAndEmbossDirection';
import type { BevelAndEmbossStyle } from './Enums/BevelAndEmbossStyle';
import type { BevelAndEmbossTechnique } from './Enums/BevelAndEmbossTechnique';
import type { BlendMode } from './Enums/BlendMode';
import type { FindChangeBevelAndEmbossSetting } from './FindChangeBevelAndEmbossSetting';
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
 * Bevel and emboss effect settings.
 */
export interface BevelAndEmbossSetting {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<BevelAndEmbossSetting, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<BevelAndEmbossSetting, 'single'>);
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
  /** The object's DOM class name — reports the specific kind, such as `'FindChangeBevelAndEmbossSetting'` when the object is a {@link FindChangeBevelAndEmbossSetting}. */
  readonly constructorName: 'BevelAndEmbossSetting' | 'FindChangeBevelAndEmbossSetting';
  /** Resolves the proxy into the individual {@link BevelAndEmbossSetting} objects it stands for. */
  getElements(): BevelAndEmbossSetting[];
  /** If true, the bevel or emboss effect is applied. */
  get applied(): boolean;
  set applied(value: boolean);
  /** The style of bevel or emboss. */
  get style(): BevelAndEmbossStyle;
  set style(value: BevelAndEmbossStyle);
  /** The edging technique of the bevel or emboss. */
  get technique(): BevelAndEmbossTechnique;
  set technique(value: BevelAndEmbossTechnique);
  /** The depth of the bevel or emboss (as a percentage). (Range: 0 to 1000). */
  get depth(): number;
  set depth(value: number);
  /** The direction of the bevel or emboss. */
  get direction(): BevelAndEmbossDirection;
  set direction(value: BevelAndEmbossDirection);
  /** The size of the bevel or emboss. */
  get size(): number;
  set size(value: MeasurementValue);
  /** The amount (in pixels) of softening. */
  get soften(): number;
  set soften(value: MeasurementValue);
  /** The angle of the light source. (Range: -180 to 180). */
  get angle(): number;
  set angle(value: number);
  /** The altitude of the light source. (Range: 0 to 90). */
  get altitude(): number;
  set altitude(value: number);
  /** If true, the global light source is used. */
  get useGlobalLight(): boolean;
  set useGlobalLight(value: boolean);
  /** The {@link Swatch} applied to the highlight portion of the effect. */
  get highlightColor(): Swatch;
  set highlightColor(value: Swatch);
  /** The blending mode for the highlight portion of the effect. */
  get highlightBlendMode(): BlendMode;
  set highlightBlendMode(value: BlendMode);
  /** The opacity of the highlight portion of the effect (as a percentage). (Range: 0 to 100). */
  get highlightOpacity(): number;
  set highlightOpacity(value: number);
  /** The {@link Swatch} applied to the shadow portion of the effect. */
  get shadowColor(): Swatch;
  set shadowColor(value: Swatch);
  /** The blending mode for the shadow portion of the effect. */
  get shadowBlendMode(): BlendMode;
  set shadowBlendMode(value: BlendMode);
  /** The opacity of the shadow portion of the effect (as a percentage). (Range: 0 to 100). */
  get shadowOpacity(): number;
  set shadowOpacity(value: number);
}


/**
 * The broadcast proxy for {@link BevelAndEmbossSetting} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link BevelAndEmbossSetting} there.
 */
export interface BevelAndEmbossSettingPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (TransparencySetting | StrokeTransparencySetting | FillTransparencySetting | ContentTransparencySetting)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<BevelAndEmbossSettingPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<BevelAndEmbossSettingPlural, 'plural'>);
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
  /** The object's DOM class name — reports the specific kind, such as `'FindChangeBevelAndEmbossSetting'` when the object is a {@link FindChangeBevelAndEmbossSetting}. */
  readonly constructorName: 'BevelAndEmbossSetting' | 'FindChangeBevelAndEmbossSetting';
  /** Resolves the proxy into the individual {@link BevelAndEmbossSetting} objects it stands for. */
  getElements(): BevelAndEmbossSetting[];
  /** If true, the bevel or emboss effect is applied. */
  get applied(): (boolean)[];
  set applied(value: boolean);
  /** The style of bevel or emboss. */
  get style(): (BevelAndEmbossStyle)[];
  set style(value: BevelAndEmbossStyle);
  /** The edging technique of the bevel or emboss. */
  get technique(): (BevelAndEmbossTechnique)[];
  set technique(value: BevelAndEmbossTechnique);
  /** The depth of the bevel or emboss (as a percentage). (Range: 0 to 1000). */
  get depth(): (number)[];
  set depth(value: number);
  /** The direction of the bevel or emboss. */
  get direction(): (BevelAndEmbossDirection)[];
  set direction(value: BevelAndEmbossDirection);
  /** The size of the bevel or emboss. */
  get size(): (number)[];
  set size(value: MeasurementValue);
  /** The amount (in pixels) of softening. */
  get soften(): (number)[];
  set soften(value: MeasurementValue);
  /** The angle of the light source. (Range: -180 to 180). */
  get angle(): (number)[];
  set angle(value: number);
  /** The altitude of the light source. (Range: 0 to 90). */
  get altitude(): (number)[];
  set altitude(value: number);
  /** If true, the global light source is used. */
  get useGlobalLight(): (boolean)[];
  set useGlobalLight(value: boolean);
  /** The {@link Swatch} applied to the highlight portion of the effect. */
  get highlightColor(): (Swatch)[];
  set highlightColor(value: Swatch);
  /** The blending mode for the highlight portion of the effect. */
  get highlightBlendMode(): (BlendMode)[];
  set highlightBlendMode(value: BlendMode);
  /** The opacity of the highlight portion of the effect (as a percentage). (Range: 0 to 100). */
  get highlightOpacity(): (number)[];
  set highlightOpacity(value: number);
  /** The {@link Swatch} applied to the shadow portion of the effect. */
  get shadowColor(): (Swatch)[];
  set shadowColor(value: Swatch);
  /** The blending mode for the shadow portion of the effect. */
  get shadowBlendMode(): (BlendMode)[];
  set shadowBlendMode(value: BlendMode);
  /** The opacity of the shadow portion of the effect (as a percentage). (Range: 0 to 100). */
  get shadowOpacity(): (number)[];
  set shadowOpacity(value: number);
}
