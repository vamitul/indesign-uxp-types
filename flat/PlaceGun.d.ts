/**
 * PlaceGun.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Snippets } from './Snippets';
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
import type { ImportedPages } from './ImportedPages';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { ListBoxes } from './ListBoxes';
import type { RadioButtons } from './RadioButtons';
import type { TextBoxes } from './TextBoxes';
import type { SignatureFields } from './SignatureFields';
import type { SVGs } from './SVGs';
import type { RotationDirection } from './Enums/RotationDirection';
import type { FilePath } from './_base/Types';
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
 * The "place gun" — content loaded onto the cursor via {@link loadPlaceGun},
 * ready to be placed with a subsequent click or drag.
 */
export interface PlaceGun {
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
  get properties(): PropertiesGetter<PlaceGun, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PlaceGun, 'single'>);
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
  readonly constructorName: 'PlaceGun';
  /** Resolves the proxy into the individual {@link PlaceGun} objects it stands for. */
  getElements(): PlaceGun[];
  /** If `true`, the place gun is currently loaded with content. */
  readonly loaded: boolean;
  /** Snippets currently loaded in the place gun. */
  readonly snippets: Snippets;
  /** All page items currently loaded in the place gun. */
  readonly pageItems: PageItems<PlaceGun>;
  /** Text frames currently loaded in the place gun. */
  readonly textFrames: TextFrames<PlaceGun>;
  /** Rectangles currently loaded in the place gun. */
  readonly rectangles: Rectangles<PlaceGun>;
  /** Spline items currently loaded in the place gun. */
  readonly splineItems: SplineItems<PlaceGun>;
  /** Ovals currently loaded in the place gun. */
  readonly ovals: Ovals<PlaceGun>;
  /** Graphic lines currently loaded in the place gun. */
  readonly graphicLines: GraphicLines<PlaceGun>;
  /** Polygons currently loaded in the place gun. */
  readonly polygons: Polygons<PlaceGun>;
  /** Groups currently loaded in the place gun. */
  readonly groups: Groups<PlaceGun>;
  /** Buttons currently loaded in the place gun. */
  readonly buttons: Buttons<PlaceGun>;
  /** Form fields currently loaded in the place gun. */
  readonly formFields: FormFields<PlaceGun>;
  /** Multi-state objects currently loaded in the place gun. */
  readonly multiStateObjects: MultiStateObjects<PlaceGun>;
  /** EPS-text items currently loaded in the place gun. */
  readonly epstexts: EPSTexts<PlaceGun>;
  /** Placed raster images currently loaded in the place gun. */
  readonly images: Images<PlaceGun>;
  /** All placed graphics currently loaded in the place gun. */
  readonly graphics: Graphics<PlaceGun>;
  /** Placed EPS files currently loaded in the place gun. */
  readonly epss: EPSs<PlaceGun>;
  /** Placed WMF files currently loaded in the place gun. */
  readonly wmfs: WMFs<PlaceGun>;
  /** Placed PICT files currently loaded in the place gun. */
  readonly picts: PICTs<PlaceGun>;
  /** Placed PDF files currently loaded in the place gun. */
  readonly pdfs: PDFs<PlaceGun>;
  /** Placed imported pages currently loaded in the place gun. */
  readonly importedPages: ImportedPages<PlaceGun>;
  /** Check boxes currently loaded in the place gun. */
  readonly checkBoxes: CheckBoxes<PlaceGun>;
  /** Combo boxes currently loaded in the place gun. */
  readonly comboBoxes: ComboBoxes<PlaceGun>;
  /** List boxes currently loaded in the place gun. */
  readonly listBoxes: ListBoxes<PlaceGun>;
  /** Radio buttons currently loaded in the place gun. */
  readonly radioButtons: RadioButtons<PlaceGun>;
  /** Text boxes currently loaded in the place gun. */
  readonly textBoxes: TextBoxes<PlaceGun>;
  /** Signature fields currently loaded in the place gun. */
  readonly signatureFields: SignatureFields<PlaceGun>;
  /** SVG files currently loaded in the place gun. */
  readonly svgs: SVGs<PlaceGun>;
  /** Deletes the contents of the place gun. */
  abortPlaceGun(): void;
  /** Rotates the contents of the place gun, cycling which loaded item places next. */
  rotate(direction?: RotationDirection): void;
  /**
   * Loads the place gun with one or more files.
   * @param showingOptions Whether to display the import options dialog. Defaults to `false`.
   * @param withProperties Initial values for properties of the placed object(s).
   */
  loadPlaceGun(
    fileName: FilePath | FilePath[],
    showingOptions?: boolean,
    withProperties?: object,
  ): void;
}


/**
 * The broadcast proxy for {@link PlaceGun} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PlaceGun} there.
 */
export interface PlaceGunPlural {
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
  get properties(): (PropertiesGetter<PlaceGunPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PlaceGunPlural, 'plural'>);
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
  readonly constructorName: 'PlaceGun';
  /** Resolves the proxy into the individual {@link PlaceGun} objects it stands for. */
  getElements(): PlaceGun[];
  /** If `true`, the place gun is currently loaded with content. */
  readonly loaded: (boolean)[];
  /** Snippets currently loaded in the place gun. */
  readonly snippets: Snippets;
  /** All page items currently loaded in the place gun. */
  readonly pageItems: PageItems<PlaceGun>;
  /** Text frames currently loaded in the place gun. */
  readonly textFrames: TextFrames<PlaceGun>;
  /** Rectangles currently loaded in the place gun. */
  readonly rectangles: Rectangles<PlaceGun>;
  /** Spline items currently loaded in the place gun. */
  readonly splineItems: SplineItems<PlaceGun>;
  /** Ovals currently loaded in the place gun. */
  readonly ovals: Ovals<PlaceGun>;
  /** Graphic lines currently loaded in the place gun. */
  readonly graphicLines: GraphicLines<PlaceGun>;
  /** Polygons currently loaded in the place gun. */
  readonly polygons: Polygons<PlaceGun>;
  /** Groups currently loaded in the place gun. */
  readonly groups: Groups<PlaceGun>;
  /** Buttons currently loaded in the place gun. */
  readonly buttons: Buttons<PlaceGun>;
  /** Form fields currently loaded in the place gun. */
  readonly formFields: FormFields<PlaceGun>;
  /** Multi-state objects currently loaded in the place gun. */
  readonly multiStateObjects: MultiStateObjects<PlaceGun>;
  /** EPS-text items currently loaded in the place gun. */
  readonly epstexts: EPSTexts<PlaceGun>;
  /** Placed raster images currently loaded in the place gun. */
  readonly images: Images<PlaceGun>;
  /** All placed graphics currently loaded in the place gun. */
  readonly graphics: Graphics<PlaceGun>;
  /** Placed EPS files currently loaded in the place gun. */
  readonly epss: EPSs<PlaceGun>;
  /** Placed WMF files currently loaded in the place gun. */
  readonly wmfs: WMFs<PlaceGun>;
  /** Placed PICT files currently loaded in the place gun. */
  readonly picts: PICTs<PlaceGun>;
  /** Placed PDF files currently loaded in the place gun. */
  readonly pdfs: PDFs<PlaceGun>;
  /** Placed imported pages currently loaded in the place gun. */
  readonly importedPages: ImportedPages<PlaceGun>;
  /** Check boxes currently loaded in the place gun. */
  readonly checkBoxes: CheckBoxes<PlaceGun>;
  /** Combo boxes currently loaded in the place gun. */
  readonly comboBoxes: ComboBoxes<PlaceGun>;
  /** List boxes currently loaded in the place gun. */
  readonly listBoxes: ListBoxes<PlaceGun>;
  /** Radio buttons currently loaded in the place gun. */
  readonly radioButtons: RadioButtons<PlaceGun>;
  /** Text boxes currently loaded in the place gun. */
  readonly textBoxes: TextBoxes<PlaceGun>;
  /** Signature fields currently loaded in the place gun. */
  readonly signatureFields: SignatureFields<PlaceGun>;
  /** SVG files currently loaded in the place gun. */
  readonly svgs: SVGs<PlaceGun>;
  /** Deletes the contents of the place gun. */
  abortPlaceGun(): (void)[];
  /** Rotates the contents of the place gun, cycling which loaded item places next. */
  rotate(direction?: RotationDirection): (void)[];
  /**
   * Loads the place gun with one or more files.
   * @param showingOptions Whether to display the import options dialog. Defaults to `false`.
   * @param withProperties Initial values for properties of the placed object(s).
   */
  loadPlaceGun(
    fileName: FilePath | FilePath[],
    showingOptions?: boolean,
    withProperties?: object,
  ): void;
}
