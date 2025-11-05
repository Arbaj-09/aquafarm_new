'use client';

import React, { useState } from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export default function ImageWithFallback({ fallbackSrc = 'https://images.unsplash.com/photo-1581090468903-7b6a5a4f159b?w=1600&h=900&fit=crop&auto=format&q=60', src, alt, ...rest }: Props) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(typeof src === 'string' ? src : undefined);

  return (
    <img
      {...rest}
      alt={alt}
      src={imgSrc}
      referrerPolicy={rest.referrerPolicy ?? 'no-referrer'}
      onError={() => {
        if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
      }}
    />
  );
}
