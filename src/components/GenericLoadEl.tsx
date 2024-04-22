import styled from "styled-components";
import { slideLoading } from "../animations/loadingAnimation";

const defaultValues = {
  $width: "100%",
  $height: "50px",
  $margin: "0 0 10px 0",
};

interface loadingGenericProps {
  $width?: string;
  $height?: string;
  $margin?: string;
  $borderRadius?: string;
  $clipPath?: string;
}

const LoadingGeneric = styled.div<loadingGenericProps>`
  height: ${({ $height }) => $height || defaultValues.$height};
  width: ${({ $width }) => $width || defaultValues.$width};
  margin: ${({ $margin }) => $margin || defaultValues.$margin};
  clip-path: ${({ $clipPath }) => $clipPath || "none"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "0px"};
  background-size: 200% 100%;
  background-image: linear-gradient(80deg, #cccccc, #eeecec, #cccccc);
  animation: ${slideLoading} 1.5s ease-in-out infinite;
`;

function GenericLoadEl(props: loadingGenericProps) {
  return <LoadingGeneric {...props} />;
}

export default GenericLoadEl;
