/**
 * XMLAttribute.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { XMLElement } from './XMLElement';
import type { XMLTag } from './XMLTag';
import type { XMLElementLocation } from './Enums/XMLElementLocation';
import type { SelectionOptions } from './Enums/SelectionOptions';

/**
 * An attribute (`name="value"`) on an {@link XMLElement} in a document's
 * underlying XML structure.
 */
export interface XMLAttribute<M extends Mode = 'single'>
  extends EventTargetDOMObject<XMLElement, M>,
    IndexedDOMObject<XMLElement, M>,
    NamableDOMObject<XMLElement, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLAttribute';

  /** Resolves the proxy into the individual {@link XMLAttribute} objects it stands for. */
  getElements(): XMLAttribute<'single'>[];

  /** The value of the XML attribute. */
  get value(): Read<M, string>;
  set value(value: string);

  /** Deletes the XML attribute. */
  remove(): Read<M, void>;

  /**
   * Converts the attribute to a child element of its parent element.
   * @param located Where to insert the new element within its parent. Defaults to `XMLElementLocation.ELEMENT_START`.
   * @param markupTag The tag to apply to the new element.
   */
  convertToElement(located?: XMLElementLocation, markupTag?: XMLTag): Read<M, XMLElement>;

  /**
   * Selects the object.
   * @param existingSelection How this selection combines with the current one. Defaults to `SelectionOptions.REPLACE_WITH`.
   */
  select(existingSelection?: SelectionOptions): Read<M, void>;
}
