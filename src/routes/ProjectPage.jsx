import ProjectShortcut from './utils/ProjectShortcut';

function ProjectPage() {
  const projects = [
    { title: 'Projeto 1', version: '1.0.0', path: '/projeto-1' },
    { title: 'Projeto 2', version: '2.1.0', path: '/projeto-2' },
    { title: 'Projeto 3', version: '3.5.2', path: '/projeto-3' },
  ];

  return (
    <div className="ProjectList">
      {projects.map((project, index) => (
        <ProjectShortcut
          key={index}
          projectTitle={project.title}
          projectVersion={project.version}
          projectPath={project.path}
        />
      ))}
    </div>
  );
}

export default ProjectPage;
git config --global user.email "you@example.com"
  git config --global user.name "Your Name"
