/**
 * StrokeTransparencySetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { PageItemUnion } from './_base/Unions';
import type { BevelAndEmbossSetting } from './BevelAndEmbossSetting';
import type { BlendingSetting } from './BlendingSetting';
import type { DirectionalFeatherSetting } from './DirectionalFeatherSetting';
import type { DropShadowSetting } from './DropShadowSetting';
import type { FeatherSetting } from './FeatherSetting';
import type { FormField } from './FormField';
import type { GradientFeatherSetting } from './GradientFeatherSetting';
import type { InnerGlowSetting } from './InnerGlowSetting';
import type { InnerShadowSetting } from './InnerShadowSetting';
import type { ObjectStyle } from './ObjectStyle';
import type { OuterGlowSetting } from './OuterGlowSetting';
import type { PageItemDefault } from './PageItemDefault';
import type { Preferences } from './Preferences';
import type { SatinSetting } from './SatinSetting';
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
 * Transparency settings for the stroke of the parent object.
 */
export interface StrokeTransparencySetting {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: PageItemUnion | FormField | PageItemDefault | ObjectStyle;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<StrokeTransparencySetting, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<StrokeTransparencySetting, 'single'>);
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
  readonly constructorName: 'StrokeTransparencySetting';
  /** Resolves the proxy into the individual {@link StrokeTransparencySetting} objects it stands for. */
  getElements(): StrokeTransparencySetting[];
  /** Blending mode settings. */
  readonly blendingSettings: BlendingSetting;
  /** Settings related to the drop shadow effect. */
  readonly dropShadowSettings: DropShadowSetting;
  /** Settings related to the feather effect. */
  readonly featherSettings: FeatherSetting;
  /** Settings related to the inner shadow effect. */
  readonly innerShadowSettings: InnerShadowSetting;
  /** Settings related to the outer glow effect. */
  readonly outerGlowSettings: OuterGlowSetting;
  /** Settings related to the inner glow effect. */
  readonly innerGlowSettings: InnerGlowSetting;
  /** Settings related to the bevel and emboss effect. */
  readonly bevelAndEmbossSettings: BevelAndEmbossSetting;
  /** Settings related to the satin effect. */
  readonly satinSettings: SatinSetting;
  /** Settings related to the directional feather effect. */
  readonly directionalFeatherSettings: DirectionalFeatherSetting;
  /** Settings related to the gradient feather effect. */
  readonly gradientFeatherSettings: GradientFeatherSetting;
  /** A collection of preferences objects. */
  readonly preferences: Preferences;
}


/**
 * The broadcast proxy for {@link StrokeTransparencySetting} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link StrokeTransparencySetting} there.
 */
export interface StrokeTransparencySettingPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (PageItemUnion | FormField | PageItemDefault | ObjectStyle)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<StrokeTransparencySettingPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<StrokeTransparencySettingPlural, 'plural'>);
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
  readonly constructorName: 'StrokeTransparencySetting';
  /** Resolves the proxy into the individual {@link StrokeTransparencySetting} objects it stands for. */
  getElements(): StrokeTransparencySetting[];
  /** Blending mode settings. */
  readonly blendingSettings: (BlendingSetting)[];
  /** Settings related to the drop shadow effect. */
  readonly dropShadowSettings: (DropShadowSetting)[];
  /** Settings related to the feather effect. */
  readonly featherSettings: (FeatherSetting)[];
  /** Settings related to the inner shadow effect. */
  readonly innerShadowSettings: (InnerShadowSetting)[];
  /** Settings related to the outer glow effect. */
  readonly outerGlowSettings: (OuterGlowSetting)[];
  /** Settings related to the inner glow effect. */
  readonly innerGlowSettings: (InnerGlowSetting)[];
  /** Settings related to the bevel and emboss effect. */
  readonly bevelAndEmbossSettings: (BevelAndEmbossSetting)[];
  /** Settings related to the satin effect. */
  readonly satinSettings: (SatinSetting)[];
  /** Settings related to the directional feather effect. */
  readonly directionalFeatherSettings: (DirectionalFeatherSetting)[];
  /** Settings related to the gradient feather effect. */
  readonly gradientFeatherSettings: (GradientFeatherSetting)[];
  /** A collection of preferences objects. */
  readonly preferences: Preferences;
}
