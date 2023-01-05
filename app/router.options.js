export default {
  // todo: fix for Nuxt 3
  async xxxscrollBehavior(to, from, savedPosition) {
    console.log(savedPosition);
    if (to.path !== from.path && to.hash) {
      // console.log("hello");
      // return { left: 0, top: 0, behaviour: "auto" };
    }

    // if (to.path !== from.path && to.hash) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       return resolve({ selector: to.hash });
    //     }, 400);
    //   });
    // } else if (to.hash) {
    //   console.log(document.querySelector(to.hash));
    //   return {
    //     selector: to.hash,
    //     behavior: "smooth",
    //   };
    // } else {
    //   return { left: 0, top: 0 };
    // }

    // if (savedPosition) {
    //   return savedPosition;
    // }

    // const findEl = async (hash, x = 0) => {
    //   return (
    //     document.querySelector(hash) ||
    //     new Promise((resolve) => {
    //       if (x > 0) {
    //         return resolve(document.querySelector("#app"));
    //       }
    //       setTimeout(() => {
    //         resolve(findEl(hash, 1));
    //       }, 300);
    //     })
    //   );
    // };

    // if (to.hash) {
    //   const el = await findEl(to.hash);

    //   if (from.path !== to.path) {
    //     console.log(el.offsetTop);
    //     return {
    //       left: 0,
    //       top: el.offsetTop,
    //       // behavior: "smooth",
    //     };
    //   }

    //   if ("scrollBehavior" in document.documentElement.style) {
    //     console.log("hash path hit scroll to");
    //     return window.scrollTo({ top: el.offsetTop, behavior: "smooth" });
    //   } else {
    //     return window.scrollTo(0, el.offsetTop);
    //   }
    // }
    // return { left: 0, top: 0, behaviour: "smooth" };
  },
};
