import { dev } from 'astro';

async function start() {
  console.log('Starting Astro dev server directly...');
  const devServer = await dev({
    root: '.'
  });
  console.log('Astro dev server started successfully!');
}

start().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
