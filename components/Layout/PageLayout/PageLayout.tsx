import { MainNav } from "../MainNav/MainNav";
import { Screen } from "../Screen/Screen";
import styles from "./PageLayout.module.scss";
import { ConfigProvider, Radio, Checkbox } from "antd";

interface HomeLayoutProps {
  showSearch?: boolean;
  children?: any;
}
export const PageLayout = ({ children, showSearch }: HomeLayoutProps) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          paddingLG: 30,
          sizeLG: 60,
          sizeMD: 60,
        },
        components: {
          Input: {
            size: 60,
            sizeLG: 60,
          },
          Button: {
            size: 50,
            sizeLG: 60,
          },
        },
      }}
    >
      <MainNav showSearch={showSearch}></MainNav>
      <div className={styles.PageLayout}>
        {/* nav */}
        {/*  */}
        <div>{children}</div>
        {/* Footer */}
      </div>
    </ConfigProvider>
  );
};
