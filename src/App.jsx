import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";

function App() {


  return (

      <div className="bg-slate-100 min-h-screen">
          {/*<nav className="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">*/}
          {/*    <div*/}
          {/*        className="container mx-auto flex flex-wrap items-center justify-between">*/}
          {/*        <a href="https://laraveller.com/" className="flex items-center">*/}
          {/*            Laraveller*/}
          {/*        </a>*/}

          {/*        <div*/}
          {/*            className="hidden w-full md:block md:w-auto">*/}
          {/*            <ul*/}
          {/*                className="*/}
          {/*  mt-4*/}
          {/*  flex flex-col*/}
          {/*  rounded-lg*/}
          {/*  p-4*/}
          {/*  md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">*/}
          {/*                <li>*/}
          {/*                    <Link*/}
          {/*                        to="/"*/}
          {/*                        class="block rounded py-2 pr-4 pl-3 text-white"*/}
          {/*                        aria-current="page"*/}
          {/*                    >Home</Link>*/}
          {/*                </li>*/}

          {/*                <li>*/}
          {/*                    <Link*/}
          {/*                        to="/login"*/}
          {/*                        class="block rounded py-2 pr-4 pl-3 text-white"*/}
          {/*                        aria-current="page"*/}
          {/*                    >Login</Link>*/}
          {/*                </li>*/}
          {/*                <li>*/}
          {/*                    <Link*/}
          {/*                        to="/register"*/}
          {/*                        class="block rounded py-2 pr-4 pl-3 text-white"*/}
          {/*                        aria-current="page"*/}
          {/*                    >Register</Link>*/}
          {/*                </li>*/}

          {/*            </ul>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</nav>*/}
          {/*<div className="Group1 w-[538px] h-[76px] left-[268px] top-[851px] absolute">*/}
          {/*    <div className="Rectangle16 w-[538px] h-[76px] left-0 top-0 absolute bg-[#005b7b] rounded-[40px]"/>*/}
          {/*    <div*/}
          {/*        className=" left-[169px] top-[16px] absolute text-center text-white text-4xl font-normal font-['Inter']">تسجيل*/}
          {/*        الدخول*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div*/}
          {/*    className=" left-[1292px] top-[164px] absolute text-center text-[#005b7b] text-4xl font-semibold font-['Inter']">انشاء*/}
          {/*    حساب*/}
          {/*</div>*/}
          <div
              className="Rectangle83 w-[1600px] h-[74px] left-0 top-0 absolute bg-[#005b7b] rounded-bl-[10px] rounded-br-[10px]"/>
          <div
              className=" w-[47px] left-[878px] top-[33px] absolute text-center text-white text-[15px] font-semibold font-['Inter']">التقارير
          </div>
          <div
              className=" w-[118px] left-[1155px] top-[33px] absolute text-center text-white text-[15px] font-semibold font-['Inter']">الصفحة
              الرئيسية
          </div>
          <div
              className=" w-[61px] left-[1009px] top-[33px] absolute text-center text-white text-[15px] font-semibold font-['Inter']">الخدمات
          </div>
          <div
              className=" w-[53px] left-[740px] top-[33px] absolute text-center text-white text-[15px] font-semibold font-['Inter']">الدعم
          </div>
          <div
              className=" w-[113px] left-[576px] top-[33px] absolute text-center text-white text-[15px] font-semibold font-['Inter']">الأسئلة
              المتداولة
          </div>
          <div
              className="Rectangle84 w-[206px] h-[35px] left-[176px] top-[19px] absolute bg-white rounded-[15px]"/>
          <div
              className=" left-[231px] top-[27px] absolute text-center text-[#04799d] text-base font-normal font-['Inter']">تسجيل
              الدخول
          </div>
          <div
              className=" left-[83px] top-[29px] absolute text-center text-white text-xs font-normal font-['Inter']">العربية
          </div>
          <div className="max-w-7xl mx-auto mt-6">
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
              </Routes>
          </div>
      </div>

  )
}

export default App
