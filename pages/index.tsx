import { Hero, Agency } from "../sections";
import { AgencyProps, HeroProps } from "../utils/interfaces";

const heroProps: HeroProps = {
  image: { src: "/img/heroimg.png", alt: "", width: 1000, height: 1680 },
  title: "Agency procurement, outsourced.",
  description: "Start the process here",
  ctaText: "Start",
};

const agencyProps: AgencyProps = {
  bgImage: {
    src: "/img/background.png",
    alt: "Background",
    width: 326,
    height: 520,
  },
  title: "Managed agency selection",
  subTitle: "Strengthen your onboarding process",
  videoImg: {
    src: "/img/video.png",
    alt: "",
    width: 2000,
    height: 3100,
  },
  cards: [
    {
      image: { src: "/img/cardBriefImg.png", alt: "", width: 70, height: 60 },
      title: "Brief",
      description: (
        <p>
          Complete <strong> brief writing and or simple guidance </strong> on
          what to include, we&apos;ve got you coverted.
        </p>
      ),
      bgColor: "#f9f9f9",
      width: "55%",
      isSelected: false,
    },
    {
      image: {
        src: "/img/cardSearchImg.png",
        alt: "",
        width: 70,
        height: 60,
      },
      title: "Search",
      description: (
        <p>
          In-depth agency search covering; <strong>criteria matching</strong>,
          door knocking and due dilligence vetting.
        </p>
      ),
      bgColor: "#f4f4f4",
      width: "60%",
      isSelected: false,
    },
    {
      image: { src: "/img/cardPitchImg.png", alt: "", width: 70, height: 60 },
      title: "Pitch",
      description: (
        <p>
          Comprehensive <strong>pitch management</strong>, including comms,
          diary management and pitch hosting.
        </p>
      ),
      bgColor: "#f1f1f1",
      width: "65%",
      isSelected: true,
    },
  ],
};

export default function Home() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <div>
        <Hero {...heroProps} />
        <Agency {...agencyProps} />
      </div>
    </>
  );
}
