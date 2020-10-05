import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // minWidth: 575,
  },
  control: {
    padding: theme.spacing(2),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  formControl: {
    margin: theme.spacing(3),
  }
})
);


export default function Main() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    AasiyaJayavant: {status: true, text: 'Aasiya Jayavant', key:'AasiyaJayavant'},
    LuvleenLawrence: {status: true, text: 'LuvleenLawrence', key:'LuvleenLawrence'},
    ReyMibourne: {status: true, text: 'Rey Mibourne', key:'ReyMibourne'},
    CaylaBrister: {status: false, text: 'Cayla Brister', key:'CaylaBrister'},
  });

  const handleChange = (event) => {
    let checkDet = event.target.name;
    setState({...state, [event.target.name]: {...state.[checkDet], status: event.target.checked}});
  };

  const handleInputhange = (data) => {
    let checkDet = data.key;
    setState({...state, [checkDet]: {...state.[checkDet], status: false}});
  };


  const {AasiyaJayavant, LuvleenLawrence, ReyMibourne, CaylaBrister} = state;

  return (
    <>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.root} variant="outlined">
                <CardContent>

                  {/*----------- Portugal Data ----------- */}
                  <FormControl component="fieldset" className={classes.formControl}>
                    <Typography variant="h6" gutterBottom>
                      Portugal
                  </Typography>

                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked={AasiyaJayavant.status} onChange={handleChange} color="primary" name={AasiyaJayavant.key} />}
                        label={AasiyaJayavant.text}
                      />
                      <FormControlLabel
                        control={<Checkbox checked={LuvleenLawrence.status} onChange={handleChange} color="primary" name={LuvleenLawrence.key} />}
                        label={LuvleenLawrence.text}
                      />
                      <FormControlLabel
                        control={<Checkbox checked={ReyMibourne.status} onChange={handleChange} color="primary" name={ReyMibourne.key} />}
                        label={ReyMibourne.text}
                      />
                      <FormControlLabel
                        control={<Checkbox checked={CaylaBrister.status} onChange={handleChange} color="primary" name={CaylaBrister.key} />}
                        label={CaylaBrister.text}
                      />
                    </FormGroup>
                  </FormControl>

                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Portugal
                  </Typography>
                    {Object.values(state).map((data, i) => {
                      if(data.status)
                      return (
                        <FormControl key={i}  style={{margin: '0.7rem', padding: '0.4rem'}} data={data} className='inpShow'>
                        <Input
                          endAdornment={
                            <InputAdornment position="end">
                              <IconButton  onClick={()=> handleInputhange(data)} >
                                <ClearIcon />
                              </IconButton>
                            </InputAdornment>
                          }
                          defaultValue={data.text}
                          disabled
                        />
                    </FormControl>
                      )
                    })}

                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />
      {/* <LightBulbIcon className={classes.lightBulb} />  */}
    </>
  );
}
