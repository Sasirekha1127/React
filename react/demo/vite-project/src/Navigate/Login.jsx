import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate('/Product');
    };
    return (
        <div>
            <div style={{ textAlign: 'center', marginTop: '50px' }}></div>
            <h1>Login Page</h1>
            <button onClick={handleLogin} style={{ padding: '10px', backgroundColor: 'blue', color: 'white' }}>
                Login
            </button>
        </div>
    )
}
