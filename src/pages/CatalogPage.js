import { CarsList } from '../components/CarList/CarsList';

export default function CatalogPage() {
  return (
    <>
      <h2>Catalog</h2>
      <div>
        {/*<Filter></Filter>*/}
        <CarsList></CarsList>
      </div>
    </>
  );
}
