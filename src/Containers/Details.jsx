import { PokeImage, PokeStats } from "../Components";
const Details = () => {
  return (
    <>
      <section
        className={`px-8 py-2 sm:px-2 sm:pb-2 sm:pt-8 flex flex-row md:flex-col justify-between items-center`}
      >
        <PokeImage />
        <PokeStats />
      </section>
    </>
  );
};

export default Details;
