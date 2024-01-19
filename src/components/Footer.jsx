import './styles.css';

export const Footer = () => {
  return (
    <footer className='bottom-0 left-0 w-full'>
        <div className="content-container w-full footer-space">
            <div className="flex justify-start items-center footer-logo ">
                <img src="public\Logo-2.svg" alt="" />
                <label>ProgramCRUD</label>
            </div>

            <hr />

            <div className="flex justify-center items-center footer-ref">
                <a>© 2024 ClockSystem</a>
                <a>Terms of Service</a>
                <a>Privacy & Cookies policy</a>
            </div>
        </div>
    </footer>
  )
}
