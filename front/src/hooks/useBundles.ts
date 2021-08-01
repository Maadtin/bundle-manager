import { useEffect, useState } from 'react'
import { getBundles } from '../api/bundles'
import { Bundle } from '../types'

interface UseBundlesProps {
  text: string
  // active: boolean
  // category: number
}

export default function useBundles({ text }: UseBundlesProps): {
  bundles: Bundle[]
  refetch: () => void
} {
  const [bundles, setBundles] = useState<Bundle[]>([])

  function fetchBundles() {
    getBundles({ text }).then((response) => {
      setBundles(response.data)
    })
  }

  useEffect(() => {
    fetchBundles()
  }, [text])

  return {
    bundles,
    refetch: fetchBundles,
  }
}
