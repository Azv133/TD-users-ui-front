import { Header, Table, Footer } from "../components"
import './styles.css';

export const Registros = () => {
  return (
    <>
        <img src="public\gradiente-1.png" alt="" className="gradiente"/>
        <div className="flex flex-col justify-center items-center relative">
            <Header />

            <div className="flex flex-col justify-center items-center titles">
                <h1>
                    Registros <br />
                    ProgramCRUD
                </h1>
                <p>¡Bienvenidos a ProgramCRUD! Aquí encontrarás una plataforma segura y eficiente para todos tus registros. ¡Vamos a explorar juntos las posibilidades de ProgramCRUD! ¡Empecemos!</p>
            </div>

            <div className="span-box mb-12">
                <span>
                    Empieza a interactuar
                </span>
            </div>
            
            <div className="mb-20">
                <Table />
            </div>

            <Footer />
        </div>
    </>
  )
}
