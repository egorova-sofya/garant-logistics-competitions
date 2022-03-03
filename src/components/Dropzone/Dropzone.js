import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import s from "./Dropzone.module.css";
import fileImg from "../../assets/img/file.svg";

const Dropzone = () => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
        setFiles(
          acceptedFiles.map((file) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          )
        );
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({ onDrop });

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={fileImg} style={{ width: "200px" }} alt="preview" />
        <p className={s.fileName}>{file.name}</p>
      </div>
    </div>
  ));

  return (
    <>
      <button
        className={s.button}
        type="button"
        onClick={open}
        {...getRootProps()}
      >
        <div className={s.modalWrapper}>
          <div className={s.container}>
            <input {...getInputProps()} />
            {images.length > 0 ? (
              <></>
            ) : (
              <p className={s.text}>Выберите файл или перенесите его сюда</p>
            )}

            <div>{images}</div>
          </div>
        </div>
      </button>
    </>
  );
};

export default Dropzone;
