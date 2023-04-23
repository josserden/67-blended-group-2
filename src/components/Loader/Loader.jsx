import { Dna } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className="flex justify-center">
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

export default Loader;
