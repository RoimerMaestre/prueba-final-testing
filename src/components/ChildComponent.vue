<template>
  <!-- Formulario que envía datos al componente padre -->
  <form @submit.prevent="handleSubmit" class="form-container">
    <!-- Campo de entrada para el contenido -->
    <input type="text" name="content" class="input-field" placeholder="Escribe algo..." required>
    <!-- Botón para enviar el formulario -->
    <button type="submit" class="submit-button">Click</button>
  </form>
</template>

<script>
export default {
  name: 'ChildComponent', // Nombre del componente
  methods: {
    /**
     * Maneja el envío del formulario.
     * 
     * @param {Event} event - El evento de envío del formulario.
     */
    handleSubmit(event) {
      // Obtiene el valor del campo de entrada con nombre "content"
      const content = event.target.content.value;

      // Emite un evento personalizado 'receiveContent' con el valor del contenido al componente padre
      this.$emit('receiveContent', content);

      // Resetea el formulario después de enviar
      event.target.reset();
    }
  }
}
</script>

<style scoped>
/* Estilos para el contenedor del formulario */
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  max-width: 400px;
  margin: 2rem auto;
}

/* Estilos para el campo de entrada */
.input-field {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

/* Estilo para el campo de entrada en enfoque */
.input-field:focus {
  border-color: #42b983;
  box-shadow: 0 0 5px rgba(66, 185, 131, 0.3);
}

/* Estilos para el botón de enviar */
.submit-button {
  background-color: #42b983;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Estilo para el botón de enviar en estado activo */
.submit-button:active {
  transform: scale(0.98);
}

/* Estilo para el botón de enviar en estado hover */
.submit-button:hover {
  background-color: #36a76d;
}
</style>
