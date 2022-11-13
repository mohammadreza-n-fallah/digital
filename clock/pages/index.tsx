import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [time, setTime] = useState<any>()

    useEffect(() => {
      const timer = setInterval(() => {
          const date = new Date();
          
          setTime({
              hour:date.getHours().toString().split(""),
              minuts:date.getMinutes().toString().split(""),
              second:date.getSeconds().toString().split("")
          })
      }, 1000)
      return () => clearInterval(timer)
    }, [])

  return (
    <div className='clock'>
      {time && (
        <div className='box' >
          <div className='div'>{time.hour[0]}</div>
          <div className='div'>{time.hour[1]}</div>
          <span className='dot'>:</span>
          <span className='div'>{time.minuts[0]}</span>
          <span className='div'>{time.minuts[1]}</span>
          <span className='dot'>:</span>
          <div className='div'>{time.second[0]}</div>
          <div className='div'>{time.second[1]}</div>
        </div>
      )}
    </div>
  )
}
