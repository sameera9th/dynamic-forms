import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles(() => createStyles({
  loader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  gridFrameRight: {
    border: '1px solid black',
    padding: 20
  },
  gridFrameLeft: {
    border: '1px solid black',
    borderRightColor: 'transparent',
    padding: 20
  }
}));