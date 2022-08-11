import { useNavigate } from "react-router-dom";

export const Home = () => {

  const navigate = useNavigate();  
  
  const handleNavigation = () => {
      navigate('/about', {state: {id: '1', name: 'dummy', desc: 'desc'}});
  }

  const handleNavigationToSpecific = () => {
      navigate('/about/1/dummy/desc');
  }

  return (
    <>
      <div>This is home.</div>
      <button onClick={handleNavigation}>Go to About</button>
      <button onClick={handleNavigationToSpecific}>Go to About Specific</button>
    </>
  );
};
