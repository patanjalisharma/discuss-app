import PostList from '@/components/posts/post-list'
import { fetchPostBySearch } from '@/lib/query/post'
import React from 'react'

type Props = {
  searchParams: { term?: string }
  
}

const SearchPage: React.FC<Props> = async ({ searchParams }) => {
  const term = searchParams.term ?? ''

  return (
    <div>
      <h1 className="text-blue-600 font-medium">Search results for {term}</h1>
      <PostList fetchData={() => fetchPostBySearch(term)} />
    </div>
  )
}

export default SearchPage
