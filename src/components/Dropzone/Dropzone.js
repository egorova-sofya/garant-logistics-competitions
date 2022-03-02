import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import s from "./Dropzone.module.css";

const Dropzone = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ));

  return (
    <>
      <div className={s.modalWrapper}>
        <div className={s.container}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p className={s.text}>Выберите файл или перенесите его сюда</p>
          </div>
          <div>{images}</div>
        </div>
        <button className={s.button} type="button" onClick={open}>
          Open File Dialog
        </button>
      </div>
    </>
  );
};

export default Dropzone;
