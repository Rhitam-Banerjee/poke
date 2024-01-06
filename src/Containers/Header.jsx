import { LogoContainer, SearchInput } from "../Components";

const Header = () => {
  return (
    <section className="px-8 py-2 flex flex-col justify-center items-center">
      <LogoContainer />
      <SearchInput />
    </section>
  );
};

export default Header;
