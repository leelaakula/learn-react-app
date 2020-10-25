import logo from '../../logo.svg';

const withData = (maxProfilesToShow) => (Component) => {
    const imgData = [
        {
            imgSrc: logo,
            name: 'Name 1'
        },
        {
            imgSrc: logo,
            name: 'Name 2'
        },
        {
            imgSrc: logo,
            name: 'Name 3'
        }
    ];
    return () => {
        const limitProfiles = imgData.slice(0, maxProfilesToShow);
        return <Component imgData={limitProfiles}></Component>
    }
};

export default withData;
