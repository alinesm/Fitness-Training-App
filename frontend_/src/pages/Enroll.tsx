import { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../services/userApi';
import logo from '../assets/logo.png';

export default function Enroll() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  async function submit(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast('As senhas devem ser iguais!');
    } else {
      try {
        await signUp(email, password);
        toast('Inscrito com sucesso! Por favor, faça login.');
        navigate('/sign-in');
      } catch (error) {
        toast('Não foi possível fazer o cadastro!');
      }
    }
  }

  return (
    <div>
      <div>
        <img src={logo} alt='Event Logo' width='60px' />
        <h1>trainer</h1>
      </div>
      <div>
        <h1>Inscrição</h1>
        <form onSubmit={submit}>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type='submit' color='primary'>
            Inscrever
          </button>
        </form>
      </div>
      <div>
        <Link to='/sign-in'>Já está inscrito? Faça login</Link>
      </div>
    </div>
  );
}
