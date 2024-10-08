import * as React from "react";

import styles from "./button.module.scss";

export type ButtonType = "primary" | "danger" | null;

export function IconButton(props: {
  onClick?: () => void;
  icon?: JSX.Element;
  type?: ButtonType;
  text?: string;
  bordered?: boolean;
  shadow?: boolean;
  className?: string;
  title?: string;
  disabled?: boolean;
  tabIndex?: number;
  autoFocus?: boolean;
  size?: string;
}) {
  return (
    <React.Fragment>
      {props.size === undefined && (
        <button
          className={
            styles["icon-button"] +
            ` ${props.bordered && styles.border} ${
              props.shadow && styles.shadow
            } ${props.className ?? ""} clickable ${styles[props.type ?? ""]}`
          }
          onClick={props.onClick}
          title={props.title}
          disabled={props.disabled}
          role="button"
          tabIndex={props.tabIndex}
          autoFocus={props.autoFocus}
        >
          {props.icon && (
            <div
              className={
                styles["icon-button-icon"] +
                ` ${props.type === "primary" && "no-dark"}`
              }
            >
              {props.icon}
            </div>
          )}

          {props.text && (
            <div className={styles["icon-button-text"]}>{props.text}</div>
          )}
        </button>
      )}
      {props.size === "big" && (
        <button
          className={
            styles["icon-button"] +
            ` ${props.bordered && styles.border} ${
              props.shadow && styles.shadow
            } ${props.className ?? ""} clickable ${styles[props.type ?? ""]}`
          }
          onClick={props.onClick}
          title={props.title}
          disabled={props.disabled}
          role="button"
          tabIndex={props.tabIndex}
          autoFocus={props.autoFocus}
        >
          {props.icon && (
            <div
              className={
                styles["icon-button-icon"] +
                ` ${props.type === "primary" && "no-dark"}`
              }
            >
              {props.icon}
            </div>
          )}

          {props.text && (
            <div className={styles["icon-button-text-big"]}>{props.text}</div>
          )}
        </button>
      )}
    </React.Fragment>
  );
}
