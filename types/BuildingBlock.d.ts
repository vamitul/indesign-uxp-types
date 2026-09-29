/**
 * BuildingBlock.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { CrossReferenceFormat } from './CrossReferenceFormat';
import type { CharacterStyle } from './CharacterStyle';
import type { BuildingBlockTypes } from './Enums/BuildingBlockTypes';
import type { BuildingBlocks } from './BuildingBlocks';

/**
 * A single structural component — page number, paragraph text, chapter
 * number, custom string, and so on — within a {@link CrossReferenceFormat}'s
 * {@link BuildingBlocks} collection.
 */
export interface BuildingBlock<M extends Mode = 'single'>
  extends EventTargetDOMObject<CrossReferenceFormat, M>,
    IndexedDOMObject<CrossReferenceFormat, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'BuildingBlock';

  /** Resolves the proxy into the individual {@link BuildingBlock} objects it stands for. */
  getElements(): BuildingBlock<'single'>[];

  /** The type of content this building block generates. */
  get blockType(): Read<M, BuildingBlockTypes>;
  set blockType(value: BuildingBlockTypes);

  /** The character style applied to this building block's generated text. Accepts a {@link CharacterStyle} or its name. */
  get appliedCharacterStyle(): Read<M, CharacterStyle>;
  set appliedCharacterStyle(value: CharacterStyle | string);

  /**
   * Custom string content. Only used when {@link blockType} is
   * `CUSTOM_STRING_BUILDING_BLOCK`; ignored otherwise.
   */
  get customText(): Read<M, string>;
  set customText(value: string);

  /**
   * The delimiter character appended after this building block. Only used
   * for paragraph-text and full-paragraph building blocks; ignored
   * otherwise.
   */
  get appliedDelimiter(): Read<M, string>;
  set appliedDelimiter(value: string);

  /**
   * If `true`, the generated source text includes {@link appliedDelimiter}.
   * Ignored if no delimiter is specified.
   */
  get includeDelimiter(): Read<M, boolean>;
  set includeDelimiter(value: boolean);

  /** Deletes the building block. */
  remove(): Read<M, void>;
}
