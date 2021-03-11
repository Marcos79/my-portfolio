import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import aboutBg from "../aboutBg.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => {
  return builder.image(source);
};

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type=="author"]{
            name,
            bio,
            "authorImage":image.asset->url
        }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className="relative">
      <img src={aboutBg} alt="about background" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-white-100 bg-opacity-75 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded-full w-42 h-42 lg:w-74 lg:h-64 mr-8"
            alt={author.name}
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-5xl text-gray-800 mb4 mt-8">
              Hey there. I'm  {""}
              <span className="text-red-800">{author.name}</span>
            </h1>
            <div className="prose lg:prose-xl text-black mt=8">
              <BlockContent
                blocks={author.bio}
                projectId="pjy2vn8q"
                dataset="production"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
