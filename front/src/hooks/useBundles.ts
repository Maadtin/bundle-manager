import { useEffect, useState } from 'react'
import { getBundles } from '../api/bundles'
import { Bundle } from '../types'

export default function useBundles(): {
  bundles: Bundle[]
  refetch: () => void
} {
  const [bundles, setBundles] = useState<Bundle[]>([])

  function fetchBundles() {
    getBundles().then((response) => {
      setBundles(response.data)
    })
  }

  useEffect(() => {
    fetchBundles()
  }, [])

  return {
    bundles,
    refetch: fetchBundles,
  }
}
