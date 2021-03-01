import { ControlOptions, Map } from "leaflet";

// type BufferFunc = (a: number, b: number, c: boolean) => number;

// type Buffer = number | BufferFunc;

interface PlayerOwnProps {
  leafletMap: Map;
  autoPlay?: boolean;
  minSpeed?: number;
  maxSpeed?: number;
  speedSlider?: boolean;
  startedOver?: boolean;
  backwardButton?: React.ReactNode | boolean;
  forwardButton?: React.ReactNode | boolean;
  playButton?: React.ReactNode | boolean;
  playReverseButton?: React.ReactNode | boolean;
  loopButton?: React.ReactNode | boolean;
  timeSlider?: React.ReactNode | boolean;
  timeSliderDragUpdate?: React.ReactNode | boolean;
  limitSliders?: React.ReactNode | boolean;
  limitMinimumRange?: React.ReactNode | boolean;
  speedStep?: number;
  timeSteps?: number;
  minBufferReady?: number;
  transitionTime?: number;
  loop?: boolean;
  buffer?: number;
  // loadingTimeout?: number;
}

export type PlayerProps = ControlOptions & PlayerOwnProps;

export interface PlayerCompleteProps extends PlayerOwnProps {}
