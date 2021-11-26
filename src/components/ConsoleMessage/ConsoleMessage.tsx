import CodeContent from "components/common/CodeContent/CodeContent";
import React from "react";
import style from "components/PlaygroundComponent/PlaygroundComponent.module.scss";

const ConsoleMessage: React.FC<{ message: any }> = ({ message }) => {
    const payload = JSON.stringify(message.body, null, 4);
    return (
        <div className={style[message.type]}>
            <CodeContent lang="json" data={payload}></CodeContent>
        </div>
    );
};

export default ConsoleMessage;
