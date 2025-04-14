export type JobRoleType = {
  role?: string | string[],
  company?: string,
  location?: string,
  date?: string
}

export function JobRole({ role, company, location, date }: JobRoleType) {
  return (
    <div className="flex list-none justify-between align-middle w-full mt-5">
      <div className="flex gap-3 items-center">
        <li className="font-bold text-md mr-1">{role}</li>
        <li className="font-bold text-sm items-end bg-purple-100 px-3 py-1 rounded-2xl text-nowrap">{company}</li>
      </div>

      <div className="flex gap-5">
        <li>{location}</li>
        <li>-</li>
        <li>{date}</li>
      </div>
    </div>
  );
}