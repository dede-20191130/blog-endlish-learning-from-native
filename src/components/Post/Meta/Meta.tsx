import React from "react";

import * as styles from "./Meta.module.scss";

interface Props {
  date: string;
}

const Meta: React.FC<Props> = ({ date }: Props) => (
  <div className={styles.meta}>
    <p className={styles.date}>
      {new Date(date).toLocaleDateString("ja", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
      {" "}に公開されました。
    </p>
  </div>
);

export default Meta;
