import type { Route } from "./+types/_index";

import { Jobs } from '@/db'
import Experience from '@/components/experience'
import Skills from "@/components/skills";
import Header from "@/components/header";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import Summary from "@/components/summary";

export function meta(metaArgs: Route.MetaArgs) {
  return [
    { title: "JOSE THADEU E S JR" },
    { name: "description", content: "Online CV programatically made by me" },
    { name: 'keywords', content: 'cv, resume, thadeu, jose thadeu, rails, react, developer, aws, job, engineer' }
  ];
}

export default function Cv() {
  return (
    <div className="print:w-[100vw] flex md:w-[95vw] lg:w-[90vw] xl:w-[60vw] m-auto items-center justify-center">
      <div className="flex-col p-6">
        <Header />
        <Summary />
        <Skills />
        <Experience company={Jobs.title} jobs={Jobs.records} />
        <Certifications />
        <Projects />
      </div>
    </div>
  );
}
