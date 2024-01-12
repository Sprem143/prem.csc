import img2 from './Images/img2.jpg'
import img3 from './Images/img3.jpg'
import img4 from './Images/img4.jpg'
export default function Coresol(){
    return(
        <>
       <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
        </>
    )
}