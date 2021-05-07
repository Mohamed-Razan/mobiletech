import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: 250,
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9 
  },
  cardActions: {
  },
  cardContent: {
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));
