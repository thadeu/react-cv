export default function Header() {
  return (
    <div className="flex flex-col items-start mb-6">
      <div className="flex items-center justify-between w-full">
        <h1 className="font-bold text-2xl mb-2">
          Jose Thadeu Esteves da Silva Junior
        </h1>

        <div className="ml-2 print:hidden">
          <a href="/resume.pdf" className="text-blue-500 underline" target="_blank" rel="noreferrer">Download PDF</a>
        </div>
      </div>

      <ul className="flex flex-wrap gap-3">
        <li>
          <a href="https://linkedin.com/in/thadeuestevesjr" target="_blank" rel="noreferrer">
            <span className="font-bold mr-1">Linkedin:</span>
            <span className="text-blue-500 hover:underline">
              thadeuestevesjr
            </span>
          </a>
        </li>

        <li>
          <a href="https://github.com/thadeu" target="_blank" rel="noreferrer">
            <span className="font-bold mr-1">Github:</span>
            <span className="text-blue-500 hover:underline">thadeu</span>
          </a>
        </li>

        <li>
          <a href="mailto:tadeuu@gmail.com" target="_blank" rel="noreferrer">
            <span className="font-bold mr-1">Email:</span>
            <span className="text-blue-500 hover:underline">
              tadeuu@gmail.com
            </span>
          </a>
        </li>

        <li>
          <a href="tel:+5563984866338" target="_blank" rel="noreferrer">
            <span className="font-bold mr-1">Phone:</span>
            <span className="text-blue-500 hover:underline">
              +5563984866338
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}