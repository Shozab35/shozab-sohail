import React, { useEffect, useRef, useState } from 'react';
import s from './Resume.module.scss';
import { ReactComponent as FilesIcon } from '../../assets/resume-files.svg';
import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import LinerProgress from '../../components/UIElements/LinerProgress/LinerProgress';
import Button from '../../components/UIElements/Button/Button';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const resumeLink = 'https://drive.google.com/uc?export=download&id=1mtx9mvsPiFDbzaMsP3KciPU3YsyTVGu3';

const Resume = () => {
  const pdfWrapper = useRef(null);
  const [pdfPageWidth, setPdfPageWidth] = useState(null);

  useEffect(() => {
    const updatePdfPageWidth = () => {
      setPdfPageWidth(pdfWrapper.current?.getBoundingClientRect().width || null);
    };

    updatePdfPageWidth();
    window.addEventListener('resize', updatePdfPageWidth);

    return () => window.removeEventListener('resize', updatePdfPageWidth);
  }, []);

  const removeTextLayerOffset = () => {
    const textLayers = document.querySelectorAll('.react-pdf__Page__textContent');
    textLayers.forEach((layer) => {
      const { style } = layer;
      style.top = '0';
      style.left = '0';
      style.transform = '';
    });
  };

  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.header}>
          <h1 className={s.title}>
            My <br /> Resume
          </h1>
          <div className={s.filesImg}>
            <FilesIcon />
          </div>
        </div>
        <Button
          style={{ margin: 'auto', width: '15rem' }}
          className="primary"
          href={resumeLink}
          target="_blank"
        >
          <DownloadIcon fill="#fff" />
          <span className={s.downloadText}> download resume</span>
          <span className={s.filename}>.pdf</span>
        </Button>
        <div className={s.pdfWrapper} ref={pdfWrapper}>
          <Document
            file={resumeLink}
            onLoadError={(error) => console.error('Error loading document:', error)}
            onSourceError={(error) => console.error('Error with source:', error)}
            loading={<LinerProgress />}
          >
            <Page
              onLoadSuccess={removeTextLayerOffset}
              loading={<LinerProgress />}
              width={pdfPageWidth}
              pageNumber={1}
            />
          </Document>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Resume;
