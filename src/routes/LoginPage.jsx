import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from './utils/ReactContext';

const LoginPage = () => {
  const { user, setUser } = useUser();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const handleInputChange = (event) => {
    const { id, value, type, checked } = event.target;
    const newData = type === 'checkbox' ? checked : value;
    setLoginData({ ...loginData, [id]: newData });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (loginData.email.trim() !== '' && loginData.password.trim() !== '') {
      setUser({ ...user, id: loginData.email });
      //   history.push('/home');
    } else {
      alert("Por favor, preencha os campos de login e senha!");
    }
  };

  //const history = useHistory(); // Hook useHistory para acessar o objeto history

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <form className="bg-gradient-to-b to-gray-900 from-gray-800 drop-shadow-lg border-[1px] border-gray-900 rounded px-10 pt-6 pb-8 mb-4 w-3/5" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
            ID ou Email
          </label>
          <input
            className="bg-gray-900 shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Login"
            value={loginData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
            Senha
          </label>
          <input
            className="bg-gray-900 shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-100 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Senha"
            value={loginData.password}
            onChange={handleInputChange}
          />
          <div className="flex items-center">
            <input
              className="mr-2 leading-tight"
              id="rememberMe"
              type="checkbox"
              checked={loginData.rememberMe}
              onChange={handleInputChange}
            />
            <label className="text-gray-300 text-sm" htmlFor="rememberMe">
              Lembrar-me
            </label>
          </div>
        </div>
        <div className="flex justify-end" >
          <button
            disabled={loginData.email.trim() === '' || loginData.password.trim() === ''}
            onClick={handleSubmit}
            type="submit"
            className="bg-[#478cbf] text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            <Link to="/home">Entrar</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
