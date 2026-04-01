// This file acts as the single source of truth for your theme,
// similar to how you manage themes in React Native.
export const theme = {
  colors: {
    pageBg: "#0f172a", // Black
    primary: "#8b5cf6", // Purple
    primaryLight: "#c4b5fd", // Light Purple
    primaryText: "#ffffff",
    surface: "rgba(30, 41, 59, 0.7)", // Slate 800 with opacity
    surfaceStrong: "rgba(51, 65, 85, 0.9)", // Slate 700
    text: "#f8fafc", // Slate 50
    muted: "#94a3b8", // Slate 400
    border: "rgba(148, 163, 184, 0.2)", // Slate 400 with opacity
    shadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
  },
  fonts: {
    heading: "'Montserrat', sans-serif",
    body: "'Roboto', sans-serif",
    button: "'Poppins', sans-serif",
  },
};

// Helper function to convert the JS theme object into CSS variables
export const cssVariables = {
  "--page-bg": theme.colors.pageBg,
  "--primary": theme.colors.primary,
  "--primary-light": theme.colors.primaryLight,
  "--primary-text": theme.colors.primaryText,
  "--surface": theme.colors.surface,
  "--surface-strong": theme.colors.surfaceStrong,
  "--text": theme.colors.text,
  "--muted": theme.colors.muted,
  "--border": theme.colors.border,
  "--shadow": theme.colors.shadow,
  "--font-heading": theme.fonts.heading,
  "--font-body": theme.fonts.body,
  "--font-button": theme.fonts.button,
};
