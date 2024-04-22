import styled from "styled-components";

import { slideLoading } from "../animations/loadingAnimation";

const defaultValues = {
  width: "100%",
  height: "10px",
  margin: "0 0 10px 0",
};

interface LoadingLineProps {
  $width?: string;
  $height?: string;
  $margin?: string;
  $borderRadius?: string;
  $linesCount?: number;
}

const LoadingLineLi = styled.li<LoadingLineProps>`
  width: ${({ $width }) => $width || defaultValues.width};
  height: ${({ $height }) => $height || defaultValues.height};
  margin: ${({ $margin }) => $margin || defaultValues.margin};
  border-radius: ${({ $borderRadius }) => $borderRadius || "0"};
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
