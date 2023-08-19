import "bootstrap/dist/css/bootstrap.min.css";

import gallery1 from '../../assets/images/gallery-1.jpg';
import gallery2 from '../../assets/images/gallery-2.jpg';
import gallery3 from '../../assets/images/gallery-3.jpg';
import gallery4 from '../../assets/images/gallery-4.jpg';
import gallery5 from '../../assets/images/gallery-5.jpg';
import gallery6 from '../../assets/images/gallery-6.jpg';
import gallery7 from '../../assets/images/gallery-7.jpg';
import gallery8 from '../../assets/images/gallery-8.jpg';
import '../../css/home.css';
import HeaderComponent from "./header";
import FooterComponent from "./footer";

export default function Gallery(){
    return(
        <div>
           <HeaderComponent/>


            <div class="about_container flt">
    <div class="container" style={{backgroundColor:"white",margin:"20px"}}>
        <div class="gallery_title flt">
            Gallery 
        </div>
        <div class="gallery_main flt">
            <div class="gallery flt">
                <div class="row">
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-1.jpg"><img
                                    src={gallery1} class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-2.jpg"><img
                                    src={gallery2}  class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-3.jpg"><img
                                    src={gallery3}  class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-4.jpg"><img
                                    src={gallery4} class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-5.jpg"><img
                                    src={gallery5} class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-6.jpg"><img
                                    src={gallery6} class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-7.jpg"><img
                                    src={gallery7} class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="gallery_image flt">
                            <a data-fancybox="gallery" href="assets/images/gallery-8.jpg"><img
                                    src={gallery8} class="img-responsive" alt="image"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    </div>
</div>
<FooterComponent/>
        
        </div>
    );
}