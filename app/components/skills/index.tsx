import { Divider } from '@/components/divider'

const SKILLS = [
  'Ruby, Javascript, Typescript, Postgres, MySQL, Redis, NoSQL, Docker, Lambda, Git, AWS',
  'Ruby on Rails, Hotwire, Sidekiq, RSpec, CI/CD, OOP, FP, System Design and Architecture',
  'Monolith, Microservices, Design Systems, Backend, Frontend, English, Portuguese'
]

export default function Skills() {
  return (
    <>
      <Divider>Skills</Divider>

      <div className="list-disc pl-4 mt-4">
        {SKILLS.map(skill => (
          <li key={skill} className="mb-1 pl-2">
            {skill}
          </li>
        ))}
      </div>
    </>
  )
}