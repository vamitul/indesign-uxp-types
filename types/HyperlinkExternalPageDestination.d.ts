/**
 * HyperlinkExternalPageDestination.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { FilePath, File, BoundsArray } from './_base/Types';
import type { HyperlinkDestinationPageSetting } from './Enums/HyperlinkDestinationPageSetting';
import type { Hyperlink } from './Hyperlink';

/**
 * A {@link Hyperlink} destination that is a page in a document other than
 * the one containing the hyperlink's source.
 */
export interface HyperlinkExternalPageDestination<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'HyperlinkExternalPageDestination';

  /** Resolves the proxy into the individual {@link HyperlinkExternalPageDestination} objects it stands for. */
  getElements(): HyperlinkExternalPageDestination<'single'>[];

  /** The name of the destination. */
  readonly name: Read<M, string>;

  /** The unique ID of the destination, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** Whether the hyperlink is hidden. */
  readonly hidden: Read<M, boolean>;

  /** The path to the document that the hyperlink destination points to. */
  get documentPath(): Read<M, Promise<File>>;
  set documentPath(value: FilePath);

  /**
   * The 1-based index of the page that the hyperlink destination points to.
   * Range `1` to `9999`.
   */
  get destinationPageIndex(): Read<M, number>;
  set destinationPageIndex(value: number);

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
