import { useState, useContext } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import { signIn } from '../services/userApi';
import logo from '../assets/logo.png';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  return (
    <div>
      <div>
        <img src={logo} alt='Event Logo' width='60px' />
        <p>trainner</p>
      </div>
      <div>
        <h1>Entrar</h1>
        <form onSubmit={submit}>
          <input
            // label="E-mail"
            className='bg-blue-200'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className='bg-gray-200'
            // label="Senha"
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' color='primary'>
            Entrar
          </button>
        </form>
      </div>
      <div>
        <Link to='/enroll'>Não possui login? Inscreva-se</Link>
      </div>
    </div>
  );
}
