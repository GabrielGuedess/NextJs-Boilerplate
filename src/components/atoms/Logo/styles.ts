'use client';

import styled, { keyframes, css } from 'styled-components';

import { type StyledProps } from 'helpers/StyledProps';

import { type LogoProps } from './types';

const atom = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }

  12.5% {
    transform: rotate(-45deg) scale(0.9);
  }

  25% {
    transform: rotate(-90deg) scale(1);
  }

  37.5% {
    transform: rotate(-135deg) scale(0.9);
  }

  50% {
    transform: rotate(-180deg) scale(1);
  }

  62.5% {
    transform: rotate(-225deg) scale(0.9);
  }

  75% {
    transform: rotate(-270deg) scale(1);
  }

  87.5% {
    transform: rotate(-315deg) scale(0.9);
  }

  100% {
    transform: rotate(-360deg) scale(1);
  }
`;

const nucleus = keyframes`
  0%, 50%, 100% {
    transform: scale(1);
  }

  25% {
    transform: scale(0.9);
  }

  75% {
    transform: scale(0.85);
  }
`;

const electronOrbit = keyframes`
  0%, 100% {
      border-top: solid rgb(0 216 255 / 0.5) 1px;
      border-right: solid rgb(0 216 255 / 0.35) 2px;
      border-bottom: solid rgb(0 216 255 / 0.2) 4px;
      border-left: solid rgb(0 216 255 / 0) 2px;
    }

    25% {
      border-top: solid rgb(0 216 255 / 0.35) 1px;
      border-right: solid rgb(0 216 255 / 0.2) 2px;
      border-bottom: solid rgb(0 216 255 / 0) 4px;
      border-left: solid rgb(0 216 255 / 0.5) 2px;
    }

    50% {
      border-top: solid rgb(0 216 255 / 0.2) 1px;
      border-right: solid rgb(0 216 255 / 0) 2px;
      border-bottom: solid rgb(0 216 255 / 0.5) 4px;
      border-left: solid rgb(0 216 255 / 0.35) 2px;
    }

    75% {
      border-top: solid rgb(0 216 255 / 0) 1px;
      border-right: solid rgb(0 216 255 / 0.5) 2px;
      border-bottom: solid rgb(0 216 255 / 0.35) 4px;
      border-left: solid rgb(0 216 255 / 0.2) 2px;
    }
`;

const electron = keyframes`
  0%, 50%, 100% {
    left: calc((18rem / 25) / -1);
    transform: scale(1);
  }

  12.5%, 62.5% {
    top: 100%;
    transform: scale(1.5);
  }

  25%, 75% {
    left: 100%;
    transform: scale(1);
  }

  37.5%, 87.5% {
    top: 0%;
    transform: scale(0.25);
  }
`;

const shadow = keyframes`
  0%, 25%, 50%, 75%, 100% {
    transform: scale(1, 0.8) translateY(0);
  }

  12.5%, 37.5%, 62.5%, 87.5% {
    transform: scale(0.7, 0.7) translateY(-20px);
  }
`;

export const Wrapper = styled.div<StyledProps<LogoProps>>`
  ${({ $hasShadow }) => css`
    position: relative;

    &::after {
      content: '';

      position: absolute;
      top: 115%;
      left: 0;
      transform: scale(1, 0.8);

      display: ${$hasShadow ? 'block' : 'none'};

      width: 18rem;
      height: calc(18rem / 5);

      background-image: radial-gradient(
        closest-side,
        rgb(153 248 255 / 0.2),
        rgb(153 248 255 / 0)
      );
      border-radius: 100%;

      animation: 8s ${shadow} infinite cubic-bezier(1, 0.25, 0, 0.75);
    }
  `}
`;

export const Electron = styled.div`
  position: absolute;
  top: 50%;

  width: 100%;
  height: calc(18rem / 2.5);
  margin-top: calc((18rem / 2.5) / -2) !important;

  border-top: solid rgb(0 216 255 / 0.5) 1px;
  border-right: solid rgb(0 216 255 / 0.35) 2px;
  border-bottom: solid rgb(0 216 255 / 0.2) 4px;
  border-left: solid rgb(0 216 255 / 0) 2px;
  border-radius: 100%;

  animation: 1.2s ${electronOrbit} infinite linear;

  &::after {
    content: '';

    position: absolute;
    top: 50%;
    left: calc((18rem / 25) / -1);
    transform: scale(1);

    display: block;

    width: calc(18rem / 25);
    height: calc(18rem / 25);
    margin-top: calc((18rem / 25) / -2) !important;

    background: #99f8ff;
    border-radius: 50%;

    animation: calc(1.2s * 2) ${electron} infinite ease-in-out;
  }
`;

export const Atom = styled.div`
  position: relative;
  width: 18rem;
  height: 18rem;
  animation: 8s ${atom} infinite cubic-bezier(1, 0.25, 0, 0.75);

  &::before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;

    display: block;

    width: calc(18rem / 5);
    height: calc(18rem / 5);
    margin-top: calc((18rem / 5) / -2) !important;
    margin-left: calc((18rem / 5) / -2);

    background: #99f8ff;
    border-radius: 100%;
    box-shadow: 0 0 3px 0 #00d8ff;

    animation: 2s ${nucleus} infinite cubic-bezier(0.65, 0, 0.35, 1);
  }

  ${Electron}:nth-child(2) {
    transform: rotate(60deg);
    animation: 1s ${electronOrbit} infinite linear;

    &::after {
      animation: calc(1s * 2) ${electron} infinite ease-in-out;
    }
  }

  ${Electron}:nth-child(3) {
    transform: rotate(-60deg);
    animation: 0.8s ${electronOrbit} infinite linear;

    &::after {
      animation: calc(0.8s * 2) ${electron} infinite ease-in-out;
    }
  }
`;
