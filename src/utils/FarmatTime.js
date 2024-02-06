export const farmatTime = (time) => {
  let minutes = Math.trunc(time / 60);
  let sec = time - minutes * 60;
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }
  return `${minutes}:${sec}`;
};
