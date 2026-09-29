/**
 * PageItemMixins.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './Types';
import type { Buttons } from '../Buttons';
import type { CheckBoxes } from '../CheckBoxes';
import type { ComboBoxes } from '../ComboBoxes';
import type { EPSTexts } from '../EPSTexts';
import type { EndnoteTextFrames } from '../EndnoteTextFrames';
import type { AnchorPoint } from '../Enums/AnchorPoint';
import type { BoundingBoxLimits } from '../Enums/BoundingBoxLimits';
import type { CoordinateSpaces } from '../Enums/CoordinateSpaces';
import type { FitOptions } from '../Enums/FitOptions';
import type { Flip } from '../Enums/Flip';
import type { MatrixContent } from '../Enums/MatrixContent';
import type { ResizeConstraints } from '../Enums/ResizeConstraints';
import type { ResizeMethods } from '../Enums/ResizeMethods';
import type { FlexObjects } from '../FlexObjects';
import type { FormFields } from '../FormFields';
import type { Graphic } from '../Graphic';
import type { GraphicLines } from '../GraphicLines';
import type { Graphics } from '../Graphics';
import type { Groups } from '../Groups';
import type { Layer } from '../Layer';
import type { ListBoxes } from '../ListBoxes';
import type { MultiStateObjects } from '../MultiStateObjects';
import type { Images } from '../Images';
import type { Ovals } from '../Ovals';
import type { EPSs } from '../EPSs';
import type { PDFs } from '../PDFs';
import type { PICTs } from '../PICTs';
import type { Page } from '../Page';
import type { PageItem } from '../PageItem';
import type { PageItems } from '../PageItems';
import type { Paths } from '../Paths';
import type { Polygons } from '../Polygons';
import type { WMFs } from '../WMFs';
import type { RadioButtons } from '../RadioButtons';
import type { Rectangles } from '../Rectangles';
import type { SVGs } from '../SVGs';
import type { SignatureFields } from '../SignatureFields';
import type { SplineItems } from '../SplineItems';
import type { Spread } from '../Spread';
import type { TextBoxes } from '../TextBoxes';
import type { TextFrames } from '../TextFrames';
import type { TransformationMatrix } from '../TransformationMatrix';
import type { BoundsArray, MeasurementValue } from './Types';
import type { PageItemParent } from './Parents';
import type { AnyGraphic, AnyPageItem } from './Unions';
import type { Button } from '../Button';
import type { CheckBox } from '../CheckBox';
import type { PlaceGun } from '../PlaceGun';
import type { Snippet } from '../Snippet';
import type { State } from '../State';
import type { XMLElement } from '../XMLElement';

/**
 * The one accessor every container has: all {@link PageItems} in it regardless of
 * type — the general-purpose iterator for mixed content.
 *
 * Call {@link PageItems.everyItem} to broadcast an operation to every item at
 * once, far faster than a loop; call {@link PageItems.item} for a single,
 * possibly unresolved, proxy — check `isValid` before using it.
 */
export interface PageItemHolder<TChildParent = PageItemParent, M extends Mode = 'single'> {
  /** All {@link PageItems} in this container regardless of type — the general-purpose iterator for mixed content. */
  readonly pageItems: PageItems<TChildParent>;
}

/**
 * Recursive snapshots of everything the container holds, nested groups included.
 *
 * Not available on the transient containers — {@link PlaceGun}, {@link Snippet},
 * {@link State}, {@link XMLElement} — whose contents are not yet placed in the document.
 */
export interface DeepPageItemHolder<M extends Mode = 'single'> {
  /** Every {@link Graphic} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: Read<M, AnyGraphic[]>;

  /** Every {@link PageItem} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: Read<M, AnyPageItem[]>;
}

/**
 * The drawable-shape children: anything the user can draw or place as a frame.
 */
export interface ShapeContainer<TChildParent = PageItemParent, M extends Mode = 'single'> {
  /** {@link Ovals} (ellipses) directly in this container. */
  readonly ovals: Ovals<TChildParent>;

  /** {@link SplineItems} (rectangles, ovals, polygons, graphic lines) directly in this container. */
  readonly splineItems: SplineItems<TChildParent>;

  /** {@link Rectangles} directly in this container. */
  readonly rectangles: Rectangles<TChildParent>;

  /** {@link GraphicLines} directly in this container. */
  readonly graphicLines: GraphicLines<TChildParent>;

  /** {@link TextFrames} directly in this container. */
  readonly textFrames: TextFrames<TChildParent>;

  /** {@link Polygons} directly in this container. */
  readonly polygons: Polygons<TChildParent>;

  /** {@link Groups} directly in this container. */
  readonly groups: Groups<TChildParent>;

  /** {@link EPSTexts} directly in this container. */
  readonly epstexts: EPSTexts<TChildParent>;
}

/**
 * The interactive form children — the PDF form-field suite.
 *
 * A form field can contain shapes, but not other form fields — {@link Button},
 * {@link CheckBox}, and their siblings never nest inside one another.
 */
export interface FormFieldContainer<TChildParent = PageItemParent, M extends Mode = 'single'> {
  /** {@link FormFields} of every kind directly in this container. */
  readonly formFields: FormFields<TChildParent>;

  /** {@link Buttons} directly in this container. */
  readonly buttons: Buttons<TChildParent>;

  /** {@link MultiStateObjects} directly in this container. */
  readonly multiStateObjects: MultiStateObjects<TChildParent>;

  /** {@link CheckBoxes} directly in this container. */
  readonly checkBoxes: CheckBoxes<TChildParent>;

  /** {@link ComboBoxes} directly in this container. */
  readonly comboBoxes: ComboBoxes<TChildParent>;

  /** {@link ListBoxes} directly in this container. */
  readonly listBoxes: ListBoxes<TChildParent>;

  /** {@link RadioButtons} directly in this container. */
  readonly radioButtons: RadioButtons<TChildParent>;

  /** {@link TextBoxes} directly in this container. */
  readonly textBoxes: TextBoxes<TChildParent>;

  /** {@link SignatureFields} directly in this container. */
  readonly signatureFields: SignatureFields<TChildParent>;
}

/** {@link EndnoteTextFrames} directly in this container. */
export interface EndnoteFrameContainer<TChildParent = PageItemParent, M extends Mode = 'single'> {
  /** {@link EndnoteTextFrames} directly in this container. */
  readonly endnoteTextFrames: EndnoteTextFrames<TChildParent>;
}

/** {@link FlexObjects} (flex-layout containers) directly in this container. */
export interface FlexObjectContainer<TChildParent = PageItemParent, M extends Mode = 'single'> {
  /** {@link FlexObjects} directly in this container. */
  readonly flexObjects: FlexObjects<TChildParent>;
}

/**
 * Placed-graphic children, addressed by role rather than by file format.
 *
 * The surface a frame exposes for its own placed content — an image, PDF, or
 * other file placed directly inside it.
 */
export interface PlacedGraphicContainer<TChildParent = PageItemParent, M extends Mode = 'single'> {
  /** {@link SVGs} directly in this container. */
  readonly svgs: SVGs<TChildParent>;

  /** Placed {@link Graphics} of any file format (vector, metafile, or bitmap) directly in this container. */
  readonly graphics: Graphics<TChildParent>;
}

/**
 * Placed graphics addressed by concrete file format.
 *
 * The pre-`graphics` way of reaching placed content, kept alive in the DOM for
 * compatibility. Prefer {@link PlacedGraphicContainer.graphics}, which covers
 * every format in one collection.
 */
export interface FormatGraphicContainer<TChildParent = PageItemParent, M extends Mode = 'single'> {
  /** Placed {@link PDFs} directly in this container. */
  readonly pdfs: PDFs<TChildParent>;

  /** Placed {@link PICTs} directly in this container. */
  readonly picts: PICTs<TChildParent>;

  /** Placed {@link EPSs} directly in this container. */
  readonly epss: EPSs<TChildParent>;

  /** Placed bitmap {@link Images} directly in this container. */
  readonly images: Images<TChildParent>;

  /** Placed {@link WMFs} directly in this container. */
  readonly wmfs: WMFs<TChildParent>;
}

/** {@link Paths} making up this item's outline. */
export interface PathContainer<M extends Mode = 'single'> {
  /** The {@link Paths} that make up this item's outline. A compound shape has more than one. */
  readonly paths: Paths;
}

/**
 * The full child surface of a general-purpose page-item container — spreads,
 * groups, and the spline-item shapes.
 *
 * Which of these a container actually exposes varies: a {@link Page} has no
 * endnote text frames, and a {@link Button} cannot hold other form fields.
 */
export interface PageItemContainer<TChildParent = PageItemParent, M extends Mode = 'single'>
  extends PageItemHolder<TChildParent, M>,
    DeepPageItemHolder<M>,
    ShapeContainer<TChildParent, M>,
    FormFieldContainer<TChildParent, M>,
    EndnoteFrameContainer<TChildParent, M>,
    FlexObjectContainer<TChildParent, M>,
    PlacedGraphicContainer<TChildParent, M> {}

/**
 * A transform origin or point argument accepted by {@link TransformableItem.transform},
 * {@link TransformableItem.resize}, and {@link TransformableItem.resolve}.
 *
 * An {@link AnchorPoint}, a single `[x, y]` point, or a compound array whose first
 * element is a point/anchor and whose remaining elements qualify it with a
 * {@link CoordinateSpaces}, {@link BoundingBoxLimits}, or a page index.
 */
export type TransformOrigin =
  | AnchorPoint
  | [number, number]
  | Array<[number, number] | CoordinateSpaces | AnchorPoint | BoundingBoxLimits | number>;

/** A 2×3 affine transform: a {@link TransformationMatrix} or its six real components `[a, b, c, d, tx, ty]`. */
export type TransformMatrixValue =
  | TransformationMatrix
  | [number, number, number, number, number, number];

/** Which components of a matrix a transform replaces rather than concatenates (see {@link TransformableItem.transform}). */
export type MatrixContentValue = MatrixContent | MatrixContent[] | number;

/** The bounding-box selector for {@link TransformableItem.resize} / {@link TransformableItem.reframe}: a coordinate space, a bounds kind, or an ordered `[space, boundsKind]` pair. */
export type BoundsSpecifier =
  | CoordinateSpaces
  | BoundingBoxLimits
  | [CoordinateSpaces, BoundingBoxLimits];

/**
 * Geometry (bounds), affine transform (rotate / scale / shear / flip), and the
 * `move` / `duplicate` / `transform` / `fit` / `resize` / `reframe` method
 * family shared by every page item.
 *
 * Bounds arrays are ordered `[y1, x1, y2, x2]` (top, left, bottom, right). The
 * transform methods operate in an explicit {@link CoordinateSpaces}, so the
 * same geometry can be read or written in page, spread, parent, or inner space.
 */
export interface TransformableItem<M extends Mode = 'single'> {
  /**
   * Bounds excluding stroke width, ordered `[y1, x1, y2, x2]`. Reads in the
   * current ruler units; assignment accepts unit strings such as `'12pt'`.
   */
  get geometricBounds(): Read<M, number[]>;
  set geometricBounds(value: BoundsArray);

  /**
   * Bounds including stroke width (and drop shadows / effects), ordered
   * `[y1, x1, y2, x2]`. Wider than {@link geometricBounds} by the stroke's
   * outer extent.
   */
  get visibleBounds(): Read<M, number[]>;
  set visibleBounds(value: BoundsArray);

  /** Rotation applied to the item, in degrees. Range `-360` to `360`. */
  get rotationAngle(): Read<M, number>;
  set rotationAngle(value: number);

  /** Shear (skew) applied to the item, in degrees. Range `-360` to `360`. */
  get shearAngle(): Read<M, number>;
  set shearAngle(value: number);

  /** Horizontal scale applied to the item, as a percentage. */
  get horizontalScale(): Read<M, number>;
  set horizontalScale(value: number);

  /** Vertical scale applied to the item, as a percentage. */
  get verticalScale(): Read<M, number>;
  set verticalScale(value: number);

  /** Rotation relative to the parent object rather than the page, in degrees. Range `-360` to `360`. */
  get absoluteRotationAngle(): Read<M, number>;
  set absoluteRotationAngle(value: number);

  /** Shear relative to the parent object rather than the page, in degrees. Range `-360` to `360`. */
  get absoluteShearAngle(): Read<M, number>;
  set absoluteShearAngle(value: number);

  /** Horizontal scale relative to the parent object rather than the page, as a percentage. */
  get absoluteHorizontalScale(): Read<M, number>;
  set absoluteHorizontalScale(value: number);

  /** Vertical scale relative to the parent object rather than the page, as a percentage. */
  get absoluteVerticalScale(): Read<M, number>;
  set absoluteVerticalScale(value: number);

  /** Flip applied to the item within its own coordinate space. */
  get flip(): Read<M, Flip>;
  set flip(value: Flip);

  /** Whether the item is flipped relative to its parent, and along which axis — the parent-relative counterpart of {@link flip}. */
  get absoluteFlip(): Read<M, Flip>;
  set absoluteFlip(value: Flip);

  /**
   * Fits placed content to the frame (or the frame to its content) per the
   * chosen {@link FitOptions}. No effect on a frame with no placed content.
   */
  fit(given: FitOptions): Read<M, void>;

  /**
   * Flips the item across an axis.
   * @param around Point to flip about — an `[x, y]` pair or an {@link AnchorPoint}.
   * Defaults to the item's center.
   */
  flipItem(given: Flip, around?: [number, number] | AnchorPoint): Read<M, void>;

  /**
   * Duplicates the item, optionally repositioning the copy.
   * @param to Absolute position `[x, y]` for the copy, or a {@link Spread} /
   * {@link Page} / {@link Layer} to place it on. Omit to leave it atop the original.
   * @param by Offset `[x, y]` from the original's position; ignored when `to` is given.
   */
  duplicate(to?: [number, number] | Spread | Page | Layer, by?: MeasurementValue[]): Read<M, this>;

  /**
   * Moves the item to an absolute location or by a relative offset. Supply
   * exactly one of `to` / `by`; if both are given, `by` is ignored.
   * @param to Absolute position `[x, y]`, or a {@link Spread} / {@link Page} /
   * {@link Layer} to move the item onto.
   * @param by Relative offset `[x, y]` in measurement units.
   */
  move(to?: [number, number] | Spread | Page | Layer, by?: MeasurementValue[]): Read<M, void>;

  /** Clears every transform (rotation, scale, shear, flip, and fit) from the item. */
  clearTransformations(): Read<M, void>;

  /**
   * Applies an affine transform to the item within a coordinate space.
   * @param inCoordinateSpace The space the transform is expressed in.
   * @param from Temporary transform origin — see {@link TransformOrigin}.
   * @param withMatrix The transform, as a {@link TransformationMatrix} or six reals.
   * @param replacingCurrent When given, replaces the listed transform components
   * instead of concatenating onto the item's existing transform.
   * @param consideringRulerUnits When `true`, a ruler-relative origin is read in
   * ruler units rather than points. Only relevant for a page-relative origin. Defaults to `false`.
   */
  transform(
    inCoordinateSpace: CoordinateSpaces,
    from: TransformOrigin,
    withMatrix: TransformMatrixValue,
    replacingCurrent?: MatrixContentValue,
    consideringRulerUnits?: boolean,
  ): void;

  /** Returns the item's transform, decomposed per coordinate space. */
  transformValuesOf(inCoordinateSpace: CoordinateSpaces): Read<M, TransformationMatrix[]>;

  /**
   * Resolves a location to concrete coordinates in the given space.
   * @param location The point or anchor to resolve — see {@link TransformOrigin}.
   * @param inCoordinateSpace The space to report the result in.
   * @param consideringRulerUnits When `true`, interprets a ruler-relative location
   * in ruler units rather than points. Defaults to `false`.
   * @returns An array of resolved `[x, y]` point arrays.
   */
  resolve(
    location: TransformOrigin,
    inCoordinateSpace: CoordinateSpaces,
    consideringRulerUnits?: boolean,
  ): Array<[number, number]>;

  /**
   * Bakes the item's current scaling into its content, leaving the given residual
   * scale on the frame.
   * @param to Scale factors `[sx, sy]` to leave on the item. Defaults to `[1, 1]`.
   */
  redefineScaling(to?: number[]): Read<M, void>;

  /**
   * Resizes the item's bounding box.
   * @param inBounds Which bounding box to resize — see {@link BoundsSpecifier}.
   * @param from Transform origin the resize pivots around — see {@link TransformOrigin}.
   * @param by How `values` are combined with the current dimensions.
   * @param values Width/height values: reals, or a {@link ResizeConstraints} to keep
   * one dimension, optionally trailed by a {@link CoordinateSpaces} that fixes the
   * unit of length (ignored for the current-dimensions-times method).
   * @param resizeIndividually When `false` and several items are targeted, new
   * dimensions are reached by moving the items rather than scaling each. Defaults to `true`.
   * @param consideringRulerUnits When `true`, a ruler-relative origin is read in
   * ruler units rather than points. Defaults to `false`.
   */
  resize(
    inBounds: BoundsSpecifier,
    from: TransformOrigin,
    by: ResizeMethods,
    values: Array<number | ResizeConstraints | CoordinateSpaces>,
    resizeIndividually?: boolean,
    consideringRulerUnits?: boolean,
  ): void;

  /**
   * Repositions the item's bounding box by specifying two opposing corners,
   * resizing and moving in one operation.
   * @param inCoordinateSpace The space the corners are given in — see {@link BoundsSpecifier}.
   * @param opposingCorners Two opposing corners, each an `[x, y]` point.
   */
  reframe(inCoordinateSpace: BoundsSpecifier, opposingCorners: Array<[number, number]>): Read<M, void>;

  /** Repeats the last single transform applied to any object on this item. */
  transformAgain(): Read<M, string[]>;

  /** Repeats the last transform *sequence* applied to any object (or group) on this item. */
  transformSequenceAgain(): Read<M, string[]>;

  /** Like {@link transformAgain}, but repeats the last transform applied to any *page item* specifically. */
  transformAgainIndividually(): Read<M, string[]>;

  /** Like {@link transformSequenceAgain}, but applied individually to each targeted item. */
  transformSequenceAgainIndividually(): Read<M, string[]>;
}
