import React from "react";
import Container from "common/src/components/UI/Container";
import Boxs from "@material-ui/core/Box";
import { Skeleton } from '@material-ui/lab';
import { Grid } from "@material-ui/core";

const DetailLoading = () => {
  return (
    <div style={{backgroundColor:'#d9deea'}}>
    <Container >
      <Boxs pt={6} pb={6}>
      <Grid  container  spacing={3} >
          <Grid item xs={12}>
          <Skeleton animation="wave" height={50} width="20%" style={{ marginBottom: 6 }} />
          </Grid>
          <Grid item xs={12}>
          <Skeleton animation="wave" height={50} width="50%" style={{ marginBottom: 6 }} />
          </Grid>
          <Grid item xs={12}>
          <Skeleton animation="wave" height={50} width="100%" style={{ marginBottom: 6 }} />
          </Grid>
          <Grid item xs={12}>
          <Skeleton animation="wave" height={50} width="100%" style={{ marginBottom: 6 }} />
          </Grid>
          <Grid item xs={12}>
          <Skeleton animation="wave" height={50} width="100%" style={{ marginBottom: 6 }} />
          </Grid>
          <Grid item xs={12}>
          <Skeleton animation="wave" height={50} width="100%" style={{ marginBottom: 6 }} />
          </Grid>
          <Grid item xs={12}>
          <Skeleton animation="wave" height={50} width="100%" style={{ marginBottom: 6 }} />
          </Grid>
          <Grid item xs={12}>
          <Skeleton animation="wave" height={50} width="100%" style={{ marginBottom: 6 }} />
          </Grid>
          <Grid item xs={12}>
          <Skeleton animation="wave" height={50} width="100%" style={{ marginBottom: 6 }} />
          </Grid>
        </Grid>
      </Boxs>
    </Container>
    </div>
  )
}


export default DetailLoading