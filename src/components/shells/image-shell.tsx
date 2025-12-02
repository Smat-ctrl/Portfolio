"use client";

import { useImageStore } from "@/lib/store/use-image";
import Image from "next/image";
import React from "react";

export interface ImageShellProps {
  imageUrl: string;
}

export function ImageShell({ imageUrl }: ImageShellProps) {
  const [isImageLoading, setImageLoading] = React.useState(true);
  const { setDialogOpen, setSelectedImage } = useImageStore();

  function handleImageClick(url: string) {
    setSelectedImage(url);
    setDialogOpen(true);
  }

  return (
    <div
      className="rounded-xl border border-muted overflow-hidden cursor-pointer mt-2.5 bg-[rgba(0,0,0,0.04)] flex items-center justify-center"
      onClick={() => handleImageClick(imageUrl)}
      style={{ minHeight: 300 }}
    >
      <div className="w-full h-full flex items-center justify-center p-4">
        <Image
          src={imageUrl}
          alt="screenshot-large"
          width={1400}
          height={900}
          sizes="100vw"
          className="rounded-xl max-h-[75vh] max-w-full"
          style={{
            objectFit: "contain",
            objectPosition: "center",
            WebkitFilter: isImageLoading ? "blur(8px)" : "none",
            transition: "all 0.5s ease",
          }}
          onLoad={() => setImageLoading(false)}
        />
      </div>
    </div>
  );
}
