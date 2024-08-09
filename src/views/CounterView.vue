<template>
    <div class="counter-container">
      <!-- Título del contador -->
      <h1>Contador</h1>
      
      <!-- Muestra el valor actual del contador -->
      <p class="count-display">este es el contador: {{ count }}</p>
      
      <div class="buttons">
        <!-- Botón para incrementar el contador -->
        <!-- El botón de decremento está comentado actualmente -->
        <button @click="increment" class="increment-button">➕</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CounterView', // Nombre del componente
    
    computed: {
      /**
       * Obtiene el valor actual del contador desde el store de Vuex.
       * 
       * @returns {Number} El valor del contador del estado del store.
       */
      count() {
        return this.$store.state.count;
      }
    },
    
    methods: {
      /**
       * Llama a la mutación 'increment' en el store de Vuex para incrementar el contador.
       */
      increment() {
        this.$store.commit('increment');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos para el contenedor del contador */
  .counter-container {
    border: 2px solid #ddd;
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    max-width: 300px;
    margin: 2rem auto;
    background: linear-gradient(to bottom right, #f9f9f9, #e0e0e0);
  }
  
  /* Estilos para el título */
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  /* Estilos para la visualización del contador */
  .count-display {
    font-size: 3rem;
    margin: 1rem 0;
    color: #555;
  }
  
  /* Estilos para el contenedor de los botones */
  .buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  
  /* Estilos para los botones */
  button {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }
  
  /* Estilos específicos para el botón de incremento */
  .increment-button {
    background-color: #d4edda;
    color: #155724;
  }
  
  /* Estilos para el botón de decremento (comentado en el template) */
  .decrement-button {
    background-color: #f8d7da;
    color: #721c24;
  }
  
  /* Cambia el color de fondo del botón al pasar el ratón sobre él */
  button:hover {
    background-color: #ddd;
  }
  
  /* Aplica una pequeña escala al botón cuando se hace clic en él */
  button:active {
    transform: scale(0.95);
  }
  </style>
  