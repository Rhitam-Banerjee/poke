import { connect } from "../Constants";
import { logo } from "../assets";
const LogoContainer = () => {
  return (
    <div className="flex items-center justify-between gap-8 w-full">
      <div className="w-max flex-1 ">
        <img src={logo} alt="Logo" className="w-[150px]" />
      </div>
      <div className="w-1/5 sm:flex-1 max-w-[120px] sm:max-w-[70px]">
        <div className="flex items-center justify-between">
          {connect.map((connection) => {
            const { title, icon, link } = connection;
            return (
              <div key={title}>
                <a href={link}>
                  <img
                    src={icon}
                    alt={title}
                    className="w-[40px] sm:w-[30px]"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoContainer;
