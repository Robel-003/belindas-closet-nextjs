import { NextPage } from 'next';

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
    return (
    <div className="sign-in-form">
        <form>
        <h1>Login</h1>
            <input type="email" placeholder="john@email.com"/>
            <input type="password" placeholder="*********"/>
            <input type="submit" placeholder="Login"/>
            
        </form>
    </div>
    )
};

export default SignIn;