export const daydiff = (first, second) => Math.round(second - first);

export const zip = (rows) => rows[0].map((_, c) => rows.map((row) => row[c]));

export const dateDistanceExtremes = (dates) => {
  const datePairs = zip([dates.slice(0, -1), dates.slice(1)]);
  const dateDistances = datePairs.map(([x, y]) => daydiff(x, y));

  return {
    min: Math.min.apply(null, dateDistances),
    max: Math.max.apply(null, dateDistances),
  };
};

export const cummulativeSeperation = (
  dates,
  labelWidth,
  minEventPadding,
  maxEventPadding,
  startPadding
) => {
  const distances = new Array(dates.length);
  distances[0] = startPadding;

  const dateExtremes = dateDistanceExtremes(dates);
  const datesDiff = dateExtremes.max - dateExtremes.min;
  const paddingDiff = maxEventPadding - minEventPadding;

  for (let index = 1; index < distances.length; index += 1) {
    const distance = daydiff(dates[index - 1], dates[index]);
    const seperation =
      datesDiff === 0
        ? maxEventPadding
        : Math.round(((distance - dateExtremes.min) * paddingDiff) / datesDiff + minEventPadding);
    distances[index] = distances[index - 1] + labelWidth + seperation;
  }
  return distances;
};
