import { RotatingSquare } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <RotatingSquare
      height="100"
      width="200"
      color="#565a56"
      ariaLabel="rotating-square-loading"
      strokeWidth="4"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};