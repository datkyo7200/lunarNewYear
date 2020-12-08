$(() => {
  let initializeWatchClock = (id, endtime) => {
    let clock = document.getElementById(id);
    let days = clock.querySelector(".days");
    let hours = clock.querySelector(".hours");
    let minutes = clock.querySelector(".minutes");
    let seconds = clock.querySelector(".seconds");

    let updateWatchClock = () => {
      let t = getTimeRemaining(endtime);

      days.innerHTML = t.days;
      hours.innerHTML = ("0" + t.hours).slice(-2);
      minutes.innerHTML = ("0" + t.minutes).slice(-2);
      seconds.innerHTML = ("0" + t.seconds).slice(-2);
      if (t.total <= 0) {
        clearInterval(interval);
      }
    };

    //Update clock Watch!
    updateWatchClock();
    let interval = setInterval(updateWatchClock, 1000);
  };

  let getTimeRemaining = (endtime) => {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  };

  //Calculation for happy new year!
  nextYear = new Date(new Date().getFullYear() + 1, 1, 12);
  today = Date.parse(new Date());
  if (today == Date.parse(nextYear)) {
    let title = document.getElementById("title");
    title.innerHTML = "HAPPY NEW YEAR";
  }
  newYearDay = new Date(nextYear);
  remaningDT = newYearDay - today;
  remanning = new Date(Date.parse(new Date()) + remaningDT);

  initializeWatchClock("happyNewYear", remanning);
});
