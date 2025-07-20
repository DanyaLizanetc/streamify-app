import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Додаємо ngrok URL до дозволених хостів
    // Вам потрібно буде оновлювати цей масив щоразу, коли ngrok URL змінюється
    allowedHosts: [
      'localhost', // Дозволяємо localhost
      '127.0.0.1', // Дозволяємо 127.0.0.1
      'fafa1c01e806.ngrok-free.app' // <<< ЗАМІНИ ЦЕ НА СВІЙ АКТУАЛЬНИЙ NGROK URL
    ],
    // HMR має працювати через localhost для стабільності
    hmr: {
      host: 'localhost',
      protocol: 'ws'
    }
  }
});
