import React, { useEffect, useRef } from 'react';
import Image1 from './STARoboticsPhotos/stagallery1.webp';
import Image2 from './STARoboticsPhotos/stagallery2.webp';
import Image3 from './STARoboticsPhotos/stagallery3.webp';
import Image4 from './STARoboticsPhotos/stagallery4.webp';
// import Image5 from './STARoboticsPhotos/stagallery5.webp';
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
    <section id='gallery' className='box-shadow-wrapper'>
    <h3 className='flex justify-center pt-7 font-Khula text-transparent text-7xl bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 relative mt-[3%]'>Gallery</h3>
    <div className="row-pg mb-[1%]">
      {/* COLUMN 1 */}
      <div className="column-pg">
        <img
          className="myImages mobile:mb-3 rounded-2xl"
          src={Image1} // Replace with your image source
          style={{position:'relative'}}
        />
      </div>

      {/* COLUMN 2 */}
      <div className="column-pg">
      <img
          className="myImages mobile:mb-3 rounded-2xl"
          src={Image2} // Replace with your image source
          style={{position:'relative'}}
        />
      </div>

      {/* COLUMN 3 */}
      <div className="column-pg">
      <img
          className="myImages mobile:mb-3 rounded-2xl"
          src={Image3} // Replace with your image source
          style={{position:'relative'}}
        />
      </div>

      {/* COLUMN 4 */}
      <div className="column-pg">
      <img
          className="myImages mobile:mb-3 rounded-2xl"
          src={Image4} // Replace with your image source
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
