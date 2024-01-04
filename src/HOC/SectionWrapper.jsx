/* eslint-disable react/prop-types */
const SectionWrapper = ({ children }) => {
  return (
    <div className="px-8 py-2 flex flex-col justify-center items-center">
      {children}
    </div>
  );
};

export default SectionWrapper;
