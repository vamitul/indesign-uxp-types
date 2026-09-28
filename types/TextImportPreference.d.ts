/**
 * TextImportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { ImportPlatform } from './Enums/ImportPlatform';
import type { TextImportCharacterSet } from './Enums/TextImportCharacterSet';

/**
 * Formatting and encoding options applied when importing a plain-text file into a document.
 */
export interface TextImportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'TextImportPreference';

  /** Resolves the proxy into the individual {@link TextImportPreference} objects it stands for. */
  getElements(): TextImportPreference<'single'>[];

  /** The computer language character set used to create the text file. */
  get characterSet(): Read<M, TextImportCharacterSet>;
  set characterSet(value: TextImportCharacterSet);

  /** The platform used to create the imported text file. */
  get platform(): Read<M, ImportPlatform>;
  set platform(value: ImportPlatform);

  /** The dictionary to use for the imported text. */
  get dictionary(): Read<M, string>;
  set dictionary(value: string);

  /** If true, the import filter removes extra carriage returns at the ends of lines. */
  get stripReturnsBetweenLines(): Read<M, boolean>;
  set stripReturnsBetweenLines(value: boolean);

  /** If true, the import filter removes extra carriage returns between paragraphs. */
  get stripReturnsBetweenParagraphs(): Read<M, boolean>;
  set stripReturnsBetweenParagraphs(value: boolean);

  /** If true, converts runs of {@link spacesIntoTabsCount} spaces into a tab character. */
  get convertSpacesIntoTabs(): Read<M, boolean>;
  set convertSpacesIntoTabs(value: boolean);

  /** The number of spaces {@link convertSpacesIntoTabs} converts into a tab. Ignored when that's `false`. */
  get spacesIntoTabsCount(): Read<M, number>;
  set spacesIntoTabsCount(value: number);

  /** If true, convert straight quotes and apostrophes in the imported text to typographic quotation marks and apostrophes. */
  get useTypographersQuotes(): Read<M, boolean>;
  set useTypographersQuotes(value: boolean);
}
