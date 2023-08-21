import { productsData } from '../../productsData.js';
import ImageCardLine from '../ImageCardLine';

export default function Products() {
  return (
    <>
      <h1>取り扱い製品一覧</h1>
      <ImageCardLine products={productsData} />
    </>
  )
}