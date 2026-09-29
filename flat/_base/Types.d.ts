/**
 * Types.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { storage } from 'uxp';
import type { InsertionPoint } from '../InsertionPoint';
/**
 * A file to pass to InDesign: a native path string, or a UXP {@link File} entry.
 *
 * Setters and method parameters take either — `app.open(entry)`, `app.open([a, b])`,
 * `rect.exportFile(format, entry)` — and the entry need not exist on disk yet. A
 * `file://` URL string is rejected: pass `entry.nativePath`, or the entry itself.
 *
 * Reading a file-valued property back gives a `Promise<`{@link File}`>` instead —
 * `await` it, then read `nativePath`.
 */
export type FilePath = string | File;

/**
 * A folder to pass to InDesign: a native path string only.
 *
 * Unlike a file, a folder cannot be passed as a UXP {@link Folder} entry — InDesign
 * rejects it as "received nothing". Pass `folder.nativePath`.
 *
 * Reading a folder-valued property back gives a `Promise<`{@link Folder}`>` instead —
 * `await` it, then read `nativePath`.
 */
export type FolderPath = string;

/**
 * A filesystem object handed back by the DOM: a UXP storage entry, not a path
 * string. Read `nativePath` for the platform path.
 */
export type Entry = storage.Entry;

/**
 * A file on disk, as handed back by a path getter such as `Document.fullName`.
 */
export type File = storage.File & storage.Entry;

/** A folder on disk, as handed back by a path getter such as `Document.filePath`. */
export type Folder = storage.Folder;

/* --------------------------------------------------------------------------
   Measured fallback. Superseded by the `uxp` types above, kept because these
   were built from observed prototypes rather than generated, and upstream is
   auto-generated with acknowledged gaps (`File` not extending `Entry` is one).
   If the dependency is unavailable, or upstream regresses, re-point `Entry` /
   `File` / `Folder` at these three and the package still compiles.
   -------------------------------------------------------------------------- */

/**
 * The shape a UXP storage entry actually has at runtime — the fallback used when the `uxp`
 * package's own types are not installed. Refer to {@link Entry} in your own code.
 */
export interface MeasuredEntry {
  /** Whether this entry is a file rather than a folder. */
  readonly isFile: boolean;
  /** Whether this entry is a folder rather than a file. */
  readonly isFolder: boolean;
  /** Entries produced by the DOM report the full path here, not just the leaf. */
  readonly name: string;
  /** The platform path — the member to read when a path getter is what you wanted. */
  readonly nativePath: string;
  /** The same location as a `file://` URL. */
  readonly url: string;
}
/**
 * The shape a UXP file actually has at runtime — the fallback used when the `uxp` package's
 * own types are not installed. Refer to {@link File} in your own code.
 */
export interface MeasuredFile {
  /** Entries produced by the DOM report the full path here, not just the leaf. */
  readonly name: string;
  /** The platform path — the member to read when a path getter is what you wanted. */
  readonly nativePath: string;
  /** The same location as a `file://` URL. */
  readonly url: string;
  readonly isFile: true;
  readonly isFolder: false;
  /** The mode the file was opened in. Typed loosely: the runtime value is not the `modes` constant. */
  readonly mode: unknown;
  /** Reads the whole file. Resolves to text, or to an `ArrayBuffer` when opened as binary. */
  read(options?: object): Promise<string | ArrayBuffer>;
  /** Overwrites the file. Resolves to the number of bytes written. */
  write(data: string | ArrayBuffer, options?: object): Promise<number>;
}

/**
 * The shape a UXP folder actually has at runtime — the fallback used when the `uxp` package's
 * own types are not installed. Refer to {@link Folder} in your own code.
 */
export interface MeasuredFolder {
  /** Entries produced by the DOM report the full path here, not just the leaf. */
  readonly name: string;
  /** The platform path — the member to read when a path getter is what you wanted. */
  readonly nativePath: string;
  /** The same location as a `file://` URL. */
  readonly url: string;
  readonly isFile: false;
  readonly isFolder: true;
  /** Everything directly inside this folder, files and folders alike. */
  getEntries(): Promise<MeasuredEntry[]>;
  /** One entry by name or relative path. Rejects when nothing is there. */
  getEntry(path: string): Promise<MeasuredEntry>;
  /** Creates a file or folder here. Pass `{ type: 'folder' }` for a folder. */
  createEntry(name: string, options?: object): Promise<MeasuredEntry>;
  /** Creates a file here. */
  createFile(name: string, options?: object): Promise<MeasuredFile>;
  /** Creates a subfolder here. */
  createFolder(name: string): Promise<MeasuredFolder>;
  /** Renames an entry in this folder. */
  renameEntry(entry: MeasuredEntry, newName: string, options?: object): Promise<void>;
}


/**
 * The pair-kerning method applied to text.
 *
 * `'Metrics'` uses the font's own kerning pairs, `'Optical'` lets InDesign judge the spacing
 * from the glyph shapes, and `'None'` disables kerning. A plugin may register further methods,
 * so any other string is accepted.
 */
export type KerningMethodName = 'Metrics' | 'Optical' | 'None' | (string & {});

/**
 * What {@link KerningMethodName} can read back, which is one value wider.
 *
 * An {@link InsertionPoint} whose `kerningValue` has been set by hand reports `'Manual'` —
 * and only an insertion point does, never the enclosing character, word or paragraph.
 *
 * **Do not assign `'Manual'`** — InDesign throws, even on a point that is already hand-kerned.
 * Set the insertion point's `kerningValue` instead and the state follows.
 */
export type KerningMethodValue = KerningMethodName | 'Manual';

/**
 * The composer that lays out a paragraph — the engine deciding line breaks and justification.
 *
 * **The spelling is exact and case-sensitive.** `'Adobe Single-line Composer'` is accepted and
 * `'Adobe Single-Line Composer'` is not; `'World-Ready'` must be hyphenated. A rejected name
 * throws `Invalid value for set property 'composer'` and leaves the paragraph unchanged.
 *
 * A plugin, or a CJK or Middle-Eastern install, may register further composers, so any other
 * string is accepted.
 */
export type ComposerName =
  | 'Adobe Paragraph Composer'
  | 'Adobe Single-line Composer'
  | 'Adobe World-Ready Paragraph Composer'
  | 'Adobe World-Ready Single-line Composer'
  | 'Adobe Japanese Paragraph Composer'
  | 'Adobe Japanese Single-line Composer'
  | (string & {});

/**
 * Represents a measurement value.
 * Can be a number (defaulting to the document's current units)
 * or a string specifying the unit (e.g., '12pt', '1in', '10mm').
 */
export type MeasurementValue = number | string;

/**
 * Represents coordinate arrays, bounds, or geometric bounds.
 * Formatted as [y1, x1, y2, x2].
 */
export type BoundsArray = [
  MeasurementValue,
  MeasurementValue,
  MeasurementValue,
  MeasurementValue,
];

/**
 * Whether a DOM object is a single resolved object or a plural proxy standing
 * in for many of them.
 */
export type Mode = 'single' | 'plural';

/**
 * What a member reads back as: the value itself on a single object, one value
 * per item on a plural proxy.
 */
export type Read<M extends Mode, V> = M extends 'plural' ? V[] : V;

/**
 * The retired plural-proxy shape. Nothing uses it; prefer the mode-parameterised
 * element type, as every collection in the package does.
 *
 * @deprecated Retired 2026-09-18 and referenced by nothing. Kept only so an
 * external consumer importing it does not break; it will go at 1.0.
 *
 * This was `BaseCollection`'s default `TPlural`. It derived both accessors from
 * `T[K]`, the *getter* type, so a plural proxy built from it would have lost every
 * widened setter, array-ified `isValid` and `constructorName` against [[R15]], and
 * flattened method overload sets. None of that ever shipped: all 242 collections
 * pass an explicit `TPlural` bound to the mode-parameterised element
 * (`RectanglePlural<TParent>`), which is the correct construction.
 *
 * Six external reviewers independently read this default as live and reported it
 * as a high-severity break. It was not live — but a collection that forgot
 * `TPlural` would have got exactly the shape they described, so the default is now
 * `never` and the parameter is effectively required.
 */
export type Plural<T> = {
  [K in keyof T as K extends 'getElements' | 'toSpecifier' ? never : K]: T[K] extends (...args: infer A) => infer R ?
    (...args: A) => R[]
  : T[K][] | T[K];
} & {
  getElements(): T[];
  toSpecifier(): string;
};

