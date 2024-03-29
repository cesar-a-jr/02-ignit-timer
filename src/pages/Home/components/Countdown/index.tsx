import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

import { CountdownContainer, Separator } from './styles'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinised,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalseconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )
        if (secondsDifference >= totalseconds) {
          markCurrentCycleAsFinised()
          setSecondsPassed(totalseconds)

          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [
    activeCycle,
    totalseconds,
    activeCycleId,
    markCurrentCycleAsFinised,
    setSecondsPassed,
  ])

  const currentSeconds = activeCycle ? totalseconds - amountSecondsPassed : 0

  const minutesCalc = Math.floor(currentSeconds / 60)
  const secondsCalc = currentSeconds % 60

  const minutes = String(minutesCalc).padStart(2, '0')
  const seconds = String(secondsCalc).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
