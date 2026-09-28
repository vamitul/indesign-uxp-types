/**
 * SplineItem.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { PageItem } from './PageItem';
import type {
  EndnoteFrameContainer,
  FormFieldContainer,
  ShapeContainer,
} from './_base/PageItemMixins';
import type { ContentType } from './Enums/ContentType';
import type { LockStateValues } from './Enums/LockStateValues';

import type { AnchoredObjectSetting } from './AnchoredObjectSetting';
import type { EPSs } from './EPSs';
import type { HtmlItems } from './HtmlItems';
import type { Images } from './Images';
import type { ImportedPages } from './ImportedPages';
import type { MediaItems } from './MediaItems';
import type { Movies } from './Movies';
import type { ObjectExportOption } from './ObjectExportOption';
import type { PDFs } from './PDFs';
import type { PICTs } from './PICTs';
import type { Paths } from './Paths';
import type { Sounds } from './Sounds';
import type { TextPaths } from './TextPaths';
import type { WMFs } from './WMFs';
import type { PageItemParent } from './_base/Parents';
import type { GraphicLine } from './GraphicLine';
import type { Oval } from './Oval';
import type { Polygon } from './Polygon';
import type { Rectangle } from './Rectangle';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { Buttons } from './Buttons';
import type { CheckBoxes } from './CheckBoxes';
import type { ComboBoxes } from './ComboBoxes';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { EPSTexts } from './EPSTexts';
import type { EndnoteTextFrames } from './EndnoteTextFrames';
import type { FitOptions } from './Enums/FitOptions';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { FormFields } from './FormFields';
import type { Graphic } from './Graphic';
import type { GraphicLines } from './GraphicLines';
import type { Graphics } from './Graphics';
import type { Groups } from './Groups';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ListBoxes } from './ListBoxes';
import type { MultiStateObjects } from './MultiStateObjects';
import type { ObjectStyle } from './ObjectStyle';
import type { Ovals } from './Ovals';
import type { Page } from './Page';
import type { PageItems } from './PageItems';
import type { Polygons } from './Polygons';
import type { Preferences } from './Preferences';
import type { RadioButtons } from './RadioButtons';
import type { Rectangles } from './Rectangles';
import type { SVGs } from './SVGs';
import type { SignatureFields } from './SignatureFields';
import type { SplineItems } from './SplineItems';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TextBoxes } from './TextBoxes';
import type { TextFrames } from './TextFrames';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';

/**
 * A Bezier-path page item — the shared base of the four drawable shapes
 * ({@link Rectangle}, {@link Oval}, {@link Polygon}, {@link GraphicLine}).
 *
 * Its outline is edited through {@link paths}; placed content (images, EPS, PDF,
 * media…) sits in the matching child collection, and InCopy check-in/out and
 * stacking order are reached here too. The pathfinder methods —
 * {@link makeCompoundPath}, {@link addPath}, {@link subtractPath},
 * {@link intersectPath}, {@link excludeOverlapPath}, {@link minusBack} — combine
 * this shape's outline with others.
 */
export interface SplineItem<
  TParent = PageItemParent,
  TChildParent = PageItemParent,
  M extends Mode = 'single',
>
  extends PageItem<TParent, TChildParent, M>,
    ShapeContainer<TChildParent, M>,
    FormFieldContainer<TChildParent, M>,
    EndnoteFrameContainer<TChildParent, M> {
  /** The object's DOM class name — reports the specific kind, such as `'Oval'` when the object is a {@link Oval}. */
  readonly constructorName: 'SplineItem' | 'GraphicLine' | 'Oval' | 'Polygon' | 'Rectangle';

  /** Resolves the proxy into the individual {@link SplineItem}s it stands for. */
  getElements(): SplineItem<TParent, TChildParent, 'single'>[];

  /** The kind of content the frame may hold (graphic, text, or unassigned). */
  get contentType(): Read<M, ContentType>;
  set contentType(value: ContentType);

  /** The InCopy check-out / managed-content state of the frame's story. */
  readonly lockState: Read<M, LockStateValues>;

  /** Inline / anchored-object positioning settings — see {@link AnchoredObjectSetting}. */
  readonly anchoredObjectSettings: Read<M, AnchoredObjectSetting>;

  /** Reflowable-export options (alt text, tagging, conversion) — see {@link ObjectExportOption}. */
  readonly objectExportOptions: Read<M, ObjectExportOption>;

  /** The editable Bezier {@link Paths} making up this shape's outline. */
  readonly paths: Paths;

  /** {@link TextPaths} — text set on this shape's path — contained here. */
  readonly textPaths: TextPaths;

  /** Placed {@link Sounds} contained in this shape. */
  readonly sounds: Sounds;

  /** Placed {@link MediaItems} contained in this shape. */
  readonly mediaItems: MediaItems;

  /** Placed {@link Movies} contained in this shape. */
  readonly movies: Movies;

  /** Placed {@link HtmlItems} contained in this shape. */
  readonly htmlItems: HtmlItems;

  /** Placed bitmap {@link Images} contained in this shape. */
  readonly images: Images;

  /** Placed {@link EPSs} contained in this shape. */
  readonly epss: EPSs;

  /** Placed {@link WMFs} contained in this shape. */
  readonly wmfs: WMFs;

  /** Placed {@link PICTs} contained in this shape. */
  readonly picts: PICTs;

  /** Placed {@link PDFs} contained in this shape. */
  readonly pdfs: PDFs;

  /** Placed {@link ImportedPages} (pages placed from other InDesign/PDF documents) contained in this shape. */
  readonly importedPages: ImportedPages;

  /** Checks the frame's story out for editing in an InCopy workflow. @returns `true` on success. */
  checkOut(): Read<M, boolean>;

  /**
   * Checks the frame's story back in to the InCopy workflow.
   * @param versionComments The comment to attach to this version.
   * @param forceSave If `true`, saves a new version even with no changes. Defaults to `false`.
   * @returns `true` on success.
   */
  checkIn(versionComments?: string, forceSave?: boolean): Read<M, boolean>;

  /** Reverts the frame's managed content to its last-saved state. @returns `true` on success. */
  revert(): Read<M, boolean>;

  /**
   * Brings the shape to the front of its layer, or just in front of `reference`.
   * @param reference An item with the same parent to move directly in front of.
   */
  bringToFront(reference?: PageItem): Read<M, void>;

  /**
   * Sends the shape to the back of its layer, or just behind `reference`.
   * @param reference An item with the same parent to move directly behind.
   */
  sendToBack(reference?: PageItem): Read<M, void>;

  /** Brings the shape forward one step in the stacking order. */
  bringForward(): Read<M, void>;

  /** Sends the shape backward one step in the stacking order. */
  sendBackward(): Read<M, void>;

  /**
   * Combines this shape's path with others into a single compound path.
   * @param with The objects whose paths to merge in.
   */
  makeCompoundPath(withItems: PageItem | PageItem[]): Read<M, PageItem>;

  /** Releases a compound path back into its separate paths. */
  releaseCompoundPath(): Read<M, PageItem[]>;

  /** Creates a new shape from the intersection of this shape and others; errors if they do not overlap. */
  intersectPath(withItems: PageItem | PageItem[]): Read<M, PageItem>;

  /** Creates a new shape from the union of this shape and others; deletes non-overlapping objects. */
  addPath(withItems: PageItem | PageItem[]): Read<M, PageItem>;

  /** Creates a new shape by subtracting the overlapping areas of the other objects from this shape. */
  subtractPath(withItems: PageItem | PageItem[]): Read<M, PageItem>;

  /** Creates a new shape by subtracting this shape from the objects behind it. */
  minusBack(withItems: PageItem | PageItem[]): Read<M, PageItem>;

  /** Creates a new shape from the areas where this shape and others do *not* overlap. */
  excludeOverlapPath(withItems: PageItem | PageItem[]): Read<M, PageItem>;
}

/**
 * A shape InDesign reports as a plain {@link SplineItem} rather than as a rectangle, oval,
 * polygon or graphic line.
 *
 * Handle it in the `'SplineItem'` case of a `constructorName` check. Only the members every
 * spline has — its paths, and the pathfinder operations — are available on it.
 */
export interface PlainSplineItem<
  TParent = PageItemParent,
  TChildParent = PageItemParent,
  M extends Mode = 'single',
> extends SplineItem<TParent, TChildParent, M> {
  /** Always `'SplineItem'` — this is the generic case, by construction. */
  readonly constructorName: 'SplineItem';
}
