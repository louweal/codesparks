import { defineStore } from "pinia";

export const useVisibleItemsStore = defineStore("store", {
  state: () => {
    return { numVisiblePosts: 2, numVisibleProjects: 3 };
  },
  actions: {
    showMorePosts(num) {
      this.numVisiblePosts += num;
    },
    showMoreProjects(num) {
      this.numVisibleProjects += num;
    },
  },
});

/// usage

// import { useVisibleItemsStore } from '@/stores/visibleItems'
// const store = useVisibleItemsStore();

//     store.showMorePosts(3)
//     store.showMoreProjects(2)
