import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

import Page from "./Page.jsx";
import reactLogo from "./assets/react.svg";

/**
 Challenge:

 Part 2:
 - Add a `<header>` element with an `<img />` element with the image of the
 React logo inside (src="react-logo.png") and make sure to set the
 width to something more manageable so it doesn't take up the whole screen.
 Also, as always, you should include some alt text on the image.
 - Add an `<h1>` with some text describing the page. (E.g. "Reasons
 I'm excited to learn React"). Place it above the ordered list, then wrap
 the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
 structure flowing well.
 - Add a `<footer>` after the list that says:
 "© 20xx <last name here> development. All rights reserved."
 */


root.render(
    <>
        <header id="header">
            <img src={reactLogo} className="framework" alt="React logo" />
        </header>
        <main id="main">
            <h1>Reasons I'm excited to learn React</h1>
            <Page />
        </main>
        <footer id="footer">
            <small>© 2026 Shaw development.  You can have it if you want."</small>
        </footer>

    </>

)

