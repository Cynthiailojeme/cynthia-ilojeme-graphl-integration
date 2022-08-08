import React from "react";
import { Skeleton } from "antd";

const SkeletonLoader = () => {
  return <Skeleton active paragraph={{ rows: 4 }}/>;
};

export default SkeletonLoader;
