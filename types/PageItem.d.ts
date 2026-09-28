/**
 * PageItem.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { IndexedDOMObject, LabelableEventDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';
import type {
  DeepPageItemHolder,
  FlexObjectContainer,
  PageItemHolder,
  PlacedGraphicContainer,
  TransformableItem,
} from './_base/PageItemMixins';
import type { PageItemParent } from './_base/Parents';
import type { AnyPageItem } from './_base/Unions';
import type { FilePath, Mode, Read } from './_base/Types';

import type { DimensionsConstraints } from './Enums/DimensionsConstraints';
import type { DisplaySettingOptions } from './Enums/DisplaySettingOptions';
import type { ExportFormat } from './Enums/ExportFormat';
import type { FlexEnum } from './Enums/FlexEnum';
import type { FlexWidthHeightMode } from './Enums/FlexWidthHeightMode';
import type { ConvertShapeOptions } from './Enums/ConvertShapeOptions';
import type { SelectionOptions } from './Enums/SelectionOptions';

import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { Asset } from './Asset';
import type { BackgroundTask } from './BackgroundTask';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { Graphic } from './Graphic';
import type { Guide } from './Guide';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { Movie } from './Movie';
import type { ObjectStyle } from './ObjectStyle';
import type { PDFExportPreset } from './PDFExportPreset';
import type { Page } from './Page';
import type { Preferences } from './Preferences';
import type { Sound } from './Sound';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { Swatch } from './Swatch';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { XMLElement } from './XMLElement';
import type { XMLItem } from './XMLItem';
import type { FormField } from './FormField';
import type { PDF } from './PDF';
import type { SplineItem } from './SplineItem';
import type { FitOptions } from './Enums/FitOptions';
import type { FlexObjects } from './FlexObjects';
import type { Graphics } from './Graphics';
import type { Image } from './Image';
import type { PageItems } from './PageItems';
import type { Rectangle } from './Rectangle';
import type { SVGs } from './SVGs';

/**
 * Any item that lives on a page: rectangles, ovals, graphic lines, polygons,
 * groups, text frames, buttons, placed graphics, and media.
 *
 * Every concrete shape descends from it, directly or through
 * {@link SplineItem}, {@link Graphic}, or {@link FormField}. Geometry,
 * transforms, fill, and stroke are common to all of them, alongside
 * master-page overrides, layout constraints, and object operations — place,
 * export, apply a style, generate a QR code. A placed {@link Image} or
 * {@link PDF} holds content but cannot itself hold a rectangle.
 */
export interface PageItem<
  TParent = PageItemParent,
  TChildParent = PageItemParent,
  M extends Mode = 'single',
>
  extends LabelableEventDOMObject<TParent, M>,
    IndexedDOMObject<TParent, M>,
    TransformableItem<M>,
    GraphicAttributes<M>,
    PageItemHolder<TChildParent, M>,
    DeepPageItemHolder<M>,
    FlexObjectContainer<TChildParent, M>,
    PlacedGraphicContainer<TChildParent, M> {
  /** The object's DOM class name — reports the specific kind, such as `'Rectangle'` when the object is a {@link Rectangle}. */
  readonly constructorName: 'PageItem' | 'Button' | 'CheckBox' | 'ComboBox' | 'EPS' | 'EPSText' | 'EndnoteTextFrame' | 'FlexObject' | 'FormField' | 'Graphic' | 'GraphicLine' | 'Group' | 'HtmlItem' | 'Image' | 'ImportedPage' | 'ListBox' | 'MediaItem' | 'Movie' | 'MultiStateObject' | 'Oval' | 'PDF' | 'PICT' | 'Polygon' | 'RadioButton' | 'Rectangle' | 'SVG' | 'SignatureField' | 'Sound' | 'SplineItem' | 'TextBox' | 'TextFrame' | 'WMF';

  /** Resolves the proxy into the individual {@link PageItem}s it stands for. */
  getElements(): PageItem<TParent, TChildParent, 'single'>[];

  /** The unique numeric ID of the item within its document. Stable for the item's lifetime, unlike {@link index}. */
  readonly id: Read<M, number>;

  /**
   * The item's name — an alias for {@link label}, and what the Layers panel
   * shows. Unlike {@link NamableDOMObject.name} it carries no uniqueness
   * constraint: any number of siblings may share a name, and the default is `''`.
   */
  get name(): Read<M, string>;
  set name(value: string);

  /** Whole-object transparency (blend mode and opacity) — see {@link TransparencySetting}. */
  readonly transparencySettings: Read<M, TransparencySetting>;

  /** Transparency applied to the stroke only — see {@link StrokeTransparencySetting}. */
  readonly strokeTransparencySettings: Read<M, StrokeTransparencySetting>;

  /** Transparency applied to the fill only — see {@link FillTransparencySetting}. */
  readonly fillTransparencySettings: Read<M, FillTransparencySetting>;

  /** Transparency applied to placed content only — see {@link ContentTransparencySetting}. */
  readonly contentTransparencySettings: Read<M, ContentTransparencySetting>;

  /** How surrounding text flows around this item — see {@link TextWrapPreference}. */
  readonly textWrapPreferences: Read<M, TextWrapPreference>;

  /** Parent/child linked-item synchronization options — see {@link LinkedPageItemOption}. */
  readonly linkedPageItemOptions: Read<M, LinkedPageItemOption>;

  /** Interactive-export animation (motion preset, duration, easing) — see {@link AnimationSetting}. */
  readonly animationSettings: Read<M, AnimationSetting>;

  /** Ordering of this item's animation relative to others — see {@link TimingSetting}. */
  readonly timingSettings: Read<M, TimingSetting>;

  /** Per-item {@link Preferences} objects (text-frame, story, and other frame-level preference bags). */
  readonly preferences: Preferences;

  /** The {@link XMLElement} this item is tagged with in the document's XML structure, if any. */
  readonly associatedXMLElement: Read<M, XMLItem>;

  /** The {@link Page} this item appears on, or an unresolved proxy if it is on the pasteboard (check `.isValid`). */
  readonly parentPage: Read<M, Page>;

  /** Every {@link Article} this item belongs to, in reading-order membership. */
  readonly allArticles: Read<M, Article[]>;

  /**
   * Whether this item is an overridden master-page item. `false` covers both
   * un-overridden master items and items that never came from a master.
   */
  readonly overridden: Read<M, boolean>;

  /** The master-page object this overridden item derives from, if any. */
  readonly overriddenMasterPageItem: Read<M, PageItem | Guide | Graphic | Movie | Sound>;

  /** Whether this master-page item may be overridden on document pages. */
  get allowOverrides(): Read<M, boolean>;
  set allowOverrides(value: boolean);

  /** Left-margin / width / right-margin constraints under the object-based layout (Liquid Layout) rule. */
  get horizontalLayoutConstraints(): Read<M, DimensionsConstraints[]>;
  set horizontalLayoutConstraints(value: DimensionsConstraints[]);

  /** Top-margin / height / bottom-margin constraints under the object-based layout (Liquid Layout) rule. */
  get verticalLayoutConstraints(): Read<M, DimensionsConstraints[]>;
  set verticalLayoutConstraints(value: DimensionsConstraints[]);

  /** Flex-container width behavior (fixed, auto, or fill). */
  get flexItemWidthMode(): Read<M, FlexWidthHeightMode | FlexEnum>;
  set flexItemWidthMode(value: FlexWidthHeightMode | FlexEnum);

  /** Flex-container height behavior (fixed, auto, or fill). */
  get flexItemHeightMode(): Read<M, FlexWidthHeightMode | FlexEnum>;
  set flexItemHeightMode(value: FlexWidthHeightMode | FlexEnum);

  /** The {@link Layer} the item is on. Assign a {@link Layer} or its name to move the item to another layer. */
  get itemLayer(): Read<M, Layer>;
  set itemLayer(value: Layer | string);

  /** The {@link ObjectStyle} applied to the item. Assign a style object or its name. */
  get appliedObjectStyle(): Read<M, ObjectStyle>;
  set appliedObjectStyle(value: ObjectStyle | string);

  /** Whether the item is locked against selection and editing. */
  get locked(): Read<M, boolean>;
  set locked(value: boolean);

  /** Whether the item is visible. A hidden item still prints unless {@link GraphicAttributes.nonprinting} is set. */
  get visible(): Read<M, boolean>;
  set visible(value: boolean);

  /** Screen display-quality override for this item (fast, typical, or high quality). */
  get localDisplaySetting(): Read<M, DisplaySettingOptions>;
  set localDisplaySetting(value: DisplaySettingOptions);

  /**
   * Stores a copy of the item in a {@link Library} as a reusable asset.
   * @param withProperties Initial property values for the created {@link Asset}.
   */
  store(using: Library, withProperties?: object): Read<M, Asset>;

  /**
   * Places XML content into the item, replacing any existing content.
   * @param using The {@link XMLElement} whose content to place.
   */
  placeXML(using: XMLElement): Read<M, void>;

  /** Tags the item (or its parent story) using the default tags from XML preferences. */
  autoTag(): Read<M, void>;

  /** Associates the item with an {@link XMLElement} while preserving its existing content. */
  markup(using: XMLElement): Read<M, void>;

  /**
   * Finds page items matching the application-level object find/change query.
   * @param reverseOrder If `true`, results come back last-to-first.
   */
  findObject(reverseOrder?: boolean): Read<M, PageItem[]>;

  /**
   * Finds page items matching the object find query and applies the change settings.
   * @param reverseOrder If `true`, results come back last-to-first.
   */
  changeObject(reverseOrder?: boolean): Read<M, PageItem[]>;

  /**
   * Places a file into the item as its content, returning the placed object(s).
   * @param fileName Path to the asset to place.
   * @param showingOptions If `true`, shows the format's import-options dialog. Defaults to `false`.
   * @param withProperties Initial property values for the placed object(s).
   * @returns The placed object(s); usually a single-element array.
   */
  place(fileName: FilePath, showingOptions?: boolean, withProperties?: object): Read<M, AnyPageItem[]>;

  /**
   * Overrides this master-page item onto a document page as an editable copy.
   * @param destinationPage The document page to place the override on.
   */
  override(destinationPage: Page): Read<M, PageItem>;

  /** Removes a previous master-item override, reverting to the master's version. */
  removeOverride(): Read<M, void>;

  /** Detaches an overridden master item from its master, keeping it as an independent object. */
  detach(): Read<M, void>;

  /** Deletes the item. */
  remove(): Read<M, void>;

  /**
   * Applies an {@link ObjectStyle}.
   * @param clearingOverrides If `true`, clears existing local attributes first. Defaults to `true`.
   * @param clearingOverridesThroughRootObjectStyle If `true`, also clears attributes
   * not defined anywhere in the style's inheritance chain. Defaults to `false`.
   */
  applyObjectStyle(using: ObjectStyle, clearingOverrides?: boolean, clearingOverridesThroughRootObjectStyle?: boolean): Read<M, void>;

  /** Clears local overrides so the item matches its applied {@link ObjectStyle} exactly. */
  clearObjectStyleOverrides(): Read<M, void>;

  /**
   * Converts the item to a different shape.
   * @param numberOfSides Sides of the resulting polygon. Range `3`–`100`. Used only for polygon shapes.
   * @param insetPercentage Star inset of the resulting polygon. Range `0`–`100`. Used only for star shapes.
   * @param cornerRadius Corner radius of the resulting rounded rectangle.
   */
  convertShape(given: ConvertShapeOptions, numberOfSides?: number, insetPercentage?: number, cornerRadius?: string | number): Read<M, void>;

  /** Creates a QR code from plain text in this item. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createPlainTextQRCode(plainText?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): Read<M, void>;

  /** Creates a QR code linking to a URL. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createHyperlinkQRCode(urlLink?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): Read<M, void>;

  /** Creates a QR code that composes an SMS. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createTextMsgQRCode(cellNumber?: string, textMessage?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): Read<M, void>;

  /** Creates a QR code that composes an email. @param qrCodeSwatch Swatch (or its name) to color the code. */
  createEmailQRCode(emailAddress?: string, subject?: string, body?: string, qrCodeSwatch?: Swatch | string, withProperties?: object): Read<M, void>;

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
  exportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): Read<M, void>;

  /**
   * Exports the item to a file on a background thread, returning the running
   * {@link BackgroundTask}.
   * @param format An {@link ExportFormat} or a matching file-type extension string.
   * @param showingOptions If `true`, shows the export-options dialog. Defaults to `false`.
   */
  asynchronousExportFile(format: ExportFormat | string, to: FilePath, showingOptions?: boolean, using?: PDFExportPreset, versionComments?: string, forceSave?: boolean): Read<M, BackgroundTask>;

  /**
   * Loads the given page items into the content placer and places a linked or
   * unlinked duplicate into this item.
   * @param linkPageItems If `true`, links the placed items to their source (overrides `linkStories`). Defaults to `false`.
   * @param linkStories If `true`, links placed stories (single-story placements only). Defaults to `false`.
   * @param mapStyles If `true`, maps source styles to destination styles. Defaults to `false`.
   * @param showingOptions If `true`, shows the link-options dialog. Defaults to `false`.
   */
  contentPlace(pageItems: PageItem | PageItem[], linkPageItems?: boolean, linkStories?: boolean, mapStyles?: boolean, showingOptions?: boolean): Read<M, PageItem[]>;

  /**
   * Selects the item in the active document window.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): Read<M, void>;
}

/**
 * A page item InDesign reports as a plain {@link PageItem} rather than as a rectangle, text
 * frame, group or any other specific kind.
 *
 * Handle it in the `'PageItem'` case of a `constructorName` check. Only the members every page
 * item has — geometry, transform, fill and stroke — are available on it.
 */
export interface PlainPageItem<
  TParent = PageItemParent,
  TChildParent = PageItemParent,
  M extends Mode = 'single',
> extends PageItem<TParent, TChildParent, M> {
  /** Always `'PageItem'` — this is the generic case, by construction. */
  readonly constructorName: 'PageItem';
}

