'use client'
import { useEffect, useRef, useState } from 'react'
import { WSS_URL_API_FTOYD } from '../constants'
import { Match, MatchesWs } from '@/app/models/api.matches'

interface SocketConnectAPIProps {
  onMessage: (matches: Match[]) => void
  onError: (error: Error) => void
}

export default function useSocketConnectAPI({ onMessage }: SocketConnectAPIProps) {
  const [isReady, setReady] = useState(false)
  const socketRef = useRef<WebSocket>(new WebSocket(WSS_URL_API_FTOYD))

  useEffect(() => {
    socketRef.current.addEventListener('open', () => {
      setReady(true)
    })
    socketRef.current.addEventListener(
      'message',
      ({ data }: MessageEvent<string>) => {
        const msg: MatchesWs = JSON.parse(data)
        onMessage(msg.data)
      }
    )
  }, [onMessage])

  return isReady
}
