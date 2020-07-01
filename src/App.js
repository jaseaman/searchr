import React from 'react';
import {Provider} from "react-redux";
import PhotoSearchPage from "./features/photoSearch/pages/PhotoSearchPage";
import Store from "./shared/store/store";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from "./themes/dark.theme";

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Provider store={Store}>
                    {/*  TODO : Extensibility : Add react-router */}
                    <PhotoSearchPage/>
                </Provider>
            </ThemeProvider>
        </div>
    );
}

export default App;
