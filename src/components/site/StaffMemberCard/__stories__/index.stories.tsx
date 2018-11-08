import { storiesOf } from "@heydovetail/website/util/stories";
import React from "react";
import { StaffMemberCard } from "../";
import avatar from "./avatar.jpg";

storiesOf("Site/StaffMemberCard", module).add("default", () => (
  <StaffMemberCard
    bio="Benjamin is a kiwi designer, developer, and entrepreneur living in Sydney. He loves creating world-class products and believes in the power of user research to do so. Previously Benjamin has led design projects at Atlassian, Delicious, and Ubuntu."
    image={avatar}
    name="Benjamin Humphrey"
    role="CEO &amp; Co-founder"
  />
));
