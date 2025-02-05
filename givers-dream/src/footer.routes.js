// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoGD from "assets/images/logos/the-givers-logo-2.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Givers Dream",
    image: logoGD,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/giversdream/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/giversdream",
    },
    {
      icon: <InstagramIcon />,
      link: "https://instagram.com/giversdream",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/giversdream",
    },
  ],
  menus: [
    {
      name: "Givers Dream Home",
      items: [
        { name: "What we do", href: "https://giversdream.org/pages/what-we-do" },
        { name: "Our Team", href: "https://giversdream.org/pages/team" },
        { name: "Our Impact", href: "https://giversdream.org/pages/donate" },
      ],
    },
    {
      name: "Get Involved",
      items: [
        { name: "Volunteer", href: "https://giversdream.org/pages/volunteer" },
        { name: "Become a supplier", href: "https://giversdream.org/pages/become-a-supplier" },
        { name: "Donate", href: "https://giversdream.org/pages/donate" },
      ],
    },
    {
      name: "help & support",
      items: [
        { name: "contact us", href: "/pages/landing-pages/contact-us" },
        { name: "Frequently asked questions", href: "https://giversdream.org/pages/faq" },
      ],
    },
    {
      name: "News & Updates",
      items: [
        { name: "Impact Stories", href: "https://giversdream.org/pages/stories" },
        { name: "Focused Schools", href: "https://giversdream.org/pages/schools" },
        { name: "Stories", href: "https://giversdream.org/pages/stories" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Maintained by{" "}
      <MKTypography
        component="a"
        // href="https://www.frederic.work"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Frederic Ushimwe
      </MKTypography>
      .
    </MKTypography>
  ),
};
