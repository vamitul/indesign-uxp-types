/**
 * HyperlinkURLDestination.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Hyperlink } from './Hyperlink';

/**
 * A {@link Hyperlink} destination that points to an external web URL.
 */
export interface HyperlinkURLDestination<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'HyperlinkURLDestination';

  /** Resolves the proxy into the individual {@link HyperlinkURLDestination} objects it stands for. */
  getElements(): HyperlinkURLDestination<'single'>[];

  /** The unique ID of the destination, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** Whether the hyperlink is hidden. */
  readonly hidden: Read<M, boolean>;

  /** The URL the hyperlink points to, e.g. `'https://www.adobe.com'`. */
  get destinationURL(): Read<M, string>;
  set destinationURL(value: string);

  /** Deletes the destination. */
  remove(): Read<M, void>;

  /** Jumps to the hyperlink destination. */
  showDestination(): Read<M, void>;
}
