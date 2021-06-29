/* This example requires Tailwind CSS v2.0+ */
import { ExclamationIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'

export default function Alert(props) {
  if (props.type == "warning") {
    return (
      <div className="rounded-md bg-yellow-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">{props.title}</h3>
            <div className="mt-2 text-sm text-yellow-700">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">There were 2 errors with your submission</h3>
            <div className="mt-2 text-sm text-red-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Your password must be at least 8 characters</li>
                <li>Your password must include at least one pro wrestling finishing move</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}