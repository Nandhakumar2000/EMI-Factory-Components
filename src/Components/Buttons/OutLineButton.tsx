import React from 'react';
import '../../CSS/Buttons/OutLineButton.scss';

interface PropsData{
    dispText: string;
    icon?: JSX.Element;
    clicked?: (e:  React.MouseEvent<HTMLButtonElement>) => any;
}

const OutLineButton: React.FC<PropsData> = ({dispText, icon, clicked}:PropsData)  => {
  return (
    <div>
      <button id="OutLinePillButton" onClick={clicked}>{icon}&nbsp;{dispText}</button>
    </div>
  );
}

export default OutLineButton;