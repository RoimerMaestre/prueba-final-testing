import { createStore } from 'vuex'; // Importa la función createStore para crear una instancia de Vuex store

// Crea una instancia del store de Vuex
const store = createStore({
  /**
   * Estado inicial de la aplicación.
   * 
   * @returns {Object} Un objeto que contiene el estado inicial.
   */
  state() {
    return {
      count: 0 // Variable que almacena el contador, inicializado en 0
    };
  },
  mutations: {
    /**
     * Mutación para incrementar el valor del contador.
     * 
     * @param {Object} state - El estado del store.
     */
    increment(state) {
      state.count += 1; // Aumenta el valor del contador en 1
    },
    /**
     * Mutación para decrementar el valor del contador.
     * 
     * @param {Object} state - El estado del store.
     */
    decrement(state) {
      state.count -= 1; // Disminuye el valor del contador en 1
    }
  },
  actions: {
    /**
     * Acción para incrementar el valor del contador.
     * 
     * @param {Object} context - El contexto del store, que incluye el método commit.
     */
    increment({ commit }) {
      commit('increment'); // Llama a la mutación 'increment' para actualizar el estado
    },
    /**
     * Acción para decrementar el valor del contador.
     * 
     * @param {Object} context - El contexto del store, que incluye el método commit.
     */
    decrement({ commit }) {
      commit('decrement'); // Llama a la mutación 'decrement' para actualizar el estado
    }
  }
});

export default store; // Exporta la instancia del store para ser utilizada en la aplicación
