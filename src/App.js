import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { Fragment } from "react";

import AllGuidesPage from "./pages/AllGuides";
import FavoriteGuidesPage from "./pages/FavoriteGuides";
import NewGuidePage from "./pages/NewGuide";
import MainNavigation from "./components/layout/MainNavigation";
function App() {
  //localhost:3000/pathname / is default
  return (
    <div>
      <MainNavigation />
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
      
    </div>
  );
}
export default App;
