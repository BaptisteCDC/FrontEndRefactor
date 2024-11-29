import { createContext, useState } from "react";
import './open-close-panel.css';

const OpenClosePanelContext = createContext(null);

const OpenClosePanelContextProvider = ({
    children
}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <OpenClosePanelContext.Provider>
            <div className="panel">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`panel-toggle ${isOpen ? "open" : ""}`}
            >
                {isOpen ? "Fermer la galerie" : "Ouvrir la galerie"}
            </button>
        
            {isOpen && (
                <div className="panel-content">
                    {children}
                </div>
            )}
            </div>
        </OpenClosePanelContext.Provider>
      );
}

export { OpenClosePanelContext, OpenClosePanelContextProvider};