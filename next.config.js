import WithPWA from 'next-pwa';

/**
 * Configuración de PWA
 */
const withPWA = WithPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/',
  sw: 'service-worker.js',
});

/**
 * Configuración de Next.js
 * 
 * Si estás usando `appDir` en Next.js 13, comenta la sección `i18n`. 
 * De lo contrario, puedes dejar la configuración de `i18n` sin problemas.
 */
const nextConfig = withPWA({
  reactStrictMode: true,

  // Configuración de i18n (internacionalización)
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});

export default nextConfig;
