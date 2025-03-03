'use client'
import { useEffect } from 'react'
import { io } from 'socket.io-client'
import { WSS_URL_API_FTOYD } from '../constants'
const socket = io(WSS_URL_API_FTOYD)
export default function useSocketConnectAPI() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected to:' + WSS_URL_API_FTOYD)
    })
    socket.on('connect_error', () => {
      console.log('Connect error to:' + WSS_URL_API_FTOYD)
    })
    return () => {
      socket.on('disconnect', () => {
        console.log('Disconnected from:' + WSS_URL_API_FTOYD)
      })
    }
  }, [])
  return <></>
}
