type Mods = Record<string, string | boolean>
const classNames = (cls: string, mods: Mods = {}, additional: string[] = []): string => {
  return [
    cls,
    ...additional,
    ...Object.entries(mods).filter(([, value]) => Boolean(value))
      .map(([className]) => className)
  ].join(' ')
}

export default classNames
