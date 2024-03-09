const posts = [
  {
    id: 1,
    title: 'Congrats on your achievement',
    created: 'Mar 16, 2020',
    category: { title: 'greeting' },
    imageUrl: 'https://thumbs.dreamstime.com/b/congrats-confetti-colored-text-76321031.jpg',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }, {
    id: 1,
    title: 'Congrats on your achievement',
    created: 'Mar 16, 2020',
    category: { title: 'greeting' },
    imageUrl: 'https://thumbs.dreamstime.com/b/congrats-confetti-colored-text-76321031.jpg',
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  }
]

export default function Blog() {
  return (
    <div className="mx-auto flex flex-col gap-y-8 border-t border-gray-200 pt-4">
      {posts.map((post) => (
        <article key={post.id} className="flex flex-col items-start justify-between">
          <div className="flex items-center gap-x-4 text-xs">
            <time className="text-gray-500">
              {post.created}
            </time>
            {/* <a
              href={post.category.href}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {post.category.title}
            </a> */}
          </div>
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <span className="absolute inset-0" />
              {post.title}
            </h3>
            <img src={post.imageUrl} alt="" className="w-full" />
            {/* <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p> */}
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900">
                <span className="absolute inset-0" />
                {post.author.name}
              </p>
              <p className="text-gray-600">{post.author.role}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
