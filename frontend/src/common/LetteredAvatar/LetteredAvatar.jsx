import generateProfileImage from "../../utils/generateProfileImage"

import classes from './LetteredAvatar.module.css'


export const LetteredAvatar = ({ profileSlug, firstName, lastName }) => {
    let initials = '';
    if (!firstName || !lastName){
        initials = profileSlug[0].toUpperCase();
    } else {
        initials = firstName[0].toUpperCase() + lastName[0].toUpperCase();
    }

    let color = generateProfileImage(profileSlug);

    return (
        <div className={classes.avatar} style={{background: color}}>
            <span className={classes.avatar_span}>{initials}</span>
        </div>
    );
}