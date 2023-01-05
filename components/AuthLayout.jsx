import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import Head from "next/head";
import { Helmet } from "react-helmet";


const AuthLayout = ({ children }) => {
  return (
    <>    
       <div className="wrapper">
      <div className="block-center mt-4 wd-xl">
         <div className="card card-flat">
            <div className="card-header text-center bg-dark">
              <Link href="/login">
              <a ><img className="block-center rounded" src="/logo.png" width={200} alt="Image"/></a></Link>
            </div>
            <div className="card-body">
              
               {children}
              
            </div>
         </div>
         <div className="p-3 text-center"><span className="mr-2">&copy;</span><span>2022</span><span className="mr-2">-</span><span>Acre Africa</span><br/></div>
      </div>
   </div>
  
    </>
  );
};

export default AuthLayout;
