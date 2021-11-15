import Image from "next/image";
import { PATHS } from "utils";
import styles from "./CanvasMenu.module.scss";

const CanvasMenu: React.FC = ({ children }) => {
    // function handleHamburgerClick() {
    //     const canvas = document.getElementById("canvas-menu");
    //     if (!canvas) return;
    //     canvas.classList.toggle("show-canvas");

    //     if (canvas.classList.contains("show-canvas")) {
    //         document.addEventListener("click", handleOutsideCanvasClick);
    //         this.src = "/img/close.svg";
    //     } else {
    //         document.removeEventListener("click", handleOutsideCanvasClick);
    //         this.src = "/img/hamburger_menu.svg";
    //     }
    // }

    // function handleOutsideCanvasClick(e) {
    //     const canvas = document.getElementById("canvas-menu");
    //     const navigation = document.getElementById("main-nav");
    //     if (!canvas.contains(e.target) && !navigation.contains(e.target)) {
    //         canvas.classList.remove("show-canvas");
    //         document.getElementById("hamburger").src = "/img/hamburger_menu.svg";
    //         document.removeEventListener("click", handleOutsideCanvasClick);
    //     }
    // }
    return (
        <section id="canvas-menu" className={styles["off-canvas-menu"]}>
            {/* <div className="menu-container"> */}
            {/* <div id="home" className="menu-wrapper"> */}
            {/* <a href="{{ branch }}/">Home</a>
                </div>
                <div className="menu-wrapper">
                    <div id="doc-menu-header" className="menu-header">
                        Documentation
                        <div className="menu-button">
                            <Image src="/arrow_down.svg" width="16" height="16" alt="expand" />
                        </div>
                    </div>
                    <div className="menu-panel">
                        <a id="quickstart" href="{{ branch }}/docs/">
                            Quickstart
                        </a>
                        <a id="app-registration" href="{{ branch }}/docs/app-registration/">
                            App Registration
                        </a>
                        <a id="api-guide" href="{{ branch }}/docs/api-guide/">
                            API Guide
                        </a>
                        <a id="faq" href="{{ branch }}/docs/faq/">
                            FAQ
                        </a>
                        <a id="json-schemas" href="{{ branch }}/docs/json-schemas/">
                            JSON Schemas
                        </a>
                        <a id="bug-bounty" href="{{ branch }}/docs/bug-bounty/">
                            Bug Bounty
                        </a>
                    </div>
                </div>
                <div id="playground_link" className="menu-wrapper">
                    <a href={PATHS.PLAYGROUND}>API Playground</a> */}
            {/* </div> */}
            {/* </div> */}
        </section>
    );
};

export default CanvasMenu;
