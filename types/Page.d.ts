/**
 * Page.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject, LabelableEventDOMObject, ReadonlyNamedDOMObject } from './_base/DomObjects';
import type { MeasurementValue, FilePath } from './_base/Types';
import type { TransformOrigin, TransformMatrixValue, MatrixContentValue, BoundsSpecifier } from './_base/PageItemMixins';

import type { BindingOptions } from './Enums/BindingOptions';
import type { CoordinateSpaces } from './Enums/CoordinateSpaces';
import type { LayoutRuleOptions } from './Enums/LayoutRuleOptions';
import type { LocationOptions } from './Enums/LocationOptions';
import type { NothingEnum } from './Enums/NothingEnum';
import type { PageColorOptions } from './Enums/PageColorOptions';
import type { PageSideOptions } from './Enums/PageSideOptions';
import type { ResizeConstraints } from './Enums/ResizeConstraints';
import type { ResizeMethods } from './Enums/ResizeMethods';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { SnapshotBlendingModes } from './Enums/SnapshotBlendingModes';
import type { UIColors } from './Enums/UIColors';

import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { EPSTexts } from './EPSTexts';
import type { FlexObjects } from './FlexObjects';
import type { FormFields } from './FormFields';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { GridDataInformation } from './GridDataInformation';
import type { Groups } from './Groups';
import type { Guide } from './Guide';
import type { Guides } from './Guides';
import type { Layer } from './Layer';
import type { ListBoxes } from './ListBoxes';
import type { MarginPreference } from './MarginPreference';
import type { MasterSpread } from './MasterSpread';
import type { Movie } from './Movie';
import type { MultiStateObjects } from './MultiStateObjects';
import type { Ovals } from './Ovals';
import type { PageItem } from './PageItem';
import type { PageItems } from './PageItems';
import type { Polygons } from './Polygons';
import type { Preferences } from './Preferences';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { Section } from './Section';
import type { SignatureFields } from './SignatureFields';
import type { Sound } from './Sound';
import type { Spread } from './Spread';
import type { SplineItems } from './SplineItems';
import type { Story } from './Story';
import type { TextBoxes } from './TextBoxes';
import type { TextFrames } from './TextFrames';
import type { TransformationMatrix } from './TransformationMatrix';
import type { TrapPreset } from './TrapPreset';
import type { XMLElement } from './XMLElement';
import type { AnyGraphic, AnyPageItem } from './_base/Unions';
import type { DocumentPreference } from './DocumentPreference';

/**
 * A single page within a {@link Spread} or {@link MasterSpread}.
 */
export interface Page<TParent = Spread | MasterSpread, M extends Mode = 'single'>
  extends LabelableEventDOMObject<TParent, M>,
    IndexedDOMObject<TParent, M>,
    ReadonlyNamedDOMObject<TParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Page';

  /** Resolves the proxy into the individual {@link Page} objects it stands for. */
  getElements(): Page<TParent, 'single'>[];

  /** The unique numeric ID of the page within its document. Stable across reordering, unlike {@link index}. */
  readonly id: Read<M, number>;

  /** The alternate-layout {@link Section} this page belongs to. */
  readonly appliedAlternateLayout: Read<M, Section>;

  /** Margin settings for this page — see {@link MarginPreference}. */
  readonly marginPreferences: Read<M, MarginPreference>;

  /** Which side of the spread's binding spine this page sits on. */
  readonly side: Read<M, PageSideOptions>;

  /** The {@link Section} this page belongs to. */
  readonly appliedSection: Read<M, Section>;

  /** The page's 1-based sequential position within the document, independent of its {@link name}/numbering. */
  readonly documentOffset: Read<M, number>;

  /**
   * The page's bounds, ordered `[y1, x1, y2, x2]`.
   *
   * Derived from the document's page size and this page's position on its
   * spread — resize the page through {@link reframe} or the document's
   * {@link DocumentPreference}, not by assigning here.
   */
  readonly bounds: Read<M, number[]>;

  /**
   * Items on this page that originated on the applied master page and have not
   * been overridden or detached.
   */
  readonly masterPageItems: Read<M, Array<PageItem | Guide | Graphic | Movie | Sound>>;

  /** Every {@link PageItem} on this page, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: Read<M, AnyPageItem[]>;

  /** Every {@link Graphic} on this page, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: Read<M, AnyGraphic[]>;

  /** Default grid metrics for this page — see {@link GridDataInformation}. Applies to named, layout, and frame (story) grids. */
  readonly gridData: Read<M, GridDataInformation>;

  /** A collection of {@link Preferences} objects scoped to this page. */
  readonly preferences: Preferences;

  /** {@link Ovals} (ellipses) directly on this page. */
  readonly ovals: Ovals<TParent>;

  /** {@link SplineItems} directly on this page. */
  readonly splineItems: SplineItems<TParent>;

  /** All {@link PageItems} directly on this page regardless of type. */
  readonly pageItems: PageItems<TParent>;

  /** {@link Rectangles} directly on this page. */
  readonly rectangles: Rectangles<TParent>;

  /** {@link GraphicLines} directly on this page. */
  readonly graphicLines: GraphicLines<TParent>;

  /** {@link TextFrames} directly on this page. */
  readonly textFrames: TextFrames<TParent>;

  /** {@link Polygons} directly on this page. */
  readonly polygons: Polygons<TParent>;

  /** {@link Guides} on this page. */
  readonly guides: Guides;

  /** {@link FlexObjects} directly on this page. */
  readonly flexObjects: FlexObjects<TParent>;

  /** {@link Groups} directly on this page. */
  readonly groups: Groups<TParent>;

  /** {@link EPSTexts} directly on this page. */
  readonly epstexts: EPSTexts<TParent>;

  /** {@link FormFields} of every kind directly on this page. */
  readonly formFields: FormFields<TParent>;

  /** {@link Buttons} directly on this page. */
  readonly buttons: Buttons<TParent>;

  /** {@link MultiStateObjects} directly on this page. */
  readonly multiStateObjects: MultiStateObjects<TParent>;

  /** {@link CheckBoxes} directly on this page. */
  readonly checkBoxes: CheckBoxes<TParent>;

  /** {@link ComboBoxes} directly on this page. */
  readonly comboBoxes: ComboBoxes<TParent>;

  /** {@link ListBoxes} directly on this page. */
  readonly listBoxes: ListBoxes<TParent>;

  /** {@link RadioButtons} directly on this page. */
  readonly radioButtons: RadioButtons<TParent>;

  /** {@link TextBoxes} directly on this page. */
  readonly textBoxes: TextBoxes<TParent>;

  /** {@link SignatureFields} directly on this page. */
  readonly signatureFields: SignatureFields<TParent>;

  /** The Liquid Layout rule applied to this page. */
  get layoutRule(): Read<M, LayoutRuleOptions>;
  set layoutRule(value: LayoutRuleOptions);

  /** Blending mode used when compositing a saved layout snapshot for this page. */
  get snapshotBlendingMode(): Read<M, SnapshotBlendingModes>;
  set snapshotBlendingMode(value: SnapshotBlendingModes);

  /** Whether this is an optional page for HTML5 pagination. @deprecated Obsolete after CS6. */
  get optionalPage(): Read<M, boolean>;
  set optionalPage(value: boolean);

  /** The {@link TrapPreset} applied to this page. Assign a preset object or its name. */
  get appliedTrapPreset(): Read<M, TrapPreset | string>;
  set appliedTrapPreset(value: TrapPreset | string);

  /**
   * The page's color label. Assign an `[R, G, B]` triple (each `0`–`255`), a
   * named {@link UIColors} value, or a {@link PageColorOptions} value.
   */
  get pageColor(): Read<M, [number, number, number] | UIColors | PageColorOptions>;
  set pageColor(value: [number, number, number] | UIColors | PageColorOptions);

  /** The {@link MasterSpread} applied to this page. Assign a master spread or its name; assign {@link NothingEnum.NOTHING} to remove it. */
  get appliedMaster(): Read<M, MasterSpread>;
  set appliedMaster(value: MasterSpread | string | NothingEnum);

  /** The transform applied to the master page's content before it lands on this page. */
  get masterPageTransform(): Read<M, TransformationMatrix>;
  set masterPageTransform(value: TransformationMatrix);

  /** Tab order of interactive form fields on this page in the exported PDF. */
  get tabOrder(): Read<M, Array<Buttons | CheckBoxes | ComboBoxes | ListBoxes | RadioButtons | TextBoxes | SignatureFields>>;
  set tabOrder(value: Array<Buttons | CheckBoxes | ComboBoxes | ListBoxes | RadioButtons | TextBoxes | SignatureFields>);

  /**
   * Adjusts the existing layout for new page size, bleed, and margin values.
   * @param adoptTo Plain object with the properties to change: `width`, `height`,
   * `bleedInside`, `bleedTop`, `bleedOutside`, `bleedBottom`, `leftMargin`,
   * `topMargin`, `rightMargin`, `bottomMargin`. Values may be numbers (points) or
   * measurement strings such as `'1in'`. Only the given keys are updated.
   * @param affectedPages The pages to affect; has no effect when called from a `Page` directly.
   */
  adjustLayout(adoptTo: object, affectedPages?: Page | Page[]): Read<M, void>;

  /**
   * Places an {@link XMLElement} onto the page. If the place point lands over an
   * existing page item, the element is placed into that item instead.
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

  /** Creates a snapshot of the layout for the page's current size and shape. */
  snapshotCurrentLayout(): Read<M, void>;

  /** Deletes the layout snapshot for the page's current size and shape. */
  deleteLayoutSnapshot(): Read<M, void>;

  /** Deletes every layout snapshot for this page. */
  deleteAllLayoutSnapshots(): Read<M, void>;

  /**
   * Moves the page within its spread or the document's page order.
   * @param to Where to move the page relative to `reference`, or to a document
   * end/beginning. Defaults to `LocationOptions.AT_END`.
   * @param reference The page or spread to move relative to. Required when `to`
   * is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   * @param binding Which side of the spread's binding spine to place the page on. Defaults to `BindingOptions.DEFAULT_VALUE`.
   */
  move(to?: LocationOptions, reference?: Page | Spread, binding?: BindingOptions): Read<M, Page>;

  /** Deletes the page. */
  remove(): Read<M, void>;

  /**
   * Duplicates the page.
   * @param to Where to place the duplicate relative to `reference`, or at a
   * document end/beginning. Defaults to `LocationOptions.AT_END`.
   * @param reference The page or spread to duplicate relative to. Required when
   * `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  duplicate(to?: LocationOptions, reference?: Page | Spread): Read<M, Page>;

  /**
   * Creates a linked story and places it into the page. @deprecated Use {@link contentPlace}.
   * @param placePoint Point to place at, in the format `[x, y]`.
   * @param destinationLayer The layer to place onto.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  placeAndLink(parentStory: Story, placePoint?: MeasurementValue[], destinationLayer?: Layer, showingOptions?: boolean): Read<M, Story>;

  /**
   * Places a file onto the page, returning the placed object(s).
   *
   * Placing an image returns the **graphic** (`Image`, `PDF`, `EPS`…),
   * not the frame InDesign creates around it. Sizing and moving belong to the frame,
   * which is the graphic's `parent` — narrow it before use, since a graphic can also
   * sit in a cell or a snippet:
   *
   * ```ts
   * const img = page.place(file)[0];
   * if (img && img.parent.constructorName === 'Rectangle') {
   *   img.parent.fit(FitOptions.PROPORTIONALLY);
   * }
   * ```
   *
   * @param fileName Path to the asset to place.
   * @param placePoint Point to place at, in the format `[x, y]`.
   * @param destinationLayer The layer to place onto.
   * @param showingOptions If `true`, shows the format's import-options dialog. Defaults to `false`.
   * @param autoflowing If `true`, autoflows placed text. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   */
  place(fileName: FilePath, placePoint?: MeasurementValue[], destinationLayer?: Layer, showingOptions?: boolean, autoflowing?: boolean, withProperties?: object): Read<M, AnyPageItem[]>;

  /** Removes a previous master-item override from an item on this page. */
  removeOverride(): Read<M, void>;

  /** Detaches an overridden master item on this page from its master. */
  detach(): Read<M, void>;

  /**
   * Selects the page in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): Read<M, void>;

  /**
   * Applies an affine transform to the page's content within a coordinate space.
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

  /**
   * Repositions the page's bounding box by specifying two opposing corners.
   * @param inCoordinateSpace The space the corners are given in.
   * @param opposingCorners Two opposing corners, each an `[x, y]` point.
   */
  reframe(inCoordinateSpace: BoundsSpecifier, opposingCorners: Array<[number, number]>): Read<M, void>;

  /**
   * Resizes the page.
   * @param inBounds Which bounding box to resize.
   * @param from Transform origin the resize pivots around.
   * @param by How `values` are combined with the current dimensions.
   * @param values Width/height values: reals, or a {@link ResizeConstraints} to keep one dimension.
   * @param resizeIndividually When `false` and multiple pages are targeted, new dimensions are attained by moving rather than resizing. Defaults to `true`.
   * @param consideringRulerUnits When `true`, a ruler-relative origin is read in ruler units rather than points. Defaults to `false`.
   */
  resize(
    inBounds: BoundsSpecifier,
    from: TransformOrigin,
    by: ResizeMethods,
    values: Array<number | ResizeConstraints | CoordinateSpaces>,
    resizeIndividually?: boolean,
    consideringRulerUnits?: boolean,
  ): void;

  /** Returns the page's transform, decomposed per coordinate space. */
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
   * unlinked duplicate onto this page.
   * @param linkPageItems If `true`, links the placed items to their source (overrides `linkStories`). Defaults to `false`.
   * @param linkStories If `true`, links placed stories (single-story placements only). Defaults to `false`.
   * @param mapStyles If `true`, maps source styles to destination styles. Defaults to `false`.
   * @param placePoint Point to place at, in the format `[x, y]`.
   * @param destinationLayer The layer to place onto.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  contentPlace(pageItems: PageItem | PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, placePoint?: MeasurementValue[], destinationLayer?: Layer, showingOptions?: boolean): Read<M, PageItem[]>;
}
