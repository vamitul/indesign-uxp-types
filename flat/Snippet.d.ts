/**
 * Snippet.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { PlaceGun } from './PlaceGun';
import type { PageItems } from './PageItems';
import type { TextFrames } from './TextFrames';
import type { Rectangles } from './Rectangles';
import type { SplineItems } from './SplineItems';
import type { Ovals } from './Ovals';
import type { GraphicLines } from './GraphicLines';
import type { Polygons } from './Polygons';
import type { Groups } from './Groups';
import type { Buttons } from './Buttons';
import type { FormFields } from './FormFields';
import type { MultiStateObjects } from './MultiStateObjects';
import type { EPSTexts } from './EPSTexts';
import type { Images } from './Images';
import type { Graphics } from './Graphics';
import type { EPSs } from './EPSs';
import type { WMFs } from './WMFs';
import type { PICTs } from './PICTs';
import type { PDFs } from './PDFs';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { ListBoxes } from './ListBoxes';
import type { RadioButtons } from './RadioButtons';
import type { TextBoxes } from './TextBoxes';
import type { SignatureFields } from './SignatureFields';
import type { SVGs } from './SVGs';
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
 * An IDML snippet loaded into the place gun, ready to be placed into a
 * document. Exposes the page items it contains through the same child
 * collection accessors as a container object.
 */
export interface Snippet {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: PlaceGun;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Snippet, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Snippet, 'single'>);
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
  readonly constructorName: 'Snippet';
  /** Resolves the proxy into the individual {@link Snippet} objects it stands for. */
  getElements(): Snippet[];
  /** The unique ID of the snippet. */
  readonly id: number;
  /** All page items in the snippet regardless of type. */
  readonly pageItems: PageItems<Snippet>;
  /** Text frames in the snippet. */
  readonly textFrames: TextFrames<Snippet>;
  /** Rectangles in the snippet. */
  readonly rectangles: Rectangles<Snippet>;
  /** Spline items (rectangles, ovals, polygons, graphic lines) in the snippet. */
  readonly splineItems: SplineItems<Snippet>;
  /** Ellipses in the snippet. */
  readonly ovals: Ovals<Snippet>;
  /** Graphic lines in the snippet. */
  readonly graphicLines: GraphicLines<Snippet>;
  /** Polygons in the snippet. */
  readonly polygons: Polygons<Snippet>;
  /** Groups in the snippet. */
  readonly groups: Groups<Snippet>;
  /** Buttons in the snippet. */
  readonly buttons: Buttons<Snippet>;
  /** Form fields of every kind in the snippet. */
  readonly formFields: FormFields<Snippet>;
  /** Multi-state objects in the snippet. */
  readonly multiStateObjects: MultiStateObjects<Snippet>;
  /** EPSTexts in the snippet. */
  readonly epstexts: EPSTexts<Snippet>;
  /** Bitmap images in the snippet. */
  readonly images: Images<Snippet>;
  /** Imported graphics of any format in the snippet. */
  readonly graphics: Graphics<Snippet>;
  /** EPS files in the snippet. */
  readonly epss: EPSs<Snippet>;
  /** WMF graphics in the snippet. */
  readonly wmfs: WMFs<Snippet>;
  /** PICT graphics in the snippet. */
  readonly picts: PICTs<Snippet>;
  /** PDF files in the snippet. */
  readonly pdfs: PDFs<Snippet>;
  /** Checkboxes in the snippet. */
  readonly checkBoxes: CheckBoxes<Snippet>;
  /** Comboboxes in the snippet. */
  readonly comboBoxes: ComboBoxes<Snippet>;
  /** Listboxes in the snippet. */
  readonly listBoxes: ListBoxes<Snippet>;
  /** Radio buttons in the snippet. */
  readonly radioButtons: RadioButtons<Snippet>;
  /** Text boxes in the snippet. */
  readonly textBoxes: TextBoxes<Snippet>;
  /** Signature fields in the snippet. */
  readonly signatureFields: SignatureFields<Snippet>;
  /** SVG files in the snippet. */
  readonly svgs: SVGs<Snippet>;
  /** Deletes the snippet. */
  remove(): void;
}


/**
 * The broadcast proxy for {@link Snippet} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Snippet} there.
 */
export interface SnippetPlural {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (PlaceGun)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<SnippetPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<SnippetPlural, 'plural'>);
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
  readonly constructorName: 'Snippet';
  /** Resolves the proxy into the individual {@link Snippet} objects it stands for. */
  getElements(): Snippet[];
  /** The unique ID of the snippet. */
  readonly id: (number)[];
  /** All page items in the snippet regardless of type. */
  readonly pageItems: PageItems<Snippet>;
  /** Text frames in the snippet. */
  readonly textFrames: TextFrames<Snippet>;
  /** Rectangles in the snippet. */
  readonly rectangles: Rectangles<Snippet>;
  /** Spline items (rectangles, ovals, polygons, graphic lines) in the snippet. */
  readonly splineItems: SplineItems<Snippet>;
  /** Ellipses in the snippet. */
  readonly ovals: Ovals<Snippet>;
  /** Graphic lines in the snippet. */
  readonly graphicLines: GraphicLines<Snippet>;
  /** Polygons in the snippet. */
  readonly polygons: Polygons<Snippet>;
  /** Groups in the snippet. */
  readonly groups: Groups<Snippet>;
  /** Buttons in the snippet. */
  readonly buttons: Buttons<Snippet>;
  /** Form fields of every kind in the snippet. */
  readonly formFields: FormFields<Snippet>;
  /** Multi-state objects in the snippet. */
  readonly multiStateObjects: MultiStateObjects<Snippet>;
  /** EPSTexts in the snippet. */
  readonly epstexts: EPSTexts<Snippet>;
  /** Bitmap images in the snippet. */
  readonly images: Images<Snippet>;
  /** Imported graphics of any format in the snippet. */
  readonly graphics: Graphics<Snippet>;
  /** EPS files in the snippet. */
  readonly epss: EPSs<Snippet>;
  /** WMF graphics in the snippet. */
  readonly wmfs: WMFs<Snippet>;
  /** PICT graphics in the snippet. */
  readonly picts: PICTs<Snippet>;
  /** PDF files in the snippet. */
  readonly pdfs: PDFs<Snippet>;
  /** Checkboxes in the snippet. */
  readonly checkBoxes: CheckBoxes<Snippet>;
  /** Comboboxes in the snippet. */
  readonly comboBoxes: ComboBoxes<Snippet>;
  /** Listboxes in the snippet. */
  readonly listBoxes: ListBoxes<Snippet>;
  /** Radio buttons in the snippet. */
  readonly radioButtons: RadioButtons<Snippet>;
  /** Text boxes in the snippet. */
  readonly textBoxes: TextBoxes<Snippet>;
  /** Signature fields in the snippet. */
  readonly signatureFields: SignatureFields<Snippet>;
  /** SVG files in the snippet. */
  readonly svgs: SVGs<Snippet>;
  /** Deletes the snippet. */
  remove(): (void)[];
}
