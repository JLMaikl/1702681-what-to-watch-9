import { useEffect, useRef } from 'react';
import { FilmType } from '../../types/types';

type Props = {
  film: FilmType;
  isActive: boolean;
};

const VIDEO_DELAY = 1000;


function PlayerCart({ film, isActive }: Props): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (videoRef.current === null) {
      return;
    }

    if (isActive) {
      timeout = setTimeout(() => videoRef.current?.play(), VIDEO_DELAY);
      return;
    }
    videoRef.current?.load();

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [film, isActive]);


  return (
    <video ref={videoRef} src={film.previewVideoLink} width='280' height='175' poster={film.posterImage} muted preload="none" style={{objectFit: 'cover'}}></video>
  );
}

export default PlayerCart;
