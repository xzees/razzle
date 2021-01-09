import React, { useEffect, useState } from 'react';
// import { Link, Route } from "react-router-dom"
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import ImageManager from 'common/Manager/ImageManager';
import FontManager from 'common/Manager/FontManager';
import Box from 'common/src/components/Box';
import Heading from 'common/src/components/Heading';
import Container from 'common/src/components/UI/Container';
import RootStore from 'stores';
import { observer, inject } from 'mobx-react';
import Autocomplete from '../../Autocomplete';
import { Button } from 'common/components/Button';

type PropTypes = {
  stores?: RootStore
}

const createHistory = require("history").createBrowserHistory;

const BannerSection = inject('stores')(
  observer((props: PropTypes) => {

    const uiStore = props.stores!.CollectiveRootStore;

    const [option, setOption] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [notfind, setNotfind] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState({});

    const {
      boxStyle,
      h1Style,
      h3Style,
      autoInput
    } = propsBannerSection

    useEffect(() => {
      if (searchTerm != "") {
        if (loading == false) setLoading(true)
        if (notfind == true) setNotfind(false)

        const delayDebounceFn = setTimeout(async () => {
          const data = await uiStore.apiAutocomplete(searchTerm)
          if (data.data.data.length > 0) {
            setOption(data.data.data)
            setLoading(false)
          } else {
            setOption([])
            setNotfind(true)
          }
        }, 1000)

        return () => clearTimeout(delayDebounceFn)
      }

      return () => undefined
    }, [searchTerm])

    function CheckSearch() {
      let searchData = JSON.parse(JSON.stringify(inputValue))
      let searchType = searchData.searchType
      let tourID = searchData.tourID
      let countryCode = searchData.countryCode
      let history = createHistory();
      if (searchType == 'Country') {
        history.push(`/collective/${countryCode}`)
        let pathUrl = window.location.href;
        window.location.href = pathUrl;
      } else {
        history.push(`/collective/detail/${tourID}`)
        let pathUrl = window.location.href;
        window.location.href = pathUrl;
      }
    }

    return (
      <BannerWrapper id="banner_section">
        <Container>
          <Heading content="จองทัวร์ ท่องเที่ยว กับไทยทราเวลเซ็นเตอร์" {...h1Style} />
          <Heading content="จองทัวร์ ตั๋วเครื่องบิน ตั๋วรถไฟ โรงแรม เรือสำราญ ออนไลน์ตลอด 24 ชม." {...h3Style} />
          <Box width={['100%', '100%', '90%', '80%', '70%']} {...boxStyle}>
            <Grid container spacing={1} style={{ borderRadius: 4, backgroundColor: '#440099' }}>
              <Grid item xs={12} md={9} lg={10}>
                <Box>
                  <Autocomplete {...autoInput}
                    id={'tour-search'}
                    options={option}
                    getOptionLabel={(option: any) => option.title}
                    clearOnBlur={true}
                    notfind={notfind}
                    loading={loading.toString()}
                    debug={true}
                    onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                      const evalue = (e.target as HTMLInputElement).value
                      setOption([])
                      if (evalue != "") {
                        setSearchTerm(evalue)
                      }
                    }}
                    onChange={(event: any, value: any) => {
                      setInputValue(value)
                      console.log(value)
                    }}
                    placeholder={"ประเทศ, เมือง, สถานที่ หรือรหัสทัวร์"}
                    modelLabel={"ประเทศ, เมือง, สถานที่ หรือรหัสทัวร์"}
                    modelTitle={"ค้นหาโปรแกรมทัวร์"}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={3} lg={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Button onClick={CheckSearch}>ค้นหาทัวร์</Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </BannerWrapper>
    )
  })
)

const propsBannerSection = {
  boxStyle: {
    margin: '0 auto',
  },
  h1Style: {
    as: 'h1',
    color: '#fff',
    // fontSize: ['28px', '28px', '28px', '35px', '35px'],
    fontSize: ['25px', '29px', '31px', '35px', '45px'],
    fontFamily: FontManager.default.secondaryFont,
    fontWeight: 'normal',
    lineHeight: 1,
    mb: '2px',
    textAlign: 'center'
  },
  h3Style: {
    as: 'h3',
    color: '#fff',
    fontSize: ['25px', '27px'],
    fontWeight: 'normal',
    lineHeight: 1,
    p: 0,
    m: 0,
    mb: '10px',
    textAlign: 'center'
  },
  autoInput: {
    '& input': {
      padding: 0
    }
  }
}

const BannerWrapper = styled.section`
  align-items: center;
  background-color: #00000040;
  display: flex;
  min-height: 260px;
  min-height: 280px;
  padding-top: 24px;
  ::before {
    background-image: url(${ImageManager.default.images.common.BG2});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    content: "";
    opacity: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
`;

export default BannerSection;