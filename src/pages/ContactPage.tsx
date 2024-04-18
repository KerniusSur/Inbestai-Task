import {
  Box,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import InbestBackgroundWidget from "../components/InbestBackgroundWidget";
import InbestButton from "../components/InbestButton";
import InbestInput from "../components/InbestInput";
import { PageInnerContainer } from "../layouts/PublicLayout";
import toasts from "../store/toast";

const ContactPage = () => {
  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const [values, setValues] = useState<ContactFormValues>(initialValues);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toasts.success(
      "The contact form successfully submitted!\n(Please note that this form is not functional)"
    );
    setValues(initialValues);

    console.log(
      `Thank you for your message!\n\nValues:\n\tName: ${values.name}\n\tEmail: ${values.email}\n\tMessage: ${values.message}`
    );
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <PageInnerContainer
      sx={{
        maxWidth: "800px",
        alignItems: "center",
        flexDirection: "column",
        [theme.breakpoints.down("md")]: {
          justifyContent: "flex-start",
          gap: "2rem",
        },
      }}
    >
      <InbestBackgroundWidget
        iconNumber={2}
        widgetPosition={{
          left: mdDown ? "10%" : "15%",
          top: mdDown ? "55%" : "20%",
        }}
      />
      <ContactDetailsContainer
        sx={{
          left: "50%",
        }}
      >
        <Typography variant="h4">Contact me</Typography>
        <Typography variant="body1">
          If you have any questions or feedback, feel free to contact me using
          the form, or write me an email at: <br />
          <a href="mailto:kernius.survila@gmail.com">
            kernius.survila@gmail.com
          </a>
        </Typography>
      </ContactDetailsContainer>
      <ContactFormContainer onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            width: "100%",
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
            },
          }}
        >
          <InbestInput
            value={values.name}
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
          />
          <InbestInput
            value={values.email}
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
        </Box>
        <InbestInput
          value={values.message}
          name="message"
          placeholder="Message"
          required
          multiline
          rows={6}
          onChange={handleChange}
        />
        <InbestButton variant="outlined" text="Send" fullWidth type="submit" />
        <Box
          sx={{
            display: "flex",
            padding: "1rem",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="body2">
            P.S. This form is sadly not functional, as implementing an email
            service seemed a bit too much for this project.
            <br />
            <br />
            However, if you have any quesitons or remarks, I would love to hear
            from you, so feel free to write me an email at:{" "}
            <a href="mailto:kernius.survila@gmail.com">
              kernius.survila@gmail.com
            </a>
          </Typography>
        </Box>
      </ContactFormContainer>
    </PageInnerContainer>
  );
};

export interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

const ContactDetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "fit-content",
  boxSizing: "border-box",
  padding: "1rem",
  order: 2,
}));

const ContactFormContainer = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  width: "100%",
  boxShadow: "4px 10px 10px 2px rgba(0, 0, 0, 0.1)",
  border: "1px solid rgba(0, 0, 0, 0.15)",
  borderRadius: "1rem",
  padding: "2rem",
  justifyContent: "center",
  boxSizing: "border-box",
  backgroundColor: "white",
  height: "fit-content",
  order: 3,
  [theme.breakpoints.down("md")]: {
    padding: "1.5rem",
    order: 1,
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
  },
}));

export default ContactPage;
