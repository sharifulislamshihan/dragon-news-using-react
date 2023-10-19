import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='mb-7'>
                <h2 className="text-xl font-semibold mb-3">Login with</h2>
                <button className="btn w-full border-solid border-black mb-2 bg-white hover:border-blue-500 hover:text-blue-500">
                    <FaGoogle></FaGoogle>
                    Login with Google
                </button>
                <button className="btn w-full border-solid border-black mb-2 bg-white hover:border-blue-500 hover:text-blue-500">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>

            {/* Find us on */}
            <div className='my-10'>
                <h2 className="text-xl font-semibold mb-5">Find us on</h2>
                <a className='flex item-center gap-3 text-lg border rounded-t-lg mb-2' href=''>
                    <FaFacebook className='mr-2 mt-1'></FaFacebook>
                    <span>Facebook</span>
                </a>

                <a className='flex item-center gap-3 text-lg border rounded-t-lg mb-2' href=''>
                    <FaTwitter className='mr-2 mt-1'></FaTwitter>
                    <span>Twitter</span>
                </a>

                <a className='flex item-center gap-3 text-lg border rounded-t-lg mb-2' href=''>
                    <FaInstagram className='mr-2 mt-1'></FaInstagram>
                    <span>Instagram</span>
                </a>
                
            </div>

            {/* Q Zone */}

            <div className='my-10'>
                <h2 className="text-xl font-semibold mb-5">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;