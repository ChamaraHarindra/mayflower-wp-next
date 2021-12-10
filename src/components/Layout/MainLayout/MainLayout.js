import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function MainLayout({ children, data }) {
  return (
    <>
      <Header
        header={data?.header}
        headerMenu={data?.headerMenu}
        pageTitle={data?.page?.title}
      />
      <main>{children}</main>
      <Footer footer={data?.footer} />
    </>
  );
}
