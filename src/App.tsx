import React, {useState} from 'react';
import {Button} from "./components/button";
import './App.scss';

function App(): JSX.Element {
    const [isLarge, setLarge] = useState<boolean>(false);
    const [isSmall, setSmall] = useState<boolean>(false);
    const [isBlock, setBlock] = useState<boolean>(false);
    const [isDisabled, setDisabled] = useState<boolean>(false);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [isOutlined, setOutlined] = useState<boolean>(false);

    const onLargeClick = (): void => setLarge(!isLarge);
    const onSmallClick = (): void => setSmall(!isSmall);
    const onBlockClick = (): void => setBlock(!isBlock);
    const onLoadingClick = (): void => setLoading(!isLoading);
    const onOutlinedClick = (): void => setOutlined(!isOutlined);
    const onDisabledClick = (): void => setDisabled(!isDisabled);

  return (
    <div className="container">
       <div className={"container__playground"}>
           <h1 className={"container__title"}>
               {"Custom button"}
           </h1>
           <Button
               min={isSmall}
               outlined={isOutlined}
               large={isLarge}
               disabled={isDisabled}
               block={isBlock}
               loading={isLoading}
               type={"primary"}>
               {"click me"}
           </Button>
       </div>
        <div className={"container__options"}>
            <h1>{"Options"}</h1>
            <ul className={"container__listContainer"}>
                <li className={`item ${isLarge && "active"}`} onClick={onLargeClick}>{"Large"}</li>
                <li className={`item ${isSmall && "active"}`} onClick={onSmallClick}>{"Small"}</li>
                <li className={`item ${isBlock && "active"}`} onClick={onBlockClick}>{"Block"}</li>
                <li className={`item ${isDisabled && "active"}`} onClick={onDisabledClick}>{"Disable"}</li>
                <li className={`item ${isLoading && "active"}`} onClick={onLoadingClick}>{"Loading"}</li>
                <li className={`item ${isOutlined && "active"}`} onClick={onOutlinedClick}>{"Outlined"}</li>
            </ul>
        </div>
    </div>
  );
}

export default App;
