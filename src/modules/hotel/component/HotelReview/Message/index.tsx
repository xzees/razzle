import React, {useEffect} from 'react';
import styled from "styled-components";
import FilterButton from "./filterbutton";
import SortingButton from "./sortingbutton";
import Message from "./message";
import Grid from '@material-ui/core/Grid';
import Pagination from '@material-ui/lab/Pagination';
import FontManager from 'modules/hotel/Manager/FontManager';
import ColorManager from 'common/Manager/ColorManager';
import _ from 'lodash';

const styles = {
    MyPagination : styled<any>(Pagination)`
        .MuiPaginationItem-root {
            min-width: 40px;
            height: 40px;
            color: ${ColorManager.default.fifthColor};
            background-color: ${ColorManager.default.greyColor};
            font-size: ${FontManager.default.TEXT_EXTRA_24};
            border-color: ${ColorManager.default.greyColor};
            border-radius: 4px;
            margin: 1px;
        }
        .MuiPagination-ul {
            justify-content: space-between;
        }
        .MuiPaginationItem-page.Mui-selected,.MuiPaginationItem-page.Mui-selected:hover, .MuiPaginationItem-page.Mui-selected.Mui-focusVisible {
            color: ${ColorManager.default.white};
            background-color: ${ColorManager.default.fifthColor};
        }
    `,
}

export default function index(props: any) {
    const { isMobile } = props;
    const [page, setPage] = React.useState(1);
    const [pageCount, setPageCount] = React.useState(20);
    const [boundaryCount, setBoundaryCount] = React.useState(1);
    const [siblingCount, setSiblingCount] = React.useState(1);

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
      };
    return (
        <>
        <Grid container spacing={2} style={{width: '100%', marginTop: 25, marginBottom: 25}}>
            { isMobile ? (
            <>
                <Grid item xs={6}>
                    <SortingButton isMobile={isMobile} />
                </Grid>
                <Grid item xs={6}>
                    <FilterButton isMobile={isMobile} />
                </Grid>
                <Grid item xs={12}>
                    <Message isMobile={isMobile}/>
                </Grid>
                <Grid item xs={12}>
                    <styles.MyPagination count={pageCount} variant="outlined" shape="rounded" page={page} onChange={handlePageChange} siblingCount={0} style={{marignTop: 30}}/>
                </Grid>
            </>
                ) : (
            <>
                <Grid item xs={3}>
                    <SortingButton isMobile={isMobile} />
                </Grid>
                <Grid item xs={3}>
                    <FilterButton isMobile={isMobile} />
                </Grid>
                <Grid item xs={6} style={{display:'flex', justifyContent:'flex-end',alignItems:'center',}}>
                    <styles.MyPagination count={pageCount} variant="outlined" shape="rounded" page={page} onChange={handlePageChange} siblingCount={0}/>
                </Grid>
                <Grid item xs={12}>
                    <Message isMobile={isMobile}/>
                </Grid>
            </>
            )}
        </Grid>
        </>
    );
}