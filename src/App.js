import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";

import AllGuidesPage from "./pages/AllGuides";
import FavoriteGuidesPage from "./pages/FavoriteGuides";
import NewGuidePage from "./pages/NewGuide";
import Layout from "./components/layout/Layout";

function App() {
  //localhost:3000/pathname / is default
  return (
    <Layout>

        <Fragment>
          <Routes>
            
            <Route exact path="/" element={<AllGuidesPage />}>
            </Route>

            <Route exact path="/new-guide" element={<NewGuidePage />}>
              
            </Route>

            <Route exact path="favorite-guides" element={<FavoriteGuidesPage />}>
              
            </Route>

          </Routes>
        </Fragment>
      
    </Layout>
  );
}
export default App;
