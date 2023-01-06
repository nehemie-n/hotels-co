import { ConfigProvider, Space } from "antd";
import IosDownloadImg from "../../../public/download/ios_download.png";
import PlayStoreDownloadImg from "../../../public/download/playstore_download.png";
import { AppLogo } from "../../UI";
import { MainNav } from "../MainNav/MainNav";
import styles from "./PageLayout.module.scss";

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
      <div className="hidden md:block">
        <MainNav showSearch={showSearch}></MainNav>
        <div className={styles.PageLayout}>
          {/* nav */}
          {/*  */}
          <div>{children}</div>
          {/* Footer */}
        </div>
      </div>
      <div className="block md:hidden">
        <MobileUnemplemented />
      </div>
    </ConfigProvider>
  );
};

function MobileUnemplemented() {
  return (
    <div className="min-h-screen px-12 py-12 flex flex-col justify-center items-center text-center gap-4">
      <AppLogo></AppLogo>
      <h2 className="text-4xl font-bold">Sorry!</h2>
      <div>
        <p>Mobile website is unoptimized</p>
        <p>Download our mobile apps for better experience!</p>
      </div>
      <div>
        <div>
          <Space direction="vertical">
            <a className="inline-block" href="">
              <button className="bg-transparent">
                <img className="h-12 lg:h-14" src={IosDownloadImg.src} alt="" />
              </button>
            </a>
            <a className="inline-block" href="">
              <button className="bg-transparent">
                <img
                  className="h-12 lg:h-14"
                  src={PlayStoreDownloadImg.src}
                  alt=""
                />
              </button>
            </a>
          </Space>
        </div>
      </div>
    </div>
  );
}
