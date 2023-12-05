import React from 'react';
import { useUser } from "../routes/utils/ReactContext";
import ProjectShortcut from './utils/ProjectShortcut';
import ProfilePictureIcon from "../assets/icons/ProfilePictureIcon.svg";


const HomePage = () => {
  const { user } = useUser(); 
  const username = user && user.id ? user.id : "Anônimo";
  return (
    <div className="mt-8 mx-4 text-gray-200">
      <h1 className="text-3xl font-semibold mb-4">Bem vindo, {username}!</h1>
      <p className="text-lg mb-8">
        Continue de onde parou ou acesse outros projetos no menu Projetos.
      </p>
      <div className="bg-gray-800">
        <ProjectShortcut
          projectTitle='Último projeto Alterado'
          projectVersion='v4.0.0'
          projectPath='C:\'
          projectIcon={ProfilePictureIcon}
        />
      </div>
    </div>
  );
};

export default HomePage;