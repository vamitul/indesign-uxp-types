/**
 * XMLImportPreference.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { DocumentOrApplication } from './_base/Parents';
import type { FilePath, File } from './_base/Types';
import type { XMLImportStyles } from './Enums/XMLImportStyles';
import type { XMLTransformFile } from './Enums/XMLTransformFile';

/**
 * Settings controlling how an XML file's structure and content map onto the
 * document during import — merge behavior, table handling, and optional XSLT
 * transformation.
 */
export interface XMLImportPreference<M extends Mode = 'single'> extends EventTargetDOMObject<DocumentOrApplication, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'XMLImportPreference';

  /** Resolves the proxy into the individual {@link XMLImportPreference} objects it stands for. */
  getElements(): XMLImportPreference<'single'>[];

  /** If true, creates a link to the imported XML file. If false, embeds the file. */
  get createLinkToXML(): Read<M, boolean>;
  set createLinkToXML(value: boolean);

  /** If true, repeating text elements inherit the formatting applied to placeholder text. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get repeatTextElements(): Read<M, boolean>;
  set repeatTextElements(value: boolean);

  /** If true, ignores elements that do not match the existing structure. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get ignoreUnmatchedIncoming(): Read<M, boolean>;
  set ignoreUnmatchedIncoming(value: boolean);

  /** If true, imports text into tables if tags match placeholder tables and their cells. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get importTextIntoTables(): Read<M, boolean>;
  set importTextIntoTables(value: boolean);

  /** If true, leaves existing content in place if the matching XML content contains only whitespace characters such as a carriage return or a tab character. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get ignoreWhitespace(): Read<M, boolean>;
  set ignoreWhitespace(value: boolean);

  /** If true, deletes existing elements or placeholders in the document that do not have matches in the XML file. Valid only when {@link importStyle} is {@link XMLImportStyles.MERGE_IMPORT}. */
  get removeUnmatchedExisting(): Read<M, boolean>;
  set removeUnmatchedExisting(value: boolean);

  /** If true, imports into the selected XML element. If false, imports at the root element. */
  get importToSelected(): Read<M, boolean>;
  set importToSelected(value: boolean);

  /** Whether imported XML content is appended or merged into the existing structure. See {@link XMLImportStyles}. */
  get importStyle(): Read<M, XMLImportStyles>;
  set importStyle(value: XMLImportStyles);

  /** If true, transforms the XML using an XSLT file. */
  get allowTransform(): Read<M, boolean>;
  set allowTransform(value: boolean);

  /** The name of the XSLT file. Note: Valid when allow transform is true. */
  get transformFilename(): Read<M, Promise<File> | XMLTransformFile>;
  set transformFilename(value: FilePath | XMLTransformFile);

  /** Stylesheet parameters as a list of name/value pairs in the format [[name, value], [name, value],...]. */
  get transformParameters(): Read<M, [name: string, value: string][]>;
  set transformParameters(value: [name: string, value: string][]);

  /** If true, imports CALS tables as InDesign tables. */
  get importCALSTables(): Read<M, boolean>;
  set importCALSTables(value: boolean);
}
