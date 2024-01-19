import { useLocation, useNavigate } from 'react-router-dom';
import './styles.css';

let agregar = false;

export const CenterButtons = () => {

  const { state } = useLocation();
  if (state && state.agregar) {
    agregar = state.agregar;
  }else{
    agregar = false;
  }

  const navigate = useNavigate();

  return (
    <span className='centerButtons'>
        <button 
          className={ agregar ? 'btn-left2' :  'btn-left' }
          onClick={() => navigate('/', {state: {agregar: false}})}
        >
            <img src="public\file.svg" alt="" />
            <label>Registros</label>
        </button>
        <button 
          className={ agregar ? 'btn-right2' :  'btn-right' }
          onClick={() => {

            navigate('/registrar', {state: {btnText: 'Agregar', agregar: true}})
          }}
        >
            <img src="public\Add.svg" alt="" />
            <label>Agregar Usuario</label>
        </button>
    </span>
  )
}
