import React from 'react';
import '../../CSS/Buttons/FillButton.scss';

interface PropsData{
    dispText: string;
    icon?: JSX.Element;
}


const FillButton: React.FC<PropsData> = ({dispText,icon}:PropsData): JSX.Element => {
  return (
    <div>
      <button id="FillPillButton">{icon}&nbsp;{dispText}</button>
    </div>
  );
}

export default FillButton;