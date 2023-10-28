import { createStore } from 'vuex'
import { serviceVacantes } from '../services/vacantes';
export default createStore({
state: { 
  vacantesList: []
}, 
actions: {
  async fetchVacantes ({commit}) {
    try {
      const data = await serviceVacantes.getVacantes()
      console.log(data);
      commit("SET_VACANTES", data.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  },
}, 
getters: {
  getVacantes: (state) => state.vacantesList,
},
mutations: {
  SET_VACANTES(state, vacantes) {
    state.vacantesList = vacantes;
  },
},
})