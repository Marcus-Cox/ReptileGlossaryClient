import React from "react";
import { Route } from "react-router-dom";
import { ReptileGuideList } from "./reptileguide/ReptileGuideList";
import { NewReptileGuideForm } from "./reptileguide/ReptileGuideForm";
import { UpdateGameForm } from "./reptileguide/UpdateReptileGuideForm";
// import { ReptileGuideDetails } from "/home/marcus/workspace/reptile-glossary/reptile-glossary-client/reptile-glossary/src/components/reptileguide/ReptileGuideDetails.js";

export const ApplicationViews = () => {
  return (
    <>
      <main
        style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem",
        }}
      >
        <Route exact path={["/", "/reptileguides"]}>
          <ReptileGuideList />
        </Route>
        <Route exact path="/reptileguides/new">
          <NewReptileGuideForm />
        </Route>
        <Route exact path="/reptileguides/:reptileguideId/update">
          <UpdateGameForm />
        </Route>

        {/* <Route exact path="/reptileguides/:reptileguidesId">
          <ReptileGuideDetails />
        </Route> */}
      </main>
    </>
  );
};
