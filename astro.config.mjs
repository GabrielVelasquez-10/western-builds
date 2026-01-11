// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  server: {
    host: true, // O '0.0.0.0' para escuchar en todas las interfaces
    // port: 4321, // Opcional: especificar un puerto diferente
  },
});