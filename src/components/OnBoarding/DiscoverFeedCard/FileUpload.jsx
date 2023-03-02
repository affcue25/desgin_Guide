import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {Style} from "./style"
const fileTypes = ["JPG", "PNG", "GIF"];
 
 export const FileUpload = () => {
  const classes = Style()
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
      setFile(file);
    };
  return (
    <div className={classes.fileCenter}>

    <FileUploader   handleChange={handleChange} name="file" types={fileTypes} />
    </div>
  )
}
