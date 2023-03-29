import { Main } from '../../components/Layout';
import { Hero } from '../../components/Banner';
import { FeatureItem } from '../../components/Feature';
import features from '../../data/features.json';

function Home() {
  return (
    <Main>
      <Hero />

      <section className="features">
        <h2 className="sr-only">Features</h2>
        {
          features.map((feature, index) => <FeatureItem key={ index } icon={ feature.icon } title={ feature.title } content={ feature.content } />)
        }
      </section>
    </Main>
  );
}

export default Home;
