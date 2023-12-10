export const CarCard = ({ car }) => {
  return (
    <h2>
      {car.make}
      {car.model},{car.year}
    </h2>
  );
};
