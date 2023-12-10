import { Bars } from 'react-loader-spinner';
export const Loader = () => {
  return (
    <Bars
      height="80"
      width="80"
      color="#4d5ae5"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
