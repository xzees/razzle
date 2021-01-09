import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { cryptoTheme } from 'common/src/theme/crypto';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle } from 'common/containers/Crypto/crypto.style';
import Loadable from 'react-loadable'
import LoadingPage from 'modules/main/component/LoadingPage'
import Heading from 'common/src/components/Heading';
import styled from 'styled-components';
import Box from 'common/src/components/Box';
import Banner from 'modules/main/component/Banner'
// import DetailLoading from '../component/DetailLoading';
import Detail from 'modules/main/component/Detail/DetailAPI'
type Props = {}
class TestPage extends React.PureComponent<Props> {
  
  renderLoadableComponents = (component: any,boolean:boolean = false) => {
    return Loadable({
      loader: () => component,
      loading: () => boolean ?  null : null
    })
  }
  
  render() {
    // const Banner = this.renderLoadableComponents(import("modules/main/component/Banner"))
    // const Detail = this.renderLoadableComponents(import("modules/main/component/Detail"),true)
    return (
      <ThemeProvider theme={cryptoTheme}>
        <Fragment>
          <ResetCSS />
          <GlobalStyle />
          <Banner>
            <styles.Box>
              <Heading {...TextBannerh1} content="EXPERIENCE A JOURNEY WORTH" />
              <Heading {...TextBannerh3} content="สัมผัสประสบการณ์ใหม่กับการเดินทางที่คู่ควร" />
            </styles.Box>
          </Banner>
          <Detail />
        </Fragment>
      </ThemeProvider>
    )
  }
}


const styles = {
  Box:styled(Box)`
    width:100%;
    text-align: center;
  `,
}
const TextBannerh1 = {
  fontFamily:"DBHeaventRoundedv32" ,
  fontWeight:"unset",
  as: 'h1',
  color: '#ffff',
  fontSize: ['30px', '30px', '30px', '40px', '60px'],
  lineHeight:"50px",

}
const TextBannerh3 = {
  fontFamily:"DBHeaventRoundedv32" ,
  fontWeight:"unset",
  as: 'h3',
  color: '#fff',
  fontSize: ['30px', '30px', '20px', '28px', '40px'],
  lineHeight:"50px",
  
}

export default TestPage