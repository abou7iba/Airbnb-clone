import { LiveData } from "../types/app";
import { getLive } from "../utils/api";
import LiveCard from "./LiveCard";
import MainHead from "./MainHead";

const Live = async () => {
   const liveData: LiveData = await getLive();

   console.log(liveData);
   
  return (
    <section className="pt-6">
      <MainHead title="LIVE" />
      
      {/* الحاوية التي تحتوي على البطاقات */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center pb-6">
        {liveData.map((item) => {
            return (
                <LiveCard key={item.img} img={item.img} title={item.title} />
            );
        })}
      </div>
    </section>
  );
};

export default Live;
