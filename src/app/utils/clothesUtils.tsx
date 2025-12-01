export const getLayers = (temp: number): string[] => {
  const base = ['shell', 'mid', 'hat', 'mittens']
  const withWool = [...base, 'wool']
  const winter = ['mid', 'shell', 'hat', 'mittens']
  const coldWinter = ['wool', ...winter]

  return temp >= 20
    ? ['none', 'shoe']
    : temp >= 15
      ? ['light', 'shoe']
      : temp >= 10
        ? ['mid']
        : temp >= 5
          ? base
          : temp >= 0
            ? withWool
            : temp > -5
              ? winter
              : coldWinter
}
