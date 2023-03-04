import React from 'react'
import Page from '../components/wrappers/Page'
import HttpRequestAlternatives from '../data/articles/HttpRequestAlternatives'
import RedirectArticle from '../components/wrappers/RedirectArticle'
import HttpRequestJson from '../data/articles/HttpRequestJson'

export default function HttpRequestPage() {
  return (
    <Page title="HTTP Request" >
        <HttpRequestAlternatives />
        <HttpRequestJson />
        <RedirectArticle title="Fetch" path="/fetch" />
        <RedirectArticle title="Get Request" path="/fetchget" />
        <RedirectArticle title="Post Request" path="/fetchpost" />
    </Page>
  )
}
