/**
 * GotoAnchorBehavior.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { Behavior } from './Behavior';
import type { Bookmark } from './Bookmark';
import type { HyperlinkTextDestination } from './HyperlinkTextDestination';
import type { HyperlinkPageDestination } from './HyperlinkPageDestination';
import type { GoToZoomOptions } from './Enums/GoToZoomOptions';
import type { BehaviorEvents } from './Enums/BehaviorEvents';


/**
 * A behavior that jumps to a named anchor — a {@link Bookmark} or a text/page
 * hyperlink destination.
 */
export interface GotoAnchorBehavior<M extends Mode = 'single'> extends Behavior<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'GotoAnchorBehavior';

  /** Resolves the proxy into the individual {@link GotoAnchorBehavior} objects it stands for. */
  getElements(): GotoAnchorBehavior<'single'>[];

  /** The name of the bookmark or hyperlink destination this behaviour jumps to. */
  readonly anchorName: Read<M, string>;

  /** The anchor target. */
  get anchorItem(): Read<M, Bookmark | HyperlinkTextDestination | HyperlinkPageDestination>;
  set anchorItem(value: Bookmark | HyperlinkTextDestination | HyperlinkPageDestination);

  /** The zoom setting to apply when jumping to the anchor. */
  get zoomSetting(): Read<M, GoToZoomOptions>;
  set zoomSetting(value: GoToZoomOptions);

  /** The file path (colon-delimited on macOS) of the document containing the anchor. */
  get filePath(): Read<M, string>;
  set filePath(value: string);

}
