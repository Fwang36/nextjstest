import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as Sentry from "@sentry/nextjs"
import NewComponent from './NewComponent';




export default function(props) {

  const eventID = Sentry.captureException(new Error("testing"))


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

  <button type="button" onClick={() => {


    const error = new Error("testing", {
      cause: "hello",
      details: "details?",
      stack:  "asdasdadas"
    })
    console.log(error)
    Sentry.captureException(error)

}}>custom Error</button>

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


  <button type="button" onClick={() => {

    Sentry.showReportDialog({user: {email: "123@gmail.com"},  eventId: eventID})
  }}>Show Dialog</button>
  <h2>HEFJKcsdcsdAHSwewqdDKAHSDJK</h2>
        </>
    )
}