function withOpacityValue(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgba(var(${variableName}))`
  }
}

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px',
    extend: {
      textColor: {
        skin: {
          base: withOpacityValue('--color-text-base'),
          status: withOpacityValue('--color-text-status'),
          link: withOpacityValue('--color-text-link'),
          fill: withOpacityValue('--color-text-fill')
        }
      },
      backgroundColor: {
        skin: {
          fill: withOpacityValue('--color-button-fill'),
          'background-accent': withOpacityValue('--color-background-accent'),
          'background-box': withOpacityValue('--color-background-box')
        }
      }
    }
  },
  plugins: [],
};
export default config;
