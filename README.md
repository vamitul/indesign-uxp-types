# indesign-uxp-types

TypeScript declarations for the **Adobe InDesign UXP** scripting DOM — the `indesign` module that
UXP plugins and `.idjs` scripts `require`. Completion, hover documentation and type checking in
VSCode or any TypeScript-aware editor.

> [!IMPORTANT]
> **Built for UXP.** These declarations describe the UXP scripting DOM: `require('indesign')` in
> UXP plugins and `.idjs` scripts. ExtendScript (`.jsx`) drives the same object model through a
> different engine, and hands some values back differently — so the types can help there too, but
> only as a workaround, with real caveats. See
> [Using it with ExtendScript](#using-it-with-extendscript-a-workaround).

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

## Two variants

The package ships two sets of declarations for the same API, aimed at different users.
 
The **authored** set is the hand-built source. It takes full advantage of Typescript generics and inheritance to fully model the complex InDesign scripting API and class hierarchy, but comes with the cost of nearly-unreadable tooltips. 
The **default** set is generated from it and checked by the same tests. It has gone through a further post-processing step that flattenes the generics and complexity of the authored types and thus producing a much more user-friendly set of declaration, at the cost of loosing the `extends` chaining.

If you write scripts, use the default set. If something looks wrong, switching to the authored set is a quick check — and please report it, since the two should always agree.

If you develop InDesign C++ plugins and want to add TypeScript declarations for your own
scripting surface, start from the authored set: a member you add to a base class such as
`PageItem` then reaches every subclass. In the default set it stays on the class you added it to.
A future release should contain a set of tools to help you produce and publish these additions for consumers.
To switch between the two sets, edit your `tsconfig.json` file to point to the relevant set.

| entry | tooltips | use it when |
|---|---|---|
| `indesign-uxp-types` (default) | short: `Rectangle<Spread>.geometricBounds: number[]` | writing scripts and plugins |
| `indesign-uxp-types/authored` | fully generic: `TransformableItem<"single">.geometricBounds` | extending the API |

Switch in `tsconfig.json` with `"types": ["indesign-uxp-types/authored"]`. Pick one, never both.

## Some things the types will stop you getting wrong

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

## Using it with ExtendScript: a workaround

The classes, collections, properties and methods are the same in both engines, so these types can
still give completion and catch many mistakes in an ExtendScript project. This is not a supported
use: the types describe what UXP does, and where ExtendScript differs, they will be wrong.

- **There is no `indesign` module.** In ExtendScript `app` and every enum are globals. Declare the
  ones you use:

  ```ts
  declare const app: import('indesign').Application;
  declare const SaveOptions: typeof import('indesign').SaveOptions;
  ```

- **No `constructorName`, no `.equals()`.** Both exist only in UXP. In ExtendScript an enumerator is
  a plain number, so `===` and `switch` work there — the reverse of UXP — while the types still
  offer `.equals()`, which will fail at runtime. Use `obj.constructor.name` for the class.
- **Paths are ExtendScript `File` and `Folder` objects, returned directly.** `doc.fullName` is a
  `File` there, not a promise of a UXP entry, and file parameters take an ExtendScript `File`.
  Declare ExtendScript's own `File` and `Folder` (for example from
  [`types-for-adobe`](https://www.npmjs.com/package/types-for-adobe)) and cast at every path.
- **ExtendScript is ES3.** Current TypeScript can no longer compile to it (`target: "ES3"` was
  removed), so you need a transpiler that still can. Promises, `async` and `await` do not exist
  there.
- The UXP types that come along as a peer dependency are of no use in ExtendScript.

## Versions

| package | InDesign | dictionary |
|---|---|---|
| 1.x | 2026 (21.5, 21.6) | 21.5 |

What changed in each release: [CHANGELOG.md](CHANGELOG.md).

## Issues

Report a wrong or missing declaration at
[github.com/vamitul/indesign-uxp-types/issues](https://github.com/vamitul/indesign-uxp-types/issues),
with the InDesign build (`app.version`) and a few lines that show it.

## Support the project

This package, and the other open-source tools I'm releasing for InDesign developers, is free and
stays free. If it saves you time, or your team depends on it, you can help keep it maintained:

- [GitHub Sponsors](https://github.com/sponsors/vamitul): monthly or one-time
- [Buy Me a Coffee](https://buymeacoffee.com/vamitul): a quick one-off thank-you

## Licence

[MIT](LICENSE). Adobe and InDesign are trademarks of Adobe Inc. This package is not affiliated with or endorsed by Adobe.
