import React from 'react';
import { withFormik } from 'formik';
import Yup from 'yup';
import { Typography, withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CustomizedInputs from '../components/CustomizedInputs';
import Customizedbutton from '../components/Customizedbutton';

const styles = (theme) => ({
  card: {
    maxWidth: 600,
    marginTop: 60
  },
  actions: {
    justifyContent: 'center'
  },
  divcontainer: {
    display: 'Flex',
    justifyContent: 'center',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: 'url(https://images.unsplash.com/photo-1569982175971-d92b01cf8694?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80)',
    backgroundRepeat: 'no-repeat',
  },
});
const form = props =>
{
  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  return (
    <div className={classes.divcontainer}>
      <form onSubmit={handleSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <Typography component="h2" variant="h4">Registration</Typography>
            <CustomizedInputs
              id='userName'
              label='User Name'
              value={values.userName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.userName ? errors.userName : ''}
              error={touched.userName && Boolean(errors.userName)}
              margin='dense'
              variant='outlined'
            />
            <CustomizedInputs
              id='password'
              label='Password'
              type='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.password ? errors.password : ''}
              error={touched.password && Boolean(errors.password)}
              margin='dense'
              variant='outlined'
            />
            <CustomizedInputs
              id='firstName'
              label='First Name'
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.firstName ? errors.firstName : ''}
              error={touched.firstName && Boolean(errors.firstName)}
              margin='dense'
              variant='outlined'
            />
            <CustomizedInputs
              id='lastName'
              label='Last Name'
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.lastName ? errors.lastName : ''}
              error={touched.lastName && Boolean(errors.lastName)}
              margin='dense'
              variant='outlined'
            />
            <CustomizedInputs
              id='address1'
              label='Address line 1'
              value={values.address1}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.address1 ? errors.address1 : ''}
              error={touched.address1 && Boolean(errors.address1)}
              margin='dense'
              variant='outlined'
            />
            <CustomizedInputs
              id='address2'
              label='Address line2'
              value={values.address2}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.address2 ? errors.address2 : ''}
              error={touched.address2 && Boolean(errors.address2)}
              margin='dense'
              variant='outlined'
            />

            <CustomizedInputs
              id='country'
              label='Country'
              value={values.country}
              onChange={handleChange}
              helperText={touched.country ? errors.country : ''}
              error={touched.country && Boolean(errors.country)}
              margin='dense'
              variant='outlined'
            >

            </CustomizedInputs>
            <CustomizedInputs
              id='state'
              label='State'
              value={values.state}
              onChange={handleChange}
              helperText={touched.state ? errors.state : ''}
              error={touched.state && Boolean(errors.state)}
              margin='dense'
              variant='outlined'
            >

            </CustomizedInputs>
            <CustomizedInputs
              id='pincode'
              label='PinCode'
              value={values.pincode}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.pincode ? errors.pincode : ''}
              error={touched.pincode && Boolean(errors.pincode)}
              margin='dense'
              variant='outlined'
            />



            <Typography>Choose a profile picture</Typography>
            <CustomizedInputs
              id='profile'
              type='file'
              InputProps={{ disableUnderline: true, accept: 'image/*' }}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={touched.profile ? errors.profile : ''}
              error={touched.profile && Boolean(errors.profile)}
              margin='dense'
            />
          </CardContent>
          <CardActions className={classes.actions}>
            <Customizedbutton text='Submit' type='submit' color='primary' variant="contained" disabled={isSubmitting}>
            </Customizedbutton>
            <Customizedbutton text='Clear' color='secondary' variant="contained" onClick={handleReset}>

            </Customizedbutton>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

const Form = withFormik({
  mapPropsToValues: ({
    userName,
    firstName,
    lastName,
    address1,
    address2,
    country,
    state,
    pincode,
    password,
    profile
  }) =>
  {
    return {
      userName: userName || '',
      password: password || '',
      firstName: firstName || '',
      lastName: lastName || '',
      address1: address1 || '',
      address2: address2 || '',
      country: country || '',
      state: state || '',
      pincode: pincode || '',
      profile: profile || '',
    };
  },

  validationSchema: Yup.object().shape({
    userName: Yup.string().required('Please enter username'),
    password: Yup.string()
      .min(8, 'Password must contain at least 6 characters')
      .required('Please enter password'),
    firstName: Yup.string().required('Please enter first Name'),
    lastName: Yup.string().required('Please enter last Name'),
    address1: Yup.string().required('Please enter address'),
    address2: Yup.string().required('Please enter address'),
    country: Yup.string().required('Select your Country '),
    state: Yup.string().required('Select your State '),
    pincode: Yup.string()
      .min(6, 'Pincode must contain at least 6 characters')
      .required('Please enter Pincode'),

    profile: Yup.mixed().required()

  }),

  handleSubmit: (values, { setSubmitting }) =>
  {
    console.log(values)
    setTimeout(() =>
    {
      alert('Registerd successfully');
      setSubmitting(false);
    }, 1000);
  }
})(form);



export default withStyles(styles)(Form);
