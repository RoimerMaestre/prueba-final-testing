// src/store/index.js

import { createStore } from 'vuex';

/**
 * Crea una tienda Vuex para gestionar el estado de la aplicación.
 * 
 * @module store
 * @description Esta tienda gestiona el estado global de la aplicación, específicamente un contador en este caso.
 * 
 * @example
 * import store from './store';
 * 
 * new Vue({
 *   store,
 *   // ... otras opciones
 * });
 */

const store = createStore({
  /**
   * Estado inicial de la tienda.
   * 
   * @returns {Object} El estado inicial con un contador inicializado en 0.
   */
  state() {
    return {
      count: 0
    };
  },

  /**
   * Mutaciones para modificar el estado de la tienda.
   * 
   * @namespace mutations
   */
  mutations: {
    /**
     * Incrementa el valor del contador en el estado.
     * 
     * @param {Object} state - El estado de la tienda.
     */
    increment(state) {
      state.count += 1;
    },

    /**
     * Decrementa el valor del contador en el estado.
     * 
     * @param {Object} state - El estado de la tienda.
     */
    decrement(state) {
      state.count -= 1;
    }
  },
});

export default store;
