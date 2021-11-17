import Link from "next/link";
import { BenefitPropsType } from "../components/BenefitsSection/BenefitIcon/BenefitIcon";

// Benefit section content

export const benefit_icons_array: Array<BenefitPropsType> = [
    {
        title: "Automation",
        imgPath: "/automation.svg",
    },
    {
        title: "Easy integration",
        imgPath: "/integration.svg",
    },
    {
        title: "Fast execution",
        imgPath: "/execution.svg",
    },
];

// QuickStartIntro content

export const quick_start_steps: Array<(string | JSX.Element)[]> = [
    [
        "Open a ",
        <Link key={"deriv-account"} href="https://deriv.com/">
            <a>Deriv account</a>
        </Link>,
        " (either a demo or real account).",
    ],
    [
        "Create a new token using the ",
        <Link key={"admin_scope"} href="https://app.deriv.com/account/api-token">
            <a>admin scope</a>
        </Link>,
        ".",
    ],
    [
        "Register your app to receive your ",
        <strong key={"app_id"}>app_id</strong>,
        " or use ",
        <strong key={"app_id_1089"}>app_id 1089</strong>,
        " to test Deriv API.",
    ],
];
