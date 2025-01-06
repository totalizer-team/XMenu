// import { ReactComponent as IconSidebar } from '@ant-design/icons-svg/inline-svg/outlined/align-left.svg';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import animateScrollTo from 'animated-scroll-to';
import {
  Helmet,
  useIntl,
  useLocation,
  useOutlet,
  usePrefersColor,
  useRouteMeta,
  useSidebarData,
  useSiteData,
} from 'dumi';
import Content from 'dumi/theme/slots/Content';
import ContentFooter from 'dumi/theme/slots/ContentFooter';
import React, { useEffect, useState, type FC } from 'react';
import Footer from '../../slots/Footer';
import Header from '../../slots/Header';

const HomePageLayout: FC = () => {
  const intl = useIntl();
  const outlet = useOutlet();
  const sidebar = useSidebarData();
  const { hash, pathname } = useLocation();
  const { loading, hostname } = useSiteData();
  const [activateSidebar, updateActivateSidebar] = useState(false);
  const { frontmatter: fm } = useRouteMeta();

  const showSidebar = fm.sidebar !== false && sidebar?.length > 0;

  const [prefersColor, setPrefersColor] = usePrefersColor();

  // handle hash change or visit page hash after async chunk loaded
  useEffect(() => {
    const id = hash.replace('#', '');

    if (id) {
      setTimeout(() => {
        const elm = document.getElementById(decodeURIComponent(id));

        if (elm) {
          // animated-scroll-to instead of native scroll
          animateScrollTo(elm.offsetTop - 80, {
            maxDuration: 300,
          });
        }
      }, 1);
    }
  }, [loading, hash]);

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          mode: prefersColor,
        },
      })}
    >
      <Box onClick={() => updateActivateSidebar(false)}>
        <Helmet>
          <html lang={intl.locale.replace(/-.+$/, '')} />
          {fm.title && <title>{fm.title}</title>}
          {fm.title && <meta property="og:title" content={fm.title} />}
          {fm.description && (
            <meta name="description" content={fm.description} />
          )}
          {fm.description && (
            <meta property="og:description" content={fm.description} />
          )}
          {fm.keywords && (
            <meta name="keywords" content={fm.keywords.join(',')} />
          )}
          {fm.keywords &&
            fm.keywords.map((keyword) => (
              <meta
                key={keyword}
                property="article:tag"
                content={keyword}
              ></meta>
            ))}
          {hostname && <link rel="canonical" href={hostname + pathname} />}
        </Helmet>
        <Header />

        <Content>
          <article>{outlet}</article>
          <ContentFooter />
        </Content>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default HomePageLayout;
