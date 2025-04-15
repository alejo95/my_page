import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Programación',
    Svg: require('@site/static/img/python.svg').default,
    description: (
      <>
        Aqui hablaremos un poco sobre programación, lenguajes, 
        frameworks y buenas practicas, que te ayudaran ala hora 
        de programar.
      </>
    ),
  },
  {
    title: 'AWS, GCP y Azure',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        En esta sección hablaremos sobre los principales proveedores
        de servicios en la nube, como AWS, GCP y Azure.
      </>
    ),
  },
  {
    title: 'Infraestructura',
    Svg: require('@site/static/img/alejo_explica_la_infraestructura_en_nube.svg').default,
    description: (
      <>
        En esta sección hablaremos sobre infraestructura, como 
        servidores, redes y almacenamient
      </>
    ),
  },
];


function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
      <h1 className="text--center" style={{ fontSize: '3rem', marginBottom: '2rem' }}>
        Aqui hablaremos sobre
        </h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
