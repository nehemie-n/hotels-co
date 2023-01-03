import Image from "next/image";
import Link from "next/link";
import styles from "./AppLogo.module.scss";

interface Props {
  size?: number;
}
export function AppLogo({ size = 30 }: Props) {
  return (
    <Link href={"/"}>
      <div className={styles.AppLogo}>
        <Image
          src={"thirteen.svg"}
          height={size}
          width={30}
          style={{ width: "auto", height: "auto" }}
          alt="Hotels&Co"
        ></Image>
        <h2>Hotels&Co</h2>
      </div>
    </Link>
  );
}
