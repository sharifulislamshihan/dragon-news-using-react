import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className=' text-center my-6 '>
            <img className='mx-auto' src={logo} alt="" />
            <p className='mt-7 mb-3 text-xl text-[#706F6F] font-semibold '>Journalism Without Fear or Favour</p>
            <p className=' font-normal text-lg text-black '>{moment().format("dddd,")}<span className='font-normal text-[#706F6F]'> {moment().format("MMMM D, YYYY")}</span> </p>
        </div>
    );
};

export default Header;