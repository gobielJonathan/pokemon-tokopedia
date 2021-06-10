import styles from "@/styles/shimmer.module.css";
import cn from "classnames";

export default function Shimmer({ length = 3 }) {
  return (
    <>
      <div className={styles["wrapper"]}>
        <div
          className={cn("w-75", [styles["bar"], "rounded", styles["animate"]])}
        ></div>
        {new Array(length).fill(0).map((_, idx) => (
          <div
            key={idx}
            className={cn([styles["bar"], "rounded", styles["animate"]])}
          ></div>
        ))}
      </div>
    </>
  );
}
