const isoDateWithoutTime = date => {
  const dateISODateWithTime = date.toISOString();
  const indexOfDateTime = dateISODateWithTime.indexOf('T');

  const ISODateWithoutTime = dateISODateWithTime.slice(0, indexOfDateTime);

  return ISODateWithoutTime;
};

export const rangeToISOStringWithoutTime = (
  from = new Date(),
  to = new Date()
) => {
  const fromISODateWithoutTime = isoDateWithoutTime(from);

  if (from === to) {
    return [fromISODateWithoutTime, fromISODateWithoutTime];
  }

  const toISODateWithoutTime = isoDateWithoutTime(to);

  return [fromISODateWithoutTime, toISODateWithoutTime];
};
