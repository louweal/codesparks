export const state = () => ({
  maxPosts: 4,
  maxProjects: 6,
  maxTools: 6,
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
