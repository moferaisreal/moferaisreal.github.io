import React from 'react';
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaRedditAlien 
} from 'react-icons/fa6';
import { SiSubstack } from "react-icons/si";
import { HiEnvelope } from 'react-icons/hi2';
import {
  AboutHeader,
  AboutWrapper,
  Bio,
  Divider,
  Name,
  ProfileImage,
  ProfileInfo,
  Role,
  SectionTitle,
  SocialLink,
  SocialLinks,
} from './styles';

export const About: React.FC = () => {
  return (
    <AboutWrapper>
      <AboutHeader>
        <ProfileImage
          src='https://github.com/moferaisreal.png'
          alt='Marcelo Rocha'
        />
        <ProfileInfo>
          <Name>Marcelo Rocha</Name>
          <Role>Engenheiro Front-end</Role>
          <Bio>
            Indivíduo dinâmico com forte inclinação para tecnologia e resolução
            criativa de problemas. Tenho um forte interesse em desenvolvimento
            front-end, com experiência em HTML, CSS, JavaScript e um pouco de
            banco de dados. Me aprofundo em fluxo de trabalho usando Git e
            Vercel.
          </Bio>
        </ProfileInfo>
      </AboutHeader>

      <Bio>
        Minha curiosidade se estende ao universo da inteligência artificial
        desejando aprender mais e utilizar essas ferramentas para aplicações
        criativas e práticas. Além disso, tenho grande interesse em marketing
        digital e estratégias de crescimento empresarial, sendo versátil,
        motivado e capaz de contribuir para projetos inovadores e desafiadores.
      </Bio>

      <Divider>
        <SectionTitle>
          Estou a um follow ou um e-mail de distância.
        </SectionTitle>
        <SocialLinks>
          <li>
            <SocialLink
              href='https://www.instagram.com/mrmarcelorocha/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <FaInstagram />
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href='https://x.com/moferapontotxt'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter/X'
            >
              <FaXTwitter />
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href='https://github.com/moferaisreal'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='GitHub'
            >
              <FaGithub />
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href='XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'
            >
              <FaLinkedinIn />
            </SocialLink>
          </li>
          <li>
            <SocialLink
              href='https://www.reddit.com/user/Mofera/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Reddit'
            >
              <FaRedditAlien />
            </SocialLink>
          </li>
           <li>
            <SocialLink
              href='https://substack.com/@mofera?'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Reddit'
            >
              <SiSubstack />
            </SocialLink>
          </li>
          <li>
            <SocialLink href='mailto:marcelovrch@icloud.com' aria-label='Email'>
              <HiEnvelope />
            </SocialLink>
          </li>
        </SocialLinks>
      </Divider>
    </AboutWrapper>
  );
};
