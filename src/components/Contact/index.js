import React from 'react';
import { PageTitle, ScaleHoverAnimation, ScaleTextShowAnimation } from '@src/common/styles';
import { css } from 'styled-components';
import TextAnimation from '@src/components/TextAnimation';
import AnimatedInput from './AnimatedInput';
import {
  ContactGrid,
  TextContainer,
  Description,
  FormContainer,
  InputContainer,
  TextAreaContainer,
  Button,
  MapContainer,
  Input,
  TextArea,
} from './styles';

import environments from './../../common/environments';
import GoogleMapComponentWithMarker from '@src/components/Contact/GoogleMapWithMarker';

const styles = {
  width: '100%',
  height: '100%',
};

const Contact = () => {
  return (
    <ContactGrid>
      <TextContainer>
        <TextAnimation mainAnimation={ScaleTextShowAnimation} hoverAnimation={ScaleHoverAnimation}>
          <PageTitle>Contact me</PageTitle>
        </TextAnimation>
        <Description>
          Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla. Bla bla bla bla bla bla bla.
        </Description>
        <FormContainer>
          <InputContainer>
            <AnimatedInput
              containerStyles={css`
                margin-right: 5px;
              `}
              type="text"
              placeholder="Name"
              Component={Input}
            />
            <AnimatedInput
              containerStyles={css`
                margin-left: 5px;
              `}
              type="text"
              placeholder="Email"
              Component={Input}
            />
          </InputContainer>
          <InputContainer>
            <AnimatedInput type="text" placeholder="Subject" Component={Input} />
          </InputContainer>
          <TextAreaContainer>
            <AnimatedInput placeholder="Message" Component={TextArea} />
          </TextAreaContainer>
          <Button>SEND</Button>
        </FormContainer>
      </TextContainer>
      <MapContainer>
        <div style={styles}>
          <GoogleMapComponentWithMarker
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${environments.MAP_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `100%` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </MapContainer>
    </ContactGrid>
  );
};

export default Contact;
