import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState('')

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }
  // para recuperar la cita de carga rapida
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
