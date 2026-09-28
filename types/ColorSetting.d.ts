/**
 * ColorSetting.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { Mode, Read } from './_base/Types';
import type { EventTargetDOMObject } from './_base/DomObjects';
import type { FilePath, File } from './_base/Types';
import type { Application } from './Application';
import type { ColorSettingsPolicy } from './Enums/ColorSettingsPolicy';
import type { DefaultRenderingIntent } from './Enums/DefaultRenderingIntent';

/**
 * Color management settings.
 */
export interface ColorSetting<M extends Mode = 'single'> extends EventTargetDOMObject<Application, M> {
  /** The object's DOM class name. */
  readonly constructorName: 'ColorSetting';

  /** Resolves the proxy into the individual {@link ColorSetting} objects it stands for. */
  getElements(): ColorSetting<'single'>[];

  /** The available color engines. */
  readonly engineList: Read<M, string[]>;

  /** A list of valid color management system settings configurations. */
  readonly cmsSettingsList: Read<M, string[]>;

  /** A list of valid CMYK color profiles. */
  readonly workingSpaceCMYKList: Read<M, string[]>;

  /** A list of valid RGB color profiles. */
  readonly workingSpaceRGBList: Read<M, string[]>;

  /** The policy for handling colors in a CMYK color model, including reading and embedding color profiles, resolving mismatches between embedded color profiles and the working space, and moving colors between documents. */
  get cmykPolicy(): Read<M, ColorSettingsPolicy>;
  set cmykPolicy(value: ColorSettingsPolicy);

  /** If true, enables color management. */
  get enableColorManagement(): Read<M, boolean>;
  set enableColorManagement(value: boolean);

  /** The color management module (CMM) for mapping color space gamuts between documents. */
  get engine(): Read<M, string>;
  set engine(value: string);

  /** If true, displays a prompt when opening a file whose embedded color profile does not match the current working space. The prompt provides the option to override the default mismatch behavior. */
  get mismatchAskWhenOpening(): Read<M, boolean>;
  set mismatchAskWhenOpening(value: boolean);

  /** If true, displays a prompt when importing an object (via pasting, drag-and-drop, or other similar methods) whose colors do not match the current working space. The prompt provides the option to override the default mismatch behavior. */
  get mismatchAskWhenPasting(): Read<M, boolean>;
  set mismatchAskWhenPasting(value: boolean);

  /** If true, displays a prompt when opening a file that does not have an embedded color profile. The prompt provides the option to assign a color profile. */
  get missingAskWhenOpening(): Read<M, boolean>;
  set missingAskWhenOpening(value: boolean);

  /** The policy for handling colors in an RGB color model, including reading and embedding color profiles, handling mismatches between embedded color profiles and the working space, and moving colors from one document to another. */
  get rgbPolicy(): Read<M, ColorSettingsPolicy>;
  set rgbPolicy(value: ColorSettingsPolicy);

  /** The current color management system settings configuration. Note: For information on possible values, see CMS settings list. */
  get cmsSettings(): Read<M, string>;
  set cmsSettings(value: string);

  /** The file path of the CSF file to use. */
  get cmsSettingsPath(): Read<M, Promise<File>>;
  set cmsSettingsPath(value: FilePath);

  /** If true, uses black point compensation to ensure that shadow detail is preserved by simulating the full dynamic range of the output device. */
  get useBPC(): Read<M, boolean>;
  set useBPC(value: boolean);

  /** The current CMYK profile. */
  get workingSpaceCMYK(): Read<M, string>;
  set workingSpaceCMYK(value: string);

  /** The current RGB profile. */
  get workingSpaceRGB(): Read<M, string>;
  set workingSpaceRGB(value: string);

  /** How out-of-gamut colors are mapped by default when converting between color spaces — see {@link DefaultRenderingIntent}. */
  get intent(): Read<M, DefaultRenderingIntent>;
  set intent(value: DefaultRenderingIntent);

  /** If true, uses LAB alternates for spot colors when available. */
  get accurateLABSpots(): Read<M, boolean>;
  set accurateLABSpots(value: boolean);

  /** If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to the screen. */
  get idealizedBlackToScreen(): Read<M, boolean>;
  set idealizedBlackToScreen(value: boolean);

  /** If true, uses idealized black for CMYK-to-RGB or CMYK-to-Gray conversions to print or export. */
  get idealizedBlackToExport(): Read<M, boolean>;
  set idealizedBlackToExport(value: boolean);
}
