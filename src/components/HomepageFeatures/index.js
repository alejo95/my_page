import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Programación',
    Svg: require('@site/static/img/python.svg').default,
    description: (
      <>
        Aprende conceptos esenciales de programación, buenas prácticas,
        frameworks y bases sólidas para desarrollar software moderno.
      </>
    ),
  },
  {
    title: 'AWS, GCP y Azure',
    Svg: require('@site/static/img/alejo_explicado_cloiud.svg').default,
    description: (
      <>
        Conoce los servicios más importantes de los principales proveedores
        cloud: AWS, GCP y Azure. Guías amigables y directas para aprender desde cero.
      </>
    ),
  },
  {
    title: 'Infraestructura',
    Svg: require('@site/static/img/alejo_explica_la_infraestructura_en_nube.svg').default,
    description: (
      <>
        Entiende cómo funcionan los servidores, redes, almacenamiento
        y los cimientos del mundo DevOps.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div
        className="card shadow--md padding--lg"
        style={{
          borderRadius: '16px',
          minHeight: '380px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: 'var(--ifm-background-surface-color)',
          border: '1px solid var(--ifm-color-emphasis-200)',
        }}
      >
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>

        <div className="text--center padding-horiz--md">
          <Heading as="h2" style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>
            {title}
          </Heading>
          <p style={{ fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)' }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section
      className={styles.features}
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      <div className="container">
        <h1
          className="text--center"
          style={{
            fontSize: '3.2rem',
            marginBottom: '3rem',
            fontWeight: '700',
            color: 'var(--ifm-heading-color)',
          }}
        >
          Temas principales del aprendizaje DevOps
        </h1>

        <p
          className="text--center"
          style={{
            maxWidth: '700px',
            margin: '0 auto 3rem auto',
            color: 'var(--ifm-color-emphasis-700)',
            fontSize: '1.1rem',
          }}
        >
          Esta plataforma está diseñada para ayudarte a aprender DevOps y
          tecnología de la manera más clara y amigable posible.
        </p>

        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
