import type { PropsWithChildren } from "react";
import classNames from "../../../shared/lib/classNames/classNames";
import cssMod from "./PageLoader.module.scss";
import { Loader } from "../../Loader/ui/Loader";
interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PropsWithChildren<PageLoaderProps>) => {
  const { className } = props;

  return (
    <div className={classNames([cssMod.PageLoader], {})}>
      <Loader />
    </div>
  );
};
