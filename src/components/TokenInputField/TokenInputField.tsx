import React, { useEffect, useState } from "react";
import Button from "../common/Button/Button";
import style from "./TokenInputField.module.scss";

type TokenInputFieldPropsType = {
    isAppRegistration?: boolean;
    label?: string;
    sendTokenToJSON: (token: string) => void;
    token: string;
};

const TokenInputField: React.FC<TokenInputFieldPropsType> = ({ isAppRegistration, label, sendTokenToJSON, token }) => {
    const [_token, setToken] = useState(token);

    useEffect(() => {
        if (!_token) {
            setToken(token);
        }
    }, [token])

    return (
        <fieldset id="api-token-fieldset" className={style["api-token-fieldset"]}>
            <div className={style["api-token-wrapper"]}>
                {isAppRegistration ? <p className={style["helper-label"]}>{label}</p> : null}
                <input
                    type="text"
                    id="api-token"
                    className={isAppRegistration ? style["api-token-input-registration"] : style["api-token-input"]}
                    placeholder="API Token"
                    value={_token}
                    onChange={e => setToken(e.currentTarget.value)}
                />
                <Button
                    id="send-auth-manually-btn"
                    className={`${style["btn-authenticate"]} ${style.bold}`}
                    text="Authenticate"
                    clickHandler={() => sendTokenToJSON?.(_token)}
                />
            </div>
        </fieldset>
    );
};

export default React.memo(TokenInputField);
