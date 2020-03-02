export default function formatMinSec(time) {
  let mins = Math.floor(time / 60);
  let secs = time % 60;

  let minsString = mins < 10 ? "0" + mins.toString() : mins.toString();
  let secsString = secs < 10 ? "0" + secs.toString() : secs.toString();

  let minSecString = minsString + ":" + secsString;

  return minSecString;
}
