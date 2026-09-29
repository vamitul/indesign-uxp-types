/**
 * XMLItem.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { XMLElement } from './XMLElement';
import type { SelectionOptions } from './Enums/SelectionOptions';
import type { DTD } from './DTD';
import type { XMLComment } from './XMLComment';
import type { XMLInstruction } from './XMLInstruction';

/**
 * The base of the XML item family — {@link XMLElement}, {@link XMLComment},
 * {@link XMLInstruction}, and {@link DTD} all extend this. Represents any node
 * in a document's underlying XML structure.
 */
export interface XMLItem<M extends Mode = 'single'>
  extends EventTargetDOMObject<Document | XMLElement, M>,
    IndexedDOMObject<Document | XMLElement, M> {
  /** The object's DOM class name — reports the specific kind, such as `'XMLElement'` when the item is actually an {@link XMLElement}. */
  readonly constructorName: 'XMLItem' | 'XMLComment' | 'XMLElement' | 'XMLInstruction';

  /** Resolves the proxy into the individual {@link XMLItem} objects it stands for. */
  getElements(): XMLItem<'single'>[];

  /** The unique ID of the XMLItem. */
  readonly id: Read<M, number>;

  /** Deletes the XMLItem. */
  remove(): Read<M, void>;

  /** Duplicates the XMLItem. */
  duplicate(): Read<M, XMLItem>;

  /**
   * Selects the object.
   * @param existingSelection How this selection combines with the current one. Defaults to {@link SelectionOptions.REPLACE_WITH}.
   */
  select(existingSelection?: SelectionOptions): Read<M, void>;
}

/**
 * A structure node InDesign reports as a plain {@link XMLItem} rather than as an element,
 * comment or processing instruction.
 *
 * Handle it in the `'XMLItem'` case of a `constructorName` check. Only the members every
 * structure node has are available on it.
 */
export interface PlainXMLItem<M extends Mode = 'single'> extends XMLItem<M> {
  /** Always `'XMLItem'` — this is the generic case, by construction. */
  readonly constructorName: 'XMLItem';
}
