import { Divider } from '@/components/divider'
import { JobRole } from '@/components/experience/job_role'

type JobsType = {
  role: string | string[],
  company: string,
  location: string,
  date: string,
  journey: { title: string; content: string[]; }[];
}

export default function Experience({ company, jobs }: { company: string, jobs: JobsType[] }) {
  return (
    <>
      <Divider>{company}</Divider>

      {jobs.map((job) => (
        <>
          <JobRole
            key={job.company + job.role}
            role={job.role}
            company={job.company}
            location={job.location}
            date={job.date}
          />

          {job.journey.map((journey) => (
            <div key={journey.title}>
              <div className="mt-4 mb-1">
                <div className="italic">{journey.title}</div>

                <div className="pl-4 mt-2 list-disc">
                  {journey.content.map((item) => (
                    <li key={item} className="mb-1 pl-2">{item}</li>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </>
      ))}

      <div className="mt-4 rounded-sm border-gray-300 border-1 p-3 flex items-center">
        <span className="font-bold mr-1">Note:</span> If you want to see more about my professional career, you can check my LinkedIn <a href="https://linkedin.com/in/thadeuestevesjr" className="text-blue-500 hover:underline inline-flex pl-1">thadeuestevesjr</a>
      </div>
    </>
  )
}