/**
 * CrossReferenceFormat.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject, NamableDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { BuildingBlocks } from './BuildingBlocks';
import type { CharacterStyle } from './CharacterStyle';
import type { BuildingBlock } from './BuildingBlock';
import type { CrossReferenceSource } from './CrossReferenceSource';

/**
 * A named format that assembles {@link BuildingBlock} components — page
 * number, paragraph text, custom strings, and so on — into the text a
 * {@link CrossReferenceSource} displays for its destination.
 *
 * For example, "See page 12" or "See [Paragraph Text] on page 12".
 */
export interface CrossReferenceFormat<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document, M>,
    IndexedDOMObject<Document, M>,
    NamableDOMObject<Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'CrossReferenceFormat';

  /** Resolves the proxy into the individual {@link CrossReferenceFormat} objects it stands for. */
  getElements(): CrossReferenceFormat<'single'>[];

  /** The unique ID of the format, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The building blocks that make up this cross-reference format, in display order. */
  readonly buildingBlocks: BuildingBlocks;

  /** The character style applied to text formatted with this cross-reference format. Accepts a {@link CharacterStyle} or its name. */
  get appliedCharacterStyle(): Read<M, CharacterStyle>;
  set appliedCharacterStyle(value: CharacterStyle | string);

  /** Deletes the cross-reference format. */
  remove(): Read<M, void>;
}
