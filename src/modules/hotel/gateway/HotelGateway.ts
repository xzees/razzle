import express, { Request, Response, NextFunction } from 'express';
import HotelManager from 'modules/hotel/Manager/HotelManager';
import AutocompleteGatewayBody from 'modules/hotel/gatewayQuery/AutocompleteGatewayBody';
import ErrorResponse from 'common/models/ErrorResponse';
import _ from 'lodash';

const HotelGateway = express();

HotelGateway.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const meta = await HotelManager.default.fetchMeta();

        (req as any).DataGateway = {
            seo: meta
        };
        next();
    } catch (e) {
        res.header('HTTP/1.1 301 Moved Permanently');
        res.redirect('/');
    }
});

HotelGateway.get('/autocomplete/:text/:lang', async (req: Request, res: Response) => {
    
    try {
        const autocompleteGatewayBody = new AutocompleteGatewayBody(req.params);
        const validationModel = autocompleteGatewayBody.validate();
        if (!validationModel.isValid) { throw validationModel.message; }
        
        const getHotelByIdentifier = await HotelManager.default.autocomplete(autocompleteGatewayBody);
        return res.json(getHotelByIdentifier);

    } catch (error) {
        const errorResponse = ErrorResponse.create(error);
        return res.status(400).json(errorResponse.toAPIResponse());
    }
});

HotelGateway.get('/search', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const param: any = req.query;
        const returnData: any = await HotelManager.default.search({
            ...param, 
            row: 3,
            order_dir: 'asc',
            order_by: 'price' 
        });

        (req as any).DataGateway = {
            ...returnData
        };
        next();
    } catch (e) {
        res.header('HTTP/1.1 301 Moved Permanently');
        res.redirect('/hotel');
    }
});

HotelGateway.get('/roomlist', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const param: any = req.query;
        const returnData = await HotelManager.default.roomlist({
            ...param
        });

        const relateData = await HotelManager.default.search({
            ...param,
            row: 20,
            order_dir: 'asc',
            order_by: 'price'
        });
        
        (req as any).DataGateway = {
            roomlist: returnData?.data?.data, related: _.omit(relateData.data, ['requestId', 'status'])
        };

        next();
    } catch (e) {
        res.header('HTTP/1.1 301 Moved Permanently');
        res.redirect('/hotel');
    }
});

HotelGateway.get('/search', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const param: any = req.query;
        const returnData: any = await HotelManager.default.search({
            ...param, 
            row: 3,
            order_dir: 'asc',
            order_by: 'price' 
        });

        (req as any).DataGateway = {
            ...returnData
        };
        next();
    } catch (e) {
        res.header('HTTP/1.1 301 Moved Permanently');
        res.redirect('/hotel');
    }
});

HotelGateway.get('/reservation', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const param: any = req.query;
        //console.log("🚀 ~ file: HotelGateway.ts ~ line 107 ~ HotelGateway.get ~ param", param)
        const returnData: any = await HotelManager.default.getReservationOrder({
            ...param,
        });

        //console.log("🚀 ~ file: HotelGateway.ts ~ line 110 ~ HotelGateway.get ~ returnData getReservationOrder", returnData);
        // const returnData = {booking: data};
        // console.log("🚀 ~ file: HotelGateway.ts ~ line 118 ~ HotelGateway.get ~ returnData", data);
        (req as any).DataGateway = {
            booking: returnData
        };
        next();
    } catch (e) {
        
        console.log("🚀 ~ file: HotelGateway.ts ~ line 88 ~ HotelGateway.get ~ e", e)
        res.header('HTTP/1.1 301 Moved Permanently');
        res.redirect('/hotel');
    }
});


HotelGateway.get('*', async (req: Request, res: Response, next: NextFunction) => {
    const localizationData = await HotelManager.default.labeltranslator({
        brandIdentifier: 'TTC',
        productIdentifier: 'HOTEL',
        platformType: 'WEB_DESKTOP'
    });
    
    (req as any).DataGateway = {...(req as any).DataGateway , lang: localizationData}

    next();
});

export default HotelGateway;