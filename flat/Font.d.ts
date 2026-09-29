/**
 * Font.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject, ReadonlyNamedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';
import type { FontStatus } from './Enums/FontStatus';
import type { FontTypes } from './Enums/FontTypes';
import type { OpenTypeFeature } from './Enums/OpenTypeFeature';
import type { FilePath } from './_base/Types';
import type { Fonts } from './Fonts';
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
 * A single installed or missing font, as listed in the {@link Fonts} collection of an
 * {@link Application} or {@link Document}.
 *
 * Distinct from a text range's own `appliedFont`, which references a font *by name* for use in
 * formatting; this object exposes the font's own metadata and installation status.
 */
export interface Font {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Application | Document;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Font, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Font, 'single'>);
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
   * The index of the object within its containing parent.
   */
  readonly index: number;
  /** The object's name. Derived by InDesign and not assignable. */
  readonly name: string;
  /** The object's DOM class name. */
  readonly constructorName: 'Font';
  /** Resolves the proxy into the individual {@link Font} objects it stands for. */
  getElements(): Font[];
  /** If `true`, the font can be embedded when exporting. */
  readonly allowEditableEmbedding: boolean;
  /** If `true`, the font can be converted to outlines. */
  readonly allowOutlines: boolean;
  /** If `true`, the font can be embedded in a PDF document. */
  readonly allowPDFEmbedding: boolean;
  /** If `true`, the font can be printed. */
  readonly allowPrinting: boolean;
  /** The name of the font family. */
  readonly fontFamily: string;
  /** The full path to the font file on disk. */
  readonly location: string;
  /** The PostScript name of the font. */
  readonly postscriptName: string;
  /** If `true`, the font permits only restricted printing. */
  readonly restrictedPrinting: boolean;
  /** Whether the font is installed, missing, faux-styled, or substituted. */
  readonly status: FontStatus;
  /** The name of the font style (e.g. `'Bold'`, `'Italic'`). */
  readonly fontStyleName: string;
  /** The underlying font technology (TrueType, OpenType, CID, and so on). */
  readonly fontType: FontTypes;
  /** The number of design axes in a variable font. */
  readonly numDesignAxes: number;
  /** The name of each design axis in a variable font. */
  readonly designAxesName: string[];
  /** The valid `[min, max]` range of each design axis in a variable font. */
  readonly designAxesRange: [number, number][];
  /** The current value of each design axis in a variable font. */
  readonly designAxesValues: number[];
  /** The writing script identifier for the font. */
  readonly writingScript: number;
  /** The full font name. */
  readonly fullName: string;
  /** The full native-language name of the font. */
  readonly fullNameNative: string;
  /** The native-language name of the font style. */
  readonly fontStyleNameNative: string;
  /** The font name as reported by the host platform. */
  readonly platformName: string;
  /** The font version string. */
  readonly version: string;
  /** The registry of a CID font. */
  readonly registry: string;
  /** The ordering of a CID font. */
  readonly ordering: string;
  /**
   * Checks whether the font supports the given OpenType feature.
   * @param using The feature to check for, as an {@link OpenTypeFeature} enumerator or its name.
   */
  checkOpenTypeFeature(using: OpenTypeFeature | string): boolean;
  /**
   * Creates a subset copy of the font containing only the glyphs needed to
   * render `charactersForSubset`, and writes it to `fontDestination`.
   * @param charactersForSubset Every character the resulting subset font must be able to render.
   */
  createSubsetFont(charactersForSubset: string, fontDestination: FilePath): void;
}


/**
 * The broadcast proxy for {@link Font} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Font} there.
 */
export interface FontPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Application | Document)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<FontPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<FontPlural, 'plural'>);
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
   * The index of the object within its containing parent.
   */
  readonly index: (number)[];
  /** The object's name. Derived by InDesign and not assignable. */
  readonly name: (string)[];
  /** The object's DOM class name. */
  readonly constructorName: 'Font';
  /** Resolves the proxy into the individual {@link Font} objects it stands for. */
  getElements(): Font[];
  /** If `true`, the font can be embedded when exporting. */
  readonly allowEditableEmbedding: (boolean)[];
  /** If `true`, the font can be converted to outlines. */
  readonly allowOutlines: (boolean)[];
  /** If `true`, the font can be embedded in a PDF document. */
  readonly allowPDFEmbedding: (boolean)[];
  /** If `true`, the font can be printed. */
  readonly allowPrinting: (boolean)[];
  /** The name of the font family. */
  readonly fontFamily: (string)[];
  /** The full path to the font file on disk. */
  readonly location: (string)[];
  /** The PostScript name of the font. */
  readonly postscriptName: (string)[];
  /** If `true`, the font permits only restricted printing. */
  readonly restrictedPrinting: (boolean)[];
  /** Whether the font is installed, missing, faux-styled, or substituted. */
  readonly status: (FontStatus)[];
  /** The name of the font style (e.g. `'Bold'`, `'Italic'`). */
  readonly fontStyleName: (string)[];
  /** The underlying font technology (TrueType, OpenType, CID, and so on). */
  readonly fontType: (FontTypes)[];
  /** The number of design axes in a variable font. */
  readonly numDesignAxes: (number)[];
  /** The name of each design axis in a variable font. */
  readonly designAxesName: (string[])[];
  /** The valid `[min, max]` range of each design axis in a variable font. */
  readonly designAxesRange: ([number, number][])[];
  /** The current value of each design axis in a variable font. */
  readonly designAxesValues: (number[])[];
  /** The writing script identifier for the font. */
  readonly writingScript: (number)[];
  /** The full font name. */
  readonly fullName: (string)[];
  /** The full native-language name of the font. */
  readonly fullNameNative: (string)[];
  /** The native-language name of the font style. */
  readonly fontStyleNameNative: (string)[];
  /** The font name as reported by the host platform. */
  readonly platformName: (string)[];
  /** The font version string. */
  readonly version: (string)[];
  /** The registry of a CID font. */
  readonly registry: (string)[];
  /** The ordering of a CID font. */
  readonly ordering: (string)[];
  /**
   * Checks whether the font supports the given OpenType feature.
   * @param using The feature to check for, as an {@link OpenTypeFeature} enumerator or its name.
   */
  checkOpenTypeFeature(using: OpenTypeFeature | string): (boolean)[];
  /**
   * Creates a subset copy of the font containing only the glyphs needed to
   * render `charactersForSubset`, and writes it to `fontDestination`.
   * @param charactersForSubset Every character the resulting subset font must be able to render.
   */
  createSubsetFont(charactersForSubset: string, fontDestination: FilePath): (void)[];
}
