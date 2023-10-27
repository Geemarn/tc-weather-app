import React, { Dispatch, memo, SetStateAction } from 'react';

interface TabsProps {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
}

function Tabs({ activeTab, setActiveTab }: TabsProps) {
  return (
    <div className='tabs' data-testid={'tc-tab'}>
      <div className='tab-list'>
        <button
          className={`${activeTab === 'metric' && 'active'} left-border`}
          onClick={() => setActiveTab('metric')}
        >
          Metric
        </button>
        <button
          className={activeTab === 'standard' ? 'active' : ''}
          onClick={() => setActiveTab('standard')}
        >
          Standard
        </button>
        <button
          className={`${activeTab === 'imperial' && 'active'} right-border`}
          onClick={() => setActiveTab('imperial')}
        >
          Imperial
        </button>
      </div>
    </div>
  );
}

export default memo(Tabs);
