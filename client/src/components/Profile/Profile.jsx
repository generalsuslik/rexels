import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Layout from "../../common/Layout/Layout";
import { FeedComponent } from "../Feed/FeedComponent";
import { ProfileHero } from "./ProfileHero";
import { Line } from "../../common/Line/Line";

import classes from './Profile.module.css';


const baseUrl = "http://127.0.0.1:8000/api";


// const GetProfileData = ({ profileSlug }){
    // const [photos, setPhotos] = useState([]);

    // useEffect(() => {
    //     axios.get(`${baseUrl}/photos/`)
    //         .then(res => {
    //             setPhotos(res.data.filter(elem => elem.user.profile.slug === profileSlug));
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // });

    // return photos;
// }


function GetProfilePhotos(profileSlug) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}/photos/`)
            .then(res => {
                setPhotos(res.data.filter((elem) => elem?.user?.profile.slug === profileSlug));
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return photos;
}


function GetProfileData(profileSlug) {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get(`${baseUrl}/profiles/${profileSlug}/`)
            .then(res => {
                setProfile(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    return profile;
}


export const Profile = () => {
    const { profileSlug } = useParams();

    let profile = GetProfileData(profileSlug);
    let photos = GetProfilePhotos(profileSlug);

    return (
        <Layout>
            <div className={classes.profile__wrapper}>
                {<ProfileHero profileSlug={profileSlug} profile={profile}/>}
                <Line />
                <FeedComponent photos={photos} />
            </div>
        </Layout>
    );
}

