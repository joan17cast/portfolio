interface MetaData {
  title: string;
  description: string;
}

export const updateMeta = (meta: MetaData) => {
  document.title = `${meta.title} | Joan Peruchet`;

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", meta.description);
  }

  // Update OpenGraph meta tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDescription = document.querySelector(
    'meta[property="og:description"]',
  );

  if (ogTitle) {
    ogTitle.setAttribute("content", `${meta.title} | Joan Peruchet`);
  }
  if (ogDescription) {
    ogDescription.setAttribute("content", meta.description);
  }

  // Update Twitter meta tags
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  const twitterDescription = document.querySelector(
    'meta[name="twitter:description"]',
  );

  if (twitterTitle) {
    twitterTitle.setAttribute("content", `${meta.title} | Joan Peruchet`);
  }
  if (twitterDescription) {
    twitterDescription.setAttribute("content", meta.description);
  }
};

export const pageMeta = {
  home: {
    title: "Frontend Team Lead",
    description:
      "Software engineer with over 8 years of experience, specialized in front-end development using React and React Native. View my portfolio and experience.",
  },
  stack: {
    title: "Technology Stack",
    description:
      "Explore my technology stack and expertise in React, TypeScript, React Native, and other modern web technologies.",
  },
  workExperience: {
    title: "Work Experience",
    description:
      "Browse through my professional journey as a Frontend Team Lead and my experience working with various companies in the tech industry.",
  },
};
