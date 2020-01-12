import Vue from 'vue';

const state = {
 tasks: {
  'id1': {
   name: "Go to store",
   details: "Some details",
   dueDate: "1/31/2020",
   dueTime: "11:00",
   completed: false
  },
  'id2': {
   name: "Let the dog out",
   details: "Some details",
   dueDate: "1/31/2020",
   dueTime: "15:30",
   completed: false
  },
  'id3': {
   name: "Smoke some pot",
   details: "Some details",
   dueDate: "1/10/2020",
   dueTime: "08:00",
   completed: true
  },
 }
};

const mutations = {
 updateTask(state, payload) {
  // -TODO: Remove consolelog
  //console.log('from mutaion payload:', payload);
  Object.assign(state.tasks[payload.id], payload.updates);
 },
 deleteTask(state, id) {
  // -TODO: Remove consolelog
  console.log('delete id:', id);
  Vue.delete(state.tasks, id);
 }
};

const actions = {
 updateTask({ commit }, payload) {
  // -TODO: Remove consolelog
  //console.log('updateTask action');
  //console.log('payload:', payload);
  commit('updateTask', payload);
 },
 deleteTask({ commit }, id) {
  commit('deleteTask', id);
 }
};

const getters = {
 tasks: (state) => {
  return state.tasks;
 }
};

export default {
 namespaced: true,
 state,
 mutations,
 actions,
 getters
};