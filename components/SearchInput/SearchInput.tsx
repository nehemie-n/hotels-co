import { Input } from "antd";
import clsx from "clsx";
import styles from "./SearchInput.module.scss";

const { Search } = Input;

interface Props {
  size?: "large" | "middle";
  children?: any;
}
const onSearch = (value: string) => console.log(value);

export function SearchInput({ children, size = "middle" }: Props) {
  const classes = clsx({
    [styles.SearchInputSm]: size == "middle",
    [styles.SearchInputLg]: size === "large",
  });
  return (
    <div className={classes}>
      <Search
        size="large"
        loading
        placeholder="Search for a hotel"
        onSearch={onSearch}
        enterButton
      />
    </div>
  );
}
