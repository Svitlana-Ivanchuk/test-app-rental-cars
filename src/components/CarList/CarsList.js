import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';
import { selectCars, selectCatalog } from '../../redux/cars/selectors';
import { CarCard } from 'components/CarCard/CarCard';
//import { StyledCarCard, StyledList } from './CarList.styled';

export const CarsList = () => {
  const { catalog, error, isLoading } = useSelector(selectCatalog);
  const dispatch = useDispatch();

  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars);
  }, [dispatch]);

  console.log(cars);
  console.log(catalog);

  return (
    <>
      <ul>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        {cars.map(car => (
          <li key={car.id}>
            <CarCard contact={car} />
          </li>
        ))}
      </ul>
    </>
  );
};
