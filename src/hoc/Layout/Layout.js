import Header from "../../components/Header/Header";

const Layout = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header className={s.header} />
      <div className={s.body}>{children}</div>
    </div>
  );
};

export const withLayout = () => {
  return function withLayoutComponent(props) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
