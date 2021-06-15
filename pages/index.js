import HomeScreen from '../src/components/screens/HomeScreen';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});

export async function getServerSideProps() {
  return {
    props: {
      pageWrapperProps: {
        pageBoxProps: {
          backgroundThemedImage: '/bubbles.svg',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          backgroundColor: 'background',
        },
      },
    },
  };
}
