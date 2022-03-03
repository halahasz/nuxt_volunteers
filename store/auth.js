export const state = () => {
  return {
    user: null,
  };
};

export const getters = {
  authUser(state) {
    return state.user || null;
  },
  isAuthenticated(state) {
    return !!state.user;
  },
};

export const actions = {
  setUser({ commit }, user) {
    commit("setAuthUser", user);
  },
};

export const mutations = {
  setAuthUser(state, user) {
    state.user = user;
  },
  removeAuthUser(state) {
    state.user = null;
  },
};
