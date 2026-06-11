import { useEffect, useState } from "react";

import Layout from "../components/layout/Layout";

import ProfileForm from "../components/profile/ProfileForm";

import LinksList from "../components/links/LinksList";

import { getLinks } from "../graphql/queries";

import { updateProfile } from "../graphql/mutations";

export default function Home() {

  const [profile, setProfile] =
    useState({
      name: "",
      bio: ""
    });

  const [links, setLinks] =
    useState([]);

  useEffect(() => {

    const savedProfile =
      localStorage.getItem("profile");

    if (savedProfile) {
      setProfile(
        JSON.parse(savedProfile)
      );
    }

    setLinks(getLinks());

  }, []);

  const saveProfile = (
    name,
    bio
  ) => {

    const updated =
      updateProfile(name, bio);

    setProfile(updated);

    localStorage.setItem(
      "profile",
      JSON.stringify(updated)
    );
  };

  return (
    <Layout>

      <ProfileForm
        profile={profile}
        saveProfile={saveProfile}
      />

      <LinksList links={links} />

    </Layout>
  );
}