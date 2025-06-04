import LocalDescription from "../molecules/LocalDescription";
import Mapa from "../molecules/Mapa";

const OurLocal = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
      <div className="order-2">
        <div className="">
          <Mapa />
        </div>
      </div>
      <div className="flex order-1 flex-row">
        <LocalDescription />
      </div>
    </div>
  );
};

export default OurLocal;
