import { Suspense } from 'react'

import PostList from './components/post/post-list'
import Loading from './loading'

export default function Home() {
  return (
   <div>
     <Suspense fallback={<Loading />}>
        {/* @ts-ignore*/}
        <PostList />
      </Suspense>
   </div>
  )
}
