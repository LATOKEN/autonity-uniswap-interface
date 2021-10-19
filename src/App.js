import React from "react";
import "./App.css";
import { ethers } from "ethers";
import NarBar from "./NavBar/NavBar";
import CoinSwapper from "./CoinSwapper/CoinSwapper";
import { Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Liquidity from "./Liquidity/Liquidity";
import ConnectWalletPage from "./Components/connectWalletPage";
import { createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5661FF",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#393A40",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  // Check if wallet is here:
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    return (
      <div className="App">
        <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={theme}>
            <NarBar />
            <Route
              exact
              path="/lachain-uniswap-interface/"
              component={CoinSwapper}
            />
            <Route
              exact
              path="/lachain-uniswap-interface/liquidity"
              component={Liquidity}
            />
          </ThemeProvider>
        </SnackbarProvider>
      </div>
    );
  } catch (err) {
    return (
      <div className="App">
        <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={theme}>
            <ConnectWalletPage />
          </ThemeProvider>
        </SnackbarProvider>
      </div>
    );
  }
}

export default App;
