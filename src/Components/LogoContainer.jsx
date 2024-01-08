import { connect } from "../Constants";
import { logo } from "../assets";
const LogoContainer = () => {
  return (
    <div className="flex items-center justify-between gap-8 w-full">
      <div className="w-max flex-1 ">
        <img src={logo} alt="Logo" className="w-[150px] sm:w-[100px]" />
      </div>
      <div className="w-1/5 sm:flex-1 max-w-[120px] sm:max-w-[70px]">
        <div className="flex items-center justify-between">
          {connect.map((connection, index) => {
            const { title, icon, link } = connection;
            return (
              <div key={index}>
                <a href={link} className="felx items-center justify-center">
                  <img
                    src={icon}
                    alt={title}
                    className={`${
                      index === 1
                        ? "w-[35px] sm:w-[25px]"
                        : "w-[40px] sm:w-[30px]"
                    }`}
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
