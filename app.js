setInterval(() => {
  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "Tungi" : "Kunduzgi";
  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');
  let hr_dot = document.querySelector('.hr_dot');
  let min_dot = document.querySelector('.min_dot');
  let sec_dot = document.querySelector('.sec_dot');
  //add zero
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  hours.innerHTML = h + "<br><span>soat</span>";
  minutes.innerHTML = m + "<br><span>Minut</span>";
  seconds.innerHTML = s + "<br><span>Secund</span>";
  am.innerHTML = ampm;
  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;
  hr_dot.style.transform = `rotate(${h * 30}deg)`;
  min_dot.style.transform = `rotate(${m * 6}deg)`;
  sec_dot.style.transform = `rotate(${s * 6}deg)`;
})

