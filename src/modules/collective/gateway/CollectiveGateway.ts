import APIManager from 'common/Manager/APIManager';
import AutocompleteAPIRequest from '../APIRequest/AutocompleteAPIRequest';
import CollectiveManage from '../Manager/CollectiveManage';
// import DetailAPIRequest from '../APIRequest/DetailAPIRequest';
import ErrorResponse from 'common/models/ErrorResponse';
import express from 'express';
import _ from 'lodash';
import ListAPIRequest from '../APIRequest/ListAPIRequest';
import ListAPIV2Request from '../APIRequest/ListAPIV2Request';
import DynamicRouteManager from 'common/Manager/DynamicRouteManager';

const CollectiveGateway = express();

// CollectiveGateway.get('*', async (req, res, next) => {
//     const meta = await CollectiveManage.default.fetchMeta();
//     (req as any).DataGateway = {
//         seo: meta
//     };

//     // const tourListPaths = _.get(DynamicRouteManager.default.route, 'list_path.paths') as any[] || []
//     const tourListPaths = _.get(DynamicRouteManager.default.route, 'data') as any[] || []
//     const pathMap: { [path: string]: { path: string, keyword: string, layout_key: string, id: string } } = {}
//     tourListPaths.forEach(x => { pathMap[_.get(x, 'path')] = x })

//     const pathURL = req.originalUrl.toLowerCase();
//     const indexHTMLCharIndex = pathURL.lastIndexOf('index.html')
//     const indexURLParam = pathURL.lastIndexOf('?');
//     const matchedRoute = pathMap[indexHTMLCharIndex >= 0 ? pathURL.substring(0, indexHTMLCharIndex) : indexURLParam >= 0 ? pathURL.substring(0, indexURLParam) : pathURL]
//     if (!!matchedRoute) {
//         const metaTour = await CollectiveManage.default.getTourSEO({ tourcode: matchedRoute.keyword });
//         // console.log(metaTour)
//         if (metaTour?.data?.data == '') {
//             res.header('HTTP/1.1 301 Moved Permanently');
//             res.redirect('https://www.thaitravelcenter.com/');
//         }
//         // try {
//         //     if (metaTour.data.status === 200) {
//         const newMeta = {
//             metadata: [
//                 {
//                     content: metaTour?.data?.data?.tourSeo?.th?.keyword,
//                     name: 'keywords',
//                 },
//                 {
//                     content: metaTour?.data?.data?.tourSeo?.th?.description,
//                     name: 'description',
//                 }
//             ],
//             title: metaTour?.data?.data?.tourSeo?.th?.title,
//             description: metaTour?.data?.data?.tourSeo?.th?.description,
//         } as any;

//         // const { tourcode } = req.params;
//         const tourcode = matchedRoute.keyword
//         const pageID = matchedRoute.id
//         const apiRequest = new ListAPIRequest({
//             pageNo: 1,
//             pageSize: 10,
//             tourCode: tourcode,
//         } as any);

//         const tourData = await APIManager.default.fetch(apiRequest);

//         if (matchedRoute.layout_key == 'tour_list_page') {

//             const categoryData = await CollectiveManage.default.getTourCategory({ tourCode: matchedRoute.keyword, pageID: pageID });

//             (req as any).DataGateway = {
//                 dataTour: tourData?.data,
//                 seo: newMeta,
//                 seoMeta: metaTour?.data,
//                 dataCaterogy: categoryData?.data
//             };
//         } else {
//             (req as any).DataGateway = {
//                 dataTour: tourData?.data,
//                 seo: newMeta,
//                 seoMeta: metaTour?.data,
//             };
//         }

//     } else {
//         // return res.status(400).json({
//         //     status: 400,
//         //     error: 'OOps! Bad request',
//         // });
//         res.header('HTTP/1.1 301 Moved Permanently');
//         res.redirect('https://www.thaitravelcenter.com/');
//     }

//     next();
// });

CollectiveGateway.get('*', async (req, res, next) => {
    const meta = await CollectiveManage.default.fetchMeta();
    (req as any).DataGateway = {
        seo: meta
    };

    // const tourListPaths = _.get(DynamicRouteManager.default.route, 'list_path.paths') as any[] || []
    const tourListPaths = _.get(DynamicRouteManager.default.route, 'data') as any[] || []
    const pathMap: { [path: string]: { path: string, keyword: string, layout_key: string, id: string } } = {}
    tourListPaths.forEach(x => { pathMap[_.get(x, 'path')] = x })

    const pathURL = req.originalUrl.toLowerCase();
    const indexHTMLCharIndex = pathURL.lastIndexOf('index.html')
    const indexURLParam = pathURL.lastIndexOf('?');
    const matchedRoute = pathMap[indexHTMLCharIndex >= 0 ? pathURL.substring(0, indexHTMLCharIndex) : indexURLParam >= 0 ? pathURL.substring(0, indexURLParam) : pathURL]
    if (!!matchedRoute) {
        const metaTour = await CollectiveManage.default.getTourSEOV2({ tourCode: matchedRoute.keyword, pageID: matchedRoute.id });
        if (metaTour?.data?.data == '') {
            res.header('HTTP/1.1 301 Moved Permanently');
            res.redirect('https://www.thaitravelcenter.com/');
        }
        // try {
        //     if (metaTour.data.status === 200) {
        const newMeta = {
            metadata: [
                {
                    content: metaTour?.data?.data?.tourSeo?.th?.keyword,
                    name: 'keywords',
                },
                {
                    content: metaTour?.data?.data?.tourSeo?.th?.description,
                    name: 'description',
                }
            ],
            title: metaTour?.data?.data?.tourSeo?.th?.title,
            description: metaTour?.data?.data?.tourSeo?.th?.description,
        } as any;

        // const { tourcode } = req.params;
        const tourcode = matchedRoute.keyword
        const pageID = matchedRoute.id
        const apiRequest = new ListAPIV2Request({
            pageNo: 1,
            pageSize: 10,
            tourCode: tourcode,
            pageID: pageID,
        } as any);

        // console.log(apiRequest)

        const tourData = await APIManager.default.fetch(apiRequest);

        if (matchedRoute.layout_key == 'tour_list_page') {

            const categoryData = await CollectiveManage.default.getTourCategory({ tourCode: matchedRoute.keyword, pageID: pageID });

            (req as any).DataGateway = {
                dataTour: tourData?.data,
                seo: newMeta,
                seoMeta: metaTour?.data,
                dataCaterogy: categoryData?.data
            };
        } else {
            (req as any).DataGateway = {
                dataTour: tourData?.data,
                seo: newMeta,
                seoMeta: metaTour?.data,
            };
        }

    } else {
        // return res.status(400).json({
        //     status: 400,
        //     error: 'OOps! Bad request',
        // });
        // res.header('HTTP/1.1 301 Moved Permanently');
        // res.redirect('https://www.thaitravelcenter.com/');
    }


    next();
});
// CollectiveGateway.get('/list/:tourcode', async (req, res, next) => {
//     const metaTour = await CollectiveManage.default.getTourSEO(req.params);
//     if (metaTour?.data?.data == '') {
//         res.header('HTTP/1.1 301 Moved Permanently');
//         res.redirect('https://www.thaitravelcenter.com/');
//     }
//     // try {
//     //     if (metaTour.data.status === 200) {
//     const newMeta = {
//         metadata: [
//             {
//                 content: metaTour?.data?.data?.tourSeo?.th?.keyword,
//                 name: 'keywords',
//             },
//             {
//                 content: metaTour?.data?.data?.tourSeo?.th?.description,
//                 name: 'description',
//             }
//         ],
//         title: metaTour?.data?.data?.tourSeo?.th?.title,
//     } as any;

//     const { tourcode } = req.params;
//     const apiRequest = new ListAPIRequest({
//         pageNo: 1,
//         pageSize: 10,
//         tourCode: tourcode,
//     } as any);

//     const tourData = await APIManager.default.fetch(apiRequest);

//     (req as any).DataGateway = {
//         dataTour: tourData?.data,
//         seo: newMeta,
//         seoMeta: metaTour?.data,
//     };

//     next();
//     //     } else {
//     //         res.redirect('https://www.thaitravelcenter.com/');
//     //     }
//     // } catch (e) {
//     //     res.redirect('../');
//     // }
// });
// CollectiveGateway.get('/list/:tourcode([^/]+/[^/]+)', async (req, res, next) => {
//     const metaTour = await CollectiveManage.default.getTourSEO(req.params);
//     if (metaTour?.data?.data == '') {
//         res.header('HTTP/1.1 301 Moved Permanently');
//         res.redirect('https://www.thaitravelcenter.com/');
//     }
//     // try {
//     //     if (metaTour.data.status === 200) {
//     const newMeta = {
//         metadata: [
//             {
//                 content: metaTour?.data?.data?.tourSeo?.th?.keyword,
//                 name: 'keywords',
//             },
//             {
//                 content: metaTour?.data?.data?.tourSeo?.th?.description,
//                 name: 'description',
//             }
//         ],
//         title: metaTour?.data?.data?.tourSeo?.th?.title,
//     } as any;

//     const { tourcode } = req.params;
//     const apiRequest = new ListAPIRequest({
//         pageNo: 1,
//         pageSize: 10,
//         tourCode: tourcode,
//     } as any);

//     const tourData = await APIManager.default.fetch(apiRequest);

//     (req as any).DataGateway = {
//         dataTour: tourData?.data,
//         seo: newMeta,
//         seoMeta: metaTour?.data,
//     };

//     next();
//     //     } else {
//     //         res.redirect('https://www.thaitravelcenter.com/');
//     //     }
//     // } catch (e) {
//     //     res.redirect('../');
//     // }
// });

CollectiveGateway.get('/list-filter/:tourcode', async (req, res, next) => {
    const metaTour = await CollectiveManage.default.getTourSEO(req.params);
    if (metaTour?.data?.data == '') {
        res.header('HTTP/1.1 301 Moved Permanently');
        res.redirect('https://www.thaitravelcenter.com/');
    }
    // try {
    //     if (metaTour.data.status === 200) {
    const newMeta = {
        metadata: [
            {
                content: metaTour?.data?.data?.tourSeo?.th?.keyword,
                name: 'keywords',
            },
            {
                content: metaTour?.data?.data?.tourSeo?.th?.description,
                name: 'description',
            }
        ],
        title: metaTour?.data?.data?.tourSeo?.th?.title,
        description: metaTour?.data?.data?.tourSeo?.th?.description,
    } as any;

    const { tourcode } = req.params;
    const apiRequest = new ListAPIRequest({
        pageNo: 1,
        pageSize: 10,
        tourCode: tourcode,
    } as any);

    const tourData = await APIManager.default.fetch(apiRequest);

    (req as any).DataGateway = {
        dataTour: tourData?.data,
        seo: newMeta,
        seoMeta: metaTour?.data,
    };

    next();
    //     } else {
    //         res.redirect('https://www.thaitravelcenter.com/');
    //     }
    // } catch (e) {
    //     res.redirect('../');
    // }
});

CollectiveGateway.get('/list-filter/:tourcode([^/]+/[^/]+)', async (req, res, next) => {
    const metaTour = await CollectiveManage.default.getTourSEO(req.params);
    if (metaTour?.data?.data == '') {
        res.header('HTTP/1.1 301 Moved Permanently');
        res.redirect('https://www.thaitravelcenter.com/');
    }
    // try {
    //     if (metaTour.data.status === 200) {
    const newMeta = {
        metadata: [
            {
                content: metaTour?.data?.data?.tourSeo?.th?.keyword,
                name: 'keywords',
            },
            {
                content: metaTour?.data?.data?.tourSeo?.th?.description,
                name: 'description',
            }
        ],
        title: metaTour?.data?.data?.tourSeo?.th?.title,
        description: metaTour?.data?.data?.tourSeo?.th?.description,
    } as any;

    const { tourcode } = req.params;
    const apiRequest = new ListAPIRequest({
        pageNo: 1,
        pageSize: 10,
        tourCode: tourcode,
    } as any);

    const tourData = await APIManager.default.fetch(apiRequest);

    (req as any).DataGateway = {
        dataTour: tourData?.data,
        seo: newMeta,
        seoMeta: metaTour?.data,
    };

    next();
    //     } else {
    //         res.redirect('https://www.thaitravelcenter.com/');
    //     }
    // } catch (e) {
    //     res.redirect('../');
    // }
});

CollectiveGateway.get('/autocomplete/:text', async (req, res, next) => {
    try {
        const { text } = req.params;
        const apiRequest = new AutocompleteAPIRequest({
            keyword: text
        });
        const response = await APIManager.default.fetch(apiRequest);
        return res.json(response.data);
    } catch (error) {
        const errorResponse = ErrorResponse.create(error);
        return res.status(400).json(errorResponse.toAPIResponse());
    }
});

CollectiveGateway.get('/tourlist/:tourcode/:pagesize/:pageno', async (req, res, next) => {
    try {
        const { tourcode, pagesize, pageno } = req.params;
        const apiRequest = new ListAPIRequest({
            pageNo: pageno,
            pageSize: pagesize,
            tourCode: tourcode,
        } as any);
        const response = await APIManager.default.fetch(apiRequest)
        return res.json(response.data);
    } catch (error) {
        const errorResponse = ErrorResponse.create(error);
        return res.status(400).json(errorResponse.toAPIResponse());
    }
});

CollectiveGateway.get('/detail/:id', async (req, res, next) => {
    const tour = await CollectiveManage.default.getDetail(req.params);
    if (tour?.data?.data == '') {
        res.header('HTTP/1.1 301 Moved Permanently');
        res.redirect('https://www.thaitravelcenter.com/');
    }
    const newMeta = {
        metadata: [
            {
                content: tour?.data.data.title,
                name: 'keywords',
            },
            {
                content: `ไทยทราเวลเซ็นเตอร์นำเสนอ ${tour?.data.data.title} - สนใจเข้าร่วมทริป จองหรือโทรสอบถามได้เลยที่ 02-171-9999 เปิดปริการทุกวัน`,
                name: 'description',
            }
        ],
        title: tour?.data.data.title,
        description: `ไทยทราเวลเซ็นเตอร์นำเสนอ ${tour?.data.data.title} - สนใจเข้าร่วมทริป จองหรือโทรสอบถามได้เลยที่ 02-171-9999 เปิดปริการทุกวัน`,
    } as any;

    (req as any).DataGateway = {
        seo: newMeta,
        tourData: tour?.data
    };

    next();
});

export default CollectiveGateway;
