import React from 'react';

import bender from '@src/images/bender.jpg';
import rick from '@src/images/rick.jpg';
import franch from '@src/images/franch.webp';
import starwars from '@src/images/starwars.webp';
import masseffect from '@src/images/masseffect.jpg';
import rammstein from '@src/images/rammstein.jpg';
import js from '@src/images/js.jpg';
import brain from '@src/images/brain.jpg';
import twins from '@src/images/twins.webp';
import doom from '@src/images/doom.jpg';
import ukraine from '@src/images/ukraine.jpg';
import tora from '@src/images/tora.jpg';
import science from '@src/images/science.png';
import bbt from '@src/images/bbt.png';
import I from '@src/images/I.png';
import scy from '@src/images/scy.jpg';
import yorki from '@src/images/yorki.jpg';
import wedding from '@src/images/wedding.jpeg';
import pool from '@src/images/pool.jpg';
import bike from '@src/images/bike.jpg';
import flat from '@src/images/flat.jpg';
import citroen from '@src/images/citroen.jpg';

import { Hex, Images, HexGrid, HexIn, HexLink } from './styles';

const images = [
  js,
  masseffect,
  brain,
  bender,
  rammstein,
  tora,
  citroen,
  wedding,
  bbt,
  ukraine,
  twins,
  pool,
  bike,
  doom,
  science,
  yorki,
  flat,
  scy,
  starwars,
  rick,
  I,
  franch,
];

const HexGridImages = () => (
  <HexGrid>
    {images.map((image) => (
      <Hex key={image}>
        <HexIn>
          <HexLink>
            <Images src={image} />
          </HexLink>
        </HexIn>
      </Hex>
    ))}
  </HexGrid>
);

export default HexGridImages;
