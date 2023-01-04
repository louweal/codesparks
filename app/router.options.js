export default {
  // todo: fix for Nuxt 3
  // scrollBehavior(to, from, savedPosition) {
  //   if (to.path !== from.path && to.hash) {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         return resolve({ selector: to.hash });
  //       }, 400);
  //     });
  //   } else if (to.hash) {
  //     console.log(document.querySelector(to.hash));
  //     return {
  //       selector: to.hash,
  //       behavior: "smooth",
  //     };
  //   } else {
  //     return { top: 0, left: 0 };
  //   }
  // },
};
