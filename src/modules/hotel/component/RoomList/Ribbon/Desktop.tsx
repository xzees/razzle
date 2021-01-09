import ColorManager from 'common/Manager/ColorManager';
import FontManager from 'modules/hotel/Manager/FontManager';
import React from 'react';

import { 
    Ribbon,
    Text 
} from './Style';

const ribbonStyle = {
    top: '84px',
    backgroundColor: ColorManager.default.brown
};

const Mobile = (props: any) => {
    return (
        <>
            <Ribbon>
                <Text 
                    fontSize={FontManager.default.SMALL_TINY_10}
                    lineHeight={'0.7'}
                > 
                    {'ประหยัดไป'}
                </Text>
                <Text 
                    fontSize={FontManager.default.TEXT_TINY_EXTRA_17} 
                    lineHeight={'0.7'}
                >
                    {'SAVE'}
                </Text>
                <Text 
                    fontSize={FontManager.default.TEXT_MEDIUM_22} 
                    lineHeight={'0.7'}
                    fontFamily={FontManager.default.secondaryFont}
                    marginTop={'7px'}
                >
                    {'-200'}
                </Text>
            </Ribbon>
            {props.randomMock === 'G' && <GetCoin />}
            {props.randomMock === 'S' && <SaveCost />}

        </>
    );
};

const GetCoin = (props: any) => {

    return (
        <Ribbon
            style={ribbonStyle}
        >
            <Text 
                fontSize={FontManager.default.TEXT_20} 
                lineHeight={'0.7'}
                fontFamily={'DBHeaventRoundedMedv32'}
            >
                {'GET'}
            </Text>
            <Text 
                fontSize={FontManager.default.SMALL_MEDIUM_14} 
                lineHeight={'0.7'}
            >
                {'COIN'}
            </Text>
            <Text 
                fontSize={FontManager.default.TEXT_MEDIUM_22} 
                lineHeight={'0.7'}
                fontFamily={'DBHeaventRoundedMedv32'}
            >
                {'-400'}
            </Text>
        </Ribbon>
    );
};

const SaveCost = (props: any) => {

    return (
        <Ribbon
            style={ribbonStyle}
        >
            <Text 
                fontSize={FontManager.default.SMALL_12}
                lineHeight={'0.7'}
            >
                {'ส่วนลด'}
            </Text>
            <Text 
                fontSize={FontManager.default.SMALL_MEDIUM_14} 
                lineHeight={'0.7'}
            >
                {'COIN'}
            </Text>
            <Text 
                fontSize={FontManager.default.TEXT_MEDIUM_22} 
                lineHeight={'0.7'}
                fontFamily={FontManager.default.secondaryFont}
                marginTop={'5px'}
            >
                {'-100'}
            </Text>
        </Ribbon>
    );
};

export default Mobile;