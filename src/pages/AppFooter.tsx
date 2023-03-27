import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
// import { AppLogo } from "../constants/image";


const AppFooter = () => {
    return (
        <footer className="text-gray-400 bg-sky-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a href='/' className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                    {/* <img src={AppLogo.png} alt='' height={50} width={50}></img> */}
                    <span className="ml-3 text-xl">VVOWSF</span>
                </a>
                <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2022 Vasai Virar Open Water Swimming Foundation —
                    <a href="https://twitter.com/knyttneve" className="text-white ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start items-center">
                    <a href='/' className="text-white">
                        <BsFacebook className='hover:h-6 hover:w-6' />
                    </a>
                    <a href='/' className="ml-3 text-white">
                        <BsTwitter className='hover:h-6 hover:w-6' />
                    </a>
                    <a href='/' className="ml-3 text-white">
                        <BsInstagram className='hover:h-6 hover:w-6' />
                    </a>
                </span>
            </div>
        </footer>
    )
}

export default AppFooter
