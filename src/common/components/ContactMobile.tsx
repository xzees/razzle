import React from 'react';
import styled from 'styled-components';
import { AppImage } from 'common/components';
import ImageManager from 'common/Manager/ImageManager';

const ContactMobile = (props: any) => {

  const [toggleSocial, setToggleSocial] = React.useState(false);
  const onToggleSocial = () => {
    setToggleSocial(!toggleSocial);
  };

  return (
    <styles.SocialBlock>
      <button className={`shareButton main ${toggleSocial ? 'open' : ''}`} onClick={onToggleSocial}>
        <AppImage visibleByDefault src="https://assets.thaitravelcenter.com/development/web/common/share-icon.svg" className={"share"} />
        <AppImage src="https://assets.thaitravelcenter.com/development/web/common/close-icon.svg" className={"close"} />
      </button>

      <button className={`shareButton pn ${toggleSocial ? 'open' : ''}`}>
        <a rel="noreferrer" href="tel:021719999" target="_blank" id="icon-tl-m-phone">
          <AppImage visibleByDefault width={50} height={50} style={{ backgroundColor: 'white' }} src="https://assets.thaitravelcenter.com/development/web/common/tel-icon-green.svg" />
        </a>
      </button>

      <button className={`shareButton fb ${toggleSocial ? 'open' : ''}`}>
        <a rel="noreferrer" href="https://m.me/thaitravelcenter" target="_blank" id="icon-tl-m-facebook">
          <AppImage visibleByDefault src="https://assets.thaitravelcenter.com/development/web/common/sharebutton-icon.svg" />
        </a>
      </button>

      <button className={`shareButton ln ${toggleSocial ? 'open' : ''}`}>
        <a rel="noreferrer" href="https://line.me/ti/p/@thaitravelcenter" target="_blank" id="icon-tl-m-line">
          <AppImage visibleByDefault style={{ imageRendering: 'pixelated' }} src="https://assets.thaitravelcenter.com/development/web/common/linebutton-icon.svg" />
        </a>
      </button>
    </styles.SocialBlock>
  );
}

const styles = {
  SocialBlock: styled.div`
    position: fixed;
    right: 0px;
    bottom: 70px;
    transition: bottom 200ms;
    z-index: 999;
    .shareButton.main .share,.shareButton.main .close,.shareButton.main .check{
      position: absolute;
      top: 0px;
      left: 0px;
      transition: all 150ms;
    }

    .share{
      // box-shadow: #80808073 1px 4px 7px 1px;
      border-radius: 37px;
    }

    .share, .open .close, .sent .check{
      width: 100%;
      height: 100%;
      transform: rotate(0) scale(1);
      opacity: 1;
    }

    .close, .open .share, .check, .sent .share{ opacity: 0; transform: rotate(90deg) scale(0); }
    /* .shareButton.main .close{ transform: rotate(0) scale(2); } */

    .shareButton, .shareButton.open{
      border: none;
      border-radius: 50%;
      background: transparent;
      padding: 0;
      /* overflow: hidden; */
      outline: none;
      margin: 0.5rem;
      width: 50px;
      height: 50px;
      box-sizing: content-box;
      transition: all 200ms;
      position: absolute;
      opacity: 1;
      transform: scale(1);
      box-shadow: 0px 1px 3px rgba(0,0,0,0.3);
      min-width: unset;
    }

    .shareButton.main{
      background: #fff;
      position: relative;
      padding: 0.5rem;
      width: 40px;
      height: 40px;
    }

    .shareButton:hover, .shareButton.open:hover{
      background: #FFFFFF;
      transform: scale(1.1) translateY(-3px);
      box-shadow: 0 3px 6px rgba(0,0,0,0.25);
    }
    .shareButton svg{
      display: block;
      /* width: 60px;
      height: 60px; */
      opacity: 1;
      transition: all 150ms;
      /*transform: scale(1);*/
    }

    .pn, .shareButton.open.ln{ transition-delay: 200ms }
    .fb, .shareButton.open.fb{ transition-delay: 100ms }
    .ln, .shareButton.open.pn{ transition-delay: 0ms }

    .pn, .fb, .ln{
      overflow: hidden;
      opacity: 1;
      transform: scale(0.4);
    }

    .pn.open{ left: -120%; }

    .fb.open{ top: -80%; left: -80%; }

    .ln.open{ top: -120%; }

    .pn{
      top: 5%;
      left: -55%;
      transform-origin: 100% 50%;
    }

    .fb{
      top: -45%;
      left: -47%;
      transform-origin: 100% 100%;
    }

    .ln{
      top: -60%;
      left: 0%;
      transform-origin: 50% 100%;
    }

    .social-block{
      position: fixed;
      right: 0px;
      bottom: 0px;
      z-index: 999;
    }

    .shareButton.main:before{
      content: '';
      background: rgb(255,255,255,0.3);
      width: 460%;
      height: 460%;
      display: block;
      position: absolute;
      border-radius: 50%;
      top: -180%;
      left: -180%;
      /* border: 1px solid rgb(255,255,255,.2); */
      transform: scale(0);
      transition: all 200ms;
    }

    .shareButton.main:after{
      content: '';
      background: rgb(255,255,255,0.3);
      width: 320%;
      height: 320%;
      display: block;
      position: absolute;
      border-radius: 50%;
      top: -110%;
      left: -110%;
      /* border: 1px solid rgb(255,255,255,.2); */
      transform: scale(0);
      transition: all 200ms;
    }

    .shareButton.main.open:before, .shareButton.main.open:after{ transform: scale(1); }
  `,
}

export default ContactMobile;