export default function Article({ item }) {
  return (
    <article className="flex flex-col gap-y-4 items-start justify-between bg-white shadow-md p-4 rounded-md">
      <div className="w-full flex justify-between items-center gap-x-4 text-xs">
        <time className="text-gray-500">
          {new Date(item.createdAt).toDateString()}
        </time>
        <p className={"rounded-full px-3 py-1.5 font-medium text-white " + (item.category === '1' ? 'bg-red-500' : 'bg-purple-500')}>
          {item.category === '1' ? 'Birthday' : 'Kudos'}
        </p>
      </div>

      <div className="w-full bg-cover rounded-md flex flex-col justify-center items-center text-center gap-4" style={{ "backgroundImage": `url(/cards/${item.image})`, height: '400px' }}>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
          {item?.title}
        </h3>
        <img src={"/avatars/" + item.person.avatar} alt="" className="h-24 w-24 rounded-full bg-gray-50" />
        <h3 className="mt-3 text-3xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dancing-script">
          {item?.person?.firstName} {item.person.lastName}
        </h3>
        <p className="mt-5 w-1/2 line-clamp-3 text-sm leading-6 text-gray-900">{item.message}</p>
      </div>

      <div className="flex items-center gap-x-4">
        <img src={"/avatars/" + item.author.avatar} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            {item.author.firstName} {item.author.lastName}
          </p>
          {/* <p className="text-gray-600">{item.author.role}</p> */}
        </div>
      </div>
    </article>
  )
}
