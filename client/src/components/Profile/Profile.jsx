import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../../common/Layout/Layout";
import { FeedComponent } from "../Feed/FeedComponent";
import { ProfileHero } from "./ProfileHero";
import { Line } from "../../common/Line/Line";

import classes from './Profile.module.css';


const baseUrl = "http://127.0.0.1:8000";

export const Profile = () => {
    const { profileSlug } = useParams();

    const [profile, setProfile] = useState(null);
    const [user, setUser] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [photos, setPhotos] = useState([]);
    const [profileLoaded, setProfileLoaded] = useState(false);
    const [photosLoaded, setPhotosLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/photos/`)
            .then(res => {
                setPhotos(res.data.filter(photo => photo.user.profile.slug === profileSlug));
                setFirstName((res.data.filter(photo => photo.user.profile.slug === profileSlug))[0].user.first_name);
                setLastName((res.data.filter(photo => photo.user.profile.slug === profileSlug))[0].user.last_name); 
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/profiles/${profileSlug}/`)
            .then(res => {
                setProfile(res.data);
                // setFirstName(profile.user.first_name)
                // setLastName(profile.user.last_name);
                setProfileLoaded(true);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return (
        <Layout>
            <div className={classes.profile__wrapper}>
                {profileLoaded && <ProfileHero profileSlug={profileSlug} profile={profile} firstName={firstName} lastName={lastName} />}
                <Line />
                <FeedComponent photos={photos} />
            </div>
        </Layout>
    );
}

