import { useState } from 'react';
import { ThemeToggle } from './components/common/ThemeToggle';
import { Container } from './components/layout/Container';
import { Header } from './components/layout/Header';
import { About } from './components/sections/About';
import { ProjectGrid } from './components/sections/ProjectGrid';
import { projects } from './data/projects';

function App() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const filteredProjects = projects.filter(
    (project) => project.category === activeCategory,
  );

  return (
    <>
      <ThemeToggle />
      <Container>
        <Header
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <main>
          {activeCategory === 'about' ? (
            <About />
          ) : (
            <ProjectGrid projects={filteredProjects} />
          )}
        </main>
      </Container>
    </>
  );
}

export default App;
