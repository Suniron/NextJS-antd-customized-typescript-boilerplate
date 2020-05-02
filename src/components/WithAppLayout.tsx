import React from "react";
import { Layout } from "antd";
import CustomFooter from "./CustomFooter";
import CustomHeader from "./CustomHeader";

const { Header, Footer, Content } = Layout;

export default ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Put Side menu here (Sider) */}

      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{ padding: 0, textAlign: "center" }}
        >
          <CustomHeader />
        </Header>
        <Content style={{ margin: "0 16px" }}>{children}</Content>
        <Footer style={{ textAlign: "center" }}>
          <CustomFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};
