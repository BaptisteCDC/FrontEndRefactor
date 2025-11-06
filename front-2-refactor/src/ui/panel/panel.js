import { useState } from 'react';
import './panel.css'

export function Panel({ 
    closePanelText,
    openPanelText,
    children
 }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="panel">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`panel-toggle ${isOpen ? "open" : ""}`}
            >
                {isOpen ? closePanelText : openPanelText}
            </button>
        
            {isOpen && (
                <div className="panel-content">
                    {children}
                </div>
            )}
        </div>
      );
}