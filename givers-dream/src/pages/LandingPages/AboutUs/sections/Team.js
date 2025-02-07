// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import HorizontalTeamCard from "examples/Cards/TeamCards/HorizontalTeamCard";

// Replace these image imports with your actual images.
import director1Img from "assets/images/team/director-2-kris.png";
import director2Img from "assets/images/team/director-3.png";
import director3Img from "assets/images/team/director-1.png";
import techSupportImg from "assets/images/team/tech_support-1.png";

function Team() {
  return (
    <MKBox
      component="section"
      variant="gradient"
      bgColor="dark"
      position="relative"
      py={6}
      px={{ xs: 2, lg: 0 }}
      mx={-2}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Our Team
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Meet the dedicated leaders driving our mission to uplift and support young girls.
              Through education, outreach, and essential resources, our team works tirelessly to
              ensure every child has the opportunity to thrive. With a focus on providing sanitary
              care, nutrition, and mentorship, we are committed to creating a future where no child
              is held back by circumstance. Together, we strive to empower, educate, and inspire the
              next generation.
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {/* Director One */}
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={director1Img}
                name="Kris Setton"
                position={{ color: "info", label: "Director of Fundraising & Development" }}
                description="I lead all funding efforts, including securing grants, building donor relationships, and managing sponsorships. Oversees fundraising initiatives to ensure the organization’s financial sustainability."
              />
            </MKBox>
          </Grid>
          {/* Director Two */}
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <HorizontalTeamCard
                image={director2Img}
                name="Melani Lallo"
                position={{ color: "info", label: "Director of Community Engagement & Programs" }}
                description="I manage outreach efforts, builds relationships with community partners, and oversees programs that align with the organization’s mission. Ensures initiatives effectively support and engage the community."
              />
            </MKBox>
          </Grid>
          {/* Director Three */}
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={director3Img}
                name="Adeline Rukundo"
                position={{ color: "info", label: "Director of Operations & Strategy" }}
                description="I provide leadership, oversees internal processes, and guides the organization’s strategic direction. Ensures smooth operations, compliance, and long-term planning for growth and impact."
              />
            </MKBox>
          </Grid>
          {/* Tech Support */}
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <HorizontalTeamCard
                image={techSupportImg}
                name="Frederick Ishimwe"
                position={{ color: "info", label: "Tech Support" }}
                description="I manage our technical operations to ensure a robust and user-friendly digital experience."
              />
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Team;
