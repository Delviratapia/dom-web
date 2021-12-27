// import { createApp } from 'vue'
// import App from './App.vue'
// import "./assets/styles.css"
// createApp(App).mount('#app')
const timeObj = {
    "txt1": {
      "tz": "Europe/Berlin",
      "locale": "de-DE"
    }
  };

  const timeClock = () => {
    for (t in timeObj) {
      const tObj = timeObj[t];
      let d = new Date().toLocaleString(
        tObj.locale, { "timeZone": tObj.tz })
      document.querySelector("#" + t).innerHTML = d.split(", ")[1];
    }
  };
  setInterval(timeClock, 500);

  