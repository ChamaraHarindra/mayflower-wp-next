import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MainLayout({ children, data }) {
  return (
    <>
      <Header
        header={data?.header}
        headerMenu={data?.headerMenu}
        pageTitle={data ? data?.page?.title : "404 - Page Not Found"}
      />
      <main>{children}</main>
      <Footer footer={data?.footer} />
    </>
  );
}
