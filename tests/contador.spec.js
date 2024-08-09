import { mount } from '@vue/test-utils'; // Importa la función mount para montar componentes en pruebas
import { createStore } from 'vuex'; // Importa la función para crear la tienda Vuex
import CounterView from '@/views/CounterView.vue'; // Importa el componente CounterView

describe('Probando componente + vuex', () => {
  // Define una tienda Vuex con un estado inicial y una mutación
  const store = createStore({
    state() {
      return {
        count: 0 // Estado inicial del contador
      }
    },
    mutations: {
      increment(state) {
        state.count += 1 // Mutación que incrementa el valor del contador en 1
      }
    }
  })

  // Define un caso de prueba para verificar el incremento del contador
  test('Probando que el componente aumente su valor en 1', async () => {
    // Monta el componente CounterView con la tienda Vuex como plugin global
    const wrapper = mount(CounterView, {
      global: {
        plugins: [store] // Configura la tienda Vuex en el contexto global del wrapper
      }
    })
  
    // Simula un clic en el primer botón del componente
    await wrapper.find('button').trigger('click')
  
    // Verifica que el HTML del componente contiene el texto esperado después del clic
    expect(wrapper.html()).toContain('este es el contador: 1')
  })
})
