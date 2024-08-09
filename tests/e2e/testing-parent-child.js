module.exports = {
  'testeo entre dos componentes': function (browser) {
    browser
      .url('http://localhost:8080/parent') // Reemplaza con la URL de tu aplicación Vue donde se encuentra el componente Parent
      .waitForElementVisible('#app', 5000) // Espera a que el elemento con el ID 'app' sea visible, indicando que la aplicación Vue ha cargado
      .setValue('input[type=text]', 'Hola desde aca!') // Establece el valor del campo de texto en el formulario del componente Child
      .click('button[type=submit]') // Hace clic en el botón de envío del formulario en el componente Child
      .waitForElementVisible('h1', 5000) // Espera a que el elemento <h1> sea visible, indicando que los datos han sido procesados y mostrados en el componente Parent
      .assert.containsText('h1', 'Content received: Hola desde aca!') // Verifica que el elemento <h1> contiene el texto esperado, confirmando que el contenido ha sido recibido y mostrado correctamente
      .end(); // Finaliza la prueba
  }
};
