import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as Sentry from "@sentry/nextjs"
import NewComponent from './NewComponent';
console.log("test Transaction", Sentry.getCurrentHub().getScope().getTransaction())

export default function(props) {

  const router = useRouter();
  const data = router.query;
  console.log("data", data)
  console.log("test", props)

    return (
        <>
        <Head>hello</Head>
        <h1>First Post</h1>
        <h2>
            <Link href="/">Back To Home</Link>
        </h2>
        <NewComponent />
        <button
  type="button"
  onClick={() => {
    throw new Error("Test DSN Tunneling") }}
>
  Throw error
</button>
  <button type="button" onClick={() => {console.log(c)}}>UNDEFINED BUTTON</button>
  <button type="button" onClick={() => {Sentry.close()}}>Close Sentry</button>
  <button type="button" onClick={() => {throw new Error("Hydration Error")}}>Hydration</button>
  <button type="button" onClick={() => {console.error("this is error")}}>console.error</button>
  <button type="button" onClick={() => {


    Sentry.configureScope((scope) => {
      scope._contexts = {}
    })

    
  }}>clear context</button>
  <button type="button" onClick={() => {
    Sentry.configureScope((scope) => {

      scope.setContext("test", {
        another: "testing"
      })
    })
  }}></button>
  <button type="button" onClick={() => {throw new Error("Hydration Error.")}}>Hydration.</button>
  <button type="button" onClick={() => {
    console.log("SCOPED TRANS", hub.getScope().getTransaction())
    console.log("new hub tag?", hub)
  }}>GRAB CUwENT TRANSACTION</button>
  <h2>HEFJKcsdcsdAHSwewqdDKAHSDJK</h2>
        </>
    )
}