import { useLocation } from "react-router-dom";
import { UserCard, Header, Footer } from "../components"
import './styles.css';

export const NuevoUsuario = () => {

  const { state } = useLocation();
  const { btnText } = state;

  return (
    <>
    <img src="public\gradiente-1.png" alt="" className="gradiente"/>
      <div className="flex flex-col justify-center items-center relative">
          <Header />
          
          <div className="mb-20">
            <UserCard 
              btnText={btnText}
            />
          </div>

          <Footer />
      </div>
    </>
  )
}
