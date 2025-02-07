/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";
import information_image from "assets/images/schools/9.jpeg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} lg={6}>
            <Grid container justifyContent="flex-start">
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="volunteer_activism"
                    title="Empowering Young Girls"
                    description="We provide essential support, including sanitary pads, mentorship, and educational resources, to help young girls thrive."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={5}>
                  <DefaultInfoCard
                    icon="school"
                    title="Access to Sanitary Care"
                    description="We distribute sanitary pads to schools, ensuring that young girls have the resources they need to stay in school with confidence."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="favorite"
                    title="Health & Well-being"
                    description="Our programs ensure access to basic hygiene, nutrition, and mental well-being support, fostering confidence and dignity."
                  />
                </MKBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <MKBox mb={{ xs: 5, md: 0 }}>
                  <DefaultInfoCard
                    icon="groups"
                    title="Community & Advocacy"
                    description="We advocate for gender equality, raise awareness, and collaborate with local communities to create lasting impact."
                  />
                </MKBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={4} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={information_image}
              title="Creating a Brighter Future"
              description="Every girl deserves equal opportunities. Join us in breaking barriers and building a future where young women can dream, learn, and lead."
              action={{
                type: "internal",
                route: "pages/company/about-us",
                color: "info",
                label: "Learn more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
