"use client";;
import SearchJobComponent from "@/components/search-job-component";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="my-12">
        <p className="text-center text-4xl font-bold">
          Découvrez les meilleures offres d’emploi en un seul endroit. Trouvez{" "}
          <span className="bg-cyan-500 text-white px-6 py-2 rounded-lg inline-block">
            rapidement
          </span>
          {" "}des opportunités adaptées à votre profil
        </p>
        <p className="text-center text-4xl font-bold">
          et postulez{" "}
          <span className="bg-cyan-500 text-white px-6 py-2 rounded-lg inline-block">
            facilement
          </span>
          , en Tunisie et ailleurs.
        </p>
      </div>
      <div className="flex items-end">
        <SearchJobComponent />
      </div>
    </section>
  );
}
