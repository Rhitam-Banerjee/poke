import { LogoContainer, SearchInput } from "../Components";
import SectionWrapper from "../HOC/SectionWrapper";

const Header = () => {
  return (
    <SectionWrapper>
      <LogoContainer />
      <SearchInput />
    </SectionWrapper>
  );
};

export default Header;
