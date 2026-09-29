/**
 * Font.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject, IndexedDOMObject, ReadonlyNamedDOMObject } from './_base/DomObjects';
import type { Application } from './Application';
import type { Document } from './Document';
import type { FontStatus } from './Enums/FontStatus';
import type { FontTypes } from './Enums/FontTypes';
import type { OpenTypeFeature } from './Enums/OpenTypeFeature';
import type { FilePath } from './_base/Types';
import type { Fonts } from './Fonts';

/**
 * A single installed or missing font, as listed in the {@link Fonts} collection of an
 * {@link Application} or {@link Document}.
 *
 * Distinct from a text range's own `appliedFont`, which references a font *by name* for use in
 * formatting; this object exposes the font's own metadata and installation status.
 */
export interface Font<M extends Mode = 'single'>
  extends EventTargetDOMObject<Application | Document, M>,
    IndexedDOMObject<Application | Document, M>,
    ReadonlyNamedDOMObject<Application | Document, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Font';

  /** Resolves the proxy into the individual {@link Font} objects it stands for. */
  getElements(): Font<'single'>[];

  /** If `true`, the font can be embedded when exporting. */
  readonly allowEditableEmbedding: Read<M, boolean>;

  /** If `true`, the font can be converted to outlines. */
  readonly allowOutlines: Read<M, boolean>;

  /** If `true`, the font can be embedded in a PDF document. */
  readonly allowPDFEmbedding: Read<M, boolean>;

  /** If `true`, the font can be printed. */
  readonly allowPrinting: Read<M, boolean>;

  /** The name of the font family. */
  readonly fontFamily: Read<M, string>;

  /** The full path to the font file on disk. */
  readonly location: Read<M, string>;

  /** The PostScript name of the font. */
  readonly postscriptName: Read<M, string>;

  /** If `true`, the font permits only restricted printing. */
  readonly restrictedPrinting: Read<M, boolean>;

  /** Whether the font is installed, missing, faux-styled, or substituted. */
  readonly status: Read<M, FontStatus>;

  /** The name of the font style (e.g. `'Bold'`, `'Italic'`). */
  readonly fontStyleName: Read<M, string>;

  /** The underlying font technology (TrueType, OpenType, CID, and so on). */
  readonly fontType: Read<M, FontTypes>;

  /** The number of design axes in a variable font. */
  readonly numDesignAxes: Read<M, number>;

  /** The name of each design axis in a variable font. */
  readonly designAxesName: Read<M, string[]>;

  /** The valid `[min, max]` range of each design axis in a variable font. */
  readonly designAxesRange: Read<M, [number, number][]>;

  /** The current value of each design axis in a variable font. */
  readonly designAxesValues: Read<M, number[]>;

  /** The writing script identifier for the font. */
  readonly writingScript: Read<M, number>;

  /** The full font name. */
  readonly fullName: Read<M, string>;

  /** The full native-language name of the font. */
  readonly fullNameNative: Read<M, string>;

  /** The native-language name of the font style. */
  readonly fontStyleNameNative: Read<M, string>;

  /** The font name as reported by the host platform. */
  readonly platformName: Read<M, string>;

  /** The font version string. */
  readonly version: Read<M, string>;

  /** The registry of a CID font. */
  readonly registry: Read<M, string>;

  /** The ordering of a CID font. */
  readonly ordering: Read<M, string>;

  /**
   * Checks whether the font supports the given OpenType feature.
   * @param using The feature to check for, as an {@link OpenTypeFeature} enumerator or its name.
   */
  checkOpenTypeFeature(using: OpenTypeFeature | string): Read<M, boolean>;

  /**
   * Creates a subset copy of the font containing only the glyphs needed to
   * render `charactersForSubset`, and writes it to `fontDestination`.
   * @param charactersForSubset Every character the resulting subset font must be able to render.
   */
  createSubsetFont(charactersForSubset: string, fontDestination: FilePath): Read<M, void>;
}
