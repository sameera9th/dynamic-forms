import { makeStyles, createStyles } from "@mui/styles";

export const useStyles = makeStyles(() => createStyles({
    loader: {
        display: 'flex',
        flexDirection: 'column', 
        alignItems: 'center'
      }
}));