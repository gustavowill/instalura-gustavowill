/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useContext } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import Modal from '../../commons/Modal';
import Box from '../../foundation/layout/Box';
import SEO from '../../commons/SEO';

import { WebsitePageContext } from './context';
import { ThemeContext } from 'styled-components';

export { WebsitePageContext } from './context';

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  footerProps,
  messages,
}) {
  const theme = useContext(ThemeContext);
  
  const { backgroundColor, ...remainingPageBoxProps } = pageBoxProps;

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModal: (modalVariant) => {
          setModalContent(modalVariant);
          setModalOpen(!isModalOpen);
        },
        getCMSContent: (cmsKey) => get(messages, cmsKey),
        modalProps: {
          'data-modal-safe-area': 'true',
        },
      }}
    >
      <SEO
        {...seoProps}
      />

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="space-between"
        backgroundColor={get(theme, backgroundColor)}
        {...remainingPageBoxProps}
      >
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        >
          {modalContent}
        </Modal>
        {menuProps.display && (
          <Menu
            variant={menuProps.variant}
          />
        )}
        {children}
        {footerProps.display && <Footer />}
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    display: true,
    variant: 'public',
  },
  footerProps: {
    display: true,
  },
  messages: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    display: PropTypes.bool,
    variant: PropTypes.string,
  }),
  footerProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
