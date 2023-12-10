//import { useDispatch } from 'react-redux';

import { DivStyled } from './CarCard.styled';

export const CarCard = ({ car }) => {
  const {
    id,
    img,
    make,
    model,
    year,
    address,
    rentalCompany,
    type,
    functionalities,
  } = car;

  console.log(address);
  const city = address.split(' ').slice(3, 4);
  const country = address.split(' ').slice(4);
  console.log(city);
  console.log(country);
  //const dispatch = useDispatch();
  return (
    <DivStyled>
      <image src={img} alt={make} />
      <div>
        <h5>
          {make} {model}, {year}
        </h5>
        <p>
          {city}|{country}|{rentalCompany}| Premium|{type}|{model}|{id}|
          {functionalities[0]}
        </p>
        <button>Learn more</button>
      </div>
    </DivStyled>
  );
};
