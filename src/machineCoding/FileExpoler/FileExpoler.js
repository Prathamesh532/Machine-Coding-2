import React, { useState } from "react";
import "./style.css";

const FileExpoler = ({ expoler }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    IsVisiable: false,
    isFolder: null,
  });

  const handleBtn = (e, isFolder) => {
    e.stopPropagation();

    setExpand(true);
    setShowInput({
      IsVisiable: true,
      isFolder,
    });
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      // add Logic for adding a folder/file in actual tree
      setShowInput({
        ...showInput,
        IsVisiable: false,
      });
    }
  };

  if (expoler.isFolder) {
    return (
      <div>
        <div onClick={() => setExpand(!expand)} className="folder">
          <span>📁{expoler.name}</span> {/* Prinitng only root level  tress */}

          {/* For creating a folder / file */}
          <div>
            <button onClick={(e) => handleBtn(e, true)}>📁</button>
            <button onClick={(e) => handleBtn(e, false)}>🗒️</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {/* after click add folder/file button input logic */}
          {showInput.IsVisiable && (
            <div>
              <span>{showInput.isFolder ? "📁" : "🗒️"}</span>
              <input
                type="text"
                onKeyDown={handleEnter} // logic when we pres enter it will not visible
                onBlur={() => setShowInput({ ...showInput, IsVisiable: false })}
                autoFocus
              />
            </div>
          )}

          {/* Printinig all trees */}
          {expoler.items.map((exp) => {
            return <FileExpoler expoler={exp} key={exp.id} />; // main logic for printing all tress folder/file
          })}
        </div>
      </div>
    );
  } else {
    return (
      // just printing a file after checking isFolder is true/false
      <span className="file" key={expoler.id}>
        🗒️{expoler.name}
      </span>
    );
  }
};

export default FileExpoler;
