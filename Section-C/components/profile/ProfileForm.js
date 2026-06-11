import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

export default function ProfileForm({
  profile,
  saveProfile
}) {
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);

  const handleSubmit = () => {
    saveProfile(name, bio);
  };

  return (
    <div>
      <h2>Creator Profile</h2>

      <Input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        placeholder="Name"
      />

      <Input
        value={bio}
        onChange={(e) =>
          setBio(e.target.value)
        }
        placeholder="Bio"
      />

      <Button onClick={handleSubmit}>
        Update Profile
      </Button>
    </div>
  );
}