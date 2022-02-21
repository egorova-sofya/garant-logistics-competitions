import Header from "../../components/Header/Header";
import s from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={s.container}>{children}</div>
    </div>
  );
};

export const withLayout = (Component) => {
  return function withLayoutComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
