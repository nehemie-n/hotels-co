import classNames from "classnames";
import styles from "./Screen.module.scss";
import clsx from "clsx";

interface ScreenProps {
  wide?: boolean;
  children?: any;
}
export const Screen = ({ children, wide = false }: ScreenProps) => {
  const classList = clsx({
    [styles.MainNav]: true,
    [styles.MainNav_Wide]: wide,
    [styles.MainNav_Shallow]: !wide,
  });
  return <div className={classList}>{children}</div>;
};
