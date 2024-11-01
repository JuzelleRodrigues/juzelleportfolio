import React from "react";
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <>
    <div className="container">
            <div className="content">
                <div className="header">
                    <div className="design-tools">
                        <div className="design-tools-title">UI/UX</div>
                    </div>
                    <div className="date">
                        <div className="date-text">AUGust 30, 2024</div>
                    </div>
                </div>
                <div className="main-title">
                    Plant Nursey Case Study
                </div>
                <div className="description">
                BIOTA: A plant nursery mobile application to simplify purchasing plants online, plant care and gardening.
                </div>
            </div>
            <img className="image" src="/images/2_ThumbnailSize_Aesthetic_Dramatic" alt="Placeholder" />
        </div>

        <div className="background-div"></div>

        <div className="container">
            <div className="content">
                <div className="header">
                    <div className="design-tools">
                        <div className="design-tools-title">Graphic Design</div>
                    </div>
                    <div className="date">
                        <div className="date-text">MAY 13, 2024</div>
                    </div>
                </div>
                <div className="main-title">
                   LG_Website Banner Design | Social Media Campaign
                </div>
                <div className="description">
                Strategic Social Media Marketing for LG: Captivating Visuals making a powerful impact
                </div>
            </div>
            <img className="image" src="/images/2_ThumbnailSize_Aesthetic_Dramatic" alt="Placeholder" />
        </div>


        <div className="container">
            <div className="content">
                <div className="header">
                    <div className="design-tools">
                        <div className="design-tools-title">Graphic Design</div>
                    </div>
                    <div className="date">
                        <div className="date-text">JANuary 20, 2024</div>
                    </div>
                </div>
                <div className="main-title">
                    Fashion Photograpy Social Media Campaign
                </div>
                <div className="description">
                    A symphony of sea and style, where every wave whispers a story of beauty.
                </div>
            </div>
            <img className="image" src="/images/2_ThumbnailSize_Aesthetic_Dramatic" alt="Placeholder" />
        </div>

        <div className="container">
            <div className="content">
                <div className="header">
                    <div className="design-tools">
                        <div className="design-tools-title">Fashion Design</div>
                    </div>
                    <div className="date">
                        <div className="date-text">NOVember, 2023</div>
                    </div>
                </div>
                <div className="main-title">
                    Fashion Colloqia 2020, Jaipur, International Research Colloqium on " Responsible Future"
                </div>
                <div className="description">
                    A bold statement against fast fashion, embracing slow, sustainable style.
                </div>
            </div>
            <img className="image" src="/images/2_ThumbnailSize_Aesthetic_Dramatic" alt="Placeholder" />
        </div>
</>
  );
};
export default Projects;
