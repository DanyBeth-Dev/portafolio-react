import React from 'react'
import foto01 from '../assets/01.jpg'
import foto02 from '../assets/02.jpg'
import foto03 from '../assets/03.jpg'
import foto04 from '../assets/04.jpg'
import foto05 from '../assets/05.jpg'
import foto06 from '../assets/06.jpg'
import foto07 from '../assets/07.jpg'
import foto08 from '../assets/08.jpg'
import foto09 from '../assets/09.jpg'

const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" className="bg-[#0a192f] carousel slide relative m-auto p-8 flex flex-col justify-center h-full" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
      </div>
      <div className="carousel-inner relative max-w-[800px] m-auto overflow-hidden">
        <div className="carousel-item active float-left w-full">
          <img src={foto01} className="block w-full" alt="Wild Landscape" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={foto02} className="block w-full" alt="Camera" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={foto03} className="block w-full" alt="Exotic Fruits" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={foto04} className="block w-full" alt="Exotic Fruits" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={foto05} className="block w-full" alt="Exotic Fruits" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={foto06} className="block w-full" alt="Exotic Fruits" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={foto07} className="block w-full" alt="Exotic Fruits" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={foto08} className="block w-full" alt="Exotic Fruits" />
        </div>
        <div className="carousel-item float-left w-full">
          <img src={foto09} className="block w-full" alt="Exotic Fruits" />
        </div>
      </div>
      <button className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel