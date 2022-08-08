import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import React from "react";

const Spinner = () => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, color: "#ea6852" }} spin />
  );

  return <Spin indicator={antIcon} />;
};

export default Spinner;
