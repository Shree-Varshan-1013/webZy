import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const navigate = useNavigate();

    const { isDark } = useSelector((state) => state.global);

    return (
        <footer className="text-gray-600 body-font" name="contact">
            <div className="bg-gray-100 dark:bg-slate-900">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 textWhite p-2 bg-purple2 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span onClick={() => navigate('/')} className="cursor-pointer ml-3 text-xl color-caramel dark:text-white font-anuphan">WebZy</span>
                    </a>
                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4 font-anuphan">© 2023 WebZy —
                        <a href="https://twitter.com/knyttneve"  rel="noopener noreferrer" className="text-gray-600 ml-1 font-anuphan" target="_blank">@frozenFlames</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a className="text-gray-500" href='https://github.com/Shree-Varshan-1013'rel="noreferrer" target='_blank'>
                            <img src="/img/github.svg" />
                        </a>
                        <a className="ml-3 text-gray-500" href="#"rel="noreferrer" target='_blank'>
                            <img src="/img/twitter.svg" />
                        </a>
                        <a className="ml-3 text-gray-500" href="https://www.instagram.com/f_r_o_z_e_n_f_l_a_m_e_s1013/" rel="noreferrer" target='_blank'>
                            <img src="/img/instagram.svg" />
                        </a>
                        <a className="ml-3 text-gray-500"href="https://www.linkedin.com/in/shree-varshan-g/" rel="noreferrer" target='_blank'>
                            <img src="/img/linkedin.svg" />
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer