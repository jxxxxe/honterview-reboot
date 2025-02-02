export const createVideoFormData = (videoChuncks: Blob[]) => {
  const blob = new Blob(videoChuncks, { type: 'video/webm' });

  const videoFormData = new FormData();
  videoFormData.append('video', blob);

  return videoFormData;
};
