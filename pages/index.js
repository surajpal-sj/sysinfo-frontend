import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { Input } from '../lib/components/Input'
import Systemshort from '../lib/components/Systemshort';
// import clientPromise, { connectToDatabase } from '../lib/mongodb'

export default function Home({ }) {

    const [systems, setSystems] = useState([])
    const [isLoading, setLoading] = useState(false)
    
    useEffect(() => {
      setLoading(true)
      fetch('api/hello')
        .then((res) => res.json())
        .then((data) => {
          setSystems(data.info)
          setLoading(false)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>
  return (
    <div className="container">
      <Head>
        <title>Sysinfo</title> 
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        {/* <div className="sbar">
        <form onSubmit={searchsys}>
          <a className="active" href="#home">SYSINFO</a>
          <input type="text" placeholder="Search.."/>
          <button type="submit">search</button>
        </form>
        </div> */}
        
      </header>
      <main>
        <div className='result'>
          <p className='subtitle' >Total Systems is : {systems.length}.</p>


        </div>

      
        
        <div className="grid">
        {systems && systems.map(system =>(
          <Systemshort info={system} />
        
          ))}
        </div>

       
      
            
          
      </main>

      <footer>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Work in progrees | KINGO | 
          
        </a>
      </footer>

      <style jsx>{`

        /* search bar*/
   
        /* Float four columns side by side */
        .column {
          float: left;
          width: 25%;
          padding: 0 10px;
        }

        

        

        /* Responsive columns */
        @media screen and (max-width: 600px) {
          .column {
            width: 100%;
            display: block;
            margin-bottom: 20px;
          }
        }

       
        
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: left;
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

        .subtitle {
          font-size: 2rem;
        }


        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, 45% 45% 45%);
          // grid-gap: 10px;
          
          justify-content: center;
          flex-wrap: wrap;

          max-width:800px;
          margin-top: 3rem;
        }

        .subtitle {
          
          font-weight: bold;
        }
 
  
        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            display : flex;
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

export async function getServerSideProps(context) {
  try {
    // const { db } = await connectToDatabase()


    // await clientPromise
    return {
      props: {  },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { },
    }
  }
}

// export async function findsysbyname(db,query) {
//   const sysresult = await db
//     .collection('systeminfo')
//     .aggregate([
//       { $match: { sys_name: new ObjectId(query) } },
//       { $limit: 1 }
//     ])
//     .toArray();
//   if (!sysresult[0]) return null;
//   console.log(sysresult[0]);
// }

// function searchsys() {
//   let query = null;
//   const searchsys = async   event => {
//     event.preventDefault() // don't redirect the page
    
//     query= event.target.name.value

//     return query ;
    
//   }
//   findsysbyname(searchsys)
// }