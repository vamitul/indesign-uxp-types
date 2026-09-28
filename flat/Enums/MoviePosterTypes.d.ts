/**
 * MoviePosterTypes.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-28
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";



declare const __MoviePosterTypes: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface MoviePosterTypes extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<MoviePosterTypes>): boolean;

  /**
   * @internal **WARNING:** `__MoviePosterTypes` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__MoviePosterTypes]: never;
}


/**
 * None.
 */
interface MoviePosterTypes_NONE extends MoviePosterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1852796517;
}

/**
 * Uses the generic movie poster image file.
 */
interface MoviePosterTypes_STANDARD extends MoviePosterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 2020623970;
}

/**
 * Uses an image from the movie file.
 */
interface MoviePosterTypes_FROM_MOVIE extends MoviePosterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1298558310;
}

/**
 * (Read-only) Indicates whether the movie poster is not the standard, generic image.
 */
interface MoviePosterTypes_PROXY_IMAGE extends MoviePosterTypes {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1299216505;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * The type of graphic for the movie poster.
 */
export declare namespace MoviePosterTypes {
/**
 * None.
 */
type NONE = MoviePosterTypes_NONE;

/**
 * Uses the generic movie poster image file.
 */
type STANDARD = MoviePosterTypes_STANDARD;

/**
 * Uses an image from the movie file.
 */
type FROM_MOVIE = MoviePosterTypes_FROM_MOVIE;

/**
 * (Read-only) Indicates whether the movie poster is not the standard, generic image.
 */
type PROXY_IMAGE = MoviePosterTypes_PROXY_IMAGE;

}
/**
 * The type of graphic for the movie poster.
 */
export declare const MoviePosterTypes: typeof Enumeration & {

  /**
   * None.
   */
  readonly NONE: MoviePosterTypes_NONE;
  /**
   * None.
   */
  readonly none: MoviePosterTypes_NONE;

  /**
   * Uses the generic movie poster image file.
   */
  readonly STANDARD: MoviePosterTypes_STANDARD;
  /**
   * Uses the generic movie poster image file.
   */
  readonly standard: MoviePosterTypes_STANDARD;

  /**
   * Uses an image from the movie file.
   */
  readonly FROM_MOVIE: MoviePosterTypes_FROM_MOVIE;
  /**
   * Uses an image from the movie file.
   */
  readonly fromMovie: MoviePosterTypes_FROM_MOVIE;
  /**
   * Uses an image from the movie file.
   */
  readonly frommovie: MoviePosterTypes_FROM_MOVIE;

  /**
   * (Read-only) Indicates whether the movie poster is not the standard, generic image.
   */
  readonly PROXY_IMAGE: MoviePosterTypes_PROXY_IMAGE;
  /**
   * (Read-only) Indicates whether the movie poster is not the standard, generic image.
   */
  readonly proxyImage: MoviePosterTypes_PROXY_IMAGE;
  /**
   * (Read-only) Indicates whether the movie poster is not the standard, generic image.
   */
  readonly proxyimage: MoviePosterTypes_PROXY_IMAGE;

}
