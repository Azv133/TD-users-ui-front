import { useNavigate } from 'react-router-dom';
import './styles.css';
import { useState } from 'react';
import { addUser, updateUser } from '../helpers/usersApi';
import Swal from 'sweetalert2';

export const UserCard = ({ name = '', email = '', date = '', userId = '', btnText }) => {
    const navigate = useNavigate();

    const [nombre, setName] = useState(name);
    const [correo, setEmail] = useState(email);
    const [fecha, setDate] = useState(date);

    const onNameChange = ({target}) => {
        setName(target.value)
    }
    const onEmailChange = ({target}) => {
        setEmail(target.value)
    }
    const onDateChange = ({target}) => {
        setDate(target.value)
    }

    const upUser = async(UserName, Email, DateOfBirth, userId) => {
        const data = {
            UserName, 
            Email, 
            DateOfBirth
        }
        let resp = await updateUser(userId, data)
        Swal.fire({
            title: "Éxito!",
            text: resp.message,
            icon: "success",
          }).then((result) => {
              navigate('/');
          });
    }

    const insertUser = async(UserName, Email, DateOfBirth) => {
        const data = {
            UserName, 
            Email, 
            DateOfBirth
        }
        let resp = await addUser(data);
        Swal.fire({
            title: "Éxito!",
            text: resp.message,
            icon: "success",
          }).then((result) => {
            navigate('/');
        });
    }


    

    return (
    <>
        <div className='user-card'>
            <div className='user-card-content'>
                <h2>Registrar nuevo usuario</h2>
                <img src="public\user.svg" alt="" />

                <div className='form-container'>

                    <div className='form-content'>
                        <label htmlFor="">Nombre</label>
                        <input 
                            type="text" 
                            value={nombre}
                            onChange={onNameChange}
                        />
                    </div>
                    <div className='form-content'>
                        <label htmlFor="">Correo</label>
                        <input 
                            type="email"
                            value={correo}
                            onChange={onEmailChange}
                        />
                    </div>
                    <div className='form-content'>
                        <label htmlFor="">Fecha de Nacimiento</label>
                        <input 
                            type="date"
                            value={fecha}
                            onChange={onDateChange}
                        />
                    </div>
                </div>


                <div className='flex flex-column justify-center gap-6 mt-8'>
                    <button 
                        className='card-button'
                        onClick={() => {navigate('/', {state: {agregar: false}})}}
                    >
                        <img src="public\left.svg" alt="" />
                        <label>Volver</label>
                    </button>
                    <button 
                        className='card-button'
                        onClick={() => {
                            if(btnText === 'Actualizar'){ upUser(nombre, correo, fecha, userId) }
                            if(btnText === 'Agregar'){ insertUser(nombre, correo, fecha) }
                        }}
                    >
                        <img src="public\Add.svg" alt="" />
                        <label>{ btnText }</label>
                    </button>
                </div>
            </div>
        </div>    
    </>
  )
}
