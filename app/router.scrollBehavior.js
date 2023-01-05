export default function (to, from, savedPosition) {
  if (to.path !== from.path && to.hash) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve({ selector: to.hash });
      }, 400);
    });
  } else if (to.hash) {
    // console.log(document.querySelector(to.hash));
    return {
      selector: to.hash,
      behavior: "smooth",
    };
  } else {
    return { x: 0, y: 0 };
  }
}
