import React from 'react';
import { Card } from '../../common/Card';
import { Project } from '../../../data/projects';
import { GridWrapper, EmptyState } from './styles';

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <GridWrapper>
        <EmptyState>
          <h3>Nenhum projeto ainda</h3>
          <p>Em breve novos projetos serão adicionados!</p>
        </EmptyState>
      </GridWrapper>
    );
  }

  return (
    <GridWrapper>
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          description={project.description}
          date={project.completionDate}
          icon={project.icon}
          url={project.url}
        />
      ))}
    </GridWrapper>
  );
};