import { AppLogo } from "../../UI/AppLogo";
import { Screen } from "../Screen/Screen";
import styles from "./MainNav.module.scss";

import { Button, Space, Affix } from "antd";
import Link from "next/link";
import { SearchInput } from "../../SearchInput/SearchInput";

interface Props {
  showSearch?: boolean;
  children?: any;
}

const links = [
  {
    label: "Pricing",
    link: "/pricing",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Resources",
    link: "/resources",
  },
];
export const MainNav = ({ children, showSearch }: Props) => {
  return (
    <Affix offsetTop={0}>
      <nav className={styles.MainNav}>
        <Screen>
          <div className={styles.Main_Nav_H}>
            <AppLogo></AppLogo>
            {/*  */}
            <div>
              {showSearch ? (
                <SearchInput ></SearchInput>
              ) : (
                <div className={styles.Main_Nav_Links}>
                  {links.map((link) => {
                    return (
                      <Link key={link.label + link.link} href={link.link}>
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
            {/* Actions */}
            <div className={styles.Main_Nav_Actions}>
              <Space size={20}>
                <Button size="large">Login/Signup</Button>
                <Button size="large" type="primary">
                  Add Room
                </Button>
              </Space>
            </div>
          </div>
        </Screen>
      </nav>
    </Affix>
  );
};
