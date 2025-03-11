'use client'
import { useEffect, useRef, useState } from 'react'
import { WSS_URL_API_FTOYD } from '../constants'
import { Match, MatchesWs } from '@/app/models/api.matches'

interface SocketConnectAPIProps {
  onMessage: (matches: Match[]) => void
  onError: (error: Event) => void
}

export default function useSocketConnectAPI({
  onMessage,
  onError,
}: SocketConnectAPIProps) {
  const [isReady, setReady] = useState(false)
  const [waitingToReconnect, setWaitingToReconnect] = useState(false)
  const socketRef = useRef<WebSocket | null>(null)
  useEffect(() => {
    if (waitingToReconnect) {
      return
    }
    if (!socketRef.current) {
      const socket = new WebSocket(WSS_URL_API_FTOYD)
      socketRef.current = socket
      socketRef.current.onerror = (e) => onError(e)
      socketRef.current.onopen = () => {
        setReady(true)
        console.log('ws opened')
      }
      socketRef.current.onclose = () => {
        if (socketRef.current) {
          console.log('ws closed by server')
        } else {
          console.log('ws closed by app component unmount')
          return
        }
        if (waitingToReconnect) {
          return
        }
        setReady(false)
        console.log('ws closed')
        setWaitingToReconnect(true)
        setTimeout(() => setWaitingToReconnect(false), 5000)
      }
    }
    socketRef.current.onmessage = ({ data }: MessageEvent<string>) => {
      const msg: MatchesWs = JSON.parse(data)
      onMessage(msg.data)
    }

    return () => {
      console.log('Cleanup ws')
      if (socketRef.current !== null) socketRef.current.close()
      socketRef.current = null
    }
  }, [waitingToReconnect, onMessage, onError])
  return isReady
}
