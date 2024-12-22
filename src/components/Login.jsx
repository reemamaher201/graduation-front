
import {Link,useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "../api/axios.js";

const Login =()=> {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const navigate = useNavigate();

    const handleLogin = async (event)=>{
        event.preventDefault();
        try {
            await axios.post('/login',{email,password});
            setEmail("")
            setPassword("")
            navigate("/")

        }catch (error) {
console.log(error)
        }
    };
    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[120px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div
                            className="
              relative
              mx-auto
              max-w-[525px]
              overflow-hidden

              bg-white
              py-16
              px-10
              text-center
              sm:px-12
              md:px-[60px]
              rounded-[50px]
              shadow
            "
                        >
                            <div className="mb-10 text-center md:mb-16">تسجيل الدخول</div>
                            <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    placeholder="Email"
                                    className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                                />
                                <div  className="flex">
                  <span className="text-red-400 text-sm m-2 p-2">error</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    placeholder="Password"
                                    className="
                    bordder-[#E9EDF4]
                    w-full
                    rounded-md
                    border
                    bg-[#FCFDFE]
                    py-3
                    px-5
                    text-base text-body-color
                    placeholder-[#ACB6BE]
                    outline-none
                    focus:border-primary
                    focus-visible:shadow-none
                  "
                                />
                                <div  className="flex">
                  <span className="text-red-400 text-sm m-2 p-2">error</span>
                                </div>
                            </div>
                            <div className="mb-10">
                                <button
                                    type="submit"
                                    className="
                    w-full
                    px-4
                    py-3
                    bg-cyan-700
                    hover:bg-cyan-600
                    rounded-md
                    text-white
                  "
                                >
                                    تسجيل الدخول
                                </button>
                            </div>
                        </form>
                        <Link
                            to="/forgot-password"
                            class="
                mb-2
                inline-block
                text-base text-[#adadad]
                hover:text-primary hover:underline
              "
                        >
                            هل نسيت كلمة المرور؟
                        </Link>
                        <p className="text-base text-[#adadad]">
                            ليس لديك حساب؟
                            <Link to="/register" class="text-primary hover:underline">
                                أنشئ حساب
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
</section>
    )
}
export default Login

