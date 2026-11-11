/**
 * Mixins.d.ts — indesign-uxp-types
 * Adobe InDesign 2027 (22.x) UXP scripting DOM declarations.
 * Version: 2.0.0 · Updated: 2026-11-11
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
export type {
  TextGraphicAttributes,
  CharacterFormatAttributes,
  ParagraphFormatAttributes,
  CharacterStyleAttributes,
  ParagraphStyleAttributes,
} from './TextAttributes';

export type {
  TableGeometry,
  TableCellAttributes,
  CellStyleAttributes,
  TableFormatAttributes,
  TableStyleAttributes,
} from './TableAttributes';

export type { GraphicAttributes, GraphicAttributesBase } from './GraphicAttributes';
export type {
  PageItemContainer,
  PageItemHolder,
  DeepPageItemHolder,
  ShapeContainer,
  FormFieldContainer,
  EndnoteFrameContainer,
  FlexObjectContainer,
  PlacedGraphicContainer,
  FormatGraphicContainer,
  PathContainer,
  TransformableItem,
  TransformOrigin,
  TransformMatrixValue,
  MatrixContentValue,
  BoundsSpecifier,
} from './PageItemMixins';
export type { TextContainerContent, TextEmbeddedContent, TextRangeContent } from './TextContent';
export type { StyleGroupContainer } from './StyleGroups';
