/**
 * GraphicLines.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type {
  AddablePageItemCollection,
  NamedCollection,
  IdCollection,
  BaseCollection,
} from './_base/Collections';
import type { GraphicLine } from './GraphicLine';
import type { PageItemParent } from './_base/Parents';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Layer } from './Layer';

/**
 * A collection of {@link GraphicLine} page items. Graphic lines are open paths
 * that can be used for borders, rules, or other decorative elements within
 * a layout.
 *
 * @collection GraphicLine
 */
export interface GraphicLines<TParent = PageItemParent>
  extends
    BaseCollection<GraphicLine<TParent>, GraphicLine, GraphicLine<TParent, 'plural'>>,
    IdCollection<GraphicLine<TParent>>,
    NamedCollection<GraphicLine<TParent>>,
    AddablePageItemCollection<GraphicLine<TParent>, GraphicLine> {
  /** The object's DOM class name. */
  readonly constructorName: 'GraphicLines';
}
