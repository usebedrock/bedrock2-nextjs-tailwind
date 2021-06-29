export default function Avatar(props) {
  return (
    <div>
        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-gray-500">
          <span className="font-medium leading-none text-white">{props.initials}</span>
        </span>
    </div>
  );
}
