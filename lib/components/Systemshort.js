import styles from './Systemshort.module.css';
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
            <p>Hostname :{info.system.network.hostname}</p>
            <p className='subtitle'>Active User : {info.user.Users}</p>


        </div>
           
    )
}