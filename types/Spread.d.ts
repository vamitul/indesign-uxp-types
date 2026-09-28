/**
 * Spread.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject, LabelableEventDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { PageItemContainer } from './_base/PageItemMixins';
import type { MeasurementValue } from './_base/Types';
import type { TransformOrigin, TransformMatrixValue, MatrixContentValue, BoundsSpecifier } from './_base/PageItemMixins';

import type { CoordinateSpaces } from './Enums/CoordinateSpaces';
import type { LocationOptions } from './Enums/LocationOptions';
import type { NothingEnum } from './Enums/NothingEnum';
import type { PageTransitionDirectionOptions } from './Enums/PageTransitionDirectionOptions';
import type { PageTransitionDurationOptions } from './Enums/PageTransitionDurationOptions';
import type { PageTransitionTypeOptions } from './Enums/PageTransitionTypeOptions';
import type { ResizeConstraints } from './Enums/ResizeConstraints';
import type { ResizeMethods } from './Enums/ResizeMethods';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { SpreadFlattenerLevel } from './Enums/SpreadFlattenerLevel';
import type { UIColors } from './Enums/UIColors';

import type { Document } from './Document';
import type { Graphic } from './Graphic';
import type { FilePath } from './_base/Types';
import type { FlattenerPreference } from './FlattenerPreference';
import type { Guides } from './Guides';
import type { Layer } from './Layer';
import type { MasterSpread } from './MasterSpread';
import type { Page } from './Page';
import type { PageItem } from './PageItem';
import type { Pages } from './Pages';
import type { Preferences } from './Preferences';
import type { Story } from './Story';
import type { TimingSetting } from './TimingSetting';
import type { TransformationMatrix } from './TransformationMatrix';
import type { XMLElement } from './XMLElement';
import type { AnyGraphic, AnyPageItem } from './_base/Unions';
import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { EPSTexts } from './EPSTexts';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { FlexObjects } from './FlexObjects';
import type { FormFields } from './FormFields';
import type { GraphicLines } from './GraphicLines';
import type { Graphics } from './Graphics';
import type { Groups } from './Groups';
import type { ListBoxes } from './ListBoxes';
import type { MultiStateObjects } from './MultiStateObjects';
import type { Ovals } from './Ovals';
import type { PageItems } from './PageItems';
import type { Polygons } from './Polygons';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { SVGs } from './SVGs';
import type { SignatureFields } from './SignatureFields';
import type { SplineItems } from './SplineItems';
import type { TextBoxes } from './TextBoxes';
import type { TextFrames } from './TextFrames';

/**
 * A spread: one or more facing {@link Page}s laid out together on the pasteboard.
 *
 * Spread-level settings cover the applied master spread, transitions, and
 * flattening. Page items belong to the spread rather than to a page, so an
 * item straddling the spine is one item.
 */
export interface Spread<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M>,
    PageItemContainer<Spread, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Spread';

  /** Resolves the proxy into the individual {@link Spread} objects it stands for. */
  getElements(): Spread<'single'>[];

  /** The unique numeric ID of the spread within its document. Stable across reordering, unlike {@link index}. */
  readonly id: Read<M, number>;

  /** Transparency-flattener settings for this spread — see {@link FlattenerPreference}. */
  readonly flattenerPreferences: Read<M, FlattenerPreference>;

  /** Every {@link PageItem} on this spread, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: Read<M, AnyPageItem[]>;

  /** Every {@link Graphic} on this spread, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: Read<M, AnyGraphic[]>;

  /** The spread's object timing settings — see {@link TimingSetting}. */
  readonly timingSettings: Read<M, TimingSetting>;

  /** A collection of {@link Preferences} objects scoped to this spread. */
  readonly preferences: Preferences;

  /** {@link Pages} that make up this spread. */
  readonly pages: Pages<Spread>;

  /** {@link Guides} on this spread. */
  readonly guides: Guides;

  /** Transparency-flattener preference override for this spread specifically. */
  get flattenerOverride(): Read<M, SpreadFlattenerLevel>;
  set flattenerOverride(value: SpreadFlattenerLevel);

  /** Whether the spread is hidden. Set `true` to hide, `false` to unhide. */
  get spreadHidden(): Read<M, boolean>;
  set spreadHidden(value: boolean);

  /**
   * When `true`, guarantees that adding pages to this spread never exceeds two
   * pages. When `false`, pages may be freely added or moved into it. See also
   * the document's "preserve layout when shuffling" setting.
   */
  get allowPageShuffle(): Read<M, boolean>;
  set allowPageShuffle(value: boolean);

  /** Whether master-page items are displayed on document pages in this spread. */
  get showMasterItems(): Read<M, boolean>;
  set showMasterItems(value: boolean);

  /** The {@link MasterSpread} applied to this spread. Assign a master spread or its name; assign {@link NothingEnum.NOTHING} to remove it. */
  get appliedMaster(): Read<M, MasterSpread>;
  set appliedMaster(value: MasterSpread | string | NothingEnum);

  /** The IDML component name of the spread. */
  get idmlComponentName(): Read<M, string>;
  set idmlComponentName(value: string);

  /** The type of interactive-export page transition for this spread. */
  get pageTransitionType(): Read<M, PageTransitionTypeOptions>;
  set pageTransitionType(value: PageTransitionTypeOptions);

  /** The direction of the page transition. */
  get pageTransitionDirection(): Read<M, PageTransitionDirectionOptions>;
  set pageTransitionDirection(value: PageTransitionDirectionOptions);

  /** The duration of the page transition. */
  get pageTransitionDuration(): Read<M, PageTransitionDurationOptions>;
  set pageTransitionDuration(value: PageTransitionDurationOptions);

  /**
   * Places an {@link XMLElement} onto the spread. If the place point lands over
   * an existing page item, the element is placed into that item instead.
   * @param placePoint Point to place at, in the format `[x, y]`.
   * @param autoflowing If `true`, autoflows placed text. Defaults to `false`.
   */
  placeXML(using: XMLElement, placePoint?: MeasurementValue[], autoflowing?: boolean): Read<M, PageItem>;

  /**
   * Replaces the content of an XML element with content imported from a file.
   * @param using Path to the import file.
   * @param relativeBasePath Base path used to resolve relative paths.
   */
  setContent(using: string, relativeBasePath?: string): Read<M, PageItem>;

  /**
   * Moves the spread within the document's spread order.
   * @param to Where to move the spread relative to `reference`, or to a
   * document end/beginning. Defaults to `LocationOptions.AT_END`.
   * @param reference The spread, page, or document to move relative to.
   * Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to?: LocationOptions, reference?: Spread | Page | Document): Read<M, Spread>;

  /** Deletes the spread. */
  remove(): Read<M, void>;

  /**
   * Duplicates the spread.
   * @param to Where to place the duplicate relative to `reference`, or at a
   * document end/beginning. Defaults to `LocationOptions.AT_END`.
   * @param reference The spread, document, or master spread to duplicate
   * relative to. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  duplicate(to?: LocationOptions, reference?: Spread | Document | MasterSpread): Read<M, Spread>;

  /**
   * Creates a linked story and places it into the spread. @deprecated Use {@link contentPlace}.
   * @param placePoint Point to place at, in the format `[x, y]`.
   * @param destinationLayer The layer to place onto.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  placeAndLink(parentStory: Story, placePoint?: MeasurementValue[], destinationLayer?: Layer, showingOptions?: boolean): Read<M, Story>;

  /**
   * Places a file onto the spread, returning the placed object(s).
   *
   * Placing an image returns the **graphic** (`Image`, `PDF`, `EPS`…),
   * not the frame InDesign creates around it. Sizing and moving belong to the frame,
   * which is the graphic's `parent` — narrow it before use, since a graphic can also
   * sit in a cell or a snippet:
   *
   * ```ts
   * const img = spread.place(file)[0];
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
  place(fileName: FilePath, placePoint?: MeasurementValue[], destinationLayer?: Layer, showingOptions?: boolean, autoflowing?: boolean, withProperties?: object): Read<M, AnyPageItem[]>;

  /** Removes a previous master-item override from an item on this spread. */
  removeOverride(): Read<M, void>;

  /** Detaches an overridden master item on this spread from its master. */
  detach(): Read<M, void>;

  /**
   * Selects the spread in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): Read<M, void>;

  /**
   * Creates a grid of guides across every page of the spread.
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
   * Applies an affine transform to the spread's content within a coordinate space.
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

  /** Returns the spread's transform, decomposed per coordinate space. */
  transformValuesOf(inCoordinateSpace: CoordinateSpaces): Read<M, TransformationMatrix[]>;

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
   * unlinked duplicate onto this spread.
   * @param linkPageItems If `true`, links the placed items to their source (overrides `linkStories`). Defaults to `false`.
   * @param linkStories If `true`, links placed stories (single-story placements only). Defaults to `false`.
   * @param mapStyles If `true`, maps source styles to destination styles. Defaults to `false`.
   * @param placePoint Point to place at, in the format `[x, y]`.
   * @param destinationLayer The layer to place onto.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  contentPlace(pageItems: PageItem | PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, placePoint?: MeasurementValue[], destinationLayer?: Layer, showingOptions?: boolean): Read<M, PageItem[]>;
}
