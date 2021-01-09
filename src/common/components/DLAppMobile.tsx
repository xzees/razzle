import React from 'react';
import styled from 'styled-components';
import i18n from 'utilities/I18n';
import { AppImage, FlexRow } from 'common/components';
import ImageManager from 'common/Manager/ImageManager';
import { Label } from 'common/components/Label';
import ColorManager from 'common/Manager/ColorManager';
import { Grid } from '@material-ui/core';

const DLAppMobile = (props: any) => {

  const [showBottomApp, setShowBottomApp] = React.useState(false);
  const onToggleApp = () => {
    setShowBottomApp(!showBottomApp);
  };

  return (
    <styles.MainappBottom>
      <styles.LoadappBottom className={showBottomApp ? 'hidden' : ''}>
        <AppImage visibleByDefault alt="close-dlapp" height={25} style={{ bottom: '17px', right: '22px', position: "fixed", zIndex: 1000 }} src="https://assets.thaitravelcenter.com/development/web/common/close.svg" className={"close"} onClick={onToggleApp} />
        <Grid container >
          <Grid item xs={2}>
            <styles.logoSocial rel='noopener' target={"_blank"} className={"ml-1 pointer"} href={"http://onelink.to/thaitravelcenter"}>
              <AppImage visibleByDefault style={{ imageRendering: 'pixelated' }} width={46} height={44} src="https://assets.thaitravelcenter.com/development/web/common/numchok-ttc.svg"  ></AppImage>
            </styles.logoSocial>
          </Grid>
          <Grid item xs={10} className="pl-2 mt-025 mb-025">
            <FlexRow>
              <Label fontSize={"1.1875rem"} color={ColorManager.default.white} style={{ marginBottom: 5 }}>{i18n.t('appbar.downloadapp.title')}</Label>
            </FlexRow>

            <FlexRow className="lh-05">
              <a aria-label="application-download" rel='noopener' style={{ width: '26%', maxWidth: 90 }} className='pointer ' href="https://play.google.com/store/apps/details?id=com.thaitravelcenter.app" target="_blank">
                <AppImage visibleByDefault
                  className="pointer rounded w-100"
                  src="https://assets.thaitravelcenter.com/development/web-v2/template/googleplay.svg"
                  alt="googleplay"
                  height="auto"
                />
              </a>
              <a aria-label="application-download" rel='noopener' style={{ width: '26%', maxWidth: 90 }} className='pointer ml-05 ' href="https://apps.apple.com/th/app/thai-travel-center/id1489160398" target="_blank">
                <AppImage visibleByDefault
                  className="pointer rounded w-100"
                  src="https://assets.thaitravelcenter.com/development/web-v2/template/appstore.svg"
                  alt="appstore"
                  height="auto"
                />
              </a>
            </FlexRow>

          </Grid>
        </Grid>
      </styles.LoadappBottom>
    </styles.MainappBottom>
  );
}

const styles = {
  MainappBottom: styled.div`
  .hidden {
    display: none !important;
  }
  .pointer {
    cursor: pointer !important;
  }
  .rounded {
    border-radius: .25rem !important;
  }
  .w-100 {
    width: 100% !important;
  }
  .ml-05 {
    margin-left: .5rem !important;
  }
  .ml-1 {
    margin-left: 1rem !important;
  }
  .pl-2 {
    padding-left: 2rem !important;
  }
  .mb-025 {
    margin-bottom: .25rem !important;
  }
  .mt-025 {
    margin-top: .25rem !important;
  }
  .lh-05 {
    line-height: .5 !important;
  }
`,
  LoadappBottom: styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  z-index: 110;
  background-image: linear-gradient(-180deg, ${ColorManager.default.primaryColor} 0%, ${ColorManager.default.thirdColor} 100%);
  color: ${ColorManager.default.white};
  display: flex;
  align-items: center;
  .hidden {
    display: none!important;
  }
`,
  logoSocial: styled.a`
  border: 1px solid ${ColorManager.default.fourthColor};
  border-radius: 10px;
  bottom: 6px;
  padding: 8px 12px;
  position: absolute;
  background-color: ${ColorManager.default.white};
  `,
  Description: styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  `
}

export default DLAppMobile;