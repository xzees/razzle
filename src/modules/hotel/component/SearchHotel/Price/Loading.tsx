import React from 'react'
import { 
  TextMobile, 
  TextPrice,
  BoxPrice,
  BoxFlexRight
} from './Style'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Sale from '../Sale'
import { Skeleton } from '@material-ui/lab'

interface Iprop {
    isMobile: boolean
    href: string
    title?: string
    price: number
    discount?: any
    randomMock?: string
}

const Loading = (props: any) => {
    const {
      isMobile,
    } = props
    const isLarge = useMediaQuery('(max-width: 959px)')

    if (isMobile) {
      return (
        <>
          { props.randomMock == "S" && <Sale /> }
          <TextMobile>
            <Skeleton variant="text" width={'100%'} height={'30px'} />
          </TextMobile>
          <TextMobile>
            <Skeleton variant="text" width={'100%'} height={'30px'} />
          </TextMobile>
        </>
      )
    }

    return (      
        <BoxPrice>
          <BoxFlexRight>
              <TextMobile style={{
                width: '100%'
              }}>            <Skeleton variant="text" width={'70%'} height={'30px'} />
              </TextMobile>
          </BoxFlexRight>

          <BoxFlexRight>
            <TextMobile style={{
                width: '100%',
                marginBottom: '0.5rem'
            }}>            <Skeleton variant="text" width={'100%'} height={'30px'} />
            </TextMobile>
          </BoxFlexRight>

          <BoxFlexRight>
            <TextPrice
              style={{
                marginBottom: (!isLarge ? '1.2rem' : '5px')
              }}
            > 
              <Skeleton variant="text" width={'100%'} height={'50px'} />
            </TextPrice>
          </BoxFlexRight>
      </BoxPrice>
    )
}

export default Loading