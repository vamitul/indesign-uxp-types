/**
 * UIColors.d.ts — indesign-uxp-types
 * Adobe InDesign 2026 (21.x) UXP scripting DOM declarations.
 * Version: 1.0.0 · Updated: 2026-09-29
 * Author: Vlad Vladila (Krommatine Systems) · https://github.com/vamitul/indesign-uxp-types
 */
import type { EnumComparand, Enumeration, Enumerator, __val} from "../_base/Enums";
import type { PageColorOptions } from "./PageColorOptions";



declare const __UIColors: unique symbol;


/*----------------------------------------/
/   Internal enumerator interfaces        /
/       -- Not exported --                /
/----------------------------------------*/


interface UIColors extends Enumerator {
  /** True when `other` is this same enumerator. Enumerators are objects — `===` is always false. */
  equals(other: EnumComparand<UIColors, PageColorOptions>): boolean;

  /**
   * @internal **WARNING:** `__UIColors` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__UIColors]: never;
}


/**
 * Light blue.
 */
interface UIColors_LIGHT_BLUE extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766613612;
}

/**
 * Red.
 */
interface UIColors_RED extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1767007588;
}

/**
 * Green.
 */
interface UIColors_GREEN extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766290030;
}

/**
 * Blue.
 */
interface UIColors_BLUE extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1765960821;
}

/**
 * Yellow.
 */
interface UIColors_YELLOW extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1767468151;
}

/**
 * Magenta.
 */
interface UIColors_MAGENTA extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766680430;
}

/**
 * Cyan.
 */
interface UIColors_CYAN extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766029678;
}

/**
 * Gray.
 */
interface UIColors_GRAY extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766290041;
}

/**
 * Black.
 */
interface UIColors_BLACK extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1765960811;
}

/**
 * Orange.
 */
interface UIColors_ORANGE extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766814318;
}

/**
 * Dark green.
 */
interface UIColors_DARK_GREEN extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766090610;
}

/**
 * Teal.
 */
interface UIColors_TEAL extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1767138668;
}

/**
 * Tan.
 */
interface UIColors_TAN extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1767137646;
}

/**
 * Brown.
 */
interface UIColors_BROWN extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1765962350;
}

/**
 * Violet.
 */
interface UIColors_VIOLET extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1767271540;
}

/**
 * Gold.
 */
interface UIColors_GOLD extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766288484;
}

/**
 * Dark blue.
 */
interface UIColors_DARK_BLUE extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766089324;
}

/**
 * Pink.
 */
interface UIColors_PINK extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766878827;
}

/**
 * Lavender.
 */
interface UIColors_LAVENDER extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766618734;
}

/**
 * Brick red.
 */
interface UIColors_BRICK_RED extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1765962340;
}

/**
 * Olive green.
 */
interface UIColors_OLIVE_GREEN extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766812790;
}

/**
 * Peach.
 */
interface UIColors_PEACH extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766876008;
}

/**
 * Burgundy.
 */
interface UIColors_BURGUNDY extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1765962343;
}

/**
 * Grass green.
 */
interface UIColors_GRASS_GREEN extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766287218;
}

/**
 * Ochre.
 */
interface UIColors_OCHRE extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766810482;
}

/**
 * Purple.
 */
interface UIColors_PURPLE extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766879856;
}

/**
 * Light gray.
 */
interface UIColors_LIGHT_GRAY extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766614898;
}

/**
 * Charcoal.
 */
interface UIColors_CHARCOAL extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766025324;
}

/**
 * Grid blue.
 */
interface UIColors_GRID_BLUE extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766285932;
}

/**
 * Grid orange.
 */
interface UIColors_GRID_ORANGE extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766289266;
}

/**
 * Fiesta.
 */
interface UIColors_FIESTA extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766222181;
}

/**
 * Light olive.
 */
interface UIColors_LIGHT_OLIVE extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766616940;
}

/**
 * Lipstick.
 */
interface UIColors_LIPSTICK extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766615408;
}

/**
 * Cute teal.
 */
interface UIColors_CUTE_TEAL extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766028396;
}

/**
 * Sulphur.
 */
interface UIColors_SULPHUR extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1767077228;
}

/**
 * Grid green.
 */
interface UIColors_GRID_GREEN extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1766286439;
}

/**
 * White.
 */
interface UIColors_WHITE extends UIColors {
  /**
   * @internal **WARNING:** `__val` is a phantom type for compiler strictness only. 
   * It DOES NOT exist at runtime. Do not evaluate it in your logic.
   */
  readonly [__val]: 1767336052;
}



/*----------------------------------------/
/                Exports                  /
/----------------------------------------*/

/**
 * A set of preset named colors accepted anywhere an RGB triplet is otherwise required, such as
 * guide, grid, or frame colors.
 */
export declare namespace UIColors {
/**
 * Light blue.
 */
type LIGHT_BLUE = UIColors_LIGHT_BLUE;

/**
 * Red.
 */
type RED = UIColors_RED;

/**
 * Green.
 */
type GREEN = UIColors_GREEN;

/**
 * Blue.
 */
type BLUE = UIColors_BLUE;

/**
 * Yellow.
 */
type YELLOW = UIColors_YELLOW;

/**
 * Magenta.
 */
type MAGENTA = UIColors_MAGENTA;

/**
 * Cyan.
 */
type CYAN = UIColors_CYAN;

/**
 * Gray.
 */
type GRAY = UIColors_GRAY;

/**
 * Black.
 */
type BLACK = UIColors_BLACK;

/**
 * Orange.
 */
type ORANGE = UIColors_ORANGE;

/**
 * Dark green.
 */
type DARK_GREEN = UIColors_DARK_GREEN;

/**
 * Teal.
 */
type TEAL = UIColors_TEAL;

/**
 * Tan.
 */
type TAN = UIColors_TAN;

/**
 * Brown.
 */
type BROWN = UIColors_BROWN;

/**
 * Violet.
 */
type VIOLET = UIColors_VIOLET;

/**
 * Gold.
 */
type GOLD = UIColors_GOLD;

/**
 * Dark blue.
 */
type DARK_BLUE = UIColors_DARK_BLUE;

/**
 * Pink.
 */
type PINK = UIColors_PINK;

/**
 * Lavender.
 */
type LAVENDER = UIColors_LAVENDER;

/**
 * Brick red.
 */
type BRICK_RED = UIColors_BRICK_RED;

/**
 * Olive green.
 */
type OLIVE_GREEN = UIColors_OLIVE_GREEN;

/**
 * Peach.
 */
type PEACH = UIColors_PEACH;

/**
 * Burgundy.
 */
type BURGUNDY = UIColors_BURGUNDY;

/**
 * Grass green.
 */
type GRASS_GREEN = UIColors_GRASS_GREEN;

/**
 * Ochre.
 */
type OCHRE = UIColors_OCHRE;

/**
 * Purple.
 */
type PURPLE = UIColors_PURPLE;

/**
 * Light gray.
 */
type LIGHT_GRAY = UIColors_LIGHT_GRAY;

/**
 * Charcoal.
 */
type CHARCOAL = UIColors_CHARCOAL;

/**
 * Grid blue.
 */
type GRID_BLUE = UIColors_GRID_BLUE;

/**
 * Grid orange.
 */
type GRID_ORANGE = UIColors_GRID_ORANGE;

/**
 * Fiesta.
 */
type FIESTA = UIColors_FIESTA;

/**
 * Light olive.
 */
type LIGHT_OLIVE = UIColors_LIGHT_OLIVE;

/**
 * Lipstick.
 */
type LIPSTICK = UIColors_LIPSTICK;

/**
 * Cute teal.
 */
type CUTE_TEAL = UIColors_CUTE_TEAL;

/**
 * Sulphur.
 */
type SULPHUR = UIColors_SULPHUR;

/**
 * Grid green.
 */
type GRID_GREEN = UIColors_GRID_GREEN;

/**
 * White.
 */
type WHITE = UIColors_WHITE;

}
/**
 * A set of preset named colors accepted anywhere an RGB triplet is otherwise required, such as
 * guide, grid, or frame colors.
 */
export declare const UIColors: typeof Enumeration & {

  /**
   * Light blue.
   */
  readonly LIGHT_BLUE: UIColors_LIGHT_BLUE;
  /**
   * Light blue.
   */
  readonly lightBlue: UIColors_LIGHT_BLUE;
  /**
   * Light blue.
   */
  readonly lightblue: UIColors_LIGHT_BLUE;

  /**
   * Red.
   */
  readonly RED: UIColors_RED;
  /**
   * Red.
   */
  readonly red: UIColors_RED;

  /**
   * Green.
   */
  readonly GREEN: UIColors_GREEN;
  /**
   * Green.
   */
  readonly green: UIColors_GREEN;

  /**
   * Blue.
   */
  readonly BLUE: UIColors_BLUE;
  /**
   * Blue.
   */
  readonly blue: UIColors_BLUE;

  /**
   * Yellow.
   */
  readonly YELLOW: UIColors_YELLOW;
  /**
   * Yellow.
   */
  readonly yellow: UIColors_YELLOW;

  /**
   * Magenta.
   */
  readonly MAGENTA: UIColors_MAGENTA;
  /**
   * Magenta.
   */
  readonly magenta: UIColors_MAGENTA;

  /**
   * Cyan.
   */
  readonly CYAN: UIColors_CYAN;
  /**
   * Cyan.
   */
  readonly cyan: UIColors_CYAN;

  /**
   * Gray.
   */
  readonly GRAY: UIColors_GRAY;
  /**
   * Gray.
   */
  readonly gray: UIColors_GRAY;

  /**
   * Black.
   */
  readonly BLACK: UIColors_BLACK;
  /**
   * Black.
   */
  readonly black: UIColors_BLACK;

  /**
   * Orange.
   */
  readonly ORANGE: UIColors_ORANGE;
  /**
   * Orange.
   */
  readonly orange: UIColors_ORANGE;

  /**
   * Dark green.
   */
  readonly DARK_GREEN: UIColors_DARK_GREEN;
  /**
   * Dark green.
   */
  readonly darkGreen: UIColors_DARK_GREEN;
  /**
   * Dark green.
   */
  readonly darkgreen: UIColors_DARK_GREEN;

  /**
   * Teal.
   */
  readonly TEAL: UIColors_TEAL;
  /**
   * Teal.
   */
  readonly teal: UIColors_TEAL;

  /**
   * Tan.
   */
  readonly TAN: UIColors_TAN;
  /**
   * Tan.
   */
  readonly tan: UIColors_TAN;

  /**
   * Brown.
   */
  readonly BROWN: UIColors_BROWN;
  /**
   * Brown.
   */
  readonly brown: UIColors_BROWN;

  /**
   * Violet.
   */
  readonly VIOLET: UIColors_VIOLET;
  /**
   * Violet.
   */
  readonly violet: UIColors_VIOLET;

  /**
   * Gold.
   */
  readonly GOLD: UIColors_GOLD;
  /**
   * Gold.
   */
  readonly gold: UIColors_GOLD;

  /**
   * Dark blue.
   */
  readonly DARK_BLUE: UIColors_DARK_BLUE;
  /**
   * Dark blue.
   */
  readonly darkBlue: UIColors_DARK_BLUE;
  /**
   * Dark blue.
   */
  readonly darkblue: UIColors_DARK_BLUE;

  /**
   * Pink.
   */
  readonly PINK: UIColors_PINK;
  /**
   * Pink.
   */
  readonly pink: UIColors_PINK;

  /**
   * Lavender.
   */
  readonly LAVENDER: UIColors_LAVENDER;
  /**
   * Lavender.
   */
  readonly lavender: UIColors_LAVENDER;

  /**
   * Brick red.
   */
  readonly BRICK_RED: UIColors_BRICK_RED;
  /**
   * Brick red.
   */
  readonly brickRed: UIColors_BRICK_RED;
  /**
   * Brick red.
   */
  readonly brickred: UIColors_BRICK_RED;

  /**
   * Olive green.
   */
  readonly OLIVE_GREEN: UIColors_OLIVE_GREEN;
  /**
   * Olive green.
   */
  readonly oliveGreen: UIColors_OLIVE_GREEN;
  /**
   * Olive green.
   */
  readonly olivegreen: UIColors_OLIVE_GREEN;

  /**
   * Peach.
   */
  readonly PEACH: UIColors_PEACH;
  /**
   * Peach.
   */
  readonly peach: UIColors_PEACH;

  /**
   * Burgundy.
   */
  readonly BURGUNDY: UIColors_BURGUNDY;
  /**
   * Burgundy.
   */
  readonly burgundy: UIColors_BURGUNDY;

  /**
   * Grass green.
   */
  readonly GRASS_GREEN: UIColors_GRASS_GREEN;
  /**
   * Grass green.
   */
  readonly grassGreen: UIColors_GRASS_GREEN;
  /**
   * Grass green.
   */
  readonly grassgreen: UIColors_GRASS_GREEN;

  /**
   * Ochre.
   */
  readonly OCHRE: UIColors_OCHRE;
  /**
   * Ochre.
   */
  readonly ochre: UIColors_OCHRE;

  /**
   * Purple.
   */
  readonly PURPLE: UIColors_PURPLE;
  /**
   * Purple.
   */
  readonly purple: UIColors_PURPLE;

  /**
   * Light gray.
   */
  readonly LIGHT_GRAY: UIColors_LIGHT_GRAY;
  /**
   * Light gray.
   */
  readonly lightGray: UIColors_LIGHT_GRAY;
  /**
   * Light gray.
   */
  readonly lightgray: UIColors_LIGHT_GRAY;

  /**
   * Charcoal.
   */
  readonly CHARCOAL: UIColors_CHARCOAL;
  /**
   * Charcoal.
   */
  readonly charcoal: UIColors_CHARCOAL;

  /**
   * Grid blue.
   */
  readonly GRID_BLUE: UIColors_GRID_BLUE;
  /**
   * Grid blue.
   */
  readonly gridBlue: UIColors_GRID_BLUE;
  /**
   * Grid blue.
   */
  readonly gridblue: UIColors_GRID_BLUE;

  /**
   * Grid orange.
   */
  readonly GRID_ORANGE: UIColors_GRID_ORANGE;
  /**
   * Grid orange.
   */
  readonly gridOrange: UIColors_GRID_ORANGE;
  /**
   * Grid orange.
   */
  readonly gridorange: UIColors_GRID_ORANGE;

  /**
   * Fiesta.
   */
  readonly FIESTA: UIColors_FIESTA;
  /**
   * Fiesta.
   */
  readonly fiesta: UIColors_FIESTA;

  /**
   * Light olive.
   */
  readonly LIGHT_OLIVE: UIColors_LIGHT_OLIVE;
  /**
   * Light olive.
   */
  readonly lightOlive: UIColors_LIGHT_OLIVE;
  /**
   * Light olive.
   */
  readonly lightolive: UIColors_LIGHT_OLIVE;

  /**
   * Lipstick.
   */
  readonly LIPSTICK: UIColors_LIPSTICK;
  /**
   * Lipstick.
   */
  readonly lipstick: UIColors_LIPSTICK;

  /**
   * Cute teal.
   */
  readonly CUTE_TEAL: UIColors_CUTE_TEAL;
  /**
   * Cute teal.
   */
  readonly cuteTeal: UIColors_CUTE_TEAL;
  /**
   * Cute teal.
   */
  readonly cuteteal: UIColors_CUTE_TEAL;

  /**
   * Sulphur.
   */
  readonly SULPHUR: UIColors_SULPHUR;
  /**
   * Sulphur.
   */
  readonly sulphur: UIColors_SULPHUR;

  /**
   * Grid green.
   */
  readonly GRID_GREEN: UIColors_GRID_GREEN;
  /**
   * Grid green.
   */
  readonly gridGreen: UIColors_GRID_GREEN;
  /**
   * Grid green.
   */
  readonly gridgreen: UIColors_GRID_GREEN;

  /**
   * White.
   */
  readonly WHITE: UIColors_WHITE;
  /**
   * White.
   */
  readonly white: UIColors_WHITE;

}
