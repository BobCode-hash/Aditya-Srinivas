'use client';
import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';

interface IFormInput {
  name: string;
  email: string;
  clientLocation: string;
  budget: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const [open, setOpen] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          apikey: 'YOUR_WEB3FORMS_API_KEY', // Replace with your actual API key
          ...data,
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
        reset();
      } else {
        setIsSuccess(false);
      }
    } catch (error) {
      setIsSuccess(false);
      console.error(error);
    } finally {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          Contact Me
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                label="Name"
                {...register('name', { required: 'Name is required' })}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                fullWidth
                label="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                label="Client Location"
                {...register('clientLocation')}
              />
              <TextField
                fullWidth
                label="Budget"
                {...register('budget')}
              />
            </Box>
            <TextField
              fullWidth
              label="Subject"
              {...register('subject', { required: 'Subject is required' })}
              error={!!errors.subject}
              helperText={errors.subject?.message}
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              {...register('message', { required: 'Message is required' })}
              error={!!errors.message}
              helperText={errors.message?.message}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={isSuccess ? 'success' : 'error'} sx={{ width: '100%' }}>
            {isSuccess ? 'Message sent successfully!' : 'Failed to send message.'}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactForm;
