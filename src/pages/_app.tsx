import "styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import "../../src/styles/prism-theme.css";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer";
import { PageComponentWithLayout } from "../types";
import CanvasMenu from "components/common/CanvasMenu/CanvasMenu";

const EmptyLayout: React.FC = ({ children }) => <>{children}</>;

type MyApp = AppProps & {
    Component: PageComponentWithLayout;
};

const MyApp = ({ Component, pageProps }: MyApp) => {
    const [is_canvas_menu_shown, setIsCanvasMenuShown] = useState(false);
    const Layout = Component.Layout || EmptyLayout;

    return (
        <>
            <Head>
                <title>Deriv.com API</title>
                <meta
                    name="description"
                    content="Build your own trading platform, powered by the Deriv API. We use WebSockets for fast, two-way messaging between your apps and our trading services."
                />
                <link rel="icon" href="/deriv.png" />
            </Head>
            <Header is_canvas_menu_shown={is_canvas_menu_shown} toggleCanvasMenu={setIsCanvasMenuShown} />
            <CanvasMenu is_canvas_menu_shown={is_canvas_menu_shown} />
            <div className="main-content" onClick={() => setIsCanvasMenuShown(false)}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
            <Footer />
        </>
    );
};

export default MyApp;
