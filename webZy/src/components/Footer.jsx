import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    const { isDark } = useSelector((state) => state.global);

    return (
        <footer className="select-none text-gray-600 body-font" name="contact">
            <div className="bg-gray-100 dark:bg-slate-900">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <img src="/assets/phone2-light.png" width={40} />
                        <span onClick={() => navigate('/')} className="cursor-pointer ml-3 text-xl color-caramel dark:text-white font-anuphan">WebZy</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 font-anuphan dark:text-white">© 2023 WebZy —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1 font-anuphan dark:text-white" target="_blank">@frozenFlames</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500" href='https://github.com/Shree-Varshan-1013' rel="noreferrer" target='_blank'>
                            <img src="/img/github.svg" />
                        </a>
                        <a className="ml-3 text-gray-500" href="#" rel="noreferrer" target='_blank'>
                            <img src="/img/twitter.svg" />
                        </a>
                        <a className="ml-3 text-gray-500" href="https://www.instagram.com/f_r_o_z_e_n_f_l_a_m_e_s1013/" rel="noreferrer" target='_blank'>
                            <img src="/img/instagram.svg" />
                        </a>
                        <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/shree-varshan-g/" rel="noreferrer" target='_blank'>
                            <img src="/img/linkedin.svg" />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer