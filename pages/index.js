import Head from 'next/head'
import { Input } from '../lib/components/Input'
import clientPromise, { connectToDatabase } from '../lib/mongodb'

export default function Home({ info , sysresult}) {
  return (
    <div className="container">
      <Head>
        <title>Sysinfo</title> 
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <div className="sbar">
        <form onSubmit={searchsys}>
          <a className="active" href="#home">SYSINFO</a>
          <input type="text" placeholder="Search.."/>
          <button type="submit">search</button>
        </form>
        </div>
        
      </header>
      <main>
        <div className='result'>
          <p className='subtitle' >result is : {sysresult}.</p>


        </div>

      
        
        <div className="grid">
        {info && info.map(info =>(
          <div className="card">
            <p className="title">{info.sys_name} </p>
            <span><p>updated : [{info.last_run}]</p></span>
            <p className="subtitle">System info</p>
            <p >System Name : {info.system.name}</p> 
            <p >Uptime : {info.system.uptime}</p>
            <p>IP :{info.system.network.ip}</p>
            <p>Mac :{info.system.network.mac}</p>
            <p>Hostname :{info.system.network.hostname}</p>
            <p className='subtitle'>Active User : {info.user.Users}</p>


            <p className="subtitle">CPU info</p> 
            <p >CPU: {info.system.cpu.name}</p> 
            <p >cores: {info.system.cpu.cores}</p> 
            <p >Threads: {info.system.cpu.threads}</p> 
            <p >Architecture: {info.system.cpu.arch}</p>

            <p className="subtitle">R.A.M. info</p>
            <p>Total :{info.system.memory.total}</p>
            <p>Used :{info.system.memory.used} ({info.system.memory.percentage}%)</p>
            <p>Free :{info.system.memory.free}</p>


            <p className="subtitle">C drive info</p> 
            <p>Total :{info.system.disk.total}</p>
            <p>Used :{info.system.disk.used}</p>
            <p>Free :{info.system.disk.free}</p> 
           
            </div>
            
          
          

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




        .card {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          background-color: DodgerBlue;
          color: white;
          margin: 10px;
          text-align: Left;
          line-height: 75px;
          font-size: 30px;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        
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
        .card:hover,
        .card:focus,
        .card:active {
          color: black;
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
    const { db } = await connectToDatabase()

    const data = await db.collection("systeminfo").find({}).limit(150).toArray();

    const info = JSON.parse(JSON.stringify(data));  //to resolve child error


    await clientPromise
    return {
      props: { info: info },
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false },
    }
  }
}

export async function findsysbyname(db,query) {
  const sysresult = await db
    .collection('systeminfo')
    .aggregate([
      { $match: { sys_name: new ObjectId(query) } },
      { $limit: 1 }
    ])
    .toArray();
  if (!sysresult[0]) return null;
  console.log(sysresult[0]);
}

function searchsys() {
  let query = null;
  const searchsys = async   event => {
    event.preventDefault() // don't redirect the page
    
    query= event.target.name.value

    return query ;
    
  }
  findsysbyname(searchsys)
}