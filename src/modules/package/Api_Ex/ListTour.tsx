import React, { Component } from 'react';

import { Container, Button, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import _ from 'lodash';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import moment from 'moment';

// class App extends Component {
//   const [state, setstate] = useState(initialState)
//   render() {
//     return <Autocomplete />;
//   }
// }
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  })
);

const App = () => {
  const classes = useStyles();
  const [list, setList] = React.useState<any[]>([]);
  const [value, setValue] = React.useState('');
  const [date, setDate] = React.useState({
    DateFrom: moment(new Date()).format('YYYY-MM-DD'),
    DateTo: moment(
      new Date(new Date().setDate(new Date().getDate() + 6))
    ).format('YYYY-MM-DD'),
  });

  const url = `https://dev-services.travizgo.com/sightseeing/api/activity/search`;

  const PostData = async () => {
    console.log(value);
    const MetaData = {
      filters: [{ searchFilterItems: [{ type: 'text', value: value }] }],
      from: date.DateFrom,
      to: date.DateTo,
      language: 'th',
      pagination: { itemsPerPage: 12, page: 1 },
      order: 'PRICE',
    };
    console.log(MetaData);
    const res = await axios.post(url, MetaData);
    const list = (_.get(res.data, 'data.activities') as any[]) || [];
    setList(list);
  };

  return (
    <Container maxWidth="md">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="ค้นหาชื่อเมือง"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={() => PostData()}>
          Primary
        </Button>
        <Typography variant="h5" component="h5">
          {`DateFrom : ${date.DateFrom}`}
          <br></br>
          {`DateTo : ${date.DateTo}`}
        </Typography>
      </form>
      {list.map((res, i) => {
        console.log(res);
        return (
          <div key={i}>
            {res.amountsFrom.map((res: any) => {
              return (
                <div>
                  {'ageFrom : '}
                  {res.ageFrom}
                  <br />
                  {'ageTo : '}
                  {res.ageTo}
                  <br />
                  {'amount : '}
                  {res.amount}
                  <br />
                  {'bigBonus : '}
                  {res.bigBonus}
                  <br />
                  {'boxOfficeAmount : '}
                  {res.boxOfficeAmount}
                  <br />
                  {'mandatoryApplyAmount : '}
                  {res.mandatoryApplyAmount}
                  <br />
                  {'markupPrice : '}
                  {res.markupPrice}
                  <br />
                  {'netAmount : '}
                  {res.netAmount}
                  <br />
                  {'discountPrice : '}
                  {res.discountPrice}
                  <br />
                  {'netPrice : '}
                  {res.netPrice}
                  <br />
                  {'paxType : '}
                  {res.paxType}
                  <hr />
                </div>
              );
            })}
            {`Code : ${res.code}`}
            <br />
            {`bookingAmount : ${res.bookingAmount}`}
            <br />
            {`bookingAmountTrans : ${res.bookingAmountTrans.en}`}
            <br />
            {`bookingAmountTrans : ${res.bookingAmountTrans.th}`}
            <br />
            {`bookingAmountValue : ${res.bookingAmountValue}`}
            <br />
            {`content Description : ${res.content.description}`}
            <br />
            {`content Name : ${res.content.name}`}
            <br />

            {res.content.media.images[0].urls.map((res: any, i: number) => {
              return <div> {`Images : ${res.resource}`}</div>;
            })}
            <br />
            {`Country Code : ${res.country.code}`}
            <br />
            {`Country Name : ${res.country.name}`}
            <br />
            {`Country Code : ${res.country.destinations[0].code}`}
            <br />
            {`Country name : ${res.country.destinations[0].name}`}
            <br />
            {`currency : ${res.currency}`}
            <br />
            {`currencyName : ${res.currencyName}`}
            <hr />
          </div>
        );
      })}
    </Container>
  );
};

export default App;
