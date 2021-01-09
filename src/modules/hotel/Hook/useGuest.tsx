import React from 'react'
import { Box } from '@material-ui/core';
import ColorManager from 'common/Manager/ColorManager';

interface PropTypes {
  vAdult: any,
  vRoom: any,
  vChild: any,
  vChildOld: any,
  setvAdult: any,
  setvRoom: any,
  setvChildOld: any,
  setvChild: any,
}

const useGuest = (props: PropTypes) => {
  
      const uiStore = props;
      const [open, setOpen] = React.useState(false); 
  
      React.useEffect(() => {
        if (uiStore.vRoom > uiStore.vAdult) {
          uiStore.setvAdult(uiStore.vRoom);
        }
      }, [uiStore.vRoom])
  
      React.useEffect(() => {
        if (uiStore.vAdult < uiStore.vRoom) {
          uiStore.setvRoom(uiStore.vAdult);
        }
      }, [ uiStore.vAdult ])
  
      React.useEffect(() => {
        const data = Array(uiStore.vChild).fill(null).map((_, i) => i);
        const _countChild = data.length; 
        const _countChildOld = uiStore.vChildOld.length; 
        const _childOld = uiStore.vChildOld;
  
        if (_countChild < _countChildOld) {
          _childOld.pop();
  
        }
        if (_countChild > _countChildOld) {
          _childOld.push({
            name: _countChildOld,
            value: 2
          });
        }
        uiStore.setvChildOld(_childOld);
  
      }, [ uiStore.vChild ])
  
      const handleClickAway = () => {
          setOpen(false);
      };
  
      const handleClick = () => {
          setOpen(true);
      };
  
      const roomAdd = () => {
        uiStore.setvRoom((uiStore.vRoom + 1));
      };
  
      const roomRemove = () => {
        uiStore.setvRoom(((uiStore.vRoom - 1) <= 1 ? 1 : (uiStore.vRoom - 1)));
      };
  
      const adultAdd = () => {
        uiStore.setvAdult((uiStore.vAdult + 1));
      };
  
      const adultRemove = () => {
        uiStore.setvAdult(((uiStore.vAdult - 1) <= 1 ? 1 : (uiStore.vAdult - 1)));
      };
  
      const childAdd = () => {
        uiStore.setvChild((uiStore.vChild + 1));
      };
  
      const childRemove = () => {
        uiStore.setvChild(((uiStore.vChild - 1) <= 0 ? 0 : (uiStore.vChild - 1)));
      };
  
      const _handleChange = (e: any) => {
        const {name, value} = e.target;
        const _childOld = uiStore.vChildOld;
        const _array = [];
        for (const v of _childOld) {
          if (v.name.toString() === name.toString()) {
            _array.push({
              name: v.name,
              value: parseInt(value, 0)
            });
          }else{
            _array.push(v);
          }
        }
        uiStore.setvChildOld(_array);
      };
  
      const ChildText = () => {
          return (
              <> 
                  <Box m={0} style={{color: ColorManager.default.thirdColor}}>กรุณาระบุอายุของเด็กที่เข้าพัก เพื่อให้เราสามารถค้นหาห้องพักที่มีข้อเสนอพิเศษ และประเภทเตียงที่เหมาะสำหรับท่าน</Box>
                  <Box m={0} style={{color: ColorManager.default.primaryColor}}>เด็กคือผู้ที่มีอายุตั้งแต่ 2 ปี แต่ไม่เกิน 12 ปี ณ วันที่เข้าพัก * </Box>
              </>
          );
      };

      return {
        handleClickAway,
        handleClick,
        roomAdd,
        roomRemove,
        adultAdd,
        adultRemove,
        childAdd,
        childRemove,
        _handleChange,
        ChildText,
        open,
        setOpen
      }
};

export default useGuest;