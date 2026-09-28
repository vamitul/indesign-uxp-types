# indesign-uxp-types

TypeScript declarations for the **Adobe InDesign UXP** scripting DOM — the `indesign` module that
UXP plugins and `.idjs` scripts `require`. Completion, hover documentation and type checking in
VSCode or any TypeScript-aware editor.

- **InDesign 2026**, modelled on Adobe's 21.5 object-model dictionary, which also covers 21.6.
- Every class, enum and member the dictionary declares, checked against it on every build.
- Hand-written and runtime-measured where the dictionary is vague or wrong: which values a
  property really accepts, what `everyItem()` returns, what a path getter resolves to.

## Install

```sh
npm install --save-dev indesign-uxp-types
```

This also installs Adobe's UXP types (`@adobe/cc-ext-uxp-types`), a peer dependency: the
declarations use its `File` and `Folder`.

## Enable it

In `tsconfig.json`:

```jsonc
{
  "compilerOptions": {
    "types": ["indesign-uxp-types"],
    "skipLibCheck": true
  }
}
```

Then:

```ts
import { app, SaveOptions } from 'indesign';

const doc = app.activeDocument;
const frame = doc.spreads.item(0).textFrames.item(0);
frame.parent;            // Spread
doc.close(SaveOptions.NO);
```

`skipLibCheck` is needed because Adobe's UXP types conflict with TypeScript's DOM library; the
errors are in their file, not in yours or in this package.

**Already using Adobe's recommended `typeRoots` setup?** `typeRoots` limits where `types` are looked
up, so either add `"./node_modules"` to it, or put this line once at the top of one of your files:

```ts
/// <reference types="indesign-uxp-types" />
```

Not `import 'indesign-uxp-types'` — that survives into the compiled JavaScript as a `require` the
plugin cannot satisfy at runtime.

**Plain JavaScript** works the same way — add `// @ts-check` (or `"checkJs": true`) and
`const { app } = require('indesign')` is typed.

## Two trees, one API

The package ships the declarations twice.

| entry | tooltips | use it when |
|---|---|---|
| `indesign-uxp-types` (default) | short: `Rectangle<Spread>.geometricBounds: number[]` | almost always |
| `indesign-uxp-types/authored` | fully generic: `TransformableItem<"single">.geometricBounds` | you want the source form |

They describe the same API with the same precision — including the exact `.parent` of every
object. Pick one in `"types"`, never both.

## Things the types will stop you getting wrong

- **Enumerators and DOM objects never compare equal with `===`** — not even to themselves. Use
  `.equals()` on the enumerator: `Leading.AUTO.equals(style.leading)`. A `switch` over enum
  members always falls to `default`.
- **`.item()` never returns `null`**; it returns a reference that may not resolve. Test
  `.isValid`. On an event object, don't: snapshot `{ ...evt.properties }` instead.
- **`everyItem()` and `itemByRange()` return a proxy.** Reading a property returns an array, one
  value per item; assigning one value sets every item at once. `getElements()` resolves the items.
- **A text `itemByRange()` returns one contiguous `Text` range**, whatever collection it came from.
- **Paths go in as strings and come out as entries.** A file parameter or setter takes a path or a
  UXP `File`; a folder one takes a path string only. A getter such as `doc.fullName` resolves to a
  `File` — `(await doc.fullName).nativePath` for the path. `filePath` is the containing folder.
- **Collections can be empty.** With `noUncheckedIndexedAccess`, `getElements()[0]` is
  `T | undefined`, as it should be.

## Versions

| package | InDesign | dictionary |
|---|---|---|
| 1.x | 2026 (21.5, 21.6) | 21.5 |

## Issues

Report a wrong or missing declaration at
[github.com/vamitul/indesign-uxp-types/issues](https://github.com/vamitul/indesign-uxp-types/issues),
with the InDesign build (`app.version`) and a few lines that show it.

## Licence

[MIT](LICENSE). Adobe and InDesign are trademarks of Adobe Inc. This package is not affiliated
with or endorsed by Adobe.
