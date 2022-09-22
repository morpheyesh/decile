import React from "react";
import { boolean } from "yup";
import { classNames } from "../../../utils/classnames";
import Loading from "../../individual/Loading";
import Footer from "../Footer";

type Props = {
  pageLoading?: boolean;
  footer?: boolean;
  padding?: boolean;
};

const PageLayout: React.FC<Props> = ({
  children,
  pageLoading = false,
  footer = false,
  padding = true,
}) => {
  return pageLoading ? (
    <Loading />
  ) : (
    <div
      className={classNames(
        padding ? "px-4 pb-4 sm:px-6" : "",
        "flex flex-col flex-grow pt-2"
      )}
    >
      {children}
    </div>
  );
};

export default PageLayout;
