import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

import Page from "./components/Page.jsx";

/** Challenge:
 * Move the `main` element into its own component called "MainContent"
 * and render that component inside the Page component.
 *
 * Do the same with the `footer` element, moving it into a new
 * component called "Footer"
 */


root.render(
    <Page />
)

