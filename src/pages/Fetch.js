import React from 'react'
import Page from '../components/wrapper/Page'
import FetchIntro from '../data/articles/FetchIntro'
import FetchFurther from '../data/articles/FetchFurther'
import FetchRequest from '../data/articles/FetchRequest'
import FetchUrl from '../data/articles/FetchUrl'

export default function FetchPage() {
  return (
    <Page title="Fetch" tagline="HTTP request">
        <FetchIntro />
        <FetchUrl />
        <FetchRequest />
        <FetchFurther />
    </Page>
  )
}
