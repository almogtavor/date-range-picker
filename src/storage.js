function serializeDates(dates) {
  const dateTsArr = dates.map(d => d.getTime());
  return JSON.stringify(dateTsArr);
}

function deserializeDates(dates) {
  if (!dates) {
    return [];
  };
  const dateArr = JSON.parse(dates);
  return dateArr.map(d => new Date(d));
}

export { serializeDates, deserializeDates };
