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
        components: {
          Button: {
            size: 50,
            sizeLG: 60,
          },
        },
      }}
    >
      <div className={styles.PageLayout}>
        {/* nav */}
        <MainNav showSearch={showSearch}></MainNav>
        {/*  */}
        <div>{children}</div>
        {/* Footer */}
      </div>
    </ConfigProvider>
  );
};
