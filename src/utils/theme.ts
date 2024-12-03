export const theme = {
  colors: {
    brand: {
      primary: '#1e3a8a', // Darker blue for primary brand color
      secondary: '#047857', // Rich green for secondary
      accent: '#0c4a6e', // Deep blue accent
      dark: '#0f172a'  // Very dark blue for backgrounds
    },
    text: {
      primary: '#1f2937',
      secondary: '#4b5563',
      light: '#9ca3af'
    }
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif'
  },
  gradients: {
    primary: 'bg-gradient-to-r from-blue-900 to-blue-800',
    secondary: 'bg-gradient-to-r from-green-800 to-green-700',
    dark: 'bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900',
    hero: 'bg-gradient-to-br from-blue-900/95 via-blue-800/95 to-blue-900/95',
    mesh: 'bg-[radial-gradient(at_40%_20%,hsla(222,47%,28%,0.7)_0px,transparent_50%),radial-gradient(at_80%_0%,hsla(218,81%,85%,0.4)_0px,transparent_50%),radial-gradient(at_0%_50%,hsla(355,100%,93%,0.4)_0px,transparent_50%),radial-gradient(at_80%_50%,hsla(340,100%,76%,0.4)_0px,transparent_50%)]'
  },
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    glow: 'shadow-[0_0_30px_rgba(30,58,138,0.3)]'
  },
  transitions: {
    base: 'transition-all duration-300',
    slow: 'transition-all duration-500',
    fast: 'transition-all duration-150'
  },
  animations: {
    float: 'animate-float',
    glow: 'animate-glow',
    slideUp: 'animate-slide-up',
    fadeIn: 'animate-fade-in'
  }
};

export const components = {
  container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  section: 'py-20',
  button: {
    base: 'inline-flex items-center justify-center rounded-full font-bold transition-all duration-300',
    primary: `${theme.gradients.primary} text-white hover:opacity-90`,
    secondary: `${theme.gradients.secondary} text-white hover:opacity-90`,
    outline: 'border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white'
  },
  heading: {
    h1: 'font-display text-5xl md:text-7xl font-bold tracking-tight',
    h2: 'font-display text-4xl font-bold tracking-tight',
    h3: 'font-display text-2xl font-bold tracking-tight'
  },
  text: {
    body: 'text-lg text-gray-600',
    caption: 'text-sm text-gray-500'
  }
};