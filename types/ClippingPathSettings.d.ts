/**
 * ClippingPathSettings.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { MeasurementValue } from './_base/Types';
import type { EPS } from './EPS';
import type { Image } from './Image';
import type { ImportedPage } from './ImportedPage';
import type { PDF } from './PDF';
import type { PICT } from './PICT';
import type { PageItem } from './PageItem';
import type { Paths } from './Paths';
import type { WMF } from './WMF';
import type { ClippingPathType } from './Enums/ClippingPathType';

/**
 * The path that masks a placed graphic, hiding everything outside it.
 *
 * The path can come from an alpha channel or a Photoshop path stored in the file, or
 * be detected from the image's own edges — see {@link clippingType}.
 */
export interface ClippingPathSettings<M extends Mode = 'single'> extends EventTargetDOMObject<Image | EPS | WMF | PICT | PDF | ImportedPage, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ClippingPathSettings';

  /** Resolves the proxy into the individual {@link ClippingPathSettings} objects it stands for. */
  getElements(): ClippingPathSettings<'single'>[];

  /** A list of the clipping paths stored in the graphic. */
  readonly photoshopPathNames: Read<M, string[]>;

  /** A list of the alpha channels stored in the graphic. */
  readonly alphaChannelPathNames: Read<M, string[]>;

  /** A collection of paths. */
  readonly paths: Paths;

  /** The clipping path type. */
  get clippingType(): Read<M, ClippingPathType>;
  set clippingType(value: ClippingPathType);

  /** If true, inverts the clipping path. */
  get invertPath(): Read<M, boolean>;
  set invertPath(value: boolean);

  /** If true, creates interior clipping paths within the surrounding clipping path. Applies only when {@link clippingType} is {@link ClippingPathType.ALPHA_CHANNEL} or {@link ClippingPathType.DETECT_EDGES}. */
  get includeInsideEdges(): Read<M, boolean>;
  set includeInsideEdges(value: boolean);

  /** If true, truncates the clipping path at the edge of the frame containing the graphic. Applies only when {@link clippingType} is {@link ClippingPathType.ALPHA_CHANNEL} or {@link ClippingPathType.DETECT_EDGES}. */
  get restrictToFrame(): Read<M, boolean>;
  set restrictToFrame(value: boolean);

  /**
   * If true, uses the high-resolution version of the graphic to create the
   * clipping path. If false, calculates the clipping path based on
   * screen-display resolution.
   *
   * Applies only when {@link clippingType} is {@link ClippingPathType.DETECT_EDGES}.
   */
  get useHighResolutionImage(): Read<M, boolean>;
  set useHighResolutionImage(value: boolean);

  /**
   * The lowest value (darkest) pixel to allow in the image.
   *
   * All pixels in the image whose values are greater than (lighter than) the threshold value
   * are clipped (obscured). (Range: 0 to 255) Applies only when {@link clippingType} is
   * {@link ClippingPathType.DETECT_EDGES} or {@link ClippingPathType.ALPHA_CHANNEL}.
   */
  get threshold(): Read<M, number>;
  set threshold(value: number);

  /**
   * How similar a pixel's intensity value can be to the threshold value
   * before the pixel is obscured by the clipping path. (Range: 0 to 10)
   *
   * Applies only when {@link clippingType} is {@link ClippingPathType.DETECT_EDGES}
   * or {@link ClippingPathType.ALPHA_CHANNEL}.
   */
  get tolerance(): Read<M, number>;
  set tolerance(value: number);

  /**
   * Shrinks the area enclosed by the clipping path by the specified amount.
   *
   * (Range depends on the unit. For points: -10000 to 10000; picas: -833p4 to 833p4; inches:
   * -138.8889 to 138.8889; mm: -3527.778 to 3527.778; cm: -352.7778 to 352.7778; ciceros:
   * -781c11.889 to 781c11.889).
   */
  get insetFrame(): Read<M, number>;
  set insetFrame(value: MeasurementValue);

  /** The name of the Photoshop path or alpha channel to use as a clipping path. */
  get appliedPathName(): Read<M, string>;
  set appliedPathName(value: string);

  /** Converts the clipping path to a frame. */
  convertToFrame(): Read<M, PageItem>;
}
