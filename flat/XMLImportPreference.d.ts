/**
 * XMLImportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { FilePath, File } from './_base/Types';
import type { XMLImportStyles } from './Enums/XMLImportStyles';
import type { XMLTransformFile } from './Enums/XMLTransformFile';
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
 * Settings controlling how an XML file's structure and content map onto the
 * document during import — merge behavior, table handling, and optional XSLT
 * transformation.
 */
export interface XMLImportPreference {
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
  get properties(): PropertiesGetter<XMLImportPreference, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<XMLImportPreference, 'single'>);
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
  readonly constructorName: 'XMLImportPreference';
  /** Resolves the proxy into the individual {@link XMLImportPreference} objects it stands for. */
  getElements(): XMLImportPreference[];
  /** If true, creates a link to the imported XML file. If false, embeds the file. */
  get createLinkToXML(): boolean;
  set createLinkToXML(value: boolean);
  /** If true, repeating text elements inherit the formatting applied to placeholder text. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get repeatTextElements(): boolean;
  set repeatTextElements(value: boolean);
  /** If true, ignores elements that do not match the existing structure. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get ignoreUnmatchedIncoming(): boolean;
  set ignoreUnmatchedIncoming(value: boolean);
  /** If true, imports text into tables if tags match placeholder tables and their cells. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get importTextIntoTables(): boolean;
  set importTextIntoTables(value: boolean);
  /** If true, leaves existing content in place if the matching XML content contains only whitespace characters such as a carriage return or a tab character. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get ignoreWhitespace(): boolean;
  set ignoreWhitespace(value: boolean);
  /** If true, deletes existing elements or placeholders in the document that do not have matches in the XML file. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get removeUnmatchedExisting(): boolean;
  set removeUnmatchedExisting(value: boolean);
  /** If true, imports into the selected XML element. If false, imports at the root element. */
  get importToSelected(): boolean;
  set importToSelected(value: boolean);
  /** Whether imported XML content is appended or merged into the existing structure. See {@link XMLImportStyles}. */
  get importStyle(): XMLImportStyles;
  set importStyle(value: XMLImportStyles);
  /** If true, transforms the XML using an XSLT file. */
  get allowTransform(): boolean;
  set allowTransform(value: boolean);
  /** The name of the XSLT file. Note: Valid when allow transform is true. */
  get transformFilename(): Promise<File> | XMLTransformFile;
  set transformFilename(value: FilePath | XMLTransformFile);
  /** Stylesheet parameters as a list of name/value pairs in the format [[name, value], [name, value],...]. */
  get transformParameters(): [name: string, value: string][];
  set transformParameters(value: [name: string, value: string][]);
  /** If true, imports CALS tables as InDesign tables. */
  get importCALSTables(): boolean;
  set importCALSTables(value: boolean);
}


/**
 * The broadcast proxy for {@link XMLImportPreference} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link XMLImportPreference} there.
 */
export interface XMLImportPreferencePlural {
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
  get properties(): (PropertiesGetter<XMLImportPreferencePlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<XMLImportPreferencePlural, 'plural'>);
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
  readonly constructorName: 'XMLImportPreference';
  /** Resolves the proxy into the individual {@link XMLImportPreference} objects it stands for. */
  getElements(): XMLImportPreference[];
  /** If true, creates a link to the imported XML file. If false, embeds the file. */
  get createLinkToXML(): (boolean)[];
  set createLinkToXML(value: boolean);
  /** If true, repeating text elements inherit the formatting applied to placeholder text. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get repeatTextElements(): (boolean)[];
  set repeatTextElements(value: boolean);
  /** If true, ignores elements that do not match the existing structure. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get ignoreUnmatchedIncoming(): (boolean)[];
  set ignoreUnmatchedIncoming(value: boolean);
  /** If true, imports text into tables if tags match placeholder tables and their cells. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get importTextIntoTables(): (boolean)[];
  set importTextIntoTables(value: boolean);
  /** If true, leaves existing content in place if the matching XML content contains only whitespace characters such as a carriage return or a tab character. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get ignoreWhitespace(): (boolean)[];
  set ignoreWhitespace(value: boolean);
  /** If true, deletes existing elements or placeholders in the document that do not have matches in the XML file. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get removeUnmatchedExisting(): (boolean)[];
  set removeUnmatchedExisting(value: boolean);
  /** If true, imports into the selected XML element. If false, imports at the root element. */
  get importToSelected(): (boolean)[];
  set importToSelected(value: boolean);
  /** Whether imported XML content is appended or merged into the existing structure. See {@link XMLImportStyles}. */
  get importStyle(): (XMLImportStyles)[];
  set importStyle(value: XMLImportStyles);
  /** If true, transforms the XML using an XSLT file. */
  get allowTransform(): (boolean)[];
  set allowTransform(value: boolean);
  /** The name of the XSLT file. Note: Valid when allow transform is true. */
  get transformFilename(): (Promise<File> | XMLTransformFile)[];
  set transformFilename(value: FilePath | XMLTransformFile);
  /** Stylesheet parameters as a list of name/value pairs in the format [[name, value], [name, value],...]. */
  get transformParameters(): ([name: string, value: string][])[];
  set transformParameters(value: [name: string, value: string][]);
  /** If true, imports CALS tables as InDesign tables. */
  get importCALSTables(): (boolean)[];
  set importCALSTables(value: boolean);
}
