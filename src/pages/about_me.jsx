// src/pages/about_me.jsx

import React, { useRef, useState } from 'react';
import Layout from '@theme/Layout';
import styles from './about_me.module.css';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';

import perfilImage from '@site/static/img/photo_me.jpg';
import uniLogo from '@site/static/img/company/logo_uniempresarial.png';
import camaraLogo from '@site/static/img/company/camaracomercio.png';
import {
  FaCode,
  FaDatabase,
  FaCloud,
  FaGitAlt,
  FaTools,
  FaNetworkWired,
} from 'react-icons/fa';


// ————————————————————————————
// Profile Header
// ————————————————————————————
function ProfileHeader() {
  return (
    <div className={styles.profileHeader}>
      <div className={styles.profileText}>
        <h2>Hola, soy Alejandro Ramírez</h2>
        <p>
          Soy Alejandro Ramirez un joven entusiasta de la tecnologia, el cual 
          busca aprender y crear un mundo donde el conocimiento sea libre y accesible para todos
          al igual que la tecnologia, por esa razón nace iamdevops, un espacio donde comparto mis conocimientos y 
          experiencias en el mundo de la tecnología, bueno en espacial de DevOps.
        </p>
      </div>
      <img
        src={perfilImage}
        alt="Foto de perfil"
        className={styles.profileImage}
      />
    </div>
  );
}


// ————————————————————————————
// Carrusel: experiencia profesional
// ————————————————————————————
const cardsData = [
  {
    title: 'MercadoLibre',
    subtitle: 'Software Developer',
    text: 'Formé parte del equipo de Ingeniería de MLD en Mercado Libre, donde contribuí en la refactorización del servicio Toxic, encargado del preprocesamiento de textos para el modelo de Lenguaje Natural (MLN) que detecta lenguaje tóxico. Además, monitoreé y corregí vulnerabilidades en las dependencias del proyecto, mejorando la seguridad del sistema.',
    frontImage: require('@site/static/img/company/mercadolibre.png').default,
    startDate: '2022-10',
    endDate: '2024-09',
  },
  {
    title: 'Corebi',
    subtitle: 'DevOps Engineer',
    text: 'Dentro del equipo de Cobebi, trabajé en el equipo orientado al apoyo del Banco Supervielle, identificando fallas en el flujo de despliegue en Azure Devops de su proyecto.',
    frontImage: require('@site/static/img/company/corebi.png').default,
    startDate: '2022-07',
    endDate: '2022-10',
  },
  {
    title: 'Elenas',
    subtitle: 'Junior Back-End Developer',
    text: 'En Elenas, me desempeñé como junior Back-End Developer, trabajando en el microservicio de pasarela de pagos. Contribuí en la mejora de su infraestructura y en la implementación de pipelines para optimizar su despliegue. Además, participé en la optimización del tráfico de la aplicación mediante diversas mejoras en su rendimient ',
    frontImage: require('@site/static/img/company/elenas_logo.png').default,
    startDate: '2021-04',
    endDate: '2022-06',
  },
  {
    title: 'Puerto 80',
    subtitle: 'Instructor',
    text: 'En esta experiencia, me desempeñé como instructor, donde tuve la oportunidad de enseñar los fundamentos de arquitectura en la nube y pensamiento computacional',
    frontImage: require('@site/static/img/company/puerto80.png').default,
    startDate: '2020-10',
    endDate: '2021-02',
  },
  {
    title: 'iCodeMachine',
    subtitle: 'Back-End Developer',
    text: 'En iCode, me desempeño como Ingeniero de Software, contribuyendo en la toma de decisiones clave sobre el desarrollo de diversos productos. Además, trabajo como desarrollador Back-End, especializado en Python.',
    frontImage: require('@site/static/img/company/icode.png').default,
    startDate: '2019-11',
    endDate: '2022-03',
  },
  {
    title: 'Taxis ya',
    subtitle: 'QA Engineer',
    text: 'En Taxisya, me desempeñé como Qa, realizando pruebas en tres aplicaciones (productos distintos), que estaban desarrolladas en diversos lenguajes de programación, incluyendo Node.js, con el cual también apoyé en el desarrollo del Back-end de uno de sus productos.',
    frontImage: require('@site/static/img/company/taxisya.png').default,
    startDate: '2018-09',
    endDate: '2021-04',
  },
];

function getDuration(start, end) {
  const s = parse(start, 'yyyy-MM', new Date());
  const e = parse(end, 'yyyy-MM', new Date());
  const totalMonths = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const label = `${format(s, 'MMM yyyy', { locale: es })} - ${format(e, 'MMM yyyy', { locale: es })}`;
  const dur = `(${years > 0 ? `${years} año${years > 1 ? 's' : ''}` : ''}${years > 0 && months > 0 ? ' y ' : ''}${months > 0 ? `${months} mes${months > 1 ? 'es' : ''}` : ''})`;
  return `${label} ${dur}`;
}


// ————————————————————————————
// Knowledge Section
// ————————————————————————————
const knowledgeData = [
  { title: 'Languages', icon: <FaCode />, items: [{ name: 'Python', color: 'green' }, { name: 'JavaScript', color: 'orange' }] },
  { title: "Frameworks & CMS's", icon: <FaNetworkWired />, items: [{ name: 'Django', color: 'green' }, { name: 'Flask', color: 'orange' }] },
  { title: 'Data Base', icon: <FaDatabase />, items: [{ name: 'MySql', color: 'green' }, { name: 'Mongo Db', color: 'orange' }] },
  { title: 'Cloud Providers', icon: <FaCloud />, items: [{ name: 'AWS', color: 'green' }, { name: 'Heroku', color: 'orange' }] },
  { title: 'Repositories', icon: <FaGitAlt />, items: [{ name: 'GitHub', color: 'orange' }, { name: 'Bitbucket', color: 'green' }] },
  { title: 'Cloud tools', icon: <FaTools />, items: [{ name: 'Docker', color: 'green' }, { name: 'Kubernetes', color: 'orange' }] },
];

function KnowledgeSection() {
  return (
    <section className={styles.knowledgeSection}>
      <h2 className={styles.knowledgeTitle}>Knowledge</h2>
      <div className={styles.knowledgeGrid}>
        {knowledgeData.map((block, i) => (
          <div className={styles.knowledgeBlock} key={i}>
            <div className={styles.iconTitle}>
              <span className={styles.icon}>{block.icon}</span>
              <h3>{block.title}</h3>
            </div>
            <ul className={styles.knowledgeList}>
              {block.items.map((it, j) => (
                <li key={j}>
                  <span
                    className={styles.bullet}
                    style={{ backgroundColor: it.color === 'green' ? '#4CAF50' : '#FF9800' }}
                  />
                  {it.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


// ————————————————————————————
// Education Section
// ————————————————————————————
const educationData = [
  {
    logo: uniLogo,
    institution: 'Fundación Universitaria Empresarial de la Cámara de Comercio de Bogotá',
    title: 'Ingeniero de Software',
    date: '8 de Noviembre 2024',
  },
  {
    logo: camaraLogo,
    institution: 'Fundación Universitaria Empresarial de la Cámara de Comercio de Bogotá',
    title: 'Diplomado en Arquitectura De Software',
    date: '23 de mayo al 12 sep 2020',
  },
];

function EducationSection() {
  return (
    // ...
    // Dentro de src/pages/about_me.jsx, en el return de AboutMe:
    <section className={styles.educationSection}>
      <h2 className={styles.sectionTitle}>🎓 Educación</h2>
      <div className={styles.educationGrid}>
        {educationData.map((item, idx) => (
          <div className={styles.educationCard} key={idx}>
            <img
              src={item.logo}
              alt={item.institution}
              className={styles.educationLogo}
            />
            <div className={styles.educationInfo}>
              <p className={styles.institution}>{item.institution}</p>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.date}>{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>


  );
}



// ————————————————————————————
// Main Component
// ————————————————————————————
export default function AboutMe() {
  const trackRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCards = 3;

  const scroll = (dir) => {
    let ni = dir === 'left'
      ? Math.max(0, scrollIndex - 1)
      : Math.min(cardsData.length - visibleCards, scrollIndex + 1);
    setScrollIndex(ni);
    trackRef.current.style.transform = `translateX(-${ni * (100 / visibleCards)}%)`;
  };

  return (
    <Layout title="Sobre mí">
      <ProfileHeader />

      {/* Carrusel */}
      <div className={styles.carouselWrapper}>
        <h2 className={styles.heading}>En dónde he trabajado</h2>
        <div className={styles.carousel}>
          <button
            className={styles.arrowLeft}
            onClick={() => scroll('left')}
            disabled={scrollIndex === 0}
          >‹</button>
          <div className={styles.carouselTrackContainer}>
            <div
              className={styles.carouselTrack}
              ref={trackRef}
            >
              {cardsData.map((card, i) => (
                <div className={styles.card} key={i}>
                  <div className={styles.cardInner}>
                    <div className={styles.cardFront}>
                      <img src={card.frontImage} alt={card.title} />
                    </div>
                    <div className={styles.cardBack}>
                      <h3>{card.title}</h3>
                      <h5>{card.subtitle}</h5>
                      <p>{card.text}</p>
                      <p className={styles.dateText}>
                        {getDuration(card.startDate, card.endDate)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className={styles.arrowRight}
            onClick={() => scroll('right')}
            disabled={scrollIndex >= cardsData.length - visibleCards}
          >›</button>
        </div>
      </div>

      {/* Knowledge */}
      <KnowledgeSection />

      {/* Educación */}
      <EducationSection />
    </Layout>
  );
}
