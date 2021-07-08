import styled from 'styled-components';
import { device, size } from '@/utils/device';

export const UserMainContainer = styled.div`
  display: grid;
  grid-template-areas:
    'right'
    'left';
  column-gap: 30px;
  row-gap: 30px;
  width: 100%;
  height: 100%;

  & > .left {
    grid-area: agendas;
    display: flex;
    flex-direction: column;
    grid-area: left;
    gap: 20px 0;
  }

  & > .right {
    grid-area: right;
  }

  & .agendas {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    flex: 1 0 1px;
    overflow: auto;
  }

  @media ${device.laptop} {
    grid-template-areas: 'left right';
  }

  @media ${device.laptopL} {
    max-width: ${size.laptopL};
  }
`;

export const AdminMainContainer = styled.div`
  display: grid;
  grid-template-areas:
    'right'
    'left';
  column-gap: 30px;
  row-gap: 30px;
  width: 100%;
  height: 100%;

  & > .left {
    display: flex;
    flex-direction: column;

    grid-area: left;
    gap: 20px 0;
  }

  & > .right {
    grid-area: right;
  }

  & .agendas {
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    flex: 1 0 1px;
    overflow: auto;
  }

  @media ${device.laptop} {
    grid-template-columns: 3fr 4fr;
    grid-template-rows: auto;
    grid-template-areas: 'left right';
  }

  @media ${device.laptopL} {
    max-width: ${size.laptopL};
  }
`;
