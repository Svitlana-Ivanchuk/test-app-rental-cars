import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';
import { selectCars, selectCatalog } from '../../redux/cars/selectors';
import { CarCard } from 'components/CarCard/CarCard';
import { StyledCarCard, StyledList } from './CarList.styled';
//import { StyledCarCard, StyledList } from './CarList.styled';

export const CarsList = () => {
  const { catalog, error, isLoading } = useSelector(selectCars);
  const cars = useSelector(selectCars);
  //const dispatch = useDispatch();

  //useEffect(() => {
  //  dispatch(fetchCars);
  //}, [dispatch]);

  console.log(cars);
  console.log(catalog);

  return (
    <>
      <StyledList>
        {isLoading && <p>Loading tasks...</p>}
        {error && <p>{error}</p>}
        {catalog.map(car => (
          <StyledCarCard key={car.id}>
            <CarCard car={car} />
          </StyledCarCard>
        ))}
      </StyledList>
    </>
  );
};
