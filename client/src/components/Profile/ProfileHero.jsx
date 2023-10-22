import classes from './Profile.module.css';
import { LetteredAvatar } from '../../common/LetteredAvatar/LetteredAvatar';
import { DropdownItem } from '../../common/Dropdown/DropdownItem/DropdownItem';
import { DropdownMenu } from '../../common/Dropdown/DropdownMenu/DropdownMenu';


export const ProfileHero = ({ profileSlug, profile, firstName, lastName }) => {

    console.log(firstName, lastName);
    const socialLinks = profile.social_links

    return (
        <div className={classes.hero__mainWrapper}>
            <div className={classes.hero__main}>
                <div className={classes.avatar}>
                    <LetteredAvatar profileSlug={profileSlug} firstName={firstName} lastName={lastName} />
                </div>
                <div className={classes.user_info}>
                    <div className={classes.main_info}>
                        {(firstName || lastName) &&<h1>{firstName} {lastName}</h1>}
                        {!(firstName || lastName) && <h1>{profileSlug}</h1>}
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At necessitatibus minus sapiente architecto voluptatem quidem blanditiis. Aut maxime eum ratione!</p>
                        <br />
                        {socialLinks && <DropdownMenu color={true} title={"Contact"}>
                            {socialLinks.map(link => (
                                <DropdownItem link={link} text={"Link"} />
                            ))}
                        </DropdownMenu>}
                    </div>
                </div>
            </div>
        </div>
    );

}