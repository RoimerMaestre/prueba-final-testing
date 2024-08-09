import { shallowMount } from "@vue/test-utils"; // Importa la función shallowMount para montar componentes en pruebas
import { createRouter, createWebHistory } from "vue-router"; // Importa funciones para crear y manejar el enrutador
import AboutView from "@/views/AboutView.vue"; // Importa el componente AboutView
import HomeView from "@/views/HomeView.vue"; // Importa el componente HomeView

// Descripción de los tests para el componente AboutView
describe("Tests de vista About", () => {
  it("Test1 - Probar la existencia del componente en la ruta", async () => {
    // Crea una instancia de router con una ruta para el componente AboutView
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL), // Usa el historial del navegador para el enrutamiento
      routes: [
        {
          path: "/about", // Ruta para el componente AboutView
          name: "about",
          component: AboutView, // Componente a renderizar en esta ruta
        },
      ],
    });

    // Cambia la ruta a "/about" y espera a que el router esté listo
    router.push("/about");
    await router.isReady();

    // Monta el componente AboutView con el router como plugin global
    const wrapper = shallowMount(AboutView, {
      global: {
        plugins: [router],
      },
    });

    // Verifica que el componente AboutView existe en el wrapper
    expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });
});

// Descripción de los tests para el componente HomeView
describe("Tests de vista Home", () => {
  it("Test2 - Probar la existencia del componente en la ruta", async () => {
    // Crea una instancia de router con una ruta para el componente HomeView
    const router = createRouter({
      history: createWebHistory(process.env.BASE_URL), // Usa el historial del navegador para el enrutamiento
      routes: [
        {
          path: "/", // Ruta para el componente HomeView
          name: "home",
          component: HomeView, // Componente a renderizar en esta ruta
        },
      ],
    });

    // Cambia la ruta a "/" y espera a que el router esté listo
    router.push("/");
    await router.isReady();

    // Monta el componente HomeView con el router como plugin global
    const wrapper = shallowMount(HomeView, {
      global: {
        plugins: [router],
      },
    });

    // Verifica que el componente HomeView existe en el wrapper
    expect(wrapper.findComponent(HomeView).exists()).toBe(true);
  });
});
