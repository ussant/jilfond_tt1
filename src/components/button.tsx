import React, {ReactNode} from 'react';
import './styles.scss'

enum ButtonType {
    primary="primary",
    success="success",
    danger="danger",
    warning="warning"
}

type ButtonProps = {
    children: ReactNode,
    type: keyof typeof ButtonType,
    min?: boolean,
    block?: boolean,
    large?: boolean,
    loading?: boolean,
    disabled?: boolean,
    outlined?: boolean,
}

export const Button = ({
    children,
    type = "primary",
    min,
    large,
    block,
    outlined,
    loading,
    disabled,
}: ButtonProps): JSX.Element => (
    <button
        className={`
            button
            ${type}
            ${min && "min"}
            ${large && "large"}
            ${block && "block"}
            ${disabled && "disabled"} 
            ${outlined && "outlined"} 
        `}
        disabled={disabled}>
        {loading ? <div className={"loading"}></div>: children}
    </button>
);
