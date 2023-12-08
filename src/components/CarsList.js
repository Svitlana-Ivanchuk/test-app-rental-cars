import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from 'redux/cars/operations';
import { selectCars } from 'redux/cars/selectors';

export const CarsList = () => {
  const { items, isLoading, error } = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars);
  }, [dispatch]);

  return <></>;
};
