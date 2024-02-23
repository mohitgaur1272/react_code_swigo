import { Home2ModalboxArr } from "../elements/JsonData";

const Home2Modalbox = () => {
  return (
    <div className="col-lg-12">
      <div className="client-logo-wrapper">
        {Home2ModalboxArr.map(({ img, img2 }, ind) => (
          <div className="clients-logo aos-item aos-init aos-animate" key={ind}>
            <img className="logo-main" src={img} alt="" />
            <img className="logo-hover" src={img2} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home2Modalbox;
