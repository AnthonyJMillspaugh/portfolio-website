import placeholder from '../assets/placeholder.png';
import COMAPCompass from '../assets/COMAP-Compass-Website.png';
import TaskSherpLogo from '../assets/TaskSherp-logo.svg';
import PortfolioWebsite from '../assets/portfolio-website.png';

const projects = [
  {
    id: 1,
    image: TaskSherpLogo,
    title: 'Task Sherp: Task Management App',
    summary: 'A multiplatform, multifunctional task management app built using Kotlin Multiplatform.' +
      ' Designed to help you stay on track with a highly customizable task sorting and reminder system, ' +
      'as well as a built in calendar for managing long term goals.',
    githubLink: 'https://github.com/AnthonyJMillspaugh/kotlin-task-tracker',
  },
  {
    id: 2,
    image: COMAPCompass,
    title: 'COMAP Compass: Database Search Engine',
    summary: 'For teams interested in taking part in COMAP competitions, our website, COMAP Compass, ' +
      'is designed to help these participants find winning papers from previous COMAP competitions that ' +
      'can provide them with what methods, styles, or strategies have been used before.',
    githubLink: 'https://github.com/AnthonyJMillspaugh/math-modeling-database',
  },
  {
    id: 3,
    image: PortfolioWebsite,
    title: 'Portfolio Website',
    summary: 'The place you are at right now! A simple and clean portfolio website built using React + Vite to showcase my projects and skills.',
    githubLink: 'https://github.com/AnthonyJMillspaugh/portfolio-website',
  },
  {
    id: 4,
    image: placeholder,
    title: "LightEasy: Light Configuration Program",
    summary: 'LightEasy is a simple Python program for configuring lights in a model greenhouse. Intended for a group of engineering students' +
      ' attending University of Washington: Tacoma to use for their final project, but will work for anyone using similar hardware.',
    githubLink: 'https://github.com/AnthonyJMillspaugh/greenhouse-timer',
  }
];

export default projects;