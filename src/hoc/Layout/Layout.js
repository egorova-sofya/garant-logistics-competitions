import Header from "../../components/Header/Header";
import s from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={s.container}>{children}</main>
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
