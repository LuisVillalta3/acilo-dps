import { useEffect, useState } from "react"

export const useCitaCard = () => {
  const [id, setId] = useState(0)

  return {
    id,
    setId,
  }
}
