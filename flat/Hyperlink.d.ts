/**
 * Hyperlink.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { HyperlinkPageItemSource } from './HyperlinkPageItemSource';
import type { HyperlinkTextSource } from './HyperlinkTextSource';
import type { CrossReferenceSource } from './CrossReferenceSource';
import type { HyperlinkTextDestination } from './HyperlinkTextDestination';
import type { HyperlinkPageDestination } from './HyperlinkPageDestination';
import type { HyperlinkExternalPageDestination } from './HyperlinkExternalPageDestination';
import type { HyperlinkURLDestination } from './HyperlinkURLDestination';
import type { ParagraphDestination } from './ParagraphDestination';
import type { HyperlinkAppearanceHighlight } from './Enums/HyperlinkAppearanceHighlight';
import type { HyperlinkAppearanceWidth } from './Enums/HyperlinkAppearanceWidth';
import type { HyperlinkAppearanceStyle } from './Enums/HyperlinkAppearanceStyle';
import type { UIColors } from './Enums/UIColors';
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
 * A clickable hyperlink connecting a {@link HyperlinkPageItemSource}, {@link HyperlinkTextSource}, or {@link CrossReferenceSource} to a destination such as a page,
 * URL, or text range.
 *
 * Its appearance ({@link highlight}, {@link width}, {@link borderColor}, {@link borderStyle}) only matters for interactive PDF export.
 */
export interface Hyperlink {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: Document;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Hyperlink, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Hyperlink, 'single'>);
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
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): string;
  set name(value: string);
  /** The object's DOM class name. */
  readonly constructorName: 'Hyperlink';
  /** Resolves the proxy into the individual {@link Hyperlink} objects it stands for. */
  getElements(): Hyperlink[];
  /** The unique ID of the hyperlink, stable across saves and reopens. */
  readonly id: number;
  /** Whether the hyperlink is hidden. */
  readonly hidden: boolean;
  /** The hyperlinked text or page item that acts as the clickable source. */
  get source(): HyperlinkPageItemSource | HyperlinkTextSource | CrossReferenceSource;
  set source(value: HyperlinkPageItemSource | HyperlinkTextSource | CrossReferenceSource);
  /** The text, page, URL, or cross-reference target that the hyperlink points to. */
  get destination(): | HyperlinkTextDestination
    | HyperlinkPageDestination
    | HyperlinkExternalPageDestination
    | HyperlinkURLDestination
    | ParagraphDestination
  ;
  set destination(
    value:
      | HyperlinkTextDestination
      | HyperlinkPageDestination
      | HyperlinkExternalPageDestination
      | HyperlinkURLDestination
      | ParagraphDestination,
  );
  /** Whether the hyperlink is visible when exported. */
  get visible(): boolean;
  set visible(value: boolean);
  /** The highlight style applied around the hyperlink source in interactive PDF export. */
  get highlight(): HyperlinkAppearanceHighlight;
  set highlight(value: HyperlinkAppearanceHighlight);
  /** The stroke weight of the hyperlink border in interactive PDF export. */
  get width(): HyperlinkAppearanceWidth;
  set width(value: HyperlinkAppearanceWidth);
  /**
   * The hyperlink border color, either an `[R, G, B]` triple (each `0`–`255`)
   * or a named {@link UIColors} value.
   */
  get borderColor(): [number, number, number] | UIColors;
  set borderColor(value: [number, number, number] | UIColors);
  /** The dash pattern of the hyperlink border in interactive PDF export. */
  get borderStyle(): HyperlinkAppearanceStyle;
  set borderStyle(value: HyperlinkAppearanceStyle);
  /** The epub ARIA role, as recommended by IDPF. */
  get epubAriaRole(): string;
  set epubAriaRole(value: string);
  /** The hyperlink's alt text. */
  get hypherlinkAltText(): string;
  set hypherlinkAltText(value: string);
  /** Deletes the hyperlink. */
  remove(): void;
  /** Jumps to the hyperlink source. */
  showSource(): void;
  /** Jumps to the hyperlink destination. */
  showDestination(): void;
}


/**
 * The broadcast proxy for {@link Hyperlink} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Hyperlink} there.
 */
export interface HyperlinkPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (Document)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<HyperlinkPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<HyperlinkPlural, 'plural'>);
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
  /**
   * The name of the object, and what the containing collection's `itemByName` looks up.
   */
  get name(): (string)[];
  set name(value: string);
  /** The object's DOM class name. */
  readonly constructorName: 'Hyperlink';
  /** Resolves the proxy into the individual {@link Hyperlink} objects it stands for. */
  getElements(): Hyperlink[];
  /** The unique ID of the hyperlink, stable across saves and reopens. */
  readonly id: (number)[];
  /** Whether the hyperlink is hidden. */
  readonly hidden: (boolean)[];
  /** The hyperlinked text or page item that acts as the clickable source. */
  get source(): (HyperlinkPageItemSource | HyperlinkTextSource | CrossReferenceSource)[];
  set source(value: HyperlinkPageItemSource | HyperlinkTextSource | CrossReferenceSource);
  /** The text, page, URL, or cross-reference target that the hyperlink points to. */
  get destination(): (| HyperlinkTextDestination
    | HyperlinkPageDestination
    | HyperlinkExternalPageDestination
    | HyperlinkURLDestination
    | ParagraphDestination
  )[];
  set destination(
    value:
      | HyperlinkTextDestination
      | HyperlinkPageDestination
      | HyperlinkExternalPageDestination
      | HyperlinkURLDestination
      | ParagraphDestination,
  );
  /** Whether the hyperlink is visible when exported. */
  get visible(): (boolean)[];
  set visible(value: boolean);
  /** The highlight style applied around the hyperlink source in interactive PDF export. */
  get highlight(): (HyperlinkAppearanceHighlight)[];
  set highlight(value: HyperlinkAppearanceHighlight);
  /** The stroke weight of the hyperlink border in interactive PDF export. */
  get width(): (HyperlinkAppearanceWidth)[];
  set width(value: HyperlinkAppearanceWidth);
  /**
   * The hyperlink border color, either an `[R, G, B]` triple (each `0`–`255`)
   * or a named {@link UIColors} value.
   */
  get borderColor(): ([number, number, number] | UIColors)[];
  set borderColor(value: [number, number, number] | UIColors);
  /** The dash pattern of the hyperlink border in interactive PDF export. */
  get borderStyle(): (HyperlinkAppearanceStyle)[];
  set borderStyle(value: HyperlinkAppearanceStyle);
  /** The epub ARIA role, as recommended by IDPF. */
  get epubAriaRole(): (string)[];
  set epubAriaRole(value: string);
  /** The hyperlink's alt text. */
  get hypherlinkAltText(): (string)[];
  set hypherlinkAltText(value: string);
  /** Deletes the hyperlink. */
  remove(): (void)[];
  /** Jumps to the hyperlink source. */
  showSource(): (void)[];
  /** Jumps to the hyperlink destination. */
  showDestination(): (void)[];
}
