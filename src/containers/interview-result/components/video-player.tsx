export interface IProps {
  src: string;
}

const VideoPlayer = ({ src }: IProps) => {
  return (
    <video
      width="100%"
      height="100%"
      controls
    >
      <source
        src={src}
        type="video/mp4"
      />
      <track />
    </video>
  );
};

export default VideoPlayer;
