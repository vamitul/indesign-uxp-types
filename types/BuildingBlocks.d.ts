/**
 * BuildingBlocks.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { PropertiesSetter } from './_base/Properties';
import type { CharacterStyle } from './CharacterStyle';
import type { BuildingBlockTypes } from './Enums/BuildingBlockTypes';
import type { BaseCollection } from './_base/Collections';
import type { BuildingBlock } from './BuildingBlock';
import type { CrossReferenceFormat } from './CrossReferenceFormat';

/**
 * A collection of {@link BuildingBlock} objects within a {@link CrossReferenceFormat}.
 *
 * Building blocks define the individual structural components—such as "Page Number,"
 * "Paragraph Text," or "Chapter Number"—that constitute the formatted cross-reference.
 * @collection BuildingBlock
 */
export interface BuildingBlocks extends BaseCollection<BuildingBlock, BuildingBlock, BuildingBlock<'plural'>> {
  /**
   * Creates a new building block from a properties bag alone.
   * @param withProperties Initial values for properties of the new {@link BuildingBlock}. Must include `blockType`.
   */
  add(withProperties: PropertiesSetter<BuildingBlock>): BuildingBlock;

  /** The object's DOM class name. */
  readonly constructorName: 'BuildingBlocks';

  /**
   * Creates a new cross-reference building block.
   *
   * @param blockType The type of building block to add.
   * @param appliedCharacterStyle The {@link CharacterStyle} to apply to this specific building block component.
   * @param customText Custom string content. Required when `blockType` is `CUSTOM_STRING_BUILDING_BLOCK`; ignored otherwise.
   * @param withProperties Initial values for properties of the new BuildingBlock.
   */
  add(
    blockType: BuildingBlockTypes,
    appliedCharacterStyle?: CharacterStyle,
    customText?: string,
    withProperties?: PropertiesSetter<BuildingBlock>,
  ): BuildingBlock;
}
