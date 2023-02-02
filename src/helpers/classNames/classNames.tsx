type Mods = Record<string, boolean | string>;

export function classNames(cls: string[], mods?: Mods): string {
  return [
    ...cls,
    ...Object.keys(mods).filter((key) => mods[key] === true),
  ].join(" ");
}

classNames(["app", "dark"], { light: true });
