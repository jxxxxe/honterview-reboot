export interface IProps {
  src: string;
}

const VideoPlayer = ({ src }: IProps) => {
  return (
    <video
      className="h-full w-full max-w-7xl"
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
