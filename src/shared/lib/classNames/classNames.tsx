type Mods = Record<string, boolean | string>;

export default function classNames(cls: string[], mods?: Mods): string {
  return [
    ...cls.filter(Boolean),
    ...Object.keys(mods).filter((key) => mods[key] === true),
  ].join(" ");
}
