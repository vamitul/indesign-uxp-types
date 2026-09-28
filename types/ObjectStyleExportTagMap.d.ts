/**
 * ObjectStyleExportTagMap.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { ObjectStyle } from './ObjectStyle';

/**
 * A mapping from an export format (e.g. EPUB, HTML) to a tag name and CSS
 * class/attributes, owned by an {@link ObjectStyle} and consulted when
 * exporting styled frames.
 */
export interface ObjectStyleExportTagMap<M extends Mode = 'single'>
  extends EventTargetDOMObject<ObjectStyle, M>,
    IndexedDOMObject<ObjectStyle, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ObjectStyleExportTagMap';

  /** Resolves the proxy into the individual {@link ObjectStyleExportTagMap} objects it stands for. */
  getElements(): ObjectStyleExportTagMap<'single'>[];

  /** The export format this mapping applies to. */
  readonly exportType: Read<M, string>;

  /** The tag name to emit for frames in the owning object style. */
  get exportTag(): Read<M, string>;
  set exportTag(value: string);

  /** The CSS class name to emit for frames in the owning object style. */
  get exportClass(): Read<M, string>;
  set exportClass(value: string);

  /** The additional CSS attributes to emit for frames in the owning object style. */
  get exportAttributes(): Read<M, string>;
  set exportAttributes(value: string);

  /** Deletes the mapping. */
  remove(): Read<M, void>;
}
