export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
}

export interface Colection {
  images: Image[];
  totalPages: number;
}

export interface ModalSettings {
  isOpen: boolean;
  url: string;
  alt: string;
  class?: string;
}

export interface ImageCardProps {
  item: Image;
  onClick: (item: Image) => void;
}

export interface ImageGalleryProps {
  images: Image[];
  onClick: (item: Image) => void;
}

export interface ImageModalProps {
  params: ModalSettings;
  onClose: () => void;
}

export interface Submit {
  onSubmit: (value: string) => void;
}

export interface UnsplashApiResponse {
  results: Image[];
  total_pages: number;
}
