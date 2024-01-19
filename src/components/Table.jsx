import { useState } from 'react';
import './styles.css';
import { deleteUser, getUsers } from '../helpers/usersApi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function setCSSLink() {
    var ss = document.createElement('link');
    ss.rel = "stylesheet";
    ss.href = "//cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css";
    document.head.appendChild(ss);
}

const parseDate = (date) => {
  const fechaParseada = new Date(date);

  const year = fechaParseada.getUTCFullYear();
  const month = fechaParseada.getUTCMonth() + 1;
  const day = fechaParseada.getUTCDate();
  
  const fechaFormateada = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
   
  return fechaFormateada
}

export const Table = () => {
 const [users, setUsers] = useState([]);
 const navigate = useNavigate();

 const getAllUsers = async() => {
  const newUsers = await getUsers();
  setUsers(newUsers);
 };

 useEffect(() => {
    getAllUsers();
    return () => {} 
  }, [])
 
  const delUser = async(userId) => {

    Swal.fire({
      title: "Estás seguro?",
      text: "No podrás deshacer este cambio!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then(async(result) => {
      if (result.isConfirmed) {
        let resp = await deleteUser(userId);
        Swal.fire({
          title: "Eliminado!",
          text: resp.message,
          icon: "success"
        }).then((result) => {
          getAllUsers();
        });
      }
    });

  }

  const actualizar = (nombre, correo, fecha, userId) => {
    const btnText = 'Actualizar';
    navigate(`/actualizar`, {state: {nombre, correo, fecha, userId, btnText}});
  }

  return (
    <div className='flex justify-center'> 
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Fecha de Nacimiento</th>
            <th className='text-center'>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {
            users.map( ({ UserId, UserName, Email, DateOfBirth }) => {
              return (
                <tr key={UserId}>
                  <td>{ UserId }</td>
                  <td>{ UserName }</td>
                  <td>{ Email }</td>
                  <td className='text-center'>{ parseDate(DateOfBirth) }</td>
                  <td className='flex justify-center gap-2'>
                    <button 
                      className='table-button'
                      onClick={() => actualizar(UserName, Email, DateOfBirth, UserId)}
                    >
                      <img src="public\edit.svg" alt="" />
                      <label htmlFor="">Editar</label>
                    </button>
                    <button 
                      className='table-button'
                      onClick={() => delUser(UserId)}
                    >
                      <img src="public\remove.svg" alt="" />
                      <label htmlFor="">Eliminar</label>
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}
