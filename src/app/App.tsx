import { Suspense, FunctionComponent, useRef } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import MainLayout from '@layouts/MainLayout';
import PageLoader from '@components/loaders/PageLoader';
import Blurb from '@components/Blurb';
import { withProfiler } from '@sentry/react';
import ContactForm from '@components/ContactForm';
import config from '@config';
import SocialCard from '@components/SocialCard';
import usePageViews from '@hooks/analytics/usePageView';
import useGetBlurbs from '@hooks/useGetBlurbs';
import { AppWrapper, Article, ArticleCard } from './styles';

const App: FunctionComponent = () => {
  usePageViews();
  const contactCardRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<Map<string, HTMLElement> | null>(null);
  const { loading, data: blurbs } = useGetBlurbs();

  const getMap = (): Map<string, HTMLElement> => {
    let { current } = cardsRef;
    if (!current) {
      current = new Map();
    }
    return current;
  };

  const displayCard = (cardId: string) => {
    const map = getMap();
    const node = map.get(cardId);
    if (node) {
      node.setAttribute('style', 'display: block');
    }
  };

  return (
    <>
      <AppWrapper id="wrapper">
        <Header
          title={config.title}
          navItems={blurbs.map(({ title }) => ({ title: title.toLocaleLowerCase() }))}
        />
        <MainLayout>
          <Suspense fallback={<PageLoader />}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              blurbs.map(({ title, image: { url }, description }) => (
                <ArticleCard
                  key={title}
                  id={title.toLowerCase()}
                  onClick={() => displayCard(title)}
                  ref={(node) => {
                    const map = getMap();
                    if (node) {
                      map.set(title, node);
                    } else {
                      map.delete(title);
                    }
                  }}
                >
                  <Blurb key={title} title={title} image={url} description={description} />
                </ArticleCard>
              ))
            )}
            <Article id="contact" ref={contactCardRef}>
              <h2 className="major">Contact</h2>
              <ContactForm />
              <SocialCard />
            </Article>
          </Suspense>
        </MainLayout>
        <Footer />
      </AppWrapper>
      <div id="bg" />
    </>
  );
};

// Profiler
// Ref: https://docs.sentry.io/platforms/javascript/guides/react/components/profiler/
export default withProfiler(App, { name: config.name });
