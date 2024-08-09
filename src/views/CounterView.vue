<template>
    <div class="counter-container">
      <h1>¡Bienvenido!</h1>
      <p class="count-display">{{ count }}</p>
      <div class="buttons">
        <button @click="decrement" class="decrement-button">➖</button>
        <button @click="increment" class="increment-button">➕</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CounterView',
    
    /**
     * Computed properties for the component.
     * 
     * @property {Object} computed - Defines computed properties.
     * @property {Function} count - Returns the current value of the count from the Vuex store.
     */
    computed: {
      count() {
        return this.$store.state.count;
      }
    },
  
    /**
     * Methods for the component.
     * 
     * @property {Object} methods - Defines methods used in the component.
     * @property {Function} increment - Commits the 'increment' mutation to the Vuex store.
     * @property {Function} decrement - Commits the 'decrement' mutation to the Vuex store.
     */
    methods: {
      /**
       * Increments the count by committing the 'increment' mutation.
       */
      increment() {
        this.$store.commit('increment');
      },
  
      /**
       * Decrements the count by committing the 'decrement' mutation.
       */
      decrement() {
        this.$store.commit('decrement');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para el contenedor del contador */
  .counter-container {
    border: 2px solid #ddd; /* Borde del contenedor */
    border-radius: 12px; /* Bordes redondeados */
    padding: 1.5rem; /* Espaciado interno */
    text-align: center; /* Alineación del texto al centro */
    max-width: 300px; /* Ancho máximo del contenedor */
    margin: 2rem auto; /* Margen superior e inferior automático para centrar */
    background: linear-gradient(to bottom right, #f9f9f9, #e0e0e0); /* Fondo degradado */
  }
  
  /* Estilos para el título */
  h1 {
    font-size: 2rem; /* Tamaño de fuente */
    margin-bottom: 0.5rem; /* Margen inferior */
    color: #333; /* Color del texto */
  }
  
  /* Estilos para la visualización del contador */
  .count-display {
    font-size: 3rem; /* Tamaño de fuente */
    margin: 1rem 0; /* Margen superior e inferior */
    color: #555; /* Color del texto */
  }
  
  /* Estilos para el contenedor de los botones */
  .buttons {
    display: flex; /* Utiliza Flexbox */
    justify-content: center; /* Centra los botones horizontalmente */
    gap: 1rem; /* Espacio entre los botones */
  }
  
  /* Estilos para los botones */
  button {
    font-size: 1.5rem; /* Tamaño de fuente */
    padding: 0.5rem 1rem; /* Espaciado interno */
    border: none; /* Sin borde */
    border-radius: 8px; /* Bordes redondeados */
    cursor: pointer; /* Cursor de mano al pasar sobre el botón */
    transition: background-color 0.3s, transform 0.2s; /* Transiciones para color de fondo y escala */
  }
  
  /* Estilos específicos para el botón de decremento */
  .decrement-button {
    background-color: #f8d7da; /* Color de fondo */
    color: #721c24; /* Color del texto */
  }
  
  /* Estilos específicos para el botón de incremento */
  .increment-button {
    background-color: #d4edda; /* Color de fondo */
    color: #155724; /* Color del texto */
  }
  
  /* Estilos para el botón en estado hover */
  button:hover {
    background-color: #ddd; /* Color de fondo al pasar el ratón */
  }
  
  /* Estilos para el botón en estado activo */
  button:active {
    transform: scale(0.95); /* Escala ligeramente el botón al hacer clic */
  }
  </style>
  