import { Layout, Button } from "antd";
const { Header, Content, Footer } = Layout;
import "./styles.css";

export default () => {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <h1>Règles de confidentialités</h1>

        <p>
          Vous pouvez télécharger les règles concernant la confidentialité en
          cliquant sur le bouton ci-dessous.
        </p>
        <a href={"/PrivacyPolicy.pdf"} download>
          <Button>Télécharger</Button>
        </a>
      </Content>
      <Footer></Footer>
    </Layout>
  );
};
