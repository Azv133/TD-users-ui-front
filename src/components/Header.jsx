import { CenterButtons } from "./CenterButtons";
import './styles.css';

export const Header = () => {
  return (
    <div className="header flex justify-between items-center">
      <div className="logo">
        <img src="public\Logo-1.svg" alt="" />
        <label>ProgramCRUD</label>
      </div>

      <CenterButtons />

      <button className="btn-delete">
        <img src="public\delete.svg" alt="" />
        <label>Limpiar datos</label>
      </button>
    </div>
  )
}
