import { useParams } from 'react-router-dom';

import ProductDetail from '../components/product-detail/ProductDetail';

import useFetchProduct from '../hooks/useFetchProduct';

// 상품 상세 페이지 보여주기
export default function ProductDetailPage() {
  const params = useParams();

  const { loading, error } = useFetchProduct({
    productId: String(params.id),
  });

  if (loading) {
    return (
      <p>Loading...</p>
    );
  }

  if (error) {
    return (
      <p>Error!</p>
    );
  }

  return (
    <ProductDetail />
  );
}
