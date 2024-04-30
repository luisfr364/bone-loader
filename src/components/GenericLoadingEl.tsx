import styled from "styled-components";
import { slideLoading } from "../animations/loadingAnimation";

interface loadingGenericProps {
  $width?: string;
  $height?: string;
  $margin?: string;
  $borderRadius?: string;
  $clipPath?: string;
}

const LoadingGeneric = styled.div<loadingGenericProps>`
  height: ${({ $height = "40%" }) => $height};
  width: ${({ $width = "20%" }) => $width};
  margin: ${({ $margin = "20%" }) => $margin};
  clip-path: ${({ $clipPath = "none" }) => $clipPath};
  border-radius: ${({ $borderRadius = "0px" }) => $borderRadius || "0px"};
  background-size: 200% 100%;
  background-image: linear-gradient(80deg, #cccccc, #eeecec, #cccccc);
  animation: ${slideLoading} 1.5s ease-in-out infinite;
`;

function GenericLoadingEl(props: loadingGenericProps) {
  return <LoadingGeneric {...props} />;
}

export default GenericLoadingEl;
