import styled from "styled-components";

import { slideLoading } from "../animations/loadingAnimation";

interface LoadingLineProps {
  $width?: string;
  $height?: string;
  $margin?: string;
  $borderRadius?: string;
  $linesCount?: number;
}

const LoadingLineLi = styled.li<LoadingLineProps>`
  width: ${({ $width = "100%" }) => $width};
  height: ${({ $height = "10px" }) => $height};
  margin: ${({ $margin = "0 0 10px 0" }) => $margin};
  border-radius: ${({ $borderRadius = "18px" }) => $borderRadius};
  background-size: 200% 100%;
  background-image: linear-gradient(80deg, #cccccc, #eeecec, #cccccc);
  list-style: none;

  animation: ${slideLoading} 1.5s ease-in-out infinite;
`;

function LoadingLine(props: LoadingLineProps) {
  return <LoadingLineLi {...props} />;
}

export default LoadingLine;
export type { LoadingLineProps };
