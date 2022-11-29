export const state = () => ({
  maxPosts: 2,
  maxProjects: 3,
});

export const mutations = {
  updateMaxPosts(state, payload) {
    state.maxPosts = payload;
  },
  updateMaxProjects(state, payload) {
    state.maxProjects = payload;
  },
};
