import { keyframes } from "styled-components";

const slideLoading = keyframes`
 0% {
    background-position: 190% 0;
  }
  100% {
    background-position: -10% 0;
  }
`;

const pulseLoading = keyframes`
  0% {
    background-color: rgba(0, 0, 0, 0);
  }

  100% {
    background-color: rgba(0, 0, 0, .22);
  }
`;

export { slideLoading, pulseLoading };
