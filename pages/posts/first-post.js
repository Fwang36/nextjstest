import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as Sentry from "@sentry/nextjs"
import NewComponent from './NewComponent';
import { Feedback } from '@sentry-internal/feedback';



export default function(props) {

  // const eventID = Sentry.captureException(new Error("testing"))
  // const eventId = Sentry.captureMessage('User Feedback333'); 
  // console.log("orig", eventId)


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
<button
  type="button"
  onClick={() => {
    console.error("this is an error console") }}
>
  Console Error 2024
</button>


<button
  type="button"
  onClick={() => {
    try {
      Sentry.captureException(new AggregateError([new Error("1st error"), new Error("2nd Error")], "new aggregate"));
    } catch (e) {
      console.log(e instanceof AggregateError); // true

    }

    
    
    }}
>
  Throw aggregate
</button>

<button type="button"
onClick={() => {
  try {
    connectToDatabase();
  } catch (err) {
    Sentry.captureException(new Error("Connecting to database failed.", { cause: err }));
  }
  
}}>
error cause</button>

  <button type="button" onClick={() => {console.log(c)}}>UNDEFINED BUTTON</button>

  <button type="button" onClick={() => {
    try {
      throw new DOMException("Custom DOM Exception Triggered.");
    } catch (error) {
      console.log(error.stack)
      Sentry.captureException(error)
    }
  }}>Domexception</button>

<button type="button" onClick={() => {
  Sentry.captureMessage("testing Mesage replay")
  
  }}>Domexception</button>

  {/* <button type="button" onClick={() => {
    
  new Feedback({

  })    
    
    }}>feedback</button> */}



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

    Sentry.showReportDialog({user: {email: "123@gmail.com"},  eventId: eventId})
  }}>Show Dialog</button>


<button type="button" onClick={() => {
Sentry.withScope((scope) => {
  scope.setContext('fullstory', { message: "hello" });
  Sentry.captureMessage("this message")
  })
Sentry.setTag("apple", "bees")
}}>Set Tag</button>

<button type="button" onClick={() => {


const eventId = Sentry.captureException(new Error("new error"));
// OR: const eventId = Sentry.lastEventId();

const userFeedback = {
  event_id: eventId,
  name: "John Doe",
  email: "john@doe.com",
  comments: "I really like your App, thanks!",
};
Sentry.captureUserFeedback(userFeedback);

}}>User Feedback</button>

  <h2>HEFJKcsdcsdAHSwewqdDKAHSDJK</h2>
        </>
    )
}