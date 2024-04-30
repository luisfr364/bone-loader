import styled from "styled-components";
import { slideLoading } from "../animations/loadingAnimation";
import React from "react";

interface loadingGenericProps {
  $width?: string;
  $height?: string;
  $margin?: string;
  $borderRadius?: string;
  $clipPath?: string;
}

const LoadingGeneric = styled.div<loadingGenericProps>`
  height: ${({ $height = "50px" }) => $height};
  width: ${({ $width = "100%" }) => $width};
  margin: ${({ $margin = "10%" }) => $margin};
  clip-path: ${({ $clipPath = "none" }) => $clipPath};
  border-radius: ${({ $borderRadius = "0px" }) => $borderRadius};
  background-size: 200% 100%;
  background-image: linear-gradient(80deg, #cccccc, #eeecec, #cccccc);
  animation: ${slideLoading} 1.5s ease-in-out infinite;
`;

function GenericLoadingEl(props: loadingGenericProps) {
  return <LoadingGeneric {...props} />;
}

export default GenericLoadingEl;
