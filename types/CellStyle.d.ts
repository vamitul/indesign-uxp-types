/**
 * CellStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { CellStyleGroup } from './CellStyleGroup';
import type { CellStyleAttributes } from './_base/TableAttributes';
import type { StyleMoveReference } from './_base/Unions';
import type { LocationOptions } from './Enums/LocationOptions';
import type { Cell } from './Cell';
import type { CellStyles } from './CellStyles';
import type { FirstBaseline } from './Enums/FirstBaseline';
import type { NothingEnum } from './Enums/NothingEnum';
import type { ParagraphStyle } from './ParagraphStyle';

/**
 * A named cell style definition, held in a document's or the application's {@link CellStyles} collection (optionally nested inside a {@link CellStyleGroup}).
 *
 * Holds only the edge, inset, and fill attributes explicitly set on it, rather than
 * every attribute a live {@link Cell} carries. Reading an attribute that was never set
 * returns `NothingEnum.NOTHING` rather than a live default.
 */
export interface CellStyle<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document | Application | CellStyleGroup, M>,
    IndexedDOMObject<Document | Application | CellStyleGroup, M>,
    CellStyleAttributes<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'CellStyle';

  /** Resolves the proxy into the individual {@link CellStyle} objects it stands for. */
  getElements(): CellStyle<'single'>[];

  /** The unique ID of the cell style, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the cell style. */
  get name(): Read<M, string>;
  set name(value: string);

  /** The style this style is based on. Accepts a {@link CellStyle} or its name. */
  get basedOn(): Read<M, CellStyle | string>;
  set basedOn(value: CellStyle | string);

  /**
   * Deletes the style.
   * @param replacingWith The style applied to any cells currently tagged with this style. Cells are left unstyled if omitted.
   */
  remove(replacingWith?: CellStyle): Read<M, void>;

  /** Duplicates the cell style. */
  duplicate(): Read<M, CellStyle>;

  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): Read<M, CellStyle>;
}
