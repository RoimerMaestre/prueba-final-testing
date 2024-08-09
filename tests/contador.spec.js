import { mount } from '@vue/test-utils';
import store from '@/store'; // Asegúrate de importar correctamente tu store
import CounterView from '@/views/CounterView.vue';

/**
 * Suite de pruebas para el componente `CounterView` con Vuex.
 * 
 * @module CounterViewTests
 * @description Estas pruebas verifican que el componente `CounterView` interactúe correctamente con el store de Vuex,
 *              incrementando y decrementando el valor del contador.
 */
describe('Probando componente + vuex', () => {

  /**
   * Prueba para verificar que el componente incremente su valor en 1 al hacer clic en el botón de incremento.
   * 
   * @test
   */
  test('Probando que el componente aumente su valor en 1', async () => {
    // Monta el componente `CounterView` con el store de Vuex
    const wrapper = mount(CounterView, {
      global: {
        plugins: [store]
      }
    });

    // Simula un clic en el botón de incremento
    await wrapper.find('.increment-button').trigger('click');

    // Verifica que el HTML del componente contiene el valor '1'
    expect(wrapper.html()).toContain(' 1');
  });

  /**
   * Prueba para verificar que el componente disminuya su valor en 1 al hacer clic en el botón de decremento.
   * 
   * @test
   */
  test('Probando que el componente disminuya su valor en 1', async () => {
    // Monta el componente `CounterView` con el store de Vuex
    const wrapper = mount(CounterView, {
      global: {
        plugins: [store]
      }
    });

    // Simula un clic en el botón de decremento
    await wrapper.find('.decrement-button').trigger('click');

    // Verifica que el HTML del componente contiene el valor '-1'
    expect(wrapper.html()).toContain(' -1');
  });
});
