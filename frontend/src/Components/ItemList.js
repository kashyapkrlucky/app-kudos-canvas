import UserList from "./UserList";


export default function ItemList({ people }) {
  return (
    <ul className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <img className="h-24 w-24 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
            <div className="min-w-0 flex flex-col gap-y-2">
              <div className="text-sm font-semibold leading-6 text-gray-900">{person.name}</div>
              <div className="text-xs leading-5 text-gray-500">{person.email}</div>
              <UserList />
            </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <div className="text-sm leading-6 text-gray-900">{person.role}</div>
          </div>
        </li>
      ))}
    </ul>
  )
}
