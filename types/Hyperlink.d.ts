/**
 * Hyperlink.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { HyperlinkPageItemSource } from './HyperlinkPageItemSource';
import type { HyperlinkTextSource } from './HyperlinkTextSource';
import type { CrossReferenceSource } from './CrossReferenceSource';
import type { HyperlinkTextDestination } from './HyperlinkTextDestination';
import type { HyperlinkPageDestination } from './HyperlinkPageDestination';
import type { HyperlinkExternalPageDestination } from './HyperlinkExternalPageDestination';
import type { HyperlinkURLDestination } from './HyperlinkURLDestination';
import type { ParagraphDestination } from './ParagraphDestination';
import type { HyperlinkAppearanceHighlight } from './Enums/HyperlinkAppearanceHighlight';
import type { HyperlinkAppearanceWidth } from './Enums/HyperlinkAppearanceWidth';
import type { HyperlinkAppearanceStyle } from './Enums/HyperlinkAppearanceStyle';
import type { UIColors } from './Enums/UIColors';

/**
 * A clickable hyperlink connecting a {@link HyperlinkPageItemSource}, {@link HyperlinkTextSource}, or {@link CrossReferenceSource} to a destination such as a page,
 * URL, or text range.
 *
 * Its appearance ({@link highlight}, {@link width}, {@link borderColor}, {@link borderStyle}) only matters for interactive PDF export.
 */
export interface Hyperlink<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Hyperlink';

  /** Resolves the proxy into the individual {@link Hyperlink} objects it stands for. */
  getElements(): Hyperlink<'single'>[];

  /** The unique ID of the hyperlink, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** Whether the hyperlink is hidden. */
  readonly hidden: Read<M, boolean>;

  /** The hyperlinked text or page item that acts as the clickable source. */
  get source(): Read<M, HyperlinkPageItemSource | HyperlinkTextSource | CrossReferenceSource>;
  set source(value: HyperlinkPageItemSource | HyperlinkTextSource | CrossReferenceSource);

  /** The text, page, URL, or cross-reference target that the hyperlink points to. */
  get destination(): Read<
    M,
    | HyperlinkTextDestination
    | HyperlinkPageDestination
    | HyperlinkExternalPageDestination
    | HyperlinkURLDestination
    | ParagraphDestination
  >;
  set destination(
    value:
      | HyperlinkTextDestination
      | HyperlinkPageDestination
      | HyperlinkExternalPageDestination
      | HyperlinkURLDestination
      | ParagraphDestination,
  );

  /** Whether the hyperlink is visible when exported. */
  get visible(): Read<M, boolean>;
  set visible(value: boolean);

  /** The highlight style applied around the hyperlink source in interactive PDF export. */
  get highlight(): Read<M, HyperlinkAppearanceHighlight>;
  set highlight(value: HyperlinkAppearanceHighlight);

  /** The stroke weight of the hyperlink border in interactive PDF export. */
  get width(): Read<M, HyperlinkAppearanceWidth>;
  set width(value: HyperlinkAppearanceWidth);

  /**
   * The hyperlink border color, either an `[R, G, B]` triple (each `0`–`255`)
   * or a named {@link UIColors} value.
   */
  get borderColor(): Read<M, [number, number, number] | UIColors>;
  set borderColor(value: [number, number, number] | UIColors);

  /** The dash pattern of the hyperlink border in interactive PDF export. */
  get borderStyle(): Read<M, HyperlinkAppearanceStyle>;
  set borderStyle(value: HyperlinkAppearanceStyle);

  /** The epub ARIA role, as recommended by IDPF. */
  get epubAriaRole(): Read<M, string>;
  set epubAriaRole(value: string);

  /** The hyperlink's alt text. */
  get hypherlinkAltText(): Read<M, string>;
  set hypherlinkAltText(value: string);

  /** Deletes the hyperlink. */
  remove(): Read<M, void>;

  /** Jumps to the hyperlink source. */
  showSource(): Read<M, void>;

  /** Jumps to the hyperlink destination. */
  showDestination(): Read<M, void>;
}
