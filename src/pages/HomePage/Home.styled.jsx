import styled from 'styled-components';

export const HomeHeader = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: orange;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

export const Absolute = styled.p`
  position: absolute;
  top: 50%;
  right: 170px;
  font-size: 30px;
  font-weight: 700;
  text-shadow: 0 0 10px var(--color1), 0 0 20px var(--color2),
    0 0 40px var(--color3), 0 0 80px var(--color4);
  color: #a3a0a0;
  --color1: pink;
  --color2: orangered;
  --color3: red;
  --color4: magenta;
`;
