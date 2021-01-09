import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Container } from '@material-ui/core';
import axios from 'axios';
import _ from 'lodash';
// class App extends Component {
//   const [state, setstate] = useState(initialState)
//   render() {
//     return <Autocomplete />;
//   }
// }

const App = () => {
  const [code, setCode] = React.useState({ code: 'en' });
  const [options, setOptions] = React.useState({
    acceptPolicy: '',
    activityDetail: '',
    activityDetailBookingDetail: '',
    activityDetailDuration: '',
    activityDetailGuideOptions: '',
    activityDetailLocation: '',
    activityDetailOpeningDates: '',
    activityDetailRequiredMents: '',
    activityDetails: '',
    activityDetailStartPoint: '',
    activityDetailTax: '',
    activityDetailTickeyType: '',
    activityDetailTravelDetails: '',
    activityDetailVoucherType: '',
    address: '',
    addToCart: '',
    Ads1: '',
    Ads2: '',
    Ads3: '',
    AdsHeader: '',
    AdsSubHeader: '',
    adult: '',
    age: '',
    ageUnder: '',
    asShownOnPassport: '',
    availableDownload: '',
    birthday: '',
    birthdayText: '',
    booking: '',
    bookingConfirmationText: '',
    bookingDetails: '',
    bookingHolderDetail: ' ',
    bookingHolderDetailDescription: '',
    calendar: '',
    cancellationPolicyText1: '',
    cancellationPolicyText2: '',
    cancellationPolicyText3: '',
    cancellationPolicyTitle: '',
    cartBooking: '',
    cartTotal: '',
    checkMessageNaR: '',
    child: '',
    chooseActivityType: '',
    companyAddress: '',
    companyName: '',
    condition1: '',
    condition2: '',
    condition3: '',
    condition4: '',
    condition5: '   ',
    conditionAndPermission: '  ',
    confirm: '',
    confirmAndContinue: '  ',
    continue: '',
    country: '',
    departureDate: ' ',
    discount: '',
    earliestAvailableDate: '  ',
    editForPlaceOrActivity: ' ',
    editInfo: '',
    email: '',
    emailToSendVoucher: '',
    Fax: '',
    filter: '',
    firstname: '',
    hide: '',
    homeDescription: '',
    homeDescriptionTitle: '',
    homePage: '',
    homePopularActivity: '',
    homePopularDestination: '',
    homeSearchBoxHint: '     ',
    homeTitleSearchBoxHint: '   ',
    instantConfirmation: ' ',
    list: '',
    loadMore: ' ',
    miss: '',
    missis: '',
    mister: '',
    moreInformation: ' ',
    name: '',
    nameSurname: '',
    numberOfTicket: '',
    openDaily: ' ,  ',
    orderBy: ' ',
    priceInclude: ' ',
    priceRange: ' ',
    priceRangeFrom: '',
    priceRangeTo: '',
    privacyPolicy: ' ',
    purchase: '',
    recommendActivity: ' ',
    remarkDetails: '',
    resetFilter: '',
    saveInfo: '',
    search: '',
    searchResult: '',
    select: '',
    selectDate: ' ',
    share: '',
    sortByHighestPointInReview: '   ',
    sortByLowestPrice: ' ',
    sortByMostBooking: ' ',
    surname: '',
    Tel: '',
    telephone: '',
    total: '',
    totalNet: '',
    totalPrice: '',
    totalTickets: '',
    TravelerInformation: '',
    Travizgo: '',
    validateTextOnly: ' ',
    years: '',
    yearsAndOlder: '',
    zipCode: '',
  });
  const url = `https://dev-services.travizgo.com/sightseeing/api/label/all`;
  React.useEffect(() => {
    (async () => {
      const res = await axios(url);
      const list = _.get(res, 'data');
      if (Object.values(code)[0] !== 'en') {
        setOptions(list.th);
      } else {
        setOptions(list.en);
      }
    })();
  }, [code]);
  return (
    <Container maxWidth="md">
      <Autocomplete
        id="combo-box-demo"
        options={Lang}
        getOptionLabel={(option) => option.code}
        defaultValue={{ code: 'en' }}
        style={{ width: 150 }}
        onChange={(e: any, v: any) => setCode(v)}
        renderInput={(params) => (
          <TextField {...params} label="language" variant="outlined" />
        )}
      />
      <div>
        <div>{`acceptPolicy  : ${options.acceptPolicy}`}</div>
        <div>{`activityDetail  : ${options.activityDetail}`}</div>
        <div>{`activityDetailBookingDetail  : ${options.activityDetailBookingDetail}`}</div>
        <div>{`activityDetailDuration  : ${options.activityDetailDuration}`}</div>
        <div>{`activityDetailGuideOptions  : ${options.activityDetailGuideOptions}`}</div>
        <div>{`activityDetailLocation  : ${options.activityDetailLocation}`}</div>
        <div>{`activityDetailOpeningDates  : ${options.activityDetailOpeningDates}`}</div>
        <div>{`activityDetailRequiredMents  : ${options.activityDetailRequiredMents}`}</div>
        <div>{`activityDetails  : ${options.activityDetails}`}</div>
        <div>{`activityDetailStartPoint  : ${options.activityDetailStartPoint}`}</div>
        <div>{`activityDetailTax  : ${options.activityDetailTax}`}</div>
        <div>{`activityDetailTickeyType  : ${options.activityDetailTickeyType}`}</div>
        <div>{`activityDetailTravelDetails  : ${options.activityDetailTravelDetails}`}</div>
        <div>{`activityDetailVoucherType  : ${options.activityDetailVoucherType}`}</div>
        <div>{`address  : ${options.address}`}</div>
        <div>{`addToCart  : ${options.addToCart}`}</div>
        <div>{`Ads1  : ${options.Ads1}`}</div>
        <div>{`Ads2  : ${options.Ads2}`}</div>
        <div>{`Ads3  : ${options.Ads3}`}</div>
        <div>{`AdsHeader  : ${options.AdsHeader}`}</div>
        <div>{`AdsSubHeader  : ${options.AdsSubHeader}`}</div>
        <div>{`adult  : ${options.adult}`}</div>
        <div>{`age  : ${options.age}`}</div>
        <div>{`ageUnder  : ${options.ageUnder}`}</div>
        <div>{`asShownOnPassport  : ${options.asShownOnPassport}`}</div>
        <div>{`availableDownload  : ${options.availableDownload}`}</div>
        <div>{`birthday  : ${options.birthday}`}</div>
        <div>{`birthdayText  : ${options.birthdayText}`}</div>
        <div>{`booking  : ${options.booking}`}</div>
        <div>{`bookingConfirmationText  : ${options.bookingConfirmationText}`}</div>
        <div>{`bookingDetails  : ${options.bookingDetails}`}</div>
        <div>{`bookingHolderDetail  : ${options.bookingHolderDetail}`}</div>
        <div>{`bookingHolderDetailDescription  : ${options.bookingHolderDetailDescription}`}</div>
        <div>{`calendar  : ${options.calendar}`}</div>
        <div>{`cancellationPolicyText1  : ${options.cancellationPolicyText1}`}</div>
        <div>{`cancellationPolicyText2  : ${options.cancellationPolicyText2}`}</div>
        <div>{`cancellationPolicyText3  : ${options.cancellationPolicyText3}`}</div>
        <div>{`cancellationPolicyTitle  : ${options.cancellationPolicyTitle}`}</div>
        <div>{`cartBooking  : ${options.cartBooking}`}</div>
        <div>{`cartTotal  : ${options.cartTotal}`}</div>
        <div>{`checkMessageNaR  : ${options.checkMessageNaR}`}</div>
        <div>{`child  : ${options.child}`}</div>
        <div>{`chooseActivityType  : ${options.chooseActivityType}`}</div>
        <div>{`companyAddress  : ${options.companyAddress}`}</div>
        <div>{`companyName  : ${options.companyName}`}</div>
        <div>{`condition1  : ${options.condition1}`}</div>
        <div>{`condition2  : ${options.condition2}`}</div>
        <div>{`condition3  : ${options.condition3}`}</div>
        <div>{`condition4  : ${options.condition4}`}</div>
        <div>{`condition5  : ${options.condition5}`}</div>
        <div>{`conditionAndPermission  : ${options.conditionAndPermission}`}</div>
        <div>{`confirm  : ${options.confirm}`}</div>
        <div>{`confirmAndContinue  : ${options.confirmAndContinue}`}</div>
        <div>{`continue  : ${options.continue}`}</div>
        <div>{`country  : ${options.country}`}</div>
        <div>{`departureDate  : ${options.departureDate}`}</div>
        <div>{`discount  : ${options.discount}`}</div>
        <div>{`earliestAvailableDate  : ${options.earliestAvailableDate}`}</div>
        <div>{`editForPlaceOrActivity  : ${options.editForPlaceOrActivity}`}</div>
        <div>{`editInfo  : ${options.editInfo}`}</div>
        <div>{`email  : ${options.email}`}</div>
        <div>{`emailToSendVoucher  : ${options.emailToSendVoucher}`}</div>
        <div>{`Fax  : ${options.Fax}`}</div>
        <div>{`filter  : ${options.filter}`}</div>
        <div>{`firstname  : ${options.firstname}`}</div>
        <div>{`hide  : ${options.hide}`}</div>
        <div>{`homeDescription  : ${options.homeDescription}`}</div>
        <div>{`homeDescriptionTitle  : ${options.homeDescriptionTitle}`}</div>
        <div>{`homePage  : ${options.homePage}`}</div>
        <div>{`homePopularActivity  : ${options.homePopularActivity}`}</div>
        <div>{`homePopularDestination  : ${options.homePopularDestination}`}</div>
        <div>{`homeSearchBoxHint  : ${options.homeSearchBoxHint}`}</div>
        <div>{`homeTitleSearchBoxHint  : ${options.homeTitleSearchBoxHint}`}</div>
        <div>{`instantConfirmation  : ${options.instantConfirmation}`}</div>
        <div>{`list  : ${options.list}`}</div>
        <div>{`loadMore  : ${options.loadMore}`}</div>
        <div>{`miss  : ${options.miss}`}</div>
        <div>{`missis  : ${options.missis}`}</div>
        <div>{`mister  : ${options.mister}`}</div>
        <div>{`moreInformation  : ${options.moreInformation}`}</div>
        <div>{`name  : ${options.name}`}</div>
        <div>{`nameSurname  : ${options.nameSurname}`}</div>
        <div>{`numberOfTicket  : ${options.numberOfTicket}`}</div>
        <div>{`openDailyopenDaily  : ${options.openDaily}`}</div>
        <div>{`orderBy  : ${options.orderBy}`}</div>
        <div>{`openDaily  : ${options.openDaily}`}</div>
        <div>{`priceInclude  : ${options.priceInclude}`}</div>
        <div>{`priceRange  : ${options.priceRange}`}</div>
        <div>{`priceRangeFrom  : ${options.priceRangeFrom}`}</div>
        <div>{`priceRangeTo  : ${options.priceRangeTo}`}</div>
        <div>{`privacyPolicy  : ${options.privacyPolicy}`}</div>
        <div>{`purchase  : ${options.purchase}`}</div>
        <div>{`recommendActivity  : ${options.recommendActivity}`}</div>
        <div>{`remarkDetails  : ${options.remarkDetails}`}</div>
        <div>{`resetFilter  : ${options.resetFilter}`}</div>
        <div>{`saveInfo  : ${options.saveInfo}`}</div>
        <div>{`search  : ${options.search}`}</div>
        <div>{`searchResult  : ${options.searchResult}`}</div>{' '}
        <div>{`select  : ${options.select}`}</div>
        <div>{`selectDate  : ${options.selectDate}`}</div>
        <div>{`share  : ${options.share}`}</div>
        <div>{`sortByHighestPointInReview  : ${options.sortByHighestPointInReview}`}</div>
        <div>{`sortByLowestPrice  : ${options.sortByLowestPrice}`}</div>
        <div>{`sortByMostBooking  : ${options.sortByMostBooking}`}</div>
        <div>{`surname  : ${options.surname}`}</div>
        <div>{`Tel  : ${options.Tel}`}</div>
        <div>{`telephone  : ${options.telephone}`}</div>
        <div>{`total  : ${options.total}`}</div>
        <div>{`totalNet  : ${options.totalNet}`}</div>
        <div>{`totalPrice  : ${options.totalPrice}`}</div>
        <div>{`totalTickets  : ${options.totalTickets}`}</div>
        <div>{`TravelerInformation  : ${options.TravelerInformation}`}</div>
        <div>{`Travizgo  : ${options.Travizgo}`}</div>
        <div>{`validateTextOnly  : ${options.validateTextOnly}`}</div>
        <div>{`years  : ${options.years}`}</div>
        <div>{`yearsAndOlder  : ${options.yearsAndOlder}`}</div>
        <div>{`zipCode  : ${options.zipCode}`}</div>
      </div>
    </Container>
  );
};

const Lang = [
  {
    code: 'en',
  },
  {
    code: 'th',
  },
];

export default App;
