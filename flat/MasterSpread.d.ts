/**
 * MasterSpread.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { AnyPageItem } from './_base/Unions';
import type { IndexedDOMObject, LabelableEventDOMObject, ReadonlyNamedDOMObject } from './_base/DomObjects';
import type {
  DeepPageItemHolder,
  EndnoteFrameContainer,
  FlexObjectContainer,
  FormFieldContainer,
  PageItemHolder,
  ShapeContainer,
  TransformOrigin,
  TransformMatrixValue,
  MatrixContentValue,
  BoundsSpecifier,
} from './_base/PageItemMixins';
import type { MeasurementValue, FilePath } from './_base/Types';

import type { CoordinateSpaces } from './Enums/CoordinateSpaces';
import type { LocationOptions } from './Enums/LocationOptions';
import type { NothingEnum } from './Enums/NothingEnum';
import type { PageColorOptions } from './Enums/PageColorOptions';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { UIColors } from './Enums/UIColors';

import type { Document } from './Document';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { TransformationMatrix } from './TransformationMatrix';
import type { Graphic } from './Graphic';
import type { Guides } from './Guides';
import type { Layer } from './Layer';
import type { PageItem } from './PageItem';
import type { Pages } from './Pages';
import type { Preferences } from './Preferences';
import type { Story } from './Story';
import type { TimingSetting } from './TimingSetting';
import type { XMLElement } from './XMLElement';
import type { Page } from './Page';
import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { EPSTexts } from './EPSTexts';
import type { FlexObjects } from './FlexObjects';
import type { FormFields } from './FormFields';
import type { GraphicLines } from './GraphicLines';
import type { Groups } from './Groups';
import type { ListBoxes } from './ListBoxes';
import type { MultiStateObjects } from './MultiStateObjects';
import type { Ovals } from './Ovals';
import type { PageItems } from './PageItems';
import type { Polygons } from './Polygons';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { SignatureFields } from './SignatureFields';
import type { SplineItems } from './SplineItems';
import type { TextBoxes } from './TextBoxes';
import type { TextFrames } from './TextFrames';
import type { AnyGraphic } from './_base/Unions';
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
 * A master spread: a reusable template spread whose page items propagate to
 * every {@link Page} it is applied to.
 *
 * Adds the split display name (`namePrefix`/`baseName`), the primary text
 * frame for master-page text threading, and the applied-master chain (a
 * master can be based on another master).
 */
export interface MasterSpread {
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
  get properties(): PropertiesGetter<MasterSpread, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<MasterSpread, 'single'>);
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
  /** The object's name. Derived by InDesign and not assignable. */
  readonly name: string;
  /** All {@link PageItems} in this container regardless of type — the general-purpose iterator for mixed content. */
  readonly pageItems: PageItems<MasterSpread>;
  /** Every {@link Graphic} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: AnyGraphic[];
  /** Every {@link PageItem} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: AnyPageItem[];
  /** {@link Ovals} (ellipses) directly in this container. */
  readonly ovals: Ovals<MasterSpread>;
  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) directly in this container. */
  readonly splineItems: SplineItems<MasterSpread>;
  /** {@link Rectangles} directly in this container. */
  readonly rectangles: Rectangles<MasterSpread>;
  /** {@link GraphicLines} directly in this container. */
  readonly graphicLines: GraphicLines<MasterSpread>;
  /** {@link TextFrames} directly in this container. */
  readonly textFrames: TextFrames<MasterSpread>;
  /** {@link Polygons} directly in this container. */
  readonly polygons: Polygons<MasterSpread>;
  /** {@link Groups} directly in this container. */
  readonly groups: Groups<MasterSpread>;
  /** {@link EPSTexts} directly in this container. */
  readonly epstexts: EPSTexts<MasterSpread>;
  /** {@link FormFields} of every kind directly in this container. */
  readonly formFields: FormFields<MasterSpread>;
  /** {@link Buttons} directly in this container. */
  readonly buttons: Buttons<MasterSpread>;
  /** {@link MultiStateObjects} directly in this container. */
  readonly multiStateObjects: MultiStateObjects<MasterSpread>;
  /** {@link CheckBoxes} directly in this container. */
  readonly checkBoxes: CheckBoxes<MasterSpread>;
  /** {@link ComboBoxes} directly in this container. */
  readonly comboBoxes: ComboBoxes<MasterSpread>;
  /** {@link ListBoxes} directly in this container. */
  readonly listBoxes: ListBoxes<MasterSpread>;
  /** {@link RadioButtons} directly in this container. */
  readonly radioButtons: RadioButtons<MasterSpread>;
  /** {@link TextBoxes} directly in this container. */
  readonly textBoxes: TextBoxes<MasterSpread>;
  /** {@link SignatureFields} directly in this container. */
  readonly signatureFields: SignatureFields<MasterSpread>;
  /** {@link FlexObjects} directly in this container. */
  readonly flexObjects: FlexObjects<MasterSpread>;
  /** The object's DOM class name. */
  readonly constructorName: 'MasterSpread';
  /** Resolves the proxy into the individual {@link MasterSpread} objects it stands for. */
  getElements(): MasterSpread[];
  /** The unique numeric ID of the master spread within its document. Stable across reordering, unlike {@link index}. */
  readonly id: number;
  /** The master spread's object timing settings — see {@link TimingSetting}. */
  readonly timingSettings: TimingSetting;
  /** {@link Pages} that make up this master spread. */
  readonly pages: Pages<MasterSpread>;
  /** {@link EndnoteTextFrames} directly on this master spread. */
  readonly endnoteTextFrames: EndnoteTextFrames<MasterSpread>;
  /** {@link Guides} on this master spread. */
  readonly guides: Guides;
  /** A collection of {@link Preferences} objects scoped to this master spread. */
  readonly preferences: Preferences;
  /**
   * The master spread's color label. Assign an `[R, G, B]` triple (each
   * `0`–`255`), a named {@link UIColors} value, or a {@link PageColorOptions} value.
   */
  get pageColor(): [number, number, number] | UIColors | PageColorOptions;
  set pageColor(value: [number, number, number] | UIColors | PageColorOptions);
  /** The prefix of the master spread's display name (for example `'A'` in `'A-Master'`). */
  get namePrefix(): string;
  set namePrefix(value: string);
  /** The base name of the master spread (for example `'Master'` in `'A-Master'`). */
  get baseName(): string;
  set baseName(value: string);
  /** Whether master-page items are displayed on document pages using this master. */
  get showMasterItems(): boolean;
  set showMasterItems(value: boolean);
  /** The parent {@link MasterSpread} this one is based on. Assign a master spread or its name; assign {@link NothingEnum.NOTHING} to remove it. */
  get appliedMaster(): MasterSpread;
  set appliedMaster(value: MasterSpread | string | NothingEnum);
  /**
   * The text frame (or text-on-path spline) through which text flows on this
   * master spread. Assign a page item or its name; assign
   * {@link NothingEnum.NOTHING} to clear it.
   */
  get primaryTextFrame(): PageItem;
  set primaryTextFrame(value: PageItem | string | NothingEnum);
  /** The IDML component name of the master spread. */
  get idmlComponentName(): string;
  set idmlComponentName(value: string);
  /**
   * Duplicates the master spread.
   * @param to Where to place the duplicate relative to `reference`, or at a
   * document end/beginning. Defaults to `LocationOptions.AT_END`.
   * @param reference The master spread or document to duplicate relative to.
   * Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  duplicate(to?: LocationOptions, reference?: MasterSpread | Document): MasterSpread;
  /**
   * Creates a linked story and places it into the master spread. @deprecated Use {@link contentPlace}.
   * @param placePoint Point to place at, in the format `[x, y]`.
   * @param destinationLayer The layer to place onto.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  placeAndLink(parentStory: Story, placePoint?: MeasurementValue[], destinationLayer?: Layer, showingOptions?: boolean): Story;
  /**
   * Places a file onto the master spread, returning the placed object(s).
   *
   * Placing an image returns the **graphic** (`Image`, `PDF`, `EPS`…),
   * not the frame InDesign creates around it. Sizing and moving belong to the frame,
   * which is the graphic's `parent` — narrow it before use, since a graphic can also
   * sit in a cell or a snippet:
   *
   * ```ts
   * const img = master.place(file)[0];
   * if (img && img.parent.constructorName === 'Rectangle') {
   *   img.parent.fit(FitOptions.PROPORTIONALLY);
   * }
   * ```
   * @param fileName Path to the asset to place.
   * @param placePoint Point to place at, in the format `[x, y]`.
   * @param destinationLayer The layer to place onto.
   * @param showingOptions If `true`, shows the format's import-options dialog. Defaults to `false`.
   * @param autoflowing If `true`, autoflows placed text. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   */
  place(fileName: FilePath, placePoint?: MeasurementValue[], destinationLayer?: Layer, showingOptions?: boolean, autoflowing?: boolean, withProperties?: object): AnyPageItem[];
  /** Deletes the master spread. */
  remove(): void;
  /** Removes a previous master-item override from an item on this master spread. */
  removeOverride(): void;
  /** Detaches an overridden master item on this master spread from its master. */
  detach(): void;
  /**
   * Selects the master spread in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): void;
  /**
   * Creates a grid of guides across every page of the master spread.
   * @param numberOfRows Rows to create on each page. Range `0`–`40`. Defaults to `0`.
   * @param numberOfColumns Columns to create on each page. Range `0`–`40`. Defaults to `0`.
   * @param rowGutter Gutter height between rows. Range `0`–`1440`. Defaults to `0`.
   * @param columnGutter Gutter width between columns. Range `0`–`1440`. Defaults to `0`.
   * @param guideColor Color for the new guides: an `[R, G, B]` triple or a named {@link UIColors} value.
   * @param fitMargins If `true`, row/column sizing is based on the space within the page margins rather than the full page. Defaults to `false`.
   * @param removeExisting If `true`, removes existing guides before creating the new ones. Defaults to `false`.
   * @param layer The layer to create the guides on.
   */
  createGuides(
    numberOfRows?: number,
    numberOfColumns?: number,
    rowGutter?: MeasurementValue,
    columnGutter?: MeasurementValue,
    guideColor?: [number, number, number] | UIColors,
    fitMargins?: boolean,
    removeExisting?: boolean,
    layer?: Layer,
  ): void;
  /**
   * Applies an affine transform to the master spread's content within a coordinate space.
   * @param inCoordinateSpace The space the transform is expressed in.
   * @param from Temporary transform origin — see {@link TransformOrigin}.
   * @param withMatrix The transform, as a {@link TransformationMatrix} or six reals.
   * @param replacingCurrent When given, replaces the listed transform components instead of concatenating.
   * @param consideringRulerUnits When `true`, a ruler-relative origin is read in ruler units rather than points. Defaults to `false`.
   */
  transform(
    inCoordinateSpace: CoordinateSpaces,
    from: TransformOrigin,
    withMatrix: TransformMatrixValue,
    replacingCurrent?: MatrixContentValue,
    consideringRulerUnits?: boolean,
  ): void;
  /** Returns the master spread's transform, decomposed per coordinate space. */
  transformValuesOf(inCoordinateSpace: CoordinateSpaces): TransformationMatrix[];
  /**
   * Resolves a location to concrete coordinates in the given space.
   * @param location The point or anchor to resolve.
   * @param inCoordinateSpace The space to report the result in.
   * @param consideringRulerUnits When `true`, interprets a ruler-relative location in ruler units rather than points. Defaults to `false`.
   */
  resolve(
    location: TransformOrigin,
    inCoordinateSpace: CoordinateSpaces,
    consideringRulerUnits?: boolean,
  ): Array<[number, number]>;
  /**
   * Loads the given page items into the content placer and places a linked or
   * unlinked duplicate onto this master spread.
   * @param linkPageItems If `true`, links the placed items to their source (overrides `linkStories`). Defaults to `false`.
   * @param linkStories If `true`, links placed stories (single-story placements only). Defaults to `false`.
   * @param mapStyles If `true`, maps source styles to destination styles. Defaults to `false`.
   * @param placePoint Point to place at, in the format `[x, y]`.
   * @param destinationLayer The layer to place onto.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  contentPlace(pageItems: PageItem | PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, placePoint?: MeasurementValue[], destinationLayer?: Layer, showingOptions?: boolean): PageItem[];
}


/**
 * The broadcast proxy for {@link MasterSpread} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link MasterSpread} there.
 */
export interface MasterSpreadPlural {
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
  get properties(): (PropertiesGetter<MasterSpreadPlural, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<MasterSpreadPlural, 'plural'>);
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
  /** The object's name. Derived by InDesign and not assignable. */
  readonly name: (string)[];
  /** All {@link PageItems} in this container regardless of type — the general-purpose iterator for mixed content. */
  readonly pageItems: PageItems<MasterSpread>;
  /** Every {@link Graphic} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: (AnyGraphic[])[];
  /** Every {@link PageItem} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: (AnyPageItem[])[];
  /** {@link Ovals} (ellipses) directly in this container. */
  readonly ovals: Ovals<MasterSpread>;
  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) directly in this container. */
  readonly splineItems: SplineItems<MasterSpread>;
  /** {@link Rectangles} directly in this container. */
  readonly rectangles: Rectangles<MasterSpread>;
  /** {@link GraphicLines} directly in this container. */
  readonly graphicLines: GraphicLines<MasterSpread>;
  /** {@link TextFrames} directly in this container. */
  readonly textFrames: TextFrames<MasterSpread>;
  /** {@link Polygons} directly in this container. */
  readonly polygons: Polygons<MasterSpread>;
  /** {@link Groups} directly in this container. */
  readonly groups: Groups<MasterSpread>;
  /** {@link EPSTexts} directly in this container. */
  readonly epstexts: EPSTexts<MasterSpread>;
  /** {@link FormFields} of every kind directly in this container. */
  readonly formFields: FormFields<MasterSpread>;
  /** {@link Buttons} directly in this container. */
  readonly buttons: Buttons<MasterSpread>;
  /** {@link MultiStateObjects} directly in this container. */
  readonly multiStateObjects: MultiStateObjects<MasterSpread>;
  /** {@link CheckBoxes} directly in this container. */
  readonly checkBoxes: CheckBoxes<MasterSpread>;
  /** {@link ComboBoxes} directly in this container. */
  readonly comboBoxes: ComboBoxes<MasterSpread>;
  /** {@link ListBoxes} directly in this container. */
  readonly listBoxes: ListBoxes<MasterSpread>;
  /** {@link RadioButtons} directly in this container. */
  readonly radioButtons: RadioButtons<MasterSpread>;
  /** {@link TextBoxes} directly in this container. */
  readonly textBoxes: TextBoxes<MasterSpread>;
  /** {@link SignatureFields} directly in this container. */
  readonly signatureFields: SignatureFields<MasterSpread>;
  /** {@link FlexObjects} directly in this container. */
  readonly flexObjects: FlexObjects<MasterSpread>;
  /** The object's DOM class name. */
  readonly constructorName: 'MasterSpread';
  /** Resolves the proxy into the individual {@link MasterSpread} objects it stands for. */
  getElements(): MasterSpread[];
  /** The unique numeric ID of the master spread within its document. Stable across reordering, unlike {@link index}. */
  readonly id: (number)[];
  /** The master spread's object timing settings — see {@link TimingSetting}. */
  readonly timingSettings: (TimingSetting)[];
  /** {@link Pages} that make up this master spread. */
  readonly pages: Pages<MasterSpread>;
  /** {@link EndnoteTextFrames} directly on this master spread. */
  readonly endnoteTextFrames: EndnoteTextFrames<MasterSpread>;
  /** {@link Guides} on this master spread. */
  readonly guides: Guides;
  /** A collection of {@link Preferences} objects scoped to this master spread. */
  readonly preferences: Preferences;
  /**
   * The master spread's color label. Assign an `[R, G, B]` triple (each
   * `0`–`255`), a named {@link UIColors} value, or a {@link PageColorOptions} value.
   */
  get pageColor(): ([number, number, number] | UIColors | PageColorOptions)[];
  set pageColor(value: [number, number, number] | UIColors | PageColorOptions);
  /** The prefix of the master spread's display name (for example `'A'` in `'A-Master'`). */
  get namePrefix(): (string)[];
  set namePrefix(value: string);
  /** The base name of the master spread (for example `'Master'` in `'A-Master'`). */
  get baseName(): (string)[];
  set baseName(value: string);
  /** Whether master-page items are displayed on document pages using this master. */
  get showMasterItems(): (boolean)[];
  set showMasterItems(value: boolean);
  /** The parent {@link MasterSpread} this one is based on. Assign a master spread or its name; assign {@link NothingEnum.NOTHING} to remove it. */
  get appliedMaster(): (MasterSpread)[];
  set appliedMaster(value: MasterSpread | string | NothingEnum);
  /**
   * The text frame (or text-on-path spline) through which text flows on this
   * master spread. Assign a page item or its name; assign
   * {@link NothingEnum.NOTHING} to clear it.
   */
  get primaryTextFrame(): (PageItem)[];
  set primaryTextFrame(value: PageItem | string | NothingEnum);
  /** The IDML component name of the master spread. */
  get idmlComponentName(): (string)[];
  set idmlComponentName(value: string);
  /**
   * Duplicates the master spread.
   * @param to Where to place the duplicate relative to `reference`, or at a
   * document end/beginning. Defaults to `LocationOptions.AT_END`.
   * @param reference The master spread or document to duplicate relative to.
   * Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  duplicate(to?: LocationOptions, reference?: MasterSpread | Document): (MasterSpread)[];
  /**
   * Creates a linked story and places it into the master spread. @deprecated Use {@link contentPlace}.
   * @param placePoint Point to place at, in the format `[x, y]`.
   * @param destinationLayer The layer to place onto.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  placeAndLink(parentStory: Story, placePoint?: MeasurementValue[], destinationLayer?: Layer, showingOptions?: boolean): (Story)[];
  /**
   * Places a file onto the master spread, returning the placed object(s).
   *
   * Placing an image returns the **graphic** (`Image`, `PDF`, `EPS`…),
   * not the frame InDesign creates around it. Sizing and moving belong to the frame,
   * which is the graphic's `parent` — narrow it before use, since a graphic can also
   * sit in a cell or a snippet:
   *
   * ```ts
   * const img = master.place(file)[0];
   * if (img && img.parent.constructorName === 'Rectangle') {
   *   img.parent.fit(FitOptions.PROPORTIONALLY);
   * }
   * ```
   * @param fileName Path to the asset to place.
   * @param placePoint Point to place at, in the format `[x, y]`.
   * @param destinationLayer The layer to place onto.
   * @param showingOptions If `true`, shows the format's import-options dialog. Defaults to `false`.
   * @param autoflowing If `true`, autoflows placed text. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   */
  place(fileName: FilePath, placePoint?: MeasurementValue[], destinationLayer?: Layer, showingOptions?: boolean, autoflowing?: boolean, withProperties?: object): (AnyPageItem[])[];
  /** Deletes the master spread. */
  remove(): (void)[];
  /** Removes a previous master-item override from an item on this master spread. */
  removeOverride(): (void)[];
  /** Detaches an overridden master item on this master spread from its master. */
  detach(): (void)[];
  /**
   * Selects the master spread in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): (void)[];
  /**
   * Creates a grid of guides across every page of the master spread.
   * @param numberOfRows Rows to create on each page. Range `0`–`40`. Defaults to `0`.
   * @param numberOfColumns Columns to create on each page. Range `0`–`40`. Defaults to `0`.
   * @param rowGutter Gutter height between rows. Range `0`–`1440`. Defaults to `0`.
   * @param columnGutter Gutter width between columns. Range `0`–`1440`. Defaults to `0`.
   * @param guideColor Color for the new guides: an `[R, G, B]` triple or a named {@link UIColors} value.
   * @param fitMargins If `true`, row/column sizing is based on the space within the page margins rather than the full page. Defaults to `false`.
   * @param removeExisting If `true`, removes existing guides before creating the new ones. Defaults to `false`.
   * @param layer The layer to create the guides on.
   */
  createGuides(
    numberOfRows?: number,
    numberOfColumns?: number,
    rowGutter?: MeasurementValue,
    columnGutter?: MeasurementValue,
    guideColor?: [number, number, number] | UIColors,
    fitMargins?: boolean,
    removeExisting?: boolean,
    layer?: Layer,
  ): void;
  /**
   * Applies an affine transform to the master spread's content within a coordinate space.
   * @param inCoordinateSpace The space the transform is expressed in.
   * @param from Temporary transform origin — see {@link TransformOrigin}.
   * @param withMatrix The transform, as a {@link TransformationMatrix} or six reals.
   * @param replacingCurrent When given, replaces the listed transform components instead of concatenating.
   * @param consideringRulerUnits When `true`, a ruler-relative origin is read in ruler units rather than points. Defaults to `false`.
   */
  transform(
    inCoordinateSpace: CoordinateSpaces,
    from: TransformOrigin,
    withMatrix: TransformMatrixValue,
    replacingCurrent?: MatrixContentValue,
    consideringRulerUnits?: boolean,
  ): void;
  /** Returns the master spread's transform, decomposed per coordinate space. */
  transformValuesOf(inCoordinateSpace: CoordinateSpaces): (TransformationMatrix[])[];
  /**
   * Resolves a location to concrete coordinates in the given space.
   * @param location The point or anchor to resolve.
   * @param inCoordinateSpace The space to report the result in.
   * @param consideringRulerUnits When `true`, interprets a ruler-relative location in ruler units rather than points. Defaults to `false`.
   */
  resolve(
    location: TransformOrigin,
    inCoordinateSpace: CoordinateSpaces,
    consideringRulerUnits?: boolean,
  ): Array<[number, number]>;
  /**
   * Loads the given page items into the content placer and places a linked or
   * unlinked duplicate onto this master spread.
   * @param linkPageItems If `true`, links the placed items to their source (overrides `linkStories`). Defaults to `false`.
   * @param linkStories If `true`, links placed stories (single-story placements only). Defaults to `false`.
   * @param mapStyles If `true`, maps source styles to destination styles. Defaults to `false`.
   * @param placePoint Point to place at, in the format `[x, y]`.
   * @param destinationLayer The layer to place onto.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  contentPlace(pageItems: PageItem | PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, placePoint?: MeasurementValue[], destinationLayer?: Layer, showingOptions?: boolean): (PageItem[])[];
}
