import { useLocation } from "react-router-dom";
import { UserCard, Header, Footer } from "../components"
import './styles.css';

const parseDate = (date) => {
  const fechaParseada = new Date(date);

  const year = fechaParseada.getUTCFullYear();
  const month = fechaParseada.getUTCMonth() + 1;
  const day = fechaParseada.getUTCDate();
  
  const fechaFormateada = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
   
  return fechaFormateada
}

export const ActualizarUsuario = () => {

  const { state } = useLocation();
  const { nombre, correo, fecha, userId, btnText } = state;

  const fechaP = parseDate(fecha);

  return (
    <>
      <img src="public\gradiente-1.png" alt="" className="gradiente"/>
      <div className="flex flex-col justify-center items-center relative">
          <Header />
          
          <div className="mb-20">
            <UserCard 
              name={nombre}
              email={correo}
              date={fechaP}
              userId={userId}
              btnText={btnText}
            />
          </div>

          <Footer />
      </div>
    </>
  )
}
