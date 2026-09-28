/**
 * TableStyle.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { LabelableEventDOMObject, IndexedDOMObject } from './_base/DomObjects';
import type { Document } from './Document';
import type { Application } from './Application';
import type { TableStyleGroup } from './TableStyleGroup';
import type { TableStyleAttributes } from './_base/TableAttributes';
import type { StyleMoveReference } from './_base/Unions';
import type { LocationOptions } from './Enums/LocationOptions';
import type { CellStyle } from './CellStyle';
import type { Table } from './Table';
import type { TableStyles } from './TableStyles';
import type { TableCaptionPositionOptions } from './Enums/TableCaptionPositionOptions';

/**
 * A named table style definition, held in a document's or the application's {@link TableStyles} collection (optionally nested inside a {@link TableStyleGroup}).
 *
 * Stores the same border, inset and alternating-fill attributes a live {@link Table} carries,
 * but as a reusable named definition rather than formatting applied to one table.
 */
export interface TableStyle<M extends Mode = 'single'>
  extends LabelableEventDOMObject<Document | Application | TableStyleGroup, M>,
    IndexedDOMObject<Document | Application | TableStyleGroup, M>,
    TableStyleAttributes<M>{
  /** The object's DOM class name. */
  readonly constructorName: 'TableStyle';

  /** Resolves the proxy into the individual {@link TableStyle} objects it stands for. */
  getElements(): TableStyle<'single'>[];

  // ---- Caption and header columns --------------------------------------------
  // Absent from the InDesign 2026 object-model dictionary; modelled from the
  // live UXP runtime. Reading either on a style that does not define it throws
  // `This attribute is not defined for table styles`.

  /** How many paragraphs of the caption story the style formats. */
  get captionParagraphCount(): Read<M, number>;
  set captionParagraphCount(value: number);

  /** The {@link CellStyle} applied to cells in the header column region. */
  get headerColumnCellStyle(): Read<M, CellStyle>;
  set headerColumnCellStyle(value: CellStyle | string);

  /** The unique ID of the table style, stable across saves and reopens. */
  readonly id: Read<M, number>;

  /** The name of the table style. */
  get name(): Read<M, string>;
  set name(value: string);

  /** The style this style is based on. Accepts a {@link TableStyle} or its name. */
  get basedOn(): Read<M, TableStyle | string>;
  set basedOn(value: TableStyle | string);

  /**
   * Deletes the style.
   * @param replacingWith The style applied to any tables currently tagged with this style. Tables are left unstyled if omitted.
   */
  remove(replacingWith?: TableStyle): Read<M, void>;

  /** Duplicates the table style. */
  duplicate(): Read<M, TableStyle>;

  /**
   * Moves the style to a new position among its siblings.
   * @param reference The style, group, or root relative to which the style is moved. Required when `to` is {@link LocationOptions.BEFORE} or {@link LocationOptions.AFTER}.
   */
  move(to: LocationOptions, reference?: StyleMoveReference): Read<M, TableStyle>;
}
