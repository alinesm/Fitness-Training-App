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

  async function goToDemo() {
    try {
      const userData = await signIn('jimmy@gmail.com', '123456');
      console.log('userData', userData);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      console.log('userData', userData);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  return (
    <>
      {/* <div>
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
      </div> */}

      <section class='bg-gray-50 dark:bg-gray-900'>
        <div class='flex flex-col  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <a
            href='#'
            class='flex  mb-6 text-3xl font-extrabold  text-red-400 dark:text-white'
          >
            <img class='w-8 h-8 mr-2' src={logo} alt='logo' />
            Bodying
          </a>
          <div class='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-500 md:text-2xl dark:text-white'>
                Sign in to your account
              </h1>
              <form onSubmit={submit} class='space-y-4 md:space-y-6' action='#'>
                <div>
                  <label
                    for='email'
                    class='block mb-2 text-sm font-medium text-gray-500 dark:text-white'
                  >
                    Your email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email'
                    name='email'
                    class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required
                  />
                </div>
                <div>
                  <label
                    for='password'
                    class='block mb-2 text-sm font-medium text-gray-500 dark:text-white'
                  >
                    Password
                  </label>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password'
                    placeholder='••••••••'
                    class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required
                  />
                </div>
                <div class='flex items-center justify-between'>
                  <div class='flex items-start'>
                    <div class='flex items-center h-5'>
                      <input
                        type='checkbox'
                        class='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                      />
                    </div>
                    <div class='ml-3 text-sm'>
                      <label
                        for='remember'
                        class='text-gray-500 dark:text-gray-300'
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href='#'
                    class='text-sm font-medium text-gray-500 hover:underline dark:text-primary-500'
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type='submit'
                  class='w-full mb-3 text-white bg-red-400 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                >
                  Sign in
                </button>
                <Link
                  onClick={goToDemo}
                  className='text-xs text-gray-600 font-bold  tracking-tighter'
                >
                  <p className='mt-2 italic'>
                    Just want to see how the app works?{' '}
                    <span className='underline '>Click here to see demo</span>
                  </p>
                </Link>
                <p class='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Don’t have an account yet?{' '}
                  <Link
                    class='font-medium text-primary-600 hover:underline dark:text-primary-500'
                    to='/enroll'
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
