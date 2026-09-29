/**
 * StyleExportTagMap.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { CharacterStyle } from './CharacterStyle';
import type { ParagraphStyle } from './ParagraphStyle';

/**
 * A mapping from an export format (e.g. EPUB, HTML) to a tag name and CSS
 * class/attributes, owned by a {@link CharacterStyle} or {@link ParagraphStyle}
 * and consulted when exporting styled text.
 */
export interface StyleExportTagMap<M extends Mode = 'single'>
  extends EventTargetDOMObject<CharacterStyle | ParagraphStyle, M>,
    IndexedDOMObject<CharacterStyle | ParagraphStyle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'StyleExportTagMap';

  /** Resolves the proxy into the individual {@link StyleExportTagMap} objects it stands for. */
  getElements(): StyleExportTagMap<'single'>[];

  /** The export format this mapping applies to. */
  readonly exportType: Read<M, string>;

  /** The tag name to emit for content in the owning style. */
  get exportTag(): Read<M, string>;
  set exportTag(value: string);

  /** The CSS class name to emit for content in the owning style. */
  get exportClass(): Read<M, string>;
  set exportClass(value: string);

  /** The additional CSS attributes to emit for content in the owning style. */
  get exportAttributes(): Read<M, string>;
  set exportAttributes(value: string);

  /** Deletes the mapping. */
  remove(): Read<M, void>;
}
