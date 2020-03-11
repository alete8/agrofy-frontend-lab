import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
    return <section className="video_container">
        <div className="video_box">
            <iframe width="450" height="250" src="https://www.youtube.com/embed/yQCREgz4tQY?start=5"
                frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>
        <div className="video_box">
            <h2>Checkout the Official Pokémon Youtube Channel</h2>
                <a type="button" className="btn_video" href="https://www.youtube.com/user/PokemonOficialES"
                    target="_blank">View more</a>
        </div>
  </section>
}

export default VideoSection;