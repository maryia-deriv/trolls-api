import Link from "next/link";
import { PATHS, quick_start_steps } from "utils";
import styles from "./QuickStartIntro.module.scss";

const QuickStartIntro: React.FC = () => (
    <>
        <h1 className={styles["doc-main-title"]}>Quickstart to Deriv API</h1>
        <div className={styles["quick-start-intro"]}>
            <p>
                On this page, you’ll find code samples in various programming languages showing you how to work with the
                Deriv API to perform some of the most important operations.
            </p>
            <p>
                You can find all of the other available calls in the{" "}
                <Link key={"admin_scope"} href={PATHS.PLAYGROUND}>
                    <a>API Playground</a>
                </Link>
                .
            </p>
            <h3 className={`${styles["api-sub-title"]} bold`}>Before you begin</h3>
            <ul className="bullet">
                {quick_start_steps.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <h3 className={`${styles["api-sub-title"]} bold`}>Setting up your environment</h3>
            <p>
                Instructions for setting up your environment and running the examples in your desired programming
                language are given as comments in the code samples.
            </p>
        </div>
    </>
);

export default QuickStartIntro;
