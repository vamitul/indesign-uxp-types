/**
 * WordRTFImportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { ConvertPageBreaks } from './Enums/ConvertPageBreaks';
import type { ConvertTablesOptions } from './Enums/ConvertTablesOptions';
import type { ResolveStyleClash } from './Enums/ResolveStyleClash';

/**
 * Word RTF import preferences.
 */
export interface WordRTFImportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'WordRTFImportPreference';

  /** Resolves the proxy into the individual {@link WordRTFImportPreference} objects it stands for. */
  getElements(): WordRTFImportPreference<'single'>[];

  /** If true, imports endnotes as static text rather than live, editable endnotes. */
  get importAsStaticEndnotes(): Read<M, boolean>;
  set importAsStaticEndnotes(value: boolean);

  /** If true, maintains character formatting in text whose formatting has been removed. Applies only when {@link removeFormatting} is `true`. */
  get preserveLocalOverrides(): Read<M, boolean>;
  set preserveLocalOverrides(value: boolean);

  /** If true, imports unused styles. */
  get importUnusedStyles(): Read<M, boolean>;
  set importUnusedStyles(value: boolean);

  /** The option for handling style name conflicts. */
  get resolveCharacterStyleClash(): Read<M, ResolveStyleClash>;
  set resolveCharacterStyleClash(value: ResolveStyleClash);

  /** The option for resolving conflicts that arise when paragraph styles have matching names. */
  get resolveParagraphStyleClash(): Read<M, ResolveStyleClash>;
  set resolveParagraphStyleClash(value: ResolveStyleClash);

  /** If true, preserves inline graphics. */
  get preserveGraphics(): Read<M, boolean>;
  set preserveGraphics(value: boolean);

  /** If true, preserves comments and edits in the imported file. */
  get preserveTrackChanges(): Read<M, boolean>;
  set preserveTrackChanges(value: boolean);

  /** If true, imports footnotes. */
  get importFootnotes(): Read<M, boolean>;
  set importFootnotes(value: boolean);

  /** If true, imports endnotes. */
  get importEndnotes(): Read<M, boolean>;
  set importEndnotes(value: boolean);

  /** If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes. */
  get useTypographersQuotes(): Read<M, boolean>;
  set useTypographersQuotes(value: boolean);

  /** The option for handling manual page breaks. */
  get convertPageBreaks(): Read<M, ConvertPageBreaks>;
  set convertPageBreaks(value: ConvertPageBreaks);

  /** If true, imports the index. */
  get importIndex(): Read<M, boolean>;
  set importIndex(value: boolean);

  /** If true, imports the table of contents. */
  get importTOC(): Read<M, boolean>;
  set importTOC(value: boolean);

  /** If true, removes text and table formatting. */
  get removeFormatting(): Read<M, boolean>;
  set removeFormatting(value: boolean);

  /** The policy for converting tables whose formatting has been removed. Applies only when {@link removeFormatting} is `true`. */
  get convertTablesTo(): Read<M, ConvertTablesOptions>;
  set convertTablesTo(value: ConvertTablesOptions);

  /** If true, bullets and numbers will be converted to embedded characters during import. If false, bullets and numbers will be rendered by InDesign. */
  get convertBulletsAndNumbersToText(): Read<M, boolean>;
  set convertBulletsAndNumbersToText(value: boolean);
}
