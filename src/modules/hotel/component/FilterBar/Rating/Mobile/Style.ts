
import { Rating } from '@material-ui/lab';
import styled from 'styled-components';
import { makeStyles  } from '@material-ui/core/styles';

export const FormControlLabels = makeStyles({
    formControlLabel: {
        paddingLeft: 10,
        "& .MuiIconButton-root": {
            padding: 9
        }
    }
});

export const RatingDesktop = styled(Rating)`
  font-size: 1.4375rem !important;
  margin-top: 10px;
  
  svg {
    font-size: 1.3125rem !important;
  }
`;
