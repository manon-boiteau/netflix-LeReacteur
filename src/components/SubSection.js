const SubSection = ({ title, images }) => {
  console.log("Titre :", title);
  console.log("Images :", images);
  console.log("Length :", images.length);

  return (
    <div>
      <h2>{title}</h2>
      <div className="list-img">
        {images.map((elem, index) => {
          return <img key={index} src={elem} alt="/" />;
        })}
      </div>
    </div>
  );
};

export default SubSection;
