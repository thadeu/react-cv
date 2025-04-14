import { Divider } from '@/components/divider'

export default function Projects() {
  return (
    <>
      <Divider>
        Projects
      </Divider>

      <div className="flex flex-col gap-6 mt-4">
        <div>
          <div className="flex flex-between gap-2">
            <div className="font-bold flex-auto">Branca Ruby</div>
            <div className="text-blue-500 hover:underline mb-2">https://github.com/thadeu/branca-ruby</div>
          </div>

          <div>
            This gem provides a Branca implementation for Ruby. Encrypt using  <span className="font-bold">IETF XChaCha20-Poly1305 AEAD symmetric encryption</span>.
          </div>
        </div>

        <div>
          <div className="flex flex-between gap-2">
            <div className="font-bold flex-auto">VSCode Run RSpec File Extension</div>
            <div className="text-blue-500 hover:underline mb-2">https://github.com/thadeu/vscode-run-rspec-file</div>
          </div>

          <div>
            This extension provides basic commands for running spec files in build-in vscode terminal. Basically it can reduce your time to run rspec files more easily rather than typing the command manually.
          </div>
        </div>

        <div>
          <div className="flex flex-between gap-2">
            <div className="font-bold flex-auto">Vitest LocalStack</div>
            <div className="text-blue-500 hover:underline mb-2">https://github.com/thadeu/vitest-localstack</div>
          </div>

          <div>
            A simple way to testing AWS Services using Vitest and JavaScript. You can mock AWS services and test your code in a fast and efficient way. Reducing your cost with AWS drastically.
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-sm border-gray-300 border-1 p-3 flex items-center">
        Note: If you want to see more projects you can check my GitHub <a href="https://github.com/thadeu" className="text-blue-500 hover:underline inline-flex pl-1">https://github.com/thadeu</a>
      </div>
    </>
  )
}