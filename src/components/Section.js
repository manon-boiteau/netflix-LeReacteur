import SubSection from "./SubSection";

/* Import .json */
import users from "../users.json";
// console.log(users);

const Section = () => {
  return (
    <div className="wrapper">
      {users.map((elem, index) => {
        return (
          <div className="sub-section">
            <SubSection
              key={index}
              title={elem.category}
              images={elem.images}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Section;
