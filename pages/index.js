import Head from 'next/head'
import Link from 'next/link';
import * as Sentry from '@sentry/nextjs';
import {useState, useEffect} from 'react';
import NewComponent from './posts/NewComponent';
// const hub = new Sentry.Hub();

let transaction2;
const id = "12345"

Sentry.setUser({
  id: id
})
// console.log('process.env.VERCEL_GIT_COMMIT_SHA: ', process.env.VERCEL_GIT_COMMIT_SHA);
// Sentry.captureException(new Error("test"))



export default function Home() {

  const [hub, setHub] = useState(new Sentry.Hub())

  return (
    
    <div className="container">
      <Head props={hub}>
        <title>Create Nex App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <NewComponent message="hi" prop={hub}>adsuhaiudhaisdu</NewComponent>
        <h1 className="title">
          Learn <Link props={hub} href={{
            pathname: "/posts/first-post",
            query: Sentry.getCurrentHub()
            }}>this page!</Link>
        </h1>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <div className="grid">
          <button type="button" onClick={() => {
            Sentry.configureScope(scope => {
              scope.setContext("1", {
                test: "testingContext1"
              })
            })
          }}>
          SetContext1
          </button>
          <button type="button" onClick={() => {throw new Error("HomePage")}}>Test</button>
          
          <button type="button" onClick={() => {
            Sentry.configureScope(scope => {
              scope.setContext("1", {
                test2: "testingContext2"
              })
            })
          }}>
            SetContext2
          </button>
          <button type="button" onClick={() => {
            Sentry.configureScope(scope => {
              scope.setContext("1",{
                ...scope._contexts,
                test3: "testing Spread"
              })
            })
          }}>Test Spread</button>
          <button type="button" onClick={() => {

            const transaction1 = Sentry.startTransaction({ name: "shopCheckout" }); 
            hub.setTag("test", "testValue")
            Sentry.getCurrentHub().configureScope(scope => scope.setSpan(transaction1));  
            
            // console.log("test current hub", Sentry.getCurrentHub())
            // setHub(Sentry.getCurrentHub())
            // console.log(hub)
            // transaction2 = Sentry.getCurrentHub().getScope().getTransaction()
            // console.log("TRANSACTION2", transaction2)
            // setHub(Sentry.getCurrentHub())
            }}
          >Start Transaction</button>


          <button type="button" onClick={() => {
            const transaction1 = Sentry.getCurrentHub().getScope().getTransaction()

            transaction1.finish()
          }}>FINSIH</button>
<button type="button" onClick={() => {

  console.log(hub)

}}>hub test</button>

        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

