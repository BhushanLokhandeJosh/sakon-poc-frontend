export const getTimeFromNow = (targetDate: any) => {
  const currentDate = new Date();
  const providedDate = new Date(targetDate);

  const timeDifference = currentDate.getTime() - providedDate.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  const time = {
    days: days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };

  if (time.days === 0 && time.hours !== 0) {
    return `${time?.hours} hours ${time?.minutes} minutes ago`;
  } else if (time.hours === 0) {
    return `${time?.minutes} minutes ago`;
  }

  return `${time?.days} days ${time?.hours} hours ${time?.minutes} minutes ago`;
};
