import PropTypes from "prop-types";
import './Teams.css'

interface YoutubeEmbedProps{
    embedId: string;
}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({embedId}) => (
    <div className="video-responsive h-64">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
  
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };
  
  export default YoutubeEmbed;