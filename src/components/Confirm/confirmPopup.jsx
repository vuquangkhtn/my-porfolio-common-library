import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../Button/Button';
import createConfirmation from './createConfirmation';
import confirmable from './confirmable';

const StyledPopup = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  color: #5b5b5b;
  justify-content: center;
`;

const Container = styled.div`
  min-width: 400px;
  min-height: 200px;
  background: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
`;

const Header = styled.h1`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px 5px 10px;
  font-weight: bold;
  font-size: 20px;
`;

const Content = styled.span`
  flex: 1;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 300;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  column-gap: 5px;
  padding: 10px 5px;
  background-color: #f5f5f5;
`;

const Popup = ({ show, proceed, dismiss, header, confirmation }) => {
  if (!show) return null;
  const handleCancel = () => {
    proceed(false);
  };

  return (
    <StyledPopup onClick={() => dismiss()}>
      <Container>
        <Header>{header}</Header>
        <Content>{confirmation}</Content>
        <Actions>
          <Button mode="submit" onClick={() => proceed(true)}>
            OK
          </Button>
          <Button mode="primary" onClick={handleCancel}>
            Cancel
          </Button>
        </Actions>
      </Container>
    </StyledPopup>
  );
};

Popup.propTypes = {
  show: PropTypes.bool,
  proceed: PropTypes.func,
  cancel: PropTypes.func,
  dismiss: PropTypes.func,
  confirmation: PropTypes.string,
  header: PropTypes.string
};

const ConfirmPopup = confirmable(Popup);

export default createConfirmation(ConfirmPopup);
