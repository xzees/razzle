import React from 'react';
import { inject, observer } from 'mobx-react';
import i18n from 'utilities/I18n';
import Heading from 'common/src/components/Heading';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TourFilterModel from 'modules/collective/Models/TourFilter/TourFilterModel';
import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'common/Manager/FontManager';
import styled from 'styled-components';
// import moment from 'moment';
import MuiAcc from '@material-ui/core/Accordion';
import MuiAccSum from '@material-ui/core/AccordionSummary';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { formatfullMonth, formatYear } from 'common/Manager/Helper';

type Props = {
  tourFilter: TourFilterModel;
}

const DesktopTourFilter = inject("stores")(
  observer((props: Props) => {
    const { tourFilter } = props;

    const [checked, setChecked] = React.useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(event.target.checked);
      console.log(event.target.value)
    };

    return (
      <div style={{ backgroundColor: ColorManager.default.white, borderRadius: 6, boxShadow: '1px 1px 3px 0px #e0e0e0b3', padding: 15, position: 'sticky', top: 75 }}>
        <Accordion defaultExpanded>
          <MuiAccSum expandIcon={<ExpandMoreIcon htmlColor={ColorManager.default.primaryColor} />}>
            <Heading content={i18n.t('collective.list.filter.price')} {...FilterTitle} />
          </MuiAccSum>
          <FilterBox>
            {tourFilter?.price?.priceRange?.length > 0 ? (
              <>
                {tourFilter?.price?.priceRange?.map((priceData, index, arr) => (
                  parseInt(priceData.total) > 0 ? (
                    <FormControl key={index} component="fieldset" style={{ width: '100%' }}>
                      <FormGroup>
                        <FCLabel
                          control={<Checkbox value={priceData.value} onChange={handleChange} name={priceData.text} style={{ color: ColorManager.default.primaryColor, padding: '0 9px' }} />}
                          label={
                            <FCFilterLabel>
                              {priceData.text} {arr.length - 1 === index ? 'ขึ้นไป' : ''}
                              <FCFilterTotal>( {priceData.total} )</FCFilterTotal>
                            </FCFilterLabel>
                          }
                        />
                      </FormGroup>
                    </FormControl>
                  ) : undefined
                ))}
              </>
            ) : undefined}
          </FilterBox>
        </Accordion>
        {tourFilter?.period?.length > 0 ? (
          <Accordion defaultExpanded>
            <MuiAccSum expandIcon={<ExpandMoreIcon htmlColor={ColorManager.default.primaryColor} />}>
              <Heading content={i18n.t('collective.list.filter.period')} {...FilterTitle} />
            </MuiAccSum>
            <FilterBox>
              {tourFilter?.period?.map((periodData, index) => {
                const month = new Date(periodData.month);
                const year = new Date(periodData.year);
                return (
                  <FormControl key={index} component="fieldset" style={{ width: '100%' }}>
                    <FormGroup>
                      <FCLabel
                        control={<Checkbox value={periodData.value} onChange={handleChange} name={periodData.value} style={{ color: ColorManager.default.primaryColor, padding: '0 9px' }} />}
                        label={
                          <FCFilterLabel>
                            {formatfullMonth(month)} {formatYear(year)}
                            <FCFilterTotal>( {periodData.total} )</FCFilterTotal>
                          </FCFilterLabel>
                        }
                      />
                    </FormGroup>
                  </FormControl>
                )
              })}
            </FilterBox>
          </Accordion>
        ) : undefined}
        {tourFilter?.route?.length > 0 ? (
          <Accordion defaultExpanded>
            <MuiAccSum expandIcon={<ExpandMoreIcon htmlColor={ColorManager.default.primaryColor} />}>
              <Heading content={i18n.t('collective.list.filter.route')} {...FilterTitle} />
            </MuiAccSum>
            <FilterBox>
              {tourFilter?.route?.map((routeData, index) => (
                <FormControl key={index} component="fieldset" style={{ width: '100%' }}>
                  <FormGroup>
                    <FCLabel
                      control={<Checkbox value={routeData.value} onChange={handleChange} name={routeData.value} style={{ color: ColorManager.default.primaryColor, padding: '0 9px' }} />}
                      label={
                        <FCFilterLabel>
                          {routeData.value}
                          <FCFilterTotal>( {routeData.total} )</FCFilterTotal>
                        </FCFilterLabel>
                      }
                    />
                  </FormGroup>
                </FormControl>
              ))}
            </FilterBox>
          </Accordion>
        ) : undefined}
        {tourFilter?.duration?.length > 0 ? (
          <Accordion defaultExpanded>
            <MuiAccSum expandIcon={<ExpandMoreIcon htmlColor={ColorManager.default.primaryColor} />}>
              <Heading content={i18n.t('collective.list.filter.duration')} {...FilterTitle} />
            </MuiAccSum>
            <FilterBox>
              {tourFilter?.duration?.map((durationData, index) => (
                <FormControl key={index} component="fieldset" style={{ width: '100%' }}>
                  <FormGroup>
                    <FCLabel
                      control={<Checkbox value={durationData.value} onChange={handleChange} name={durationData.value.toString()} style={{ color: ColorManager.default.primaryColor, padding: '0 9px' }} />}
                      label={
                        <FCFilterLabel>
                          {durationData.value} {i18n.t('collective.list.duration.day')}
                          <FCFilterTotal>( {durationData.total} )</FCFilterTotal>
                        </FCFilterLabel>
                      }
                    />
                  </FormGroup>
                </FormControl>
              ))}
            </FilterBox>
          </Accordion>
        ) : undefined}
        {tourFilter?.airline?.length > 0 ? (
          <Accordion defaultExpanded>
            <MuiAccSum expandIcon={<ExpandMoreIcon htmlColor={ColorManager.default.primaryColor} />}>
              <Heading content={i18n.t('collective.list.filter.airline')} {...FilterTitle} />
            </MuiAccSum>
            <FilterBox>
              {tourFilter?.airline?.map((airlineData, index) => (
                <FormControl key={index} component="fieldset" style={{ width: '100%' }}>
                  <FormGroup>
                    <FCLabel
                      control={<Checkbox value={airlineData.value} onChange={handleChange} name={airlineData.value.toString()} style={{ color: ColorManager.default.primaryColor, padding: '0 9px' }} />}
                      label={
                        <FCFilterLabel>
                          {airlineData.langTH}
                          <FCFilterTotal>( {airlineData.total} )</FCFilterTotal>
                        </FCFilterLabel>
                      }
                    />
                  </FormGroup>
                </FormControl>
              ))}
            </FilterBox>
          </Accordion>
        ) : undefined}
      </div>
    )
  })
)

const Accordion = styled(MuiAcc)`
  border: 0;
  box-shadow: unset !important;
  margin: 0 !important;
  :before {
    content: unset !important;
  }
  .MuiAccordionSummary-root {
    min-height: unset !important;
    padding: 0 !important;
  }
  .MuiAccordionSummary-content, .MuiAccordionSummary-content.Mui-expanded {
    margin: 0 !important;
  }
`
const ExpandMoreIcon = styled(ExpandMore)`
  margin: 0 !important;
  padding: 0 !important;
`

const FilterTitle = {
  as: 'h2',
  color: ColorManager.default.primaryColor,
  fontFamily: FontManager.default.secondaryFont,
  fontSize: '1.6875rem',
  fontWeight: 'normal',
  lineHeight: 1,
  mb: '5px',
};
const FilterBox = styled.div`
  margin-bottom: 20px;
`;
const FCLabel = styled(FormControlLabel)`
  margin-right: 0 !important;
  .MuiFormControlLabel-label {
    width: 100%;
  }
`;
const FCFilterLabel = styled.span`
  color: #333333;
  font-size: 1.4375rem;
`;
const FCFilterTotal = styled.span`
  color: ${ColorManager.default.primaryColor};
  float: right;
  font-family: ${FontManager.default.secondaryFont};
`;

export default DesktopTourFilter;