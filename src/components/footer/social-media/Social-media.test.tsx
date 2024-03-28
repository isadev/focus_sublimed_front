import React from "react";
import { render, screen } from "@testing-library/react";
import SocialMedia from "./Social-media";
import { facebookcon, instagramIcon, twitterIcon } from "../images";

test("renders learn react link", () => {
  const socialMedia = [
    {
      labels: [
        {
          icon: facebookcon,
          link: "https://facebook.com/focus_sublimed",
          joinLinkImg: true,
        },
        {
          icon: instagramIcon,
          link: "https://instagram.com/focus_sublimed",
          joinLinkImg: true,
        },
        {
          icon: twitterIcon,
          link: "https://twitter.com/focus_sublimed",
          joinLinkImg: true,
        },
      ],
    },
  ];
  render(<SocialMedia labels={socialMedia[0].labels} />);
  /* const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); */
});
