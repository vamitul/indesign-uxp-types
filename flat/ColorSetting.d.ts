/**
 * ColorSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { FilePath, File } from './_base/Types';
import type { Application } from './Application';
import type { ColorSettingsPolicy } from './Enums/ColorSettingsPolicy';
import type { DefaultRenderingIntent } from './Enums/DefaultRenderingIntent';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { InDesignEventMap } from './_base/Events';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
/**
 * Color management settings.
 */
export interface ColorSetting {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Application;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<ColorSetting, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ColorSetting, 'single'>);
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
  readonly constructorName: 'ColorSetting';
  /** Resolves the proxy into the individual {@link ColorSetting} objects it stands for. */
  getElements(): ColorSetting[];
  /** The available color engines. */
  readonly engineList: string[];
  /** A list of valid color management system settings configurations. */
  readonly cmsSettingsList: string[];
  /** A list of valid CMYK color profiles. */
  readonly workingSpaceCMYKList: string[];
  /** A list of valid RGB color profiles. */
  readonly workingSpaceRGBList: string[];
  /** The policy for handling colors in a CMYK color model, including reading and embedding color profiles, resolving mismatches between embedded color profiles and the working space, and moving colors between documents. */
  get cmykPolicy(): ColorSettingsPolicy;
  set cmykPolicy(value: ColorSettingsPolicy);
  /** If true, enables color management. */
  get enableColorManagement(): boolean;
  set enableColorManagement(value: boolean);
  /** The color management module (CMM) for mapping color space gamuts between documents. */
  get engine(): string;
  set engine(value: string);
  /** If true, displays a prompt when opening a file whose embedded color profile does not match the current working space. The prompt provides the option to override the default mismatch behavior. */
  get mismatchAskWhenOpening(): boolean;
  set mismatchAskWhenOpening(value: boolean);
  /** If true, displays a prompt when importing an object (via pasting, drag-and-drop, or other similar methods) whose colors do not match the current working space. The prompt provides the option to override the default mismatch behavior. */
  get mismatchAskWhenPasting(): boolean;
  set mismatchAskWhenPasting(value: boolean);
  /** If true, displays a prompt when opening a file that does not have an embedded color profile. The prompt provides the option to assign a color profile. */
  get missingAskWhenOpening(): boolean;
  set missingAskWhenOpening(value: boolean);
  /** The policy for handling colors in an RGB color model, including reading and embedding color profiles, handling mismatches between embedded color profiles and the working space, and moving colors from one document to another. */
  get rgbPolicy(): ColorSettingsPolicy;
  set rgbPolicy(value: ColorSettingsPolicy);
  /** The current color management system settings configuration. Note: For information on possible values, see CMS settings list. */
  get cmsSettings(): string;
  set cmsSettings(value: string);
  /** The file path of the CSF file to use. */
  get cmsSettingsPath(): Promise<File>;
  set cmsSettingsPath(value: FilePath);
  /** If true, uses black point compensation to ensure that shadow detail is preserved by simulating the full dynamic range of the output device. */
  get useBPC(): boolean;
  set useBPC(value: boolean);
  /** The current CMYK profile. */
  get workingSpaceCMYK(): string;
  set workingSpaceCMYK(value: string);
  /** The current RGB profile. */
  get workingSpaceRGB(): string;
  set workingSpaceRGB(value: string);
  /** How out-of-gamut colors are mapped by default when converting between color spaces — see {@link DefaultRenderingIntent}. */
  get intent(): DefaultRenderingIntent;
  set intent(value: DefaultRenderingIntent);
  /** If true, uses LAB alternates for spot colors when available. */
  get accurateLABSpots(): boolean;
  set accurateLABSpots(value: boolean);
  /** If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to the screen. */
  get idealizedBlackToScreen(): boolean;
  set idealizedBlackToScreen(value: boolean);
  /** If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to print or export. */
  get idealizedBlackToExport(): boolean;
  set idealizedBlackToExport(value: boolean);
}


/**
 * The broadcast proxy for {@link ColorSetting} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link ColorSetting} there.
 */
export interface ColorSettingPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Application)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<ColorSettingPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<ColorSettingPlural, 'plural'>);
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
  readonly constructorName: 'ColorSetting';
  /** Resolves the proxy into the individual {@link ColorSetting} objects it stands for. */
  getElements(): ColorSetting[];
  /** The available color engines. */
  readonly engineList: (string[])[];
  /** A list of valid color management system settings configurations. */
  readonly cmsSettingsList: (string[])[];
  /** A list of valid CMYK color profiles. */
  readonly workingSpaceCMYKList: (string[])[];
  /** A list of valid RGB color profiles. */
  readonly workingSpaceRGBList: (string[])[];
  /** The policy for handling colors in a CMYK color model, including reading and embedding color profiles, resolving mismatches between embedded color profiles and the working space, and moving colors between documents. */
  get cmykPolicy(): (ColorSettingsPolicy)[];
  set cmykPolicy(value: ColorSettingsPolicy);
  /** If true, enables color management. */
  get enableColorManagement(): (boolean)[];
  set enableColorManagement(value: boolean);
  /** The color management module (CMM) for mapping color space gamuts between documents. */
  get engine(): (string)[];
  set engine(value: string);
  /** If true, displays a prompt when opening a file whose embedded color profile does not match the current working space. The prompt provides the option to override the default mismatch behavior. */
  get mismatchAskWhenOpening(): (boolean)[];
  set mismatchAskWhenOpening(value: boolean);
  /** If true, displays a prompt when importing an object (via pasting, drag-and-drop, or other similar methods) whose colors do not match the current working space. The prompt provides the option to override the default mismatch behavior. */
  get mismatchAskWhenPasting(): (boolean)[];
  set mismatchAskWhenPasting(value: boolean);
  /** If true, displays a prompt when opening a file that does not have an embedded color profile. The prompt provides the option to assign a color profile. */
  get missingAskWhenOpening(): (boolean)[];
  set missingAskWhenOpening(value: boolean);
  /** The policy for handling colors in an RGB color model, including reading and embedding color profiles, handling mismatches between embedded color profiles and the working space, and moving colors from one document to another. */
  get rgbPolicy(): (ColorSettingsPolicy)[];
  set rgbPolicy(value: ColorSettingsPolicy);
  /** The current color management system settings configuration. Note: For information on possible values, see CMS settings list. */
  get cmsSettings(): (string)[];
  set cmsSettings(value: string);
  /** The file path of the CSF file to use. */
  get cmsSettingsPath(): (Promise<File>)[];
  set cmsSettingsPath(value: FilePath);
  /** If true, uses black point compensation to ensure that shadow detail is preserved by simulating the full dynamic range of the output device. */
  get useBPC(): (boolean)[];
  set useBPC(value: boolean);
  /** The current CMYK profile. */
  get workingSpaceCMYK(): (string)[];
  set workingSpaceCMYK(value: string);
  /** The current RGB profile. */
  get workingSpaceRGB(): (string)[];
  set workingSpaceRGB(value: string);
  /** How out-of-gamut colors are mapped by default when converting between color spaces — see {@link DefaultRenderingIntent}. */
  get intent(): (DefaultRenderingIntent)[];
  set intent(value: DefaultRenderingIntent);
  /** If true, uses LAB alternates for spot colors when available. */
  get accurateLABSpots(): (boolean)[];
  set accurateLABSpots(value: boolean);
  /** If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to the screen. */
  get idealizedBlackToScreen(): (boolean)[];
  set idealizedBlackToScreen(value: boolean);
  /** If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to print or export. */
  get idealizedBlackToExport(): (boolean)[];
  set idealizedBlackToExport(value: boolean);
}
