import React from "react"
import { Route, Redirect } from "react-router-dom"
//import for application views
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
//import for the Login page
import { Login } from "/home/marcus/workspace/reptile-glossary/reptile-glossary-client/reptile-glossary/src/auth/Login.js"
//import for the Register Page
import { Register } from "/home/marcus/workspace/reptile-glossary/reptile-glossary-client/reptile-glossary/src/auth/Register.js"
//This is a function. 
export const ReptileGlossary = () => (
    <>
        <Route render={() => {
            //this checks to see if a valid authentication token is being used
            if (localStorage.getItem("lu_token")) {
                //if a valid token is being used, the user is taken to the front page
                return <>
                    <Route>
                        <NavBar />
                        <ApplicationViews />
                    </Route>
                </>
            } else {
                return <Redirect to="/login" />
            }
        }} />

        <Route path="/login">
            <Login />
        </Route>

        <Route path="/register">
            <Register />
        </Route>

    </>
)









































// import React from "react"
// import { Route, Redirect } from "react-router-dom"
// import { Login } from "./auth/Login"
// import { Register } from "./auth/Register"
// import { ApplicationViews } from "./components/ApplicationViews"
// import { NavBar } from "./components/nav/NavBar"

// export const ReptileGlossary = () => (
//     <>
//         <Route render={() => {
//             if (localStorage.getItem("lu_token")) {
//                 return <>
//                     <Route>
//                         <NavBar />
//                         <ApplicationViews />
//                     </Route>
//                 </>
//             } else {
//                 return <Redirect to="/login" />
//             }
//         }} />

//         <Route path="/login">
//             <Login />
//         </Route>

//         <Route path="/register">
//             <Register />
//         </Route>

//     </>
// )