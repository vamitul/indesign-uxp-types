/**
 * DocumentPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MeasurementValue } from './_base/Types';
import type { DocumentIntentOptions } from './Enums/DocumentIntentOptions';
import type { HorizontalOrVertical } from './Enums/HorizontalOrVertical';
import type { PageBindingOptions } from './Enums/PageBindingOptions';
import type { PageOrientation } from './Enums/PageOrientation';
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
 * Document layout defaults (page size, orientation, facing pages, ruler origin) readable/writable at both the document and application-default level.
 */
export interface DocumentPreference {
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
  get properties(): PropertiesGetter<DocumentPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<DocumentPreference, 'single'>);
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
  readonly constructorName: 'DocumentPreference';
  /** Resolves the proxy into the individual {@link DocumentPreference} objects it stands for. */
  getElements(): DocumentPreference[];
  /** The height of the page. */
  get pageHeight(): number;
  set pageHeight(value: MeasurementValue);
  /** The width of the page. */
  get pageWidth(): number;
  set pageWidth(value: MeasurementValue);
  /** Whether the page is wider than it is tall, or taller than it is wide — see {@link PageOrientation}. */
  get pageOrientation(): PageOrientation;
  set pageOrientation(value: PageOrientation);
  /** The color of the column guides, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values,, or as a UI color. */
  get columnGuideColor(): number[] | UIColors;
  set columnGuideColor(value: number[] | UIColors);
  /** The color of the margin guides, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. */
  get marginGuideColor(): number[] | UIColors;
  set marginGuideColor(value: number[] | UIColors);
  /** If true, the document A-master has primary text frames when a new document is created. */
  get createPrimaryTextFrame(): boolean;
  set createPrimaryTextFrame(value: boolean);
  /** The number of pages in the document. (Range: 1 to 9999) */
  get pagesPerDocument(): number;
  set pagesPerDocument(value: number);
  /** If true, the document has facing pages. */
  get facingPages(): boolean;
  set facingPages(value: boolean);
  /** The amount to offset the top document bleed. */
  get documentBleedTopOffset(): number;
  set documentBleedTopOffset(value: MeasurementValue);
  /** The amount to offset the bottom document bleed. Note: To set the bleed bottom offset, document bleed uniform size must be false. */
  get documentBleedBottomOffset(): number;
  set documentBleedBottomOffset(value: MeasurementValue);
  /** The amount to offset the inside or left document bleed. Note: To set the bleed inside or left offset, document bleed uniform size must be false. */
  get documentBleedInsideOrLeftOffset(): number;
  set documentBleedInsideOrLeftOffset(value: MeasurementValue);
  /** The amount to offset the outside or right document bleed. Note: To set the bleed outside or right offset, document bleed uniform size must be false. */
  get documentBleedOutsideOrRightOffset(): number;
  set documentBleedOutsideOrRightOffset(value: MeasurementValue);
  /** If true, uses the document bleed top offset value for bleed offset measurements on all sides of the document. The default setting is true. */
  get documentBleedUniformSize(): boolean;
  set documentBleedUniformSize(value: boolean);
  /** The amount to offset the top slug. */
  get slugTopOffset(): number;
  set slugTopOffset(value: MeasurementValue);
  /** The amount to offset the bottom slug. Note: To set the slug bottom offset, document slug uniform size must be false. */
  get slugBottomOffset(): number;
  set slugBottomOffset(value: MeasurementValue);
  /** The amount to offset the inside or left slug. Note: To set the slug inside or left offset, document slug uniform size must be false. */
  get slugInsideOrLeftOffset(): number;
  set slugInsideOrLeftOffset(value: MeasurementValue);
  /** The amount to offset the outside or right slug. Note: To set the slug right or outside offset, document slug uniform size must be false. */
  get slugRightOrOutsideOffset(): number;
  set slugRightOrOutsideOffset(value: MeasurementValue);
  /** If true, uses the slug top offset value for slug measurements on all sides of the document. The default value is false. */
  get documentSlugUniformSize(): boolean;
  set documentSlugUniformSize(value: boolean);
  /**
   * If true, preserves the layout of spreads that contained more than two pages when allow
   * page shuffle was turned on.
   *
   * If false, changes multi-page spreads to two-page spreads if the spreads were created or
   * changed since allow page shuffle was turned on.
   */
  get preserveLayoutWhenShuffling(): boolean;
  set preserveLayoutWhenShuffling(value: boolean);
  /** If true, guarantees that when pages are added to a spread it will contain a maximum of two pages. If false, allows pages to be added or moved into existing spreads. For override information, see preserve layout when shuffling. */
  get allowPageShuffle(): boolean;
  set allowPageShuffle(value: boolean);
  /** If true, overprints black when saving the document. */
  get overprintBlack(): boolean;
  set overprintBlack(value: boolean);
  /** If true, denotes that the hidden spread is visible on document. If false, denotes that the hidden spread is not not visible on document. */
  get spreadHiddenVisibility(): boolean;
  set spreadHiddenVisibility(value: boolean);
  /** If true, locks column guides. */
  get columnGuideLocked(): boolean;
  set columnGuideLocked(value: boolean);
  /** The starting page number for a document. This is the same as the starting page number for the first section of a document. Default value is 1. */
  get startPageNumber(): number;
  set startPageNumber(value: number);
  /** What kind of output the document is intended for — print, web, or a mobile device; see {@link DocumentIntentOptions}. */
  get intent(): DocumentIntentOptions;
  set intent(value: DocumentIntentOptions);
  /** Whether pages are bound left-to-right or right-to-left; see {@link PageBindingOptions}. */
  get pageBinding(): PageBindingOptions;
  set pageBinding(value: PageBindingOptions);
  /** The direction of text in the column. */
  get columnDirection(): HorizontalOrVertical;
  set columnDirection(value: HorizontalOrVertical);
  /** The size of the page. */
  get pageSize(): string;
  set pageSize(value: string);
  /** If true, causes UI-based snippet import to use original location for page items. */
  get snippetImportUsesOriginalLocation(): boolean;
  set snippetImportUsesOriginalLocation(value: boolean);
}


/**
 * The broadcast proxy for {@link DocumentPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link DocumentPreference} there.
 */
export interface DocumentPreferencePlural {
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
  get properties(): (PropertiesGetter<DocumentPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<DocumentPreferencePlural, 'plural'>);
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
  readonly constructorName: 'DocumentPreference';
  /** Resolves the proxy into the individual {@link DocumentPreference} objects it stands for. */
  getElements(): DocumentPreference[];
  /** The height of the page. */
  get pageHeight(): (number)[];
  set pageHeight(value: MeasurementValue);
  /** The width of the page. */
  get pageWidth(): (number)[];
  set pageWidth(value: MeasurementValue);
  /** Whether the page is wider than it is tall, or taller than it is wide — see {@link PageOrientation}. */
  get pageOrientation(): (PageOrientation)[];
  set pageOrientation(value: PageOrientation);
  /** The color of the column guides, specified either as an array of three doubles, each in the range 0 to 255 and representing R, G, and B values,, or as a UI color. */
  get columnGuideColor(): (number[] | UIColors)[];
  set columnGuideColor(value: number[] | UIColors);
  /** The color of the margin guides, specified either as an array of three doubles, each in the range 0 to 255, representing R, G, and B values, or as a UI color. */
  get marginGuideColor(): (number[] | UIColors)[];
  set marginGuideColor(value: number[] | UIColors);
  /** If true, the document A-master has primary text frames when a new document is created. */
  get createPrimaryTextFrame(): (boolean)[];
  set createPrimaryTextFrame(value: boolean);
  /** The number of pages in the document. (Range: 1 to 9999) */
  get pagesPerDocument(): (number)[];
  set pagesPerDocument(value: number);
  /** If true, the document has facing pages. */
  get facingPages(): (boolean)[];
  set facingPages(value: boolean);
  /** The amount to offset the top document bleed. */
  get documentBleedTopOffset(): (number)[];
  set documentBleedTopOffset(value: MeasurementValue);
  /** The amount to offset the bottom document bleed. Note: To set the bleed bottom offset, document bleed uniform size must be false. */
  get documentBleedBottomOffset(): (number)[];
  set documentBleedBottomOffset(value: MeasurementValue);
  /** The amount to offset the inside or left document bleed. Note: To set the bleed inside or left offset, document bleed uniform size must be false. */
  get documentBleedInsideOrLeftOffset(): (number)[];
  set documentBleedInsideOrLeftOffset(value: MeasurementValue);
  /** The amount to offset the outside or right document bleed. Note: To set the bleed outside or right offset, document bleed uniform size must be false. */
  get documentBleedOutsideOrRightOffset(): (number)[];
  set documentBleedOutsideOrRightOffset(value: MeasurementValue);
  /** If true, uses the document bleed top offset value for bleed offset measurements on all sides of the document. The default setting is true. */
  get documentBleedUniformSize(): (boolean)[];
  set documentBleedUniformSize(value: boolean);
  /** The amount to offset the top slug. */
  get slugTopOffset(): (number)[];
  set slugTopOffset(value: MeasurementValue);
  /** The amount to offset the bottom slug. Note: To set the slug bottom offset, document slug uniform size must be false. */
  get slugBottomOffset(): (number)[];
  set slugBottomOffset(value: MeasurementValue);
  /** The amount to offset the inside or left slug. Note: To set the slug inside or left offset, document slug uniform size must be false. */
  get slugInsideOrLeftOffset(): (number)[];
  set slugInsideOrLeftOffset(value: MeasurementValue);
  /** The amount to offset the outside or right slug. Note: To set the slug right or outside offset, document slug uniform size must be false. */
  get slugRightOrOutsideOffset(): (number)[];
  set slugRightOrOutsideOffset(value: MeasurementValue);
  /** If true, uses the slug top offset value for slug measurements on all sides of the document. The default value is false. */
  get documentSlugUniformSize(): (boolean)[];
  set documentSlugUniformSize(value: boolean);
  /**
   * If true, preserves the layout of spreads that contained more than two pages when allow
   * page shuffle was turned on.
   *
   * If false, changes multi-page spreads to two-page spreads if the spreads were created or
   * changed since allow page shuffle was turned on.
   */
  get preserveLayoutWhenShuffling(): (boolean)[];
  set preserveLayoutWhenShuffling(value: boolean);
  /** If true, guarantees that when pages are added to a spread it will contain a maximum of two pages. If false, allows pages to be added or moved into existing spreads. For override information, see preserve layout when shuffling. */
  get allowPageShuffle(): (boolean)[];
  set allowPageShuffle(value: boolean);
  /** If true, overprints black when saving the document. */
  get overprintBlack(): (boolean)[];
  set overprintBlack(value: boolean);
  /** If true, denotes that the hidden spread is visible on document. If false, denotes that the hidden spread is not not visible on document. */
  get spreadHiddenVisibility(): (boolean)[];
  set spreadHiddenVisibility(value: boolean);
  /** If true, locks column guides. */
  get columnGuideLocked(): (boolean)[];
  set columnGuideLocked(value: boolean);
  /** The starting page number for a document. This is the same as the starting page number for the first section of a document. Default value is 1. */
  get startPageNumber(): (number)[];
  set startPageNumber(value: number);
  /** What kind of output the document is intended for — print, web, or a mobile device; see {@link DocumentIntentOptions}. */
  get intent(): (DocumentIntentOptions)[];
  set intent(value: DocumentIntentOptions);
  /** Whether pages are bound left-to-right or right-to-left; see {@link PageBindingOptions}. */
  get pageBinding(): (PageBindingOptions)[];
  set pageBinding(value: PageBindingOptions);
  /** The direction of text in the column. */
  get columnDirection(): (HorizontalOrVertical)[];
  set columnDirection(value: HorizontalOrVertical);
  /** The size of the page. */
  get pageSize(): (string)[];
  set pageSize(value: string);
  /** If true, causes UI-based snippet import to use original location for page items. */
  get snippetImportUsesOriginalLocation(): (boolean)[];
  set snippetImportUsesOriginalLocation(value: boolean);
}
