import React from 'react'
import Page from '../components/wrapper/Page'
import HttpRequestAlternatives from '../data/articles/HttpRequestAlternatives'
import HttpRequestFetch from '../data/articles/HttpRequestFetch'

export default function HttpRequestPage() {
  return (
    <Page title="HTTP Request">
        <HttpRequestAlternatives />
        <HttpRequestFetch />
    </Page>
  )
}
