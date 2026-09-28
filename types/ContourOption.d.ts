/**
 * ContourOption.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { TextWrapPreference } from './TextWrapPreference';
import type { ContourOptionsTypes } from './Enums/ContourOptionsTypes';

/**
 * Settings for tracing a custom text-wrap outline around a graphic's shape —
 * from an embedded clipping path, an alpha channel, or detected edges.
 */
export interface ContourOption<M extends Mode = 'single'> extends EventTargetDOMObject<TextWrapPreference, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ContourOption';

  /** Resolves the proxy into the individual {@link ContourOption} objects it stands for. */
  getElements(): ContourOption<'single'>[];

  /** A list of the clipping paths stored in the graphic. */
  readonly photoshopPathNames: Read<M, string[]>;

  /** A list of the alpha channels stored in the graphic. */
  readonly alphaChannelPathNames: Read<M, string[]>;

  /**
   * Which shape traces the text-wrap outline — the object's bounding box or
   * graphics frame, a Photoshop path or alpha channel, detected edges, or Adobe
   * Sensei's detected subject. See {@link ContourOptionsTypes}.
   */
  get contourType(): Read<M, ContourOptionsTypes>;
  set contourType(value: ContourOptionsTypes);

  /** If true, creates interior clipping paths within the surrounding clipping path. Note: Valid only when clipping type is alpha channel or detect edges. */
  get includeInsideEdges(): Read<M, boolean>;
  set includeInsideEdges(value: boolean);

  /** The alpha channel or Photoshop path to use for the contour option. Valid only when the contour options is photoshop path or alpha channel. */
  get contourPathName(): Read<M, string>;
  set contourPathName(value: string);

  /**
   * Index of the alpha channel to trace, as an alternative to naming it through
   * {@link contourPathName}. Valid only when {@link contourType} is
   * {@link ContourOptionsTypes.ALPHA_CHANNEL}.
   */
  get contourAlphaIndex(): Read<M, number>;
  set contourAlphaIndex(value: number);

  /**
   * Index of the Photoshop path to trace, as an alternative to naming it through
   * {@link contourPathName}. Valid only when {@link contourType} is
   * {@link ContourOptionsTypes.PHOTOSHOP_PATH}.
   */
  get contourPathIndex(): Read<M, number>;
  set contourPathIndex(value: number);

  /**
   * How light a pixel may be and still count as background when tracing edges.
   * Valid only when {@link contourType} is {@link ContourOptionsTypes.DETECT_EDGES}.
   */
  get contourThreshold(): Read<M, number>;
  set contourThreshold(value: number);

  /**
   * How closely the traced path follows the detected edge — higher values give a
   * simpler path with fewer points. Valid only when {@link contourType} is
   * {@link ContourOptionsTypes.DETECT_EDGES}.
   */
  get contourTolerance(): Read<M, number>;
  set contourTolerance(value: number);
}
