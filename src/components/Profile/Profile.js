import withData from './withData';

const Profile = ({imgData}) => {
    return (
        <div>
            {imgData.map(({imgSrc, name}) => {
                return <img key={name} src={imgSrc} alt={name}/>
            })}
        </div>
    );
};

const maxProfilesToShow = 2;

export default withData(maxProfilesToShow)(Profile);
