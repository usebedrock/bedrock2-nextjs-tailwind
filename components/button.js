export default function Button(props) {
  return (
    <button
      type="button"
      className={` ${ props.skin == 'primary' ? 'bg-blue-700' : 'bg-white' }
                   ${ props.skin == 'primary' ? 'border-blue-700' : 'border-gray-300' }
                   ${ props.skin == 'primary' ? 'text-white' : 'text-gray-700' }
                   ${ props.skin == 'primary' ? 'hover:bg-blue-800' : 'hover:bg-gray-50' }
                    items-center px-4 py-2 border text-base font-medium
                    rounded-md  focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                   `}
    >
      {props.children}
    </button>
  );
}
