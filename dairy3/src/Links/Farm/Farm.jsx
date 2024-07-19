import React from "react";
import cow_video from "../../assets/cow video.mp4";

const Farm = () => {
    return (
        <div>
            <video width="1300" controls>
                <source src={cow_video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Farm;
