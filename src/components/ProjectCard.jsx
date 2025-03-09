import { GitlabIcon as GitHub } from "lucide-react";
import { useState, useEffect } from "react";

function ProjectCard({ title, description, folder, link, tags }) {
  const images = {
    TuneUp: ["/TuneUp/t1.png", "/TuneUp/t2.png", "/TuneUp/t3.png", "/TuneUp/t4.png"],
    TejaBaba: [
      "/TejaBaba/b1.png",
      "/TejaBaba/b2.png",
      "/TejaBaba/b3.png",
      "/TejaBaba/b4.png",
      "/TejaBaba/b5.png",
      "/TejaBaba/b6.png",
      "/TejaBaba/b7.png",
      "/TejaBaba/b8.png"
    ],
    VoterSystem: [
      "/VoterUI/v1.png",
      "/VoterUI/v2.png",
      "/VoterUI/v3.png",
      "/VoterUI/v4.png",
      "/VoterUI/v5.png",
      "/VoterUI/v6.png",
      "/VoterUI/v7.png",
      "/VoterUI/v8.png",
      "/VoterUI/v9.png"
    ]
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectImages = images[folder] || ["/placeholder.svg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [projectImages.length]);

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="relative aspect-video">
        <img
          src={projectImages[currentImageIndex]}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 ease-in-out hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-xl mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 pt-0">
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:underline"
        >
          <GitHub className="h-4 w-4" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
