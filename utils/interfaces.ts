export interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface HeroProps {
  image: Image;
  title: string;
  description: string;
  ctaText: string;
}

export interface Card {
  image: Image;
  title: string;
  description: any;
  bgColor: string;
  width: string;
  isSelected: boolean;
}

export interface AgencyProps {
  bgImage: Image;
  title: string;
  subTitle: string;
  videoImg: Image;
  cards: Card[];
}
