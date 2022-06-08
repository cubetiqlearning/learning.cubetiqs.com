import {
  Loading as NLoading,
  LoadingProps as NLoadingProps,
} from "@nextui-org/react";
import React from "react";

export interface LoadingProps extends NLoadingProps {}

const Loading: React.FC<LoadingProps> = (props) => {
  return <NLoading {...props} />;
};

export default Loading;
