'use client';

import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { FaDiscord } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

interface IFormInput {
  name: string;
  email: string;
  location: string;
  budget: string;
  subject: string;
  message: string;
}

export default function ContactMeForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };
  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        borderRadius: 3,
        p: { xs: 3, md: 6 },
        maxWidth: '1200px',
        mx: 'auto',
        mt: 6,
      }}
    >
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
        {/* LEFT SIDE */}
        <Box>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Let’s discuss your Project
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            There are many variations of passages of Lorem Ipsu available, but the majority have suffered alte.
          </Typography>

          <Box display="flex" alignItems="center" gap={2} mb={2}>
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundColor: (theme) => theme.palette.primary.main,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              📧
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                My Email:
              </Typography>
              <Typography fontWeight="bold">mymail@mail.com</Typography>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Box
              sx={{
                width: 40,
                height: 40,
                backgroundColor: (theme) => theme.palette.primary.main,
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              📞
            </Box>
            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Call Me Now:
              </Typography>
              <Typography fontWeight="bold">00–1234 00000</Typography>
            </Box>
          </Box>

          <Box mt={4} display="flex" gap={2}>
            <IconButton sx={{ color: (theme) => theme.palette.primary.main }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: (theme) => theme.palette.primary.main }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: (theme) => theme.palette.primary.main }}>
              <LinkedInIcon />
            </IconButton>
            <IconButton sx={{ color: (theme) => theme.palette.primary.main }}>
              <FaDiscord />
            </IconButton>
          </Box>
        </Box>

        {/* RIGHT SIDE - FORM */}
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Typography color="text.secondary" mb={3}>
            There are many variations of passages of Lorem Ipsu available, but the majority have suffered alte.
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2 }}>
            <TextField
              label="Name*"
              fullWidth
              variant="standard"
              {...register('name', { required: 'Name is required' })}
              error={!!errors.name}
              helperText={errors.name?.message as string}
              sx={{ '& label.Mui-focused': { color: (theme) => theme.palette.primary.main }, '& .MuiInput-underline:after': { borderBottomColor: (theme) => theme.palette.primary.main } }}
            />
            <TextField
              label="Email*"
              fullWidth
              variant="standard"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Entered value does not match email format',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message as string}
              sx={{ '& label.Mui-focused': { color: (theme) => theme.palette.primary.main }, '& .MuiInput-underline:after': { borderBottomColor: (theme) => theme.palette.primary.main } }}
            />
            <TextField
              label="Location"
              fullWidth
              variant="standard"
              {...register('location')}
              sx={{ '& label.Mui-focused': { color: (theme) => theme.palette.primary.main }, '& .MuiInput-underline:after': { borderBottomColor: (theme) => theme.palette.primary.main } }}
            />
            <TextField
              label="Budget*"
              fullWidth
              variant="standard"
              {...register('budget', { required: 'Budget is required' })}
              error={!!errors.budget}
              helperText={errors.budget?.message as string}
              sx={{ '& label.Mui-focused': { color: (theme) => theme.palette.primary.main }, '& .MuiInput-underline:after': { borderBottomColor: (theme) => theme.palette.primary.main } }}
            />
            <TextField
              label="Subject*"
              fullWidth
              variant="standard"
              {...register('subject', { required: 'Subject is required' })}
              error={!!errors.subject}
              helperText={errors.subject?.message as string}
              sx={{ '& label.Mui-focused': { color: (theme) => theme.palette.primary.main }, '& .MuiInput-underline:after': { borderBottomColor: (theme) => theme.palette.primary.main } }}
            />
            <TextField
              label="Message*"
              fullWidth
              multiline
              rows={4}
              variant="standard"
              {...register('message', { required: 'Message is required' })}
              error={!!errors.message}
              helperText={errors.message?.message as string}
              sx={{ gridColumn: '1 / -1' }}
            />
          </Box>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              sx={{
                bgcolor: (theme) => theme.palette.primary.main,
                color: 'white',
                px: 4,
                py: 1,
                borderRadius: 2,
                textTransform: 'none',
                mt: 2,
              }}
            >
              Submit
            </Button>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
