import React, { useRef, useState } from 'react';
import styles from './about_me.module.css';
import Layout from '@theme/Layout';
import { format, parse } from 'date-fns';
import { es } from 'date-fns/locale';
import perfilImage from '@site/static/img/photo_me.jpg';


const ProfileHeader = () => (
  <div className={styles.profileHeader}>
    <div className={styles.profileText}>
      <h2>Hola soy Alejandro Ramirez</h2>
      <p>
        Como estan bienvenidos a pagina web, diras quien es este man, soy Alejandro 
        Ramirez Un entusiasta por el mundo de la tecnologia, amante al mundo del cloud y 
        principalmente back-end de profesion
      </p>
    </div>
    <img src={perfilImage} alt="Foto de perfil" className={styles.profileImage} />
  </div>
);

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
    title: 'IcodeMachine',
    subtitle: 'Back-End Developer',
    text: 'En iCode, me desempeño como Ingeniero de Software, contribuyendo en la toma de decisiones clave sobre el desarrollo de diversos productos. Además, trabajo como desarrollador Back-End, especializado en Python.',
    frontImage: require('@site/static/img/company/icode.png').default,
    startDate: '2019-11',
    endDate: '2022-03',
  },
  {
    title: 'Taxis ya',
    subtitle: 'Qa Engineer',
    text: 'En Taxisya, me desempeñé como Qa, realizando pruebas en tres aplicaciones (productos distintos), que estaban desarrolladas en diversos lenguajes de programación, incluyendo Node.js, con el cual también apoyé en el desarrollo del Back-end de uno de sus productos.',
    frontImage: require('@site/static/img/company/taxisya.png').default,
    startDate: '2018-09',
    endDate: '2021-04',
  },
];

function getDuration(start, end) {
  const startDate = parse(start, 'yyyy-MM', new Date());
  const endDate = parse(end, 'yyyy-MM', new Date());

  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const label = `${format(startDate, 'MMM yyyy', { locale: es })} - ${format(endDate, 'MMM yyyy', { locale: es })}`;
  const duration = `(${years > 0 ? `${years} año${years > 1 ? 's' : ''}` : ''}${years > 0 && months > 0 ? ' y ' : ''}${months > 0 ? `${months} mes${months > 1 ? 'es' : ''}` : ''})`;

  return `${label} ${duration}`;
}

export default function AboutMe() {
  const trackRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const visibleCards = 3;

  const scrollLeft = () => {
    if (scrollIndex > 0) {
      const newIndex = scrollIndex - 1;
      setScrollIndex(newIndex);
      trackRef.current.style.transform = `translateX(-${newIndex * 33.33}%)`;
    }
  };

  const scrollRight = () => {
    if (scrollIndex < cardsData.length - visibleCards) {
      const newIndex = scrollIndex + 1;
      setScrollIndex(newIndex);
      trackRef.current.style.transform = `translateX(-${newIndex * 33.33}%)`;
    }
  };

  return (
    <Layout title="Sobre mí">
      <ProfileHeader />
      <div className={styles.carouselWrapper}>
        <h4 className={styles.heading}>En donde he trabajado</h4>
        <div className={styles.carousel}>
          <button className={styles.arrowLeft} onClick={scrollLeft}>&#8592;</button>
          <div className={styles.carouselTrackContainer}>
            <div className={styles.carouselTrack} ref={trackRef}>
              {cardsData.map((card, index) => (
                <div className={styles.card} key={index}>
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
          <button className={styles.arrowRight} onClick={scrollRight}>&#8594;</button>
        </div>
      </div>
    </Layout>
  );
}
