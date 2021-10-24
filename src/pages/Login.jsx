import React from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>Page for login</h1>
            <form>
                <MyInput type="text" placeholder="Login" />
                <MyInput type="password" placeholder="Password" />
                <MyButton>Log In</MyButton>
            </form>
        </div>
    )
}

export default Login
