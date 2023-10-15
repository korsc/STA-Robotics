import React, { useEffect, useRef } from 'react';
import Image1 from './STARoboticsPhotos/stagallery1.webp';
import Image2 from './STARoboticsPhotos/stagallery2.webp';
import Image4 from './STARoboticsPhotos/stagallery4.webp';
import Image5 from './STARoboticsPhotos/stagallery5.webp';
import Image7 from './STARoboticsPhotos/stagallery7.webp';
import Image8 from './STARoboticsPhotos/stagallery8.webp';
import Image9 from './STARoboticsPhotos/stagallery9.webp';
import Image10 from './STARoboticsPhotos/stagallery10.webp';
import './gallery.css';

const Gallery: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const modalImgRef = useRef<HTMLImageElement>(null);
  const captionTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current!;
    const modalImg = modalImgRef.current!;
    const captionText = captionTextRef.current!;
    
    const images = document.getElementsByClassName('myImages');

    for (let i = 0; i < images.length; i++) {
      const img = images[i] as HTMLImageElement;
      img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
      };
    }
    const span = document.getElementsByClassName("close")[0] as HTMLDivElement;

    if (span) {
      span.onclick = function () {
        modal.style.display = "none";
      };
    }
    
  }, []);

  return (
    <section id='gallery' className='box-shadow-wrapper pb-2'>
    <h3 className='flex justify-center pt-7 font-Khula text-transparent text-7xl bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 relative mt-[1%] md:mb-7 mobile:mb-5'>Gallery</h3>
    <div className="row-pg mb-[1%]">
      {/* COLUMN 1 */}
      <div className="column-pg">
      <img
          className="myImages mobile:mb-3 rounded-2xl mb-2"
          src={Image2} 
          style={{position:'relative'}}
        />
        <img
          className="myImages mobile:mb-3 rounded-2xl"
          src={Image9} 
          style={{position:'relative'}}
        />
      </div>

      {/* COLUMN 2 */}
      <div className="column-pg">
      <img
          className="myImages mobile:mb-3 rounded-2xl mb-2"
          src={Image8} 
          style={{position:'relative'}}
        />
        <img
          className="myImages mobile:mb-3 rounded-2xl"
          src={Image5} 
          style={{position:'relative'}}
        />
      </div>

      {/* COLUMN 3 */}
      <div className="column-pg">
      <img
          className="myImages mobile:mb-3 rounded-2xl mb-2"
          src={Image7} 
          style={{position:'relative'}}
        />
      <img
          className="myImages mobile:mb-3 rounded-2xl"
          src={Image4} 
          style={{position:'relative'}}
        />
      </div>

      {/* COLUMN 4 */}
      <div className="column-pg">
      <img
          className="myImages mobile:mb-3 rounded-2xl mb-2"
          src={Image1} 
          style={{position:'relative'}}
        />
        <img
          className="myImages mobile:mb-3 rounded-2xl mb-2"
          src={Image10} 
          style={{position:'relative'}}
        />
      </div>

      <div ref={modalRef} className="modal">
        <span className="mt-20 close">&times;</span>
        <img ref={modalImgRef} className="modal-content rounded-3xl" id="img01" />
        <div ref={captionTextRef} id="caption"></div>
      </div>
    </div>
    </section>
  );
};

export default Gallery;
