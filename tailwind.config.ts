import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#0f172a',
        primary: '#2563eb',
        secondary: '#64748b',
        accent: '#f59e0b',
        muted: '#f1f5f9',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      fontSize: {
        xs: '0.75rem',      
        sm: '0.875rem',     
        base: '1rem',       
        lg: '1.125rem',     
        xl: '1.25rem',      
        '2xl': '1.5rem',      
        '3xl': '1.875rem',    
        '4xl': '2.25rem',     
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      minHeight: {
        '11': '44px',
      },
      height: {
        '11': '44px',
      }
    },
  },
  plugins: [],
}
export default config
