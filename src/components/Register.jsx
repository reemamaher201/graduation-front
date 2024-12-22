
import {Link} from "react-router-dom";

const Register =()=>{
    return(
        <div className="container ">
            <div className="bg-white h-screen">

                <div className=" rounded-[50px] shadow  p-10 absolute left-1/4 top-32 w-1/2" >
                    <div className="flex flex-col space-y-5 ">
                        <div className="flex justify-end">
                            <h2 className="text-xl font-bold">انشاء حساب</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4">

                            <div >
                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700  text-center">الاسم
                                    الكامل</label>
                                <input type="text" id="fullName" className="mt-1 p-2 border rounded-md w-full text-center"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-center">البريد
                                    الالكتروني</label>
                                <input type="email" id="email" className="mt-1 p-2 border rounded-md w-full"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-center">رقم
                                    الهاتف</label>
                                <input type="tel" id="phone" className="mt-1 p-2 border rounded-md w-full"/>
                            </div>
                            <div>
                                <label htmlFor="idNumber" className="block text-sm font-medium text-gray-700 text-center">رقم
                                    الهوية</label>
                                <input type="text" id="idNumber" className="mt-1 p-2 border rounded-md w-full"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700 text-center">العنوان الكامل
                                (مدينة/مخيم/شارع)</label>
                            <textarea id="address" rows="3" className="mt-1 p-2 border rounded-md w-full"></textarea>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 text-center">تاريخ
                                    الميلاد</label>
                                <input type="date" id="birthDate" className="mt-1 p-2 border rounded-md w-full"/>
                            </div>
                            <div>
                                <label htmlFor="careType" className="block text-sm font-medium text-gray-700 text-center">نوع
                                    الرعاية</label>
                                <select id="careType" className="mt-1 p-2 border rounded-md w-full">
                                    {/* Add options for care types */}
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center ml-60">
                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700 text-center">الجنس</label>
                            <div className="ml-4">
                                <input type="radio" id="male" name="gender" value="male"/>
                                <label htmlFor="male" className="ml-2">ذكر</label>
                            </div>
                            <div className="ml-4">
                                <input type="radio" id="female" name="gender" value="female"/>
                                <label htmlFor="female" className="ml-2 ">أنثى</label>
                            </div>
                        </div>
                        <button className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-[50px] ">تسجيل
                            الدخول
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register