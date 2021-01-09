import React from "react";
import Container from "common/src/components/UI/Container";
import NewsletterWrapper from "./style";
import RootStore from "stores";
import { inject, observer } from "mobx-react";
import { Label } from "common/components/Label";
import { AppImage } from "common/components";
import { Grid, Button, TextField, Hidden } from "@material-ui/core";
import ColorManager from "common/Manager/ColorManager";
import FontManager from "common/Manager/FontManager";
import ImageManager from "common/Manager/ImageManager";
import i18n from "utilities/I18n";

type Props = {
  stores?: RootStore;
};

const Newsletter = inject("stores")(
  observer((props: Props) => {
    const themeStore = props.stores!.ThemeStore;
    return (
      <NewsletterWrapper>
        <Container>
          <Hidden only={["sm", "xs"]}>
            <AppImage
              width={140}
              height={170}
              style={{ imageRendering: 'auto', left: '-35px', marginRight: 8, position: "relative", top: "10px" }}
              src={ImageManager.default.images.common.footer.newsletter}
            />
          </Hidden>

          <Grid container spacing={2}>
            <Grid item className="col" md={6} xs={12}>
              <Grid container>
                <Grid item xs={12} md={6} className="label">
                  <Label fontSize={FontManager.default.mediumLarge} color={themeStore.primaryColor} >
                    {i18n.t("newsletter.title.header")}
                  </Label>
                </Grid>
                <Grid item xs={12} md={6} className="label">
                  <Label fontSize={FontManager.default.headerEM} color={themeStore.primaryColor} >
                    {i18n.t("newsletter.title.subheader")}
                  </Label>
                </Grid>
              </Grid>

              <Grid item xs={12} className="label">
                <Label fontSize={FontManager.default.remark} color={themeStore.secondaryColor} >
                  {i18n.t("newsletter.subtitle")}
                </Label>
              </Grid>
            </Grid>
            {/* <Grid item className="col" md={6} xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                  <TextField
                    label={i18n.t("button.newsletter")}
                    fullWidth
                    InputLabelProps={{
                      style: {
                        color: ColorManager.default.primaryColor,
                        fontSize: FontManager.default.text,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={1}></Grid>
                <Grid item xs={12} md={4}>
                  <Grid container justify="center">
                    <Button
                      variant="contained"
                      size="large"
                      style={{
                        backgroundColor: ColorManager.default.primaryColor,
                        color: ColorManager.default.white,
                        width: "100%",
                        height: '45px'
                      }}
                    >
                      <Label fontSize={FontManager.default.text} color={ColorManager.default.white} >
                        {i18n.t("button.newsletter.text")}
                      </Label>
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid> */}
          </Grid>
        </Container>
      </NewsletterWrapper>
    );
  })
);

export default Newsletter;