import React from "react";
import MorphingText from "./ui/morphing-text";
const Clients = () => {
  const brandsData = [
    {
      imageSrc: "/icons/aster-logo.png",
      lightImageSrc:
        "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
      altText: "graygrids",
      link: "#",
    },
    {
      imageSrc: "/icons/samsung.png",
      lightImageSrc:
        "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
      altText: "lineicons",
      link: "#",
    },
    {
      imageSrc: "/icons/shahi.png",
      lightImageSrc:
        "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
      altText: "uideck",
      link: "#",
    },
    {
      imageSrc: "/icons/blackstone-logo.png",
      lightImageSrc:
        "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
      altText: "ayroui",
      link: "#",
    },
    {
      imageSrc: "/icons/ghati_movers.png",
      lightImageSrc:
        "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
      altText: "ayroui",
      link: "#",
    },
  ];

  const brandsData2 = [
    {
      imageSrc: "/icons/arcana.png",
      lightImageSrc:
        "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
      altText: "graygrids",
      link: "#",
    },
    {
      imageSrc: "/icons/sparsh.png",
      lightImageSrc:
        "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
      altText: "lineicons",
      link: "#",
    },

    // {
    //   imageSrc: "/icons/khatabook.png",
    //   lightImageSrc:
    //     "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
    //   altText: "ayroui",
    //   link: "#",
    // },
  ];

  const texts = ["Notable", "Clients"];

  return (
    <section className="bg-background py-20 lg:py-[120px] dark:bg-dark">
      <MorphingText
        texts={texts}
        className="text-4xl sm:text-5xl font-bold mb-4 lg:text-5xl text-white "
        style={{ fontFamily: "SF Pro" }}
      />

      <div className="flex flex-wrap justify-center items-center"></div>
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
              {brandsData2.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SingleImage = ({ brand }) => {
  const { link, imageSrc, lightImageSrc, altText } = brand;
  return (
    <>
      <a
        href={link}
        class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
      >
        <img src={imageSrc} alt={altText} class="h-10 w-auto dark:hidden" />
        <img
          src={{ lightImageSrc }}
          alt={altText}
          class="hidden h-10 w-full dark:block"
        />
      </a>
    </>
  );
};

export default Clients;
