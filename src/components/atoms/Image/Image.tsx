/** Resources */
import NextImage from 'next/image';
import { Images } from '@assets';

interface ImageProps {
  src: keyof typeof Images;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  lazy?: boolean;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  lazy = true,
}) => {
  const imageSrc = Images[src];

  return (
    <NextImage
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      loading={lazy ? 'lazy' : 'eager'}
    />
  );
};

Image.displayName = 'Image';

export default Image;
