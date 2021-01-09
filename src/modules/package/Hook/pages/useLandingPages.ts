import { useState } from 'react';
import { useSSE } from 'utilities/useSSE';
import DestinationModel from 'modules/package/Models/GetModel/Destination/DestinationModel';
import PackageManager from 'modules/package/Manager/PackageManager';

interface Output {
  tabIndex: number;
  setTabIndex: (tabIndex: number) => void;
}

const useLandingPages = (): Output => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  useSSE(async () => {
    const meta = await PackageManager.default.fetchMeta();
    return [{ seo: meta }];
  }, []);

  return {
    tabIndex,
    setTabIndex,
  };
};

export default useLandingPages;
