import Btn from "../atoms/Btn";

const Commercial = () => {
  return (
    <div className="container mx-auto my-4">
      <div className="flex flex-row border border-gray-400 rounded-lg">
        <div className="flex-shrink-0 w-1/2">
          <img src="" alt="" />
        </div>
        <div className="flex-shrink-0 w-1/2 bg-white p-4 rounded-r-lg justify-center">
          <p>Hola uqe hace</p>
          <div className="flex flex-col">
            <Btn
              bg={"w-32 h-16 bg-white rounded hover:bg-mycolor"}
              nameButton={"Lista Card"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
