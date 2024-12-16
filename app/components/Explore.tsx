import { getExplore } from "../utils/api"; 
import { ExploreData } from "../types/app"; 
import ExploreCard from "./ExploreCard";  
import MainHead from "./MainHead";

const Explore = async () => {   
  const exploreData: ExploreData = await getExplore();     

  return (     
    <div className="container mx-auto p-5">       
      <MainHead title="Explore" />    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">   
        {exploreData.map((item) => {         
          return (  
            <ExploreCard 
              key={item.img} 
              img={item.img} 
              location={item.location} 
              distance={item.distance} 
            />
          );
        })}     
      </div>  
    </div>   
  ); 
};

export default Explore;
