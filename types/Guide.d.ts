/**
 * Guide.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject, LabelableEventDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { GuideTypeOptions } from './Enums/GuideTypeOptions';
import type { HorizontalOrVertical } from './Enums/HorizontalOrVertical';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { UIColors } from './Enums/UIColors';

import type { CoordinateSpaces } from './Enums/CoordinateSpaces';
import type { Graphic } from './Graphic';
import type { Layer } from './Layer';
import type { MasterSpread } from './MasterSpread';
import type { Movie } from './Movie';
import type { Page } from './Page';
import type { PageItem } from './PageItem';
import type { Sound } from './Sound';
import type { Spread } from './Spread';
import type { TransformationMatrix } from './TransformationMatrix';
import type { TransformOrigin } from './_base/PageItemMixins';
import type { MeasurementValue } from './_base/Types';

/**
 * A non-printing ruler guide used to align page items and establish layout grids.
 *
 * A plain named DOM object parented to a {@link Spread}, {@link Page}, or
 * {@link MasterSpread} — not a page item, so it carries no fill/stroke and only
 * a minimal transform surface ({@link move}, {@link duplicate}, {@link resolve}).
 * Like any master-page object, a guide placed on a {@link MasterSpread} can be
 * overridden on document pages.
 */
export interface Guide<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Spread | Page | MasterSpread, M>,
    IndexedDOMObject<Spread | Page | MasterSpread, M>,
    NamableDOMObject<Spread | Page | MasterSpread, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Guide';

  /** Resolves the proxy into the individual {@link Guide} objects it stands for. */
  getElements(): Guide<'single'>[];

  /** The unique numeric ID of the guide within its document. Stable for the guide's lifetime, unlike {@link index}. */
  readonly id: Read<M, number>;

  /**
   * Whether this is an overridden master-page guide. `false` covers both
   * un-overridden master guides and guides that never came from a master.
   */
  readonly overridden: Read<M, boolean>;

  /** The master-page object this overridden guide derives from, if any. */
  readonly overriddenMasterPageItem: Read<M, PageItem | Guide | Graphic | Movie | Sound>;

  /** The {@link Page} this guide appears on, or an unresolved proxy if it is on a spread with no page context. */
  readonly parentPage: Read<M, Page>;

  /** Whether this master-page guide may be overridden on document pages. */
  get allowOverrides(): Read<M, boolean>;
  set allowOverrides(value: boolean);

  /**
   * The guide's identifying color. Assign either an `[R, G, B]` triple (each
   * `0`–`255`) or a named {@link UIColors} value.
   */
  get guideColor(): Read<M, [number, number, number] | UIColors>;
  set guideColor(value: [number, number, number] | UIColors);

  /** Whether the guide runs horizontally or vertically. */
  get orientation(): Read<M, HorizontalOrVertical>;
  set orientation(value: HorizontalOrVertical);

  /** The guide's position relative to the current ruler zero point. */
  get location(): Read<M, number>;
  set location(value: MeasurementValue);

  /**
   * Whether a horizontal guide stops at the page edges. When `false`, it
   * extends across the full width of the spread and into the pasteboard.
   */
  get fitToPage(): Read<M, boolean>;
  set fitToPage(value: boolean);

  /** View magnification percentage below which the guide is no longer displayed. Range `5`–`4000`. */
  get viewThreshold(): Read<M, number>;
  set viewThreshold(value: number);

  /** Whether the guide is locked against selection and editing. */
  get locked(): Read<M, boolean>;
  set locked(value: boolean);

  /** The {@link Layer} the guide is on. */
  get itemLayer(): Read<M, Layer>;
  set itemLayer(value: Layer);

  /** Whether this is a ruler guide or a Liquid Layout guide. */
  get guideType(): Read<M, GuideTypeOptions>;
  set guideType(value: GuideTypeOptions);

  /** The Liquid Layout zone the guide belongs to. */
  get guideZone(): Read<M, number>;
  set guideZone(value: MeasurementValue);

  /**
   * Overrides this master-page guide onto a document page as an editable copy.
   * @param destinationPage The document page to place the override on.
   */
  override(destinationPage: Page): Read<M, Guide>;

  /** Removes a previous master-item override, reverting to the master's version. */
  removeOverride(): Read<M, void>;

  /** Detaches an overridden master guide from its master, keeping it as an independent object. */
  detach(): Read<M, void>;

  /** Deletes the guide. */
  remove(): Read<M, void>;

  /**
   * Moves the guide to an absolute location or by a relative offset. Supply
   * exactly one of `to` / `by`; if both are given, `by` is ignored.
   * @param to Absolute position `[x, y]`.
   * @param by Relative offset `[x, y]` in measurement units.
   */
  move(to?: MeasurementValue[], by?: MeasurementValue[]): Read<M, void>;

  /** Duplicates the guide. */
  duplicate(): Read<M, Guide>;

  /** Returns the guide's transform, decomposed per coordinate space. */
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
   * Selects the guide in the active document window.
   * @param existingSelection How this selection combines with the current one.
   * Defaults to {@link SelectionOptions.REPLACE_WITH}.
   */
  select(existingSelection?: SelectionOptions): Read<M, void>;
}
