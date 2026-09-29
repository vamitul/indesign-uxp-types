/**
 * PagesPanel.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Panel } from './Panel';
import type { IconSizes } from './Enums/IconSizes';
import type { PageViewOptions } from './Enums/PageViewOptions';
import type { PanelLayoutResize } from './Enums/PanelLayoutResize';
import type { Document } from './Document';
import type { Application } from './Application';
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
 * The Pages panel — display settings only.
 *
 * Everything here controls how pages and masters are drawn in the panel; none of
 * it affects the document. Add, move, or delete pages through
 * {@link Document.pages} and {@link Document.masterSpreads}.
 */
export interface PagesPanel {
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
  get properties(): PropertiesGetter<PagesPanel, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PagesPanel, 'single'>);
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
  /** The name of the Panel. */
  readonly name: string;
  /** Whether the panel is visible. */
  get visible(): boolean;
  set visible(value: boolean);
  /** The object's DOM class name. */
  readonly constructorName: 'PagesPanel';
  /** Resolves the proxy into the individual {@link PagesPanel} objects it stands for. */
  getElements(): PagesPanel[];
  /** How page icons are arranged in the pages area. */
  get pagesViewSetting(): PageViewOptions;
  set pagesViewSetting(value: PageViewOptions);
  /** The size of the page icons. */
  get iconSize(): IconSizes;
  set iconSize(value: IconSizes);
  /** The size of the master-page icons. */
  get masterIconSize(): IconSizes;
  set masterIconSize(value: IconSizes);
  /** Whether master-page icons are stacked vertically around the binding spine. */
  get masterVerticalView(): boolean;
  set masterVerticalView(value: boolean);
  /** Which of the two areas absorbs the change when the panel is resized. */
  get resizeBehavior(): PanelLayoutResize;
  set resizeBehavior(value: PanelLayoutResize);
  /** Whether the pages area is drawn above the master-pages area. */
  get pagesOnTop(): boolean;
  set pagesOnTop(value: boolean);
  /** Whether page icons show a thumbnail of their content. */
  get pagesThumbnails(): boolean;
  set pagesThumbnails(value: boolean);
  /** Whether master-page icons show a thumbnail of their content. */
  get mastersThumbnails(): boolean;
  set mastersThumbnails(value: boolean);
  /** Whether spreads containing transparency are flagged with an icon. */
  get transparencyIcons(): boolean;
  set transparencyIcons(value: boolean);
  /** Whether spreads carrying a page transition are flagged with an icon. */
  get transitionsIcons(): boolean;
  set transitionsIcons(value: boolean);
  /** Whether spreads with a non-zero view rotation are flagged with an icon. */
  get rotationIcons(): boolean;
  set rotationIcons(value: boolean);
}


/**
 * The broadcast proxy for {@link PagesPanel} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PagesPanel} there.
 */
export interface PagesPanelPlural {
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
  get properties(): (PropertiesGetter<PagesPanelPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PagesPanelPlural, 'plural'>);
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
  /** The name of the Panel. */
  readonly name: (string)[];
  /** Whether the panel is visible. */
  get visible(): (boolean)[];
  set visible(value: boolean);
  /** The object's DOM class name. */
  readonly constructorName: 'PagesPanel';
  /** Resolves the proxy into the individual {@link PagesPanel} objects it stands for. */
  getElements(): PagesPanel[];
  /** How page icons are arranged in the pages area. */
  get pagesViewSetting(): (PageViewOptions)[];
  set pagesViewSetting(value: PageViewOptions);
  /** The size of the page icons. */
  get iconSize(): (IconSizes)[];
  set iconSize(value: IconSizes);
  /** The size of the master-page icons. */
  get masterIconSize(): (IconSizes)[];
  set masterIconSize(value: IconSizes);
  /** Whether master-page icons are stacked vertically around the binding spine. */
  get masterVerticalView(): (boolean)[];
  set masterVerticalView(value: boolean);
  /** Which of the two areas absorbs the change when the panel is resized. */
  get resizeBehavior(): (PanelLayoutResize)[];
  set resizeBehavior(value: PanelLayoutResize);
  /** Whether the pages area is drawn above the master-pages area. */
  get pagesOnTop(): (boolean)[];
  set pagesOnTop(value: boolean);
  /** Whether page icons show a thumbnail of their content. */
  get pagesThumbnails(): (boolean)[];
  set pagesThumbnails(value: boolean);
  /** Whether master-page icons show a thumbnail of their content. */
  get mastersThumbnails(): (boolean)[];
  set mastersThumbnails(value: boolean);
  /** Whether spreads containing transparency are flagged with an icon. */
  get transparencyIcons(): (boolean)[];
  set transparencyIcons(value: boolean);
  /** Whether spreads carrying a page transition are flagged with an icon. */
  get transitionsIcons(): (boolean)[];
  set transitionsIcons(value: boolean);
  /** Whether spreads with a non-zero view rotation are flagged with an icon. */
  get rotationIcons(): (boolean)[];
  set rotationIcons(value: boolean);
}
