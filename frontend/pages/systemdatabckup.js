import { connectToDatabase } from "../lib/mongodb";

export default function systemdata({ systemdata }) {
  return (
    <div>
      <head>
        <title>Live System information</title>
      </head>

      <main>
      <h1>All system data</h1>
      <p>
        <small>Ctrl+f to find specific system information</small>
      </p>
      <ul>
        {systemdata.map((systemdata) => (
          <li>
            <h2 className="title">{systemdata.sys_name} <br></br> [last update : {systemdata.last_run}]</h2>

              <h3 className="subtitle">System info</h3>
              <p >System Name : {systemdata.system.name}</p> 
            <p >Uptime : {systemdata.system.uptime}</p>
            <p>IP :{systemdata.system.network.ip}</p>
            <p>Mac :{systemdata.system.network.mac}</p>
            <p>Hostname :{systemdata.system.network.hostname}</p>
            <p className='subtitle'>Active User : {systemdata.user.Users}</p>
              
              
              <h3 className="subtitle">CPU info</h3> 
              <p >CPU: {systemdata.system.cpu.name}</p> 
              <p >cores: {systemdata.system.cpu.cores}</p> 
              <p >Threads: {systemdata.system.cpu.threads}</p> 
              <p >Architecture: {systemdata.system.cpu.arch}</p>

              <h3 className="subtitle">R.A.M. info</h3>
              <p>Total :{systemdata.system.memory.total}</p>
              <p>Used :{systemdata.system.memory.used} ({systemdata.system.memory.percentage}%)</p>
              <p>Free :{systemdata.system.memory.free}</p>
            
    
              
              <h3 className="subtitle">C drive info</h3> 
              <p>Total :{systemdata.system.disk.total}</p>
              <p>Used :{systemdata.system.disk.used}</p>
              <p>Free :{systemdata.system.disk.free}</p>
              
          </li>
        ))}
      </ul>
      </main>
      <footer>
          <p className="footer">Work in progress | By -Suraj and Deevakar</p>
      </footer>
      <style jsx>{`
      .footer{

        width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
      }
      
      
      
      `}</style>
    </div>
  );
}


export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const systemdata = await db
    .collection("systeminfo")
    .find({})
    .sort({ metacritic: -1 })
    .limit(150)
    .toArray();

  return {
    props: {
      systemdata: JSON.parse(JSON.stringify(systemdata)),
    },
  };
}