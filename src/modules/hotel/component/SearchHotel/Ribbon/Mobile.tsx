import ColorManager from 'common/Manager/ColorManager'
import FontManager from 'modules/hotel/Manager/FontManager'
import React from 'react'
import { 
    Ribbon,
    Text 
} from './Style'
import i18n from 'utilities/I18n';
const Mobile = (props: any) => {
    const { size } = props;
    return (
        <>
            <Ribbon style={
                (size == 'xs') ? {top: '10px'} : {}
            }>
                <Text 
                    fontSize={FontManager.default.SMALL_TINY_10}
                    lineHeight={'0.7'}
                > 
                    {i18n.t('hotel.components.searchhotel.ribbon.savesave')}
                </Text>
                <Text 
                    fontSize={FontManager.default.TEXT_TINY_EXTRA_17} 
                    lineHeight={'0.7'}
                >
                    {i18n.t('hotel.components.searchhotel.ribbon.save')}
                </Text>
                <Text 
                    fontSize={FontManager.default.TEXT_MEDIUM_22} 
                    lineHeight={'0.7'}
                    fontFamily={FontManager.default.secondaryFont}
                    marginTop={'7px'}
                >{'-200'}</Text>
            </Ribbon>
            {props.randomMock == "G" && <GetCoin {...props} />}
            {props.randomMock == "S" && <SaveCost {...props} />}

        </>
    )
}

const GetCoin = (props: any) => {
    const { size } = props;
    return (
        <Ribbon
            style={{
                top: (size == 'xs') ? '70px' : '84px',
                backgroundColor: ColorManager.default.brown
            }}
        >
            <Text 
                fontSize={FontManager.default.TEXT_20} 
                lineHeight={'0.7'}
                fontFamily={'DBHeaventRoundedMedv32'}
            >
                {i18n.t('hotel.components.searchhotel.ribbon.get')}
            </Text>
            <Text 
                fontSize={FontManager.default.SMALL_MEDIUM_14} 
                lineHeight={'0.7'}
            >
                {i18n.t('hotel.components.searchhotel.ribbon.coin')}
            </Text>
            <Text 
                fontSize={FontManager.default.TEXT_MEDIUM_22} 
                lineHeight={'0.7'}
                fontFamily={'DBHeaventRoundedMedv32'}
            >{'-400'}</Text>
        </Ribbon>
    )
}

const SaveCost = (props: any) => {
    const { size } = props;
    return (
        <Ribbon
            style={{
                top: (size == 'xs') ? '70px' : '84px',
                backgroundColor: ColorManager.default.brown
            }}
        >
            <Text 
                fontSize={FontManager.default.SMALL_12}
                lineHeight={'0.7'}
            >
                {i18n.t('hotel.components.searchhotel.ribbon.discount')}
            </Text>
            <Text 
                fontSize={FontManager.default.SMALL_MEDIUM_14} 
                lineHeight={'0.7'}
            >
                {i18n.t('hotel.components.searchhotel.ribbon.coin')}
            </Text>
            <Text 
                fontSize={FontManager.default.TEXT_MEDIUM_22} 
                lineHeight={'0.7'}
                fontFamily={FontManager.default.secondaryFont}
                marginTop={'5px'}
            >{'-100'}</Text>
        </Ribbon>
    )
}

export default Mobile