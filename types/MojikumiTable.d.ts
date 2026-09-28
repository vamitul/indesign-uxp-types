/**
 * MojikumiTable.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type {
  LabelableEventDOMObject,
  IndexedDOMObject,
  NamableDOMObject,
} from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { MojikumiTableDefaults } from './Enums/MojikumiTableDefaults';

/** A single aki (inter-glyph spacing) override row in {@link MojikumiTable.overrideMojikumiAkiList}. */
export type MojikumiAkiOverride = [
  targetMojikumiClass: number,
  sideMojikumiClass: number,
  sideIsAfterTarget: boolean,
  minimum: number,
  desired: number,
  maximum: number,
  compressionPriority: number,
  akiDoesNotFloat: boolean,
];

/**
 * A named mojikumi (Japanese glyph-spacing) table.
 */
export interface MojikumiTable<M extends Mode = 'single'>
  extends LabelableEventDOMObject<DocumentOrApplication, M>,
    IndexedDOMObject<DocumentOrApplication, M>,
    NamableDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'MojikumiTable';

  /** Resolves the proxy into the individual {@link MojikumiTable} objects it stands for. */
  getElements(): MojikumiTable<'single'>[];

  /** The unique ID of the MojikumiTable. */
  readonly id: Read<M, number>;

  /** The built-in mojikumi set this table is based on. */
  get basedOnMojikumiSet(): Read<M, MojikumiTableDefaults>;
  set basedOnMojikumiSet(value: MojikumiTableDefaults);

  /** The aki (spacing) overrides applied on top of {@link basedOnMojikumiSet}. */
  get overrideMojikumiAkiList(): Read<M, MojikumiAkiOverride[]>;
  set overrideMojikumiAkiList(value: MojikumiAkiOverride[]);

  /** Deletes the MojikumiTable. */
  remove(): Read<M, void>;
}
