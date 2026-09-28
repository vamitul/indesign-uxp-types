/**
 * XMLTag.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { IndexedDOMObject, LabelableEventDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';
import type { UIColors } from './Enums/UIColors';
import type { XMLElement } from './XMLElement';

/**
 * A named markup tag applied to {@link XMLElement}s to identify their role in
 * a document's underlying XML structure.
 */
export interface XMLTag<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Application | Document, M>,
    IndexedDOMObject<Application | Document, M>,
    NamableDOMObject<Application | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLTag';

  /** Resolves the proxy into the individual {@link XMLTag} objects it stands for. */
  getElements(): XMLTag<'single'>[];

  /** The unique ID of the tag. */
  readonly id: Read<M, number>;

  /** The tag's identifying color, shown in the Tags panel and structure view. Assign either an `[R, G, B]` triple (each `0`–`255`) or a named {@link UIColors} value. */
  get tagColor(): Read<M, [number, number, number] | UIColors>;
  set tagColor(value: [number, number, number] | UIColors);

  /** Deletes the tag, substituting `replacingWith` on every element that carried it. */
  remove(replacingWith: XMLTag | string): Read<M, void>;
}
