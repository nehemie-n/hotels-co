import { Input } from "antd";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./SearchInput.module.scss";

const { Search } = Input;

interface Props {
  size?: "large" | "middle";
  children?: any;
}

export function SearchInput({ children, size = "middle" }: Props) {
  /**
   * Navigate to search results
   */
  const router = useRouter();
  const onSearch = (value: string) => {
    router.push(`/results/${value}`);
  };

  /**
   * If it is being used on search page
   */
  const [value, setValue] = useState<string>();
  useEffect(() => {
    if (router.isReady) {
      setValue(router.query.txt as string);
    }
  }, [router.isReady]);

  const classes = clsx({
    [styles.SearchInputSm]: size == "middle",
    [styles.SearchInputLg]: size === "large",
  });
  return (
    <div className={classes}>
      <Search
        value={value}
        size="large"
        placeholder="Search for a hotel"
        onSearch={onSearch}
        onChange={(v)=> setValue(v.target.value)}
        enterButton
      />
    </div>
  );
}
