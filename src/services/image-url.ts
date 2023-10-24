import imagePlaceholder from "../assets/image-placeholder.png";

const getCroppedImageUrl = (url: string) => {
  if (!url) return imagePlaceholder;

  const target = "media/";
  let index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
