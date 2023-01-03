import { Input } from "antd";
import clsx from "clsx";
import styles from "./SearchInput.module.scss";

const { Search } = Input;

interface Props {
  size?: "large" | "middle";
  children?: any;
}

export function SearchInput({ children, size = "middle" }: Props) {
  const classes = clsx({
    [styles.SearchInputSm]: false,
  });
  return (
    <Search
      className={classes}
      placeholder="Search for a room"
      enterButton="Search"
      size={size}
      loading
    />
  );
}
