import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import { Carousel } from 'react-responsive-carousel';
import React from 'react';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Hola, Bienvenido
        </Heading>
        <p className="hero__conten">En esta pagina encontraras documentación
          y contenido útil en el caso que quieras conocer temas sobre DevOps
          o desarrollo de software en general y algunas cosas mas de un joven entusiasta
          de la tecnología.
        </p>
        <div className={styles.buttons}>
         <Link
            className="button button--secondary button--lg margin--sm"
            to="/about_me">
            Sobre Mi
          </Link>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/docs/intro">
            Tutoriales
          </Link>
          <Link
            className="button button--secondary button--lg margin--sm"
            to="/blog">
            Blog
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
    title={`Hola a todos! - DevOps, seguridad y programación`}
    description="DevOps, AWS, GCP, Azure, Infraestructura, Programación, Blog, Portafolio">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
