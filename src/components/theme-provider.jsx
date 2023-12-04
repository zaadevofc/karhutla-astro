import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react";

export function ThemeProvider({ children }) {
  return <MTThemeProvider>{children}</MTThemeProvider>;
}

export default ThemeProvider;
