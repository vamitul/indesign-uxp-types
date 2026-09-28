/**
 * CellStyleMapping.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { StyleMappingParent } from './_base/Parents';
import type { MapType } from './Enums/MapType';

/**
 * A rule mapping a cell style name in imported content to a cell style in this
 * document, applied when placing a Microsoft Excel spreadsheet.
 */
export interface CellStyleMapping<M extends Mode = 'single'>
  extends EventTargetDOMObject<StyleMappingParent, M>,
    IndexedDOMObject<StyleMappingParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'CellStyleMapping';

  /** Resolves the proxy into the individual {@link CellStyleMapping} objects it stands for. */
  getElements(): CellStyleMapping<'single'>[];

  /** The name of the source style being mapped from. */
  get sourceStyleName(): Read<M, string>;
  set sourceStyleName(value: string);

  /** The name of the destination style being mapped to. */
  get destinationStyleName(): Read<M, string>;
  set destinationStyleName(value: string);

  /** How the source and destination names are matched (style-to-style, group-to-group, or crossed). */
  get mappingRuleType(): Read<M, MapType>;
  set mappingRuleType(value: MapType);

  /** Deletes the style mapping. */
  remove(): Read<M, void>;
}
