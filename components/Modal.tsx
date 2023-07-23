'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, useCallback, useRef } from 'react'
import Image from 'next/image'

const Modal = ({ children }: { children: ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null)
  const wrapper = useRef<HTMLDivElement>(null)

  const router = useRouter()

  const onDismiss = useCallback(() => {
    // dismiss to home page
    router.push('/')
  }, [router])

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      // click outside of the modal and it'll clost just like the onDismiss
      if (e.target === overlay.current && onDismiss) onDismiss()
    },
    [onDismiss, overlay]
  )

  return (
    <div ref={overlay} className="modal" onClick={handleClick}>
      <button type="button" onClick={onDismiss} className="absolute top-4 right-8">
        <Image src="/close.svg" alt="close" width={17} height={17} />
      </button>

      <div ref={wrapper} className="modal_wrapper">
        {children}
      </div>
    </div>
  )
}

export default Modal
