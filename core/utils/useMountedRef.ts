import { MutableRefObject, useRef, useEffect } from 'react'

const useMountedRef = (): MutableRefObject<boolean> => {
  const ref = useRef(false)

  useEffect(() => {
    ref.current = true
    return () => {
      ref.current = false
    }
  }, [])

  return ref
}

export default useMountedRef
