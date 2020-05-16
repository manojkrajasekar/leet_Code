function meetingRooms(intervals) {
  const startTimes = intervals
    .map((interval) => interval[0])
    .sort((a, b) => a - b);
  const endTimes = intervals
    .map((interval) => interval[1])
    .sort((a, b) => a - b);

  let startingIndex = 0,
    j = 0,
    room = 0;

  for (
    let startingIndex = 0;
    startingIndex < startTimes.length;
    startingIndex++
  ) {
    if (startTimes[startingIndex] < endTimes[j]) {
      room++;
    } else {
      j++;
    }
  }

  return room;
}
