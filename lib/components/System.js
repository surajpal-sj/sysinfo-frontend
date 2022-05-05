import styles from './System.module.css';
// import { clsx } from 'clsx';


export default function System({info}) {

    return(
        <div className={styles.card}>
            <p className="title">{info.sys_name} </p>
            <span><p>updated : [{info.last_run}]</p></span>
            <p className="subtitle">System system</p>
            <p >System Name : {info.system.name}</p> 
            <p >Uptime : {info.system.uptime}</p>
            <p>IP :{info.system.network.ip}</p>
            <p>Mac :{info.system.network.mac}</p>
            <p>Hostname :{info.system.network.hostname}</p>
            <p className='subtitle'>Active User : {info.user.Users}</p>


            <p className="subtitle">CPU system</p> 
            <p >CPU: {info.system.cpu.name}</p> 
            <p >cores: {info.system.cpu.cores}</p> 
            <p >Threads: {info.system.cpu.threads}</p> 
            <p >Architecture: {info.system.cpu.arch}</p>

            <p className="subtitle">R.A.M. system</p>
            <p>Total :{info.system.memory.total}</p>
            <p>Used :{info.system.memory.used} ({info.system.memory.percentage}%)</p>
            <p>Free :{info.system.memory.free}</p>


            <p className="subtitle">C drive system</p> 
            <p>Total :{info.system.disk.total}</p>
            <p>Used :{info.system.disk.used}</p>
            <p>Free :{info.system.disk.free}</p> 
        </div>
           
    )
}