// USING OBSERVER WITH VANILLA JS

import Observer from "./api/Observer";
const observer = new Observer({ options: { threshold: 1 } });

observer.observe(document.querySelector("#vanilla-io"), entry => {
  console.log(
    `${entry.target.id} intersected with ratio ${entry.intersectionRatio}`
  );
});
