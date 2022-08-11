import { useLocation, useParams } from "react-router-dom";

export const About = () => {
    const param = useParams();
    const location = useLocation();
    console.log(location);
    //console.log(param); //{}
    return (
      <>
        <div>This is About. {param.id} {param.name} {param.desc}</div>
        <button>Go to Home</button>
      </>
    );
  };