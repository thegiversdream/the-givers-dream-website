/*
=========================================================

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React components
import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
// import BackgroundBlogCard from "examples/Cards/BlogCards/BackgroundBlogCard";

// Images
import outreach1 from "assets/images/schools/4.jpeg";
import outreach2 from "assets/images/schools/5.jpg";
import outreach3 from "assets/images/schools/9.jpeg";

function Places() {
  return (
    <MKBox component="section" py={2}>
      <Container>
        <Grid container item xs={12} lg={6}>
          <MKTypography variant="h3" mb={6}>
            Our Outreach Programs
          </MKTypography>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={4}>
            <TransparentBlogCard
              image={outreach1}
              title="Bringing Hope to Greenfield High"
              description="We visited Greenfield High School, providing over 200 young girls with essential sanitary pads and a workshop on hygiene and self-care. The impact was immediate, with students expressing gratitude and increased confidence."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <TransparentBlogCard
              image={outreach2}
              title="Empowering Future Leaders at Bright Academy"
              description="At Bright Academy, we engaged with 150 students in an interactive session about menstrual health and distributed hygiene kits. Teachers reported a positive shift in students' confidence and school attendance."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <TransparentBlogCard
              image={outreach3}
              title="Supporting Young Girls at Rivergate Primary"
              description="Rivergate Primary School welcomed us as we provided critical sanitary products and held discussions on self-worth and empowerment. Over 180 girls received much-needed support, fostering a sense of dignity and belonging."
              action={{
                type: "internal",
                route: "/pages/blogs/author",
                color: "info",
                label: "read more",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Places;
