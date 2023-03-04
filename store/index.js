export const state = () => ({
  maxPosts: 2,
  maxProjects: 3,
  maxTools: 3,
});

export const mutations = {
  updateMaxPosts(state, payload) {
    state.maxPosts = payload;
  },
  updateMaxTools(state, payload) {
    state.maxTools = payload;
  },
  updateMaxProjects(state, payload) {
    state.maxProjects = payload;
  },
};
