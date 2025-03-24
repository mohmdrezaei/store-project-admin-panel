"use client";
import { yekan } from "@/core/utils/fonts";
import { createTheme, ThemeProvider } from "@mui/material";


const theme = createTheme({
  typography: {
    fontFamily: yekan,
  }
});



function MuiProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
       
      {children}
    </ThemeProvider>
  );
}

export default MuiProvider;