import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: '#111827',
        electric: '#1677F2',
        paleblue: '#DBEAFE',
        lightgray: '#F3F4F6',
        slateMuted: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.06)',
        softLg: '0 20px 50px rgba(0,0,0,0.08)',
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem', '3xl': '1.5rem' },
    },
  },
  plugins: [],
}
export default config
