import Header from '@/header/layout';
import SubHeadDescription from '@/head-description/layout';
import ProductPage from '@/product-page/layout';
import Footer from '@/footer/layout';
import './index.css'

export default function Home() {
  return (
    <div className="app-container">
      <Header />
      <SubHeadDescription />
      <ProductPage />
      <Footer />
    </div>
  );
}
