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
  const [list, setList] = React.useState({
    id: '',
    activityCode: '',
    code: '',
    name: '',
    bookingAmount: '',
    complete: '',
    creationTime: '',
    currency: '',
    currencyName: '',
    language: '',
    type: '',
    amountsFrom: [
      {
        activityId: 0,
        ageFrom: 0,
        ageTo: 0,
        amount: 0,
        boxOfficeAmount: 0,
        id: 0,
        mandatoryApplyAmount: '',
        paxType: '',
      },
    ],
    operationDays: [
      {
        activityId: 0,
        code: '',
        name: '',
        id: 0,
      },
    ],
    tags: [
      {
        activityId: 0,
        fontColor: '',
        id: 0,
        imageIcon: '',
        text: '',
      },
    ],
    content: {
      activityCode: '',
      activityFactsheetType: '',
      activityId: 0,
      contentId: '',
      countries: [],
      description: '',
      detailedInfo: [],
      featureGroups: [
        {
          contentId: 0,
          excluded: [
            {
              contentFeatureGroupId: 0,
              description: '',
              featureType: '',
              id: 0,
            },
          ],
          groupCode: '',
          id: 0,
        },
      ],
      id: 0,
      location: {
        startingPoints: [
          {
            contentId: 0,
            id: 0,
            meetingPoint: {
              id: 0,
              description: '',
              locationStartingPointId: 0,
              type: '',
              country: {
                code: '',
                id: 0,
                meetingPointId: 0,
                name: '',
                destinations: [
                  {
                    code: '',
                    id: 0,
                    meetingPointCountryId: 0,
                    name: '',
                  },
                ],
              },
            },
            type: '',
          },
        ],
      },
      media: {
        images: [
          {
            contentId: 0,
            id: 0,
            mimeType: '',
            urls: [
              {
                dpi: 0,
                height: 0,
                id: 0,
                mediaImageId: 0,
                resource: '',
                sizeType: '',
                width: 0,
              },
            ],
          },
        ],
      },
      name: '',
      segmentationGroups: [
        {
          code: '',
          contentId: 0,
          id: 0,
          name: '',
          segments: [
            {
              code: '',
              id: 0,
              name: '',
              segmentationGroupId: 0,
            },
          ],
        },
      ],
    },
    country: {
      activityId: 0,
      code: '',
      destinations: [
        {
          activityCountryId: 0,
          code: '',
          id: 0,
          name: '',
        },
      ],
      id: 0,
      name: 'Frace',
    },
  });
  const [value, setValue] = React.useState({
    code: 'E-E10-ESSENTIALP',
  });
  const [date, setDate] = React.useState({
    DateFrom: moment(new Date()).format('YYYY-MM-DD'),
    DateTo: moment(
      new Date(new Date().setDate(new Date().getDate() + 6))
    ).format('YYYY-MM-DD'),
  });

  const url = `https://dev-services.travizgo.com/sightseeing/api/activity/detail/full`;

  React.useEffect(() => {
    (async () => {
      const MetaData = {
        code: value.code,
        from: date.DateFrom,
        to: date.DateTo,
        language: 'th',
        paxes: [{ age: 30 }],
      };
      const res = await axios.post(url, MetaData);
      const list = _.get(res.data, 'data.activity');
      setList(list);
    })();
  }, []);
  console.log(list);
  return (
    <Container maxWidth="md">
      <form className={classes.root} noValidate autoComplete="off">
        <Typography variant="h5" component="h5">
          {`Code : ${value.code}`}
          <br></br>
          {`DateFrom : ${date.DateFrom}`}
          <br></br>
          {`DateTo : ${date.DateTo}`}
        </Typography>
      </form>
      {`id : ${list.id}`}
      <br />
      {`code : ${list.code}`}
      <br />
      {`name : ${list.name}`}
      <br />
      {`activityCode : ${list.activityCode}`}
      <br />
      {`bookingAmount : ${list.bookingAmount}`}
      <br />
      {`complete : ${list.complete}`}
      <br />
      {`creationTime : ${list.creationTime}`}
      <br />
      {`currency : ${list.currency}`}
      <br />
      {`currencyName : ${list.currencyName}`}
      <br />
      {`language : ${list.language}`}
      <br />
      {`type : ${list.type}`}
      <br />
      {`AmountsFrom `}
      <hr />
      {list.amountsFrom.map((res: any, i: number) => {
        return (
          <div key={i}>
            {`AmountsFrom : ${i}`}
            <br />
            {`id : ${res.id}`}
            <br />
            {`activityId : ${res.activityId}`}
            <br />
            {`ageFrom : ${res.ageFrom}`}
            <br />
            {`ageTo : ${res.ageTo}`}
            <br />
            {`amount : ${res.amount}`}
            <br />
            {`boxOfficeAmount : ${res.boxOfficeAmount}`}
            <br />
            {`mandatoryApplyAmount : ${res.mandatoryApplyAmount}`}
            <br />
            {`paxType : ${res.paxType}`}
            <hr />
          </div>
        );
      })}
      {`OperationDays`}
      {list.operationDays.map((res: any, i: number) => {
        return (
          <div key={i}>
            {`OperationDays : ${i}`}
            <br />
            {`id : ${res.id}`}
            <br />
            {`activityId : ${res.activityId}`}
            <br />
            {`code : ${res.code}`}
            <br />
            {`name : ${res.name}`}
            <hr />
          </div>
        );
      })}
      {`Tags`}
      {list.tags.map((res: any) => {
        return (
          <div>
            {`id : ${res.id}`}
            <br />
            {`activityId : ${res.activityId}`}
            <br />
            {`fontColor : ${res.fontColor}`}
            <br />
            {`text : ${res.text}`}
            <br />
            {`imageIcon : ${res.imageIcon}`}
          </div>
        );
      })}
      <hr />
      {`Content`}
      <br />
      {`Content id : ${list.content.id}`}
      <br />
      {`Content activityId : ${list.content.activityId}`}
      <br />
      {`Content contentId : ${list.content.contentId}`}
      <br />
      {`Content activityCode : ${list.content.activityCode}`}
      <br />
      {`Content activityFactsheetType : ${list.content.activityFactsheetType}`}
      <br />
      {`Content description : ${list.content.description}`}
      <br />
      {`Content name : ${list.content.name}`}
      <br />
      <hr />
      {`Content featureGroups`}
      {list.content.featureGroups.map((res) => {
        return (
          <div>
            {`id : ${res.id}`}
            <br />
            {`contentId : ${res.contentId}`}
            <br />
            {`groupCode : ${res.groupCode}`}
            <br />
            <hr />
            {`Content featureGroups excluded`}
            {res.excluded.map((res) => {
              return (
                <div>
                  {`id : ${res.id}`}
                  <br />
                  {`contentFeatureGroupId : ${res.contentFeatureGroupId}`}
                  <br />
                  {`featureType : ${res.featureType}`}
                  <br />
                  {`description : ${res.description}`}
                  <hr />
                </div>
              );
            })}
          </div>
        );
      })}
      {`Content Location `}
      {list.content.location.startingPoints.map((res) => {
        return (
          <div>
            {`id : ${res.id}`}
            <br />
            {`contentId : ${res.contentId}`}
            <br />
            {`type : ${res.type}`}
            <br />
            <hr />
            {`Location MeetingPoint`}
            <br />
            {`Location MeetingPoint id : ${res.meetingPoint.id}`}
            <br />
            {`Location MeetingPoint locationStartingPointId : ${res.meetingPoint.locationStartingPointId}`}
            <br />
            {`Location MeetingPoint description : ${res.meetingPoint.description}`}
            <br />
            {`Location MeetingPoint type : ${res.meetingPoint.type}`}
            <hr />
            {`Location MeetingPoint country`}
            <br />
            {`Location MeetingPoint country id : ${res.meetingPoint.country.id}`}
            <br />
            {`Location MeetingPoint country meetingPointId : ${res.meetingPoint.country.meetingPointId}`}
            <br />
            {`Location MeetingPoint country Code : ${res.meetingPoint.country.code}`}
            <br />
            {`Location MeetingPoint country Name : ${res.meetingPoint.country.name}`}
            <br />
            <hr />
            {res.meetingPoint.country.destinations.map((res) => {
              return (
                <div>
                  {`Location MeetingPoint country destinations`}
                  <br />
                  {`Location MeetingPoint country destinations id : ${res.id}`}
                  <br />
                  {`Location MeetingPoint country destinations meetingPointCountryId : ${res.meetingPointCountryId}`}
                  <br />
                  {`Location MeetingPoint country destinations code : ${res.code}`}
                  <br />
                  {`Location MeetingPoint country destinations name : ${res.name}`}
                </div>
              );
            })}
            <hr />
          </div>
        );
      })}
      {`Content media Images `}
      {list.content.media.images.map((res: any, i: number) => {
        return (
          <div key={i}>
            {res.urls.map((res: any, i: number) => {
              return (
                <div key={i}>{`Content media Images ${res.resource}`}</div>
              );
            })}
          </div>
        );
      })}
      <hr />
      {list.content.segmentationGroups.map((res: any, i: number) => {
        return (
          <div key={i}>
            {`Content segmentationGroups `}
            <br />
            {`Content segmentationGroups id : ${res.id}`}
            <br />
            {`Content segmentationGroups contentId : ${res.contentId}`}
            <br />
            {`Content segmentationGroups Code : ${res.code}`}
            <br />
            {`Content segmentationGroups Name : ${res.name}`}
            <br />
            <hr />

            {res.segments.map((res: any, i: number) => {
              return (
                <div key={i}>
                  {`Content segmentationGroups segments `}
                  <br />
                  {`Content segmentationGroups segments Id : ${res.id}`}
                  <br />
                  {`Content segmentationGroups segments segmentationGroupId : ${res.segmentationGroupId}`}
                  <br />
                  {`Content segmentationGroups segments code : ${res.code}`}
                  <br />
                  {`Content segmentationGroups segments name : ${res.name}`}
                  <hr />
                </div>
              );
            })}
          </div>
        );
      })}
      {`Country id : ${list.country.id}`}
      <br />
      {`Country activityId : ${list.country.activityId}`}
      <br />
      {`Country code : ${list.country.code}`}
      <br />
      {`Country name : ${list.country.name}`}
      <br />
      <hr />

      {list.country.destinations.map((res: any, i: number) => {
        return (
          <div key={i}>
            {`Country destinations`}
            <br />
            {`Country destinations Id : ${res.id}`}
            <br />
            {`Country destinations activityCountryId : ${res.activityCountryId}`}
            <br />
            {`Country destinations code : ${res.code}`}
            <br />
            {`Country destinations name : ${res.name}`}
          </div>
        );
      })}
    </Container>
  );
};

export default App;
