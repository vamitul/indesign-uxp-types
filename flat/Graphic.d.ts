/**
 * Graphic.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { PageItem } from './PageItem';
import type { FilePath } from './_base/Types';
import type { Link } from './Link';
import type { PageItemParent } from './_base/Parents';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FitOptions } from './Enums/FitOptions';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { Graphics } from './Graphics';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ObjectStyle } from './ObjectStyle';
import type { PDF } from './PDF';
import type { Page } from './Page';
import type { PageItems } from './PageItems';
import type { Preferences } from './Preferences';
import type { SVGs } from './SVGs';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';
import type { AnchorPoint } from './Enums/AnchorPoint';
import type { AnyGraphic } from './_base/Unions';
import type { AnyPageItem } from './_base/Unions';
import type { ArrowHead } from './Enums/ArrowHead';
import type { ArrowHeadAlignmentEnum } from './Enums/ArrowHeadAlignmentEnum';
import type { Asset } from './Asset';
import type { BoundsArray } from './_base/Types';
import type { BoundsSpecifier } from './_base/PageItemMixins';
import type { ConvertShapeOptions } from './Enums/ConvertShapeOptions';
import type { CoordinateSpaces } from './Enums/CoordinateSpaces';
import type { CornerOptions } from './Enums/CornerOptions';
import type { DimensionsConstraints } from './Enums/DimensionsConstraints';
import type { DisplaySettingOptions } from './Enums/DisplaySettingOptions';
import type { EndCap } from './Enums/EndCap';
import type { EndJoin } from './Enums/EndJoin';
import type { Event } from './Event';
import type { EventHandler } from './_base/Events';
import type { EventListener } from './EventListener';
import type { EventListeners } from './EventListeners';
import type { EventString } from './_base/Events';
import type { Events } from './Events';
import type { ExportFormat } from './Enums/ExportFormat';
import type { FlexEnum } from './Enums/FlexEnum';
import type { FlexWidthHeightMode } from './Enums/FlexWidthHeightMode';
import type { Flip } from './Enums/Flip';
import type { Guide } from './Guide';
import type { InDesignEventMap } from './_base/Events';
import type { MatrixContentValue } from './_base/PageItemMixins';
import type { MeasurementValue } from './_base/Types';
import type { Movie } from './Movie';
import type { PDFExportPreset } from './PDFExportPreset';
import type { PropertiesGetter } from './_base/Properties';
import type { PropertiesSetter } from './_base/Properties';
import type { ResizeConstraints } from './Enums/ResizeConstraints';
import type { ResizeMethods } from './Enums/ResizeMethods';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { Sound } from './Sound';
import type { Spread } from './Spread';
import type { StrokeAlignment } from './Enums/StrokeAlignment';
import type { StrokeCornerAdjustment } from './Enums/StrokeCornerAdjustment';
import type { StrokeStyle } from './StrokeStyle';
import type { Swatch } from './Swatch';
import type { TransformMatrixValue } from './_base/PageItemMixins';
import type { TransformOrigin } from './_base/PageItemMixins';
import type { TransformationMatrix } from './TransformationMatrix';
import type { XMLItem } from './XMLItem';
/**
 * An imported graphic in any graphic file format (including vector, metafile,
 * and bitmap formats).
 */
export interface Graphic<TParent = PageItemParent> {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: TParent;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<Graphic<TParent>, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<Graphic<TParent>, 'single'>);
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
   * Bounds excluding stroke width, ordered `[y1, x1, y2, x2]`. Reads in the
   * current ruler units; assignment accepts unit strings such as `'12pt'`.
   */
  get geometricBounds(): number[];
  set geometricBounds(value: BoundsArray);
  /**
   * Bounds including stroke width (and drop shadows / effects), ordered
   * `[y1, x1, y2, x2]`. Wider than {@link geometricBounds} by the stroke's
   * outer extent.
   */
  get visibleBounds(): number[];
  set visibleBounds(value: BoundsArray);
  /** Rotation applied to the item, in degrees. Range `-360` to `360`. */
  get rotationAngle(): number;
  set rotationAngle(value: number);
  /** Shear (skew) applied to the item, in degrees. Range `-360` to `360`. */
  get shearAngle(): number;
  set shearAngle(value: number);
  /** Horizontal scale applied to the item, as a percentage. */
  get horizontalScale(): number;
  set horizontalScale(value: number);
  /** Vertical scale applied to the item, as a percentage. */
  get verticalScale(): number;
  set verticalScale(value: number);
  /** Rotation relative to the parent object rather than the page, in degrees. Range `-360` to `360`. */
  get absoluteRotationAngle(): number;
  set absoluteRotationAngle(value: number);
  /** Shear relative to the parent object rather than the page, in degrees. Range `-360` to `360`. */
  get absoluteShearAngle(): number;
  set absoluteShearAngle(value: number);
  /** Horizontal scale relative to the parent object rather than the page, as a percentage. */
  get absoluteHorizontalScale(): number;
  set absoluteHorizontalScale(value: number);
  /** Vertical scale relative to the parent object rather than the page, as a percentage. */
  get absoluteVerticalScale(): number;
  set absoluteVerticalScale(value: number);
  /** Flip applied to the item within its own coordinate space. */
  get flip(): Flip;
  set flip(value: Flip);
  /** Whether the item is flipped relative to its parent, and along which axis — the parent-relative counterpart of {@link flip}. */
  get absoluteFlip(): Flip;
  set absoluteFlip(value: Flip);
  /**
   * Fits placed content to the frame (or the frame to its content) per the
   * chosen {@link FitOptions}. No effect on a frame with no placed content.
   */
  fit(given: FitOptions): void;
  /**
   * Flips the item across an axis.
   * @param around Point to flip about — an `[x, y]` pair or an {@link AnchorPoint}.
   * Defaults to the item's center.
   */
  flipItem(given: Flip, around?: [number, number] | AnchorPoint): void;
  /**
   * Duplicates the item, optionally repositioning the copy.
   * @param to Absolute position `[x, y]` for the copy, or a {@link Spread} /
   * {@link Page} / {@link Layer} to place it on. Omit to leave it atop the original.
   * @param by Offset `[x, y]` from the original's position; ignored when `to` is given.
   */
  duplicate(to?: [number, number] | Spread | Page | Layer, by?: MeasurementValue[]): Graphic<TParent>;
  /**
   * Moves the item to an absolute location or by a relative offset. Supply
   * exactly one of `to` / `by`; if both are given, `by` is ignored.
   * @param to Absolute position `[x, y]`, or a {@link Spread} / {@link Page} /
   * {@link Layer} to move the item onto.
   * @param by Relative offset `[x, y]` in measurement units.
   */
  move(to?: [number, number] | Spread | Page | Layer, by?: MeasurementValue[]): void;
  /** Clears every transform (rotation, scale, shear, flip, and fit) from the item. */
  clearTransformations(): void;
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
  transformValuesOf(inCoordinateSpace: CoordinateSpaces): TransformationMatrix[];
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
  redefineScaling(to?: number[]): void;
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
  reframe(inCoordinateSpace: BoundsSpecifier, opposingCorners: Array<[number, number]>): void;
  /** Repeats the last single transform applied to any object on this item. */
  transformAgain(): string[];
  /** Repeats the last transform *sequence* applied to any object (or group) on this item. */
  transformSequenceAgain(): string[];
  /** Like {@link transformAgain}, but repeats the last transform applied to any *page item* specifically. */
  transformAgainIndividually(): string[];
  /** Like {@link transformSequenceAgain}, but applied individually to each targeted item. */
  transformSequenceAgainIndividually(): string[];
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItem. */
  get fillColor(): Swatch;
  set fillColor(value: Swatch | string);
  /** The percent of tint to use in the PageItem's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): number;
  set fillTint(value: number);
  /** If true, the PageItem's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. */
  get overprintFill(): boolean;
  set overprintFill(value: boolean);
  /** The weight (in points) to apply to the PageItem's stroke. */
  get strokeWeight(): number;
  set strokeWeight(value: MeasurementValue);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): number;
  set miterLimit(value: number);
  /** The end shape of an open path. */
  get endCap(): EndCap;
  set endCap(value: EndCap);
  /** The corner join applied to the PageItem. */
  get endJoin(): EndJoin;
  set endJoin(value: EndJoin);
  /** The name of the stroke style to apply. */
  get strokeType(): StrokeStyle;
  set strokeType(value: StrokeStyle | string);
  /** The arrowhead applied to the start of the path. */
  get leftLineEnd(): ArrowHead;
  set leftLineEnd(value: ArrowHead);
  /** The arrowhead applied to the end of the path. */
  get rightLineEnd(): ArrowHead;
  set rightLineEnd(value: ArrowHead);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItem. */
  get strokeColor(): Swatch;
  set strokeColor(value: Swatch | string);
  /** The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get strokeTint(): number;
  set strokeTint(value: number);
  /** The angle of a linear gradient applied to the fill of the PageItem. (Range: -180 to 180) */
  get gradientFillAngle(): number;
  set gradientFillAngle(value: number);
  /** The angle of a linear gradient applied to the stroke of the PageItem. (Range: -180 to 180) */
  get gradientStrokeAngle(): number;
  set gradientStrokeAngle(value: number);
  /** If true, the PageItem's stroke color overprints any underlying objects. If false, the stroke color knocks out the underlying colors. */
  get overprintStroke(): boolean;
  set overprintStroke(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): Swatch;
  set gapColor(value: Swatch);
  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get gapTint(): number;
  set gapTint(value: number);
  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): boolean;
  set overprintGap(value: boolean);
  /** The stroke alignment applied to the PageItem. */
  get strokeAlignment(): StrokeAlignment;
  set strokeAlignment(value: StrokeAlignment);
  /** If true, the PageItem does not print. */
  get nonprinting(): boolean;
  set nonprinting(value: boolean);
  /**
   * The corner shape applied to the top left corner of rectangular shapes, and
   * to all corners of non-rectangular shapes.
   *
   * Differs from {@link endJoin}: this lets you set a radius for the corner,
   * while an end join's rounded or beveled effect instead depends on the
   * stroke weight.
   */
  get topLeftCornerOption(): CornerOptions;
  set topLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the top right corner of rectangular shapes */
  get topRightCornerOption(): CornerOptions;
  set topRightCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get bottomLeftCornerOption(): CornerOptions;
  set bottomLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get bottomRightCornerOption(): CornerOptions;
  set bottomRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get topLeftCornerRadius(): number;
  set topLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get topRightCornerRadius(): number;
  set topRightCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get bottomLeftCornerRadius(): number;
  set bottomLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get bottomRightCornerRadius(): number;
  set bottomRightCornerRadius(value: MeasurementValue);
  /** The arrowhead alignment applied to the PageItem. */
  get arrowHeadAlignment(): ArrowHeadAlignmentEnum;
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum);
  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000) */
  get leftArrowHeadScale(): number;
  set leftArrowHeadScale(value: number);
  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000) */
  get rightArrowHeadScale(): number;
  set rightArrowHeadScale(value: number);
  /** The corner adjustment applied to the PageItem. */
  get strokeCornerAdjustment(): StrokeCornerAdjustment;
  set strokeCornerAdjustment(value: StrokeCornerAdjustment);
  /** The dash and gap measurements that define the pattern of a custom dashed line. Define up to six values (in points) in the format [dash1, gap1, dash2, gap2, dash3, gap3]. */
  get strokeDashAndGap(): number[];
  set strokeDashAndGap(value: MeasurementValue[]);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the PageItem, in the format [x, y]. */
  get gradientFillStart(): number[];
  set gradientFillStart(value: MeasurementValue[]);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the PageItem. */
  get gradientFillLength(): number;
  set gradientFillLength(value: MeasurementValue);
  /** The starting point (in page coordinates) of a gradient applied to the stroke of the PageItem, in the format [x, y]. */
  get gradientStrokeStart(): number[];
  set gradientStrokeStart(value: MeasurementValue[]);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the PageItem. */
  get gradientStrokeLength(): number;
  set gradientStrokeLength(value: MeasurementValue);
  /** All {@link PageItems} in this container regardless of type — the general-purpose iterator for mixed content. */
  readonly pageItems: PageItems;
  /** Every {@link Graphic} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: AnyGraphic[];
  /** Every {@link PageItem} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: AnyPageItem[];
  /** {@link FlexObjects} directly in this container. */
  readonly flexObjects: FlexObjects;
  /** {@link SVGs} directly in this container. */
  readonly svgs: SVGs;
  /** Placed {@link Graphics} of any file format (vector, metafile, or bitmap) directly in this container. */
  readonly graphics: Graphics;
  /** The unique numeric ID of the item within its document. Stable for the item's lifetime, unlike {@link index}. */
  readonly id: number;
  /**
   * The item's name — an alias for {@link label}, and what the Layers panel
   * shows. Unlike {@link NamableDOMObject.name} it carries no uniqueness
   * constraint: any number of siblings may share a name, and the default is `''`.
   */
  get name(): string;
  set name(value: string);
  /** Whole-object transparency (blend mode and opacity) — see {@link TransparencySetting}. */
  readonly transparencySettings: TransparencySetting;
  /** Transparency applied to the stroke only — see {@link StrokeTransparencySetting}. */
  readonly strokeTransparencySettings: StrokeTransparencySetting;
  /** Transparency applied to the fill only — see {@link FillTransparencySetting}. */
  readonly fillTransparencySettings: FillTransparencySetting;
  /** Transparency applied to placed content only — see {@link ContentTransparencySetting}. */
  readonly contentTransparencySettings: ContentTransparencySetting;
  /** How surrounding text flows around this item — see {@link TextWrapPreference}. */
  readonly textWrapPreferences: TextWrapPreference;
  /** Parent/child linked-item synchronization options — see {@link LinkedPageItemOption}. */
  readonly linkedPageItemOptions: LinkedPageItemOption;
  /** Interactive-export animation (motion preset, duration, easing) — see {@link AnimationSetting}. */
  readonly animationSettings: AnimationSetting;
  /** Ordering of this item's animation relative to others — see {@link TimingSetting}. */
  readonly timingSettings: TimingSetting;
  /** Per-item {@link Preferences} objects (text-frame, story, and other frame-level preference bags). */
  readonly preferences: Preferences;
  /** The {@link XMLElement} this item is tagged with in the document's XML structure, if any. */
  readonly associatedXMLElement: XMLItem;
  /** The {@link Page} this item appears on, or an unresolved proxy if it is on the pasteboard (check `.isValid`). */
  readonly parentPage: Page;
  /** Every {@link Article} this item belongs to, in reading-order membership. */
  readonly allArticles: Article[];
  /**
   * Whether this item is an overridden master-page item. `false` covers both
   * un-overridden master items and items that never came from a master.
   */
  readonly overridden: boolean;
  /** The master-page object this overridden item derives from, if any. */
  readonly overriddenMasterPageItem: PageItem | Guide | Graphic | Movie | Sound;
  /** Whether this master-page item may be overridden on document pages. */
  get allowOverrides(): boolean;
  set allowOverrides(value: boolean);
  /** Left-margin / width / right-margin constraints under the object-based layout (Liquid Layout) rule. */
  get horizontalLayoutConstraints(): DimensionsConstraints[];
  set horizontalLayoutConstraints(value: DimensionsConstraints[]);
  /** Top-margin / height / bottom-margin constraints under the object-based layout (Liquid Layout) rule. */
  get verticalLayoutConstraints(): DimensionsConstraints[];
  set verticalLayoutConstraints(value: DimensionsConstraints[]);
  /** Flex-container width behavior (fixed, auto, or fill). */
  get flexItemWidthMode(): FlexWidthHeightMode | FlexEnum;
  set flexItemWidthMode(value: FlexWidthHeightMode | FlexEnum);
  /** Flex-container height behavior (fixed, auto, or fill). */
  get flexItemHeightMode(): FlexWidthHeightMode | FlexEnum;
  set flexItemHeightMode(value: FlexWidthHeightMode | FlexEnum);
  /** The {@link Layer} the item is on. Assign a {@link Layer} or its name to move the item to another layer. */
  get itemLayer(): Layer;
  set itemLayer(value: Layer | string);
  /** The {@link ObjectStyle} applied to the item. Assign a style object or its name. */
  get appliedObjectStyle(): ObjectStyle;
  set appliedObjectStyle(value: ObjectStyle | string);
  /** Whether the item is locked against selection and editing. */
  get locked(): boolean;
  set locked(value: boolean);
  /** Whether the item is visible. A hidden item still prints unless {@link GraphicAttributes.nonprinting} is set. */
  get visible(): boolean;
  set visible(value: boolean);
  /** Screen display-quality override for this item (fast, typical, or high quality). */
  get localDisplaySetting(): DisplaySettingOptions;
  set localDisplaySetting(value: DisplaySettingOptions);
  /**
   * Stores a copy of the item in a {@link Library} as a reusable asset.
   * @param withProperties Initial property values for the created {@link Asset}.
   */
  store(using: Library, withProperties?: object): Asset;
  /**
   * Places XML content into the item, replacing any existing content.
   * @param using The {@link XMLElement} whose content to place.
   */
  placeXML(using: XMLElement): void;
  /** Tags the item (or its parent story) using the default tags from XML preferences. */
  autoTag(): void;
  /** Associates the item with an {@link XMLElement} while preserving its existing content. */
  markup(using: XMLElement): void;
  /**
   * Finds page items matching the application-level object find/change query.
   * @param reverseOrder If `true`, results come back last-to-first.
   */
  findObject(reverseOrder?: boolean): PageItem[];
  /**
   * Finds page items matching the object find query and applies the change settings.
   * @param reverseOrder If `true`, results come back last-to-first.
   */
  changeObject(reverseOrder?: boolean): PageItem[];
  /**
   * Places a file into the item as its content, returning the placed object(s).
   * @param fileName Path to the asset to place.
   * @param showingOptions If `true`, shows the format's import-options dialog. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   * @returns The placed object(s); usually a single-element array.
   */
  place(fileName: FilePath, showingOptions?: boolean, withProperties?: object): AnyPageItem[];
  /**
   * Overrides this master-page item onto a document page as an editable copy.
   * @param destinationPage The document page to place the override on.
   */
  override(destinationPage: Page): PageItem;
  /** Removes a previous master-item override, reverting to the master's version. */
  removeOverride(): void;
  /** Detaches an overridden master item from its master, keeping it as an independent object. */
  detach(): void;
  /** Deletes the item. */
  remove(): void;
  /**
   * Applies an {@link ObjectStyle}.
   * @param clearingOverrides If `true`, clears existing local attributes first. Defaults to `true`.
   * @param clearingOverridesThroughRootObjectStyle If `true`, also clears attributes
   * not defined anywhere in the style's inheritance chain. Defaults to `false`.
   */
  applyObjectStyle(using: ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): void;
  /** Clears local overrides so the item matches its applied {@link ObjectStyle} exactly. */
  clearObjectStyleOverrides(): void;
  /**
   * Converts the item to a different shape.
   * @param numberOfSides Sides of the resulting polygon. Range `3`–`100`. Used only for polygon shapes.
   * @param insetPercentage Star inset of the resulting polygon. Range `0`–`100`. Used only for star shapes.
   * @param cornerRadius Corner radius of the resulting rounded rectangle.
   */
  convertShape(given: ConvertShapeOptions, numberOfSides?: number, insetPercentage?: number, cornerRadius?: string | number): void;
  /** Creates a QR code from plain text in this item. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createPlainTextQRCode(plainText?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /** Creates a QR code linking to a URL. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createHyperlinkQRCode(urlLink?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /** Creates a QR code that composes an SMS. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createTextMsgQRCode(cellNumber?: string, textMessage?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /** Creates a QR code that composes an email. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createEmailQRCode(emailAddress?: string, subject?: string, body?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /**
   * Creates a business-card (vCard) QR code.
   * @param qrCodeSwatch Swatch (or its name) to color the code.
   */
  createVCardQRCode(
    firstName?: string,
    lastName?: string,
    jobTitle?: string,
    cellPhone?: string,
    phone?: string,
    email?: string,
    organisation?: string,
    streetAddress?: string,
    city?: string,
    adrState?: string,
    country?: string,
    postalCode?: string,
    website?: string,
    qrCodeSwatch?: Swatch | string,
    withProperties?: object,
  ): void;
  /**
   * Exports the item to a file.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param to Destination path.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   * @param using An export preset such as a {@link PDFExportPreset}.
   */
  exportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): void;
  /**
   * Exports the item to a file on a background thread, returning the running
   * {@link BackgroundTask}.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   */
  asynchronousExportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): BackgroundTask;
  /**
   * Loads the given page items into the content placer and places a linked or
   * unlinked duplicate into this item.
   * @param linkPageItems If `true`, links the placed items to their source (overrides `linkStories`). Defaults to `false`.
   * @param linkStories If `true`, links placed stories (single-story placements only). Defaults to `false`.
   * @param mapStyles If `true`, maps source styles to destination styles. Defaults to `false`.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  contentPlace(pageItems: PageItem | PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, showingOptions?: boolean): PageItem[];
  /**
   * Selects the item in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): void;
  /** The object's DOM class name — reports the specific format, such as `'PDF'` when this is a placed {@link PDF}. */
  readonly constructorName: 'Graphic' | 'EPS' | 'Image' | 'ImportedPage' | 'PDF' | 'PICT' | 'SVG' | 'WMF';
  /** Resolves the proxy into the individual {@link Graphic} objects it stands for. */
  getElements(): Graphic<TParent>[];
  /** The {@link Link} to the source file this graphic was placed from. */
  readonly itemLink: Link;
  /** The graphic file format name (e.g. `"JPEG"`, `"Photoshop"`, `"Illustrator"`). */
  readonly imageTypeName: string;
  /**
   * Exports the graphic as a web-optimized raster image.
   * @param to Destination file path.
   */
  exportForWeb(to: FilePath): string[];
}

/**
 * A placed graphic InDesign reports as a plain {@link Graphic} rather than as an image, EPS,
 * PDF, SVG or imported page.
 *
 * Handle it in the `'Graphic'` case of a `constructorName` check. Only the members every placed
 * graphic has — its link, its image type name, and export-for-web — are available on it.
 */
export interface PlainGraphic<TParent = PageItemParent> {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: TParent;
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): PropertiesGetter<PlainGraphic<TParent>, 'single'>;
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PlainGraphic<TParent>, 'single'>);
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
   * Bounds excluding stroke width, ordered `[y1, x1, y2, x2]`. Reads in the
   * current ruler units; assignment accepts unit strings such as `'12pt'`.
   */
  get geometricBounds(): number[];
  set geometricBounds(value: BoundsArray);
  /**
   * Bounds including stroke width (and drop shadows / effects), ordered
   * `[y1, x1, y2, x2]`. Wider than {@link geometricBounds} by the stroke's
   * outer extent.
   */
  get visibleBounds(): number[];
  set visibleBounds(value: BoundsArray);
  /** Rotation applied to the item, in degrees. Range `-360` to `360`. */
  get rotationAngle(): number;
  set rotationAngle(value: number);
  /** Shear (skew) applied to the item, in degrees. Range `-360` to `360`. */
  get shearAngle(): number;
  set shearAngle(value: number);
  /** Horizontal scale applied to the item, as a percentage. */
  get horizontalScale(): number;
  set horizontalScale(value: number);
  /** Vertical scale applied to the item, as a percentage. */
  get verticalScale(): number;
  set verticalScale(value: number);
  /** Rotation relative to the parent object rather than the page, in degrees. Range `-360` to `360`. */
  get absoluteRotationAngle(): number;
  set absoluteRotationAngle(value: number);
  /** Shear relative to the parent object rather than the page, in degrees. Range `-360` to `360`. */
  get absoluteShearAngle(): number;
  set absoluteShearAngle(value: number);
  /** Horizontal scale relative to the parent object rather than the page, as a percentage. */
  get absoluteHorizontalScale(): number;
  set absoluteHorizontalScale(value: number);
  /** Vertical scale relative to the parent object rather than the page, as a percentage. */
  get absoluteVerticalScale(): number;
  set absoluteVerticalScale(value: number);
  /** Flip applied to the item within its own coordinate space. */
  get flip(): Flip;
  set flip(value: Flip);
  /** Whether the item is flipped relative to its parent, and along which axis — the parent-relative counterpart of {@link flip}. */
  get absoluteFlip(): Flip;
  set absoluteFlip(value: Flip);
  /**
   * Fits placed content to the frame (or the frame to its content) per the
   * chosen {@link FitOptions}. No effect on a frame with no placed content.
   */
  fit(given: FitOptions): void;
  /**
   * Flips the item across an axis.
   * @param around Point to flip about — an `[x, y]` pair or an {@link AnchorPoint}.
   * Defaults to the item's center.
   */
  flipItem(given: Flip, around?: [number, number] | AnchorPoint): void;
  /**
   * Duplicates the item, optionally repositioning the copy.
   * @param to Absolute position `[x, y]` for the copy, or a {@link Spread} /
   * {@link Page} / {@link Layer} to place it on. Omit to leave it atop the original.
   * @param by Offset `[x, y]` from the original's position; ignored when `to` is given.
   */
  duplicate(to?: [number, number] | Spread | Page | Layer, by?: MeasurementValue[]): PlainGraphic<TParent>;
  /**
   * Moves the item to an absolute location or by a relative offset. Supply
   * exactly one of `to` / `by`; if both are given, `by` is ignored.
   * @param to Absolute position `[x, y]`, or a {@link Spread} / {@link Page} /
   * {@link Layer} to move the item onto.
   * @param by Relative offset `[x, y]` in measurement units.
   */
  move(to?: [number, number] | Spread | Page | Layer, by?: MeasurementValue[]): void;
  /** Clears every transform (rotation, scale, shear, flip, and fit) from the item. */
  clearTransformations(): void;
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
  transformValuesOf(inCoordinateSpace: CoordinateSpaces): TransformationMatrix[];
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
  redefineScaling(to?: number[]): void;
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
  reframe(inCoordinateSpace: BoundsSpecifier, opposingCorners: Array<[number, number]>): void;
  /** Repeats the last single transform applied to any object on this item. */
  transformAgain(): string[];
  /** Repeats the last transform *sequence* applied to any object (or group) on this item. */
  transformSequenceAgain(): string[];
  /** Like {@link transformAgain}, but repeats the last transform applied to any *page item* specifically. */
  transformAgainIndividually(): string[];
  /** Like {@link transformSequenceAgain}, but applied individually to each targeted item. */
  transformSequenceAgainIndividually(): string[];
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItem. */
  get fillColor(): Swatch;
  set fillColor(value: Swatch | string);
  /** The percent of tint to use in the PageItem's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): number;
  set fillTint(value: number);
  /** If true, the PageItem's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. */
  get overprintFill(): boolean;
  set overprintFill(value: boolean);
  /** The weight (in points) to apply to the PageItem's stroke. */
  get strokeWeight(): number;
  set strokeWeight(value: MeasurementValue);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): number;
  set miterLimit(value: number);
  /** The end shape of an open path. */
  get endCap(): EndCap;
  set endCap(value: EndCap);
  /** The corner join applied to the PageItem. */
  get endJoin(): EndJoin;
  set endJoin(value: EndJoin);
  /** The name of the stroke style to apply. */
  get strokeType(): StrokeStyle;
  set strokeType(value: StrokeStyle | string);
  /** The arrowhead applied to the start of the path. */
  get leftLineEnd(): ArrowHead;
  set leftLineEnd(value: ArrowHead);
  /** The arrowhead applied to the end of the path. */
  get rightLineEnd(): ArrowHead;
  set rightLineEnd(value: ArrowHead);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItem. */
  get strokeColor(): Swatch;
  set strokeColor(value: Swatch | string);
  /** The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get strokeTint(): number;
  set strokeTint(value: number);
  /** The angle of a linear gradient applied to the fill of the PageItem. (Range: -180 to 180) */
  get gradientFillAngle(): number;
  set gradientFillAngle(value: number);
  /** The angle of a linear gradient applied to the stroke of the PageItem. (Range: -180 to 180) */
  get gradientStrokeAngle(): number;
  set gradientStrokeAngle(value: number);
  /** If true, the PageItem's stroke color overprints any underlying objects. If false, the stroke color knocks out the underlying colors. */
  get overprintStroke(): boolean;
  set overprintStroke(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): Swatch;
  set gapColor(value: Swatch);
  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get gapTint(): number;
  set gapTint(value: number);
  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): boolean;
  set overprintGap(value: boolean);
  /** The stroke alignment applied to the PageItem. */
  get strokeAlignment(): StrokeAlignment;
  set strokeAlignment(value: StrokeAlignment);
  /** If true, the PageItem does not print. */
  get nonprinting(): boolean;
  set nonprinting(value: boolean);
  /**
   * The corner shape applied to the top left corner of rectangular shapes, and
   * to all corners of non-rectangular shapes.
   *
   * Differs from {@link endJoin}: this lets you set a radius for the corner,
   * while an end join's rounded or beveled effect instead depends on the
   * stroke weight.
   */
  get topLeftCornerOption(): CornerOptions;
  set topLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the top right corner of rectangular shapes */
  get topRightCornerOption(): CornerOptions;
  set topRightCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get bottomLeftCornerOption(): CornerOptions;
  set bottomLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get bottomRightCornerOption(): CornerOptions;
  set bottomRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get topLeftCornerRadius(): number;
  set topLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get topRightCornerRadius(): number;
  set topRightCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get bottomLeftCornerRadius(): number;
  set bottomLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get bottomRightCornerRadius(): number;
  set bottomRightCornerRadius(value: MeasurementValue);
  /** The arrowhead alignment applied to the PageItem. */
  get arrowHeadAlignment(): ArrowHeadAlignmentEnum;
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum);
  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000) */
  get leftArrowHeadScale(): number;
  set leftArrowHeadScale(value: number);
  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000) */
  get rightArrowHeadScale(): number;
  set rightArrowHeadScale(value: number);
  /** The corner adjustment applied to the PageItem. */
  get strokeCornerAdjustment(): StrokeCornerAdjustment;
  set strokeCornerAdjustment(value: StrokeCornerAdjustment);
  /** The dash and gap measurements that define the pattern of a custom dashed line. Define up to six values (in points) in the format [dash1, gap1, dash2, gap2, dash3, gap3]. */
  get strokeDashAndGap(): number[];
  set strokeDashAndGap(value: MeasurementValue[]);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the PageItem, in the format [x, y]. */
  get gradientFillStart(): number[];
  set gradientFillStart(value: MeasurementValue[]);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the PageItem. */
  get gradientFillLength(): number;
  set gradientFillLength(value: MeasurementValue);
  /** The starting point (in page coordinates) of a gradient applied to the stroke of the PageItem, in the format [x, y]. */
  get gradientStrokeStart(): number[];
  set gradientStrokeStart(value: MeasurementValue[]);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the PageItem. */
  get gradientStrokeLength(): number;
  set gradientStrokeLength(value: MeasurementValue);
  /** All {@link PageItems} in this container regardless of type — the general-purpose iterator for mixed content. */
  readonly pageItems: PageItems;
  /** Every {@link Graphic} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: AnyGraphic[];
  /** Every {@link PageItem} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: AnyPageItem[];
  /** {@link FlexObjects} directly in this container. */
  readonly flexObjects: FlexObjects;
  /** {@link SVGs} directly in this container. */
  readonly svgs: SVGs;
  /** Placed {@link Graphics} of any file format (vector, metafile, or bitmap) directly in this container. */
  readonly graphics: Graphics;
  /** The unique numeric ID of the item within its document. Stable for the item's lifetime, unlike {@link index}. */
  readonly id: number;
  /**
   * The item's name — an alias for {@link label}, and what the Layers panel
   * shows. Unlike {@link NamableDOMObject.name} it carries no uniqueness
   * constraint: any number of siblings may share a name, and the default is `''`.
   */
  get name(): string;
  set name(value: string);
  /** Whole-object transparency (blend mode and opacity) — see {@link TransparencySetting}. */
  readonly transparencySettings: TransparencySetting;
  /** Transparency applied to the stroke only — see {@link StrokeTransparencySetting}. */
  readonly strokeTransparencySettings: StrokeTransparencySetting;
  /** Transparency applied to the fill only — see {@link FillTransparencySetting}. */
  readonly fillTransparencySettings: FillTransparencySetting;
  /** Transparency applied to placed content only — see {@link ContentTransparencySetting}. */
  readonly contentTransparencySettings: ContentTransparencySetting;
  /** How surrounding text flows around this item — see {@link TextWrapPreference}. */
  readonly textWrapPreferences: TextWrapPreference;
  /** Parent/child linked-item synchronization options — see {@link LinkedPageItemOption}. */
  readonly linkedPageItemOptions: LinkedPageItemOption;
  /** Interactive-export animation (motion preset, duration, easing) — see {@link AnimationSetting}. */
  readonly animationSettings: AnimationSetting;
  /** Ordering of this item's animation relative to others — see {@link TimingSetting}. */
  readonly timingSettings: TimingSetting;
  /** Per-item {@link Preferences} objects (text-frame, story, and other frame-level preference bags). */
  readonly preferences: Preferences;
  /** The {@link XMLElement} this item is tagged with in the document's XML structure, if any. */
  readonly associatedXMLElement: XMLItem;
  /** The {@link Page} this item appears on, or an unresolved proxy if it is on the pasteboard (check `.isValid`). */
  readonly parentPage: Page;
  /** Every {@link Article} this item belongs to, in reading-order membership. */
  readonly allArticles: Article[];
  /**
   * Whether this item is an overridden master-page item. `false` covers both
   * un-overridden master items and items that never came from a master.
   */
  readonly overridden: boolean;
  /** The master-page object this overridden item derives from, if any. */
  readonly overriddenMasterPageItem: PageItem | Guide | Graphic | Movie | Sound;
  /** Whether this master-page item may be overridden on document pages. */
  get allowOverrides(): boolean;
  set allowOverrides(value: boolean);
  /** Left-margin / width / right-margin constraints under the object-based layout (Liquid Layout) rule. */
  get horizontalLayoutConstraints(): DimensionsConstraints[];
  set horizontalLayoutConstraints(value: DimensionsConstraints[]);
  /** Top-margin / height / bottom-margin constraints under the object-based layout (Liquid Layout) rule. */
  get verticalLayoutConstraints(): DimensionsConstraints[];
  set verticalLayoutConstraints(value: DimensionsConstraints[]);
  /** Flex-container width behavior (fixed, auto, or fill). */
  get flexItemWidthMode(): FlexWidthHeightMode | FlexEnum;
  set flexItemWidthMode(value: FlexWidthHeightMode | FlexEnum);
  /** Flex-container height behavior (fixed, auto, or fill). */
  get flexItemHeightMode(): FlexWidthHeightMode | FlexEnum;
  set flexItemHeightMode(value: FlexWidthHeightMode | FlexEnum);
  /** The {@link Layer} the item is on. Assign a {@link Layer} or its name to move the item to another layer. */
  get itemLayer(): Layer;
  set itemLayer(value: Layer | string);
  /** The {@link ObjectStyle} applied to the item. Assign a style object or its name. */
  get appliedObjectStyle(): ObjectStyle;
  set appliedObjectStyle(value: ObjectStyle | string);
  /** Whether the item is locked against selection and editing. */
  get locked(): boolean;
  set locked(value: boolean);
  /** Whether the item is visible. A hidden item still prints unless {@link GraphicAttributes.nonprinting} is set. */
  get visible(): boolean;
  set visible(value: boolean);
  /** Screen display-quality override for this item (fast, typical, or high quality). */
  get localDisplaySetting(): DisplaySettingOptions;
  set localDisplaySetting(value: DisplaySettingOptions);
  /**
   * Stores a copy of the item in a {@link Library} as a reusable asset.
   * @param withProperties Initial property values for the created {@link Asset}.
   */
  store(using: Library, withProperties?: object): Asset;
  /**
   * Places XML content into the item, replacing any existing content.
   * @param using The {@link XMLElement} whose content to place.
   */
  placeXML(using: XMLElement): void;
  /** Tags the item (or its parent story) using the default tags from XML preferences. */
  autoTag(): void;
  /** Associates the item with an {@link XMLElement} while preserving its existing content. */
  markup(using: XMLElement): void;
  /**
   * Finds page items matching the application-level object find/change query.
   * @param reverseOrder If `true`, results come back last-to-first.
   */
  findObject(reverseOrder?: boolean): PageItem[];
  /**
   * Finds page items matching the object find query and applies the change settings.
   * @param reverseOrder If `true`, results come back last-to-first.
   */
  changeObject(reverseOrder?: boolean): PageItem[];
  /**
   * Places a file into the item as its content, returning the placed object(s).
   * @param fileName Path to the asset to place.
   * @param showingOptions If `true`, shows the format's import-options dialog. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   * @returns The placed object(s); usually a single-element array.
   */
  place(fileName: FilePath, showingOptions?: boolean, withProperties?: object): AnyPageItem[];
  /**
   * Overrides this master-page item onto a document page as an editable copy.
   * @param destinationPage The document page to place the override on.
   */
  override(destinationPage: Page): PageItem;
  /** Removes a previous master-item override, reverting to the master's version. */
  removeOverride(): void;
  /** Detaches an overridden master item from its master, keeping it as an independent object. */
  detach(): void;
  /** Deletes the item. */
  remove(): void;
  /**
   * Applies an {@link ObjectStyle}.
   * @param clearingOverrides If `true`, clears existing local attributes first. Defaults to `true`.
   * @param clearingOverridesThroughRootObjectStyle If `true`, also clears attributes
   * not defined anywhere in the style's inheritance chain. Defaults to `false`.
   */
  applyObjectStyle(using: ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): void;
  /** Clears local overrides so the item matches its applied {@link ObjectStyle} exactly. */
  clearObjectStyleOverrides(): void;
  /**
   * Converts the item to a different shape.
   * @param numberOfSides Sides of the resulting polygon. Range `3`–`100`. Used only for polygon shapes.
   * @param insetPercentage Star inset of the resulting polygon. Range `0`–`100`. Used only for star shapes.
   * @param cornerRadius Corner radius of the resulting rounded rectangle.
   */
  convertShape(given: ConvertShapeOptions, numberOfSides?: number, insetPercentage?: number, cornerRadius?: string | number): void;
  /** Creates a QR code from plain text in this item. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createPlainTextQRCode(plainText?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /** Creates a QR code linking to a URL. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createHyperlinkQRCode(urlLink?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /** Creates a QR code that composes an SMS. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createTextMsgQRCode(cellNumber?: string, textMessage?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /** Creates a QR code that composes an email. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createEmailQRCode(emailAddress?: string, subject?: string, body?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): void;
  /**
   * Creates a business-card (vCard) QR code.
   * @param qrCodeSwatch Swatch (or its name) to color the code.
   */
  createVCardQRCode(
    firstName?: string,
    lastName?: string,
    jobTitle?: string,
    cellPhone?: string,
    phone?: string,
    email?: string,
    organisation?: string,
    streetAddress?: string,
    city?: string,
    adrState?: string,
    country?: string,
    postalCode?: string,
    website?: string,
    qrCodeSwatch?: Swatch | string,
    withProperties?: object,
  ): void;
  /**
   * Exports the item to a file.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param to Destination path.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   * @param using An export preset such as a {@link PDFExportPreset}.
   */
  exportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): void;
  /**
   * Exports the item to a file on a background thread, returning the running
   * {@link BackgroundTask}.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   */
  asynchronousExportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): BackgroundTask;
  /**
   * Loads the given page items into the content placer and places a linked or
   * unlinked duplicate into this item.
   * @param linkPageItems If `true`, links the placed items to their source (overrides `linkStories`). Defaults to `false`.
   * @param linkStories If `true`, links placed stories (single-story placements only). Defaults to `false`.
   * @param mapStyles If `true`, maps source styles to destination styles. Defaults to `false`.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  contentPlace(pageItems: PageItem | PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, showingOptions?: boolean): PageItem[];
  /**
   * Selects the item in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): void;
  /** Resolves the proxy into the individual {@link Graphic} objects it stands for. */
  getElements(): Graphic<TParent>[];
  /** The {@link Link} to the source file this graphic was placed from. */
  readonly itemLink: Link;
  /** The graphic file format name (e.g. `"JPEG"`, `"Photoshop"`, `"Illustrator"`). */
  readonly imageTypeName: string;
  /**
   * Exports the graphic as a web-optimized raster image.
   * @param to Destination file path.
   */
  exportForWeb(to: FilePath): string[];
  /** Always `'Graphic'` — this is the generic case, by construction. */
  readonly constructorName: 'Graphic';
}



/**
 * The broadcast proxy for {@link Graphic} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link Graphic} there.
 */
export interface GraphicPlural<TParent = PageItemParent> {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (TParent)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<GraphicPlural<TParent>, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<GraphicPlural<TParent>, 'plural'>);
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
   * Bounds excluding stroke width, ordered `[y1, x1, y2, x2]`. Reads in the
   * current ruler units; assignment accepts unit strings such as `'12pt'`.
   */
  get geometricBounds(): (number[])[];
  set geometricBounds(value: BoundsArray);
  /**
   * Bounds including stroke width (and drop shadows / effects), ordered
   * `[y1, x1, y2, x2]`. Wider than {@link geometricBounds} by the stroke's
   * outer extent.
   */
  get visibleBounds(): (number[])[];
  set visibleBounds(value: BoundsArray);
  /** Rotation applied to the item, in degrees. Range `-360` to `360`. */
  get rotationAngle(): (number)[];
  set rotationAngle(value: number);
  /** Shear (skew) applied to the item, in degrees. Range `-360` to `360`. */
  get shearAngle(): (number)[];
  set shearAngle(value: number);
  /** Horizontal scale applied to the item, as a percentage. */
  get horizontalScale(): (number)[];
  set horizontalScale(value: number);
  /** Vertical scale applied to the item, as a percentage. */
  get verticalScale(): (number)[];
  set verticalScale(value: number);
  /** Rotation relative to the parent object rather than the page, in degrees. Range `-360` to `360`. */
  get absoluteRotationAngle(): (number)[];
  set absoluteRotationAngle(value: number);
  /** Shear relative to the parent object rather than the page, in degrees. Range `-360` to `360`. */
  get absoluteShearAngle(): (number)[];
  set absoluteShearAngle(value: number);
  /** Horizontal scale relative to the parent object rather than the page, as a percentage. */
  get absoluteHorizontalScale(): (number)[];
  set absoluteHorizontalScale(value: number);
  /** Vertical scale relative to the parent object rather than the page, as a percentage. */
  get absoluteVerticalScale(): (number)[];
  set absoluteVerticalScale(value: number);
  /** Flip applied to the item within its own coordinate space. */
  get flip(): (Flip)[];
  set flip(value: Flip);
  /** Whether the item is flipped relative to its parent, and along which axis — the parent-relative counterpart of {@link flip}. */
  get absoluteFlip(): (Flip)[];
  set absoluteFlip(value: Flip);
  /**
   * Fits placed content to the frame (or the frame to its content) per the
   * chosen {@link FitOptions}. No effect on a frame with no placed content.
   */
  fit(given: FitOptions): (void)[];
  /**
   * Flips the item across an axis.
   * @param around Point to flip about — an `[x, y]` pair or an {@link AnchorPoint}.
   * Defaults to the item's center.
   */
  flipItem(given: Flip, around?: [number, number] | AnchorPoint): (void)[];
  /**
   * Duplicates the item, optionally repositioning the copy.
   * @param to Absolute position `[x, y]` for the copy, or a {@link Spread} /
   * {@link Page} / {@link Layer} to place it on. Omit to leave it atop the original.
   * @param by Offset `[x, y]` from the original's position; ignored when `to` is given.
   */
  duplicate(to?: [number, number] | Spread | Page | Layer, by?: MeasurementValue[]): (GraphicPlural<TParent>)[];
  /**
   * Moves the item to an absolute location or by a relative offset. Supply
   * exactly one of `to` / `by`; if both are given, `by` is ignored.
   * @param to Absolute position `[x, y]`, or a {@link Spread} / {@link Page} /
   * {@link Layer} to move the item onto.
   * @param by Relative offset `[x, y]` in measurement units.
   */
  move(to?: [number, number] | Spread | Page | Layer, by?: MeasurementValue[]): (void)[];
  /** Clears every transform (rotation, scale, shear, flip, and fit) from the item. */
  clearTransformations(): (void)[];
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
  transformValuesOf(inCoordinateSpace: CoordinateSpaces): (TransformationMatrix[])[];
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
  redefineScaling(to?: number[]): (void)[];
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
  reframe(inCoordinateSpace: BoundsSpecifier, opposingCorners: Array<[number, number]>): (void)[];
  /** Repeats the last single transform applied to any object on this item. */
  transformAgain(): (string[])[];
  /** Repeats the last transform *sequence* applied to any object (or group) on this item. */
  transformSequenceAgain(): (string[])[];
  /** Like {@link transformAgain}, but repeats the last transform applied to any *page item* specifically. */
  transformAgainIndividually(): (string[])[];
  /** Like {@link transformSequenceAgain}, but applied individually to each targeted item. */
  transformSequenceAgainIndividually(): (string[])[];
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItem. */
  get fillColor(): (Swatch)[];
  set fillColor(value: Swatch | string);
  /** The percent of tint to use in the PageItem's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): (number)[];
  set fillTint(value: number);
  /** If true, the PageItem's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. */
  get overprintFill(): (boolean)[];
  set overprintFill(value: boolean);
  /** The weight (in points) to apply to the PageItem's stroke. */
  get strokeWeight(): (number)[];
  set strokeWeight(value: MeasurementValue);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): (number)[];
  set miterLimit(value: number);
  /** The end shape of an open path. */
  get endCap(): (EndCap)[];
  set endCap(value: EndCap);
  /** The corner join applied to the PageItem. */
  get endJoin(): (EndJoin)[];
  set endJoin(value: EndJoin);
  /** The name of the stroke style to apply. */
  get strokeType(): (StrokeStyle)[];
  set strokeType(value: StrokeStyle | string);
  /** The arrowhead applied to the start of the path. */
  get leftLineEnd(): (ArrowHead)[];
  set leftLineEnd(value: ArrowHead);
  /** The arrowhead applied to the end of the path. */
  get rightLineEnd(): (ArrowHead)[];
  set rightLineEnd(value: ArrowHead);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItem. */
  get strokeColor(): (Swatch)[];
  set strokeColor(value: Swatch | string);
  /** The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get strokeTint(): (number)[];
  set strokeTint(value: number);
  /** The angle of a linear gradient applied to the fill of the PageItem. (Range: -180 to 180) */
  get gradientFillAngle(): (number)[];
  set gradientFillAngle(value: number);
  /** The angle of a linear gradient applied to the stroke of the PageItem. (Range: -180 to 180) */
  get gradientStrokeAngle(): (number)[];
  set gradientStrokeAngle(value: number);
  /** If true, the PageItem's stroke color overprints any underlying objects. If false, the stroke color knocks out the underlying colors. */
  get overprintStroke(): (boolean)[];
  set overprintStroke(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): (Swatch)[];
  set gapColor(value: Swatch);
  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get gapTint(): (number)[];
  set gapTint(value: number);
  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): (boolean)[];
  set overprintGap(value: boolean);
  /** The stroke alignment applied to the PageItem. */
  get strokeAlignment(): (StrokeAlignment)[];
  set strokeAlignment(value: StrokeAlignment);
  /** If true, the PageItem does not print. */
  get nonprinting(): (boolean)[];
  set nonprinting(value: boolean);
  /**
   * The corner shape applied to the top left corner of rectangular shapes, and
   * to all corners of non-rectangular shapes.
   *
   * Differs from {@link endJoin}: this lets you set a radius for the corner,
   * while an end join's rounded or beveled effect instead depends on the
   * stroke weight.
   */
  get topLeftCornerOption(): (CornerOptions)[];
  set topLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the top right corner of rectangular shapes */
  get topRightCornerOption(): (CornerOptions)[];
  set topRightCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get bottomLeftCornerOption(): (CornerOptions)[];
  set bottomLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get bottomRightCornerOption(): (CornerOptions)[];
  set bottomRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get topLeftCornerRadius(): (number)[];
  set topLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get topRightCornerRadius(): (number)[];
  set topRightCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get bottomLeftCornerRadius(): (number)[];
  set bottomLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get bottomRightCornerRadius(): (number)[];
  set bottomRightCornerRadius(value: MeasurementValue);
  /** The arrowhead alignment applied to the PageItem. */
  get arrowHeadAlignment(): (ArrowHeadAlignmentEnum)[];
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum);
  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000) */
  get leftArrowHeadScale(): (number)[];
  set leftArrowHeadScale(value: number);
  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000) */
  get rightArrowHeadScale(): (number)[];
  set rightArrowHeadScale(value: number);
  /** The corner adjustment applied to the PageItem. */
  get strokeCornerAdjustment(): (StrokeCornerAdjustment)[];
  set strokeCornerAdjustment(value: StrokeCornerAdjustment);
  /** The dash and gap measurements that define the pattern of a custom dashed line. Define up to six values (in points) in the format [dash1, gap1, dash2, gap2, dash3, gap3]. */
  get strokeDashAndGap(): (number[])[];
  set strokeDashAndGap(value: MeasurementValue[]);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the PageItem, in the format [x, y]. */
  get gradientFillStart(): (number[])[];
  set gradientFillStart(value: MeasurementValue[]);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the PageItem. */
  get gradientFillLength(): (number)[];
  set gradientFillLength(value: MeasurementValue);
  /** The starting point (in page coordinates) of a gradient applied to the stroke of the PageItem, in the format [x, y]. */
  get gradientStrokeStart(): (number[])[];
  set gradientStrokeStart(value: MeasurementValue[]);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the PageItem. */
  get gradientStrokeLength(): (number)[];
  set gradientStrokeLength(value: MeasurementValue);
  /** All {@link PageItems} in this container regardless of type — the general-purpose iterator for mixed content. */
  readonly pageItems: PageItems;
  /** Every {@link Graphic} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: (AnyGraphic[])[];
  /** Every {@link PageItem} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: (AnyPageItem[])[];
  /** {@link FlexObjects} directly in this container. */
  readonly flexObjects: FlexObjects;
  /** {@link SVGs} directly in this container. */
  readonly svgs: SVGs;
  /** Placed {@link Graphics} of any file format (vector, metafile, or bitmap) directly in this container. */
  readonly graphics: Graphics;
  /** The unique numeric ID of the item within its document. Stable for the item's lifetime, unlike {@link index}. */
  readonly id: (number)[];
  /**
   * The item's name — an alias for {@link label}, and what the Layers panel
   * shows. Unlike {@link NamableDOMObject.name} it carries no uniqueness
   * constraint: any number of siblings may share a name, and the default is `''`.
   */
  get name(): (string)[];
  set name(value: string);
  /** Whole-object transparency (blend mode and opacity) — see {@link TransparencySetting}. */
  readonly transparencySettings: (TransparencySetting)[];
  /** Transparency applied to the stroke only — see {@link StrokeTransparencySetting}. */
  readonly strokeTransparencySettings: (StrokeTransparencySetting)[];
  /** Transparency applied to the fill only — see {@link FillTransparencySetting}. */
  readonly fillTransparencySettings: (FillTransparencySetting)[];
  /** Transparency applied to placed content only — see {@link ContentTransparencySetting}. */
  readonly contentTransparencySettings: (ContentTransparencySetting)[];
  /** How surrounding text flows around this item — see {@link TextWrapPreference}. */
  readonly textWrapPreferences: (TextWrapPreference)[];
  /** Parent/child linked-item synchronization options — see {@link LinkedPageItemOption}. */
  readonly linkedPageItemOptions: (LinkedPageItemOption)[];
  /** Interactive-export animation (motion preset, duration, easing) — see {@link AnimationSetting}. */
  readonly animationSettings: (AnimationSetting)[];
  /** Ordering of this item's animation relative to others — see {@link TimingSetting}. */
  readonly timingSettings: (TimingSetting)[];
  /** Per-item {@link Preferences} objects (text-frame, story, and other frame-level preference bags). */
  readonly preferences: Preferences;
  /** The {@link XMLElement} this item is tagged with in the document's XML structure, if any. */
  readonly associatedXMLElement: (XMLItem)[];
  /** The {@link Page} this item appears on, or an unresolved proxy if it is on the pasteboard (check `.isValid`). */
  readonly parentPage: (Page)[];
  /** Every {@link Article} this item belongs to, in reading-order membership. */
  readonly allArticles: (Article[])[];
  /**
   * Whether this item is an overridden master-page item. `false` covers both
   * un-overridden master items and items that never came from a master.
   */
  readonly overridden: (boolean)[];
  /** The master-page object this overridden item derives from, if any. */
  readonly overriddenMasterPageItem: (PageItem | Guide | Graphic | Movie | Sound)[];
  /** Whether this master-page item may be overridden on document pages. */
  get allowOverrides(): (boolean)[];
  set allowOverrides(value: boolean);
  /** Left-margin / width / right-margin constraints under the object-based layout (Liquid Layout) rule. */
  get horizontalLayoutConstraints(): (DimensionsConstraints[])[];
  set horizontalLayoutConstraints(value: DimensionsConstraints[]);
  /** Top-margin / height / bottom-margin constraints under the object-based layout (Liquid Layout) rule. */
  get verticalLayoutConstraints(): (DimensionsConstraints[])[];
  set verticalLayoutConstraints(value: DimensionsConstraints[]);
  /** Flex-container width behavior (fixed, auto, or fill). */
  get flexItemWidthMode(): (FlexWidthHeightMode | FlexEnum)[];
  set flexItemWidthMode(value: FlexWidthHeightMode | FlexEnum);
  /** Flex-container height behavior (fixed, auto, or fill). */
  get flexItemHeightMode(): (FlexWidthHeightMode | FlexEnum)[];
  set flexItemHeightMode(value: FlexWidthHeightMode | FlexEnum);
  /** The {@link Layer} the item is on. Assign a {@link Layer} or its name to move the item to another layer. */
  get itemLayer(): (Layer)[];
  set itemLayer(value: Layer | string);
  /** The {@link ObjectStyle} applied to the item. Assign a style object or its name. */
  get appliedObjectStyle(): (ObjectStyle)[];
  set appliedObjectStyle(value: ObjectStyle | string);
  /** Whether the item is locked against selection and editing. */
  get locked(): (boolean)[];
  set locked(value: boolean);
  /** Whether the item is visible. A hidden item still prints unless {@link GraphicAttributes.nonprinting} is set. */
  get visible(): (boolean)[];
  set visible(value: boolean);
  /** Screen display-quality override for this item (fast, typical, or high quality). */
  get localDisplaySetting(): (DisplaySettingOptions)[];
  set localDisplaySetting(value: DisplaySettingOptions);
  /**
   * Stores a copy of the item in a {@link Library} as a reusable asset.
   * @param withProperties Initial property values for the created {@link Asset}.
   */
  store(using: Library, withProperties?: object): (Asset)[];
  /**
   * Places XML content into the item, replacing any existing content.
   * @param using The {@link XMLElement} whose content to place.
   */
  placeXML(using: XMLElement): (void)[];
  /** Tags the item (or its parent story) using the default tags from XML preferences. */
  autoTag(): (void)[];
  /** Associates the item with an {@link XMLElement} while preserving its existing content. */
  markup(using: XMLElement): (void)[];
  /**
   * Finds page items matching the application-level object find/change query.
   * @param reverseOrder If `true`, results come back last-to-first.
   */
  findObject(reverseOrder?: boolean): (PageItem[])[];
  /**
   * Finds page items matching the object find query and applies the change settings.
   * @param reverseOrder If `true`, results come back last-to-first.
   */
  changeObject(reverseOrder?: boolean): (PageItem[])[];
  /**
   * Places a file into the item as its content, returning the placed object(s).
   * @param fileName Path to the asset to place.
   * @param showingOptions If `true`, shows the format's import-options dialog. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   * @returns The placed object(s); usually a single-element array.
   */
  place(fileName: FilePath, showingOptions?: boolean, withProperties?: object): (AnyPageItem[])[];
  /**
   * Overrides this master-page item onto a document page as an editable copy.
   * @param destinationPage The document page to place the override on.
   */
  override(destinationPage: Page): (PageItem)[];
  /** Removes a previous master-item override, reverting to the master's version. */
  removeOverride(): (void)[];
  /** Detaches an overridden master item from its master, keeping it as an independent object. */
  detach(): (void)[];
  /** Deletes the item. */
  remove(): (void)[];
  /**
   * Applies an {@link ObjectStyle}.
   * @param clearingOverrides If `true`, clears existing local attributes first. Defaults to `true`.
   * @param clearingOverridesThroughRootObjectStyle If `true`, also clears attributes
   * not defined anywhere in the style's inheritance chain. Defaults to `false`.
   */
  applyObjectStyle(using: ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): (void)[];
  /** Clears local overrides so the item matches its applied {@link ObjectStyle} exactly. */
  clearObjectStyleOverrides(): (void)[];
  /**
   * Converts the item to a different shape.
   * @param numberOfSides Sides of the resulting polygon. Range `3`–`100`. Used only for polygon shapes.
   * @param insetPercentage Star inset of the resulting polygon. Range `0`–`100`. Used only for star shapes.
   * @param cornerRadius Corner radius of the resulting rounded rectangle.
   */
  convertShape(given: ConvertShapeOptions, numberOfSides?: number, insetPercentage?: number, cornerRadius?: string | number): (void)[];
  /** Creates a QR code from plain text in this item. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createPlainTextQRCode(plainText?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /** Creates a QR code linking to a URL. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createHyperlinkQRCode(urlLink?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /** Creates a QR code that composes an SMS. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createTextMsgQRCode(cellNumber?: string, textMessage?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /** Creates a QR code that composes an email. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createEmailQRCode(emailAddress?: string, subject?: string, body?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /**
   * Creates a business-card (vCard) QR code.
   * @param qrCodeSwatch Swatch (or its name) to color the code.
   */
  createVCardQRCode(
    firstName?: string,
    lastName?: string,
    jobTitle?: string,
    cellPhone?: string,
    phone?: string,
    email?: string,
    organisation?: string,
    streetAddress?: string,
    city?: string,
    adrState?: string,
    country?: string,
    postalCode?: string,
    website?: string,
    qrCodeSwatch?: Swatch | string,
    withProperties?: object,
  ): void;
  /**
   * Exports the item to a file.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param to Destination path.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   * @param using An export preset such as a {@link PDFExportPreset}.
   */
  exportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): (void)[];
  /**
   * Exports the item to a file on a background thread, returning the running
   * {@link BackgroundTask}.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   */
  asynchronousExportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): (BackgroundTask)[];
  /**
   * Loads the given page items into the content placer and places a linked or
   * unlinked duplicate into this item.
   * @param linkPageItems If `true`, links the placed items to their source (overrides `linkStories`). Defaults to `false`.
   * @param linkStories If `true`, links placed stories (single-story placements only). Defaults to `false`.
   * @param mapStyles If `true`, maps source styles to destination styles. Defaults to `false`.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  contentPlace(pageItems: PageItem | PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, showingOptions?: boolean): (PageItem[])[];
  /**
   * Selects the item in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): (void)[];
  /** The object's DOM class name — reports the specific format, such as `'PDF'` when this is a placed {@link PDF}. */
  readonly constructorName: 'Graphic' | 'EPS' | 'Image' | 'ImportedPage' | 'PDF' | 'PICT' | 'SVG' | 'WMF';
  /** Resolves the proxy into the individual {@link Graphic} objects it stands for. */
  getElements(): Graphic<TParent>[];
  /** The {@link Link} to the source file this graphic was placed from. */
  readonly itemLink: (Link)[];
  /** The graphic file format name (e.g. `"JPEG"`, `"Photoshop"`, `"Illustrator"`). */
  readonly imageTypeName: (string)[];
  /**
   * Exports the graphic as a web-optimized raster image.
   * @param to Destination file path.
   */
  exportForWeb(to: FilePath): (string[])[];
}

/**
 * The broadcast proxy for {@link PlainGraphic} — what `everyItem()` returns.
 *
 * Reads come back as arrays, one entry per item; a write is applied to every
 * item at once inside InDesign's own engine.
 *
 * Not a class in the InDesign DOM — look up {@link PlainGraphic} there.
 */
export interface PlainGraphicPlural<TParent = PageItemParent> {
  /**
   * Indicates whether the underlying InDesign DOM object still exists and is valid.
   * Returns `false` if the object has been deleted, closed, or invalidated.
   */
  readonly isValid: boolean;
  /**
   * The immediate parent object of this element in the InDesign DOM hierarchy.
   */
  readonly parent: (TParent)[];
  /**
   * A snapshot of every editable property on this object.
   *
   * Reads its full state in one call rather than property-by-property.
   */
  get properties(): (PropertiesGetter<PlainGraphicPlural<TParent>, 'plural'>)[];
  /**
   * Sets multiple properties at once from an object literal, in a single call
   * to the native InDesign engine — much faster than assigning each property
   * individually.
   */
  set properties(value: PropertiesSetter<PlainGraphicPlural<TParent>, 'plural'>);
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
   * Bounds excluding stroke width, ordered `[y1, x1, y2, x2]`. Reads in the
   * current ruler units; assignment accepts unit strings such as `'12pt'`.
   */
  get geometricBounds(): (number[])[];
  set geometricBounds(value: BoundsArray);
  /**
   * Bounds including stroke width (and drop shadows / effects), ordered
   * `[y1, x1, y2, x2]`. Wider than {@link geometricBounds} by the stroke's
   * outer extent.
   */
  get visibleBounds(): (number[])[];
  set visibleBounds(value: BoundsArray);
  /** Rotation applied to the item, in degrees. Range `-360` to `360`. */
  get rotationAngle(): (number)[];
  set rotationAngle(value: number);
  /** Shear (skew) applied to the item, in degrees. Range `-360` to `360`. */
  get shearAngle(): (number)[];
  set shearAngle(value: number);
  /** Horizontal scale applied to the item, as a percentage. */
  get horizontalScale(): (number)[];
  set horizontalScale(value: number);
  /** Vertical scale applied to the item, as a percentage. */
  get verticalScale(): (number)[];
  set verticalScale(value: number);
  /** Rotation relative to the parent object rather than the page, in degrees. Range `-360` to `360`. */
  get absoluteRotationAngle(): (number)[];
  set absoluteRotationAngle(value: number);
  /** Shear relative to the parent object rather than the page, in degrees. Range `-360` to `360`. */
  get absoluteShearAngle(): (number)[];
  set absoluteShearAngle(value: number);
  /** Horizontal scale relative to the parent object rather than the page, as a percentage. */
  get absoluteHorizontalScale(): (number)[];
  set absoluteHorizontalScale(value: number);
  /** Vertical scale relative to the parent object rather than the page, as a percentage. */
  get absoluteVerticalScale(): (number)[];
  set absoluteVerticalScale(value: number);
  /** Flip applied to the item within its own coordinate space. */
  get flip(): (Flip)[];
  set flip(value: Flip);
  /** Whether the item is flipped relative to its parent, and along which axis — the parent-relative counterpart of {@link flip}. */
  get absoluteFlip(): (Flip)[];
  set absoluteFlip(value: Flip);
  /**
   * Fits placed content to the frame (or the frame to its content) per the
   * chosen {@link FitOptions}. No effect on a frame with no placed content.
   */
  fit(given: FitOptions): (void)[];
  /**
   * Flips the item across an axis.
   * @param around Point to flip about — an `[x, y]` pair or an {@link AnchorPoint}.
   * Defaults to the item's center.
   */
  flipItem(given: Flip, around?: [number, number] | AnchorPoint): (void)[];
  /**
   * Duplicates the item, optionally repositioning the copy.
   * @param to Absolute position `[x, y]` for the copy, or a {@link Spread} /
   * {@link Page} / {@link Layer} to place it on. Omit to leave it atop the original.
   * @param by Offset `[x, y]` from the original's position; ignored when `to` is given.
   */
  duplicate(to?: [number, number] | Spread | Page | Layer, by?: MeasurementValue[]): (PlainGraphicPlural<TParent>)[];
  /**
   * Moves the item to an absolute location or by a relative offset. Supply
   * exactly one of `to` / `by`; if both are given, `by` is ignored.
   * @param to Absolute position `[x, y]`, or a {@link Spread} / {@link Page} /
   * {@link Layer} to move the item onto.
   * @param by Relative offset `[x, y]` in measurement units.
   */
  move(to?: [number, number] | Spread | Page | Layer, by?: MeasurementValue[]): (void)[];
  /** Clears every transform (rotation, scale, shear, flip, and fit) from the item. */
  clearTransformations(): (void)[];
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
  transformValuesOf(inCoordinateSpace: CoordinateSpaces): (TransformationMatrix[])[];
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
  redefineScaling(to?: number[]): (void)[];
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
  reframe(inCoordinateSpace: BoundsSpecifier, opposingCorners: Array<[number, number]>): (void)[];
  /** Repeats the last single transform applied to any object on this item. */
  transformAgain(): (string[])[];
  /** Repeats the last transform *sequence* applied to any object (or group) on this item. */
  transformSequenceAgain(): (string[])[];
  /** Like {@link transformAgain}, but repeats the last transform applied to any *page item* specifically. */
  transformAgainIndividually(): (string[])[];
  /** Like {@link transformSequenceAgain}, but applied individually to each targeted item. */
  transformSequenceAgainIndividually(): (string[])[];
  /** The swatch (color, gradient, tint, or mixed ink) applied to the fill of the PageItem. */
  get fillColor(): (Swatch)[];
  set fillColor(value: Swatch | string);
  /** The percent of tint to use in the PageItem's fill color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get fillTint(): (number)[];
  set fillTint(value: number);
  /** If true, the PageItem's fill color overprints any underlying objects. If false, the fill color knocks out the underlying colors. */
  get overprintFill(): (boolean)[];
  set overprintFill(value: boolean);
  /** The weight (in points) to apply to the PageItem's stroke. */
  get strokeWeight(): (number)[];
  set strokeWeight(value: MeasurementValue);
  /** The limit of the ratio of stroke width to miter length before a miter (pointed) join becomes a bevel (squared-off) join. */
  get miterLimit(): (number)[];
  set miterLimit(value: number);
  /** The end shape of an open path. */
  get endCap(): (EndCap)[];
  set endCap(value: EndCap);
  /** The corner join applied to the PageItem. */
  get endJoin(): (EndJoin)[];
  set endJoin(value: EndJoin);
  /** The name of the stroke style to apply. */
  get strokeType(): (StrokeStyle)[];
  set strokeType(value: StrokeStyle | string);
  /** The arrowhead applied to the start of the path. */
  get leftLineEnd(): (ArrowHead)[];
  set leftLineEnd(value: ArrowHead);
  /** The arrowhead applied to the end of the path. */
  get rightLineEnd(): (ArrowHead)[];
  set rightLineEnd(value: ArrowHead);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the stroke of the PageItem. */
  get strokeColor(): (Swatch)[];
  set strokeColor(value: Swatch | string);
  /** The percent of tint to use in object's stroke color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get strokeTint(): (number)[];
  set strokeTint(value: number);
  /** The angle of a linear gradient applied to the fill of the PageItem. (Range: -180 to 180) */
  get gradientFillAngle(): (number)[];
  set gradientFillAngle(value: number);
  /** The angle of a linear gradient applied to the stroke of the PageItem. (Range: -180 to 180) */
  get gradientStrokeAngle(): (number)[];
  set gradientStrokeAngle(value: number);
  /** If true, the PageItem's stroke color overprints any underlying objects. If false, the stroke color knocks out the underlying colors. */
  get overprintStroke(): (boolean)[];
  set overprintStroke(value: boolean);
  /** The swatch (color, gradient, tint, or mixed ink) applied to the gap of a dashed, dotted, or striped stroke. For information, see stroke type. */
  get gapColor(): (Swatch)[];
  set gapColor(value: Swatch);
  /** The tint as a percentage of the gap color. (To specify a tint percent, use a number in the range of 0 to 100; to use the inherited or overridden value, use -1.) */
  get gapTint(): (number)[];
  set gapTint(value: number);
  /** If true, the gap color overprints any underlying colors. If false, the gap color knocks out the underlying colors. */
  get overprintGap(): (boolean)[];
  set overprintGap(value: boolean);
  /** The stroke alignment applied to the PageItem. */
  get strokeAlignment(): (StrokeAlignment)[];
  set strokeAlignment(value: StrokeAlignment);
  /** If true, the PageItem does not print. */
  get nonprinting(): (boolean)[];
  set nonprinting(value: boolean);
  /**
   * The corner shape applied to the top left corner of rectangular shapes, and
   * to all corners of non-rectangular shapes.
   *
   * Differs from {@link endJoin}: this lets you set a radius for the corner,
   * while an end join's rounded or beveled effect instead depends on the
   * stroke weight.
   */
  get topLeftCornerOption(): (CornerOptions)[];
  set topLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the top right corner of rectangular shapes */
  get topRightCornerOption(): (CornerOptions)[];
  set topRightCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom left corner of rectangular shapes. */
  get bottomLeftCornerOption(): (CornerOptions)[];
  set bottomLeftCornerOption(value: CornerOptions);
  /** The shape to apply to the bottom right corner of rectangular shapes. */
  get bottomRightCornerOption(): (CornerOptions)[];
  set bottomRightCornerOption(value: CornerOptions);
  /** The radius in measurement units of the corner effect applied to the top left corner of rectangular shapes and all corners of non-rectangular shapes */
  get topLeftCornerRadius(): (number)[];
  set topLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the top right corner of rectangular shapes */
  get topRightCornerRadius(): (number)[];
  set topRightCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom left corner of rectangular shapes */
  get bottomLeftCornerRadius(): (number)[];
  set bottomLeftCornerRadius(value: MeasurementValue);
  /** The radius in measurement units of the corner effect applied to the bottom right corner of rectangular shapes */
  get bottomRightCornerRadius(): (number)[];
  set bottomRightCornerRadius(value: MeasurementValue);
  /** The arrowhead alignment applied to the PageItem. */
  get arrowHeadAlignment(): (ArrowHeadAlignmentEnum)[];
  set arrowHeadAlignment(value: ArrowHeadAlignmentEnum);
  /** The scaling applied to the arrowhead at the start of the path. (Range: 1 to 1000) */
  get leftArrowHeadScale(): (number)[];
  set leftArrowHeadScale(value: number);
  /** The scaling applied to the arrowhead at the end of the path. (Range: 1 to 1000) */
  get rightArrowHeadScale(): (number)[];
  set rightArrowHeadScale(value: number);
  /** The corner adjustment applied to the PageItem. */
  get strokeCornerAdjustment(): (StrokeCornerAdjustment)[];
  set strokeCornerAdjustment(value: StrokeCornerAdjustment);
  /** The dash and gap measurements that define the pattern of a custom dashed line. Define up to six values (in points) in the format [dash1, gap1, dash2, gap2, dash3, gap3]. */
  get strokeDashAndGap(): (number[])[];
  set strokeDashAndGap(value: MeasurementValue[]);
  /** The starting point (in page coordinates) of a gradient applied to the fill of the PageItem, in the format [x, y]. */
  get gradientFillStart(): (number[])[];
  set gradientFillStart(value: MeasurementValue[]);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the fill of the PageItem. */
  get gradientFillLength(): (number)[];
  set gradientFillLength(value: MeasurementValue);
  /** The starting point (in page coordinates) of a gradient applied to the stroke of the PageItem, in the format [x, y]. */
  get gradientStrokeStart(): (number[])[];
  set gradientStrokeStart(value: MeasurementValue[]);
  /** The length (for a linear gradient) or radius (for a radial gradient) applied to the stroke of the PageItem. */
  get gradientStrokeLength(): (number)[];
  set gradientStrokeLength(value: MeasurementValue);
  /** All {@link PageItems} in this container regardless of type — the general-purpose iterator for mixed content. */
  readonly pageItems: PageItems;
  /** Every {@link Graphic} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allGraphics: (AnyGraphic[])[];
  /** Every {@link PageItem} anywhere in this container, recursing into nested groups. A snapshot array, not a live collection. */
  readonly allPageItems: (AnyPageItem[])[];
  /** {@link FlexObjects} directly in this container. */
  readonly flexObjects: FlexObjects;
  /** {@link SVGs} directly in this container. */
  readonly svgs: SVGs;
  /** Placed {@link Graphics} of any file format (vector, metafile, or bitmap) directly in this container. */
  readonly graphics: Graphics;
  /** The unique numeric ID of the item within its document. Stable for the item's lifetime, unlike {@link index}. */
  readonly id: (number)[];
  /**
   * The item's name — an alias for {@link label}, and what the Layers panel
   * shows. Unlike {@link NamableDOMObject.name} it carries no uniqueness
   * constraint: any number of siblings may share a name, and the default is `''`.
   */
  get name(): (string)[];
  set name(value: string);
  /** Whole-object transparency (blend mode and opacity) — see {@link TransparencySetting}. */
  readonly transparencySettings: (TransparencySetting)[];
  /** Transparency applied to the stroke only — see {@link StrokeTransparencySetting}. */
  readonly strokeTransparencySettings: (StrokeTransparencySetting)[];
  /** Transparency applied to the fill only — see {@link FillTransparencySetting}. */
  readonly fillTransparencySettings: (FillTransparencySetting)[];
  /** Transparency applied to placed content only — see {@link ContentTransparencySetting}. */
  readonly contentTransparencySettings: (ContentTransparencySetting)[];
  /** How surrounding text flows around this item — see {@link TextWrapPreference}. */
  readonly textWrapPreferences: (TextWrapPreference)[];
  /** Parent/child linked-item synchronization options — see {@link LinkedPageItemOption}. */
  readonly linkedPageItemOptions: (LinkedPageItemOption)[];
  /** Interactive-export animation (motion preset, duration, easing) — see {@link AnimationSetting}. */
  readonly animationSettings: (AnimationSetting)[];
  /** Ordering of this item's animation relative to others — see {@link TimingSetting}. */
  readonly timingSettings: (TimingSetting)[];
  /** Per-item {@link Preferences} objects (text-frame, story, and other frame-level preference bags). */
  readonly preferences: Preferences;
  /** The {@link XMLElement} this item is tagged with in the document's XML structure, if any. */
  readonly associatedXMLElement: (XMLItem)[];
  /** The {@link Page} this item appears on, or an unresolved proxy if it is on the pasteboard (check `.isValid`). */
  readonly parentPage: (Page)[];
  /** Every {@link Article} this item belongs to, in reading-order membership. */
  readonly allArticles: (Article[])[];
  /**
   * Whether this item is an overridden master-page item. `false` covers both
   * un-overridden master items and items that never came from a master.
   */
  readonly overridden: (boolean)[];
  /** The master-page object this overridden item derives from, if any. */
  readonly overriddenMasterPageItem: (PageItem | Guide | Graphic | Movie | Sound)[];
  /** Whether this master-page item may be overridden on document pages. */
  get allowOverrides(): (boolean)[];
  set allowOverrides(value: boolean);
  /** Left-margin / width / right-margin constraints under the object-based layout (Liquid Layout) rule. */
  get horizontalLayoutConstraints(): (DimensionsConstraints[])[];
  set horizontalLayoutConstraints(value: DimensionsConstraints[]);
  /** Top-margin / height / bottom-margin constraints under the object-based layout (Liquid Layout) rule. */
  get verticalLayoutConstraints(): (DimensionsConstraints[])[];
  set verticalLayoutConstraints(value: DimensionsConstraints[]);
  /** Flex-container width behavior (fixed, auto, or fill). */
  get flexItemWidthMode(): (FlexWidthHeightMode | FlexEnum)[];
  set flexItemWidthMode(value: FlexWidthHeightMode | FlexEnum);
  /** Flex-container height behavior (fixed, auto, or fill). */
  get flexItemHeightMode(): (FlexWidthHeightMode | FlexEnum)[];
  set flexItemHeightMode(value: FlexWidthHeightMode | FlexEnum);
  /** The {@link Layer} the item is on. Assign a {@link Layer} or its name to move the item to another layer. */
  get itemLayer(): (Layer)[];
  set itemLayer(value: Layer | string);
  /** The {@link ObjectStyle} applied to the item. Assign a style object or its name. */
  get appliedObjectStyle(): (ObjectStyle)[];
  set appliedObjectStyle(value: ObjectStyle | string);
  /** Whether the item is locked against selection and editing. */
  get locked(): (boolean)[];
  set locked(value: boolean);
  /** Whether the item is visible. A hidden item still prints unless {@link GraphicAttributes.nonprinting} is set. */
  get visible(): (boolean)[];
  set visible(value: boolean);
  /** Screen display-quality override for this item (fast, typical, or high quality). */
  get localDisplaySetting(): (DisplaySettingOptions)[];
  set localDisplaySetting(value: DisplaySettingOptions);
  /**
   * Stores a copy of the item in a {@link Library} as a reusable asset.
   * @param withProperties Initial property values for the created {@link Asset}.
   */
  store(using: Library, withProperties?: object): (Asset)[];
  /**
   * Places XML content into the item, replacing any existing content.
   * @param using The {@link XMLElement} whose content to place.
   */
  placeXML(using: XMLElement): (void)[];
  /** Tags the item (or its parent story) using the default tags from XML preferences. */
  autoTag(): (void)[];
  /** Associates the item with an {@link XMLElement} while preserving its existing content. */
  markup(using: XMLElement): (void)[];
  /**
   * Finds page items matching the application-level object find/change query.
   * @param reverseOrder If `true`, results come back last-to-first.
   */
  findObject(reverseOrder?: boolean): (PageItem[])[];
  /**
   * Finds page items matching the object find query and applies the change settings.
   * @param reverseOrder If `true`, results come back last-to-first.
   */
  changeObject(reverseOrder?: boolean): (PageItem[])[];
  /**
   * Places a file into the item as its content, returning the placed object(s).
   * @param fileName Path to the asset to place.
   * @param showingOptions If `true`, shows the format's import-options dialog. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   * @returns The placed object(s); usually a single-element array.
   */
  place(fileName: FilePath, showingOptions?: boolean, withProperties?: object): (AnyPageItem[])[];
  /**
   * Overrides this master-page item onto a document page as an editable copy.
   * @param destinationPage The document page to place the override on.
   */
  override(destinationPage: Page): (PageItem)[];
  /** Removes a previous master-item override, reverting to the master's version. */
  removeOverride(): (void)[];
  /** Detaches an overridden master item from its master, keeping it as an independent object. */
  detach(): (void)[];
  /** Deletes the item. */
  remove(): (void)[];
  /**
   * Applies an {@link ObjectStyle}.
   * @param clearingOverrides If `true`, clears existing local attributes first. Defaults to `true`.
   * @param clearingOverridesThroughRootObjectStyle If `true`, also clears attributes
   * not defined anywhere in the style's inheritance chain. Defaults to `false`.
   */
  applyObjectStyle(using: ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): (void)[];
  /** Clears local overrides so the item matches its applied {@link ObjectStyle} exactly. */
  clearObjectStyleOverrides(): (void)[];
  /**
   * Converts the item to a different shape.
   * @param numberOfSides Sides of the resulting polygon. Range `3`–`100`. Used only for polygon shapes.
   * @param insetPercentage Star inset of the resulting polygon. Range `0`–`100`. Used only for star shapes.
   * @param cornerRadius Corner radius of the resulting rounded rectangle.
   */
  convertShape(given: ConvertShapeOptions, numberOfSides?: number, insetPercentage?: number, cornerRadius?: string | number): (void)[];
  /** Creates a QR code from plain text in this item. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createPlainTextQRCode(plainText?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /** Creates a QR code linking to a URL. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createHyperlinkQRCode(urlLink?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /** Creates a QR code that composes an SMS. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createTextMsgQRCode(cellNumber?: string, textMessage?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /** Creates a QR code that composes an email. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createEmailQRCode(emailAddress?: string, subject?: string, body?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): (void)[];
  /**
   * Creates a business-card (vCard) QR code.
   * @param qrCodeSwatch Swatch (or its name) to color the code.
   */
  createVCardQRCode(
    firstName?: string,
    lastName?: string,
    jobTitle?: string,
    cellPhone?: string,
    phone?: string,
    email?: string,
    organisation?: string,
    streetAddress?: string,
    city?: string,
    adrState?: string,
    country?: string,
    postalCode?: string,
    website?: string,
    qrCodeSwatch?: Swatch | string,
    withProperties?: object,
  ): void;
  /**
   * Exports the item to a file.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param to Destination path.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   * @param using An export preset such as a {@link PDFExportPreset}.
   */
  exportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): (void)[];
  /**
   * Exports the item to a file on a background thread, returning the running
   * {@link BackgroundTask}.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   */
  asynchronousExportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): (BackgroundTask)[];
  /**
   * Loads the given page items into the content placer and places a linked or
   * unlinked duplicate into this item.
   * @param linkPageItems If `true`, links the placed items to their source (overrides `linkStories`). Defaults to `false`.
   * @param linkStories If `true`, links placed stories (single-story placements only). Defaults to `false`.
   * @param mapStyles If `true`, maps source styles to destination styles. Defaults to `false`.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  contentPlace(pageItems: PageItem | PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, showingOptions?: boolean): (PageItem[])[];
  /**
   * Selects the item in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): (void)[];
  /** Resolves the proxy into the individual {@link Graphic} objects it stands for. */
  getElements(): Graphic<TParent>[];
  /** The {@link Link} to the source file this graphic was placed from. */
  readonly itemLink: (Link)[];
  /** The graphic file format name (e.g. `"JPEG"`, `"Photoshop"`, `"Illustrator"`). */
  readonly imageTypeName: (string)[];
  /**
   * Exports the graphic as a web-optimized raster image.
   * @param to Destination file path.
   */
  exportForWeb(to: FilePath): (string[])[];
  /** Always `'Graphic'` — this is the generic case, by construction. */
  readonly constructorName: 'Graphic';
}
