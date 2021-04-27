const SubSection = ({ title, images }) => {
  console.log("Titre :", title);
  console.log("Images :", images);
  console.log("Length :", images.length);

  // images.map((item) => {
  //   console.log(item);
  //   return item;
  // });

  // return "hello";

  return (
    <div>
      <h2>{title}</h2>
      <div className="list-img">
        {images.map((elem) => {
          const pic = elem;
          return <img src={pic} alt="/" />;
        })}
      </div>
    </div>
  );
};

export default SubSection;
