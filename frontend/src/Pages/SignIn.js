import { useNavigate } from "react-router-dom";
import { cards } from "../Utils/CssClasses";
import { useContext, useState } from "react";
import { UserContext } from "../Contexts/UserContext";
import { logoUrl } from '../Utils/DataService';
import LabelInput from "../Common/LabelInput";
import BtnSolid from "../Common/BtnSolid";
import HttpClient from '../HttpClient';
import { decodeToken } from "react-jwt";

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData(() => {
            return { ...formData, [name]: value }
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data: { data }, status } = await HttpClient.post('user/sign-in', formData);
            if (status === 200) {
                const info = decodeToken(data);
                const item = {
                    _id: info._id,
                    firstName: info.firstName,
                    lastName: info.lastName,
                    email: info.email,
                    avatar: info.avatar
                }
                console.log(user);
                setUser(item);
                localStorage.setItem('user', JSON.stringify(item));
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error);
            // const { response: { data } } = error;
            // toast.error(data.message);
        }
    }
    return (
        <div className="flex h-screen bg-gray-50 flex-col justify-center p-6">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className='flex flex-row justify-center'>
                    <img className="h-8 w-8" src={logoUrl} alt="Your Company" />
                </div>
                <h2 className="mt-6 text-center text-2xl font-medium text-gray-900">
                    Sign in to your account
                </h2>
            </div>

            <div className={"mt-4 sm:mx-auto sm:w-full sm:max-w-sm " + cards}>
                <form onSubmit={onSubmit} autoComplete='off' className="space-y-6">
                    <LabelInput name="email" value={formData.email} type="email" label="Email Address" onChange={onChange} />
                    <LabelInput name="password" value={formData.password} type="password" label="Password" onChange={onChange} />
                    <div className="text-sm text-gray-500 font-medium text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                    </div>
                    <BtnSolid label="Sign In" />
                </form>
            </div>
        </div>
    )
}

export default SignIn