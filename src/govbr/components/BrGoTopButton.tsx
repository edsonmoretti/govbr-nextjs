'use client'
import React from 'react'
import { Button, Tooltip } from '@chakra-ui/react'
import { FaChevronUp } from '@/govbr/components/icons/fa'

const BrGoTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  // Show button when page is scrolled down
  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    isVisible && (
      <Tooltip label="Voltar ao topo" hasArrow={true} placement={'left-start'}>
        <Button
          bg={'#063691'}
          className="br-button circle"
          onClick={scrollToTop}
          color={'white'}
          _hover={{
            background: '#1351B4',
          }}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}
        >
          <FaChevronUp />
        </Button>
      </Tooltip>
    )
  )
}

export default BrGoTopButton
