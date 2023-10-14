import classes from './Profile.module.css';
import { LetteredAvatar } from '../../common/LetteredAvatar/LetteredAvatar';


export const ProfileHero = ({ profileSlug, backgroundImage, firstName, lastName }) => {

    const backgroundImageUrl = "http://127.0.0.1:8000" + backgroundImage;

    console.log(firstName, lastName);

    return (
        <div className={classes.hero__main}>
            <div style={{
                        backgroundImage: `url(${backgroundImageUrl})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "550px",
                    }} className={`${classes.hero__main_image} skeleton`}>
            </div>

            <div className={classes.avatar}>
                <LetteredAvatar profileSlug={profileSlug} firstName={firstName} lastName={lastName} />
            </div>

            <div className={classes.hero__main_header}>
                <div className={classes.name}>
                    <h2>{!firstName || !lastName ? 
                        (
                            <span>{profileSlug}</span>
                        ) : (
                            <span>{firstName} {lastName}</span>
                        )
                    }</h2>
                    <p></p>
                </div>

                <form>
                    <button type='submit'>Edit</button>
                </form>
            </div>
        </div>
    );

}