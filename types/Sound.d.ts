/**
 * Sound.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { MediaItem } from './MediaItem';
import type { PageItem } from './PageItem';
import type { Link } from './Link';
import type { Images } from './Images';
import type { SoundPosterTypes } from './Enums/SoundPosterTypes';
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
 * A placed sound clip (legacy PDF interactive media). See {@link MediaItem}
 * for the shared media-item surface.
 */
export interface Sound<TParent = PageItemParent, M extends Mode = 'single'> extends MediaItem<TParent, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'Sound';

  /** Resolves the proxy into the individual {@link Sound} objects it stands for. */
  getElements(): Sound<TParent, 'single'>[];

  /** The {@link Link} to the source sound file. */
  readonly itemLink: Read<M, Link>;

  /** A collection of bitmap images used as the sound's poster. */
  readonly images: Images;

  /** A description of the sound, shown by some PDF viewers. */
  get description(): Read<M, string>;
  set description(value: string);

  /** Whether the sound plays automatically when its page is viewed in the exported PDF. */
  get playOnPageTurn(): Read<M, boolean>;
  set playOnPageTurn(value: boolean);

  /** Whether the sound's poster is excluded from print output. */
  get doNotPrintPoster(): Read<M, boolean>;
  set doNotPrintPoster(value: boolean);

  /** The poster source path. */
  get posterFile(): Read<M, string>;
  set posterFile(value: string);

  /** How the sound's poster is generated. */
  get soundPosterType(): Read<M, SoundPosterTypes>;
  set soundPosterType(value: SoundPosterTypes);

  /** Whether the sound file is embedded in the exported PDF (vs. linked). Requires Acrobat 6+ compatibility to embed. */
  get embedInPDF(): Read<M, boolean>;
  set embedInPDF(value: boolean);

  /** The sound file's path (colon-delimited on macOS). */
  get filePath(): Read<M, string>;
  set filePath(value: string);

  /** Whether playback stops when the page turns. */
  get stopOnPageTurn(): Read<M, boolean>;
  set stopOnPageTurn(value: boolean);

  /** Whether the sound loops indefinitely. */
  get soundLoop(): Read<M, boolean>;
  set soundLoop(value: boolean);

  /**
   * Brings the sound to the front of its layer, or in front of a specific item.
   * @param reference The item to bring this one in front of. Must share the same parent.
   */
  bringToFront(reference?: PageItem): Read<M, void>;

  /**
   * Sends the sound to the back of its layer, or behind a specific item.
   * @param reference The item to send this one behind. Must share the same parent.
   */
  sendToBack(reference?: PageItem): Read<M, void>;

  /** Brings the sound forward one level within its layer. */
  bringForward(): Read<M, void>;

  /** Sends the sound back one level within its layer. */
  sendBackward(): Read<M, void>;
}
