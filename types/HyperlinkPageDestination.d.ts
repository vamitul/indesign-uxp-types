/**
 * HyperlinkPageDestination.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Page } from './Page';
import type { BoundsArray } from './_base/Types';
import type { HyperlinkDestinationPageSetting } from './Enums/HyperlinkDestinationPageSetting';
import type { Hyperlink } from './Hyperlink';

/**
 * A {@link Hyperlink} destination that is a page within the current document.
 */
export interface HyperlinkPageDestination<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'HyperlinkPageDestination';

  /** Resolves the proxy into the individual {@link HyperlinkPageDestination} objects it stands for. */
  getElements(): HyperlinkPageDestination<'single'>[];

  /** The unique ID of the destination, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** Whether the hyperlink is hidden. */
  readonly hidden: Read<M, boolean>;

  /**
   * If `true` (the default), allows a custom {@link name} and leaves it
   * unchanged when the destination moves to a different page. If `false`,
   * the name tracks {@link destinationPage}'s page number and becomes
   * read-only.
   */
  get nameManually(): Read<M, boolean>;
  set nameManually(value: boolean);

  /** The page that the hyperlink points to. */
  get destinationPage(): Read<M, Page>;
  set destinationPage(value: Page);

  /** The page size used when this destination is reached by clicking the hyperlink. */
  get viewSetting(): Read<M, HyperlinkDestinationPageSetting>;
  set viewSetting(value: HyperlinkDestinationPageSetting);

  /**
   * The view rectangle, ordered `[y1, x1, y2, x2]` (top, left, bottom,
   * right). Only meaningful when {@link viewSetting} is fixed.
   */
  get viewBounds(): Read<M, number[]>;
  set viewBounds(value: BoundsArray);

  /**
   * The zoom percentage used when this destination is reached. Range `5` to
   * `4000`. Only meaningful when {@link viewSetting} is fixed.
   */
  get viewPercentage(): Read<M, number>;
  set viewPercentage(value: number);

  /** Deletes the destination. */
  remove(): Read<M, void>;

  /** Jumps to the hyperlink destination. */
  showDestination(): Read<M, void>;
}
