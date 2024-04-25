import styled from "styled-components";

import LoadingLine from "./LoadingLine";
import { LoadingLineProps } from "./LoadingLine";

interface containerProps {
  $width?: string;
  $height?: string;
  $margin?: string;
  $linesCount?: number;
}

interface LoadingLinesProps {
  containerProps?: containerProps;
  lineProps?: LoadingLineProps;
}

const LoadingLinesContainer = styled.ul`
  padding: 0;
  margin: 0;
  background-color: #transparent;
  list-style: none;
`;

const LoadingLines = ({ containerProps, lineProps }: LoadingLinesProps) => {
  const LinesCount = Array.from(
    { length: containerProps?.$linesCount || 1 },
    () => " "
  );

  return (
    <LoadingLinesContainer>
      {LinesCount.map((_, i) => (
        <LoadingLine key={i} {...lineProps} />
      ))}
    </LoadingLinesContainer>
  );
};

export default LoadingLines;
