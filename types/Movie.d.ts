/**
 * Movie.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { MediaItem } from './MediaItem';
import type { PageItem } from './PageItem';
import type { Link } from './Link';
import type { Images } from './Images';
import type { NavigationPoints } from './NavigationPoints';
import type { FloatingWindowPosition } from './Enums/FloatingWindowPosition';
import type { FloatingWindowSize } from './Enums/FloatingWindowSize';
import type { MoviePosterTypes } from './Enums/MoviePosterTypes';
import type { PageItemParent } from './_base/Parents';
import type { AnimationSetting } from './AnimationSetting';
import type { Article } from './Article';
import type { BackgroundTask } from './BackgroundTask';
import type { ContentTransparencySetting } from './ContentTransparencySetting';
import type { FitOptions } from './Enums/FitOptions';
import type { FillTransparencySetting } from './FillTransparencySetting';
import type { FlexObjects } from './FlexObjects';
import type { Graphic } from './Graphic';
import type { Graphics } from './Graphics';
import type { Layer } from './Layer';
import type { Library } from './Library';
import type { LinkedPageItemOption } from './LinkedPageItemOption';
import type { ObjectStyle } from './ObjectStyle';
import type { Page } from './Page';
import type { PageItems } from './PageItems';
import type { Preferences } from './Preferences';
import type { SVGs } from './SVGs';
import type { StrokeTransparencySetting } from './StrokeTransparencySetting';
import type { TextWrapPreference } from './TextWrapPreference';
import type { TimingSetting } from './TimingSetting';
import type { TransparencySetting } from './TransparencySetting';
import type { XMLElement } from './XMLElement';
import type { NamableDOMObject } from './_base/DomObjects';
import type { GraphicAttributes } from './_base/GraphicAttributes';

/**
 * A placed movie clip (legacy SWF/PDF interactive media). See {@link MediaItem}
 * for the shared media-item surface.
 */
export interface Movie<TParent = PageItemParent, M extends Mode = 'single'> extends MediaItem<TParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Movie';

  /** Resolves the proxy into the individual {@link Movie} objects it stands for. */
  getElements(): Movie<TParent, 'single'>[];

  /** The {@link Link} to the source movie file. */
  readonly itemLink: Read<M, Link>;

  /** A collection of bitmap images used as the movie's poster frame. */
  readonly images: Images;

  /** A collection of the movie's navigation points (named seek positions). */
  readonly navigationPoints: NavigationPoints;

  /** A description of the movie, shown by some PDF viewers. */
  get description(): Read<M, string>;
  set description(value: string);

  /** The screen position of the floating window that plays the movie. */
  get floatingWindowPosition(): Read<M, FloatingWindowPosition>;
  set floatingWindowPosition(value: FloatingWindowPosition);

  /** The size of the floating window that plays the movie. */
  get floatingWindowSize(): Read<M, FloatingWindowSize>;
  set floatingWindowSize(value: FloatingWindowSize);

  /** Whether the movie plays automatically when its page is viewed in the exported PDF. */
  get playOnPageTurn(): Read<M, boolean>;
  set playOnPageTurn(value: boolean);

  /** Whether playback controls are shown at the bottom of the movie window. */
  get showControls(): Read<M, boolean>;
  set showControls(value: boolean);

  /** Whether the movie opens in a new floating window rather than playing inline at the poster frame. */
  get floatingWindow(): Read<M, boolean>;
  set floatingWindow(value: boolean);

  /** The URL to stream the movie from, when {@link filePath} references a URL rather than a local file. */
  get url(): Read<M, string>;
  set url(value: string);

  /** The poster-frame source path. */
  get posterFile(): Read<M, string>;
  set posterFile(value: string);

  /** How the poster frame is generated; see {@link MoviePosterTypes}. */
  get moviePosterType(): Read<M, MoviePosterTypes>;
  set moviePosterType(value: MoviePosterTypes);

  /** Whether the movie file is embedded in the exported PDF (vs. linked). Requires Acrobat 6+ compatibility to embed. */
  get embedInPDF(): Read<M, boolean>;
  set embedInPDF(value: boolean);

  /** The movie file's path (colon-delimited on macOS). */
  get filePath(): Read<M, string>;
  set filePath(value: string);

  /** The name of the video controller skin. */
  get controllerSkin(): Read<M, string>;
  set controllerSkin(value: string);

  /** Whether the controller skin is shown on mouse rollover. */
  get showController(): Read<M, boolean>;
  set showController(value: boolean);

  /** Whether the movie loops indefinitely. */
  get movieLoop(): Read<M, boolean>;
  set movieLoop(value: boolean);

  /**
   * Verifies that {@link url} is reachable and points to a valid movie file.
   * Only meaningful when the movie is specified by URL rather than a local {@link filePath}.
   */
  verifyURL(): Read<M, boolean>;

  /**
   * Brings the movie to the front of its layer, or in front of a specific item.
   * @param reference The item to bring this one in front of. Must share the same parent.
   */
  bringToFront(reference?: PageItem): Read<M, void>;

  /**
   * Sends the movie to the back of its layer, or behind a specific item.
   * @param reference The item to send this one behind. Must share the same parent.
   */
  sendToBack(reference?: PageItem): Read<M, void>;

  /** Brings the movie forward one level within its layer. */
  bringForward(): Read<M, void>;

  /** Sends the movie back one level within its layer. */
  sendBackward(): Read<M, void>;
}
